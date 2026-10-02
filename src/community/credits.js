// Network access to the Rotur billing API (api.rotur.dev) has been removed from
// this build. The exported surface is kept so the wallet UI keeps its loading /
// error paths and degrades to "cannot buy credits" instead of crashing.

// 爱发电 credit tiers (Bilup). Buying opens an ifdian.net order page.
const PURCHASE_TIERS = [
    {credits: 50, price: 6.99, link: 'https://ifdian.net/order/create?product_type=1&plan_id=9336922490c911f1b6855254001e7c00&sku=%5B%7B%22sku_id%22%3A%22934012c290c911f1ac695254001e7c00%22,%22count%22%3A1%7D%5D'},
    {credits: 200, price: 19.99, link: 'https://ifdian.net/order/create?product_type=1&plan_id=9336922490c911f1b6855254001e7c00&sku=%5B%7B%22sku_id%22%3A%229348610290c911f183e45254001e7c00%22,%22count%22%3A1%7D%5D'},
    {credits: 500, price: 39.99, link: 'https://ifdian.net/order/create?product_type=1&plan_id=9336922490c911f1b6855254001e7c00&sku=%5B%7B%22sku_id%22%3A%22934f8c5c90c911f1baee5254001e7c00%22,%22count%22%3A1%7D%5D'}
];

const KO_FI_SHOP_URL = 'https://ifdian.net/a/RyaninCn11';

// Stripe credit top-up tiers (shared with the Rotur wallet). Buying opens a
// Stripe checkout session; the credits are credited to the account once the
// payment is confirmed.
const CREDIT_PACKS = [
    {credits: 50, price: 1.99, lookupKey: 'rotur_credits_50'},
    {credits: 250, price: 8.99, lookupKey: 'rotur_credits_250'},
    {credits: 500, price: 15.99, lookupKey: 'rotur_credits_500'}
];

// Detect an "insufficient funds" failure from a Bilup Accounts transfer error.
const isInsufficientFunds = error => {
    const message = String((error && error.message) || error || '').toLowerCase();
    return message.includes('insufficient') || message.includes('not enough') || message.includes('balance');
};

const billingUnavailable = () => {
    const message = 'Buying credits is unavailable: network access was removed from this build.';
    const error = new Error(message);
    error.needsReauth = true;
    return error;
};

const getBillingStatus = () => Promise.reject(billingUnavailable());

const openCreditCheckout = () => Promise.reject(billingUnavailable());

const openBillingPortal = () => Promise.reject(billingUnavailable());

// Consume a ?billing=success|cancelled query param left by the Stripe checkout
// redirect, returning the result. No param means no billing result.
const consumeBillingResult = () => {
    const url = new URL(window.location.href);
    const result = url.searchParams.get('billing');
    if (result !== 'success' && result !== 'cancelled') {
        return null;
    }
    url.searchParams.delete('billing');
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
    return result;
};

export {
    PURCHASE_TIERS,
    KO_FI_SHOP_URL,
    CREDIT_PACKS,
    isInsufficientFunds,
    getBillingStatus,
    openCreditCheckout,
    openBillingPortal,
    consumeBillingResult
};
