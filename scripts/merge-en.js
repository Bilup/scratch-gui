/* eslint-disable */
// One-off tool: merge extracted defaults + manual English into a final messages.en.
const fs = require('fs');
const path = require('path');
const extracted = require('./mw-en-extract.js');
const manual = require('./mw-en-manual.js');

// Original entries already present in i18n.jsx messages.en (authoritative).
const original = {
    'settings.analytics': 'Anonymous product analytics',
    'settings.analyticsHelp': 'Records six creation milestones for 31 days. MistWarp does not send usernames, project IDs, page URLs, IP addresses, or browser details.',
    'settings.language': 'Language',
    'settings.languageHelp': 'Changes the language used by the MistWarp community site. More pages will move into this translation system as their copy changes.',
    'status.degraded': 'Degraded',
    'status.history': 'Seven-day uptime',
    'status.incidents': 'Incident history',
    'status.lead': 'Checks run outside the main MistWarp deployment every five minutes.',
    'status.loading': 'Loading independent status data…',
    'status.noIncidents': 'No incidents have been reported.',
    'status.operational': 'Operational',
    'status.retry': 'Check again',
    'status.title': 'Service status',
    'status.unavailable': 'Unavailable',
    'status.unknown': 'No data'
};

const merged = {};
for (const [k, v] of Object.entries(extracted)) merged[k] = v;    // extracted defaults (source of truth)
for (const [k, v] of Object.entries(manual)) {
    // manual only fills keys that had no usable default in the source
    if ((merged[k] === undefined || merged[k] === null || merged[k] === '')) merged[k] = v;
}
for (const [k, v] of Object.entries(original)) merged[k] = v;     // original wins

const keys = Object.keys(merged).sort();
let out = '/* eslint-disable */\n';
out += '// English community messages. Generated + reviewed entries.\n';
out += 'const messages = {\n';
for (const k of keys) {
    if (merged[k] === undefined || merged[k] === null || merged[k] === '') continue;
    out += `    ${JSON.stringify(k)}: ${JSON.stringify(merged[k])},\n`;
}
out += '};\n\nexport default messages;\n';

fs.writeFileSync(path.join(__dirname, '..', 'src', 'community', 'i18n-messages-en.js'), out);
console.log('final en entries:', keys.length, 'non-empty:', keys.filter(k => merged[k]).length);