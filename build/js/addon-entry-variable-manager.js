(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-variable-manager"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/variable-manager/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Variable Manager - MistWarp Design System - Redesigned */\n\n/* Main container */\n.sa-var-manager {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  background: var(--ui-primary);\n  border-radius: 0 0 12px 12px;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: var(--text-primary);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* Window system compatibility */\n.addon-window .sa-var-manager {\n  height: 100%;\n  border-radius: 0;\n}\n\n/* Top bar */\n.sa-var-manager-topbar {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background: linear-gradient(135deg, \n    var(--ui-secondary) 0%, \n    var(--ui-primary) 100%);\n  border-bottom: 1px solid var(--ui-black-transparent);\n  flex-shrink: 0;\n}\n\n/* Search and filter row */\n.sa-var-manager-filters {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.sa-var-manager-search-wrapper {\n  position: relative;\n  flex: 1;\n}\n\n.sa-var-manager-search-icon {\n  position: absolute;\n  left: 0.625rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: var(--text-primary);\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sa-var-manager-searchbox {\n  width: 100%;\n  padding: 0.5rem 2rem 0.5rem 2rem;\n  border: 1px solid var(--ui-black-transparent);\n  border-radius: var(--form-radius, 4px);\n  background: var(--ui-white);\n  font-size: 0.8125rem;\n  color: var(--text-primary);\n  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: inherit;\n  outline: none;\n  box-sizing: border-box;\n}\n\n.sa-var-manager-searchbox:focus {\n  border-color: var(--looks-secondary);\n  background: var(--ui-white);\n  box-shadow: 0 0 0 2px var(--looks-transparent);\n}\n\n.sa-var-manager-searchbox::placeholder {\n  color: var(--text-primary);\n}\n\n.sa-var-manager-clear-search {\n  position: absolute;\n  right: 0.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-primary);\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n  padding: 0;\n}\n\n.sa-var-manager-clear-search:hover {\n  background: var(--ui-tertiary);\n}\n\n.sa-var-manager-clear-search svg {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n\n/* Filter tabs */\n.sa-var-manager-filters-tabs {\n  display: flex;\n  gap: 0.25rem;\n  background: var(--ui-tertiary);\n  padding: 0.1875rem;\n  border-radius: var(--form-radius, 4px);\n}\n\n.sa-var-manager-filter-tab {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.375rem 0.625rem;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--form-radius, 4px) - 2px);\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  outline: none;\n}\n\n.sa-var-manager-filter-tab:hover {\n  background: var(--ui-secondary);\n}\n\n.sa-var-manager-filter-tab.sa-var-manager-filter-active {\n  background: var(--ui-white);\n  color: var(--text-primary);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.sa-var-manager-filter-tab svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n\n.sa-var-manager-filter-count {\n  background: var(--looks-secondary);\n  color: white;\n  padding: 0 0.375rem;\n  border-radius: 8px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  min-width: 1.125rem;\n  text-align: center;\n}\n\n/* Stats bar */\n.sa-var-manager-stats {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.6875rem;\n  color: var(--text-primary);\n  align-items: center;\n}\n\n.sa-var-manager-stat {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: var(--ui-tertiary);\n  padding: 0.1875rem 0.5rem;\n  border-radius: 12px;\n}\n\n.sa-var-manager-stat svg {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n\n.sa-var-manager-stat-value {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n\n/* Content area */\n.sa-var-manager-content {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0rem;\n  min-height: 0;\n}\n\n/* Section */\n.sa-var-manager-section {\n  padding: 0.5rem 0.75rem;\n}\n\n.sa-var-manager-section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n  color: var(--text-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.5rem;\n  padding: 0.25rem 0;\n}\n\n.sa-var-manager-section-header svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n\n.sa-var-manager-section-count {\n  background: var(--ui-tertiary);\n  color: var(--text-primary);\n  padding: 0 0.375rem;\n  border-radius: 8px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n\n/* Variable cards */\n.sa-var-manager-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n\n.sa-var-manager-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  padding: 0.625rem 0.75rem;\n  background: var(--ui-white);\n  border: 1px solid var(--ui-black-transparent);\n  border-radius: var(--form-radius, 4px);\n  transition: all 0.15s ease;\n}\n\n.sa-var-manager-card:hover {\n  border-color: var(--looks-light-transparent);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n\n.sa-var-manager-card:focus-within {\n  border-color: var(--looks-secondary);\n  box-shadow: 0 0 0 2px var(--looks-transparent);\n  outline: none;\n}\n\n.sa-var-manager-card-icon {\n  flex-shrink: 0;\n  width: 1.25rem;\n  height: 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  flex-direction: column;\n  align-self: center;\n  padding-top: 0.125rem;\n}\n\n.sa-var-manager-card-icon svg {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n\n.sa-var-manager-card-icon[data-type=\"variable\"] {\n  background: var(--looks-light-transparent);\n  color: var(--looks-secondary);\n}\n\n.sa-var-manager-card-icon[data-type=\"list\"] {\n  background: rgba(255, 102, 128, 0.1);\n  color: var(--data-primary);\n}\n\n.sa-var-manager-card-icon[data-type=\"cloud\"] {\n  background: var(--extensions-light);\n  color: var(--extensions-primary);\n}\n\n.sa-var-manager-card-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  min-width: 0;\n}\n\n.sa-var-manager-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.sa-var-manager-name-input {\n  flex: 1;\n  padding: 0.25rem 0.375rem;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--form-radius, 4px);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  transition: all 0.15s ease;\n  font-family: inherit;\n  outline: none;\n}\n\n.sa-var-manager-name-input:focus {\n  background: var(--ui-white);\n  border-color: var(--looks-secondary);\n  box-shadow: 0 0 0 1px var(--looks-transparent);\n}\n\n.sa-var-manager-name-input::placeholder {\n  color: var(--text-primary);\n}\n\n.sa-var-manager-card-badges {\n  display: flex;\n  gap: 0.25rem;\n  flex-shrink: 0;\n}\n\n.sa-var-manager-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.1875rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 8px;\n  font-size: 0.625rem;\n  font-weight: 500;\n}\n\n.sa-var-manager-badge svg {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n\n.sa-var-manager-badge[data-badge=\"list\"] {\n  background: rgba(255, 102, 128, 0.1);\n  color: var(--data-primary);\n}\n\n.sa-var-manager-badge[data-badge=\"cloud\"] {\n  background: var(--extensions-light);\n  color: var(--extensions-primary);\n}\n\n.sa-var-manager-value-wrapper {\n  position: relative;\n}\n\n.sa-var-manager-value-input {\n  width: 100%;\n  padding: 0.375rem 0.5rem;\n  background: var(--ui-secondary);\n  border: 1px solid transparent;\n  border-radius: var(--form-radius, 4px);\n  font-size: 0.75rem;\n  color: var(--text-primary);\n  transition: all 0.15s ease;\n  font-family: inherit;\n  outline: none;\n  resize: vertical;\n  min-height: 1.75rem;\n  box-sizing: border-box;\n}\n\n.sa-var-manager-value-input:focus {\n  background: var(--ui-white);\n  border-color: var(--looks-secondary);\n  box-shadow: 0 0 0 1px var(--looks-transparent);\n}\n\n.sa-var-manager-value-input::placeholder {\n  color: var(--text-primary);\n  font-style: italic;\n}\n\n.sa-var-manager-value-actions {\n  display: flex;\n  gap: 0.1875rem;\n  position: absolute;\n  right: 0.375rem;\n  bottom: 0.375rem;\n}\n\n.sa-var-manager-value-action {\n  width: 1.25rem;\n  height: 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--ui-white);\n  border: 1px solid var(--ui-black-transparent);\n  border-radius: 4px;\n  color: var(--text-primary);\n  cursor: pointer;\n  transition: all 0.15s ease;\n  padding: 0;\n}\n\n.sa-var-manager-value-action:hover {\n  background: var(--looks-light-transparent);\n  border-color: var(--looks-secondary);\n}\n\n.sa-var-manager-value-action svg {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n\n/* Too big state */\n.sa-var-manager-too-big {\n  display: none;\n  padding: 0.375rem 0.5rem;\n  background: var(--extensions-light);\n  border: 1px solid var(--extensions-secondary);\n  border-radius: var(--form-radius, 4px);\n  color: var(--extensions-primary);\n  font-size: 0.75rem;\n  font-style: italic;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.sa-var-manager-too-big:hover {\n  background: var(--extensions-secondary);\n}\n\n[data-too-big=\"true\"] .sa-var-manager-too-big {\n  display: block;\n}\n\n[data-too-big=\"true\"] .sa-var-manager-value-input,\n[data-too-big=\"true\"] .sa-var-manager-value-actions {\n  display: none;\n}\n\n/* Error state */\n.sa-var-manager-error {\n  border-color: var(--error-primary) !important;\n  background: var(--error-transparent) !important;\n  animation: shake 0.3s ease-in-out;\n}\n\n/* Freeze mode */\n.sa-var-manager.freeze .sa-var-manager-value-input:not(:focus),\n.sa-var-manager.freeze .sa-var-manager-name-input:not(:focus) {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1 !important;\n  pointer-events: all;\n}\n\n/* Animations */\n@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  20% { transform: translateX(-3px); }\n  40% { transform: translateX(3px); }\n  60% { transform: translateX(-3px); }\n  80% { transform: translateX(3px); }\n}\n\n/* Empty state */\n.sa-var-manager-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.25rem;\n  color: var(--text-primary);\n  text-align: center;\n}\n\n.sa-var-manager-empty-icon {\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n}\n\n.sa-var-manager-empty-text {\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 0.375rem;\n}\n\n.sa-var-manager-empty-subtext {\n  font-size: 0.6875rem;\n  opacity: 0.7;\n}\n\n/* Scrollbar */\n.sa-var-manager-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.sa-var-manager-content::-webkit-scrollbar-track {\n  background: var(--ui-tertiary);\n}\n\n.sa-var-manager-content::-webkit-scrollbar-thumb {\n  background-color: var(--ui-black-transparent);\n  border-radius: 3px;\n}\n\n.sa-var-manager-content::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* Button container */\n.sa-variable-manager-container {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n\n.sa-variable-manager-container * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n\n[dir=\"ltr\"] .sa-variable-manager-container {\n  margin-right: 0.5rem;\n}\n\n[dir=\"rtl\"] .sa-variable-manager-container {\n  margin-left: 0.5rem;\n}\n\n.sa-small-stage [class*=\"gui_body-wrapper_\"]:not(.sa-stage-hidden) .sa-variable-manager-container {\n  display: none !important;\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n  .sa-var-manager-topbar {\n    padding: 0.5rem;\n  }\n  \n  .sa-var-manager-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  \n  .sa-var-manager-filters-tabs {\n    justify-content: space-between;\n  }\n  \n  .sa-var-manager-filter-tab {\n    flex: 1;\n    justify-content: center;\n    padding: 0.375rem 0.5rem;\n    font-size: 0.6875rem;\n  }\n  \n  .sa-var-manager-section {\n    padding: 0.375rem 0.5rem;\n  }\n  \n  .sa-var-manager-card {\n    padding: 0.5rem;\n  }\n}\n\n/* High contrast */\n@media (prefers-contrast: high) {\n  .sa-var-manager-searchbox,\n  .sa-var-manager-name-input,\n  .sa-var-manager-value-input,\n  .sa-var-manager-card,\n  .sa-var-manager-filter-tab,\n  .sa-var-manager-value-action {\n    border-width: 2px;\n  }\n}\n\n/* Reduced motion */\n@media (prefers-reduced-motion: reduce) {\n  .sa-var-manager-card,\n  .sa-var-manager-searchbox,\n  .sa-var-manager-name-input,\n  .sa-var-manager-value-input,\n  .sa-var-manager-filter-tab,\n  .sa-var-manager-value-action {\n    transition: none !important;\n    animation: none !important;\n  }\n  \n  .sa-var-manager-error {\n    animation: none !important;\n    border-color: var(--error-primary);\n  }\n}\n\n/* Dark theme */\n@media (prefers-color-scheme: dark) {\n  .sa-var-manager-searchbox {\n    background-color: var(--input-background);\n    border-color: var(--ui-black-transparent);\n  }\n  \n  .sa-var-manager-filter-tab.sa-var-manager-filter-active {\n    background: var(--ui-secondary);\n  }\n  \n  .sa-var-manager-card {\n    background: var(--ui-secondary);\n  }\n  \n  .sa-var-manager-value-input {\n    background: var(--ui-tertiary);\n  }\n  \n  .sa-var-manager-value-input:focus {\n    background: var(--input-background);\n  }\n  \n  .sa-var-manager-value-action {\n    background: var(--ui-tertiary);\n  }\n}\n\n/* Fix text selection */\n[class*=\"stage-header_stage-button\"] {\n  user-select: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n}\n\n[class*=\"stage-header_stage-button\"] * {\n  user-select: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n}\n\n.sa-screenshot-container,\n.sa-debugger-container,\n.sa-gamepad-container,\n.sa-calculator-container,\n.sa-hide-stage-container {\n  user-select: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n}\n\n.sa-screenshot-container *,\n.sa-debugger-container *,\n.sa-gamepad-container *,\n.sa-calculator-container *,\n.sa-hide-stage-container * {\n  user-select: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/addons/addons/variable-manager/icon.svg":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/addons/addons/variable-manager/icon.svg ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-variable-icon lucide-variable\"><path d=\"M8 21s-4-3-4-9 4-9 4-9\"/><path d=\"M16 3s4 3 4 9-4 9-4 9\"/><line x1=\"15\" x2=\"9\" y1=\"9\" y2=\"15\"/><line x1=\"9\" x2=\"15\" y1=\"9\" y2=\"15\"/></svg>"

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/variable-manager/_runtime_entry.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/variable-manager/_runtime_entry.js ***!
  \**************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/variable-manager/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _raw_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !raw-loader!./icon.svg */ "./node_modules/raw-loader/index.js!./src/addons/addons/variable-manager/icon.svg");
