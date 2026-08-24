import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useIntl} from '../../lib/tw-use-intl.jsx';
import {useCommunityIntl} from '../i18n.jsx';
import {Coins, Wallet as WalletIcon, HeartHandshake, Send, ExternalLink, CalendarCheck} from 'lucide-react';
import api, {projectUrl} from '../api';
import {getAccountSummary, claimDaily} from '../../lib/rotur/client.js';
import {CREDIT_PACKS, getBillingStatus, openCreditCheckout, openBillingPortal, consumeBillingResult} from '../credits';
import {useUser} from '../UserContext.jsx';
import Button from '../components/ui/Button.jsx';
import {formatDate} from '../format';
import styles from './Wallet.module.css';

const fmtCredits = value => Math.round((Number(value) || 0) * 100) / 100;

const Wallet = () => {
    const intl = useIntl();
    const {t: ct} = useCommunityIntl();
    const {user, loading, login} = useUser();
    const viewerName = (user && user.username) || '';
    const walletContext = useRef(viewerName);
    walletContext.current = viewerName;
    const [account, setAccount] = useState(null);
    const [accountLoaded, setAccountLoaded] = useState(false);
    const [purchases, setPurchases] = useState(null);
    const [purchaseError, setPurchaseError] = useState('');
    const [purchaseAttempt, setPurchaseAttempt] = useState(0);
    const [claiming, setClaiming] = useState(false);
    const [claimMsg, setClaimMsg] = useState('');
    const [billing, setBilling] = useState(null);
    const [checkoutBusy, setCheckoutBusy] = useState(false);
    const [checkoutError, setCheckoutError] = useState('');
    const [billingResult, setBillingResult] = useState(null);
    const billingResultConsumed = useRef(false);
    const actionLocks = useRef(new Set());

    useEffect(() => {
        if (loading || !viewerName || billingResultConsumed.current) return;
        billingResultConsumed.current = true;
        const value = consumeBillingResult();
        if (value) setBillingResult({viewerName, value});
    }, [loading, viewerName]);

    useEffect(() => {
        if (!user) {
            setAccount(null);
            setAccountLoaded(false);
            setPurchases(null);
            setPurchaseError('');
            setBilling(null);
            setClaimMsg('');
            setClaiming(false);
            setCheckoutBusy(false);
            setCheckoutError('');
            return () => {};
        }
        let stale = false;
        setAccount(null);
        setAccountLoaded(false);
        setPurchases(null);
        setPurchaseError('');
        setBilling(null);
        setClaimMsg('');
        setClaiming(false);
        setCheckoutBusy(false);
        setCheckoutError('');
        getAccountSummary()
            .then(data => {
                if (stale) return;
                setAccount(data);
                setAccountLoaded(true);
            })
            .catch(() => !stale && setAccountLoaded(true));
        api.purchases()
            .then(data => !stale && setPurchases(data.purchases || []))
            .catch(() => !stale && setPurchaseError(ct('wallet.purchaseHistoryFailed')));
        getBillingStatus()
            .then(data => !stale && setBilling(data))
            .catch(() => !stale && setBilling({billing_configured: false}));
        return () => {
            stale = true;
        };
    }, [user, purchaseAttempt]);

    if (loading) {
        return <main className={styles.page}><p className={styles.status}>{intl.formatMessage({id: 'mw.community.wallet.loading', defaultMessage: 'Loading…'})}</p></main>;
    }
    if (!user) {
        return (
            <main className={styles.page}>
                <p className={styles.status}>{intl.formatMessage({id: 'mw.community.wallet.signIn', defaultMessage: 'Sign in to view your wallet.'})} <Button onClick={login}>{ct('common.signIn')}</Button></p>
            </main>
        );
    }

    const balance = account && account.balance !== null ? account.balance : null;
    const billingReady = Boolean(billing && billing.billing_configured);
    const billingMsg = billingResult && billingResult.viewerName === viewerName ? billingResult.value : null;

    const doClaimDaily = async () => {
        const context = walletContext.current;
        const actionKey = `${context}\u0000claim`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setClaiming(true);
        setClaimMsg('');
        try {
            await claimDaily();
            if (walletContext.current !== context) return;
            setClaimMsg(intl.formatMessage({id: 'mw.community.wallet.claimed', defaultMessage: 'Daily credits claimed!'}));
            const data = await getAccountSummary();
            if (data && walletContext.current === context) {
                setAccount(data);
                setAccountLoaded(true);
            }
        } catch (e) {
            if (walletContext.current !== context) return;
            if (e.waitHours) {
                setClaimMsg(intl.formatMessage({id: 'mw.community.wallet.claimedWait', defaultMessage: 'Already claimed. Come back in {hours}h.'}, {hours: e.waitHours}));
            } else if (e.needsReauth) {
                setClaimMsg(intl.formatMessage({id: 'mw.community.wallet.reauthNeeded', defaultMessage: 'Your current login cannot claim daily credits. Log out and back in, then try again.'}));
            } else {
                setClaimMsg(e.message || intl.formatMessage({id: 'mw.community.wallet.claimFailed', defaultMessage: 'Could not claim daily credits.'}));
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (walletContext.current === context) setClaiming(false);
        }
    };

    const buy = async pack => {
        const context = walletContext.current;
        const actionKey = `${context}\u0000billing`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setCheckoutBusy(true);
        setCheckoutError('');
        try {
            await openCreditCheckout(pack);
        } catch (e) {
            if (walletContext.current === context) {
                setCheckoutError(e.needsReauth ?
                    ct('wallet.reauthBuyCredits') :
                    (e.message || ct('wallet.checkoutFailed')));
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (walletContext.current === context) setCheckoutBusy(false);
        }
    };

    const manageBilling = async () => {
        const context = walletContext.current;
        const actionKey = `${context}\u0000billing`;
        if (actionLocks.current.has(actionKey)) return;
        actionLocks.current.add(actionKey);
        setCheckoutBusy(true);
        setCheckoutError('');
        try {
            await openBillingPortal();
        } catch (e) {
            if (walletContext.current === context) {
                setCheckoutError(e.message || ct('wallet.openBillingFailed'));
            }
        } finally {
            actionLocks.current.delete(actionKey);
            if (walletContext.current === context) setCheckoutBusy(false);
        }
    };

    return (
        <main className={styles.page}>
            <h1 className={styles.heading}>{intl.formatMessage({id: 'mw.community.wallet.title', defaultMessage: 'Wallet'})}</h1>

            <section className={styles.balanceCard}>
                <span className={styles.balanceIcon}><WalletIcon size={22} /></span>
                <div>
                    <div className={styles.balanceLabel}>{intl.formatMessage({id: 'mw.community.wallet.yourBalance', defaultMessage: 'Your balance'})}</div>
                    <div className={styles.balanceValue}>
                        {balance !== null ? (
                            <>
                                {fmtCredits(balance).toLocaleString()}
                                <span className={styles.balanceUnit}>{intl.formatMessage({id: 'mw.community.wallet.credits', defaultMessage: 'credits'})}</span>
                            </>
                        ) : (
                            <span className={styles.balanceUnknown}>
                                {accountLoaded ? intl.formatMessage({id: 'mw.community.wallet.balanceFailed', defaultMessage: 'Could not load your balance right now'}) : '…'}
                            </span>
                        )}
                    </div>
                    {claimMsg ? <div className={styles.claimMsg}>{claimMsg}</div> : null}
                </div>
                <Button
                    variant="primary"
                    className={styles.claimBtn}
                    onClick={doClaimDaily}
                    busy={claiming}
                    busyLabel={ct('wallet.claiming')}
                >
                    <CalendarCheck size={16} />
                    {claiming ?
                        intl.formatMessage({id: 'mw.community.wallet.claiming', defaultMessage: 'Claiming…'}) :
                        intl.formatMessage({id: 'mw.community.wallet.claimDaily', defaultMessage: 'Claim daily'})}
                </Button>
            </section>

            {account && (account.donationsReceived > 0 || account.donationsGiven > 0) ? (
                <div className={styles.donationRow}>
                    {account.donationsReceived > 0 ? (
                        <div className={styles.donationCard}>
                            <HeartHandshake size={16} />
                            <span>{intl.formatMessage({id: 'mw.community.wallet.donationsReceived', defaultMessage: '{count} received in donations'}, {count: fmtCredits(account.donationsReceived)})}</span>
                        </div>
                    ) : null}
                    {account.donationsGiven > 0 ? (
                        <div className={styles.donationCard}>
                            <Send size={16} />
                            <span>{intl.formatMessage({id: 'mw.community.wallet.donationsGiven', defaultMessage: '{count} given in donations'}, {count: fmtCredits(account.donationsGiven)})}</span>
                        </div>
                    ) : null}
                </div>
            ) : null}

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{ct('wallet.buyCredits')}</h2>
                <p className={styles.sectionLead}>
                    {ct('wallet.buyCreditsLead')}
                </p>
                {billingMsg ? (
                    <p className={styles.billingMsg}>
                        {billingMsg === 'success' ?
                            ct('wallet.paymentSuccess') :
                            ct('wallet.checkoutCancelled')}
                    </p>
                ) : null}
                <div className={styles.tiers}>
                    {CREDIT_PACKS.map(pack => (
                        <button
                            key={pack.lookupKey}
                            type="button"
                            className={styles.tier}
                            onClick={() => buy(pack)}
                            disabled={checkoutBusy || !billingReady}
                        >
                            <span className={styles.tierCredits}>
                                {pack.credits.toLocaleString()}
                                <span> {ct('credits.label')}</span>
                            </span>
                            <span className={styles.tierPrice}>${pack.price.toFixed(2)}</span>
                        </button>
                    ))}
                </div>
                {checkoutBusy ? <p className={styles.checkoutNote}>{ct('wallet.openingCheckout')}</p> : null}
                {!billing ? <p className={styles.checkoutNote}>{ct('wallet.checkingBilling')}</p> : null}
                {checkoutError ? <p className={styles.checkoutError}>{checkoutError}</p> : null}
                {billing && !billing.billing_configured ? (
                    <p className={styles.checkoutError}>{ct('wallet.billingUnavailable')}</p>
                ) : null}
                {billing && billing.stripe_portal ? (
                    <Button
                        variant="secondary"
                        className={styles.portalButton}
                        onClick={manageBilling}
                        busy={checkoutBusy}
                        busyLabel={ct('wallet.openingBilling')}
                    >
                        <ExternalLink size={14} />
                        {ct('wallet.manageBilling')}
                    </Button>
                ) : null}
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{intl.formatMessage({id: 'mw.community.wallet.purchaseHistory', defaultMessage: 'Purchase history'})}</h2>
                {purchaseError ? (
                    <p className={styles.status}>
                        {purchaseError}{' '}
                        <Button
                            variant="secondary"
                            onClick={() => setPurchaseAttempt(value => value + 1)}
                        >{intl.formatMessage({id: 'mw.community.wallet.tryAgain', defaultMessage: 'Try again'})}</Button>
                    </p>
                ) : purchases === null ? (
                    <p className={styles.status}>{intl.formatMessage({id: 'mw.community.wallet.loading', defaultMessage: 'Loading…'})}</p>
                ) : purchases.length ? (
                    <ul className={styles.purchases}>
                        {purchases.map((purchase, index) => (
                            <li
                                key={`${purchase.projectId}-${index}`}
                                className={styles.purchaseRow}
                            >
                                <Link
                                    to={projectUrl(purchase.projectId)}
                                    className={styles.purchaseTitle}
                                >{purchase.title || purchase.projectId}</Link>
                                <span className={styles.purchaseMeta}>
                                    <span className={styles.purchaseAmount}>
                                        <Coins size={13} />
                                        {fmtCredits(purchase.amount)}
                                    </span>
                                    {purchase.at ? (
                                        <span className={styles.purchaseDate}>{formatDate(purchase.at)}</span>
                                    ) : null}
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.empty}>
                        {intl.formatMessage({id: 'mw.community.wallet.noPurchases', defaultMessage: 'You have not bought any projects yet.'})}{' '}
                        <Link
                            to="/explore"
                            className={styles.exploreLink}
                        >
                            {intl.formatMessage({id: 'mw.community.wallet.exploreProjects', defaultMessage: 'Explore projects'})}
                            <ExternalLink size={13} />
                        </Link>
                    </p>
                )}
            </section>
        </main>
    );
};

export default Wallet;
