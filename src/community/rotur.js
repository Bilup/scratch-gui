// Bilup Accounts social API has been removed from this build: nothing here
// contacts api.accounts.bilup.org or avatars.accounts.bilup.org. The exported
// surface is kept so community pages keep their existing loading/error paths
// and degrade to empty state instead of crashing.

const unavailable = () => {
    const error = new Error('Bilup Accounts API was removed from this build.');
    error.status = 0;
    return error;
};

const reject = () => Promise.reject(unavailable());

const avatar = () => '';
const banner = () => '';

const rotur = {
    avatar,
    banner,
    profile: reject,
    follow: reject,
    unfollow: reject,
    followers: reject,
    following: reject,
    status: reject,
    followerLeaderboard: reject
};

export default rotur;