/* harmony import */ var _raw_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./search.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg");
/* generated by pull.js */




const resources = {
  'userscript.js': _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'style.css': _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  'icon.svg': _raw_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  'search.svg': _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/variable-manager/icon.svg":
/*!*****************************************************!*\
  !*** ./src/addons/addons/variable-manager/icon.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXZhcmlhYmxlLWljb24gbHVjaWRlLXZhcmlhYmxlIj48cGF0aCBkPSJNOCAyMXMtNC0zLTQtOSA0LTkgNC05Ii8+PHBhdGggZD0iTTE2IDNzNCAzIDQgOS00IDktNCA5Ii8+PGxpbmUgeDE9IjE1IiB4Mj0iOSIgeTE9IjkiIHkyPSIxNSIvPjxsaW5lIHgxPSI5IiB4Mj0iMTUiIHkxPSI5IiB5Mj0iMTUiLz48L3N2Zz4="

/***/ }),

/***/ "./src/addons/addons/variable-manager/userscript.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/variable-manager/userscript.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.svg */ "./src/addons/addons/variable-manager/icon.svg");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _window_system_window_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../window-system/window-manager.js */ "./src/addons/window-system/window-manager.js");



// Lucide icons as SVG strings
const SEARCH_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/></svg>";
const X_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg>";
const VARIABLE_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 21s-4-3-4-9 4-9 4-9\"/><path d=\"M16 3s4 3 4 9-4 9-4 9\"/><line x1=\"15\" x2=\"9\" y1=\"9\" y2=\"15\"/><line x1=\"9\" x2=\"15\" y1=\"9\" y2=\"15\"/></svg>";
const LIST_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"8\" x2=\"21\" y1=\"6\" y2=\"6\"/><line x1=\"8\" x2=\"21\" y1=\"12\" y2=\"12\"/><line x1=\"8\" x2=\"21\" y1=\"18\" y2=\"18\"/><line x1=\"3\" x2=\"3.01\" y1=\"6\" y2=\"6\"/><line x1=\"3\" x2=\"3.01\" y1=\"12\" y2=\"12\"/><line x1=\"3\" x2=\"3.01\" y1=\"18\" y2=\"18\"/></svg>";
const CLOUD_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"M12 12v9\"/><path d=\"m16 16-4-4-4 4\"/></svg>";
const EYE_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>";
const EYE_OFF_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.88 9.88a3 3 0 1 0 4.24 4.24\"/><path d=\"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68\"/><path d=\"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7c.41 0 .83-.02 1.24-.05\"/><path d=\"m2 2 20 20\"/></svg>";
const SPRITE_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"/><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"/><line x1=\"12\" x2=\"12\" y1=\"22.08\" y2=\"12\"/></svg>";
const STAGE_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"/><line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\"/><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\"/></svg>";
const FILTER_ALL_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 7h8\"/><path d=\"M3 7h2\"/><path d=\"M7 11h2\"/><path d=\"M3 11h2\"/><path d=\"M5 15h2\"/><path d=\"M3 15h2\"/><path d=\"M17 11h4\"/><path d=\"M11 15h4\"/><path d=\"M15 19h2\"/></svg>";
const FILTER_VAR_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 21s-4-3-4-9 4-9 4-9\"/><path d=\"M16 3s4 3 4 9-4 9-4 9\"/><line x1=\"15\" x2=\"9\" y1=\"9\" y2=\"15\"/><line x1=\"9\" x2=\"15\" y1=\"9\" y2=\"15\"/></svg>";
const FILTER_LIST_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"8\" x2=\"21\" y1=\"6\" y2=\"6\"/><line x1=\"8\" x2=\"21\" y1=\"12\" y2=\"12\"/><line x1=\"8\" x2=\"21\" y1=\"18\" y2=\"18\"/><line x1=\"3\" x2=\"3.01\" y1=\"6\" y2=\"6\"/><line x1=\"3\" x2=\"3.01\" y1=\"12\" y2=\"12\"/><line x1=\"3\" x2=\"3.01\" y1=\"18\" y2=\"18\"/></svg>";
const FILTER_CLOUD_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.5 19c0-1.7-1.3-3-3-3h-11a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.9-1V7a3 3 0 0 1 5.93-.72\"/></svg>";
const EMPTY_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"/></svg>";

