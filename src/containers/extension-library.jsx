import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import log from '../lib/utils/log';

import extensionLibraryContent, {
    galleryError,
    galleryLoading,
    galleryMore
} from '../lib/libraries/extensions/index.jsx';
import extensionTags from '../lib/libraries/tw-extension-tags';
import {getVanillaPalette} from '../lib/mw-vanilla-palette';

import LibraryComponent from '../components/tw-extension-library/extension-library.jsx';
import extensionIcon from '../components/action-menu/icon--sprite.svg';

const messages = defineMessages({
    extensionTitle: {
        defaultMessage: 'Choose an Extension',
        description: 'Heading for the extension library',
        id: 'gui.extensionLibrary.chooseAnExtension'
    },
    customGalleryPrompt: {
        defaultMessage: 'Enter custom extension gallery URL:',
        description: 'Prompt for entering custom extension gallery URL',
        id: 'tw.customExtensionGallery.prompt'
    }
});

const toLibraryItem = extension => {
    if (typeof extension === 'object') {
        return ({
            rawURL: extension.iconURL || extensionIcon,
            ...extension
        });
    }
    return extension;
};

const translateGalleryItem = (extension, locale) => ({
    ...extension,
    name: extension.nameTranslations[locale] || extension.name,
    description: extension.descriptionTranslations[locale] || extension.description
});

let cachedGallery = null;
let cachedSourceStatuses = {};
let cachedCustomSources = []; // [{id, name, url}]
let galleryUpdateListeners = [];
let customSourceCounter = 0;

const addGalleryUpdateListener = listener => {
    galleryUpdateListeners.push(listener);
    return () => {
        const index = galleryUpdateListeners.indexOf(listener);
        if (index > -1) {
            galleryUpdateListeners.splice(index, 1);
        }
    };
};

// 广播快照给所有已挂载的扩展库弹窗；每次生成新引用，
// 确保 PureComponent 的浅比较能识别到变化并重新渲染
const notifyListeners = () => {
    const snapshot = {
        gallery: cachedGallery ? [...cachedGallery] : cachedGallery,
        sourceStatuses: {...cachedSourceStatuses},
        customSources: [...cachedCustomSources]
    };
    galleryUpdateListeners.forEach(listener => listener(snapshot));
};

const updateGallery = newGallery => {
    cachedGallery = newGallery;
    notifyListeners();
};

// 安全地解析相对/绝对 URL，解析失败时原样返回
const safeResolveURL = (value, base) => {
    if (!value) {
        return null;
    }
    try {
        return new URL(value, base).href;
    } catch (error) {
        return value;
    }
};

// 把自定义库返回的元数据规范化为扩展库内部格式
// 兼容 {extensions: [...]} 与数组两种形态；图标/JS/文档相对路径按库 URL 解析
// 字段缺失时做降级，保证扩展一定能被 isExtension 保留并正常展示
const normalizeCustomExtension = (extension, source, index) => {
    const baseURL = new URL(source.url);
    const js = extension.extensionURL || extension.extensionUrl || extension.js || extension.url;
    const image = extension.iconURL || extension.icon || extension.image || extension.banner;
    const id = extension.id || extension.slug || extension.name || `extension-${index + 1}`;
    return {
        name: extension.name || extension.id || extension.slug || `Extension ${index + 1}`,
        nameTranslations: extension.nameTranslations || {},
        description: extension.description || extension.desc || '',
        descriptionTranslations: extension.descriptionTranslations || {},
        extensionId: id,
        extensionURL: safeResolveURL(js, baseURL) ||
            safeResolveURL(extension.slug ? `${extension.slug}.js` : null, baseURL),
        iconURL: image ? safeResolveURL(image, baseURL) : 'https://extensions.bilup.org/images/unknown.svg',
        tags: [source.id],
        source: source.id,
        credits: extension.credits || [],
        docsURI: extension.docs ? safeResolveURL(extension.docs, baseURL) : null,
        incompatibleWithScratch: true,
        featured: true
    };
};

