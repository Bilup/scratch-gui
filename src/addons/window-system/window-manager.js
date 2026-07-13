/**
 * Centralized Window System for Addons
 * Provides a unified API for creating and managing draggable, resizable windows
 */

const css = `
.addon-window-btn {
  background: transparent;
  color: var(--text-primary, #666);
  transition: background-color 0.15s ease, color 0.15s ease;
}

.addon-window-btn:hover {
  background: var(--ui-black-transparent, rgba(0, 0, 0, 0.08));
}

.addon-window-btn-close:hover {
  background: var(--red-primary, #e64a4a);
  color: white;
}
`;

const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

const WINDOW_Z_INDEX_BASE = 8000;
const WINDOW_Z_INDEX_MAX = 8999;
let nextZIndex = WINDOW_Z_INDEX_BASE;

// Some UI overlays (like the project loader) sit above the normal window range.
// This tier is for specific windows that must remain interactable above those overlays.
// Keep below the context menu layer (see src/css/z-index.css).
const WINDOW_ON_TOP_Z_INDEX_BASE = 9600;
const WINDOW_ON_TOP_Z_INDEX_MAX = 9999;
let nextOnTopZIndex = WINDOW_ON_TOP_Z_INDEX_BASE;
let windowCount = 0;
const activeWindows = new Map();

let animationsEnabled = localStorage.getItem('mw:window-animation') !== 'false';

class AddonWindow {
    constructor (options = {}) {
        this.id = options.id || `addon-window-${++windowCount}`;
        this.title = options.title || 'Addon Window';
        this.width = options.width || 400;
        this.height = options.height || 300;
        this.minWidth = options.minWidth || 200;
        this.minHeight = options.minHeight || 150;
        this.maxWidth = options.maxWidth || null;
        this.maxHeight = options.maxHeight || null;
        this.x = options.x || (Math.random() * 100) + 50;
        this.y = options.y || (Math.random() * 100) + 50;
        this.resizable = options.resizable !== false;
        this.modal = options.modal || false;
        this.closable = options.closable !== false;
        this.minimizable = options.minimizable !== false;
        this.maximizable = options.maximizable !== false;
        this.className = options.className || '';
        this.destroyOnMinimize = options.destroyOnMinimize || false;
        this.alwaysOnTop = options.alwaysOnTop || false;
        
        this.isVisible = false;
        this.isMinimized = false;
        this.isMaximized = false;
        this.isDestroying = false;
        this.zIndex = this.alwaysOnTop ? ++nextOnTopZIndex : ++nextZIndex;
        
        this.onClose = options.onClose || (() => {});
        this.onMinimize = options.onMinimize || (() => {});
        this.onMaximize = options.onMaximize || (() => {});
        this.onRestore = options.onRestore || (() => {});
        this.onResize = options.onResize || (() => {});
        this.onMove = options.onMove || (() => {});
        
        this.element = null;
        this.headerElement = null;
        this.contentElement = null;
        this.isDragging = false;
        this.isResizing = false;
        this.isTouchDragging = false;
        this.isTouchResizing = false;
        this.dragOffset = {x: 0, y: 0};
        this.savedState = null; // For maximize/restore
        this._hideTimer = null;
        
        this.createWindow();
        activeWindows.set(this.id, this);
    }
    
