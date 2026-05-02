(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-window-theme"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/window-theme/macos.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/window-theme/macos.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addon-window {\n  border-radius: 16px !important;\n  backdrop-filter: blur(30px) saturate(180%) !important;\n  background: linear-gradient(135deg, var(--ui-modal-background, #ffffff) 0%, var(--ui-primary, #f8f9fa) 100%) !important;\n}\n\n.addon-window:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.05) inset !important;\n}\n\n.addon-window-header {\n  background: linear-gradient(135deg, var(--ui-secondary, #f8f9fa) 0%, var(--ui-primary, #ffffff) 100%) !important;\n  border-bottom: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08)) !important;\n  backdrop-filter: blur(20px) !important;\n  padding: 12px 16px !important;\n  min-height: 48px !important;\n  justify-content: flex-start !important;\n}\n\n.addon-window-title {\n  flex: 1 !important;\n  text-align: center !important;\n  font-weight: 600 !important;\n  font-size: 14px !important;\n  color: var(--text-primary, #333) !important;\n  order: 2 !important;\n  padding: 0 16px !important;\n  font-family: -apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n}\n\n.addon-window-controls {\n  order: 1 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 8px !important;\n  flex: 0 0 auto !important;\n  opacity: 1 !important;\n}\n\n.addon-window-btn {\n  border-radius: 50% !important;\n  width: 12px !important;\n  height: 12px !important;\n  padding: 0 !important;\n}\n\n.addon-window-btn-close {\n  color: #FF5F57 !important;\n  background-color: #FF5F57 !important;\n  order: 1 !important;\n}\n\n.addon-window-btn-minimize {\n  color: #FEBC2E !important;\n  background-color: #FEBC2E !important;\n  order: 2 !important;\n}\n\n.addon-window-btn-maximize,\n.addon-window-btn-restore {\n  color: #28C840 !important;\n  background-color: #28C840 !important;\n  order: 3 !important;\n}\n\n.addon-window-btn svg {\n  display: block !important;\n  width: 8px !important;\n  height: 8px !important;\n  stroke: var(--ui-white, #ffffff) !important;\n  stroke-width: 2px !important;\n  opacity: 0 !important;\n  transition: opacity 0.15s ease !important;\n}\n\n.addon-window-btn:hover {\n  opacity: 1 !important;\n\n  & svg {\n    opacity: 1 !important;\n  }\n}\n\n.addon-window-content {\n  border-radius: 0 0 16px 16px !important;\n  background: rgba(255, 255, 255, 0.6) !important;\n  backdrop-filter: blur(10px) !important;\n  border-top: 1px solid rgba(255, 255, 255, 0.3) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/window-theme/windows10.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/window-theme/windows10.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addon-window {\n  border-radius: 0 !important;\n  border: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08)) !important;\n  backdrop-filter: none !important;\n  background: var(--ui-modal-background, #ffffff) !important;\n  font-family: \"Segoe UI\", \"Microsoft YaHei\", Tahoma, Geneva, Verdana, sans-serif !important;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05) !important;\n}\n\n.addon-window:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08) !important;\n}\n\n.addon-window-header {\n  background: var(--ui-tertiary, #f3f3f3) !important;\n  border-bottom: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08)) !important;\n  backdrop-filter: none !important;\n  padding: 0 !important;\n  min-height: 40px !important;\n  justify-content: space-between !important;\n  display: flex !important;\n  align-items: center !important;\n  border-radius: 0 !important;\n}\n\n.addon-window-title {\n  flex: 0 1 auto !important;\n  text-align: left !important;\n  font-weight: 400 !important;\n  font-size: 14px !important;\n  color: var(--text-primary, #333333) !important;\n  text-shadow: none !important;\n  order: 1 !important;\n  padding-left: 16px !important;\n  padding-right: 8px !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  font-family: \"Segoe UI\", sans-serif !important;\n}\n\n.addon-window-controls {\n  order: 2 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-end !important;\n  gap: 0 !important;\n  flex: 0 0 auto !important;\n  height: 100% !important;\n}\n\n.addon-window-btn {\n  background: transparent !important;\n  border: none !important;\n  cursor: pointer !important;\n  width: 46px !important;\n  height: 32px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0 !important;\n  color: var(--text-primary, #666666) !important;\n  font-size: 0 !important;\n  margin-bottom: 7px !important;\n  padding: 0 !important;\n  top: 0 !important;\n  position: relative !important;\n}\n\n.addon-window-btn:hover {\n  background: var(--ui-tertiary, #e5e5e5) !important;\n  color: var(--text-primary, #333333) !important;\n}\n\n.addon-window-btn-close:hover {\n  background: #e81123 !important;\n  color: var(--text-primary, #ffffff) !important;\n}\n\n.addon-window-btn svg {\n  display: block !important;\n  width: 10px !important;\n  height: 10px !important;\n  stroke-width: 2.5px !important;\n  stroke: currentColor !important;\n}\n\n.addon-window-btn-close svg {\n  stroke-width: 2.2px !important;\n}\n\n.addon-window-content {\n  border-radius: 0 !important;\n  background: var(--ui-modal-background, #ffffff) !important;\n  backdrop-filter: none !important;\n  border-top: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08)) !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/window-theme/_runtime_entry.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/window-theme/_runtime_entry.js ***!
  \**********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _css_loader_macos_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-loader!./macos.css */ "./node_modules/css-loader/index.js!./src/addons/addons/window-theme/macos.css");
/* harmony import */ var _css_loader_macos_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_macos_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_windows10_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./windows10.css */ "./node_modules/css-loader/index.js!./src/addons/addons/window-theme/windows10.css");
/* harmony import */ var _css_loader_windows10_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_windows10_css__WEBPACK_IMPORTED_MODULE_1__);


const resources = {
  "macos.css": _css_loader_macos_css__WEBPACK_IMPORTED_MODULE_0___default.a,
  "windows10.css": _css_loader_windows10_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ })

}]);
//# sourceMappingURL=addon-entry-window-theme.js.map