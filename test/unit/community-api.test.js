import {exchangeValidator, getEditorProject, request} from '../../src/lib/community/api.js';
import {
    getMistWarpAction,
    getRememberedPlatformProjectState,
    rememberPlatformProject
} from '../../src/lib/community/publish.js';
import rotur from '../../src/community/rotur.js';

// jest 21's `rejects.toMatchObject` cannot inspect properties on an Error
// instance (it only matches plain objects), so capture the rejection value and
// assert on it directly instead.
const captureRejection = promise => promise.then(
    () => null,
    error => error
);

test('community API requests fail offline without touching the network', async () => {
    localStorage.setItem('mw:mistwarp-session', 'expired');
    window.fetch = jest.fn();

    const requestError = await captureRejection(request('/me'));
    expect(requestError && requestError.code).toBe('OFFLINE');
    const editorError = await captureRejection(getEditorProject('project-1'));
    expect(editorError && editorError.code).toBe('OFFLINE');
    expect(window.fetch).not.toHaveBeenCalled();
    expect(localStorage.getItem('mw:mistwarp-session')).toBe('expired');
});

test('the Bilup Accounts validator exchange is removed', async () => {
    window.fetch = jest.fn();

    const error = await captureRejection(exchangeValidator('bad-token'));
    expect(error && error.code).toBe('OFFLINE');
    expect(window.fetch).not.toHaveBeenCalled();
});

test('the Bilup Accounts social API is unavailable', async () => {
    window.fetch = jest.fn();

    const error = await captureRejection(rotur.followerLeaderboard(1));
    expect(error && error.status).toBe(0);
    expect(window.fetch).not.toHaveBeenCalled();
});

test('Bilup project identity controls share, remix, and update actions', () => {
    expect(getMistWarpAction(null, false)).toBe('share');
    expect(getMistWarpAction({isOwner: false, shared: true}, false)).toBeNull();
    expect(getMistWarpAction({isOwner: false, shared: true}, true)).toBe('remix');
    expect(getMistWarpAction({isOwner: true, shared: true}, false)).toBeNull();
    expect(getMistWarpAction({isOwner: true, shared: true}, true)).toBe('update');
    expect(getMistWarpAction({isOwner: true, shared: false}, false)).toBe('share');
});

test('disabled remix permission removes the editor remix action', () => {
    expect(getMistWarpAction({isOwner: false, canRemix: false}, true)).toBeNull();
});

test('Bilup project identity keeps ownership and sharing state', () => {
    rememberPlatformProject({id: 'project-1', isOwner: false, shared: true});
    expect(getRememberedPlatformProjectState()).toEqual({
        id: 'project-1',
        isOwner: false,
        shared: true
    });
});

test('Bilup project identity keeps disabled remix permission', () => {
    rememberPlatformProject({id: 'project-1', isOwner: false, shared: true, canRemix: false});
    expect(getRememberedPlatformProjectState().canRemix).toBe(false);
});