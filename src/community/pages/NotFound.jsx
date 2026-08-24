/* eslint-disable max-len */
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import setPageMeta from '../page-meta.js';
import {useCommunityIntl} from '../i18n.jsx';
import styles from './InfoPage.module.css';

const NotFound = () => {
    const {t} = useCommunityIntl();
    useEffect(() => setPageMeta({title: t('notFound.title')}), []);
    return <main className={`${styles.page} ${styles.notFound}`}><div><h1>404</h1><h2>{t('notFound.message')}</h2><p><Link className={styles.link} to="/">{t('notFound.home')}</Link></p></div></main>;
};

export default NotFound;
