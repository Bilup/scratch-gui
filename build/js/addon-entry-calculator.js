(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-calculator"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/calculator/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/calculator/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Calculator Button in Stage Header */\n[dir=\"ltr\"] .sa-calculator-container {\n  margin-right: 0.2rem;\n}\n\n[dir=\"rtl\"] .sa-calculator-container {\n  margin-left: 0.2rem;\n}\n\n.sa-small-stage [class*=\"gui_body-wrapper_\"]:not(.sa-stage-hidden) .sa-calculator-container {\n  display: none !important;\n}\n\n.sa-calculator-container [class*=\"button_content_\"] {\n  position: relative;\n}\n\n.sa-calculator-container [class*=\"button_outlined-button\"] {\n  border-color: var(--ui-secondary-dark, var(--ui-black-transparent));\n  color: var(--text-primary);\n}\n\n.sa-calculator-container [class*=\"button_content_\"].active {\n  background-color: var(--looks-secondary, #4C97FF) !important;\n  border-color: var(--looks-secondary, #4C97FF) !important;\n  color: white !important;\n}\n\n.sa-calculator-container img {\n  filter: var(--editorDarkMode-accent-filter, brightness(0) saturate(100%) invert(40%) sepia(15%) saturate(366%) hue-rotate(201deg) brightness(97%) contrast(92%));\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n.sa-calculator-container [class*=\"button_content_\"].active img {\n  filter: brightness(0) invert(1) !important;\n  color: white !important;\n}\n\n/* Calculator Window Styles */\n.sa-calculator .addon-window-content {\n    padding: 0;\n    background: var(--ui-primary, #ffffff);\n    overflow: hidden;\n}\n\n.calc-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    user-select: none;\n    outline: none;\n    background: var(--ui-primary, #ffffff);\n    overflow: hidden;\n    min-width: 280px;\n    min-height: 380px;\n    box-sizing: border-box;\n}\n\n/* Display Area */\n.calc-display-container {\n    position: relative;\n    background: var(--ui-secondary, #f8f9fa);\n    border-bottom: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.1));\n    padding: 16px;\n    flex-shrink: 0;\n}\n\n.calc-memory-indicator {\n    position: absolute;\n    top: 8px;\n    left: 16px;\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--text-primary-transparent, rgba(87, 94, 117, 0.6));\n    opacity: 0;\n    transition: opacity 0.2s ease;\n}\n\n.calc-memory-indicator.active {\n    opacity: 1;\n    color: var(--looks-secondary, #4c97ff);\n}\n\n.calc-display {\n    font-size: 28px;\n    font-weight: 300;\n    color: var(--text-primary, #2d3748);\n    text-align: right;\n    min-height: 40px;\n    max-height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    word-break: break-all;\n    overflow-wrap: break-word;\n    line-height: 1.2;\n    overflow: hidden;\n}\n\n/* Button Grid */\n.calc-buttons {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n    gap: 8px;\n    background: var(--ui-primary, #ffffff);\n    overflow: hidden;\n    min-height: 0;\n}\n\n.calc-row {\n    display: flex;\n    gap: 8px;\n    flex: 1;\n}\n\n.calc-btn {\n    flex: 1;\n    border: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.1));\n    border-radius: 8px;\n    font-size: 16px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.15s ease;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 2px 4px var(--ui-black-transparent, rgba(0, 0, 0, 0.1));\n    outline: none;\n    background: var(--ui-primary, #ffffff);\n    color: var(--text-primary, #2d3748);\n}\n\n.calc-btn:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 8px var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n    background: var(--ui-secondary, #f8f9fa);\n}\n\n.calc-btn:active {\n    transform: translateY(0);\n    box-shadow: 0 1px 2px var(--ui-black-transparent, rgba(0, 0, 0, 0.1));\n}\n\n.calc-btn:focus {\n    outline: 2px solid var(--looks-secondary, #4c97ff);\n    outline-offset: 2px;\n}\n\n.calc-btn-zero {\n    flex: 2;\n}\n\n/* Number buttons */\n.calc-btn-number {\n    background: var(--ui-primary, #ffffff);\n    color: var(--text-primary, #2d3748);\n    border-color: var(--ui-black-transparent, rgba(0, 0, 0, 0.1));\n}\n\n.calc-btn-number:hover {\n    background: var(--ui-secondary, #f8f9fa);\n}\n\n/* Function buttons (C, ±, %, memory functions) */\n.calc-btn-function {\n    background: var(--ui-secondary, #e9ecef);\n    color: var(--text-primary, #2d3748);\n    border-color: var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n}\n\n.calc-btn-function:hover {\n    background: var(--ui-tertiary, #dee2e6);\n}\n\n/* Operation buttons (+, -, ×, ÷) */\n.calc-btn-operation {\n    background: var(--looks-secondary, #4c97ff);\n    color: var(--text-primary-white, #ffffff);\n    border-color: var(--looks-secondary, #4c97ff);\n}\n\n.calc-btn-operation:hover {\n    background: var(--looks-secondary-dark, #3182ce);\n    border-color: var(--looks-secondary-dark, #3182ce);\n}\n\n/* Equals button */\n.calc-btn-equals {\n    background: var(--motion-primary, #4c97ff);\n    color: var(--text-primary-white, #ffffff);\n    border-color: var(--motion-primary, #4c97ff);\n}\n\n.calc-btn-equals:hover {\n    background: var(--motion-primary-dark, #3182ce);\n    border-color: var(--motion-primary-dark, #3182ce);\n}\n\n/* Responsive adjustments */\n@media (max-width: 320px) {\n    .calc-display {\n        font-size: 22px;\n    }\n    \n    .calc-btn {\n        font-size: 14px;\n        min-height: 36px;\n    }\n    \n    .calc-buttons {\n        padding: 8px;\n        gap: 6px;\n    }\n    \n    .calc-row {\n        gap: 6px;\n    }\n}\n\n/* Animation for button press */\n@keyframes calc-button-press {\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(0.95);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n.calc-btn:active {\n    animation: calc-button-press 0.1s ease;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/calculator/icons/calculator.svg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/calculator/icons/calculator.svg ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGN1bGF0b3ItaWNvbiBsdWNpZGUtY2FsY3VsYXRvciI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjIwIiB4PSI0IiB5PSIyIiByeD0iMiIvPjxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSI2IiB5Mj0iNiIvPjxsaW5lIHgxPSIxNiIgeDI9IjE2IiB5MT0iMTQiIHkyPSIxOCIvPjxwYXRoIGQ9Ik0xNiAxMGguMDEiLz48cGF0aCBkPSJNMTIgMTBoLjAxIi8+PHBhdGggZD0iTTggMTBoLjAxIi8+PHBhdGggZD0iTTEyIDE0aC4wMSIvPjxwYXRoIGQ9Ik04IDE0aC4wMSIvPjxwYXRoIGQ9Ik0xMiAxOGguMDEiLz48cGF0aCBkPSJNOCAxOGguMDEiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/calculator/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/calculator/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/calculator/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/calculator/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_icons_calculator_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icons/calculator.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/calculator/icons/calculator.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icons/calculator.svg": _url_loader_icons_calculator_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/calculator/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/calculator/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window_system_window_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../window-system/window-manager.js */ "./src/addons/window-system/window-manager.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    msg = _ref.msg,
    console = _ref.console;
  const vm = addon.tab.traps.vm;
  let calculatorWindow = null;
  let calculatorButton = null;
  let cleanupFunctions = [];

  // Calculator state
  let display = '0';
  let previousValue = null;
  let operation = null;
  let waitingForOperand = false;
  let memory = 0;

  /**
   * 
   * @param {number} firstValue 
   * @param {number} secondValue 
   * @param {string} operation 
   * @returns {number}
   */
  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return secondValue !== 0 ? firstValue / secondValue : NaN;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };
  function updateDisplay() {
    var _calculatorWindow, _calculatorWindow$get;
    const displayElement = (_calculatorWindow = calculatorWindow) === null || _calculatorWindow === void 0 ? void 0 : (_calculatorWindow$get = _calculatorWindow.getContentElement()) === null || _calculatorWindow$get === void 0 ? void 0 : _calculatorWindow$get.querySelector('.calc-display');
    if (displayElement) {
      displayElement.textContent = display;
    }
  }
  function inputNumber(num) {
    if (waitingForOperand) {
      display = String(num);
      waitingForOperand = false;
    } else {
      display = display === '0' ? String(num) : display + num;
    }
    updateDisplay();
  }
  function inputDecimal() {
    if (waitingForOperand) {
      display = '0.';
      waitingForOperand = false;
    } else if (display.indexOf('.') === -1) {
      display += '.';
    }
    updateDisplay();
  }
  function clear() {
    display = '0';
    previousValue = null;
    operation = null;
    waitingForOperand = false;
    updateDisplay();
  }
  function performOperation(nextOperation) {
    const inputValue = parseFloat(display);
    if (previousValue === null) {
      previousValue = inputValue;
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      display = String(newValue);
      previousValue = newValue;
      updateDisplay();
    }
    waitingForOperand = true;
    operation = nextOperation;
  }
  function percentage() {
    const value = parseFloat(display);
    display = String(value / 100);
    updateDisplay();
  }
  function toggleSign() {
    if (display !== '0') {
      display = display.startsWith('-') ? display.slice(1) : '-' + display;
      updateDisplay();
    }
  }
  function memoryAdd() {
    memory += parseFloat(display);
    updateMemoryIndicator();
  }
  function memorySubtract() {
    memory -= parseFloat(display);
    updateMemoryIndicator();
  }
  function memoryRecall() {
    display = String(memory);
    waitingForOperand = true;
    updateDisplay();
  }
  function memoryClear() {
    memory = 0;
    updateMemoryIndicator();
  }
  function updateMemoryIndicator() {
    var _calculatorWindow2, _calculatorWindow2$ge;
    const indicator = (_calculatorWindow2 = calculatorWindow) === null || _calculatorWindow2 === void 0 ? void 0 : (_calculatorWindow2$ge = _calculatorWindow2.getContentElement()) === null || _calculatorWindow2$ge === void 0 ? void 0 : _calculatorWindow2$ge.querySelector('.calc-memory-indicator');
    if (indicator) {
      indicator.className = "calc-memory-indicator ".concat(memory !== 0 ? 'active' : '');
    }
  }
  function createCalculatorContent() {
    const container = document.createElement('div');
    container.className = 'calc-container';
    container.innerHTML = "\n            <div class=\"calc-display-container\">\n                <div class=\"calc-memory-indicator ".concat(memory !== 0 ? 'active' : '', "\">M</div>\n                <div class=\"calc-display\">0</div>\n            </div>\n            <div class=\"calc-buttons\">\n                <div class=\"calc-row\">\n                    <button class=\"calc-btn calc-btn-function\" data-action=\"memory-clear\">MC</button>\n                    <button class=\"calc-btn calc-btn-function\" data-action=\"memory-recall\">MR</button>\n                    <button class=\"calc-btn calc-btn-function\" data-action=\"memory-add\">M+</button>\n                    <button class=\"calc-btn calc-btn-function\" data-action=\"memory-subtract\">M-</button>\n                </div>\n                <div class=\"calc-row\">\n                    <button class=\"calc-btn calc-btn-function\" data-action=\"clear\">C</button>\n                    <button class=\"calc-btn calc-btn-function\" data-action=\"toggle-sign\">\xB1</button>\n                    <button class=\"calc-btn calc-btn-function\" data-action=\"percentage\">%</button>\n                    <button class=\"calc-btn calc-btn-operation\" data-operation=\"/\">\xF7</button>\n                </div>\n                <div class=\"calc-row\">\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"7\">7</button>\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"8\">8</button>\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"9\">9</button>\n                    <button class=\"calc-btn calc-btn-operation\" data-operation=\"*\">\xD7</button>\n                </div>\n                <div class=\"calc-row\">\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"4\">4</button>\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"5\">5</button>\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"6\">6</button>\n                    <button class=\"calc-btn calc-btn-operation\" data-operation=\"-\">\u2212</button>\n                </div>\n                <div class=\"calc-row\">\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"1\">1</button>\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"2\">2</button>\n                    <button class=\"calc-btn calc-btn-number\" data-number=\"3\">3</button>\n                    <button class=\"calc-btn calc-btn-operation\" data-operation=\"+\">+</button>\n                </div>\n                <div class=\"calc-row\">\n                    <button class=\"calc-btn calc-btn-number calc-btn-zero\" data-number=\"0\">0</button>\n                    <button class=\"calc-btn calc-btn-number\" data-action=\"decimal\">.</button>\n                    <button class=\"calc-btn calc-btn-equals\" data-operation=\"=\">=</button>\n                </div>\n            </div>\n        ");

    // Add event listeners
    container.addEventListener('click', e => {
      const target = e.target;
      if (target.dataset.number) {
        inputNumber(parseInt(target.dataset.number));
      } else if (target.dataset.operation) {
        performOperation(target.dataset.operation);
      } else if (target.dataset.action) {
        switch (target.dataset.action) {
          case 'decimal':
            inputDecimal();
            break;
          case 'clear':
            clear();
            break;
          case 'toggle-sign':
            toggleSign();
            break;
          case 'percentage':
            percentage();
            break;
          case 'memory-clear':
            memoryClear();
            break;
          case 'memory-recall':
            memoryRecall();
            break;
          case 'memory-add':
            memoryAdd();
            break;
          case 'memory-subtract':
            memorySubtract();
            break;
        }
      }
    });

    // Add keyboard support
    const handleKeyDown = e => {
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        inputNumber(parseInt(e.key));
      } else if (e.key === '.') {
        e.preventDefault();
        inputDecimal();
      } else if (e.key === '+') {
        e.preventDefault();
        performOperation('+');
      } else if (e.key === '-') {
        e.preventDefault();
        performOperation('-');
      } else if (e.key === '*') {
        e.preventDefault();
        performOperation('*');
      } else if (e.key === '/') {
        e.preventDefault();
        performOperation('/');
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        performOperation('=');
      } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        clear();
      } else if (e.key === '%') {
        e.preventDefault();
        percentage();
      }
    };

    // Add global keyboard listener when calculator is open
    document.addEventListener('keydown', handleKeyDown);
    cleanupFunctions.push(() => {
      document.removeEventListener('keydown', handleKeyDown);
    });

    // Prevent scrolling on the calculator container
    const preventScroll = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    container.addEventListener('wheel', preventScroll);
    container.addEventListener('touchmove', preventScroll);
    container.addEventListener('scroll', preventScroll);
    cleanupFunctions.push(() => {
      container.removeEventListener('wheel', preventScroll);
      container.removeEventListener('touchmove', preventScroll);
      container.removeEventListener('scroll', preventScroll);
    });

    // Make container focusable for keyboard events
    container.tabIndex = 0;
    return container;
  }
  function createCalculatorWindow() {
    try {
      const savedPosition = addon.settings.get('remember_position') ? JSON.parse(localStorage.getItem('sa-calculator-position') || 'null') : null;
      calculatorWindow = _window_system_window_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].createWindow({
        id: 'calculator',
        title: msg('window-title'),
        width: 280,
        height: 450,
        minWidth: 280,
        minHeight: 450,
        maxWidth: 280,
        maxHeight: 450,
        resizable: false,
        x: (savedPosition === null || savedPosition === void 0 ? void 0 : savedPosition.x) || Math.max(50, (window.innerWidth - 280) / 2),
        y: (savedPosition === null || savedPosition === void 0 ? void 0 : savedPosition.y) || Math.max(50, (window.innerHeight - 450) / 2),
        className: 'sa-calculator',
        onClose: () => {
          calculatorWindow = null;
          updateButtonState(false);
          runCleanup();
        },
        onMove: (x, y) => {
          if (addon.settings.get('remember_position')) {
            localStorage.setItem('sa-calculator-position', JSON.stringify({
              x,
              y
            }));
          }
        }
      });
      const content = createCalculatorContent();
      calculatorWindow.setContent(content);
      calculatorWindow.show();

      // Focus the calculator for keyboard input
      setTimeout(() => {
        content.focus();
      }, 100);
      updateButtonState(true);
      return calculatorWindow;
    } catch (error) {
      console.error('Error creating calculator window:', error);
      updateButtonState(false);
      return null;
    }
  }
  function updateButtonState(isActive) {
    if (calculatorButton) {
      const calculatorButtonContent = calculatorButton.querySelector('[class*="button_content"]');
      if (calculatorButtonContent) {
        calculatorButtonContent.classList.toggle('active', isActive);
      }
    }
  }
  function runCleanup() {
    for (const cleanup of cleanupFunctions) {
      try {
        cleanup();
      } catch (error) {
        console.warn('Error during calculator cleanup:', error);
      }
    }
    cleanupFunctions.length = 0;
  }
  const toggleCalculator = () => {
    if (calculatorWindow && calculatorWindow.isVisible) {
      calculatorWindow.close();
    } else {
      createCalculatorWindow();
    }
  };

  // Initialize the addon
  async function init() {
    // Wait for VM to be ready
    await new Promise(resolve => {
      if (vm.editingTarget) {
        return resolve();
      }
      vm.runtime.once("PROJECT_LOADED", resolve);
    });

    // Create calculator button
    const calculatorButtonOuter = document.createElement('div');
    calculatorButtonOuter.className = 'sa-calculator-container';
    const calculatorButton = document.createElement('div');
    calculatorButton.className = addon.tab.scratchClass('button_outlined-button', 'stage-header_stage-button');
    const calculatorButtonContent = document.createElement('div');
    calculatorButtonContent.className = addon.tab.scratchClass('button_content');
    const calculatorButtonImage = document.createElement('div');
    calculatorButtonImage.className = addon.tab.scratchClass('stage-header_stage-button-icon');
    calculatorButtonImage.draggable = false;
    calculatorButtonImage.style.width = '20px';
    calculatorButtonImage.style.height = '20px';
    calculatorButtonImage.style.backgroundColor = 'var(--text-primary)';
    calculatorButtonImage.style.maskImage = "url(".concat(addon.self.getResource('/icons/calculator.svg'), ")");
    calculatorButtonImage.style.webkitMaskImage = "url(".concat(addon.self.getResource('/icons/calculator.svg'), ")");
    calculatorButtonImage.style.maskSize = 'contain';
    calculatorButtonImage.style.webkitMaskSize = 'contain';
    calculatorButtonImage.style.maskRepeat = 'no-repeat';
    calculatorButtonImage.style.webkitMaskRepeat = 'no-repeat';
    calculatorButtonImage.style.maskPosition = 'center';
    calculatorButtonImage.style.webkitMaskPosition = 'center';
    calculatorButtonImage.title = msg('window-title');
    calculatorButtonContent.appendChild(calculatorButtonImage);
    calculatorButton.appendChild(calculatorButtonContent);
    calculatorButtonOuter.appendChild(calculatorButton);
    calculatorButton.addEventListener('click', () => {
      try {
        if (calculatorWindow && calculatorWindow.isVisible) {
          calculatorWindow.close();
        } else {
          createCalculatorWindow();
        }
      } catch (error) {
        console.error('Calculator button click error:', error);
        updateButtonState(false);
      }
    });

    // Wait for stage header and manage button visibility
    while (true) {
      try {
        await addon.tab.waitForElement('[class^="stage-header_stage-size-row"], [class^="stage-header_fullscreen-buttons-row_"]', {
          markAsSeen: true,
          reduxEvents: ["scratch-gui/mode/SET_PLAYER", "scratch-gui/mode/SET_FULL_SCREEN", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
        });
        if (addon.tab.editorMode === 'editor' && addon.settings.get('show_button')) {
          // Add next to debugger with order 2
          addon.tab.appendToSharedSpace({
            space: 'stageHeader',
            element: calculatorButtonOuter,
            order: 2
          });
        } else {
          calculatorButtonOuter.remove();
          if (calculatorWindow) {
            calculatorWindow.close();
          }
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (err) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }

  // Listen for setting changes
  addon.settings.addEventListener('changed', () => {
    if (calculatorWindow) {
      const content = createCalculatorContent();
      calculatorWindow.setContent(content);
      content.focus();
    }
  });

  // Add keyboard shortcut (Ctrl+Shift+C)
  const handleGlobalKeydown = e => {
    if (e.ctrlKey && e.shiftKey && e.key === 'C' && !e.altKey) {
      e.preventDefault();
      toggleCalculator();
    }
  };
  document.addEventListener('keydown', handleGlobalKeydown);
  cleanupFunctions.push(() => {
    document.removeEventListener('keydown', handleGlobalKeydown);
  });

  // Handle addon disable
  const handleStateChange = () => {
    if (!addon.self.enabled) {
      if (calculatorWindow) {
        calculatorWindow.close();
      }
      if (calculatorButton) {
        calculatorButton.remove();
        calculatorButton = null;
      }
      runCleanup();
    }
  };
  addon.tab.redux.addEventListener('statechanged', handleStateChange);
  cleanupFunctions.push(() => {
    addon.tab.redux.removeEventListener('statechanged', handleStateChange);
  });

  // Global cleanup on addon disable
  addon.self.addEventListener("disabled", () => {
    if (calculatorWindow) {
      calculatorWindow.close();
    }
    if (calculatorButton) {
      calculatorButton.remove();
      calculatorButton = null;
    }
    runCleanup();
  });

  // Start the addon
  init();
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-calculator.js.map