    createWindow () {
        // Create main window element
        this.element = document.createElement('div');
        this.element.className = `addon-window ${this.className}`;
        this.element.style.cssText = `
            position: fixed;
            left: ${this.x}px;
            top: ${this.y}px;
            width: ${this.width}px;
            height: ${this.height}px;
            z-index: ${this.zIndex};
            background: var(--ui-modal-background, #ffffff);
            border: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08));
            border-radius: 12px;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16),
                        0 2px 8px rgba(0, 0, 0, 0.08);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
            display: none;
            flex-direction: column;
            overflow: hidden;
            backdrop-filter: blur(20px);
            will-change: opacity, transform, left, top, width, height, border-radius;
            transition: opacity 0.2s ease-out, transform 0.2s ease-out, left 0.3s ease-out, top 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out;
        `;

        this.element.addEventListener('mousedown', () => this.bringToFront());
        
        // Create header
        this.headerElement = document.createElement('div');
        this.headerElement.className = 'addon-window-header';
        this.headerElement.style.cssText = `
            background: var(--ui-primary, #f8f9fa);
            border-bottom: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08));
            padding: 8px 16px;
            cursor: move;
            user-select: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 44px;
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
        `;

        // Title
        const titleElement = document.createElement('div');
        titleElement.className = 'addon-window-title';
        titleElement.textContent = this.title;
        titleElement.style.cssText = `
            font-weight: 600;
            font-size: 14px;
            color: var(--text-primary, #2d3748);
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            z-index: 1;
        `;
        
        // Controls
        const controlsElement = document.createElement('div');
        controlsElement.className = 'addon-window-controls';
        controlsElement.style.cssText = `
            display: flex;
            gap: 6px;
            align-items: center;
            z-index: 1;
            overflow: hidden;
        `;
        
        // Control buttons
        if (this.minimizable) {
            const minimizeBtn = this.createControlButton('minimize', 'Minimize', () => this.minimize());
            controlsElement.appendChild(minimizeBtn);
        }

        if (this.maximizable) {
            const maximizeBtn = this.createControlButton('maximize', 'Maximize', () => this.toggleMaximize());
            this.maximizeBtn = maximizeBtn; // Store reference to update icon when maximized
            controlsElement.appendChild(maximizeBtn);
        }
        
        if (this.closable) {
            const closeBtn = this.createControlButton('close', 'Close', () => this.close());
            controlsElement.appendChild(closeBtn);
        }
        
        this.headerElement.appendChild(titleElement);
        this.headerElement.appendChild(controlsElement);
        
        // Create content area
        this.contentElement = document.createElement('div');
        this.contentElement.className = 'addon-window-content';
        this.contentElement.style.cssText = `
            flex: 1;
            overflow: auto;
            padding: 0;
            box-sizing: border-box;
            background: transparent;
            border-radius: 0 0 12px 12px;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            min-height: 0;
            max-height: 100%;
            display: flex;
            flex-direction: column;
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        `;
        
        // Add custom scrollbar styling
        this.addScrollbarStyling(this.contentElement);
        
        this.element.appendChild(this.headerElement);
        this.element.appendChild(this.contentElement);
        
        // Add resize handles if resizable
        if (this.resizable) {
            this.addResizeHandles();
        }
        
        // Add drag functionality
        this.addDragFunctionality();
        
        // Add to DOM
        document.body.appendChild(this.element);
    }
    
    createControlButton (type, title, onClick) {
        const button = document.createElement('button');
        button.title = title;
        button.className = `addon-window-btn addon-window-btn-${type}`;
        
        // Create SVG icon based on button type
        let svgIcon = '';
        switch (type) {
        case 'minimize':
            svgIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>`;
            break;
        case 'maximize':
            svgIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                </svg>`;
            break;
        case 'restore':
            svgIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>`;
            break;
        case 'close':
            svgIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                </svg>`;
            break;
        }
        
        button.innerHTML = svgIcon;
        
        // Modern button styling
        button.style.cssText = `
            border: none;
            cursor: pointer;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            font-size: 0;
            margin: 0;
            padding: 0;
        `;
        
        button.addEventListener('mousedown', e => {
            e.stopPropagation();
        });
        
        button.addEventListener('click', e => {
            e.stopPropagation();
            onClick();
        });
        
        return button;
    }
    
    updateMaximizeButton () {
        if (this.maximizeBtn) {
            const svgIcon = this.isMaximized ?
                `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>` :
                `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    </svg>`;
            this.maximizeBtn.innerHTML = svgIcon;
            this.maximizeBtn.title = this.isMaximized ? 'Restore' : 'Maximize';
        }
    }

