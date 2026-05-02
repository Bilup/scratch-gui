(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-tab-styles"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/tab-styles/icon-only.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/tab-styles/icon-only.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tab_\"] span {\n    display: none;\n}\n\n[class*=\"gui_tab_\"] svg {\n    margin-right: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/tab-styles/scratchbox.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/tab-styles/scratchbox.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tab_\"] {\n  border-radius: 0.75rem 0.75rem 0.25rem 0.25rem !important;\n}\n\n[class*=\"gui_tab_\"]:not(:first-child) {\n  margin-left: 0.3rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/tab-styles/text-only.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/tab-styles/text-only.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tab_\"] svg {\n    display: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/tab-styles/turbowarp.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/tab-styles/turbowarp.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* TurboWarp Tab Styles */\n[class*=\"gui_tab_\"] {\n  flex-grow: 1;\n  height: 80%;\n  top: 0;\n  margin-bottom: 0;\n  border-radius: 1rem 1rem 0 0 !important;\n  border: 1px solid var(--ui-black-transparent);\n  padding: 0.125rem 1.25rem 0;\n  font-size: 0.75rem;\n  background-color: var(--ui-tertiary);\n  color: var(--ui-text-primary-transparent);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n\n  &:hover {\n    border: 1px solid var(--ui-black-transparent);\n    background-color: var(--ui-white);\n  }\n\n  & svg {\n    margin-right: 0.125rem;\n  }\n}\n\n[class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"] {\n  height: 90%;\n  color: var(--looks-secondary);\n  background-color: var(--ui-white);\n  z-index: 4 !important;\n}\n\n/* Ensure selected tab always has highest z-index, regardless of position */\n[dir=\"ltr\"] [class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"]:nth-child(1) {\n  z-index: 4 !important;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"]:nth-child(2) {\n  z-index: 4 !important;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"]:nth-child(3) {\n  z-index: 4 !important;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"]:hover {\n  z-index: 4 !important;\n}\n\n[dir=\"ltr\"] [class*=\"gui_tab_\"] {\n  margin-left: -0.35rem;\n}\n\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(1) {\n  z-index: 3 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(2) {\n  z-index: 2 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(3) {\n  z-index: 1 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(1):hover {\n  z-index: 3 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(2):hover {\n  z-index: 2 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(3):hover {\n  z-index: 1 ;\n}\n\n[class*=\"gui_tab-list\"] {\n  padding-left: 0;\n  height: 2.75rem;\n  width: 250px;\n  display: flex;\n  align-items: flex-end;\n  flex-shrink: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 0.80rem;\n  margin: 0 !important;\n  border-bottom: 0 !important;\n  color: var(--text-primary);\n}", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/tab-styles/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/tab-styles/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _css_loader_turbowarp_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-loader!./turbowarp.css */ "./node_modules/css-loader/index.js!./src/addons/addons/tab-styles/turbowarp.css");
/* harmony import */ var _css_loader_turbowarp_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_turbowarp_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_scratchbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./scratchbox.css */ "./node_modules/css-loader/index.js!./src/addons/addons/tab-styles/scratchbox.css");
/* harmony import */ var _css_loader_scratchbox_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_scratchbox_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_icon_only_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./icon-only.css */ "./node_modules/css-loader/index.js!./src/addons/addons/tab-styles/icon-only.css");
/* harmony import */ var _css_loader_icon_only_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_icon_only_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_loader_text_only_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-loader!./text-only.css */ "./node_modules/css-loader/index.js!./src/addons/addons/tab-styles/text-only.css");
/* harmony import */ var _css_loader_text_only_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_loader_text_only_css__WEBPACK_IMPORTED_MODULE_3__);




const resources = {
  "turbowarp.css": _css_loader_turbowarp_css__WEBPACK_IMPORTED_MODULE_0___default.a,
  "scratchbox.css": _css_loader_scratchbox_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icon-only.css": _css_loader_icon_only_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "text-only.css": _css_loader_text_only_css__WEBPACK_IMPORTED_MODULE_3___default.a
};

/***/ })

}]);
//# sourceMappingURL=addon-entry-tab-styles.js.map