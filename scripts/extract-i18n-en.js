/* eslint-disable no-console */
// One-off tool: robustly extract all i18n message keys + English defaults from
// src/community and emit module.exports = { key: default, ... } for messages.en.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'community');

function walk(dir, out) {
    for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p, out);
        else if (/\.(js|jsx)$/.test(e.name)) out.push(p);
    }
    return out;
}

// Match `name = "quoted"` / `name: "quoted"` where value may contain escapes &
// apostrophes, stopping only at the unescaped matching quote.
const ATTR_RE = /\b(id|defaultMessage)\s*[:=]\s*(['"])((?:\\.|(?!\2)[\s\S])*)\2/g;

function parseNameValuePairs(region) {
    ATTR_RE.lastIndex = 0;
    const out = {id: undefined, defaultMessage: undefined};
    let m;
    while ((m = ATTR_RE.exec(region))) {
        if (m[1] === 'id' && out.id === undefined) out.id = m[3];
        else if (m[1] === 'defaultMessage' && out.defaultMessage === undefined) out.defaultMessage = m[3];
    }
    return out;
}

const map = new Map();
const add = (key, def) => {
    if (!key || !map.has(key)) {
        if (key) map.set(key, def === undefined || def === null ? '' : def);
    }
};

for (const file of walk(ROOT, [])) {
    let src;
    try { src = fs.readFileSync(file, 'utf8'); } catch { continue; }

    // intl.formatMessage({ ... }) objects: capture balanced braces after the call.
    const fmStartRe = /\bformatMessage\(\s*\{/g;
    let fm;
    while ((fm = fmStartRe.exec(src))) {
        const open = src.indexOf('{', fm.index + 'formatMessage('.length);
        let depth = 0;
        let i = open;
        for (; i < src.length; i++) {
            const c = src[i];
            if (c === '{') depth++;
            else if (c === '}') {
                depth--;
                if (depth === 0) break;
            }
        }
        const region = src.slice(open, i);
        const p = parseNameValuePairs(region);
        if (p.id) add(p.id, p.defaultMessage);
    }

    // <FormattedMessage .../>
    const msgTagRe = /<FormattedMessage\b[^>]*?\/>/g;
    let tag;
    while ((tag = msgTagRe.exec(src))) {
        const p = parseNameValuePairs(tag[0]);
        if (p.id) add(p.id, p.defaultMessage);
    }

    // Community t('key', 'default') / ct('key', 'default') — parse first two
    // string args quote-aware. `ct` is the alias used where community t is
    // renamed to avoid clashing with react-intl's t.
    const tStartRe = /\bt\(|\bct\(/g;
    let tcall;
    while ((tcall = tStartRe.exec(src))) {
        // advance past the opening parenthesis of t(/ct(
        let i = tcall.index + tcall[0].length;
        const skipWs = () => { while (i < src.length && /\s/.test(src[i])) i++; };
        const readString = () => {
            skipWs();
            if (i >= src.length) return null;
            const q = src[i];
            if (q !== "'" && q !== '"') return null;
            i++;
            let s = '';
            for (; i < src.length; i++) {
                const c = src[i];
                if (c === '\\') { s += c + (src[i + 1] || ''); i++; continue; }
                if (c === q) { i++; return s; }
                s += c;
            }
            return null;
        };
        const key = readString();
        if (!key) continue;
        skipWs();
        let def;
        if (src[i] === ',') { i++; def = readString(); }
        add(key, def === undefined ? '' : def);
    }
}

const keys = [...map.keys()].sort();
let out = 'module.exports = {\n';
for (const k of keys) out += `    ${JSON.stringify(k)}: ${JSON.stringify(map.get(k))},\n`;
out += '};\n';
fs.writeFileSync(path.join(__dirname, 'mw-en-extract.js'), out);

const empties = keys.filter(k => !map.get(k));
console.log('total keys:', keys.length);
console.log('keys with empty default (need manual):', empties.length);
console.log(empties.join('\n') || '(none)');