    addDragFunctionality () {
        this.headerElement.addEventListener('mousedown', e => {
            if (e.target.tagName === 'BUTTON') return;
            
            this.isDragging = true;
            this.isTouchDragging = false;
            this.bringToFront();
            
            this.element.style.transition = 'none';
            
            // Get the current position of the window
            const currentX = parseInt(this.element.style.left, 10) || this.x;
            const currentY = parseInt(this.element.style.top, 10) || this.y;
            
            // Calculate offset relative to current window position
            this.dragOffset = {
                x: e.clientX - currentX,
                y: e.clientY - currentY
            };
            
            document.addEventListener('mousemove', this.handleDrag);
            document.addEventListener('mouseup', this.handleDragEnd);
            
            e.preventDefault();
        });
        
        this.headerElement.addEventListener('touchstart', e => {
            if (e.target.tagName === 'BUTTON') return;
            if (e.touches.length !== 1) return;
            
            this.isDragging = true;
            this.isTouchDragging = true;
            this.bringToFront();
            
            this.element.style.transition = 'none';
            
            const touch = e.touches[0];
            const currentX = parseInt(this.element.style.left, 10) || this.x;
            const currentY = parseInt(this.element.style.top, 10) || this.y;
            
            this.dragOffset = {
                x: touch.clientX - currentX,
                y: touch.clientY - currentY
            };
            
            document.addEventListener('touchmove', this.handleTouchDrag, {passive: false});
            document.addEventListener('touchend', this.handleTouchDragEnd);
            document.addEventListener('touchcancel', this.handleTouchDragEnd);
            
            e.preventDefault();
        }, {passive: false});
    }
    
    handleDrag = e => {
        if (!this.isDragging) return;
        
        const newX = e.clientX - this.dragOffset.x;
        const newY = e.clientY - this.dragOffset.y;
        
        // Allow window to move mostly off-screen but keep 50px visible
        const minVisiblePixels = 50;
        const minX = -(this.width - minVisiblePixels);
        const maxX = window.innerWidth - minVisiblePixels;
        const minY = 0;
        const maxY = window.innerHeight - minVisiblePixels;
        
        this.x = Math.max(minX, Math.min(newX, maxX));
        this.y = Math.max(minY, Math.min(newY, maxY));
        
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        
        this.onMove(this.x, this.y);
    };
    
