import React, {useEffect, useState, useCallback} from 'react';
import {useIntl} from '../../lib/tw-use-intl.jsx';
import api from '../api';
import {useUser} from '../UserContext.jsx';
import NewsItem from '../components/NewsItem.jsx';
import Button from '../components/ui/Button.jsx';
import useLatest from '../use-latest.js';
import {useCommunityIntl} from '../i18n.jsx';
import styles from './News.module.css';

const newsPollReady = (category, options) =>
    category !== 'poll' || options.filter(option => option.trim()).length >= 2;

const newsLinkReady = (label, url) => {
    const trimmedLabel = label.trim();
    const trimmedUrl = url.trim();
    if (!trimmedLabel && !trimmedUrl) return true;
    return Boolean(trimmedLabel) && (/^https:\/\/\S+$/i.test(trimmedUrl) || /^\/(?!\/)/.test(trimmedUrl));
};

const News = () => {
    const intl = useIntl();
    const {t: ct} = useCommunityIntl();
    const {user} = useUser();
    const viewerName = (user && user.username) || '';
    const [items, setItems] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('update');
    const [linkLabel, setLinkLabel] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [pollOptions, setPollOptions] = useState(['', '']);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState(null);
    const [loadFailed, setLoadFailed] = useState(false);
    const beginLoad = useLatest();

    const load = useCallback((reset = true) => {
        const fresh = beginLoad();
        if (reset) setItems(null);
        setLoadFailed(false);
        api.news()
            .then(fresh(data => setItems(data.news || [])))
            .catch(fresh(() => setLoadFailed(true)));
    }, [beginLoad, viewerName]);

    useEffect(load, [load]);

    const submit = async event => {
        event.preventDefault();
        const options = pollOptions.map(option => option.trim()).filter(Boolean);
        if (!title.trim() || !body.trim() || busy) return;
        if (!newsPollReady(category, pollOptions)) {
            setError(ct('news.minTwoPollOptions', 'Add at least two poll options.'));
            return;
        }
        if (!newsLinkReady(linkLabel, linkUrl)) {
            setError(ct('news.invalidLink', 'Add both a button label and a valid https:// or internal / link.'));
            return;
        }
        setBusy(true);
        setError(null);
        try {
            await api.postNews({
                title: title.trim(),
                body: body.trim(),
                category,
                linkLabel: linkLabel.trim(),
                linkUrl: linkUrl.trim(),
                options
            });
            setTitle('');
            setBody('');
            setCategory('update');
            setLinkLabel('');
            setLinkUrl('');
            setPollOptions(['', '']);
            load(false);
        } catch (e) {
            setError(e.message || intl.formatMessage({
                id: 'mw.community.news.postFailed',
                defaultMessage: 'Could not post update.'
            }));
        } finally {
            setBusy(false);
        }
    };

    return (
        <main className={styles.page}>
            <h1>{intl.formatMessage({
                id: 'mw.community.news.title',
                defaultMessage: 'News and updates'
            })}</h1>

            {user && user.isAdmin ? (
                <form
                    className={styles.composer}
                    onSubmit={submit}
                >
                    <input
                        className={styles.titleInput}
                        placeholder={intl.formatMessage({
                            id: 'mw.community.news.titlePlaceholder',
                            defaultMessage: 'Update title'
                        })}
                        value={title}
                        disabled={busy}
                        maxLength={120}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        className={styles.bodyInput}
                        placeholder={intl.formatMessage({
                            id: 'mw.community.news.bodyPlaceholder',
                            defaultMessage: 'What changed?'
                        })}
                        value={body}
                        disabled={busy}
                        maxLength={5000}
                        onChange={e => setBody(e.target.value)}
                    />
                    <div className={styles.composerRow}>
                        <label>
                            <span>{ct('news.postType', 'Post type')}</span>
                            <select
                                value={category}
                                disabled={busy}
                                onChange={event => setCategory(event.target.value)}
                            >
                                <option value="update">{ct('news.typeUpdate', 'Update')}</option>
                                <option value="release">{ct('news.typeRelease', 'Release')}</option>
                                <option value="event">{ct('news.typeEvent', 'Event')}</option>
                                <option value="poll">{ct('news.typePoll', 'Poll')}</option>
                                <option value="general">{ct('news.typeGeneral', 'General')}</option>
                            </select>
                        </label>
                        <label>
                            <span>{ct('news.buttonLabel', 'Button label')}</span>
                            <input
                                value={linkLabel}
                                disabled={busy}
                                maxLength={60}
                                placeholder={ct('news.readMore', 'Read more')}
                                onChange={event => setLinkLabel(event.target.value)}
                            />
                        </label>
                        <label>
                            <span>{ct('news.buttonLink', 'Button link')}</span>
                            <input
                                value={linkUrl}
                                disabled={busy}
                                maxLength={500}
                                placeholder={ct('news.linkPlaceholder', 'https:// or /project/...')}
                                onChange={event => setLinkUrl(event.target.value)}
                            />
                        </label>
                    </div>
                    {category === 'poll' ? (
                        <fieldset className={styles.pollEditor} disabled={busy}>
                            <legend>{ct('news.pollOptions', 'Poll options')}</legend>
                            {pollOptions.map((option, index) => (
                                <div key={index}>
                                    <input
                                        value={option}
                                        maxLength={120}
                                        placeholder={ct('news.optionPlaceholder', 'Option {n}').replace('{n}', index + 1)}
                                        onChange={event => setPollOptions(current => current.map(
                                            (value, optionIndex) => (optionIndex === index ? event.target.value : value)
                                        ))}
                                    />
                                    {pollOptions.length > 2 ? (
                                        <button
                                            type="button"
                                            onClick={() => setPollOptions(current => current.filter(
                                                (value, optionIndex) => optionIndex !== index
                                            ))}
                                        >{ct('news.remove', 'Remove')}</button>
                                    ) : null}
                                </div>
                            ))}
                            {pollOptions.length < 6 ? (
                                <button
                                    type="button"
                                    onClick={() => setPollOptions(current => [...current, ''])}
                                >{ct('news.addOption', 'Add option')}</button>
                            ) : null}
                        </fieldset>
                    ) : null}
                    {error ? <div className={styles.error}>{error}</div> : null}
                    <Button
                        variant="primary"
                        className={styles.submit}
                        type="submit"
                        disabled={busy || !title.trim() || !body.trim()}
busy={busy}
                        busyLabel={ct('news.posting', 'Posting…')}
                    >{intl.formatMessage({
                        id: 'mw.community.news.postUpdate',
                        defaultMessage: 'Post update'
                    })}</Button>
                </form>
            ) : null}

            {loadFailed ? (
                <p className={styles.status}>
{intl.formatMessage({
                        id: 'mw.community.news.couldNotLoad',
                        defaultMessage: 'Couldn\'t load.'
                    })}{' '}
                    <Button onClick={() => load(true)}>{intl.formatMessage({
                        id: 'mw.community.news.tryAgain',
                        defaultMessage: 'Try again'
                    })}</Button>
                </p>
            ) : items === null ? (
                <p className={styles.status}>{intl.formatMessage({
                    id: 'mw.community.news.loading',
                    defaultMessage: 'Loading…'
                })}</p>
            ) : items.length ? (
                <div className={styles.list}>
                    {items.map(item => (
                        <NewsItem
                            key={item.id}
                            item={item}
                            onChanged={() => load(false)}
                        />
                    ))}
                </div>
            ) : (
                <p className={styles.status}>{intl.formatMessage({
                    id: 'mw.community.news.noUpdates',
                    defaultMessage: 'No updates posted yet.'
                })}</p>
            )}
        </main>
    );
};

export {newsPollReady, newsLinkReady};
export default News;
