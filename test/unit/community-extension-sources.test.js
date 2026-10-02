import {webcrypto} from 'crypto';
import {TextEncoder} from 'util';
import {
    getCustomExtensionUrls,
    hashExtensionUrl
} from '../../src/lib/community/api.js';

Object.defineProperty(global, 'crypto', {value: webcrypto, configurable: true});
Object.defineProperty(global, 'TextEncoder', {value: TextEncoder, configurable: true});

test('custom extension URLs are collected and deduplicated across project and targets', () => {
    expect(getCustomExtensionUrls({
        extensionURLs: {
            one: 'https://example.com/one.js',
            duplicate: 'https://example.com/shared.js',
            turbowarp: 'https://extensions.turbowarp.org/example.js'
        },
        targets: [{
            extensionURLs: {
                two: 'data:application/javascript,code',
                duplicate: 'https://example.com/shared.js',
                mistium: 'https://extensions.mistium.com/featured/example.js',
                invalid: 3
            }
        }]
    })).toEqual([
        'https://example.com/one.js',
        'https://example.com/shared.js',
        'data:application/javascript,code'
    ]);
});

test('extension URL fingerprints are stable SHA-256 values', async () => {
    expect(await hashExtensionUrl('https://example.com/trusted.js'))
        .toBe('a641c5c6969ea28a3a3053f0a5d6c76a5a1f7017b5c8298d61ba9399fb0cad6f');
});