    handleDragEnd = () => {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.handleDragEnd);
        this.element.style.transition = '';
    };
    
    handleTouchDrag = e => {
        if (!this.isDragging || !this.isTouchDragging) return;
        if (e.touches.length !== 1) return;
        
        const touch = e.touches[0];
        const newX = touch.clientX - this.dragOffset.x;
        const newY = touch.clientY - this.dragOffset.y;
        
        const minVisiblePixels = 50;
        const minX = -(this.width - minVisiblePixels);
        const maxX = window.innerWidth - minVisiblePixels;
        const minY = 0;
        const maxY = window.innerHeight - minVisiblePixels;
        
        this.x = Math.max(minX, Math.min(newX, maxX));
        this.y = Math.max(minY, Math.min(newY, maxY));
        
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        
        this.onMove(this.x, this.y);
        
        e.preventDefault();
    };
    
    handleTouchDragEnd = () => {
        this.isDragging = false;
        this.isTouchDragging = false;
        document.removeEventListener('touchmove', this.handleTouchDrag);
        this.element.style.transition = '';
        document.removeEventListener('touchend', this.handleTouchDragEnd);
        document.removeEventListener('touchcancel', this.handleTouchDragEnd);
    };
    
    addResizeHandles () {
        const handles = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
        
        handles.forEach(direction => {
            const handle = document.createElement('div');
            handle.className = `resize-handle resize-${direction}`;
            
            const styles = {
                position: 'absolute',
                backgroundColor: 'transparent',
                zIndex: '10'
            };
            
            // Set position and cursor for each handle
            switch (direction) {
            case 'n':
                Object.assign(styles, {
                    top: '0',
                    left: '8px',
                    right: '8px',
                    height: '4px',
                    cursor: 'n-resize'
                });
                break;
            case 'ne':
                Object.assign(styles, {
                    top: '0',
                    right: '0',
                    width: '8px',
                    height: '8px',
                    cursor: 'ne-resize'
                });
                break;
            case 'e':
                Object.assign(styles, {
                    right: '0',
                    top: '8px',
                    bottom: '8px',
                    width: '4px',
                    cursor: 'e-resize'
                });
                break;
            case 'se':
                Object.assign(styles, {
                    bottom: '0',
                    right: '0',
                    width: '8px',
                    height: '8px',
                    cursor: 'se-resize'
                });
                break;
            case 's':
                Object.assign(styles, {
                    bottom: '0',
                    left: '8px',
                    right: '8px',
                    height: '4px',
                    cursor: 's-resize'
                });
                break;
            case 'sw':
                Object.assign(styles, {
                    bottom: '0',
                    left: '0',
                    width: '8px',
                    height: '8px',
                    cursor: 'sw-resize'
                });
                break;
            case 'w':
                Object.assign(styles, {
                    left: '0',
                    top: '8px',
                    bottom: '8px',
                    width: '4px',
                    cursor: 'w-resize'
                });
                break;
            case 'nw':
                Object.assign(styles, {
                    top: '0',
                    left: '0',
                    width: '8px',
                    height: '8px',
                    cursor: 'nw-resize'
                });
                break;
            }
            
            Object.assign(handle.style, styles);
            
            handle.addEventListener('mousedown', e => {
                e.stopPropagation();
                this.startResize(e, direction);
            });
            
            handle.addEventListener('touchstart', e => {
                if (e.touches.length !== 1) return;
                e.stopPropagation();
                this.isTouchResizing = true;
                this.startResize(e, direction);
                document.addEventListener('touchmove', this.handleTouchResize, {passive: false});
                document.addEventListener('touchend', this.handleTouchResizeEnd);
                document.addEventListener('touchcancel', this.handleTouchResizeEnd);
                e.preventDefault();
            }, {passive: false});
            
            this.element.appendChild(handle);
        });
    }
    
    startResize (e, direction) {
        this.isResizing = true;
        this.resizeDirection = direction;
        this.bringToFront();
        
        const rect = this.element.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        this.resizeStart = {
            x: clientX,
            y: clientY,
            width: rect.width,
            height: rect.height,
            left: rect.left,
            top: rect.top
        };
        
        document.addEventListener('mousemove', this.handleResize);
        document.addEventListener('mouseup', this.handleResizeEnd);
        
        e.preventDefault();
    }
    
    handleResize = e => {
        if (!this.isResizing) return;
        
        const deltaX = e.clientX - this.resizeStart.x;
        const deltaY = e.clientY - this.resizeStart.y;
        const direction = this.resizeDirection;
        
        let newWidth = this.resizeStart.width;
        let newHeight = this.resizeStart.height;
        let newX = this.resizeStart.left;
        let newY = this.resizeStart.top;
        
        // Calculate new dimensions based on resize direction
        if (direction.includes('e')) newWidth += deltaX;
        if (direction.includes('w')) {
            newWidth -= deltaX;
            newX = this.resizeStart.left + deltaX;
        }
        if (direction.includes('s')) newHeight += deltaY;
        if (direction.includes('n')) {
            newHeight -= deltaY;
            newY = this.resizeStart.top + deltaY;
        }
        
        // Apply constraints
        const originalNewWidth = newWidth;
        const originalNewHeight = newHeight;
        
        newWidth = Math.max(this.minWidth, newWidth);
        newHeight = Math.max(this.minHeight, newHeight);
        
        if (this.maxWidth) newWidth = Math.min(this.maxWidth, newWidth);
        if (this.maxHeight) newHeight = Math.min(this.maxHeight, newHeight);
        
        // Adjust position if size was constrained and we're resizing from west or north
        if (direction.includes('w') && newWidth !== originalNewWidth) {
            newX = this.resizeStart.left + (this.resizeStart.width - newWidth);
        }
        if (direction.includes('n') && newHeight !== originalNewHeight) {
            newY = this.resizeStart.top + (this.resizeStart.height - newHeight);
        }
        
        // Update dimensions
        this.width = newWidth;
        this.height = newHeight;
        this.x = newX;
        this.y = newY;
        
        this.element.style.width = `${newWidth}px`;
        this.element.style.height = `${newHeight}px`;
        this.element.style.left = `${newX}px`;
        this.element.style.top = `${newY}px`;
        
        this.onResize(newWidth, newHeight);
    };
    
    handleResizeEnd = () => {
        this.isResizing = false;
        document.removeEventListener('mousemove', this.handleResize);
        document.removeEventListener('mouseup', this.handleResizeEnd);
    };
    
    handleTouchResize = e => {
        if (!this.isResizing || !this.isTouchResizing) return;
        if (e.touches.length !== 1) return;

        const touch = e.touches[0];
        const deltaX = touch.clientX - this.resizeStart.x;
        const deltaY = touch.clientY - this.resizeStart.y;
        const direction = this.resizeDirection;

        let newWidth = this.resizeStart.width;
        let newHeight = this.resizeStart.height;
        let newX = this.resizeStart.left;
        let newY = this.resizeStart.top;

        if (direction.includes('e')) newWidth += deltaX;
        if (direction.includes('w')) {
            newWidth -= deltaX;
            newX = this.resizeStart.left + deltaX;
        }
        if (direction.includes('s')) newHeight += deltaY;
        if (direction.includes('n')) {
            newHeight -= deltaY;
            newY = this.resizeStart.top + deltaY;
        }

        const originalNewWidth = newWidth;
        const originalNewHeight = newHeight;

        newWidth = Math.max(this.minWidth, newWidth);
        newHeight = Math.max(this.minHeight, newHeight);

        if (this.maxWidth) newWidth = Math.min(this.maxWidth, newWidth);
        if (this.maxHeight) newHeight = Math.min(this.maxHeight, newHeight);

        if (direction.includes('w') && newWidth !== originalNewWidth) {
            newX = this.resizeStart.left + (this.resizeStart.width - newWidth);
        }
        if (direction.includes('n') && newHeight !== originalNewHeight) {
            newY = this.resizeStart.top + (this.resizeStart.height - newHeight);
        }

        const minY = getMenuBarHeight();
        if (newY < minY) {
            const bottom = this.resizeStart.top + this.resizeStart.height;
            newY = minY;
            newHeight = Math.max(this.minHeight, bottom - newY);
            if (this.maxHeight) newHeight = Math.min(this.maxHeight, newHeight);
            if (direction.includes('n')) {
                newY = Math.max(minY, bottom - newHeight);
            }
        }

        this.width = newWidth;
        this.height = newHeight;
        this.x = newX;
        this.y = newY;

        this.element.style.width = `${newWidth}px`;
        this.element.style.height = `${newHeight}px`;
        this.element.style.left = `${newX}px`;
        this.element.style.top = `${newY}px`;

        this.onResize(newWidth, newHeight);

        e.preventDefault();
    };

    handleTouchResizeEnd = () => {
        this.isResizing = false;
        this.isTouchResizing = false;
        document.removeEventListener('touchmove', this.handleTouchResize);
        document.removeEventListener('touchend', this.handleTouchResizeEnd);
        document.removeEventListener('touchcancel', this.handleTouchResizeEnd);
    };

    addScrollbarStyling () {
        const newStyle = document.createElement('style');
        
        newStyle.textContent = `
            .addon-window-content {
                scrollbar-width: thin;
                scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
            }
            
            .addon-window-content::-webkit-scrollbar {
                width: 12px;
                height: 12px;
            }
            
            .addon-window-content::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.03);
                border-radius: 6px;
                margin: 2px;
            }
            
            .addon-window-content::-webkit-scrollbar-thumb {
                background: rgba(0, 0, 0, 0.2);
                border-radius: 6px;
                border: 2px solid transparent;
                background-clip: content-box;
                min-height: 20px;
            }

            .addon-window-content::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 0, 0, 0.3);
                background-clip: content-box;
            }

            .addon-window-content::-webkit-scrollbar-thumb:active {
                background: rgba(0, 0, 0, 0.4);
                background-clip: content-box;
            }
            
            .addon-window-content::-webkit-scrollbar-corner {
                background: transparent;
            }
        `;
        
        document.head.appendChild(newStyle);
        this.scrollbarStyle = newStyle;
    }
    
    bringToFront () {
        const isOnTopTier = this.alwaysOnTop;
        const baseZ = isOnTopTier ? WINDOW_ON_TOP_Z_INDEX_BASE : WINDOW_Z_INDEX_BASE;
        const maxZ = isOnTopTier ? WINDOW_ON_TOP_Z_INDEX_MAX : WINDOW_Z_INDEX_MAX;

        if ((isOnTopTier ? nextOnTopZIndex : nextZIndex) >= maxZ) {
            const windows = Array.from(activeWindows.values()).filter(w => w.alwaysOnTop === isOnTopTier);
            const index = windows.indexOf(this);
            if (index !== -1) windows.splice(index, 1);
            windows.sort((a, b) => a.zIndex - b.zIndex);

            if (isOnTopTier) {
                nextOnTopZIndex = baseZ;
                for (const window of windows) {
                    window.zIndex = ++nextOnTopZIndex;
                    window.element.style.zIndex = window.zIndex;
                }
            } else {
                nextZIndex = baseZ;
                for (const window of windows) {
                    window.zIndex = ++nextZIndex;
                    window.element.style.zIndex = window.zIndex;
                }
            }
        }

        this.zIndex = isOnTopTier ? ++nextOnTopZIndex : ++nextZIndex;
        this.element.style.zIndex = this.zIndex;
    }
    
    show () {
        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        if (this.isVisible) {
            this.bringToFront();
            return this;
        }
        this.isVisible = true;
        this.element.style.display = 'flex';
        this.element.style.visibility = 'visible';
        this.element.style.pointerEvents = 'auto';
        this.bringToFront();
        
        if (animationsEnabled) {
            this.element.style.opacity = '0';
            this.element.style.transform = 'scale(0.95) translateY(-8px)';
            this.element.style.transition = 'none';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.element.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out, left 0.3s ease-out, top 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out';
                    this.element.style.opacity = '1';
                    this.element.style.transform = 'scale(1) translateY(0)';
                });
            });
        } else {
            this.element.style.opacity = '1';
            this.element.style.transform = 'scale(1) translateY(0)';
            this.element.style.transition = 'none';
        }
        return this;
    }
    
    hide () {
        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        if (!this.isVisible) {
            return this;
        }
        this.isVisible = false;
        
        if (animationsEnabled) {
            this.element.style.opacity = '0';
            this.element.style.transform = 'scale(0.95) translateY(-8px)';
            this._hideTimer = setTimeout(() => {
                this._hideTimer = null;
                if (!this.isVisible) {
                    this.element.style.display = 'none';
                }
            }, 200);
        } else {
            this.element.style.display = 'none';
            this.element.style.opacity = '0';
            this.element.style.transform = 'scale(0.95) translateY(-8px)';
        }
        return this;
    }
    
    destroy (callOnClose = true) {
        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        if (callOnClose) {
            const shouldClose = this.onClose();
            if (shouldClose === false) {
                return;
            }
        }
        this.isVisible = false;
        this.isDestroying = true;
        this.element.style.opacity = '0';
        this.element.style.transform = 'scale(0.95) translateY(-8px)';
        this._hideTimer = setTimeout(() => {
            this._hideTimer = null;
            activeWindows.delete(this.id);
            if (this.scrollbarStyle && this.scrollbarStyle.parentNode) {
                this.scrollbarStyle.parentNode.removeChild(this.scrollbarStyle);
            }
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }, 200);
    }

    close () {
        this.destroy(true);
    }
    
    minimize () {
        if (this.destroyOnMinimize) {
            this.onMinimize();
            this.destroy(false);
            return this;
        }

        this.hide();
        this.isMinimized = true;
        this.onMinimize();
        this.updateMaximizeButton();
        return this;
    }
    
    restore () {
        if (this.isMaximized) {
            this.isMaximized = false;
            if (this.savedState) {
                this.x = this.savedState.x;
                this.y = this.savedState.y;
                this.width = this.savedState.width;
                this.height = this.savedState.height;
                
                this.element.style.transition = 'left 0.3s ease-out, top 0.3s ease-out, ' +
                    'width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out';
                this.element.style.left = `${this.x}px`;
                this.element.style.top = `${this.y}px`;
                this.element.style.width = `${this.width}px`;
                this.element.style.height = `${this.height}px`;
                this.element.style.borderRadius = '12px';
            }
            this.updateMaximizeButton();
        }
        
        if (this.isMinimized) {
            this.isMinimized = false;
            this.show();
        }
        
        this.onRestore();
        return this;
    }
    
    maximize () {
        if (this.isMaximized) return this;
        
        this.savedState = {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
        
        this.isMaximized = true;
        this.x = 0;
        this.y = 0;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        this.element.style.transition = 'left 0.3s ease-out, top 0.3s ease-out, ' +
            'width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out';
        this.element.style.left = '0px';
        this.element.style.top = '0px';
        this.element.style.width = '100vw';
        this.element.style.height = '100vh';
        this.element.style.borderRadius = '0px';
        
        this.updateMaximizeButton();
        this.onMaximize();
        return this;
    }
    
    toggleMaximize () {
        if (this.isMaximized) {
            this.restore();
        } else {
            this.maximize();
        }
        return this;
    }
    
    setContent (content) {
        this.contentElement.innerHTML = '';
        if (typeof content === 'string') {
            this.contentElement.innerHTML = content;
        } else if (content instanceof HTMLElement) {
            this.contentElement.appendChild(content);
        }
        return this;
    }
    
    setTitle (newTitle) {
        this.title = newTitle;
        const titleElement = this.headerElement.querySelector('.addon-window-title');
        if (titleElement) {
            titleElement.textContent = newTitle;
        }
        return this;
    }
    
    getContentElement () {
        return this.contentElement;
    }
    
    center () {
        this.x = (window.innerWidth - this.width) / 2;
        this.y = (window.innerHeight - this.height) / 2;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        return this;
    }
    
    // Compatibility methods for external code
    focus () {
        this.bringToFront();
        return this;
    }
    
    isClosed () {
        return !this.isVisible;
    }
}

// Window Manager API
const WindowManager = {
    createWindow (options) {
        return new AddonWindow(options);
    },
    
    getWindow (id) {
        const window = activeWindows.get(id);
        if (window && window.isDestroying) {
            return null;
        }
        return window;
    },
    
    getAllWindows () {
        return Array.from(activeWindows.values());
    },
    
    closeWindow (id) {
        const window = activeWindows.get(id);
        if (window) {
            window.close();
        }
    },
    
    closeAllWindows () {
        for (const window of activeWindows.values()) {
            window.close();
        }
    },
    
    bringToFront (id) {
        const window = activeWindows.get(id);
        if (window && !window.isDestroying) {
            window.bringToFront();
        }
    },
    
    setAnimationsEnabled (enabled) {
        animationsEnabled = enabled;
        try {
            localStorage.setItem('mw:window-animation', enabled);
        } catch (err) {
            // ignore
        }
    },
    
    getAnimationsEnabled () {
        return animationsEnabled;
    }
};

export default WindowManager;