// 独立加载一个自定义拓展库：解析元数据 → 合并进 gallery → 更新状态灯。
// 不依赖整体 fetchLibrary 重拉，因此不受内置源网络时序影响，能立即显示扩展。
const fetchCustomSource = async id => {
    const source = cachedCustomSources.find(cs => cs.id === id);
    if (!source) {
        return;
    }
    try {
        const res = await fetch(source.url);
        if (!res.ok) {
            throw new Error(`HTTP status ${res.status}`);
        }
        const data = await res.json();
        const rawExtensions = Array.isArray(data) ? data : (data.extensions || []);
        const extensions = rawExtensions.map((extension, index) =>
            normalizeCustomExtension(extension, source, index));
        // 先移除该源旧扩展，再加入新扩展，避免重复
        cachedGallery = [...(cachedGallery || []).filter(item => item.source !== id), ...extensions];
        cachedSourceStatuses[id] = 'loaded';
    } catch (error) {
        console.warn(`Failed to load custom gallery "${source.name}":`, error);
        cachedSourceStatuses[id] = 'error';
    }
    notifyListeners();
};

// 注册一个自定义拓展库；相同 URL 复用已有 id，避免重复添加
// 1) 立即广播快照（新引用），侧边栏标签马上出现（黄灯 loading）
// 2) 独立加载该库，完成后广播（绿灯 + 扩展卡片 / 红灯 + 失败提示）
const addCustomSource = source => {
    const existing = cachedCustomSources.find(cs => cs.url === source.url);
    const id = existing ? existing.id : `custom_${++customSourceCounter}`;
    if (existing) {
        existing.name = source.name;
    } else {
        cachedCustomSources.push({id, name: source.name, url: source.url});
    }
    cachedSourceStatuses[id] = 'loading';
    notifyListeners();
    fetchCustomSource(id).catch(error => log.error(error));
    return id;
};

// 删除一个自定义拓展库：移除注册、清掉状态与对应扩展，
// 立即广播（标签消失），再重拉一次所有源收尾
const removeCustomSource = id => {
    const index = cachedCustomSources.findIndex(cs => cs.id === id);
    if (index === -1) {
        return;
    }
    cachedCustomSources.splice(index, 1);
    delete cachedSourceStatuses[id];
    if (cachedGallery) {
        cachedGallery = cachedGallery.filter(item => item.source !== id);
    }
    notifyListeners();
    fetchLibrary().catch(error => log.error(error));
};

