(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-todo"],{

/***/ "./node_modules/css-loader/index.js?{\"esModule\":false}!./src/addons/addons/todo/userstyle.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader?{"esModule":false}!./src/addons/addons/todo/userstyle.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-todo {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    width: 100%;\n    box-sizing: border-box;\n}\n\n.sa-todo-list,\n.sa-todo-modal-preview-steps-step {\n    list-style-type: none;\n    padding: 0;\n}\n\n.sa-todo-list {\n    flex: 1;\n    overflow: auto;\n    animation: list-in 0.4s cubic-bezier(0, 1, 1, 1);\n    -webkit-animation: list-in 0.4s cubic-bezier(0, 1, 1, 1);\n    -webkit-transition: height 0.3s ease;\n    -moz-transition: height 0.3s ease;\n    -ms-transition: height 0.3s ease;\n    -o-transition: height 0.3s ease;\n}\n\n.sa-todo-modal-preview-steps-step {\n    display: flex;\n    gap: 10px;\n    margin: 5px 2px;\n}\n\n.sa-todo-modal-preview-steps {\n    margin: 0;\n}\n\n.sa-todo-list-ele-steps-li {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 5px;\n}\n\n.sa-todo-list-ele-steps-main {\n    overflow: hidden;\n}\n\n.sa-todo-list-ele {\n    height: auto;\n    transition: height 0.3s ease;\n    background: var(--ui-tertiary);\n    border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    -ms-border-radius: 5px;\n    -o-border-radius: 5px;\n    margin-bottom: 5px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.sa-todo-list-ele-steps {\n    grid-template-rows: 0;\n    transition: grid-template-rows 0.3s ease;\n    display: grid;\n    -webkit-transition: grid-template-rows 0.3s ease;\n    -moz-transition: grid-template-rows 0.3s ease;\n    -ms-transition: grid-template-rows 0.3s ease;\n    -o-transition: grid-template-rows 0.3s ease;\n}\n\n@keyframes list-in {\n    from {\n        opacity: 0;\n        transform: translateY(30px);\n        -webkit-transform: translateY(30px);\n        -moz-transform: translateY(30px);\n        -ms-transform: translateY(30px);\n        -o-transform: translateY(30px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n        -webkit-transform: translateY(0);\n        -moz-transform: translateY(0);\n        -ms-transform: translateY(0);\n        -o-transform: translateY(0);\n    }\n}\n\n.sa-todo-list-ele-title,\n.sa-todo-modal-preview-title {\n    font-weight: bolder;\n    font-size: 30px;\n    text-shadow: #00000030 0 0 2px;\n    color: white;\n    transition: opacity 0.3s ease, outline 0.2s ease;\n    -webkit-transition: opacity 0.3s ease, outline 0.2s ease;\n    -moz-transition: opacity 0.3s ease, outline 0.2s ease;\n    -ms-transition: opacity 0.3s ease, outline 0.2s ease;\n    -o-transition: opacity 0.3s ease, outline 0.2s ease;\n    border: none;\n    background-color: transparent;\n    outline: 0px solid;\n    flex: 1 1 0%;\n}\n\n.sa-todo-modal-preview-steps-step-input {\n    color: white;\n    transition: color 0.3s ease, outline 0.2s ease;\n    -webkit-transition: color 0.3s ease, outline 0.2s ease;\n    -moz-transition: color 0.3s ease, outline 0.2s ease;\n    -ms-transition: color 0.3s ease, outline 0.2s ease;\n    -o-transition: color 0.3s ease, outline 0.2s ease;\n    border: none;\n    background-color: transparent;\n    outline: 0px solid;\n}\n\n.sa-todo-modal-preview-title:hover,\n.sa-todo-modal-preview-steps-step-input:hover {\n    outline: 2px solid\n}\n\n.sa-todo-list-ele-title.done {\n    color: #ffffff50;\n    text-decoration: line-through solid white;\n}\n\n.sa-todo-modal-preview-date {\n    color: white\n}\n\n.sa-todo-list-ele-titleDiv {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.sa-todo-list-ele-titleDiv-dropdown {\n    width: 20px;\n    height: 20px;\n    padding: 1px;\n    margin-left: 5px;\n    border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    -ms-border-radius: 5px;\n    -o-border-radius: 5px;\n    transition: transform 0.3s ease;\n    -webkit-transition: transform 0.3s ease;\n    -moz-transition: transform 0.3s ease;\n    -ms-transition: transform 0.3s ease;\n    -o-transition: transform 0.3s ease;\n}\n\n.sa-todo-list-ele-titleDiv-dropdown:hover {\n    background-color: #ffffff20;\n}\n\n.sa-todo-popup,\n.sa-todo-modal-popup {\n    width: 50vw;\n    position: relative;\n}\n\n.sa-todo-content,\n.sa-todo-modal-content {\n    padding: 1.5rem 2.25rem;\n    padding-bottom: 72px;\n    max-height: 70vh;\n    height: 70vh;\n    overflow: auto;\n}\n\n.sa-todo-modal-content {\n    padding-bottom: 1.5rem;\n    display: flex;\n}\n\n.sa-todo-modal-preview {\n    height: auto;\n    transition: height 0.3s ease;\n    background: var(--ui-tertiary);\n    border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    -ms-border-radius: 5px;\n    -o-border-radius: 5px;\n    margin-bottom: 5px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.sa-todo-modal-input {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin: 5px;\n    height: 40px;\n}\n\n.sa-todo-modal-input-input {\n    width: 200px;\n}\n\n.sa-todo-modal-input-input[type=color] {\n    background: transparent;\n    border: none;\n    padding: 0;\n}\n\n.sa-todo-modal-preview-steps-step-remove,\n.sa-todo-modal-preview-steps-step-rename {\n    border-radius: 99px;\n    border: none;\n    -webkit-border-radius: 99px;\n    -moz-border-radius: 99px;\n    -ms-border-radius: 99px;\n    -o-border-radius: 99px;\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sa-todo-modal-preview-steps-step-remove:hover,\n.sa-todo-modal-preview-steps-step-rename:hover {\n    filter: brightness(1.2);\n    -webkit-filter: brightness(1.2);\n}\n\n.sa-todo-add-todo {\n    width: 100%;\n    height: 30px;\n    background-color: var(--looks-secondary);\n    color: white;\n    border: none;\n    border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    -ms-border-radius: 5px;\n    -o-border-radius: 5px;\n    display: flex;\n    font-size: 20px;\n    flex-direction: row;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.sa-todo-add-todo-text_t {\n    width: 0;\n    transition: width 0.5s ease, opacity 0.3s ease, font-size 0.1s ease;\n    font-size: 10px;\n    -webkit-transition: width 0.5s ease, opacity 0.3s ease, font-size 0.1s ease;\n    -moz-transition: width 0.5s ease, opacity 0.3s ease, font-size 0.1s ease;\n    -ms-transition: width 0.5s ease, opacity 0.3s ease, font-size 0.1s ease;\n    -o-transition: width 0.5s ease, opacity 0.3s ease, font-size 0.1s ease;\n    white-space: nowrap;\n    opacity: 0;\n}\n\n.sa-todo-add-todo-text_t.active {\n    width: var(--width);\n    opacity: 1;\n    font-size: 16px;\n}\n\n.sa-todo-add-todo-text_p {\n    color: white;\n}\n\n.sa-todo-list-ele-done {\n    padding: 8px;\n    border-radius: 999px;\n    width: 30px;\n    height: 30px;\n    margin-left: 2px;\n}\n\n.sa-todo-list-ele-done:hover {\n    filter: brightness(1.2);\n    -webkit-filter: brightness(1.2);\n}\n\n.sa-todo-modal-title {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 0.5rem 0 0 0;\n    font-weight: bold;\n}\n\n.sa-todo-modal-title>div {\n    flex-grow: 1;\n    margin-left: 1rem;\n    border-top: 1px dashed var(--ui-tertiary);\n}\n\n.sa-todo-modal-create-button {\n    position: absolute;\n    bottom: 15px;\n    background-color: var(--looks-secondary);\n    color: white;\n    padding: 0.5rem 1rem;\n    border: none;\n    border-radius: 4px;\n    margin: 5px;\n    font-family: inherit;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.sa-todo-modal-create-button:active,\n.sa-todo-modal-create-button:focus-within {\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.sa-todo-modal-create-button:first-of-type {\n    right: 110px;\n}\n\n.sa-todo-modal-create-button:last-of-type {\n    right: 15px;\n}\n\n.sa-todo-list-ele-line {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    margin: 4px;\n}\n\n.sa-todo-list-ele-line-line {\n    width: 100%;\n    opacity: 0.5;\n}\n\n.sa-todo-list-ele-line-text {\n    opacity: 0.5;\n    font-style: italic;\n}\n\n.sa-todo-group-bar {\n    display: flex;\n    gap: 8px;\n    overflow-x: auto;\n    padding: 8px 0;\n    flex-shrink: 0;\n    scrollbar-width: none;\n}\n\n.sa-todo-group-bar::-webkit-scrollbar {\n    display: none;\n}\n\n.sa-todo-group-btn {\n    display: flex;\n    padding: 4px 12px;\n    border: 1px solid #00000020;\n    border-radius: 12px;\n    background: #333;\n    color: #fff;\n    cursor: pointer;\n    white-space: nowrap;\n    transition: 0.25s ease;\n    transition-property: background;\n    flex-shrink: 0;\n    font-size: 14px;\n}\n\n.sa-todo-group-btn.active {\n    background: var(--looks-secondary);\n    text-shadow: #333 0 0 9px;\n}\n\n.sa-todo-mode-tab {\n    position: relative;\n    height: 35px;\n}\n\n.sa-todo-mode-tab::after {\n    content: \"\";\n    position: absolute;\n    width: 50%;\n    left: 0;\n    bottom: 0;\n    height: 2px;\n    background-color: var(--looks-secondary);\n    transition: all 0.15s cubic-bezier(0, 0.7, 0.3, 0.99);\n}\n\n.sa-todo-mode-tab:has(button:nth-child(1).enable)::after {\n    left: 0;\n}\n\n.sa-todo-mode-tab:has(button:nth-child(2).enable)::after {\n    left: 50%;\n}\n\n.sa-todo-mode-tab:has(button:active)::after {\n    width: 100% !important;\n    left: 0 !important;\n}\n\n.sa-todo-mode-tab-btn.enable,\n.sa-todo-mode-tab-btn.unable {\n    border: none;\n    transition: all 0.15s cubic-bezier(0, 0.7, 0.3, 0.99);\n    height: 30px;\n    line-height: 1.5;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.sa-todo-mode-tab-btn.enable {\n    filter: brightness(1);\n    background: var(--ui-modal-background);\n}\n\n.sa-todo-mode-tab-btn.enable:hover,\n.sa-todo-mode-tab-btn.unable:hover {\n    filter: brightness(1);\n    background: var(--ui-modal-background);\n}\n\n.sa-todo-mode-tab-btn.enable:active,\n.sa-todo-mode-tab-btn.unable:active {\n    filter: brightness(0.9);\n    background: var(--ui-modal-background);\n}\n\n.sa-todo-group-selector {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    margin: 5px;\n}\n\n.sa-todo-group-tag {\n    padding: 4px 10px;\n    border: 1px solid #00000020;\n    border-radius: 12px;\n    color: #fff;\n    cursor: pointer;\n    white-space: nowrap;\n    transition: 0.25s ease;\n    transition-property: background;\n    font-size: 13px;\n}\n\n.sa-todo-group-tag.active {\n    text-shadow: #333 0 0 9px;\n}\n\n.sa-todo-list-ele-title-rmLine {\n    overflow: clip;\n    color: #0000;\n    text-shadow: none;\n    position: absolute;\n    /*不要问我为什么*/\n    width: var(--width);\n    text-decoration: line-through #FFF;\n    white-space: nowrap;\n    transition: width 0.3s ease;\n    -webkit-transition: width 0.3s ease;\n    -moz-transition: width 0.3s ease;\n    -ms-transition: width 0.3s ease;\n    -o-transition: width 0.3s ease;\n}\n\n.sa-todo-list-ele-group_tip {\n    display: flex;\n    border-radius: 5px 5px 0px 0px;\n    overflow: clip;\n    -webkit-border-radius: 5px 5px 0px 0px;\n    -moz-border-radius: 5px 5px 0px 0px;\n    -ms-border-radius: 5px 5px 0px 0px;\n    -o-border-radius: 5px 5px 0px 0px;\n}\n\n.sa-todo-list-ele-group_tip-block {\n    width: 20px;\n    height: 10px;\n    flex: 1;\n}\n\n.sa-todo-group-remove-btn {\n    margin: 1px;\n    margin-left: 5px;\n    padding: 3px;\n    border-radius: 999px;\n    display: flex;\n}\n\n.sa-todo-group-remove-btn-img {\n    width: 15px;\n    height: auto;\n}\n\n.sa-todo-list-empty-tip {\n    font-style: italic;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/todo/_runtime_entry.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/todo/_runtime_entry.js ***!
  \**************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/todo/userscript.js");
/* harmony import */ var _css_loader_esModule_false_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader?{"esModule":false}!./userstyle.css */ "./node_modules/css-loader/index.js?{\"esModule\":false}!./src/addons/addons/todo/userstyle.css");
/* harmony import */ var _css_loader_esModule_false_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_esModule_false_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_esModule_false_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/todo/done.svg":
/*!*****************************************!*\
  !*** ./src/addons/addons/todo/done.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICAgd2lkdGg9IjIxMy41MjA5OTYwOTM3NSIgaGVpZ2h0PSIxNzEuODI0OTk2OTQ4MjQyMiIKICAgIHZpZXdCb3g9IjAgMCAyMTMuNTIwOTk2MDkzNzUgMTcxLjgyNDk5Njk0ODI0MjIiIGZpbGw9Im5vbmUiPgogICAgPHBhdGgKICAgICAgICBkPSJNMjEzLjUyMSAzMC40MDUzTDE4My4xMTUgMEw3Mi4xMTUzIDExMUwzMC40MDUzIDY5LjI5TDAgOTkuNjk1M0w0MS43MSAxNDEuNDA1TDQxLjY5NTMgMTQxLjQyTDcyLjEwMDYgMTcxLjgyNUwyMTMuNTIxIDMwLjQwNTNaIgogICAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgo8L3N2Zz4="

/***/ }),

