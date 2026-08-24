const pad2 = n => String(n).padStart(2, '0');
const formatDateTime = ts => {
    if (!ts) return '';
    const d = new Date(ts);
    if (Number.isNaN(d.getTime())) return '';
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
};

const timeAgo = ms => formatDateTime(ms);

const sameUser = (a, b) => Boolean(a && b) && a.toLowerCase() === b.toLowerCase();

const formatBytes = bytes => {
    const value = Number(bytes) || 0;
    if (value >= 1048576) return `${(value / 1048576).toFixed(1)} MB`;
    if (value >= 1024) return `${Math.round(value / 1024)} KB`;
    return `${value} B`;
};

const formatDate = (value, fallback = '') => {
    if (!value) return fallback;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return fallback;
    return date.toLocaleDateString([], {year: 'numeric', month: 'short', day: 'numeric'});
};

const formatPlaytime = (value, includeLabel = true) => {
    const milliseconds = Number(value);
    const minutes = Number.isFinite(milliseconds) && milliseconds > 0 ? Math.floor(milliseconds / 60000) : 0;
    let duration;
    if (minutes < 60) duration = `${minutes}m`;
    else {
        const hours = Math.floor(minutes / 60);
        const remainder = minutes % 60;
        duration = remainder ? `${hours}h ${remainder}m` : `${hours}h`;
    }
    return includeLabel ? `${duration} played` : duration;
};

export {formatDateTime, timeAgo, sameUser, formatBytes, formatDate, formatPlaytime};