const fetchLibrary = async () => {
    const emptyBanner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBA3y7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BUNTVQYqg4jIKAX08EGIIUByaVEZhMXIwMDAIMCgxeDHUMmwiuEBozRjFOM8xqdMhkwNTJeYNZgbme+y2LDMY2VmzWa9yubEtoldhX0mhwBHJycrZzMXM1cbNzf3RB4pnqW8xryH+IL5nvFXCwgJrBZ0E3wk1CisKHxYJF2UV3SrWJw4p/hWiRRJYcmjUhXSutJPZObIhsoJyp2V71HwUeRVvKA0RTlKRUnltepWtUZ1Pw1Zjbea+7QmaqfqWOsK6b7SO6I/36DGMMrI0ljS+LfJPdPDZivM+y0qLBOtfKwtbFRtRexY7L7aP3e47XjB6ZjzXpetruvdVrov9VjkudBrgfdCn8W+y/xW+a8P2Bq4N+hY8PmQW6HPwr5EMEUKRilFG8e4xUbF5cW3JMxO3Jx0Nvl5KlOaXLpNRlRmVdas7D059/KY8tULfAqLi2YXHy55WyZR7lJRWDmv6mz131q9uvj6SQ3HGn83G7Skt85ru94h2Ond1d59uJehz76/bsK+if8nO05pnXpiOu+M4JmzZj2aozW3ZN6+BVwLwxYtXvxxqcOyCcsfrjRe1br65lrddU3rb2402NSx+cFWq21Tt3/Y6btr1R6Oven7jh9QP9h56PURv6Obj4ufqD355LT3mS3nZM+3X/h0Ke7yqasW15bdEL3ZeuvrnfS7N+/7PDjwyPTx6qeKz2a+EHzZ9Zr5Td3bn+9LP3z6VPD53de8b+9+5P/88Lv4z7d/Vf//AwAqvx2K829RWwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAEUlEQVR42mL4zwAAAAD//wMAAgEBAJlUum0AAAAASUVORK5CYII=";

    const allExtensions = [];
    const sourceStatuses = {};

    const report = () => {
        // 只管理网络源；自定义库由 fetchCustomSource 独立加载，
        // 这里保留已加载的自定义扩展，避免整体重拉覆盖/清空它们
        const customExtensions = (cachedGallery || [])
            .filter(item => item.source && item.source.indexOf('custom_') === 0);
        cachedGallery = [...allExtensions, ...customExtensions];
        cachedSourceStatuses = {...cachedSourceStatuses, ...sourceStatuses};
        notifyListeners();
    };

    const fetchAndAdd = async (sourceName, fetchFn) => {
        sourceStatuses[sourceName] = 'loading';
        report();
        try {
            const extensions = await fetchFn();
            allExtensions.push(...extensions);
            sourceStatuses[sourceName] = 'loaded';
        } catch (error) {
            console.warn(`Failed to load ${sourceName} extensions:`, error);
            sourceStatuses[sourceName] = 'error';
        }
        report();
    };

    // 并行加载所有扩展源，但每个源加载完成后立即更新
    await Promise.all([
        fetchAndAdd('tw', async () => {
            const twRes = await fetch('https://extensions.turbowarp.org/generated-metadata/extensions-v0.json');
            if (!twRes.ok) {
                console.warn(`TurboWarp extensions: HTTP status ${twRes.status}`);
                return [];
            }
            const twData = await twRes.json();
            return twData.extensions.map(extension => ({
                name: extension.name,
                nameTranslations: extension.nameTranslations || {},
                description: extension.description,
                descriptionTranslations: extension.descriptionTranslations || {},
                extensionId: extension.id,
                extensionURL: `https://extensions.turbowarp.org/${extension.slug}.js`,
                iconURL: `https://extensions.turbowarp.org/${extension.image || 'images/unknown.svg'}`,
                source: 'tw',
        tags: ['tw'],
                credits: [
                    ...(extension.by || []),
                    ...(extension.original || [])
                ].map(credit => {
                    if (credit.link) {
                        return (
                            <a
                                href={credit.link}
                                target="_blank"
                                rel="noreferrer"
                                key={credit.name}
                            >
                                {credit.name}
                            </a>
                        );
                    }
                    return credit.name;
                }),
                docsURI: extension.docs ? `https://extensions.turbowarp.org/${extension.slug}` : null,
                samples: extension.samples ? extension.samples.map(sample => ({
                    href: `${process.env.ROOT}editor?project_url=https://extensions.turbowarp.org/samples/${encodeURIComponent(sample)}.sb3`,
                    text: sample
                })) : null,
                incompatibleWithScratch: true,
                featured: true
            }));
        }),
        fetchAndAdd('mistium', async () => {
            const mistiumRes = await fetch('https://extensions.mistium.com/generated-metadata/extensions-v0.json');
            if (!mistiumRes.ok) {
                console.warn(`Mistium extensions: HTTP status ${mistiumRes.status}`);
                return [];
            }
            const mistiumData = await mistiumRes.json();
            return mistiumData.extensions
                .filter(ext => ext.featured)
                .map(extension => ({
                    name: extension.name,
                    nameTranslations: extension.nameTranslations || {},
                    description: extension.description,
                    descriptionTranslations: extension.descriptionTranslations || {},
                    extensionId: extension.id,
                    extensionURL: `https://extensions.mistium.com/featured/${extension.name}.js`,
                    iconURL: extension.image ? `https://extensions.mistium.com/${extension.image}` : emptyBanner,
                    source: 'mistium',
            tags: ['mistium'],
                    credits: [
                        ...(extension.by || []),
                        ...(extension.original || [])
                    ].map(credit => {
                        if (credit.link) {
                            return (
                                <a
                                    href={credit.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={credit.name}
                                >
                                    {credit.name}
                                </a>
                            );
                        }
                        return credit.name;
                    }),
                    docsURI: null,
                    samples: extension.samples ? extension.samples.map(sample => ({
                        href: `${process.env.ROOT}editor?project_url=https://extensions-mistium.pages.dev/samples/${encodeURIComponent(sample)}.sb3`,
                        text: sample
                    })) : null,
                    incompatibleWithScratch: true,
                    featured: true
                }));
        }),
        fetchAndAdd('sharkpool', async () => {
            const sharkpoolRes = await fetch('https://sharkpools-extensions.vercel.app/Gallery%20Files/Extension-Keys.json');
            if (!sharkpoolRes.ok) {
                console.warn(`SharkPool extensions: HTTP status ${sharkpoolRes.status}`);
                return [];
            }
            const sharkpoolData = await sharkpoolRes.json();

            const rawExtensions = sharkpoolData.extensions;
            let normalizedExtensions = [];

            if (Array.isArray(rawExtensions)) {
                normalizedExtensions = rawExtensions;
            } else if (rawExtensions && typeof rawExtensions === 'object') {
                normalizedExtensions = Object.entries(rawExtensions).map(
                    ([key, value]) => ({
                        id: value.id ?? key,
                        name: value.name ?? key,
                        ...value
                    })
                );
            } else {
                console.warn('[SharkPools] Invalid extensions format:', rawExtensions);
                return [];
            }

            console.log('[SharkPools] Normalized extensions:', normalizedExtensions);

            return normalizedExtensions
                .filter(ext => !ext.isDeprecated)
                .map(extension => ({
                    name: extension.name,
                    nameTranslations: extension.nameTranslations || {},
                    description: extension.description || extension.desc,
                    descriptionTranslations: extension.descriptionTranslations || {},
                    extensionId: extension.id,
                    extensionURL: `https://sharkpools-extensions.vercel.app/extension-code/${extension.url}`,
                    iconURL: extension.banner ? `https://sharkpools-extensions.vercel.app/extension-thumbs/${extension.banner}` : emptyBanner,
                    tags: ['sharkpool'],
                    credits: [
                        ...(extension.by || []),
                        ...(extension.original || (extension.creator ? [{ name: extension.creator }] : []))
                    ].map(credit => {
                        if (credit.link) {
                            return (
                                <a
                                    href={credit.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={credit.name}
                                >
                                    {credit.name}
                                </a>
                            );
                        }
                        return credit.name;
                    }),
                    docsURI: null,
                    samples: null,
                    incompatibleWithScratch: true,
                    featured: true
                }));
        }),
        fetchAndAdd('bilup', async () => {
            const bilupRes = await fetch('https://extensions.bilup.org/generated-metadata/extensions-v0.json');
            if (!bilupRes.ok) {
                console.warn(`Bilup extensions: HTTP status ${bilupRes.status}`);
                return [];
            }
            const bilupData = await bilupRes.json();
            return bilupData.extensions.map(extension => ({
                name: extension.name,
                nameTranslations: extension.nameTranslations || {},
                description: extension.description,
                descriptionTranslations: extension.descriptionTranslations || {},
                extensionId: extension.id,
                extensionURL: `https://extensions.bilup.org/${extension.slug}.js`,
                iconURL: `https://extensions.bilup.org/${extension.image || 'images/unknown.svg'}`,
                tags: ['bilup'],
                credits: [
                    ...(extension.by || []),
                    ...(extension.original || [])
                ].map(credit => {
                    if (credit.link) {
                        return (
                            <a
                                href={credit.link}
                                target="_blank"
                                rel="noreferrer"
                                key={credit.name}
                            >
                                {credit.name}
                            </a>
                        );
                    }
                    return credit.name;
                }),
                docsURI: extension.docs ? `https://extensions.bilup.org/${extension.slug}` : null,
                samples: extension.samples ? extension.samples.map(sample => ({
                    href: `${process.env.ROOT}editor?project_url=https://extensions.bilup.org/samples/${encodeURIComponent(sample)}.sb3`,
                    text: sample
                })) : null,
                incompatibleWithScratch: true,
                featured: true
            }));
        }),
        fetchAndAdd('ae', async () => {
            const aeRes = await fetch('https://editors.astras.top/extensions/generated-metadata/extensions-v0.json');
            if (!aeRes.ok) {
                console.warn(`AE extensions: HTTP status ${aeRes.status}`);
                return [];
            }
            const aeData = await aeRes.json();
            return aeData.extensions
                .filter(extension => extension.id !== 'shangcloud')
                .map(extension => ({
                name: extension.name,
                nameTranslations: extension.nameTranslations || {},
                description: extension.description,
                descriptionTranslations: extension.descriptionTranslations || {},
                extensionId: extension.id,
                extensionURL: `https://editors.astras.top/extensions/${extension.slug}.js`,
                iconURL: `https://editors.astras.top/extensions/${extension.image || 'images/unknown.svg'}`,
                tags: ['ae'],
                credits: [
                    ...(extension.by || []),
                    ...(extension.original || [])
                ].map(credit => {
                    if (credit.link) {
                        return (
                            <a
                                href={credit.link}
                                target="_blank"
                                rel="noreferrer"
                                key={credit.name}
                            >
                                {credit.name}
                            </a>
                        );
                    }
                    return credit.name;
                }),
                docsURI: extension.docs ? `https://editors.astras.top/extensions/${extension.slug}` : null,
                samples: extension.samples ? extension.samples.map(sample => ({
                    href: `${process.env.ROOT}editor?project_url=https://editors.astras.top/extensions/s/${encodeURIComponent(sample)}.sb3`,
                    text: sample
                })) : null,
                incompatibleWithScratch: true,
                featured: true
            }));
        })
    ]);

    return allExtensions;
};

class ExtensionLibrary extends React.PureComponent {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleItemSelect',
            'getSourceStatus'
        ]);
        this.state = {
            gallery: cachedGallery,
            galleryError: null,
            galleryTimedOut: false,
            sourceStatuses: cachedSourceStatuses,
            customSources: cachedCustomSources
        };
    }
    
    componentDidMount() {
        // 接收模块级快照广播：添加自定义库 / fetchLibrary 进度都会触发
        this.unsubscribeGalleryUpdate = addGalleryUpdateListener(payload => {
            this.setState({
                gallery: payload.gallery,
                sourceStatuses: payload.sourceStatuses,
                customSources: payload.customSources
            });
        });
        
        // Keep the "loaded" indicator in sync while this modal is open:
        // loading or removing an extension changes isExtensionLoaded() results,
        // so re-render whenever the VM emits a relevant event. This component is
        // a PureComponent, so a no-op setState would be skipped by its shallow
        // shouldComponentUpdate; forceUpdate bypasses that check.
        this.handleExtensionChange = () => this.forceUpdate();
        const vm = this.props.vm;
        if (vm && typeof vm.on === 'function') {
            vm.on('EXTENSION_ADDED', this.handleExtensionChange);
            vm.on('EXTENSION_REMOVED', this.handleExtensionChange);
        }
        
        // 首次打开时拉取网络源；已注册的自定义库独立加载（互不阻塞）
        if (!this.state.gallery) {
            const timeout = setTimeout(() => {
                this.setState({
                    galleryTimedOut: true
                });
            }, 750);

            fetchLibrary()
                .then(() => clearTimeout(timeout))
                .catch(error => {
                    log.error(error);
                    this.setState({
                        galleryError: error
                    });
                    clearTimeout(timeout);
                });

            cachedCustomSources.forEach(source => {
                if (!cachedSourceStatuses[source.id]) {
                    fetchCustomSource(source.id).catch(error => log.error(error));
                }
            });
        }
    }
    
    componentWillUnmount() {
        if (this.unsubscribeGalleryUpdate) {
            this.unsubscribeGalleryUpdate();
        }
        const vm = this.props.vm;
        if (vm && typeof vm.off === 'function') {
            vm.off('EXTENSION_ADDED', this.handleExtensionChange);
            vm.off('EXTENSION_REMOVED', this.handleExtensionChange);
        }
    }
    getSourceStatus(tag) {
        // 内置本地数据始终可用（桌面端本地加载成功 → 蓝色）
        if (tag === 'scratch' || tag === 'rotur') {
            return 'local';
        }
        // 无状态时返回 'idle' 作为占位
        return this.state.sourceStatuses[tag] || 'idle';
    }

    handleItemSelect(item) {
        if (item.href) {
            window.open(item.href, '_blank', 'noopener,noreferrer');
            return;
        }

        const extensionId = item.extensionId;

        if (extensionId === 'custom_extension') {
            this.props.onOpenCustomExtensionModal();
            return;
        }

        if (extensionId === 'custom_extension_gallery') {
            if (this.props.onOpenCustomGalleryModal) {
                this.props.onOpenCustomGalleryModal();
            }
            return;
        }

        if (extensionId === 'procedures_enable_return') {
            if (this.props.onEnableProcedureReturns) {
                this.props.onEnableProcedureReturns();
            }

            // Switch to blocks tab after enabling returns
            if (typeof this.props.onActivateBlocksTab === 'function') {
                this.props.onActivateBlocksTab();
            }

            // Switch to My Blocks category after enabling returns (correct ID is "more")
            if (typeof this.props.onCategorySelected === 'function') {
                this.props.onCategorySelected('more');
            }
            return;
        }

        const url = item.extensionURL ? item.extensionURL : extensionId;
        if (!item.disabled) {
            if (this.props.vm.extensionManager.isExtensionLoaded(extensionId)) {
                if (typeof this.props.onCategorySelected === 'function') {
                    this.props.onCategorySelected(extensionId);
                }
            } else {
                this.props.vm.extensionManager.loadExtensionURL(url)
                    .then(() => {
                        // 实时刷新"已加载"对钩
                        this.forceUpdate();
                        if (typeof this.props.onCategorySelected === 'function') {
                            this.props.onCategorySelected(extensionId);
                        }
                    })
                    .catch(err => {
                        this.forceUpdate();
                        log.error(err);
                        // eslint-disable-next-line no-alert
                        alert(err);
                    });
            }
        }
    }
    render () {
        const vanilla = getVanillaPalette();
        let library = null;
        if (vanilla || this.state.gallery || this.state.galleryError || this.state.galleryTimedOut) {
            library = extensionLibraryContent
                .filter(extension => !vanilla || (extension.tags.includes('scratch') && !extension.extensionURL))
                .map(toLibraryItem);
            if (!vanilla) {
                library.push('---');
                if (this.state.gallery) {
                    library.push(toLibraryItem(galleryMore));
                    const locale = this.props.intl.locale;
                    library.push(
                        ...this.state.gallery
                            .filter(i => i.extensionId !== 'faceSensing')
                            .map(i => translateGalleryItem(i, locale))
                            .map(toLibraryItem)
                    );
                } else if (this.state.galleryError) {
                    library.push(toLibraryItem(galleryError));
                } else {
                    library.push(toLibraryItem(galleryLoading));
                }
            }
        }

        const vm = this.props.vm;
        const isLoaded = item => {
            if (!vm || !vm.extensionManager || !item || !item.extensionId) {
                return false;
            }
            return vm.extensionManager.isExtensionLoaded(item.extensionId);
        };

        // 已注册的自定义拓展库像内置源一样出现在左侧栏与分组中
        const customTags = this.state.customSources.map(source => ({
            tag: source.id,
            intlLabel: source.name
        }));
        const tags = [...extensionTags, ...customTags];
        const sources = [
            ['scratch', 'Scratch'],
            ['tw', 'TurboWarp'],
            ['mistium', 'Mistium'],
            ['rotur', 'Bilup Accounts'],
            ...this.state.customSources.map(source => [source.id, source.name])
        ];
        // 可删除（自定义）的标签 id 集合，用于侧边栏渲染删除按钮
        const removableTags = this.state.customSources.map(source => source.id);

        return (
            <LibraryComponent
                data={library}
                filterable
                persistableKey="extensionId"
                id="extensionLibrary"
                tags={tags}
                sources={sources}
                title={this.props.intl.formatMessage(messages.extensionTitle)}
                visible={this.props.visible}
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
                isLoaded={isLoaded}
                getSourceStatus={this.getSourceStatus}
                removableTags={removableTags}
                onRemoveCustomSource={removeCustomSource}
            />
        );
    }
}

ExtensionLibrary.propTypes = {
    intl: intlShape.isRequired,
    onActivateBlocksTab: PropTypes.func,
    onCategorySelected: PropTypes.func,
    onEnableProcedureReturns: PropTypes.func,
    onOpenCustomExtensionModal: PropTypes.func,
    onOpenCustomGalleryModal: PropTypes.func,
    onRequestClose: PropTypes.func,
    visible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired // eslint-disable-line react/no-unused-prop-types
};

export default injectIntl(ExtensionLibrary);

export {
    addCustomSource,
    removeCustomSource,
    updateGallery
};
