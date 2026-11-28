import ReactDOM from 'react-dom';
import {setAppElement} from 'react-modal';

// ============ 全局未捕获异常兜底 ============
// SplashEnd 会把启动期的 window.onerror 置空；此后的任何未捕获异步异常
// （Promise rejection、事件处理器抛错等）若不兜底，会静默导致页面白屏/无响应，
// 在 Android WebView 上甚至表现为"应用卡死"。这里注册常驻兜底：
// 记录到控制台并显示可恢复的提示层，避免整个编辑器崩溃。
(() => {
    if (window.__mwGlobalErrorHandlerInstalled) return;
    window.__mwGlobalErrorHandlerInstalled = true;

    // 有些库/沙箱会 throw 一个普通对象（甚至空对象 {}），直接打印出来只有一个
    // "Object"，什么都没留下。这里补上序列化结果，至少能看出内容。
    const describeReason = reason => {
        if (!reason || typeof reason !== 'object' || reason instanceof Error) return reason;
        try {
            return {reason, json: JSON.stringify(reason)};
        } catch (e) {
            return reason;
        }
    };

    window.addEventListener('error', event => {
        // ErrorEvent 的 message/filename/lineno/colno 是唯一可靠线索：
        // 跨域脚本错误、以及浏览器/库自己派发的 error 事件都可能没有 error 对象，
        // 只看 event.error 会把信息全部丢掉（之前就是只打了一个 Object）。
        const location = {
            message: event.message,
            source: event.filename,
            line: event.lineno,
            column: event.colno
        };
        if (event.error) {
            // eslint-disable-next-line no-console
            console.error('[Bilup] Unhandled error', event.error, location);
        } else {
            // eslint-disable-next-line no-console
            console.error('[Bilup] Unhandled error', location);
        }
    });

    window.addEventListener('unhandledrejection', event => {
        // eslint-disable-next-line no-console
        console.error('[Bilup] Unhandled rejection', describeReason(event.reason));
        // 阻止默认的 console 噪声，但保留事件本身
        event.preventDefault();
    });
})();

const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
    appTarget.removeChild(appTarget.firstChild);
}

setAppElement(appTarget);

const render = children => {
    // Use ReactDOM.createRoot for better performance if available (React 18+)
    if (ReactDOM.createRoot) {
        const root = ReactDOM.createRoot(appTarget);
        root.render(children);
    } else {
        ReactDOM.render(children, appTarget);
    }

    // Schedule splash end after render completes
    requestAnimationFrame(() => {
        // Log time when React app renders (splash screen ends)
        if (window.BILUP_LOAD_START_TIME) {
            if (window.performance && window.performance.mark) {
                window.performance.mark('bilup-app-render');
            }
        }

        if (window.SplashEnd) {
            window.SplashEnd();
        }
    });
};

export default render;