/***/ "./src/addons/addons/todo/dropdown-arrow.svg":
/*!***************************************************!*\
  !*** ./src/addons/addons/todo/dropdown-arrow.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="

/***/ }),

/***/ "./src/addons/addons/todo/edit.svg":
/*!*****************************************!*\
  !*** ./src/addons/addons/todo/edit.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI0Ij48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik03IDQyaDM2Ii8+PHBhdGggZD0iTTExIDI2LjcyVjM0aDcuMzE3TDM5IDEzLjMwOEwzMS42OTUgNnoiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "./src/addons/addons/todo/remove.svg":
/*!*******************************************!*\
  !*** ./src/addons/addons/todo/remove.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNzUgM1YxLjVoNC41VjN6bS0xLjUgMFYxYTEgMSAwIDAgMSAxLTFoNS41YTEgMSAwIDAgMSAxIDF2MmgyLjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0uMzY1bC0uNzQzIDkuNjUzQTIgMiAwIDAgMSAxMS4xNDggMTZINC44NTJhMiAyIDAgMCAxLTEuOTk0LTEuODQ3TDIuMTE1IDQuNUgxLjc1YS43NS43NSAwIDAgMSAwLTEuNXptLS42MyAxLjVoOC43NmwtLjczNCA5LjUzOGEuNS41IDAgMCAxLS40OTguNDYySDQuODUyYS41LjUgMCAwIDEtLjQ5OC0uNDYyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),

/***/ "./src/addons/addons/todo/undone.svg":
/*!*******************************************!*\
  !*** ./src/addons/addons/todo/undone.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICAgd2lkdGg9IjI0Ny40ODY2MDI3ODMyMDMxMiIgaGVpZ2h0PSIyNDcuNDg0OTg1MzUxNTYyNSIKICAgIHZpZXdCb3g9IjAgMCAyNDcuNDg2NjAyNzgzMjAzMTIgMjQ3LjQ4NDk4NTM1MTU2MjUiIGZpbGw9Im5vbmUiPgogICAgPHBhdGgKICAgICAgICBkPSJNMTIzLjc0NCA4OC4zODg3TDM1LjM1NSAwTDAgMzUuMzU1TDg4LjM4ODcgMTIzLjc0NEwwLjAwMjAxMDM1IDIxMi4xM0wzNS4zNTcgMjQ3LjQ4NUwxMjMuNzQ0IDE1OS4wOTlMMjEyLjEzIDI0Ny40ODVMMjQ3LjQ4NSAyMTIuMTNMMTU5LjA5OSAxMjMuNzQ0TDI0Ny40ODcgMzUuMzU1M0wyMTIuMTMyIDAuMDAwMzAxMzYxTDEyMy43NDQgODguMzg4N1oiCiAgICAgICAgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/addons/todo/userscript.js":
/*!**********************************************!*\
  !*** ./src/addons/addons/todo/userscript.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tw_recolor_build_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/tw-recolor/build!./logo.svg */ "./src/lib/tw-recolor/build.js!./src/addons/addons/todo/logo.svg");
