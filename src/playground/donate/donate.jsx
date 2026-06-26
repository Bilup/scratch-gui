import React from 'react';
import render from '../app-target';

import {APP_NAME} from '../../lib/constants/brand';
import {detectTheme} from '../../lib/themes/themePersistance';

const theme = detectTheme();
document.documentElement.setAttribute('data-theme', theme.id || (theme.isDark ? 'dark' : 'light'));
document.documentElement.lang = 'en';

const Donate = () => (
    <>
        <style>{`
            :root,
            [data-theme="dark"] {
                --bg-color: #1a1a2e;
                --text-color: #e4e4e7;
                --accent-color: #75C1C4;
                --secondary-bg: #252542;
                --card-bg: rgba(37, 37, 66, 0.8);
                --border-color: rgba(117, 193, 196, 0.2);
                --hover-bg: rgba(117, 193, 196, 0.1);
            }

            [data-theme="light"] {
                --bg-color: #f8fafc;
                --text-color: #1e293b;
                --accent-color: #75C1C4;
                --secondary-bg: #e2e8f0;
                --card-bg: rgba(255, 255, 255, 0.95);
                --border-color: rgba(117, 193, 196, 0.3);
                --hover-bg: rgba(117, 193, 196, 0.08);
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                background: var(--bg-color);
                background-image: 
                    radial-gradient(circle at 20% 80%, rgba(117, 193, 196, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(117, 193, 196, 0.03) 0%, transparent 50%),
                    radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
                background-size: 100% 100%, 100% 100%, 32px 32px;
                font-family: "Inter", system-ui, -apple-system, "Segoe UI", "Helvetica Neue", "Noto Sans", Helvetica, Arial, sans-serif;
                color: var(--text-color);
                line-height: 1.6;
                min-height: 100vh;
                padding: 2rem;
            }

            [data-theme="light"] body {
                background-image: 
                    radial-gradient(circle at 20% 80%, rgba(117, 193, 196, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(117, 193, 196, 0.05) 0%, transparent 50%),
                    radial-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px);
            }

            main {
                max-width: 700px;
                width: 100%;
                margin: 0 auto;
            }

            .card {
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                border-radius: 24px;
                padding: 3rem;
                box-shadow: 
                    0 8px 32px rgba(0, 0, 0, 0.15),
                    0 0 0 1px rgba(117, 193, 196, 0.1);
                position: relative;
                overflow: hidden;
            }

            .header {
                margin-bottom: 2rem;
                text-align: center;
            }

            h1 {
                font-size: 2.5rem;
                font-weight: 700;
                letter-spacing: -0.02em;
                margin-top: 0;
                margin-bottom: 0.5rem;
                background: linear-gradient(135deg, var(--accent-color), #98D8C8);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            section {
                margin-bottom: 2rem;
            }

            section:last-child {
                margin-bottom: 0;
            }

            h2 {
                font-size: 1.3rem;
                font-weight: 600;
                color: var(--accent-color);
                margin-bottom: 0.75rem;
                padding-bottom: 0.25rem;
                border-bottom: 2px solid var(--border-color);
            }

            p {
                margin: 0.75rem 0;
                font-weight: 450;
                color: var(--text-color);
                font-size: 1rem;
                opacity: 0.9;
            }

            strong {
                color: var(--accent-color);
            }

            a {
                color: var(--accent-color);
                text-decoration: none;
                font-weight: 600;
                border-bottom: 2px solid transparent;
                transition: all 0.25s ease;
                padding-bottom: 2px;
            }

            a:hover {
                color: #98D8C8;
                border-bottom-color: var(--accent-color);
            }

            @media (max-width: 720px) {
                body {
                    padding: 1rem;
                }

                .card {
                    padding: 2rem 1.5rem;
                    border-radius: 20px;
                }

                h1 {
                    font-size: 2rem;
                }
            }
        `}</style>
        <main>
            <div className="card">
                <div className="header">
                    <h1>{APP_NAME} Donate</h1>
                </div>
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
            </div>
        </main>
    </>
);

render(<Donate />);
