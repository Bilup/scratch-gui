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
let galleryUpdateListeners = [];

const addGalleryUpdateListener = listener => {
    galleryUpdateListeners.push(listener);
    return () => {
        const index = galleryUpdateListeners.indexOf(listener);
        if (index > -1) {
            galleryUpdateListeners.splice(index, 1);
        }
    };
};

const updateGallery = newGallery => {
    cachedGallery = newGallery;
    galleryUpdateListeners.forEach(listener => listener(newGallery));
};

const fetchLibrary = async (onProgress) => {
    const emptyBanner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBA3y7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BUNTVQYqg4jIKAX08EGIIUByaVEZhMXIwMDAIMCgxeDHUMmwiuEBozRjFOM8xqdMhkwNTJeYNZgbme+y2LDMY2VmzWa9yubEtoldhX0mhwBHJycrZzMXM1cbNzf3RB4pnqW8xryH+IL5nvFXCwgJrBZ0E3wk1CisKHxYJF2UV3SrWJw4p/hWiRRJYcmjUhXSutJPZObIhsoJyp2V71HwUeRVvKA0RTlKRUnltepWtUZ1Pw1Zjbea+7QmaqfqWOsK6b7SO6I/36DGMMrI0ljS+LfJPdPDZivM+y0qLBOtfKwtbFRtRexY7L7aP3e47XjB6ZjzXpetruvdVrov9VjkudBrgfdCn8W+y/xW+a8P2Bq4N+hY8PmQW6HPwr5EMEUKRilFG8e4xUbF5cW3JMxO3Jx0Nvl5KlOaXLpNRlRmVdas7D059/KY8tULfAqLi2YXHy55WyZR7lJRWDmv6mz131q9uvj6SQ3HGn83G7Skt85ru94h2Ond1d59uJehz76/bsK+if8nO05pnXpiOu+M4JmzZj2aozW3ZN6+BVwLwxYtXvxxqcOyCcsfrjRe1br65lrddU3rb2402NSx+cFWq21Tt3/Y6btr1R6Oven7jh9QP9h56PURv6Obj4ufqD355LT3mS3nZM+3X/h0Ke7yqasW15bdEL3ZeuvrnfS7N+/7PDjwyPTx6qeKz2a+EHzZ9Zr5Td3bn+9LP3z6VPD53de8b+9+5P/88Lv4z7d/Vf//AwAqvx2K829RWwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAEUlEQVR42mL4zwAAAAD//wMAAgEBAJlUum0AAAAASUVORK5CYII=";

    const allExtensions = [];
    const sourceStatuses = {};

    const report = () => {
        if (onProgress) {
            onProgress([...allExtensions], {...sourceStatuses});
        }
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
        fetchAndAdd('SharkPools', async () => {
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
            sourceStatuses: cachedSourceStatuses
        };
    }
    
    componentDidMount() {
        this.unsubscribeGalleryUpdate = addGalleryUpdateListener(newGallery => {
            this.setState({ gallery: newGallery });
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
        
        if (!this.state.gallery) {
            const timeout = setTimeout(() => {
                this.setState({
                    galleryTimedOut: true
                });
            }, 750);

            fetchLibrary((progressGallery, sourceStatuses) => {
                cachedGallery = progressGallery;
                cachedSourceStatuses = sourceStatuses || {};
                this.setState({
                    gallery: progressGallery,
                    sourceStatuses: cachedSourceStatuses
                });
                clearTimeout(timeout);
            })
                .catch(error => {
                    log.error(error);
                    this.setState({
                        galleryError: error
                    });
                    clearTimeout(timeout);
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
        // 内置本地数据始终可用
        if (tag === 'scratch' || tag === 'rotur') {
            return 'loaded';
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

        return (
            <LibraryComponent
                data={library}
                filterable
                persistableKey="extensionId"
                id="extensionLibrary"
                tags={extensionTags}
                title={this.props.intl.formatMessage(messages.extensionTitle)}
                visible={this.props.visible}
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
                isLoaded={isLoaded}
                getSourceStatus={this.getSourceStatus}
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
    updateGallery
};