/**
 * Variable Manager addon - completely redesigned
 */
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  const vm = addon.tab.traps.vm;

  // State
  let localVariables = [];
  let globalVariables = [];
  let allVariables = [];
  let preventUpdate = false;
  let updateScheduled = false;
  let lastUpdateTime = 0;
  const UPDATE_THROTTLE = 50;
  let variableManagerWindow = null;
  let currentFilter = 'all'; // 'all', 'variables', 'lists', 'cloud'
  let currentSearch = '';
  let selectedVariable = null;

  // Create the main manager container
  const manager = document.createElement('div');
  manager.className = 'sa-var-manager';
  manager.setAttribute('role', 'main');
  manager.setAttribute('aria-label', 'Variable Manager');

  // Top bar with search and filters
  const topbar = document.createElement('div');
  topbar.className = 'sa-var-manager-topbar';

  // Search and filter row
  const filtersRow = document.createElement('div');
  filtersRow.className = 'sa-var-manager-filters';

  // Search wrapper
  const searchWrapper = document.createElement('div');
  searchWrapper.className = 'sa-var-manager-search-wrapper';
  const searchIcon = document.createElement('div');
  searchIcon.className = 'sa-var-manager-search-icon';
  searchIcon.innerHTML = SEARCH_ICON;
  const searchBox = document.createElement('input');
  searchBox.placeholder = msg('search');
  searchBox.className = 'sa-var-manager-searchbox';
  searchBox.type = 'text';
  searchBox.setAttribute('aria-label', msg('search-aria'));
  const clearSearchBtn = document.createElement('button');
  clearSearchBtn.className = 'sa-var-manager-clear-search';
  clearSearchBtn.innerHTML = X_ICON;
  clearSearchBtn.title = msg('clear-search');
  clearSearchBtn.style.display = 'none';
  clearSearchBtn.setAttribute('aria-label', msg('clear-search'));
  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchBox);
  searchWrapper.appendChild(clearSearchBtn);

  // Filter tabs
  const filterTabs = document.createElement('div');
  filterTabs.className = 'sa-var-manager-filters-tabs';
  const createFilterTab = (filter, icon, label) => {
    const tab = document.createElement('button');
    tab.className = 'sa-var-manager-filter-tab';
    tab.dataset.filter = filter;
    tab.innerHTML = "".concat(icon, "<span>").concat(label, "</span><span class=\"sa-var-manager-filter-count\">0</span>");
    tab.setAttribute('aria-label', msg('filter-by', {
      label
    }));
    tab.setAttribute('role', 'button');
    tab.setAttribute('tabindex', '0');
    tab.addEventListener('click', () => setFilter(filter));
    tab.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setFilter(filter);
      }
    });
    return tab;
  };
  const allFilterTab = createFilterTab('all', FILTER_ALL_ICON, msg('filter-all'));
  const varFilterTab = createFilterTab('variables', FILTER_VAR_ICON, msg('filter-variables'));
  const listFilterTab = createFilterTab('lists', FILTER_LIST_ICON, msg('filter-lists'));
  const cloudFilterTab = createFilterTab('cloud', FILTER_CLOUD_ICON, msg('filter-cloud'));
  filterTabs.append(allFilterTab, varFilterTab, listFilterTab, cloudFilterTab);
  filtersRow.append(searchWrapper, filterTabs);
  topbar.appendChild(filtersRow);

  // Stats bar
  const statsBar = document.createElement('div');
  statsBar.className = 'sa-var-manager-stats';
  const createStat = (icon, value) => {
    const stat = document.createElement('div');
    stat.className = 'sa-var-manager-stat';
    stat.innerHTML = "".concat(icon, "<span class=\"sa-var-manager-stat-value\">").concat(value, "</span>");
    return stat;
  };
  const statsVariables = createStat(VARIABLE_ICON, '0');
  const statsLists = createStat(LIST_ICON, '0');
  const statsCloud = createStat(CLOUD_ICON, '0');
  statsBar.append(statsVariables, statsLists, statsCloud);
  topbar.appendChild(statsBar);
  manager.appendChild(topbar);

  // Content area
  const content = document.createElement('div');
  content.className = 'sa-var-manager-content';
  manager.appendChild(content);

  // Empty state
  const emptyState = document.createElement('div');
  emptyState.className = 'sa-var-manager-empty';
  emptyState.innerHTML = "\n        <div class=\"sa-var-manager-empty-icon\">".concat(EMPTY_ICON, "</div>\n        <div class=\"sa-var-manager-empty-text\">").concat(msg('no-variables'), "</div>\n        <div class=\"sa-var-manager-empty-subtext\">").concat(msg('clear-filters'), "</div>\n    ");
  emptyState.style.display = 'none';
  content.appendChild(emptyState);

  // Local section
  const localSection = document.createElement('div');
  localSection.className = 'sa-var-manager-section';
  localSection.innerHTML = "\n        <div class=\"sa-var-manager-section-header\">\n            ".concat(SPRITE_ICON, "\n            <span>").concat(msg('local-section'), "</span>\n            <span class=\"sa-var-manager-section-count\">0</span>\n        </div>\n        <div class=\"sa-var-manager-list\"></div>\n    ");
  content.appendChild(localSection);
  const localList = localSection.querySelector('.sa-var-manager-list');
  const localCount = localSection.querySelector('.sa-var-manager-section-count');

  // Global section
  const globalSection = document.createElement('div');
  globalSection.className = 'sa-var-manager-section';
  globalSection.innerHTML = "\n        <div class=\"sa-var-manager-section-header\">\n            ".concat(STAGE_ICON, "\n            <span>").concat(msg('global-section'), "</span>\n            <span class=\"sa-var-manager-section-count\">0</span>\n        </div>\n        <div class=\"sa-var-manager-list\"></div>\n    ");
  content.appendChild(globalSection);
  const globalList = globalSection.querySelector('.sa-var-manager-list');
  const globalCount = globalSection.querySelector('.sa-var-manager-section-count');

  // Helper functions
  const updateStats = () => {
    const variables = allVariables.filter(v => v.type === 'variable').length;
    const lists = allVariables.filter(v => v.type === 'list').length;
    const clouds = allVariables.filter(v => v.isCloud).length;
    statsVariables.querySelector('.sa-var-manager-stat-value').textContent = variables;
    statsLists.querySelector('.sa-var-manager-stat-value').textContent = lists;
    statsCloud.querySelector('.sa-var-manager-stat-value').textContent = clouds;

    // Update filter counts
    allFilterTab.querySelector('.sa-var-manager-filter-count').textContent = allVariables.length;
    varFilterTab.querySelector('.sa-var-manager-filter-count').textContent = variables;
    listFilterTab.querySelector('.sa-var-manager-filter-count').textContent = lists;
    cloudFilterTab.querySelector('.sa-var-manager-filter-count').textContent = clouds;
  };
  const setFilter = filter => {
    currentFilter = filter;
    filterTabs.querySelectorAll('.sa-var-manager-filter-tab').forEach(tab => {
      tab.classList.toggle('sa-var-manager-filter-active', tab.dataset.filter === filter);
    });
    applyFilters();
  };
  const applyFilters = () => {
    const searchLower = currentSearch.toLowerCase();
    allVariables.forEach(v => {
      var _v$value;
      const matchesSearch = !searchLower || v.name.toLowerCase().includes(searchLower) || ((_v$value = v.value) === null || _v$value === void 0 ? void 0 : _v$value.toString().toLowerCase().includes(searchLower));
      let matchesFilter = true;
      if (currentFilter === 'variables') {
        matchesFilter = v.type === 'variable';
      } else if (currentFilter === 'lists') {
        matchesFilter = v.type === 'list';
      } else if (currentFilter === 'cloud') {
        matchesFilter = v.isCloud;
      }
      const visible = matchesSearch && matchesFilter;
      v.setVisible(visible);
    });
    updateSectionVisibility();
  };
  const updateSectionVisibility = () => {
    const visibleLocals = localVariables.filter(v => v.visible);
    const visibleGlobals = globalVariables.filter(v => v.visible);
    localSection.style.display = visibleLocals.length > 0 ? 'block' : 'none';
    globalSection.style.display = visibleGlobals.length > 0 ? 'block' : 'none';
    localCount.textContent = visibleLocals.length;
    globalCount.textContent = visibleGlobals.length;
    const hasVisible = visibleLocals.length > 0 || visibleGlobals.length > 0;
    emptyState.style.display = hasVisible ? 'none' : 'flex';
  };

  // Search functionality
  let searchTimeout;
  const performSearch = searchTerm => {
    currentSearch = searchTerm;
    clearSearchBtn.style.display = searchTerm ? 'flex' : 'none';
    applyFilters();
  };
  searchBox.addEventListener('input', e => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => performSearch(e.target.value), 100);
  });
  clearSearchBtn.addEventListener('click', () => {
    searchBox.value = '';
    performSearch('');
    searchBox.focus();
  });
  searchBox.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (searchBox.value) {
        clearSearchBtn.click();
      } else {
        hideVariableManager();
      }
      e.preventDefault();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusFirstVisibleVariable();
    }
  });
  const focusFirstVisibleVariable = () => {
    const firstVisible = allVariables.find(v => v.visible && v.input);
    if (firstVisible && firstVisible.input) {
      firstVisible.input.focus();
      selectedVariable = firstVisible;
    }
  };

  // WrappedVariable class - completely redesigned
  class WrappedVariable {
    constructor(scratchVariable, target) {
      this.scratchVariable = scratchVariable;
      this.target = target;
      this.type = scratchVariable.type === 'list' ? 'list' : 'variable';
      this.isCloud = scratchVariable.isCloud || false;
      this.name = scratchVariable.name;
      this.id = scratchVariable.id;
      this.visible = true;
      this.ignoreTooBig = false;
      this.lastValue = null;
      this.buildDOM();
    }
    buildDOM() {
      this.card = document.createElement('div');
      this.card.className = 'sa-var-manager-card';
      this.card.dataset.variableId = this.id;
      const icon = document.createElement('div');
      icon.className = 'sa-var-manager-card-icon';
      icon.dataset.type = this.isCloud ? 'cloud' : this.type;
      if (this.isCloud) {
        icon.innerHTML = CLOUD_ICON;
      } else if (this.type === 'list') {
        icon.innerHTML = LIST_ICON;
      } else {
        icon.innerHTML = VARIABLE_ICON;
      }
      const body = document.createElement('div');
      body.className = 'sa-var-manager-card-body';
      const header = document.createElement('div');
      header.className = 'sa-var-manager-card-header';
      const nameInput = document.createElement('input');
      nameInput.className = 'sa-var-manager-name-input';
      nameInput.value = this.name;
      nameInput.setAttribute('aria-label', this.type === 'list' ? msg('list-name') : msg('variable-name'));
      this.nameInput = nameInput;
      const badges = document.createElement('div');
      badges.className = 'sa-var-manager-card-badges';
      if (this.type === 'list') {
        const listBadge = document.createElement('div');
        listBadge.className = 'sa-var-manager-badge';
        listBadge.dataset.badge = 'list';
        listBadge.innerHTML = "".concat(LIST_ICON, "<span>").concat(msg('list-badge'), "</span>");
        badges.appendChild(listBadge);
      }
      if (this.isCloud) {
        const cloudBadge = document.createElement('div');
        cloudBadge.className = 'sa-var-manager-badge';
        cloudBadge.dataset.badge = 'cloud';
        cloudBadge.innerHTML = "".concat(CLOUD_ICON, "<span>").concat(msg('cloud-badge'), "</span>");
        badges.appendChild(cloudBadge);
      }
      header.append(nameInput, badges);
      const valueWrapper = document.createElement('div');
      valueWrapper.className = 'sa-var-manager-value-wrapper';
      const valueInput = document.createElement('textarea');
      valueInput.className = 'sa-var-manager-value-input';
      valueInput.setAttribute('aria-label', "".concat(this.name, " value"));
      this.input = valueInput;
      const tooBig = document.createElement('button');
      tooBig.className = 'sa-var-manager-too-big';
      tooBig.textContent = msg('variable-too-large');
      tooBig.addEventListener('click', () => {
        this.ignoreTooBig = true;
        this.updateValue(true);
      });
      this.tooBig = tooBig;
      valueWrapper.append(valueInput, tooBig);
      body.append(header, valueWrapper);
      this.card.append(icon, body);
      this.setupEventListeners();
    }
    setupEventListeners() {
      const workspace = () => Blockly.getMainWorkspace();

      // Name input handling
      const onNameBlur = () => {
        const newName = this.nameInput.value.trim();
        if (newName === this.name) return;
        const CLOUD_PREFIX = '☁ ';
        let processedName = newName;
        if (this.isCloud) {
          if (!processedName.startsWith('☁')) {
            processedName = CLOUD_PREFIX + processedName;
          } else if (!processedName.startsWith(CLOUD_PREFIX)) {
            processedName = CLOUD_PREFIX + processedName.substring(1);
          }
        }
        if (!processedName.trim()) {
          this.showError(this.nameInput);
          return;
        }
        let nameAlreadyUsed = false;
        try {
          const w = workspace();
          if (this.target.isStage) {
            const existingNames = vm.runtime.getAllVarNamesOfType(this.scratchVariable.type);
            nameAlreadyUsed = existingNames.includes(processedName);
          } else if (w) {
            nameAlreadyUsed = !!w.getVariable(processedName, this.scratchVariable.type);
          }
        } catch (e) {
          console.error('Error checking variable name:', e);
        }
        if (nameAlreadyUsed) {
          this.showError(this.nameInput);
          return;
        }
        try {
          const w = workspace();
          if (w) {
            w.renameVariableById(this.id, processedName);
          }
          this.name = processedName;
          if (this.nameInput.value !== processedName) {
            this.nameInput.value = processedName;
          }
        } catch (e) {
          console.error('Error renaming variable:', e);
          this.showError(this.nameInput);
        }
      };
      this.nameInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.nameInput.blur();
        }
        if (e.key === 'Escape') {
          this.nameInput.value = this.name;
          e.preventDefault();
          this.nameInput.blur();
        }
      });
      this.nameInput.addEventListener('focus', () => {
        preventUpdate = true;
        manager.classList.add('freeze');
        this.nameInput.select();
      });
      this.nameInput.addEventListener('blur', () => {
        onNameBlur();
        preventUpdate = false;
        manager.classList.remove('freeze');
      });

      // Value input handling
      const onValueBlur = () => {
        try {
          const newValue = this.scratchVariable.type === 'list' ? this.input.value.split('\n').filter(line => line !== '') : this.input.value;
          vm.setVariableValue(this.target.id, this.id, newValue);
          this.input.classList.remove('sa-var-manager-error');
        } catch (e) {
          console.error('Error setting variable value:', e);
          this.showError(this.input);
        }
      };
      this.input.addEventListener('keydown', e => {
        if (e.key === 'a' && (e.ctrlKey || e.metaKey)) return; // Allow Ctrl+A

        if (e.key === 'Escape') {
          this.updateValue(true);
          e.preventDefault();
          this.input.blur();
        }

        // Tab navigation
        if (e.key === 'Tab') {
          const currentIndex = allVariables.indexOf(selectedVariable);
          if (e.shiftKey && currentIndex > 0) {
            e.preventDefault();
            const prev = allVariables.slice(0, currentIndex).reverse().find(v => v.visible);
            if (prev && prev.input) {
              prev.input.focus();
              selectedVariable = prev;
            }
          } else if (!e.shiftKey && currentIndex < allVariables.length - 1) {
            e.preventDefault();
            const next = allVariables.slice(currentIndex + 1).find(v => v.visible);
            if (next && next.input) {
              next.input.focus();
              selectedVariable = next;
            }
          }
        }
      });
      this.input.addEventListener('focus', () => {
        preventUpdate = true;
        manager.classList.add('freeze');
        selectedVariable = this;
        if (this.scratchVariable.type !== 'list') {
          this.input.select();
        } else {
          this.input.setSelectionRange(0, 0);
        }
      });
      this.input.addEventListener('blur', () => {
        onValueBlur();
        preventUpdate = false;
        manager.classList.remove('freeze');
      });
      this.input.addEventListener('touchstart', e => {
        e.stopPropagation();
      }, {
        passive: true
      });
    }
    showError(element) {
      element.classList.add('sa-var-manager-error');
      setTimeout(() => element.classList.remove('sa-var-manager-error'), 1000);
    }
    updateValue(force) {
      if (!this.visible && !force) return;
      let value;
      let maxSafeLength;
      if (this.type === 'list') {
        value = this.scratchVariable.value.join('\n');
        maxSafeLength = 5000000;
      } else {
        value = String(this.scratchVariable.value);
        maxSafeLength = 1000000;
      }
      if (!force && this.lastValue === value) return;
      this.lastValue = value;
      if (!this.ignoreTooBig && value.length > maxSafeLength) {
        this.card.dataset.tooBig = 'true';
        return;
      }
      this.card.dataset.tooBig = 'false';
      if (this.input.value !== value) {
        this.input.value = value;
        if (this.type === 'list') {
          this.input.style.height = 'auto';
          const height = Math.min(200, this.input.scrollHeight);
          if (height > 0) {
            this.input.style.height = "".concat(height, "px");
          }
        }
      }
    }
    setVisible(visible) {
      if (this.visible === visible) return;
      this.visible = visible;
      this.card.style.display = visible ? 'flex' : 'none';
      if (visible) {
        this.updateValue(true);
      }
    }
  }

  // Update scheduling
  const scheduleUpdate = () => {
    if (updateScheduled) return;
    if (!variableManagerWindow || preventUpdate || !variableManagerWindow.isVisible) return;
    updateScheduled = true;
    requestAnimationFrame(() => {
      const now = Date.now();
      if (now - lastUpdateTime < UPDATE_THROTTLE) {
        setTimeout(() => {
          updateScheduled = false;
          scheduleUpdate();
        }, UPDATE_THROTTLE - (now - lastUpdateTime));
        return;
      }
      quickReload();
      lastUpdateTime = now;
      updateScheduled = false;
    });
  };
  const quickReload = () => {
    if (!variableManagerWindow || preventUpdate || !variableManagerWindow.isVisible) return;
    allVariables.forEach(v => v.updateValue());
  };
  const fullReload = () => {
    if (!variableManagerWindow || preventUpdate || !variableManagerWindow.isVisible) return;
    const editingTarget = vm.runtime.getEditingTarget();
    const stage = vm.runtime.getTargetForStage();

    // Clean up old variables
    localVariables.forEach(v => v.card.remove());
    globalVariables.forEach(v => v.card.remove());
    localVariables = editingTarget.isStage ? [] : Object.values(editingTarget.variables).filter(i => i.type === '' || i.type === 'list').map(i => new WrappedVariable(i, editingTarget));
    globalVariables = Object.values(stage.variables).filter(i => i.type === '' || i.type === 'list').map(i => new WrappedVariable(i, stage));
    allVariables = [...localVariables, ...globalVariables];

    // Append to lists
    localList.append(...localVariables.map(v => v.card));
    globalList.append(...globalVariables.map(v => v.card));
    applyFilters();
    updateStats();
  };

  // Window management
  const toggleVariableManager = () => {
    if (variableManagerWindow && variableManagerWindow.isVisible) {
      hideVariableManager();
    } else {
      showVariableManager();
    }
  };
  const showVariableManager = () => {
    if (variableManagerWindow) {
      variableManagerWindow.show().bringToFront();
      return;
    }
    const initialX = Math.max(24, Math.min(window.innerWidth - 474, 50));
    const initialY = Math.max(24, Math.min(window.innerHeight - 574, 50));
    variableManagerWindow = _window_system_window_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createWindow({
      id: 'variable-manager',
      title: msg('variables-manager'),
      width: 650,
      height: 600,
      minWidth: 500,
      minHeight: 400,
      maxWidth: Math.min(window.innerWidth * 0.9, 1400),
      maxHeight: Math.min(window.innerHeight * 0.9, 1000),
      className: 'sa-variable-manager-window',
      x: initialX,
      y: initialY,
      onClose: () => {
        variableManagerWindow = null;
        cleanup();
      }
    });

    // Try to position near debugger
    const debuggerEl = document.querySelector('.sa-debugger-window');
    if (debuggerEl) {
      try {
        const debuggerRect = debuggerEl.getBoundingClientRect();
        const margin = 10;
        if (debuggerRect.left > 460) {
          variableManagerWindow.x = Math.max(margin, debuggerRect.left - 460 - margin);
        } else {
          variableManagerWindow.x = Math.min(window.innerWidth - 460 - margin, debuggerRect.right + margin);
        }
        variableManagerWindow.y = Math.max(margin, debuggerRect.top);
      } catch (e) {
        // Use default position
      }
    }
    variableManagerWindow.setContent(manager);
    variableManagerWindow.show();
    setTimeout(() => {
      searchBox.focus();
      fullReload();
    }, 50);
  };
  const hideVariableManager = () => {
    if (variableManagerWindow) {
      variableManagerWindow.close();
    }
  };

  // Cleanup
  const cleanup = () => {
    localVariables.forEach(v => v.card.remove());
    globalVariables.forEach(v => v.card.remove());
    localVariables = [];
    globalVariables = [];
    allVariables = [];
    selectedVariable = null;
  };

  // Keyboard shortcuts
  const handleKeyboardShortcuts = e => {
    if (!variableManagerWindow || !variableManagerWindow.isVisible) return;
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
      e.preventDefault();
      searchBox.focus();
      searchBox.select();
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'V') {
      e.preventDefault();
      hideVariableManager();
    }
    if (e.key === 'Escape') {
      if (document.activeElement === searchBox && searchBox.value) {
        clearSearchBtn.click();
      } else {
        hideVariableManager();
      }
    }
  };
  document.addEventListener('keydown', handleKeyboardShortcuts);

  // Event hooks
  vm.runtime.on('PROJECT_LOADED', () => {
    var _variableManagerWindo;
    if ((_variableManagerWindo = variableManagerWindow) !== null && _variableManagerWindo !== void 0 && _variableManagerWindo.isVisible) fullReload();
  });
  vm.runtime.on('TOOLBOX_EXTENSIONS_NEED_UPDATE', () => {
    var _variableManagerWindo2;
    if ((_variableManagerWindo2 = variableManagerWindow) !== null && _variableManagerWindo2 !== void 0 && _variableManagerWindo2.isVisible) fullReload();
  });
  let stepHookInstalled = false;
  const installStepHook = () => {
    if (stepHookInstalled) return;
    stepHookInstalled = true;
    const oldStep = vm.runtime._step;
    vm.runtime._step = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const ret = oldStep.call(this, ...args);
      try {
        scheduleUpdate();
      } catch (e) {
        console.error(e);
      }
      return ret;
    };
  };
  installStepHook();
  addon.self.addEventListener('disabled', () => {
    document.removeEventListener('keydown', handleKeyboardShortcuts);
    hideVariableManager();
    cleanup();
  });
  addon.self.addEventListener('reenabled', () => {
    if (variableManagerWindow) fullReload();
  });

  // Expose toggle function
  window.__bilupVariableManagerToggle = toggleVariableManager;

  // Create button
  const buttonOuter = document.createElement('div');
  buttonOuter.className = 'sa-variable-manager-container';
  const button = document.createElement('div');
  button.className = addon.tab.scratchClass('button_outlined-button', 'stage-header_stage-button');
  const buttonContent = document.createElement('div');
  buttonContent.className = addon.tab.scratchClass('button_content');
  const buttonImage = document.createElement('svg');
  buttonImage.className = addon.tab.scratchClass('stage-header_stage-button-icon');
  buttonImage.draggable = false;
  buttonImage.innerHTML = addon.self.getResource('/icon.svg');
  buttonContent.appendChild(buttonImage);
  button.appendChild(buttonContent);
  buttonOuter.appendChild(button);
  const preventSelection = e => e.preventDefault();
  button.addEventListener('mousedown', preventSelection);
  button.addEventListener('selectstart', preventSelection);
  button.addEventListener('click', toggleVariableManager);

  // Global keyboard shortcut
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'V' && !e.repeat) {
      e.preventDefault();
      toggleVariableManager();
    }
  });

  // Add to stage header
  while (true) {
    await addon.tab.waitForElement('[class^="stage-header_stage-size-row"], [class^="stage-header_fullscreen-buttons-row_"]', {
      markAsSeen: true,
      reduxEvents: ['scratch-gui/mode/SET_PLAYER', 'scratch-gui/mode/SET_FULL_SCREEN', 'fontsLoaded/SET_FONTS_LOADED', 'scratch-gui/locales/SELECT_LOCALE'],
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    if (addon.tab.editorMode === 'editor') {
      addon.tab.appendToSharedSpace({
        space: 'stageHeader',
        element: buttonOuter,
        order: 2
      });
    } else {
      buttonOuter.remove();
      hideVariableManager();
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-variable-manager.js.map