/* harmony import */ var _dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-arrow.svg */ "./src/addons/addons/todo/dropdown-arrow.svg");
/* harmony import */ var _dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _done_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./done.svg */ "./src/addons/addons/todo/done.svg");
/* harmony import */ var _done_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_done_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _undone_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./undone.svg */ "./src/addons/addons/todo/undone.svg");
/* harmony import */ var _undone_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_undone_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.svg */ "./src/addons/addons/todo/edit.svg");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_edit_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove.svg */ "./src/addons/addons/todo/remove.svg");
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_remove_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _window_system_window_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../window-system/window-manager.js */ "./src/addons/window-system/window-manager.js");


;






/*
{
  groups: [
    { id: "g1", name: "工作", color: "#3b82f6"}
  ],
  tasks: [
    {
      id: "t1",
      name: "写周报",
      startTime: "123445",
      endTime: "33333",
      done: false,
      priority: 2,
      tags: ["g1"],
      color: "#0099ff",
      steps: [
        { id: "s1", text: "收集数据", done: true }
      ],
    }
  ]
}
*/

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    msg = _ref.msg;
  function getContrastColor(hexColor) {
    let r, g, b;
    if (hexColor.startsWith('#')) {
      if (hexColor.length === 4) {
        r = parseInt(hexColor[1] + hexColor[1], 16);
        g = parseInt(hexColor[2] + hexColor[2], 16);
        b = parseInt(hexColor[3] + hexColor[3], 16);
      } else {
        r = parseInt(hexColor.slice(1, 3), 16);
        g = parseInt(hexColor.slice(3, 5), 16);
        b = parseInt(hexColor.slice(5, 7), 16);
      }
    } else if (hexColor.startsWith('rgb')) {
      const match = hexColor.match(/\d+/g);
      r = parseInt(match[0]);
      g = parseInt(match[1]);
      b = parseInt(match[2]);
    } else {
      return '#000000';
    }
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
  }
  /**
  * 获取两个时间戳的格式化日期区间
  * AI 太好用了你知道吗
   * @param {number} timestamp1 - 第一个时间戳（毫秒）
  * @param {number} timestamp2 - 第二个时间戳（毫秒）
  * @returns {string} 格式化后的日期区间字符串
  */
  function getFormattedDateRange(timestamp1, timestamp2) {
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);
    const pad = num => String(num).padStart(2, '0');
    const year1 = date1.getFullYear();
    const month1 = pad(date1.getMonth() + 1);
    const day1 = pad(date1.getDate());
    const hour1 = pad(date1.getHours());
    const minute1 = pad(date1.getMinutes());
    const second1 = pad(date1.getSeconds());
    const year2 = date2.getFullYear();
    const month2 = pad(date2.getMonth() + 1);
    const day2 = pad(date2.getDate());
    const hour2 = pad(date2.getHours());
    const minute2 = pad(date2.getMinutes());
    const second2 = pad(date2.getSeconds());
    const timeStr1 = "".concat(hour1, ":").concat(minute1, ":").concat(second1);
    const timeStr2 = "".concat(hour2, ":").concat(minute2, ":").concat(second2);
    const isSameDate = year1 === year2 && month1 === month2 && day1 === day2;
    if (isSameDate) {
      const dateStr = "".concat(year1, "-").concat(month1, "-").concat(day1);
      return "".concat(dateStr, " ").concat(timeStr1, " \u2192 ").concat(timeStr2);
    } else {
      const fullStr1 = "".concat(year1, "-").concat(month1, "-").concat(day1, " ").concat(timeStr1);
      const fullStr2 = "".concat(year2, "-").concat(month2, "-").concat(day2, " ").concat(timeStr2);
      return "".concat(fullStr1, " \u2192 ").concat(fullStr2);
    }
  }
  const generateId = () => {
    return "todo-".concat(Math.random().toString(36).substr(2, 9));
  };
  // 在加载的项目内寻找正确的Todo注释ID
  // 因为它保存的ID是会！变！的！
  // 那我这个设置‘todo’为id的意义是什么...
  addon.tab.traps.vm.runtime.on("PROJECT_LOADED", () => {
    try {
      Object.values(addon.tab.traps.vm.runtime.getTargetForStage().comments).forEach(obj => {
        if (obj.id == COMMENT_ID) return;
        if (obj.text.indexOf(POINT) != -1) {
          COMMENT_ID = obj.id;
          return;
        }
      });
    } catch (e) {
      console.warn(e);
      // 没找到没关系
    }
  });
  let COMMENT_ID = 'todo';
  let PROJECT_NAME = '';
  const POINT = '_TODO_LIST_';
  const emptyTodo = {
    groups: [],
    tasks: []
  };
  const alpha = 'a0';

  // 这个 ReduxStore 到底是哪里来的？？？
  await ReduxStore.subscribe(() => {
    PROJECT_NAME = ReduxStore.getState().scratchGui.projectTitle;
  });
  const getFormatComment = content => "\nThis comment is for the \"todo\" addon, this comment will storage your to-do list.\n\nSo don't edit, remove it. But you can move, resize and hide it, it won't affect work.\n".concat(POINT, "\n").concat(JSON.stringify(content), "\n");
  const getTextWidth = (() => {
    const el = document.createElement('span');
    el.style.cssText = 'position:fixed;visibility:hidden;white-space:nowrap;height:auto;width:auto';
    document.body.appendChild(el);
    return function () {
      let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello world';
      let fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';
      let plus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      let fontFamily = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '"Helvetica Neue", Helvetica, Arial, sans-serif';
      el.style.font = "".concat(String(fontSize).endsWith('px') ? fontSize : fontSize + 'px', " ").concat(fontFamily);
      el.textContent = text;
      return el.offsetWidth + plus + 'px';
    };
  })();
  let editWindow = null;
  const addModal = function addModal() {
    let editEleConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    // 如果已存在编辑窗口，先关闭它
    if (editWindow) {
      editWindow.close();
      editWindow = null;
    }
    const addContentForModal = closeFn => {
      let config;
      if (editEleConfig) {
        /*
        {
        "id": "todo-9p4po00hs",
        "name": "todo/new-todo",
        "startTime": 1777418067938,
        "endTime": 1777428068024,
        "done": false,
        "groupId": [],
        "color": "#0099ff",
        "steps": [
        {
        "id": "todo-gs3bvbl8d",
        "text": "todo/new-step",
        "latest": false,
        "done": false
        },
        {
        "id": "todo-ikqruv7df",
        "text": "todo/new-step",
        "latest": false,
        "done": false
        },
        {
        "id": "todo-b9uol4wgz",
        "text": "todo/new-step",
        "latest": false,
        "done": false
        }
        ]
        }
         */
        config = {
          mode: editEleConfig.mode || 2,
          id: editEleConfig.id || generateId(),
          name: editEleConfig.name || msg('new-todo'),
          color: editEleConfig.color || '#0099ff',
          task: {
            startTime: editEleConfig.startTime || Date.now(),
            endTime: editEleConfig.endTime || Date.now() + 10000086,
            done: editEleConfig.done || false,
            tags: editEleConfig.groupId || [],
            priority: 1,
            steps: editEleConfig.steps || []
          }
        };
      } else {
        config = {
          mode: 2,
          id: generateId(),
          name: msg('new-todo'),
          name_group: msg('new-group'),
          color: '#0099ff',
          task: {
            startTime: Date.now(),
            endTime: Date.now() + 10000086,
            done: false,
            tags: [],
            priority: 1,
            steps: []
          }
        };
      }
      const content = document.createElement('div');
      const preview = document.createElement('div');
      preview.className = 'sa-todo-modal-preview';
      const preview_title = document.createElement('input');
      preview_title.className = 'sa-todo-modal-preview-title';
      preview_title.style.outlineColor = config.color;
      preview_title.onchange = e => {
        config.name = e.target.value;
        refresh();
      };
      const preview_date = document.createElement('span');
      preview_date.className = 'sa-todo-modal-preview-date';
      const refresh = () => {
        preview_title.value = config.name;
        preview_date.textContent = getFormattedDateRange(config.task.startTime, config.task.endTime);
        preview.style.backgroundColor = config.color + alpha;
        document.querySelectorAll('.sa-todo-modal-preview-steps').forEach(ele => ele.remove());
        const preview_steps = document.createElement('ul');
        preview_steps.className = 'sa-todo-modal-preview-steps';
        config.task.steps.forEach((step, index) => {
          const preview_steps_step = document.createElement('li');
          preview_steps_step.id = step.id;
          preview_steps_step.className = 'sa-todo-modal-preview-steps-step';
          const preview_steps_step_text = document.createElement('input');
          preview_steps_step_text.className = 'sa-todo-modal-preview-steps-step-input';
          preview_steps_step_text.style.outlineColor = config.color;
          preview_steps_step_text.value = step.text;
          preview_steps_step_text.onchange = e => {
            config.task.steps[index].text = e.target.value;
          };
          preview_steps_step_text.style.color = 'white';
          const preview_steps_remove = document.createElement('button');
          preview_steps_remove.textContent = '×';
          preview_steps_remove.className = 'sa-todo-modal-preview-steps-step-remove';
          preview_steps_remove.style.backgroundColor = config.color;
          preview_steps_remove.style.color = 'white';
          preview_steps_step.appendChild(preview_steps_remove);
          preview_steps_step.appendChild(preview_steps_step_text);
          preview_steps.appendChild(preview_steps_step);
        });
        preview.appendChild(preview_steps);
        // 最新创建的step自动对焦
        const latestStepIndex = config.task.steps.findIndex(step => step.latest === true);
        if (latestStepIndex !== -1) {
          const stepElements = document.querySelectorAll('.sa-todo-modal-preview-steps-step');
          if (stepElements[latestStepIndex]) {
            const input = stepElements[latestStepIndex].querySelector('.sa-todo-modal-preview-steps-step-input');
            if (input) {
              setTimeout(() => {
                input.focus();
                input.select();
              }, 0);
            }
          }
          config.task.steps[latestStepIndex].latest = false;
        }
      };
      const input = function input(inputType, text) {
        let inputConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        const inputContent = document.createElement('div');
        inputContent.className = 'sa-todo-modal-input';
        const inputText = document.createElement('span');
        inputText.textContent = text;
        const input = document.createElement('input');
        input.className = 'sa-todo-modal-input-input';
        if (inputType != 'input') input.type = inputType;
        if (inputConfig.key2) input.value = config[inputConfig.key][inputConfig.key2];else input.value = config[inputConfig.key];
        input.oninput = e => {
          if (inputConfig.key2) config[inputConfig.key][inputConfig.key2] = e.target.value;else config[inputConfig.key] = e.target.value;
          refresh();
        };
        inputContent.appendChild(inputText);
        inputContent.appendChild(input);
        return inputContent;
      };
      preview.appendChild(preview_title);
      preview.appendChild(preview_date);
      refresh();
      const isNew = !editEleConfig;
      const modeTab = document.createElement('div');
      modeTab.className = 'sa-todo-mode-tab';
      const taskTabBtn = document.createElement('button');
      taskTabBtn.className = 'sa-todo-mode-tab-btn ' + (config.mode === 2 ? 'enable' : 'unable');
      taskTabBtn.textContent = msg('task');
      taskTabBtn.style.display = 'inline-block';
      taskTabBtn.style.width = '50%';
      taskTabBtn.style.height = '100%';
      taskTabBtn.onclick = () => {
        config.mode = 2;
        taskTabBtn.className = 'sa-todo-mode-tab-btn enable';
        groupTabBtn.className = 'sa-todo-mode-tab-btn unable';
        taskFields.style.display = '';
        groupFields.style.display = 'none';
        preview.style.display = '';
        previewLabel.style.display = '';
        preview_steps_create.style.display = '';
        refreshGroupSelector();
        refresh();
      };
      const groupTabBtn = document.createElement('button');
      groupTabBtn.className = 'sa-todo-mode-tab-btn ' + (config.mode === 1 ? 'enable' : 'unable');
      groupTabBtn.textContent = msg('group');
      groupTabBtn.style.display = 'inline-block';
      groupTabBtn.style.width = '50%';
      groupTabBtn.style.height = '100%';
      groupTabBtn.onclick = () => {
        config.mode = 1;
        groupTabBtn.className = 'sa-todo-mode-tab-btn enable';
        taskTabBtn.className = 'sa-todo-mode-tab-btn unable';
        taskFields.style.display = 'none';
        groupFields.style.display = '';
        preview.style.display = 'none';
        previewLabel.style.display = 'none';
        preview_steps_create.style.display = 'none';
      };
      modeTab.appendChild(taskTabBtn);
      modeTab.appendChild(groupTabBtn);
      const groupSelector = document.createElement('div');
      groupSelector.className = 'sa-todo-group-selector';
      const refreshGroupSelector = () => {
        groupSelector.innerHTML = '';
        const groups = getTodoListContent().groups || [];
        if (groups.length === 0) return;
        groups.forEach(group => {
          const tag = document.createElement('button');
          tag.className = 'sa-todo-group-tag';
          tag.textContent = group.name;
          const active = (config.task.tags || []).includes(group.id);
          if (active) {
            tag.classList.add('active');
            tag.style.backgroundColor = group.color;
          } else {
            tag.style.backgroundColor = group.color + '60';
          }
          tag.onclick = () => {
            const tags = config.task.tags || [];
            const idx = tags.indexOf(group.id);
            if (idx === -1) tags.push(group.id);else tags.splice(idx, 1);
            config.task.tags = tags;
            refreshGroupSelector();
          };
          groupSelector.appendChild(tag);
        });
      };
      const taskFields = document.createElement('div');
      const groupFields = document.createElement('div');
      const previewLabel = document.createElement('div');
      previewLabel.className = 'sa-todo-modal-title';
      previewLabel.appendChild(Object.assign(document.createElement('span'), {
        textContent: msg('preview')
      }));
      previewLabel.appendChild(document.createElement('div'));
      const preview_steps_create = document.createElement('button');
      preview_steps_create.className = 'sa-todo-modal-create-button';
      preview_steps_create.textContent = msg('new-step');
      preview_steps_create.onclick = () => {
        config.task.steps.push({
          id: generateId(),
          text: msg('new-step'),
          latest: true,
          done: false
        });
        refresh();
      };
      const done = document.createElement('button');
      done.className = 'sa-todo-modal-create-button';
      done.textContent = msg('done');
      done.onclick = () => {
        if (editEleConfig) replaceTodo(config);else addNewTodo(config);
        closeFn();
      };
      taskFields.appendChild(input('color', msg('color'), {
        key: 'color'
      }));
      taskFields.appendChild(input('datetime-local', msg('start-time'), {
        key: 'task',
        key2: 'startTime'
      }));
      taskFields.appendChild(input('datetime-local', msg('end-time'), {
        key: 'task',
        key2: 'endTime'
      }));
      taskFields.appendChild(groupSelector);
      groupFields.appendChild(input('text', msg('name'), {
        key: 'name'
      }));
      groupFields.appendChild(input('color', msg('color'), {
        key: 'color'
      }));
      if (config.mode === 1) {
        taskFields.style.display = 'none';
        preview.style.display = 'none';
        previewLabel.style.display = 'none';
      } else {
        groupFields.style.display = 'none';
      }
      const editHeader = document.createElement('div');
      editHeader.className = 'sa-todo-modal-title';
      editHeader.appendChild(Object.assign(document.createElement('span'), {
        textContent: msg('edit')
      }));
      editHeader.appendChild(document.createElement('div'));
      content.appendChild(editHeader);
      if (isNew) content.insertBefore(modeTab, content.firstChild);
      content.appendChild(taskFields);
      content.appendChild(groupFields);
      content.appendChild(preview_steps_create);
      content.appendChild(done);
      content.appendChild(previewLabel);
      content.appendChild(preview);
      refreshGroupSelector();
      return content;
    };

    // 创建编辑窗口
    const initialX = Math.max(24, Math.min(window.innerWidth - 500, 50));
    const initialY = Math.max(24, Math.min(window.innerHeight - 600, 50));
    editWindow = _window_system_window_manager_js__WEBPACK_IMPORTED_MODULE_6__["default"].createWindow({
      id: 'todo-edit',
      title: editEleConfig ? msg('edit-title') : msg('create-title'),
      width: 480,
      height: 580,
      minWidth: 400,
      minHeight: 400,
      maxWidth: Math.min(window.innerWidth * 0.9, 600),
      maxHeight: Math.min(window.innerHeight * 0.9, 800),
      className: 'sa-todo-edit-window',
      x: initialX,
      y: initialY,
      onClose: () => {
        editWindow = null;
      }
    });
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'sa-todo-edit-content';
    contentWrapper.style.cssText = "\n            padding: 16px;\n            box-sizing: border-box;\n            height: 100%;\n            overflow: auto;\n        ";
    contentWrapper.appendChild(addContentForModal(() => {
      if (editWindow) {
        editWindow.close();
        editWindow = null;
      }
    }));
    editWindow.setContent(contentWrapper);
    editWindow.show().bringToFront();
  };
  let selectedGroup = null;
  const createSideBarElements = () => {
    const content = document.createElement('div');
    content.className = 'sa-todo';
    const title = document.createElement('h1');
    title.textContent = msg('title', {
      project: PROJECT_NAME.toString()
    });
    let groupBar = null;
    const refreshTodo = () => {
      // 刷新窗口内容
      const windowContent = document.querySelector('.sa-todo-content-wrapper');
      if (windowContent) {
        windowContent.innerHTML = '';
        windowContent.appendChild(createSideBarElements());
      }
    };
    try {
      const groups = getTodoListContent().groups || [];
      if (groups.length > 0) {
        groupBar = document.createElement('div');
        groupBar.className = 'sa-todo-group-bar';
        const allBtn = document.createElement('button');
        allBtn.className = 'sa-todo-group-btn';
        allBtn.textContent = msg('all');
        if (selectedGroup === null) allBtn.classList.add('active');
        allBtn.onclick = () => {
          selectedGroup = null;
          refreshTodo();
        };
        groupBar.appendChild(allBtn);
        groups.forEach((group, index) => {
          let needRemove = false;
          const btn = document.createElement('button');
          btn.className = 'sa-todo-group-btn';
          btn.textContent = group.name;
          const btnRemoveGroup = document.createElement('div');
          btnRemoveGroup.className = 'sa-todo-group-remove-btn';
          btnRemoveGroup.style.backgroundColor = group.color;
          const btnRemoveGroupImg = document.createElement('img');
          btnRemoveGroupImg.src = _remove_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
          btnRemoveGroupImg.className = 'sa-todo-group-remove-btn-img';
          btnRemoveGroupImg.style.filter = "brightness(".concat(getContrastColor(group.color) === '#000000' ? 0 : 1);
          btnRemoveGroup.onclick = () => {
            if (selectedGroup === group.id) selectedGroup = null;
            // 气死我了btn会强键我的删除让它选取，加个标志来强上它
            needRemove = true;
            const currentGroup = getTodoListContent();
            const nowGroupId = currentGroup.groups[index].id;
            currentGroup.groups.splice(index, 1);
            // 删除所有使用这个组的task中的组
            currentGroup.tasks.forEach((task, taskIndex) => {
              const groupIndex = task.groupId.indexOf(nowGroupId);
              if (groupIndex !== -1) {
                currentGroup.tasks[taskIndex].groupId.splice(groupIndex, 1);
              }
            });
            createCommentToStage(getFormatComment(currentGroup));
          };
          if (selectedGroup === group.id) {
            btn.classList.add('active');
            btn.style.backgroundColor = group.color;
          } else {
            btn.style.backgroundColor = group.color + '60';
          }
          btn.onclick = () => {
            // 退！退！退！
            if (needRemove) return;
            selectedGroup = group.id;
            refreshTodo();
          };
          btnRemoveGroup.appendChild(btnRemoveGroupImg);
          btn.appendChild(btnRemoveGroup);
          groupBar.appendChild(btn);
        });
      }
    } catch (e) {
      console.warn("Can't load group menu because ".concat(e));
    }
    const todoList = document.createElement('ul');
    todoList.className = 'sa-todo-list';
    try {
      if (getTodoListContent().tasks.length == 0) {
        const tip = document.createElement('span');
        tip.textContent = msg('no-todo');
        tip.className = 'sa-todo-list-empty-tip';
        todoList.appendChild(tip);
      } else {
        getTodoListContent().tasks.forEach((task, index) => {
          let currentTask = task;
          if (selectedGroup !== null && !(currentTask.groupId || []).includes(selectedGroup)) return;
          let isHide = true;
          const todoEle = document.createElement('li');
          todoEle.className = 'sa-todo-list-ele';
          // 这个需要改padding,但是我不想用，因为效果不太好
          // let border = '';
          // task.groupId.forEach((tag, index) => {
          //     const groupIndex = getTodoListContent().groups.findIndex(group => group.id === tag);
          //     const end = index == task.groupId.length - 1 ? '' : ', ';
          //     border += `0 ${index * 6 + 6}px 0 0 ${getTodoListContent().groups[groupIndex].color}${end}`
          // })
          // todoEle.style.boxShadow = border;

          // 改为这个，直接在里面加个方块代表
          const todoEle_groupTip = document.createElement('div');
          todoEle_groupTip.className = 'sa-todo-list-ele-group_tip';
          if (task.groupId.length > 0) todoEle.style.borderRadius = '0px 0px 5px 5px';
          task.groupId.forEach(tag => {
            const groupIndex = getTodoListContent().groups.findIndex(group => group.id === tag);
            const groupEleBlock = document.createElement('div');
            groupEleBlock.className = 'sa-todo-list-ele-group_tip-block';
            groupEleBlock.style.backgroundColor = getTodoListContent().groups[groupIndex].color;
            todoEle_groupTip.appendChild(groupEleBlock);
          });
          const todoEle_card = document.createElement('div');
          todoEle_card.className = 'sa-todo-list-ele-titleDiv';
          const todoEleName = document.createElement('span');
          todoEleName.className = 'sa-todo-list-ele-title';
          todoEleName.textContent = currentTask.name;
          const todoEleDelLine = document.createElement('div');
          todoEleDelLine.textContent = currentTask.name;
          todoEleDelLine.style.setProperty('--width', getTextWidth(currentTask.name, '30px', 15));
          if (currentTask.steps.length != 0) {
            todoEleDelLine.style.marginLeft = '95px';
          } else {
            todoEleDelLine.style.marginLeft = '58px';
          }
          todoEleDelLine.className = 'sa-todo-list-ele-title sa-todo-list-ele-title-rmLine';
          const todoEleSetDone = document.createElement('img');
          todoEleSetDone.src = getTodoListContent().tasks[index].done ? _done_svg__WEBPACK_IMPORTED_MODULE_2___default.a : _undone_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
          todoEleSetDone.className = 'sa-todo-list-ele-done';
          todoEleSetDone.style.backgroundColor = currentTask.color;
          const todoEleEditButton = document.createElement('img');
          todoEleEditButton.src = _edit_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
          todoEleEditButton.className = 'sa-todo-list-ele-done';
          todoEleEditButton.style.backgroundColor = currentTask.color;
          todoEleEditButton.onclick = () => {
            addModal(task);
          };
          const todoEleRemoveButton = document.createElement('img');
          todoEleRemoveButton.src = _remove_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
          todoEleRemoveButton.className = 'sa-todo-list-ele-done';
          todoEleRemoveButton.style.backgroundColor = currentTask.color;
          todoEleRemoveButton.onclick = () => {
            const originTodo = getTodoListContent();
            originTodo.tasks.splice(index, 1);
            createCommentToStage(getFormatComment(originTodo));
          };
          const todoEleDate = document.createElement('span');
          todoEleDate.style.color = 'white';
          todoEleDate.textContent = getFormattedDateRange(currentTask.startTime, currentTask.endTime);
          // steps
          const todoEleStepsContent = document.createElement('ul');
          const _spawnSteps = function spawnSteps() {
            let needGetLatest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (needGetLatest) currentTask = getTodoListContent().tasks[index];
            const todoEleStepsContentMain = document.createElement('li');
            todoEleStepsContentMain.className = 'sa-todo-list-ele-steps-main';
            todoEleStepsContent.className = 'sa-todo-list-ele-steps';
            todoEleStepsContent.id = currentTask.id;
            if (currentTask.steps.length != 0) {
              // 让Done为true的移到末尾
              for (let needDone = 0; needDone <= 1; needDone += 1) {
                if (needDone && !!currentTask.steps.find(step => step.done)) {
                  //分割线
                  const lineDiv = document.createElement('li');
                  lineDiv.className = 'sa-todo-list-ele-line';
                  const text = document.createElement('span');
                  text.className = 'sa-todo-list-ele-line-text';
                  text.textContent = msg('done');
                  const line = document.createElement('hr');
                  line.className = 'sa-todo-list-ele-line-line';
                  lineDiv.appendChild(text);
                  lineDiv.appendChild(line);
                  todoEleStepsContentMain.appendChild(lineDiv);
                }
                currentTask.steps.forEach((step, indexStep) => {
                  if (step.done == needDone) {
                    const todoEleStep = document.createElement('li');
                    todoEleStep.className = 'sa-todo-list-ele-steps-li';
                    const todoEleSetDoneStep = document.createElement('img');
                    todoEleSetDoneStep.src = needDone ? _undone_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _done_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
                    todoEleSetDoneStep.className = 'sa-todo-list-ele-done';
                    todoEleSetDoneStep.style.backgroundColor = currentTask.color;
                    todoEleSetDoneStep.onclick = () => {
                      const todos = getTodoListContent();
                      todos.tasks[index].steps[indexStep].done = !todos.tasks[index].steps[indexStep].done;
                      createCommentToStage(getFormatComment(todos), false);
                      todoEleStepsContent.innerHTML = '';
                      _spawnSteps(true);
                    };
                    const todoEleStep_Text = document.createElement('span');
                    todoEleStep_Text.textContent = "".concat(indexStep + 1, ".").concat(step.text);
                    if (needDone) todoEleStep_Text.style.opacity = 0.5;
                    todoEleStep_Text.style.color = 'white';
                    todoEleStep.appendChild(todoEleSetDoneStep);
                    todoEleStep.appendChild(todoEleStep_Text);
                    todoEleStepsContentMain.appendChild(todoEleStep);
                  }
                });
              }
            }
            todoEleStepsContent.appendChild(todoEleStepsContentMain);
          };
          _spawnSteps();

          // display
          todoEle.style.backgroundColor = currentTask.color + alpha;
          // 刷新选择done后的状态
          const refreshTodoStyle = () => {
            const isDone = getTodoListContent().tasks[index].done;
            if (isDone) {
              todoEleDelLine.style.width = '';
              todoEleName.style.opacity = 0.5;
            } else {
              todoEleDelLine.style.width = '0px';
              todoEleName.style.opacity = 1;
            }
          };

          // dropdown
          const todoEleDropdown = document.createElement('img');
          todoEleDropdown.src = _dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
          todoEleDropdown.className = 'sa-todo-list-ele-titleDiv-dropdown';
          const refreshDropdown_Steps = () => {
            todoEleDropdown.style.transform = isHide ? 'rotate(180deg)' : 'rotate(0deg)';
            // steps
            todoEleStepsContent.style.gridTemplateRows = isHide ? '0fr' : '1fr';
          };
          todoEleSetDone.onclick = () => {
            const todos = getTodoListContent();
            todos.tasks[index].done = !todos.tasks[index].done;
            todoEleSetDone.src = todos.tasks[index].done ? _done_svg__WEBPACK_IMPORTED_MODULE_2___default.a : _undone_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
            createCommentToStage(getFormatComment(todos), false);
            refreshTodoStyle();
          };
          todoEleDropdown.onclick = () => {
            isHide = !isHide;
            refreshDropdown_Steps();
          };
          // spawn
          todoList.appendChild(todoEle_groupTip);
          if (currentTask.steps.length != 0) todoEle_card.appendChild(todoEleDropdown);
          todoEle_card.appendChild(todoEleSetDone);
          todoEle_card.appendChild(todoEleName);
          todoEle_card.appendChild(todoEleDelLine);
          todoEle_card.appendChild(todoEleRemoveButton);
          todoEle_card.appendChild(todoEleEditButton);
          todoEle.appendChild(todoEle_card);
          todoEle.appendChild(todoEleDate);
          todoEle.appendChild(todoEleStepsContent);
          refreshDropdown_Steps();
          refreshTodoStyle();
          todoList.appendChild(todoEle);
        });
      }
    } catch (e) {
      console.warn('Todo List can\'t display: ' + e.stack);
    }
    const addButton = document.createElement('button');
    addButton.className = 'sa-todo-add-todo';
    const addButtonText_p = document.createElement('span');
    addButtonText_p.textContent = '+';
    addButtonText_p.className = 'sa-todo-add-todo-text_p';
    addButton.onclick = () => {
      addModal();
    };
    const addButtonText_t = document.createElement('span');
    addButtonText_t.textContent = msg('add');
    addButtonText_t.className = 'sa-todo-add-todo-text_t';
    addButtonText_t.style.setProperty('--width', getTextWidth(msg('add'), '16px'));
    addButton.onmouseenter = () => {
      addButtonText_t.classList.add('active');
    };
    addButton.onmouseleave = () => {
      addButtonText_t.classList.remove('active');
    };
    addButton.appendChild(addButtonText_p);
    addButton.appendChild(addButtonText_t);
    content.appendChild(title);
    if (groupBar) content.appendChild(groupBar);
    content.appendChild(todoList);
    content.appendChild(addButton);
    return content;
  };
  const createCommentToStage = function createCommentToStage(content) {
    let needRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const vm = addon.tab.traps.vm;
    // 删除之前的comment,它实际上不会替换
    try {
      delete vm.runtime.getTargetForStage().comments[COMMENT_ID];
      vm.runtime.getTargetForStage().createComment(COMMENT_ID, null, content, 50, 50, 350, 150, false);
    } catch (e) {
      console.warn("Can't remove comment, may it's doesn't exist?");
    }

    // 刷新窗口内容
    if (needRefresh) {
      const windowContent = document.querySelector('.sa-todo-content-wrapper');
      if (windowContent) {
        windowContent.innerHTML = '';
        windowContent.appendChild(createSideBarElements());
      }
    }
  };
  const getTodoList = () => {
    const vm = addon.tab.traps.vm;
    return vm.runtime.getTargetForStage().comments[COMMENT_ID] || getFormatComment(emptyTodo);
  };
  /**
   * 
   * @returns {object}
   */
  const getTodoListContent = () => {
    try {
      return JSON.parse(getTodoList()['text'].split(POINT)[1]
      /**
       * 我们的格式是:
       * 
       * xxx
       * POINT
       * object
       * 
       * 所以用split以POINT拆分出来[xxx,object]，然后获取第二项
       */);
    } catch (e) {
      return emptyTodo;
    }
  };

  /**
   * 添加新的Todo
   * @param {object} config 配置
   * @param {1|2} config.mode - 1为加入组（group），2为加入todo（tasks）
   * @param {string} config.id - ID，用于区分
   * @param {string} config.name - 对组的配置
   * @param {string} config.color - 显示的颜色
   * @param {object} config.task - 对todo的配置
   * @param {int} config.task.startTime - 开始时间
   * @param {int} config.task.endTime - 结束时间
   * @param {boolean} config.task.done - 是否完成
   * @param {[]} config.task.tags - 属于什么组
   * @param {int} config.task.priority - 优先级，越高越提前，默认为0
   * @param {[{ id: string, text: string, done: boolean }]} config.task.steps - 步骤
   * @param {object} config.group - 对组的配置
   */
  const addNewTodo = config => {
    const editTodo = getTodoListContent();
    // 这会破坏读取,所以我们需要替换
    // 事实上对于POINT是*不可能*不通过用户而出现的，所以就直接全替换了
    config = JSON.parse(JSON.stringify(config).replaceAll(POINT, // 这很神秘啊
    "Why? ".concat(POINT.split('').join(' '), " is key word, how did you found it?")));
    if (config.mode === 1) {
      // 对于group
      editTodo.groups = [...editTodo.groups, {
        id: config.id || generateId(),
        name: config.name || msg("new-group"),
        color: config.color || '#0099ff'
      }];
    } else if (config.mode === 2) {
      // 对于Task
      editTodo.tasks = [...editTodo.tasks, {
        id: config.id || generateId(),
        name: config.name || msg("new-todo"),
        startTime: config.task.startTime || Date.now(),
        endTime: config.task.endTime || Date.now() + 100000086,
        done: config.task.done || false,
        groupId: config.task.tags || [],
        color: config.color || "#0099ff",
        steps: config.task.steps || []
      }];
    }
    createCommentToStage(getFormatComment(editTodo));
  };

  // 替换todo,用于编辑
  const replaceTodo = config => {
    const editTodo = getTodoListContent();
    let editIndex = 0;
    config = JSON.parse(JSON.stringify(config).replaceAll(POINT, // 这很神秘啊
    "Why? ".concat(POINT.split('').join(' '), " is key word, how did you found it?")));
    editIndex = editTodo.tasks.findIndex(task => task.id === config.id);
    editTodo.tasks[editIndex] = {
      id: config.id || generateId(),
      name: config.name || msg("New Group"),
      startTime: config.task.startTime || Date.now(),
      endTime: config.task.endTime || Date.now() + 100000086,
      done: config.task.done || false,
      groupId: config.task.tags || [],
      color: config.color || "#0099ff",
      steps: config.task.steps || []
    };
    createCommentToStage(getFormatComment(editTodo));
  };
  let todoWindow = null;
  window.__bilupTodoToggle = () => {
    if (todoWindow && todoWindow.isVisible) {
      todoWindow.hide();
    } else if (todoWindow) {
      todoWindow.show().bringToFront();
    } else {
      // 如果窗口不存在，创建新窗口
      createTodoWindow();
    }
  };
  const createTodoWindow = () => {
    const initialX = Math.max(24, Math.min(window.innerWidth - 624, 50));
    const initialY = Math.max(24, Math.min(window.innerHeight - 524, 50));
    todoWindow = _window_system_window_manager_js__WEBPACK_IMPORTED_MODULE_6__["default"].createWindow({
      id: 'todo',
      title: msg('title', {
        project: PROJECT_NAME.toString()
      }),
      width: 600,
      height: 500,
      minWidth: 400,
      minHeight: 300,
      maxWidth: Math.min(window.innerWidth * 0.9, 800),
      maxHeight: Math.min(window.innerHeight * 0.9, 600),
      className: 'sa-todo-window',
      x: initialX,
      y: initialY,
      onClose: () => {
        todoWindow = null;
      }
    });
    const content = document.createElement('div');
    content.className = 'sa-todo-content-wrapper';
    content.style.padding = '16px';
    content.style.boxSizing = 'border-box';
    content.style.height = '100%';
    content.style.overflow = 'auto';
    content.appendChild(createSideBarElements());
    todoWindow.setContent(content);
    todoWindow.show().bringToFront();
  };
  addon.tab.createModals = () => {
    if (todoWindow && todoWindow.isVisible) {
      todoWindow.hide();
      return;
    }
    if (todoWindow) {
      todoWindow.show().bringToFront();
      return;
    }
    createTodoWindow();
  };
});

