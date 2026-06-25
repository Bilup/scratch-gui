import React from 'react';
import render from '../app-target';
import styles from './donate.css';

import {APP_NAME} from '../../lib/constants/brand';
import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';

applyGuiColors(detectTheme());
document.documentElement.lang = 'en';

const Donate = () => (
    <main className={styles.main}>
        <header className={styles.headerContainer}>
            <h1 className={styles.headerText}>
                Donate
            </h1>
        </header>
        <section>
            <p>
                We do not consider accepting any <strong>monetary</strong> support.
            </p>
            <p>
                However, you can support us in the following ways:
            </p>
        </section>
        <section>
            <h2>AI API Key</h2>
            <p>
                You can purchase an API Key and send it to us.
            </p>
            <p>
                Note: Do not expose your API Key publicly, as it may cause security issues.
            </p>
        </section>
        <section>
            <h2>Documentation & Extensions</h2>
            <p>
                You can write documentation or extensions for Bilup, and pull request it.
            </p>
        </section>
        <section>
            <h2>Join Us</h2>
            <p>
                You can join the Bilup development team to help improve Bilup.
            </p>
        </section>
        <section>
            <p>
                For more information, please <a href="mailto:support@bilup.org">contact us</a>.
            </p>
        </section>
    </main>
);

render(<Donate />);