/***/ }),

/***/ "./src/lib/tw-recolor/build.js!./src/addons/addons/todo/logo.svg":
/*!***********************************************************************!*\
  !*** ./src/lib/tw-recolor/build.js!./src/addons/addons/todo/logo.svg ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    const original = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"476.7054138183594\" height=\"371.1246871948242\" viewBox=\"0 0 476.7054138183594 371.1246871948242\" fill=\"none\"><path d=\"M247.562 299.853C247.018 300.671 246.386 301.447 245.665 302.168L196.168 351.665C193.695 354.138 190.573 355.567 187.35 355.952C186.345 356.105 185.327 356.156 184.314 356.105C181.213 355.947 178.152 354.832 175.611 352.76C175.218 352.44 174.838 352.096 174.472 351.73L124.975 302.233C124.899 302.157 124.824 302.081 124.75 302.004C124.021 301.244 123.389 300.427 122.851 299.566C122.848 299.561 122.844 299.555 122.841 299.55L122.84 299.549L19.3933 196.103C13.5355 190.245 13.5355 180.747 19.3933 174.89L68.8903 125.393C74.7481 119.535 84.2454 119.535 90.1032 125.393L185.353 220.642L201.836 204.159L386.602 19.3937C390.263 15.7326 395.346 14.3596 400.073 15.2749C400.191 15.2978 400.309 15.3221 400.427 15.3478C403.134 15.9399 405.71 17.2885 407.815 19.3937L457.312 68.8907C463.17 74.7485 463.17 84.2458 457.312 90.1036L247.562 299.853Z\" stroke=\"#855CD6\" stroke-width=\"30\"    fill-rule=\"evenodd\"  fill=\"#855CD6\" fill-opacity=\"0\"></path></svg>";

    const getSRC = () => {
        const recolored = typeof Recolor === 'object' ? (
            original.replace(/#855cd6/gi, Recolor.primary)
        ) : original;
        return 'data:image/svg+xml;,' + encodeURIComponent(recolored);
    };

    /* harmony default export */ __webpack_exports__["default"] = (getSRC);


/***/ })

}]);
//# sourceMappingURL=addon-entry-todo.js.map