(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-default-entry"],{

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/color-picker/style.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-color-picker {\n  display: flex;\n}\n\n.sa-color-picker-code {\n  margin: 8px 0;\n}\n\n.sa-color-picker-paint {\n  margin-top: 16px;\n  margin-bottom: 4px;\n}\n\n.sa-color-picker > .sa-color-picker-color {\n  border: none;\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  padding: 0;\n  padding-left: 0.6rem;\n  padding-right: 0.4rem;\n  margin-left: 0.5rem;\n  outline: none;\n  box-sizing: border-box;\n  width: 3rem;\n  height: 2rem;\n}\n\n.sa-color-picker > .sa-color-picker-text {\n  box-sizing: border-box;\n  width: calc(150px - 3rem);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-color {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  margin-left: 0;\n  margin-right: 0.5rem;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-text {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbody.sa-hide-eye-dropper-background div[class*=\"stage_color-picker-background\"] {\n  /* Do not show eye dropper background if the color picker is \"fake\" */\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/editor-comment-previews/userstyle.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-comment-preview-outer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000000;\n  pointer-events: none;\n}\n\n.sa-comment-preview-inner {\n  width: calc(200px - 16px);\n  max-height: calc(132px - 8px);\n  padding: 8px;\n  overflow: hidden;\n\n  font-size: 12px;\n  white-space: pre-wrap;\n  pointer-events: none;\n\n  color: rgb(87, 94, 117);\n  background-color: rgb(255 255 255 / 90%);\n  border-style: none;\n  border-radius: 8px;\n  filter: drop-shadow(0px 5px 5px rgb(0 0 0 / 10%));\n\n  transform: perspective(200px);\n}\n\n@supports (backdrop-filter: blur(16px)) {\n  .sa-comment-preview-inner {\n    background-color: rgb(255 255 255 / 75%);\n    backdrop-filter: blur(16px);\n  }\n}\n\n.sa-comment-preview-fade {\n  transition:\n    opacity 0.1s,\n    filter 0.1s,\n    transform 0.1s linear;\n}\n\n.sa-comment-preview-hidden {\n  opacity: 0;\n  filter: none;\n  transform: perspective(200px) translateZ(-20px);\n}\n\n.sa-comment-preview-reduce-transparency {\n  background-color: rgb(255 255 255);\n  backdrop-filter: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/editor-searchable-dropdowns/userscript.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".u-dropdown-searchbar {\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid var(--text-primary);\n  box-sizing: border-box;\n  color: var(--text-primary, rgba(87, 94, 117, 0.6));\n  background-color: transparent;\n  padding: 0.5rem 0.8rem;\n  outline: none;\n  transition: all 0.2s ease;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.blocklyDropDownDiv .goog-menu {\n  overflow-x: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/folders/style.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/folders/style.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-folders-contextmenu-item {\n  max-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n[sa-folders-context-type=\"folder\"] .react-contextmenu > :not(.sa-ctx-menu) {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/onion-skinning/style.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-onion-button {\n  position: relative;\n}\n.sa-onion-button:focus-within {\n  background-color: var(--editorDarkMode-primary-transparent35, hsla(260, 60%, 60%, 0.35));\n}\n.sa-onion-image[data-image=\"toggle\"] {\n  filter: var(--filter-icon-white);\n}\n.sa-onion-image[data-image=\"settings\"] {\n  filter: var(--filter-icon-black);\n}\n.sa-onion-button[data-enabled=\"true\"] .sa-onion-image {\n  filter: brightness(0) invert(1);\n}\n.sa-onion-button[data-enabled=\"true\"] {\n  color: white;\n  background-color: var(--looks-secondary);\n}\n\n.sa-onion-group {\n  position: relative;\n  flex-direction: row;\n}\n\n.sa-onion-settings-wrapper {\n  position: absolute;\n  justify-items: center;\n  left: 50%;\n  width: 1.95rem;\n  height: 1.95rem;\n  display: grid;\n}\n\n.sa-onion-settings {\n  position: absolute;\n  bottom: 100%;\n  /* based on the styles for the color dropdown */\n  padding: 4px;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  border: 1px solid var(--ui-black-transparent);\n  transition-property: bottom, opacity;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 0;\n  pointer-events: none;\n  background: var(--ui-modal-background);\n  color: var(--ui-text-primary);\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.sa-onion-settings[data-visible=\"true\"] {\n  bottom: calc(100% + 22px);\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.sa-onion-settings-line {\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n  gap: 0.25em;\n}\n\n.sa-onion-settings-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  border: 0;\n  background: transparent;\n  -moz-appearance: textfield;\n  border: 0;\n  outline: 0;\n}\n\n.sa-onion-settings-input::-webkit-outer-spin-button,\n.sa-onion-settings-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sa-onion-settings-tip {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  right: calc(50% - 7px);\n}\n.sa-onion-settings-polygon {\n  fill: var(--ui-modal-background);\n  stroke: var(--ui-black-transparent);\n}\n\n.sa-onion-settings-label {\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/pick-colors-from-stage/style.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-stage-color-picker-picking [class^=\"stage_color-picker-background_\"] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/reorder-custom-inputs/arrows.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/reorder-custom-inputs/arrows.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocklyTextShiftArrow {\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  margin-left: -12.5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnoiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUtMTIuNjQyaDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9Im9wYWNpdHk6Ljc1O2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0iTTU2IDE2djk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4zNzYgLTIuMzc2KSBzY2FsZSguMjI0NjIpIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6LjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNDAgMzJ2NjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouMjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNMjQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNzU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNzIgMTZ2OTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik04OCAzMnY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMzc2IC0yLjM3Nikgc2NhbGUoLjIyNDYyKSIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5Oi4yNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik0xMDQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iI2JmYmZiZiIgZD0iTTM5LjYzMi0uNTc2Yy4wNy0uMDQ2LjE4Ny0uMDIzLjIxLjA3bC42MDYgMi40OTJzMS40OSAxLjA5NSAxLjkzMyAxLjg2M2MuNzQ1IDEuMjgxLjc2OCAyLjMzLjc2OCAyLjMzczEuNjU0LjQ4OCAxLjkzMyAxLjgxNmMuMjggMS4zMjctLjc0NSAzLjg0My01LjEyMyA0LjcwNS00LjM3OS44NjEtNy44OTYtLjMyNy05LjU1LTIuOTgyLTEuNjUzLTIuNjU1Ljk1Ni01LjgyMi44MTYtNS42MzZsLS40OS00LjE2OWMtLjAyMy0uMDkzLjA5NC0uMTYzLjE4Ny0uMTE2bDIuODE4IDEuODRzMS4wNDgtLjM5NiAyLjE0My0uNDQzYTcuMDEgNy4wMSAwIDAgMSAxLjc0Ny4wOTN6IiBzdHlsZT0ib3BhY2l0eTouNTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTQ3LjM2NSA2LjUyOGMtMS4wOTUuODg1LTIuNzcyLjkwOC0yLjc3Mi45MDhtMi40NjkgMS43Yy0xLjQ2Ny4xMTctMi4zNzYtLjMyNi0yLjM3Ni0uMzI2TTI4LjY2MyA2LjQ1OHMyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNWMtMS4wMDIuMzk2LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ib3BhY2l0eTouNTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9IiNiZmJmYmYiIGQ9Ik00MS45NjEgMS43NTNjLjA3LS4wNDYuMTg3LS4wMjMuMjEuMDdsLjYwNiAyLjQ5MnMxLjQ5IDEuMDk1IDEuOTMzIDEuODYzYy43NDUgMS4yODEuNzY4IDIuMzMuNzY4IDIuMzNzMS42NTQuNDg4IDEuOTMzIDEuODE2Yy4yOCAxLjMyNy0uNzQ1IDMuODQzLTUuMTIzIDQuNzA1LTQuMzc5Ljg2MS03Ljg5Ni0uMzI3LTkuNTUtMi45ODItMS42NTMtMi42NTUuOTU2LTUuODIyLjgxNi01LjYzNmwtLjQ5LTQuMTY5Yy0uMDIzLS4wOTMuMDk0LS4xNjMuMTg3LS4xMTZsMi44MTggMS44NHMxLjA0OC0uMzk2IDIuMTQzLS40NDNhNy4wMSA3LjAxIDAgMCAxIDEuNzQ3LjA5M3oiIHN0eWxlPSJvcGFjaXR5Oi43NTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTQ5LjY5NCA4Ljg1N2MtMS4wOTUuODg1LTIuNzcyLjkwOC0yLjc3Mi45MDhtMi40NjkgMS43Yy0xLjQ2Ny4xMTctMi4zNzYtLjMyNi0yLjM3Ni0uMzI2TTMwLjk5MiA4Ljc4N3MyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNWMtMS4wMDIuMzk2LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ib3BhY2l0eTouNzU7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiLz48cGF0aCBmaWxsPSIjYmZiZmJmIiBkPSJNNDQuMjkgNC4wODJjLjA3LS4wNDcuMTg2LS4wMjQuMjEuMDdsLjYwNSAyLjQ5MnMxLjQ5IDEuMDk0IDEuOTMzIDEuODYzYy43NDUgMS4yOC43NjkgMi4zMjkuNzY5IDIuMzI5czEuNjUzLjQ4OSAxLjkzMyAxLjgxNmMuMjggMS4zMjgtLjc0NSAzLjg0My01LjEyNCA0LjcwNS00LjM3OC44NjItNy44OTUtLjMyNi05LjU0OS0yLjk4MS0xLjY1My0yLjY1NS45NTUtNS44MjMuODE1LTUuNjM2bC0uNDg5LTQuMTdjLS4wMjMtLjA5Mi4wOTMtLjE2Mi4xODctLjExNmwyLjgxOCAxLjg0czEuMDQ4LS4zOTYgMi4xNDItLjQ0MmE3LjAxIDcuMDEgMCAwIDEgMS43NDcuMDkzeiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOiNmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDEwMjY7c3Ryb2tlLXdpZHRoOi45MzE2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNTIuMDIyIDExLjE4NWMtMS4wOTQuODg1LTIuNzcxLjkwOC0yLjc3MS45MDhtMi40NjggMS43Yy0xLjQ2Ny4xMTctMi4zNzUtLjMyNS0yLjM3NS0uMzI1TTMzLjMyIDExLjExNXMyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNmMtMS4wMDEuMzk1LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiLz48ZyBzdHlsZT0ib3BhY2l0eTouMTg5ODU0Ij48cGF0aCBkPSJNMS4yNDMgOC41YS42MzcuNjM3IDAgMCAwLS40NSAxLjA4NmwuMy4zYy4yNDItLjM1Mi41NDYtLjY1OC44OTgtLjlsLS4yOTctLjNhLjYzNi42MzYgMCAwIDAtLjQ1LS4xODVaIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC4wNCAtMi42NDcpIi8+PHBhdGggZD0iTTE1LjExNCAxOS41MDZhMy41MDEgMy41MDEgMCAxIDEtNy4wMDMgMCAzLjUwMSAzLjUwMSAwIDAgMSA3LjAwMyAwem0tNy4zOTItNy4zMThhMy41IDMuNSAwIDEgMCAuNDA2IDYuOTg1IDMuNSAzLjUgMCAwIDEgMy4xNS0zLjE1IDMuNSAzLjUgMCAwIDAtMy41NTYtMy44MzV6bS0zLjc0Ni0zLjgyYTMuNTAxIDMuNTAxIDAgMSAwIC4zMzYgNi45ODQgMy41MDIgMy41MDIgMCAwIDEgMy4xNDgtMy4xNDggMy41IDMuNSAwIDAgMC0zLjQ4NC0zLjgzNnoiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjA0IC0yLjY0NykiLz48cGF0aCBkPSJNMTQuNDk3IDIxLjQ5MWMtLjI0My4zNTItLjU1LjY1Ni0uOTAyLjg5OWwzLjA4NCAzLjA4NGEuNjM4LjYzOCAwIDAgMCAuOSAwIC42MzcuNjM3IDAgMCAwIDAtLjl6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC4wNCAtMi42NDcpIi8+PC9nPjxnIHN0eWxlPSJvcGFjaXR5Oi44MDU1MyI+PGcgc3R5bGU9Im9wYWNpdHk6LjU4NTkyOCI+PHBhdGggZD0iTTEuMjQzIDguNWEuNjM3LjYzNyAwIDAgMC0uNDUgMS4wODZsLjMuM2MuMjQyLS4zNTIuNTQ2LS42NTguODk4LS45bC0uMjk3LS4zYS42MzYuNjM2IDAgMCAwLS40NS0uMTg1WiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOiMwMDEwMjY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOi4xOTY0OTI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzQ5NiAwIDAgMS4wMzQ5NiAyLjc3NSAtNS4xNykiLz48cGF0aCBkPSJNMTUuMTE0IDE5LjUwNmEzLjUwMSAzLjUwMSAwIDEgMS03LjAwMyAwIDMuNTAxIDMuNTAxIDAgMCAxIDcuMDAzIDB6bS03LjM5Mi03LjMxOGEzLjUgMy41IDAgMSAwIC40MDYgNi45ODUgMy41IDMuNSAwIDAgMSAzLjE1LTMuMTUgMy41IDMuNSAwIDAgMC0zLjU1Ni0zLjgzNXptLTMuNzQ2LTMuODJhMy41MDEgMy41MDEgMCAxIDAgLjMzNiA2Ljk4NCAzLjUwMiAzLjUwMiAwIDAgMSAzLjE0OC0zLjE0OCAzLjUgMy41IDAgMCAwLTMuNDg0LTMuODM2eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDEwMjY7c3Ryb2tlLXdpZHRoOi45MzI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzQ5NiAwIDAgMS4wMzQ5NiAyLjc3NSAtNS4xNykiLz48cGF0aCBkPSJNMTQuNDk3IDIxLjQ5MWMtLjI0My4zNTItLjU1LjY1Ni0uOTAyLjg5OWwzLjA4NCAzLjA4NGEuNjM4LjYzOCAwIDAgMCAuOSAwIC42MzcuNjM3IDAgMCAwIDAtLjl6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IDIuNzc1IC01LjE3KSIvPjwvZz48L2c+PHBhdGggZmlsbD0iI2Q5OWU4MiIgZD0iTTIxLjkwNyAxOS4xM2EuNjM2LjYzNiAwIDAgMS0uNDUtLjE4NUw1LjU3MiAzLjA1OGEuNjM3LjYzNyAwIDAgMSAuOS0uOWwxNS44ODUgMTUuODg2YS42MzcuNjM3IDAgMCAxLS40NSAxLjA4N3oiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDojMDAxMDI2O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDouMTk2NDkyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjYxNyAtMS4zMykiLz48cGF0aCBmaWxsPSIjZmNiMWUzIiBkPSJNMTIuMjUzIDUuMzRhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDB6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6I2ZlZmVmZDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PHBhdGggZmlsbD0iI2ZmZDk4MyIgZD0iTTExLjc2OCAxMi41NjZhMy41IDMuNSAwIDEgMSAxLjYxLTYuODEzIDMuNSAzLjUgMCAwIDEtMS42MSA2LjgxM3oiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDojZmVmZWZkO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjYxNyAtMS4zMykiLz48cGF0aCBmaWxsPSIjYTZkMzg4IiBkPSJNMTkuODkyIDEyLjk3N2EzLjUwMSAzLjUwMSAwIDEgMS03LjAwMyAwIDMuNTAxIDMuNTAxIDAgMCAxIDcuMDAzIDB6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6I2ZlZmVmZDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PHBhdGggZmlsbD0iI2Q5OWU4MiIgZD0iTTIxLjkwNyAxOS4xM2EuNjM2LjYzNiAwIDAgMS0uNDUtLjE4NWwtMy44OTgtMy45YS42MzYuNjM2IDAgMSAxIC45LS45bDMuODk4IDMuOWEuNjM3LjYzNyAwIDAgMS0uNDUgMS4wODZ6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/bitmap-copy/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let addon = _ref.addon,
    console = _ref.console;
  if (!addon.tab.redux.state) return console.warn("Redux is not available!");
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", _ref2 => {
    let detail = _ref2.detail;
    if (addon.self.disabled) return;
    const e = detail;
    if (!e.action || e.action.type !== "scratch-paint/clipboard/SET") return;
    const items = e.next.scratchPaint.clipboard.items;
    if (items.length !== 1) return;
    const firstItem = items[0];
    // TODO vector support
    if (!Array.isArray(firstItem) || firstItem[0] !== "Raster") return console.log("copied element is vector");
    const dataURL = firstItem[1].source;
    addon.tab.copyImage(dataURL).then(() => console.log("Image successfully copied")).catch(e => console.error("Image could not be copied: ".concat(e)));
  });
});

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/_runtime_entry.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/_runtime_entry.js ***!
  \******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-cherry-picking/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/userscript.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/userscript.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-duplicate/module.js */ "./src/addons/addons/block-duplicate/module.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console;
  const update = () => {
    _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["setCherryPicking"](!addon.self.disabled, addon.settings.get("invertDrag"));
  };
  addon.self.addEventListener("disabled", update);
  addon.self.addEventListener("reenabled", update);
  addon.settings.addEventListener("change", update);
  update();
  _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
});

/***/ }),

/***/ "./src/addons/addons/block-duplicate/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-duplicate/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-duplicate/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-duplicate/module.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/block-duplicate/module.js ***!
  \*****************************************************/
/*! exports provided: setCherryPicking, setDuplication, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCherryPicking", function() { return setCherryPicking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDuplication", function() { return setDuplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
let enableCherryPicking = false;
let invertCherryPicking = false;
function setCherryPicking(newEnabled, newInverted) {
  enableCherryPicking = newEnabled;
  // If cherry picking is disabled, also disable invert. Duplicating blocks can still cause
  // this setting to be used.
  invertCherryPicking = newEnabled && newInverted;
}
let enableDuplication = false;
function setDuplication(newEnabled) {
  enableDuplication = newEnabled;
}

// mostRecentEvent_ is sometimes a fake event, so we can't rely on reading its properties.
let ctrlOrMetaPressed = false;
let altPressed = false;
document.addEventListener("mousedown", function (e) {
  ctrlOrMetaPressed = e.ctrlKey || e.metaKey;
  altPressed = e.altKey;
}, {
  capture: true
});
let loaded = false;
async function load(addon) {
  if (loaded) {
    return;
  }
  loaded = true;
  const ScratchBlocks = await addon.tab.traps.getBlockly();

  // https://github.com/scratchfoundation/scratch-blocks/blob/912b8cc728bea8fd91af85078c64fcdbfe21c87a/core/gesture.js#L454
  const originalStartDraggingBlock = ScratchBlocks.Gesture.prototype.startDraggingBlock_;
  ScratchBlocks.Gesture.prototype.startDraggingBlock_ = function () {
    let block = this.targetBlock_;

    // Scratch uses fake mouse events to implement right click > duplicate
    const isRightClickDuplicate = !(this.mostRecentEvent_ instanceof MouseEvent);
    const isDuplicating = enableDuplication && altPressed && !isRightClickDuplicate && !this.flyout_ && !this.shouldDuplicateOnDrag_ && this.targetBlock_.type !== "procedures_definition";
    const isCherryPickingInverted = invertCherryPicking && !isRightClickDuplicate && block.getParent();
    const canCherryPick = enableCherryPicking || isDuplicating;
    const isCherryPicking = canCherryPick && ctrlOrMetaPressed === !isCherryPickingInverted && !block.isShadow();
    if (isDuplicating || isCherryPicking) {
      if (!ScratchBlocks.Events.getGroup()) {
        // Scratch will disable grouping on its own later.
        ScratchBlocks.Events.setGroup(true);
      }
    }
    if (isDuplicating) {
      // Based on https://github.com/scratchfoundation/scratch-blocks/blob/feda366947432b9d82a4f212f43ff6d4ab6f252f/core/scratch_blocks_utils.js#L171
      // Setting this.shouldDuplicateOnDrag_ = true does NOT work because it doesn't call changeObscuredShadowIds
      this.startWorkspace_.setResizesEnabled(false);
      ScratchBlocks.Events.disable();
      let newBlock;
      try {
        const xmlBlock = ScratchBlocks.Xml.blockToDom(block);
        newBlock = ScratchBlocks.Xml.domToBlock(xmlBlock, this.startWorkspace_);
        ScratchBlocks.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
        const xy = block.getRelativeToSurfaceXY();
        newBlock.moveBy(xy.x, xy.y);
      } catch (e) {
        console.error(e);
      }
      ScratchBlocks.Events.enable();
      if (newBlock) {
        block = newBlock;
        this.targetBlock_ = newBlock;
        if (ScratchBlocks.Events.isEnabled()) {
          ScratchBlocks.Events.fire(new ScratchBlocks.Events.BlockCreate(newBlock));
        }
      }
    }
    if (isCherryPicking) {
      if (isRightClickDuplicate || isDuplicating) {
        const nextBlock = block.getNextBlock();
        if (nextBlock) {
          nextBlock.dispose();
        }
      }
      block.unplug(true);
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return originalStartDraggingBlock.call(this, ...args);
  };
}

/***/ }),

/***/ "./src/addons/addons/block-duplicate/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-duplicate/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/block-duplicate/module.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console;
  const update = () => {
    _module_js__WEBPACK_IMPORTED_MODULE_0__["setDuplication"](!addon.self.disabled);
  };
  addon.self.addEventListener("disabled", update);
  addon.self.addEventListener("reenabled", update);
  update();
  _module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
});

/***/ }),

/***/ "./src/addons/addons/block-switching/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-switching/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-switching/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-switching/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-switching/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console,
    msg = _ref.msg;
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  let blockSwitches = {};
  let procedureSwitches = {};
  const noopSwitch = {
    isNoop: true
  };
  const randomColor = () => {
    const num = Math.floor(Math.random() * 256 * 256 * 256);
    return "#".concat(num.toString(16).padStart(6, "0"));
  };
  const buildSwitches = () => {
    blockSwitches = {};
    procedureSwitches = {};
    if (addon.settings.get("motion")) {
      blockSwitches["motion_turnright"] = [noopSwitch, {
        opcode: "motion_turnleft"
      }];
      blockSwitches["motion_turnleft"] = [{
        opcode: "motion_turnright"
      }, noopSwitch];
      blockSwitches["motion_setx"] = [noopSwitch, {
        opcode: "motion_changexby",
        remapInputName: {
          X: "DX"
        }
      }, {
        opcode: "motion_sety",
        remapInputName: {
          X: "Y"
        }
      }, {
        opcode: "motion_changeyby",
        remapInputName: {
          X: "DY"
        }
      }];
      blockSwitches["motion_changexby"] = [{
        opcode: "motion_setx",
        remapInputName: {
          DX: "X"
        }
      }, noopSwitch, {
        opcode: "motion_sety",
        remapInputName: {
          DX: "Y"
        }
      }, {
        opcode: "motion_changeyby",
        remapInputName: {
          DX: "DY"
        }
      }];
      blockSwitches["motion_sety"] = [{
        opcode: "motion_setx",
        remapInputName: {
          Y: "X"
        }
      }, {
        opcode: "motion_changexby",
        remapInputName: {
          Y: "DX"
        }
      }, noopSwitch, {
        opcode: "motion_changeyby",
        remapInputName: {
          Y: "DY"
        }
      }];
      blockSwitches["motion_changeyby"] = [{
        opcode: "motion_setx",
        remapInputName: {
          DY: "X"
        }
      }, {
        opcode: "motion_changexby",
        remapInputName: {
          DY: "DX"
        }
      }, {
        opcode: "motion_sety",
        remapInputName: {
          DY: "Y"
        }
      }, noopSwitch];
      blockSwitches["motion_xposition"] = [noopSwitch, {
        opcode: "motion_yposition"
      }];
      blockSwitches["motion_yposition"] = [{
        opcode: "motion_xposition"
      }, noopSwitch];
    }
    if (addon.settings.get("looks")) {
      blockSwitches["looks_seteffectto"] = [noopSwitch, {
        opcode: "looks_changeeffectby",
        remapInputName: {
          VALUE: "CHANGE"
        }
      }];
      blockSwitches["looks_changeeffectby"] = [{
        opcode: "looks_seteffectto",
        remapInputName: {
          CHANGE: "VALUE"
        }
      }, noopSwitch];
      blockSwitches["looks_setsizeto"] = [noopSwitch, {
        opcode: "looks_changesizeby",
        remapInputName: {
          SIZE: "CHANGE"
        }
      }];
      blockSwitches["looks_changesizeby"] = [{
        opcode: "looks_setsizeto",
        remapInputName: {
          CHANGE: "SIZE"
        }
      }, noopSwitch];
      blockSwitches["looks_costumenumbername"] = [noopSwitch, {
        opcode: "looks_backdropnumbername"
      }];
      blockSwitches["looks_backdropnumbername"] = [{
        opcode: "looks_costumenumbername"
      }, noopSwitch];
      blockSwitches["looks_show"] = [noopSwitch, {
        opcode: "looks_hide"
      }];
      blockSwitches["looks_hide"] = [{
        opcode: "looks_show"
      }, noopSwitch];
      blockSwitches["looks_nextcostume"] = [noopSwitch, {
        opcode: "looks_nextbackdrop"
      }];
      blockSwitches["looks_nextbackdrop"] = [{
        opcode: "looks_nextcostume"
      }, noopSwitch];
      blockSwitches["looks_say"] = [noopSwitch, {
        opcode: "looks_sayforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }, {
        opcode: "looks_think"
      }, {
        opcode: "looks_thinkforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }];
      blockSwitches["looks_think"] = [{
        opcode: "looks_say"
      }, {
        opcode: "looks_sayforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }, noopSwitch, {
        opcode: "looks_thinkforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }];
      blockSwitches["looks_sayforsecs"] = [{
        opcode: "looks_say",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_think",
        splitInputs: ["SECS"]
      }, noopSwitch, {
        opcode: "looks_thinkforsecs"
      }];
      blockSwitches["looks_thinkforsecs"] = [{
        opcode: "looks_say",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_think",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_sayforsecs"
      }, noopSwitch];
      blockSwitches["looks_switchbackdropto"] = [noopSwitch, {
        opcode: "looks_switchbackdroptoandwait"
      }];
      blockSwitches["looks_switchbackdroptoandwait"] = [{
        opcode: "looks_switchbackdropto"
      }, noopSwitch];
      blockSwitches["looks_gotofrontback"] = [noopSwitch, {
        opcode: "looks_goforwardbackwardlayers",
        remapInputName: {
          FRONT_BACK: "FORWARD_BACKWARD"
        },
        mapFieldValues: {
          FRONT_BACK: {
            front: "forward",
            back: "backward"
          }
        },
        createInputs: {
          NUM: {
            shadowType: "math_integer",
            value: "1"
          }
        }
      }];
      blockSwitches["looks_goforwardbackwardlayers"] = [{
        opcode: "looks_gotofrontback",
        splitInputs: ["NUM"],
        remapInputName: {
          FORWARD_BACKWARD: "FRONT_BACK"
        },
        mapFieldValues: {
          FORWARD_BACKWARD: {
            forward: "front",
            backward: "back"
          }
        }
      }, noopSwitch];
    }
    if (addon.settings.get("sound")) {
      blockSwitches["sound_play"] = [noopSwitch, {
        opcode: "sound_playuntildone"
      }];
      blockSwitches["sound_playuntildone"] = [{
        opcode: "sound_play"
      }, noopSwitch];
      blockSwitches["sound_seteffectto"] = [noopSwitch, {
        opcode: "sound_changeeffectby"
      }];
      blockSwitches["sound_changeeffectby"] = [{
        opcode: "sound_seteffectto"
      }, noopSwitch];
      blockSwitches["sound_setvolumeto"] = [noopSwitch, {
        opcode: "sound_changevolumeby"
      }];
      blockSwitches["sound_changevolumeby"] = [{
        opcode: "sound_setvolumeto"
      }, noopSwitch];
    }
    if (addon.settings.get("event")) {
      blockSwitches["event_broadcast"] = [noopSwitch, {
        opcode: "event_broadcastandwait"
      }];
      blockSwitches["event_broadcastandwait"] = [{
        opcode: "event_broadcast"
      }, noopSwitch];
    }
    if (addon.settings.get("control")) {
      blockSwitches["control_if"] = [noopSwitch, {
        opcode: "control_if_else"
      }];
      blockSwitches["control_if_else"] = [{
        opcode: "control_if",
        splitInputs: ["SUBSTACK2"]
      }, noopSwitch];
      blockSwitches["control_repeat_until"] = [noopSwitch, {
        opcode: "control_wait_until",
        splitInputs: ["SUBSTACK"]
      }, {
        opcode: "control_forever",
        splitInputs: ["CONDITION"]
      }];
      blockSwitches["control_forever"] = [{
        opcode: "control_repeat_until"
      }, noopSwitch];
      blockSwitches["control_wait_until"] = [{
        opcode: "control_repeat_until"
      }, noopSwitch];
    }
    if (addon.settings.get("operator")) {
      blockSwitches["operator_equals"] = [{
        opcode: "operator_gt"
      }, noopSwitch, {
        opcode: "operator_lt"
      }];
      blockSwitches["operator_gt"] = [noopSwitch, {
        opcode: "operator_equals"
      }, {
        opcode: "operator_lt"
      }];
      blockSwitches["operator_lt"] = [{
        opcode: "operator_gt"
      }, {
        opcode: "operator_equals"
      }, noopSwitch];
      blockSwitches["operator_add"] = [noopSwitch, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_subtract"] = [{
        opcode: "operator_add"
      }, noopSwitch, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_multiply"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, noopSwitch, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_divide"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, noopSwitch, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_mod"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, noopSwitch];
      blockSwitches["operator_and"] = [noopSwitch, {
        opcode: "operator_or"
      }];
      blockSwitches["operator_or"] = [{
        opcode: "operator_and"
      }, noopSwitch];
    }
    if (addon.settings.get("sensing")) {
      blockSwitches["sensing_mousex"] = [noopSwitch, {
        opcode: "sensing_mousey"
      }];
      blockSwitches["sensing_mousey"] = [{
        opcode: "sensing_mousex"
      }, noopSwitch];
      blockSwitches["sensing_touchingcolor"] = [noopSwitch, {
        opcode: "sensing_coloristouchingcolor",
        createInputs: {
          COLOR2: {
            shadowType: "colour_picker",
            value: randomColor
          }
        }
      }];
      blockSwitches["sensing_coloristouchingcolor"] = [{
        opcode: "sensing_touchingcolor",
        splitInputs: ["COLOR2"]
      }, noopSwitch];
    }
    if (addon.settings.get("data")) {
      blockSwitches["data_setvariableto"] = [noopSwitch, {
        opcode: "data_changevariableby",
        remapShadowType: {
          VALUE: "math_number"
        }
      }];
      blockSwitches["data_changevariableby"] = [{
        opcode: "data_setvariableto",
        remapShadowType: {
          VALUE: "text"
        }
      }, noopSwitch];
      blockSwitches["data_showvariable"] = [noopSwitch, {
        opcode: "data_hidevariable"
      }];
      blockSwitches["data_hidevariable"] = [{
        opcode: "data_showvariable"
      }, noopSwitch];
      blockSwitches["data_showlist"] = [noopSwitch, {
        opcode: "data_hidelist"
      }];
      blockSwitches["data_hidelist"] = [{
        opcode: "data_showlist"
      }, noopSwitch];
      blockSwitches["data_replaceitemoflist"] = [noopSwitch, {
        opcode: "data_insertatlist"
      }];
      blockSwitches["data_insertatlist"] = [{
        opcode: "data_replaceitemoflist"
      }, noopSwitch];
      blockSwitches["data_deleteoflist"] = [noopSwitch, {
        opcode: "data_deletealloflist",
        splitInputs: ["INDEX"]
      }];
      blockSwitches["data_deletealloflist"] = [{
        opcode: "data_deleteoflist",
        createInputs: {
          INDEX: {
            shadowType: "math_integer",
            value: "1"
          }
        }
      }, noopSwitch];
    }
    if (addon.settings.get("extension")) {
      blockSwitches["pen_penDown"] = [noopSwitch, {
        opcode: "pen_penUp"
      }];
      blockSwitches["pen_penUp"] = [{
        opcode: "pen_penDown"
      }, noopSwitch];
      blockSwitches["pen_setPenColorParamTo"] = [noopSwitch, {
        opcode: "pen_changePenColorParamBy"
      }];
      blockSwitches["pen_changePenColorParamBy"] = [{
        opcode: "pen_setPenColorParamTo"
      }, noopSwitch];
      blockSwitches["pen_setPenHueToNumber"] = [noopSwitch, {
        opcode: "pen_changePenHueBy"
      }];
      blockSwitches["pen_changePenHueBy"] = [{
        opcode: "pen_setPenHueToNumber"
      }, noopSwitch];
      blockSwitches["pen_setPenShadeToNumber"] = [noopSwitch, {
        opcode: "pen_changePenShadeBy"
      }];
      blockSwitches["pen_changePenShadeBy"] = [{
        opcode: "pen_setPenShadeToNumber"
      }, noopSwitch];
      blockSwitches["pen_setPenSizeTo"] = [noopSwitch, {
        opcode: "pen_changePenSizeBy"
      }];
      blockSwitches["pen_changePenSizeBy"] = [{
        opcode: "pen_setPenSizeTo"
      }, noopSwitch];
      blockSwitches["music_setTempo"] = [noopSwitch, {
        opcode: "music_changeTempo"
      }];
      blockSwitches["music_changeTempo"] = [{
        opcode: "music_setTempo"
      }, noopSwitch];
    }
    if (addon.settings.get("sa")) {
      const logProc = "\u200B\u200Blog\u200B\u200B %s";
      const warnProc = "\u200B\u200Bwarn\u200B\u200B %s";
      const errorProc = "\u200B\u200Berror\u200B\u200B %s";
      const logMessage = msg("debugger_log");
      const warnMessage = msg("debugger_warn");
      const errorMessage = msg("debugger_error");
      const logSwitch = {
        mutate: {
          proccode: logProc
        },
        msg: logMessage
      };
      const warnSwitch = {
        mutate: {
          proccode: warnProc
        },
        msg: warnMessage
      };
      const errorSwitch = {
        mutate: {
          proccode: errorProc
        },
        msg: errorMessage
      };
      procedureSwitches[logProc] = [{
        msg: logMessage,
        isNoop: true
      }, warnSwitch, errorSwitch];
      procedureSwitches[warnProc] = [logSwitch, {
        msg: warnMessage,
        isNoop: true
      }, errorSwitch];
      procedureSwitches[errorProc] = [logSwitch, warnSwitch, {
        msg: errorMessage,
        isNoop: true
      }];
    }

    // Switching for these is implemented by Scratch. We only define them here to optionally add a border.
    // Because we don't implement the switching ourselves, this is not controlled by the data category option.
    blockSwitches["data_variable"] = [];
    blockSwitches["data_listcontents"] = [];
  };
  buildSwitches();
  addon.settings.addEventListener("change", buildSwitches);

  /**
   * @param {*} workspace
   * @param {Element} xmlBlock
   */
  const pasteBlockXML = (workspace, xmlBlock) => {
    // Similar to https://github.com/scratchfoundation/scratch-blocks/blob/7575c9a0f2c267676569c4b102b76d77f35d9fd6/core/workspace_svg.js#L1020
    // but without the collision checking.
    const block = ScratchBlocks.Xml.domToBlock(xmlBlock, workspace);
    const x = +xmlBlock.getAttribute("x");
    const y = +xmlBlock.getAttribute("y");
    // Don't need to handle RTL here
    block.moveBy(x, y);
    return block;
  };

  /**
   * @param {string} shadowType The type of shadow eg. "math_number"
   * @returns {string} The name of the shadow's inner field that contains the user-visible value
   */
  const getShadowFieldName = shadowType => {
    // This is non-comprehensive.
    if (shadowType === "text") {
      return "TEXT";
    }
    if (shadowType === "colour_picker") {
      return "COLOUR";
    }
    return "NUM";
  };

  /**
   * @template T
   * @param {T|()=>T} value
   * @returns {T}
   */
  const callIfFunction = value => {
    if (typeof value === "function") {
      return value();
    }
    return value;
  };
  const menuCallbackFactory = (block, opcodeData) => () => {
    if (opcodeData.isNoop) {
      return;
    }
    if (opcodeData.fieldValue) {
      block.setFieldValue(opcodeData.fieldValue, "VALUE");
      return;
    }
    try {
      ScratchBlocks.Events.setGroup(true);
      const workspace = block.workspace;
      const blocksToBringToForeground = [];
      // Split inputs before we clone the block.
      if (opcodeData.splitInputs) {
        for (const inputName of opcodeData.splitInputs) {
          const input = block.getInput(inputName);
          if (!input) {
            continue;
          }
          const connection = input.connection;
          if (!connection) {
            continue;
          }
          if (connection.isConnected()) {
            const targetBlock = connection.targetBlock();
            if (targetBlock.isShadow()) {
              // Deleting shadows is handled later.
            } else {
              connection.disconnect();
              blocksToBringToForeground.push(targetBlock);
            }
          }
        }
      }

      // Make a copy of the block with the proper type set.
      // It doesn't seem to be possible to change a Block's type after it's created, so we'll just make a new block instead.
      const xml = ScratchBlocks.Xml.blockToDom(block);
      // blockToDomWithXY's handling of RTL is strange, so we encode the position ourselves.
      const position = block.getRelativeToSurfaceXY();
      xml.setAttribute("x", position.x);
      xml.setAttribute("y", position.y);
      if (opcodeData.opcode) {
        xml.setAttribute("type", opcodeData.opcode);
      }
      const parentBlock = block.getParent();
      let parentConnection;
      let blockConnectionType;
      if (parentBlock) {
        // If the block has a parent, find the parent -> child connection that will be reattached later.
        const parentConnections = parentBlock.getConnections_();
        parentConnection = parentConnections.find(c => c.targetConnection && c.targetConnection.sourceBlock_ === block);
        // There's two types of connections from child -> parent. We need to figure out which one is used.
        const blockConnections = block.getConnections_();
        const blockToParentConnection = blockConnections.find(c => c.targetConnection && c.targetConnection.sourceBlock_ === parentBlock);
        blockConnectionType = blockToParentConnection.type;
      }

      // Array.from creates a clone of the children list. This is important as we may remove
      // children as we iterate.
      for (const child of Array.from(xml.children)) {
        const oldName = child.getAttribute("name");

        // Any inputs that were supposed to be split that were not should be removed.
        // (eg. shadow inputs)
        if (opcodeData.splitInputs && opcodeData.splitInputs.includes(oldName)) {
          xml.removeChild(child);
          continue;
        }
        const newName = opcodeData.remapInputName && opcodeData.remapInputName[oldName];
        if (newName) {
          child.setAttribute("name", newName);
        }
        const newShadowType = opcodeData.remapShadowType && opcodeData.remapShadowType[oldName];
        if (newShadowType) {
          const valueNode = child.firstChild;
          const fieldNode = valueNode.firstChild;
          valueNode.setAttribute("type", newShadowType);
          fieldNode.setAttribute("name", getShadowFieldName(newShadowType));
        }
        const fieldValueMap = opcodeData.mapFieldValues && opcodeData.mapFieldValues[oldName];
        if (fieldValueMap && child.tagName === "FIELD") {
          const oldValue = child.innerText;
          const newValue = fieldValueMap[oldValue];
          if (typeof newValue === "string") {
            child.innerText = newValue;
          }
        }
      }
      if (opcodeData.mutate) {
        const mutation = xml.querySelector("mutation");
        for (const _ref2 of Object.entries(opcodeData.mutate)) {
          var _ref3 = _slicedToArray(_ref2, 2);
          const key = _ref3[0];
          const value = _ref3[1];
          mutation.setAttribute(key, value);
        }
      }
      if (opcodeData.createInputs) {
        for (const _ref4 of Object.entries(opcodeData.createInputs)) {
          var _ref5 = _slicedToArray(_ref4, 2);
          const inputName = _ref5[0];
          const inputData = _ref5[1];
          const valueElement = document.createElement("value");
          valueElement.setAttribute("name", inputName);
          const shadowElement = document.createElement("shadow");
          shadowElement.setAttribute("type", inputData.shadowType);
          const shadowFieldElement = document.createElement("field");
          shadowFieldElement.setAttribute("name", getShadowFieldName(inputData.shadowType));
          shadowFieldElement.innerText = callIfFunction(inputData.value);
          shadowElement.appendChild(shadowFieldElement);
          valueElement.appendChild(shadowElement);
          xml.appendChild(valueElement);
        }
      }

      // Remove the old block and insert the new one.
      block.dispose();
      const newBlock = pasteBlockXML(workspace, xml);
      if (parentConnection) {
        // Search for the same type of connection on the new block as on the old block.
        const newBlockConnections = newBlock.getConnections_();
        const newBlockConnection = newBlockConnections.find(c => c.type === blockConnectionType);
        newBlockConnection.connect(parentConnection);
      }
      for (const otherBlock of blocksToBringToForeground) {
        // By re-appending the element, we move it to the end, which will make it display
        // on top.
        const svgRoot = otherBlock.getSvgRoot();
        svgRoot.parentNode.appendChild(svgRoot);
      }
    } finally {
      ScratchBlocks.Events.setGroup(false);
    }
  };
  const uniques = array => [...new Set(array)];
  addon.tab.createBlockContextMenu((items, block) => {
    if (!addon.self.disabled) {
      const type = block.type;
      let switches = blockSwitches[block.type] || [];
      const customArgsMode = addon.settings.get("customargs") ? addon.settings.get("customargsmode") : "off";
      if (customArgsMode !== "off" && ["argument_reporter_boolean", "argument_reporter_string_number"].includes(type) &&
      // if the arg is a shadow, it's in a procedures_prototype so we don't want it to be switchable
      !block.isShadow()) {
        const customBlocks = getCustomBlocks();
        if (customArgsMode === "all") {
          switch (type) {
            case "argument_reporter_string_number":
              switches = Object.values(customBlocks).map(cb => cb.stringArgs).flat(1);
              break;
            case "argument_reporter_boolean":
              switches = Object.values(customBlocks).map(cb => cb.boolArgs).flat(1);
              break;
          }
        } else if (customArgsMode === "defOnly") {
          const root = block.getRootBlock();
          if (root.type !== "procedures_definition") return items;
          const customBlockObj = customBlocks[root.getChildren(true)[0].getProcCode()];
          switch (type) {
            case "argument_reporter_string_number":
              switches = customBlockObj.stringArgs;
              break;
            case "argument_reporter_boolean":
              switches = customBlockObj.boolArgs;
              break;
          }
        }
        const currentValue = block.getFieldValue("VALUE");
        switches = uniques(switches).map(i => ({
          isNoop: i === currentValue,
          fieldValue: i,
          msg: i
        }));
      }
      if (block.type === "procedures_call") {
        const proccode = block.getProcCode();
        if (procedureSwitches[proccode]) {
          switches = procedureSwitches[proccode];
        }
      }
      if (!addon.settings.get("noop")) {
        switches = switches.filter(i => !i.isNoop);
      }
      switches.forEach((opcodeData, i) => {
        const makeSpaceItemIndex = items.findIndex(obj => obj._isDevtoolsFirstItem);
        const insertBeforeIndex = makeSpaceItemIndex !== -1 ?
        // If "make space" button exists, add own items before it
        makeSpaceItemIndex :
        // If there's no such button, insert at end
        items.length;
        const text = opcodeData.msg ? opcodeData.msg : opcodeData.opcode ? msg(opcodeData.opcode) : msg(block.type);
        items.splice(insertBeforeIndex, 0, {
          enabled: true,
          text,
          callback: menuCallbackFactory(block, opcodeData),
          separator: i === 0
        });
      });
      if (block.type === "data_variable" || block.type === "data_listcontents") {
        // Add top border to first variable (if it exists)
        const delBlockIndex = items.findIndex(item => item.text === ScratchBlocks.Msg.DELETE_BLOCK);
        // firstVariableItem might be undefined, a variable to switch to,
        // or an item added by editor-devtools (or any addon before this one)
        const firstVariableItem = items[delBlockIndex + 1];
        if (firstVariableItem) firstVariableItem.separator = true;
      }
    }
    return items;
  }, {
    blocks: true
  });

  // https://github.com/scratchfoundation/scratch-blocks/blob/abbfe93136fef57fdfb9a077198b0bc64726f012/blocks_vertical/procedures.js#L207-L215
  // Returns a list like ["%s", "%d"]
  const parseArguments = code => code.split(/(?=[^\\]%[nbs])/g).map(i => i.trim()).filter(i => i.charAt(0) === "%").map(i => i.substring(0, 2));
  const getCustomBlocks = () => {
    const customBlocks = {};
    const target = vm.editingTarget;
    Object.values(target.blocks._blocks).filter(block => block.opcode === "procedures_prototype").forEach(block => {
      const procCode = block.mutation.proccode;
      const argumentNames = JSON.parse(block.mutation.argumentnames);
      // argumentdefaults is unreliable, so we have to parse the procedure code to determine argument types
      const parsedArguments = parseArguments(procCode);
      const stringArgs = [];
      const boolArgs = [];
      for (let i = 0; i < argumentNames.length; i++) {
        if (parsedArguments[i] === "%b") {
          boolArgs.push(argumentNames[i]);
        } else {
          stringArgs.push(argumentNames[i]);
        }
      }
      customBlocks[procCode] = {
        stringArgs,
        boolArgs
      };
    });
    return customBlocks;
  };
});

/***/ }),

/***/ "./src/addons/addons/color-picker/_runtime_entry.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/color-picker/_runtime_entry.js ***!
  \**********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/color-picker/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/color-picker/code-editor.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/color-picker/code-editor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libraries/common/cs/normalize-color.js */ "./src/addons/libraries/common/cs/normalize-color.js");
/* harmony import */ var _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/common/cs/rate-limiter.js */ "./src/addons/libraries/common/cs/rate-limiter.js");


/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let addon = _ref.addon,
    console = _ref.console,
    msg = _ref.msg;
  // 250-ms rate limit
  const rateLimiter = new _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__["default"](250);
  const setColor = (hex, element) => {
    hex = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(hex);
    if (!addon.tab.redux.state || !addon.tab.redux.state.scratchGui) return;
    // The only way to reliably set color is to invoke eye dropper via click()
    // then faking that the eye dropper reported the value.
    const onEyeDropperClosed = _ref2 => {
      let detail = _ref2.detail;
      if (detail.action.type !== "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER") return;
      addon.tab.redux.removeEventListener("statechanged", onEyeDropperClosed);
      setTimeout(() => {
        document.body.classList.remove("sa-hide-eye-dropper-background");
      }, 50);
    };
    const onEyeDropperOpened = _ref3 => {
      let detail = _ref3.detail;
      if (detail.action.type !== "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER") return;
      addon.tab.redux.removeEventListener("statechanged", onEyeDropperOpened);
      addon.tab.redux.addEventListener("statechanged", onEyeDropperClosed);
      setTimeout(() => {
        addon.tab.redux.dispatch({
          type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
          color: hex
        });
      }, 50);
    };
    addon.tab.redux.addEventListener("statechanged", onEyeDropperOpened);
    document.body.classList.add("sa-hide-eye-dropper-background");
    element.click();
  };
  const addColorPicker = editor => {
    const element = document.querySelector("button.scratchEyedropper");
    rateLimiter.abort(false);
    addon.tab.redux.initialize();
    const defaultColor = editor.getValue();
    const saColorPicker = Object.assign(document.createElement("div"), {
      className: "sa-color-picker sa-color-picker-code"
    });
    addon.tab.displayNoneWhileDisabled(saColorPicker, {
      display: "flex"
    });
    const saColorPickerColor = Object.assign(document.createElement("input"), {
      className: "sa-color-picker-color sa-color-picker-code-color",
      type: "color",
      value: defaultColor || "#000000"
    });
    const saColorPickerText = Object.assign(document.createElement("input"), {
      className: addon.tab.scratchClass("input_input-form", {
        others: "sa-color-picker-text sa-color-picker-code-text"
      }),
      type: "text",
      pattern: "^#?([0-9a-fA-F]{3}){1,2}$",
      placeholder: msg("hex"),
      value: defaultColor || ""
    });
    saColorPickerColor.addEventListener("input", () => rateLimiter.limit(() => setColor(saColorPickerText.value = saColorPickerColor.value, element)));
    saColorPickerText.addEventListener("change", () => {
      const value = saColorPickerText.value;
      if (!Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["getHexRegex"])().test(value)) return;
      setColor(saColorPickerColor.value = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(value), element);
    });
    saColorPicker.appendChild(saColorPickerColor);
    saColorPicker.appendChild(saColorPickerText);
    element.parentElement.insertBefore(saColorPicker, element);
  };
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const originalShowEditor = ScratchBlocks.FieldColourSlider.prototype.showEditor_;
  ScratchBlocks.FieldColourSlider.prototype.showEditor_ = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const r = originalShowEditor.call(this, ...args);
    addColorPicker(this);
    return r;
  };
  const originalCallbackFactory = ScratchBlocks.FieldColourSlider.prototype.sliderCallbackFactory_;
  ScratchBlocks.FieldColourSlider.prototype.sliderCallbackFactory_ = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    const f = originalCallbackFactory.call(this, ...args);
    return event => {
      const r = f(event);
      const div = ScratchBlocks.DropDownDiv.getContentDiv();
      if (div) {
        const saColorPickerColor = div.querySelector(".sa-color-picker-color.sa-color-picker-code-color");
        const saColorPickerText = div.querySelector(".sa-color-picker-text.sa-color-picker-code-text");
        if (!saColorPickerColor || !saColorPickerText) return r;
        const color = this.getValue();
        saColorPickerColor.value = color || "#000000";
        saColorPickerText.value = color || "";
      }
      return r;
    };
  };
});

/***/ }),

/***/ "./src/addons/addons/color-picker/userscript.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/color-picker/userscript.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-editor.js */ "./src/addons/addons/color-picker/code-editor.js");

/* harmony default export */ __webpack_exports__["default"] = (async api => {
  Object(_code_editor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(api);
});

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/_runtime_entry.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/_runtime_entry.js ***!
  \*********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-comment-previews/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/userscript.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/userscript.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console;
  const vm = addon.tab.traps.vm;
  const updateStyles = () => {
    previewInner.classList.toggle("sa-comment-preview-delay", addon.settings.get("delay") !== "none");
    previewInner.classList.toggle("sa-comment-preview-reduce-transparency", addon.settings.get("reduce-transparency"));
    previewInner.classList.toggle("sa-comment-preview-fade", !addon.settings.get("reduce-animation"));
  };
  const afterDelay = cb => {
    if (!previewInner.classList.contains("sa-comment-preview-hidden")) {
      // If not hidden, updating immediately is preferred
      cb();
      return;
    }
    const delay = addon.settings.get("delay");
    if (delay === "long") return setTimeout(cb, 500);
    if (delay === "short") return setTimeout(cb, 300);
    cb();
  };
  let hoveredElement = null;
  let showTimeout = null;
  let mouseX = 0;
  let mouseY = 0;
  let doNotShowUntilMoveMouse = false;
  const previewOuter = document.createElement("div");
  previewOuter.classList.add("sa-comment-preview-outer");
  const previewInner = document.createElement("div");
  previewInner.classList.add("sa-comment-preview-inner");
  previewInner.classList.add("sa-comment-preview-hidden");
  updateStyles();
  addon.settings.addEventListener("change", updateStyles);
  addon.tab.displayNoneWhileDisabled(previewOuter);
  previewOuter.appendChild(previewInner);
  document.body.appendChild(previewOuter);
  const getBlock = id => vm.editingTarget.blocks.getBlock(id) || vm.runtime.flyoutBlocks.getBlock(id);
  const getComment = block => block && block.comment && vm.editingTarget.comments[block.comment];
  const getProcedureDefinitionBlock = procCode => {
    const procedurePrototype = Object.values(vm.editingTarget.blocks._blocks).find(i => i.opcode === "procedures_prototype" && i.mutation.proccode === procCode);
    if (procedurePrototype) {
      // Usually `parent` will exist but sometimes it doesn't
      if (procedurePrototype.parent) {
        return getBlock(procedurePrototype.parent);
      }
      const id = procedurePrototype.id;
      return Object.values(vm.editingTarget.blocks._blocks).find(i => i.opcode === "procedures_definition" && i.inputs.custom_block && i.inputs.custom_block.block === id);
    }
    return null;
  };
  const setText = text => {
    previewInner.innerText = text;
    previewInner.classList.remove("sa-comment-preview-hidden");
    updateMousePosition();
  };
  const updateMousePosition = () => {
    previewOuter.style.transform = "translate(".concat(mouseX + 8, "px, ").concat(mouseY + 8, "px)");
  };
  const hidePreview = () => {
    if (hoveredElement) {
      hoveredElement = null;
      previewInner.classList.add("sa-comment-preview-hidden");
    }
  };
  document.addEventListener("mouseover", e => {
    if (addon.self.disabled) {
      return;
    }
    clearTimeout(showTimeout);
    if (doNotShowUntilMoveMouse) {
      return;
    }
    const el = e.target.closest(".blocklyBubbleCanvas > g, .blocklyBlockCanvas .blocklyDraggable[data-id]");
    if (el === hoveredElement) {
      // Nothing to do.
      return;
    }
    if (!el) {
      hidePreview();
      return;
    }
    let text = null;
    if (addon.settings.get("hover-view") && e.target.closest(".blocklyBubbleCanvas > g") &&
    // Hovering over the thin line that connects comments to blocks should never show a preview
    !e.target.closest("line")) {
      const collapsedText = el.querySelector("text.scratchCommentText");
      if (collapsedText.getAttribute("display") !== "none") {
        const textarea = el.querySelector("textarea");
        text = textarea.value;
      }
    } else if (e.target.closest(".blocklyBlockCanvas .blocklyDraggable[data-id]")) {
      const id = el.dataset.id;
      const block = getBlock(id);
      const comment = getComment(block);
      if (addon.settings.get("hover-view-block") && comment) {
        text = comment.text;
      } else if (block && block.opcode === "procedures_call" && addon.settings.get("hover-view-procedure")) {
        const procCode = block.mutation.proccode;
        const procedureDefinitionBlock = getProcedureDefinitionBlock(procCode);
        const procedureComment = getComment(procedureDefinitionBlock);
        if (procedureComment) {
          text = procedureComment.text;
        }
      }
    }
    if (text !== null && text.trim() !== "") {
      showTimeout = afterDelay(() => {
        hoveredElement = el;
        setText(text);
      });
    } else {
      hidePreview();
    }
  });
  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    doNotShowUntilMoveMouse = false;
    if (addon.settings.get("follow-mouse") && !previewInner.classList.contains("sa-comment-preview-hidden")) {
      updateMousePosition();
    }
  });
  document.addEventListener("mousedown", () => {
    hidePreview();
    doNotShowUntilMoveMouse = true;
  }, {
    capture: true
  });
});

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DevTools.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DevTools.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DevTools; });
/* harmony import */ var _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomHelpers.js */ "./src/addons/addons/editor-devtools/DomHelpers.js");
/* harmony import */ var _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UndoGroup.js */ "./src/addons/addons/editor-devtools/UndoGroup.js");
// import ShowBroadcast from "./show-broadcast.js";


class DevTools {
  constructor(addon, msg, m) {
    this.addon = addon;
    this.msg = msg;
    this.m = m;
    /**
    * @type {VirtualMachine}
    */
    this.domHelpers = new _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon);
    this.codeTab = null;
    this.costTab = null;
    this.costTabBody = null;
    this.selVarID = null;
    this.canShare = false;
    this.mouseXY = {
      x: 0,
      y: 0
    };
  }
  async init() {
    this.addContextMenus();
    while (true) {
      const root = await this.addon.tab.waitForElement('ul[class*=gui_tab-list_]', {
        markAsSeen: true,
        reduxEvents: ['scratch-gui/mode/SET_PLAYER', 'fontsLoaded/SET_FONTS_LOADED', 'scratch-gui/locales/SELECT_LOCALE'],
        reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
      });
      this.initInner(root);
    }
  }
  async addContextMenus() {
    const blockly = await this.addon.tab.traps.getBlockly();
    const oldCleanUpFunc = blockly.WorkspaceSvg.prototype.cleanUp;
    const self = this;
    blockly.WorkspaceSvg.prototype.cleanUp = function () {
      if (self.addon.settings.get('enableCleanUpPlus')) {
        self.doCleanUp();
      } else {
        oldCleanUpFunc.call(this);
      }
    };
    const originalMsg = blockly.Msg.CLEAN_UP;
    if (this.addon.settings.get('enableCleanUpPlus')) blockly.Msg.CLEAN_UP = this.m('clean-plus');
    this.addon.settings.addEventListener('change', () => {
      if (this.addon.settings.get('enableCleanUpPlus')) blockly.Msg.CLEAN_UP = this.m('clean-plus');else blockly.Msg.CLEAN_UP = originalMsg;
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      items.push({
        enabled: blockly.clipboardXml_,
        text: this.m('paste'),
        separator: true,
        _isDevtoolsFirstItem: true,
        callback: () => {
          const ids = this.getTopBlockIDs();
          document.dispatchEvent(new KeyboardEvent('keydown', {
            keyCode: 86,
            ctrlKey: true,
            griff: true
          }));
          setTimeout(() => {
            this.beginDragOfNewBlocksNotInIDs(ids);
          }, 10);
        }
      });

      // Add "Clean up detached scripts" option after "Clean up blocks"
      const detachedBlocks = this.getDetachedBlocks();
      if (detachedBlocks.length > 0) {
        // Find the index of the "Clean up" option
        const cleanUpIndex = items.findIndex(item => item.text && (item.text === blockly.Msg.CLEAN_UP || item.text.includes('Clean up')));
        const cleanUpDetachedOption = {
          enabled: true,
          text: this.m('clean-up-detached'),
          callback: () => {
            this.cleanUpDetachedScripts();
          }
        };
        if (cleanUpIndex !== -1) {
          // Insert right after the "Clean up blocks" option
          items.splice(cleanUpIndex + 1, 0, cleanUpDetachedOption);
        } else {
          // Fallback: add at the end if "Clean up" option not found
          items.push(cleanUpDetachedOption);
        }
      }
      return items;
    }, {
      workspace: true
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      items.push({
        enabled: true,
        text: this.m('make-space'),
        _isDevtoolsFirstItem: true,
        callback: () => {
          this.doCleanUp(block);
        },
        separator: true
      }, {
        enabled: true,
        text: this.m('copy-all'),
        callback: () => {
          this.eventCopyClick(block);
        },
        separator: true
      }, {
        enabled: true,
        text: this.m('copy-block'),
        callback: () => {
          this.eventCopyClick(block, 1);
        }
      }, {
        enabled: true,
        text: this.m('cut-block'),
        callback: () => {
          this.eventCopyClick(block, 2);
        }
      });
      // const BROADCAST_BLOCKS = ["event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait"];
      // if (BROADCAST_BLOCKS.includes(block.type)) {
      //   // Show Broadcast
      //   const broadcastId = this.showBroadcastSingleton.getAssociatedBroadcastId(block.id);
      //   if (broadcastId) {
      //     ["Senders", "Receivers"].forEach((showKey, i) => {
      //       items.push({
      //         enabled: true,
      //         text: this.msg(`show-${showKey}`.toLowerCase()),
      //         callback: () => {
      //           this.showBroadcastSingleton[`show${showKey}`](broadcastId);
      //         },
      //         separator: i == 0,
      //       });
      //     });
      //   }
      // }
      return items;
    }, {
      blocks: true
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      if (block.getCategory() === 'data' || block.getCategory() === 'data-lists') {
        this.selVarID = block.getVars()[0];
        items.push({
          enabled: true,
          text: this.m('swap', {
            var: block.getCategory() === 'data' ? this.m('variables') : this.m('lists')
          }),
          callback: async () => {
            const wksp = this.getWorkspace();
            const v = wksp.getVariableById(this.selVarID);
            // prompt() returns Promise in desktop app
            const varName = await window.prompt(this.msg('replace', {
              name: v.name
            }));
            if (varName) {
              this.doReplaceVariable(this.selVarID, varName, v.type);
            }
          },
          separator: true
        });
      }
      return items;
    }, {
      blocks: true,
      flyout: true
    });
  }
  getWorkspace() {
    return Blockly.getMainWorkspace();
  }
  isCostumeEditor() {
    return this.costTab.className.indexOf('gui_is-selected') >= 0;
  }

  /**
  * A nicely ordered version of the top blocks
  * @returns {[Blockly.Block]}
  */
  getTopBlocks() {
    const result = this.getOrderedTopBlockColumns();
    const columns = result.cols;
    /**
    * @type {[[Blockly.Block]]}
    */
    let topBlocks = [];
    for (const col of columns) {
      topBlocks = topBlocks.concat(col.blocks);
    }
    return topBlocks;
  }

  /**
  * A much nicer way of laying out the blocks into columns
  */
  doCleanUp(block) {
    const workspace = this.getWorkspace();
    const makeSpaceForBlock = block && block.getRootBlock();
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(workspace);
    const result = this.getOrderedTopBlockColumns(true);
    const columns = result.cols;
    const orphanCount = result.orphans.blocks.length;
    if (orphanCount > 0 && !block) {
      const message = this.msg('orphaned', {
        count: orphanCount
      });
      if (confirm(message)) {
        for (const block of result.orphans.blocks) {
          block.dispose();
        }
      } else {
        columns.unshift(result.orphans);
      }
    }
    let cursorX = 48;
    const maxWidths = result.maxWidths;
    for (const column of columns) {
      let cursorY = 64;
      let maxWidth = 0;
      for (const block of column.blocks) {
        const extraWidth = block === makeSpaceForBlock ? 380 : 0;
        const extraHeight = block === makeSpaceForBlock ? 480 : 72;
        const xy = block.getRelativeToSurfaceXY();
        if (cursorX - xy.x !== 0 || cursorY - xy.y !== 0) {
          block.moveBy(cursorX - xy.x, cursorY - xy.y);
        }
        const heightWidth = block.getHeightWidth();
        cursorY += heightWidth.height + extraHeight;
        const maxWidthWithComments = maxWidths[block.id] || 0;
        maxWidth = Math.max(maxWidth, Math.max(heightWidth.width + extraWidth, maxWidthWithComments));
      }
      cursorX += maxWidth + 96;
    }
    const topComments = workspace.getTopComments();
    for (const comment of topComments) {
      if (comment.setVisible) {
        comment.setVisible(false);
        comment.needsAutoPositioning_ = true;
        comment.setVisible(true);
      }
    }
    setTimeout(() => {
      // Locate unused local variables...
      const workspace = this.getWorkspace();
      const map = workspace.getVariableMap();
      const vars = map.getVariablesOfType('');
      const unusedLocals = [];
      for (const row of vars) {
        if (row.isLocal) {
          const usages = map.getVariableUsesById(row.getId());
          if (!usages || usages.length === 0) {
            unusedLocals.push(row);
          }
        }
      }
      if (unusedLocals.length > 0) {
        const unusedCount = unusedLocals.length;
        let message = this.msg('unused-var', {
          count: unusedCount
        });
        for (let i = 0; i < unusedLocals.length; i++) {
          const orphan = unusedLocals[i];
          if (i > 0) {
            message += ', ';
          }
          message += orphan.name;
        }
        if (confirm(message)) {
          for (const orphan of unusedLocals) {
            workspace.deleteVariableById(orphan.getId());
          }
        }
      }

      // Locate unused local lists...
      const lists = map.getVariablesOfType('list');
      const unusedLists = [];
      for (const row of lists) {
        if (row.isLocal) {
          const usages = map.getVariableUsesById(row.getId());
          if (!usages || usages.length === 0) {
            unusedLists.push(row);
          }
        }
      }
      if (unusedLists.length > 0) {
        const unusedCount = unusedLists.length;
        let message = this.msg('unused-list', {
          count: unusedCount
        });
        for (let i = 0; i < unusedLists.length; i++) {
          const orphan = unusedLists[i];
          if (i > 0) {
            message += ', ';
          }
          message += orphan.name;
        }
        if (confirm(message)) {
          for (const orphan of unusedLists) {
            workspace.deleteVariableById(orphan.getId());
          }
        }
      }
      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(workspace);
    }, 100);
  }

  /**
  * Badly Orphaned - might want to delete these!
  * @param topBlock
  * @returns {boolean}
  */
  isBlockAnOrphan(topBlock) {
    return !!topBlock.outputConnection;
  }

  /**
   * Get all detached blocks (blocks without hat blocks)
   * @returns {Array} Array of detached blocks
   */
  getDetachedBlocks() {
    const workspace = this.getWorkspace();
    const topBlocks = workspace.getTopBlocks();
    return topBlocks.filter(block => !block.startHat_);
  }

  /**
   * Clean up detached scripts after user confirmation
   */
  cleanUpDetachedScripts() {
    const detachedBlocks = this.getDetachedBlocks();
    if (detachedBlocks.length === 0) return;
    const message = this.msg('detached-scripts', {
      count: detachedBlocks.length
    });
    if (confirm(message)) {
      const workspace = this.getWorkspace();
      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(workspace);
      for (const block of detachedBlocks) {
        block.dispose();
      }
      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(workspace);
    }
  }

  /**
  * Split the top blocks into ordered columns
  * @param separateOrphans true to keep all orphans separate
  * @returns {{orphans: {blocks: [Block], x: number, count: number}, cols: [Col]}}
  */
  getOrderedTopBlockColumns(separateOrphans) {
    const w = this.getWorkspace();
    // Tidying only the rendered scripts would stack them onto the rest.
    if (w.materializeAllScripts) w.materializeAllScripts();
    const topBlocks = w.getTopBlocks();
    const maxWidths = {};
    if (separateOrphans) {
      const topComments = w.getTopComments();

      // todo: tie comments to blocks... find widths and width of block stack row...
      for (const comment of topComments) {
        // comment.autoPosition_();
        // Hiding and showing repositions the comment right next to it's block - nice!
        if (comment.setVisible) {
          comment.setVisible(false);
          comment.needsAutoPositioning_ = true;
          comment.setVisible(true);

          // let bb = comment.block_.svgPath_.getBBox();
          const right = comment.getBoundingRectangle().bottomRight.x;

          // Get top block for stack...
          const root = comment.block_.getRootBlock();
          const left = root.getBoundingRectangle().topLeft.x;
          maxWidths[root.id] = Math.max(right - left, maxWidths[root.id] || 0);
        }
      }
    }

    // Default scratch ordering is horrid... Lets try something more clever.

    /**
    * @type {Col[]}
    */
    const cols = [];
    const TOLERANCE = 256;
    const orphans = {
      x: -999999,
      count: 0,
      blocks: []
    };
    for (const topBlock of topBlocks) {
      // let r = b.getBoundingRectangle();
      const position = topBlock.getRelativeToSurfaceXY();
      /**
      * @type {Col}
      */
      let bestCol = null;
      let bestError = TOLERANCE;
      if (separateOrphans && this.isBlockAnOrphan(topBlock)) {
        orphans.blocks.push(topBlock);
        continue;
      }

      // Find best columns
      for (const col of cols) {
        const err = Math.abs(position.x - col.x);
        if (err < bestError) {
          bestError = err;
          bestCol = col;
        }
      }
      if (bestCol) {
        // We found a column that we fitted into
        bestCol.x = (bestCol.x * bestCol.count + position.x) / ++bestCol.count; // re-average the columns as more items get added...
        bestCol.blocks.push(topBlock);
      } else {
        // Create a new column
        cols.push(new Col(position.x, 1, [topBlock]));
      }
    }

    // if (orphans.blocks.length > 0) {
    //     cols.push(orphans);
    // }

    // Sort columns, then blocks inside the columns
    cols.sort((a, b) => a.x - b.x);
    for (const col of cols) {
      col.blocks.sort((a, b) => a.getRelativeToSurfaceXY().y - b.getRelativeToSurfaceXY().y);
    }
    return {
      cols: cols,
      orphans: orphans,
      maxWidths: maxWidths
    };
  }

  /**
  * Find all the uses of a named variable.
  * @param {string} id ID of the variable to find.
  * @return {!Array.<!Blockly.Block>} Array of block usages.
  */
  getVariableUsesById(id) {
    const uses = [];

    // A use in a script that is not rendered is still a use.
    const workspace = this.getWorkspace();
    if (workspace && workspace.materializeAllScripts) workspace.materializeAllScripts();
    const topBlocks = this.getTopBlocks(true); // todo: Confirm this was the right getTopBlocks?
    for (const topBlock of topBlocks) {
      /** @type {!Array<!Blockly.Block>} */
      const kids = topBlock.getDescendants();
      for (const block of kids) {
        /** @type {!Array<!Blockly.VariableModel>} */
        const blockVariables = block.getVarModels();
        if (blockVariables) {
          for (const blockVar of blockVariables) {
            if (blockVar.getId() === id) {
              uses.push(block);
            }
          }
        }
      }
    }
    return uses;
  }

  /**
  * Quick and dirty replace all instances of one variable / list with another variable / list
  * @param varId original variable name
  * @param newVarName new variable name
  * @param type type of variable ("" = variable, anything else is a list?
  */
  doReplaceVariable(varId, newVarName, type) {
    const wksp = this.getWorkspace();
    const v = wksp.getVariable(newVarName, type);
    if (!v) {
      alert(this.msg('var-not-exist'));
      return;
    }
    const newVId = v.getId();
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
    const blocks = this.getVariableUsesById(varId);
    for (const block of blocks) {
      try {
        if (type === '') {
          block.getField('VARIABLE').setValue(newVId);
        } else {
          block.getField('LIST').setValue(newVId);
        }
      } catch (e) {
        // ignore
      }
    }
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
  }

  /*
  function doInjectScripts(codeString) {
    let w = getWorkspace();
    let xml = new XML(); // document.implementation.createDocument(null, "xml");
    let x = xml.xmlDoc.firstChild;
     let tree = math.parse(codeString);
    console.log(tree);
     const binaryOperatorTypes = {
      add: "operator_add",
      subtract: "operator_subtract",
      this.multiply: "operator_multiply",
      divide: "operator_divide",
    };
     const BLOCK_TYPE = {
      number: "math_number",
      text: "text",
    };
     function translateMathToXml(x, tree, shadowType) {
      let xShadowField = null;
      if (shadowType) {
        let xShadow = xml.newXml(x, "shadow", { type: shadowType });
        if (shadowType === BLOCK_TYPE.number) {
          xShadowField = xml.newXml(xShadow, "field", { name: "NUM" });
        } else if (shadowType === BLOCK_TYPE.text) {
          xShadowField = xml.newXml(xShadow, "field", { name: "TEXT" });
        }
      }
       if (!tree || !tree.type) {
        return;
      }
       if (tree.type === "OperatorNode") {
        let operatorType = binaryOperatorTypes[tree.fn];
        if (operatorType) {
          let xOp = newXml(x, "block", { type: operatorType });
          translateMathToXml(xml.newXml(xOp, "value", { name: "NUM1" }), tree.args[0], BLOCK_TYPE.number);
          translateMathToXml(xml.newXml(xOp, "value", { name: "NUM2" }), tree.args[1], BLOCK_TYPE.number);
          return;
        }
         return;
      }
       if (tree.type === "ConstantNode") {
        // number or text in quotes
        if (xShadowField) {
          xml.setAttr(xShadowField, { text: tree.value });
        }
        return;
      }
       if (tree.type === "SymbolNode") {
        // variable
        let xVar = xml.newXml(x, "block", { type: "data_variable" });
        xml.newXml(xVar, "field", { name: "VARIABLE", text: tree.name });
        return;
      }
       if (tree.type === "FunctionNode") {
        // Method Call
        if (tree.fn.name === "join") {
          let xOp = newXml(x, "block", { type: "operator_join" });
          translateMathToXml(xml.newXml(xOp, "value", { name: "STRING1" }), tree.args[0], BLOCK_TYPE.text);
          translateMathToXml(xml.newXml(xOp, "value", { name: "STRING2" }), tree.args[1], BLOCK_TYPE.text);
          return;
        }
      }
    }
     translateMathToXml(x, tree);
    console.log(x);
     let ids = Blockly.Xml.domToWorkspace(x, w);
    console.log(ids);
  }
   */
  /*
  function clickInject(e) {
    let codeString = window.prompt("Griffpatch: Enter an expression (i.e. a+2*3)");
    if (codeString) {
      doInjectScripts(codeString);
    }
    e.preventDefault();
    return false;
  }
  */

  /**
  * Returns a Set of the top blocks in this workspace / sprite
  * @returns {Set<any>} Set of top blocks
  */
  getTopBlockIDs() {
    const wksp = this.getWorkspace();
    const topBlocks = wksp.getTopBlocks();
    const ids = new Set();
    for (const block of topBlocks) {
      ids.add(block.id);
    }
    return ids;
  }

  /**
  * Initiates a drag event for all block stacks except those in the set of ids.
  * But why? - Because we know all the ids of the existing stacks before we paste / duplicate - so we can find the
  * new stack by excluding all the known ones.
  * @param ids Set of previously known ids
  */
  beginDragOfNewBlocksNotInIDs(ids) {
    if (!this.addon.settings.get('enablePasteBlocksAtMouse')) {
      return;
    }
    const wksp = this.getWorkspace();
    const topBlocks = wksp.getTopBlocks();
    for (const block of topBlocks) {
      if (!ids.has(block.id)) {
        // console.log("I found a new block!!! - " + block.id);
        // todo: move the block to the mouse pointer?
        const mouseXYClone = {
          x: this.mouseXY.x,
          y: this.mouseXY.y
        };
        block.setIntersects(true); // fixes offscreen block pasting in TurboWarp
        this.domHelpers.triggerDragAndDrop(block.svgPath_, null, mouseXYClone);
      }
    }
  }
  updateMousePosition(e) {
    this.mouseXY.x = e.clientX;
    this.mouseXY.y = e.clientY;
  }
  eventMouseMove(e) {
    this.updateMousePosition(e);
  }
  eventKeyDown(e) {
    const switchCostume = up => {
      // todo: select previous costume
      const selected = this.costTabBody.querySelector("div[class*='sprite-selector-item_is-selected']");
      const node = up ? selected.parentNode.previousSibling : selected.parentNode.nextSibling;
      if (node) {
        const wrapper = node.closest('div[class*=gui_flex-wrapper]');
        node.querySelector("div[class^='sprite-selector-item_sprite-name']").click();
        node.scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'start'
        });
        wrapper.scrollTop = 0;
      }
    };
    if (document.URL.indexOf('editor') <= 0) {
      return;
    }
    const ctrlKey = e.ctrlKey || e.metaKey;
    if (e.key === 'ArrowLeft' && ctrlKey) {
      // Ctrl + Left Arrow Key
      if (document.activeElement.tagName === 'INPUT') {
        return;
      }
      if (this.isCostumeEditor()) {
        switchCostume(true);
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
    }
    if (e.key === 'ArrowRight' && ctrlKey) {
      // Ctrl + Right Arrow Key
      if (document.activeElement.tagName === 'INPUT') {
        return;
      }
      if (this.isCostumeEditor()) {
        switchCostume(false);
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
    }
    if (e.keyCode === 86 && ctrlKey && !e.griff) {
      // Ctrl + V
      // Set a timeout so we can take control of the paste after the event
      const ids = this.getTopBlockIDs();
      setTimeout(() => {
        this.beginDragOfNewBlocksNotInIDs(ids);
      }, 10);
    }

    // if (e.keyCode === 220 && (!document.activeElement || document.activeElement.tagName === 'INPUT')) {
    //
    // }
  }
  eventCopyClick(block, blockOnly) {
    const wksp = this.getWorkspace();
    if (block) {
      block.select();
      const next = blockOnly ? block.getNextBlock() : null;
      if (next) {
        next.unplug(false); // setParent(null);
      }

      // separate child temporarily
      document.dispatchEvent(new KeyboardEvent('keydown', {
        keyCode: 67,
        ctrlKey: true
      }));
      if (next || blockOnly === 2) {
        setTimeout(() => {
          if (next) {
            wksp.undo(); // undo the unplug above...
          }
          if (blockOnly === 2) {
            _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
            block.dispose(true);
            _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
          }
        }, 0);
      }
    }
  }
  eventMouseDown(e) {
    this.updateMousePosition(e);
  }
  eventMouseUp(e) {
    this.updateMousePosition(e);
  }
  initInner(root) {
    var _this = this;
    const guiTabs = root.childNodes;
    if (this.codeTab && guiTabs[0] !== this.codeTab) {
      // We have been CHANGED!!! - Happens when going to project page, and then back inside again!!!
      this.domHelpers.unbindAllEvents();
    }
    this.codeTab = guiTabs[0];
    this.costTab = guiTabs[1];
    this.costTabBody = document.querySelector("div[aria-labelledby=".concat(this.costTab.id, "]"));
    this.domHelpers.bindOnce(document, 'keydown', function () {
      return _this.eventKeyDown(...arguments);
    }, true);
    this.domHelpers.bindOnce(document, 'mousemove', function () {
      return _this.eventMouseMove(...arguments);
    }, true);
    this.domHelpers.bindOnce(document, 'mousedown', function () {
      return _this.eventMouseDown(...arguments);
    }, true); // true to capture all mouse downs 'before' the dom events handle them
    this.domHelpers.bindOnce(document, 'mouseup', function () {
      return _this.eventMouseUp(...arguments);
    }, true);
  }
}
class Col {
  /**
  * @param x {Number} x position (for ordering)
  * @param count {Number}
  * @param blocks {[Block]}
  */
  constructor(x, count, blocks) {
    /**
     * x position (for ordering)
     * @type {Number}
     */
    this.x = x;
    /**
    * @type {Number}
    */
    this.count = count;
    /**
    * @type {[Blockly.Block]}
    */
    this.blocks = blocks;
  }
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DomHelpers.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DomHelpers.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomHelpers; });
class DomHelpers {
  constructor(addon) {
    this.addon = addon;
    this.vm = addon.tab.traps.vm;
    /**
     * @type {eventDetails[]}
     */
    this.events = [];
  }

  /**
   * Simulate a drag and drop programmatically through javascript
   * @param selectorDrag
   * @param selectorDrop
   * @param mouseXY
   * @param [shiftKey=false]
   * @returns {boolean}
   */
  triggerDragAndDrop(selectorDrag, selectorDrop, mouseXY, shiftKey) {
    // function for triggering mouse events
    shiftKey = shiftKey || false;
    let fireMouseEvent = function fireMouseEvent(type, elem, centerX, centerY) {
      let evt = document.createEvent("MouseEvents");
      evt.initMouseEvent(type, true, true, window, 1, 1, 1, centerX, centerY, shiftKey, false, false, false, 0, elem);
      elem.dispatchEvent(evt);
    };

    // fetch target elements
    let elemDrag = selectorDrag; // document.querySelector(selectorDrag);
    let elemDrop = selectorDrop; // document.querySelector(selectorDrop);
    if (!elemDrag /* || !elemDrop*/) {
      return false;
    }

    // calculate positions
    let pos = elemDrag.getBoundingClientRect();
    let center1X = Math.floor((pos.left + pos.right) / 2);
    let center1Y = Math.floor((pos.top + pos.bottom) / 2);

    // mouse over dragged element and mousedown
    fireMouseEvent("mouseover", elemDrag, center1X, center1Y);
    fireMouseEvent("mousedown", elemDrag, center1X, center1Y);

    // start dragging process over to drop target
    fireMouseEvent("dragstart", elemDrag, center1X, center1Y);
    fireMouseEvent("drag", elemDrag, center1X, center1Y);
    fireMouseEvent("mousemove", elemDrag, center1X, center1Y);
    if (!elemDrop) {
      if (mouseXY) {
        // console.log(mouseXY);
        let center2X = mouseXY.x;
        let center2Y = mouseXY.y;
        fireMouseEvent("drag", elemDrag, center2X, center2Y);
        fireMouseEvent("mousemove", elemDrag, center2X, center2Y);
      }
      return false;
    }
    pos = elemDrop.getBoundingClientRect();
    let center2X = Math.floor((pos.left + pos.right) / 2);
    let center2Y = Math.floor((pos.top + pos.bottom) / 2);
    fireMouseEvent("drag", elemDrag, center2X, center2Y);
    fireMouseEvent("mousemove", elemDrop, center2X, center2Y);

    // trigger dragging process on top of drop target
    fireMouseEvent("mouseenter", elemDrop, center2X, center2Y);
    fireMouseEvent("dragenter", elemDrop, center2X, center2Y);
    fireMouseEvent("mouseover", elemDrop, center2X, center2Y);
    fireMouseEvent("dragover", elemDrop, center2X, center2Y);

    // release dragged element on top of drop target
    fireMouseEvent("drop", elemDrop, center2X, center2Y);
    fireMouseEvent("dragend", elemDrag, center2X, center2Y);
    fireMouseEvent("mouseup", elemDrag, center2X, center2Y);
    return true;
  }
  bindOnce(dom, event, func, capture) {
    capture = !!capture;
    dom.removeEventListener(event, func, capture);
    dom.addEventListener(event, func, capture);
    this.events.push(new eventDetails(dom, event, func, capture));
  }
  unbindAllEvents() {
    for (const event of this.events) {
      event.dom.removeEventListener(event.event, event.func, event.capture);
    }
    this.events = [];
  }
}

/**
 * A record of an event
 */
class eventDetails {
  constructor(dom, event, func, capture) {
    this.dom = dom;
    this.event = event;
    this.func = func;
    this.capture = capture;
  }
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/UndoGroup.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/UndoGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoGroup; });
/**
 * This class is dedicated to maintaining the Undo stack of Blockly
 * It allows us to initiate an undo group such that all subsequent operations are recorded as a single
 * undoable transaction.
 */
class UndoGroup {
  /**
   * Start an Undo group - begin recording
   * @param workspace the workspace
   */
  static startUndoGroup(workspace) {
    const undoStack = workspace.undoStack_;
    if (undoStack.length) {
      undoStack[undoStack.length - 1]._devtoolsLastUndo = true;
    }
  }

  /**
   * End an Undo group - stops recording
   * @param workspace the workspace
   */
  static endUndoGroup(workspace) {
    const undoStack = workspace.undoStack_;
    // Events (responsible for undoStack updates) are delayed with a setTimeout(f, 0)
    // https://github.com/scratchfoundation/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
    setTimeout(() => {
      const group = generateUID();
      for (let i = undoStack.length - 1; i >= 0 && !undoStack[i]._devtoolsLastUndo; i--) {
        undoStack[i].group = group;
      }
    }, 0);
  }
}

/**
 * https://github.com/scratchfoundation/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
 * @returns {string}
 * @private
 */
function generateUID() {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+,-./:;=?@[]^_`{|}~";
  let result = "";
  for (let i = 0; i < 20; i++) {
    result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }
  return result;
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/editor-devtools/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-devtools/userscript.js");
/* harmony import */ var _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./icon--close.svg */ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg");
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "icon--close.svg": _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-devtools/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevTools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevTools.js */ "./src/addons/addons/editor-devtools/DevTools.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console,
    msg = _ref.msg,
    m = _ref.safeMsg;
  const devTools = new _DevTools_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon, msg, m);
  devTools.init();
});

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js":
/*!*************************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js ***!
  \*************************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-searchable-dropdowns/userscript.js");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userscript.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userscript.css": _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/userscript.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/userscript.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console,
    msg = _ref.msg;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const SCRATCH_ITEMS_TO_HIDE = ["RENAME_VARIABLE_ID", "DELETE_VARIABLE_ID", "NEW_BROADCAST_MESSAGE_ID",
  // From rename-broadcasts addon
  "RENAME_BROADCAST_MESSAGE_ID"];
  const canUseAsGlobalVariableName = (name, type) => {
    return !vm.runtime.getAllVarNamesOfType(type).includes(name);
  };
  const canUseAsLocalVariableName = (name, type) => {
    return !vm.editingTarget.lookupVariableByNameAndType(name, type);
  };
  const ADDON_ITEMS = {
    createGlobalVariable: {
      enabled: name => canUseAsGlobalVariableName(name, ""),
      createVariable: (workspace, name) => workspace.createVariable(name)
    },
    createLocalVariable: {
      enabled: name => canUseAsLocalVariableName(name, ""),
      createVariable: (workspace, name) => workspace.createVariable(name, "", null, true)
    },
    createGlobalList: {
      enabled: name => canUseAsGlobalVariableName(name, "list"),
      createVariable: (workspace, name) => workspace.createVariable(name, "list")
    },
    createLocalList: {
      enabled: name => canUseAsLocalVariableName(name, "list"),
      createVariable: (workspace, name) => workspace.createVariable(name, "list", null, true)
    },
    createBroadcast: {
      enabled: name => canUseAsGlobalVariableName(name, "broadcast_msg"),
      createVariable: (workspace, name) => workspace.createVariable(name, "broadcast_msg")
    }
  };
  let blocklyDropDownContent = null;
  let blocklyDropdownMenu = null;
  let searchBar = null;
  // Contains DOM and addon state
  let items = [];
  let searchedItems = [];
  // Tracks internal Scratch state
  let currentDropdownOptions = [];
  let resultOfLastGetOptions = [];
  const oldDropDownDivShow = Blockly.DropDownDiv.show;
  Blockly.DropDownDiv.show = function () {
    blocklyDropdownMenu = document.querySelector(".blocklyDropdownMenu");
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!blocklyDropdownMenu) {
      return oldDropDownDivShow.call(this, ...args);
    }
    blocklyDropdownMenu.focus = () => {}; // no-op focus() so it can't steal it from the search bar

    searchBar = document.createElement("input");
    addon.tab.displayNoneWhileDisabled(searchBar, {
      display: "flex"
    });
    searchBar.type = "text";
    searchBar.addEventListener("input", updateSearch);
    searchBar.addEventListener("keydown", handleKeyDownEvent);
    searchBar.classList.add("u-dropdown-searchbar");
    blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
    items = Array.from(blocklyDropdownMenu.children).filter(child => child.tagName !== "INPUT").map(element => ({
      element,
      text: element.textContent
    }));
    currentDropdownOptions = resultOfLastGetOptions;
    updateSearch();

    // Call the original show method after adding everything so that it can perform the correct size calculations
    const ret = oldDropDownDivShow.call(this, ...args);

    // Lock the size of the dropdown
    blocklyDropDownContent = Blockly.DropDownDiv.getContentDiv();
    blocklyDropDownContent.style.width = getComputedStyle(blocklyDropDownContent).width;
    blocklyDropDownContent.style.height = getComputedStyle(blocklyDropDownContent).height;

    // This is really strange, but if you don't reinsert the search bar into the DOM then focus() doesn't work
    blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
    searchBar.focus();
    return ret;
  };
  const oldDropDownDivClearContent = Blockly.DropDownDiv.clearContent;
  Blockly.DropDownDiv.clearContent = function () {
    oldDropDownDivClearContent.call(this);
    items = [];
    searchedItems = [];
    Blockly.DropDownDiv.content_.style.height = "";
  };
  const oldFieldDropdownGetOptions = Blockly.FieldDropdown.prototype.getOptions;
  Blockly.FieldDropdown.prototype.getOptions = function () {
    const options = oldFieldDropdownGetOptions.call(this);
    const block = this.sourceBlock_;
    const isStage = vm.editingTarget && vm.editingTarget.isStage;
    if (block) {
      if (block.category_ === "data") {
        options.push(getMenuItemMessage("createGlobalVariable"));
        if (!isStage) {
          options.push(getMenuItemMessage("createLocalVariable"));
        }
      } else if (block.category_ === "data-lists") {
        options.push(getMenuItemMessage("createGlobalList"));
        if (!isStage) {
          options.push(getMenuItemMessage("createLocalList"));
        }
      } else if (block.type === "event_broadcast_menu" || block.type === "event_whenbroadcastreceived") {
        options.push(getMenuItemMessage("createBroadcast"));
      }
    }
    // Options aren't normally stored anywhere, so we'll store them ourselves.
    resultOfLastGetOptions = options;
    return options;
  };
  const oldFieldVariableOnItemSelected = Blockly.FieldVariable.prototype.onItemSelected;
  Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
    const sourceBlock = this.sourceBlock_;
    if (sourceBlock && sourceBlock.workspace && searchBar.value.length !== 0) {
      const workspace = sourceBlock.workspace;
      const optionId = menuItem.getValue();
      if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
        const addonItem = ADDON_ITEMS[optionId];
        Blockly.Events.setGroup(true);
        const variable = addonItem.createVariable(workspace, searchBar.value.trim());
        if (this.sourceBlock_) this.setValue(variable.getId());
        Blockly.Events.setGroup(false);
        return;
      }
    }
    return oldFieldVariableOnItemSelected.call(this, menu, menuItem);
  };
  function selectItem(item, click) {
    // You can't just use click() or focus() because Blockly uses mousedown and mouseup handlers, not click handlers.
    item.dispatchEvent(new MouseEvent("mousedown", {
      relatedTarget: item,
      bubbles: true
    }));
    if (click) item.dispatchEvent(new MouseEvent("mouseup", {
      relatedTarget: item,
      bubbles: true
    }));

    // Scroll the item into view if it is offscreen.
    const itemTop = item.offsetTop;
    const itemEnd = itemTop + item.offsetHeight;
    const scrollTop = blocklyDropDownContent.scrollTop;
    const scrollHeight = blocklyDropDownContent.offsetHeight;
    const scrollEnd = scrollTop + scrollHeight;
    if (scrollTop > itemTop) {
      blocklyDropDownContent.scrollTop = itemTop;
    } else if (itemEnd > scrollEnd) {
      blocklyDropDownContent.scrollTop = itemEnd - scrollHeight;
    }
  }
  function performSearch() {
    const rawQuery = searchBar.value.trim();
    const query = rawQuery.trim().toLowerCase();
    const rank = (item, index) => {
      // Negative number will hide
      // Higher numbers will appear first
      const option = currentDropdownOptions[index];
      const optionId = option[1];
      if (SCRATCH_ITEMS_TO_HIDE.includes(optionId)) {
        return query ? -1 : 0;
      } else if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
        if (!query) {
          return -1;
        }
        const addonInfo = ADDON_ITEMS[optionId];
        if (addonInfo.enabled(rawQuery)) {
          item.element.lastChild.lastChild.textContent = getMenuItemMessage(optionId)[0];
          return 0;
        }
        return -1;
      }
      const itemText = item.text.toLowerCase();
      if (query === itemText) {
        return 2;
      }
      if (itemText.startsWith(query)) {
        return 1;
      }
      if (itemText.includes(query)) {
        return 0;
      }
      return -1;
    };
    return items.map((item, index) => ({
      item,
      score: rank(item, index)
    })).sort((_ref2, _ref3) => {
      let scoreA = _ref2.score;
      let scoreB = _ref3.score;
      return Math.max(0, scoreB) - Math.max(0, scoreA);
    });
  }
  function updateSearch() {
    const previousSearchedItems = searchedItems;
    searchedItems = performSearch();
    let needToUpdateDOM = previousSearchedItems.length !== searchedItems.length;
    if (!needToUpdateDOM) {
      for (let i = 0; i < searchedItems.length; i++) {
        if (searchedItems[i].item !== previousSearchedItems[i].item) {
          needToUpdateDOM = true;
          break;
        }
      }
    }
    if (needToUpdateDOM && previousSearchedItems.length > 0) {
      for (const _ref4 of previousSearchedItems) {
        const item = _ref4.item;
        item.element.remove();
      }
      for (const _ref5 of searchedItems) {
        const item = _ref5.item;
        blocklyDropdownMenu.appendChild(item.element);
      }
    }
    for (const _ref6 of searchedItems) {
      const item = _ref6.item;
      const score = _ref6.score;
      item.element.hidden = score < 0;
    }
  }
  function handleKeyDownEvent(event) {
    if (event.key === "Enter") {
      // Reimplement enter to select item to account for hidden items and default to the top item.
      event.stopPropagation();
      event.preventDefault();
      const selectedItem = document.querySelector(".goog-menuitem-highlight");
      if (selectedItem && !selectedItem.hidden) {
        selectItem(selectedItem, true);
        return;
      }
      const selectedBlock = Blockly.selected;
      if (searchBar.value === "" && selectedBlock) {
        if (selectedBlock.type === "event_broadcast" || selectedBlock.type === "event_broadcastandwait" || selectedBlock.type === "event_whenbroadcastreceived") {
          // The top item of these dropdowns is always "New message"
          // When pressing enter on an empty search bar, we close the dropdown instead of making a new broadcast.
          Blockly.DropDownDiv.hide();
          return;
        }
      }
      for (const _ref7 of searchedItems) {
        const item = _ref7.item;
        if (!item.element.hidden) {
          selectItem(item.element, true);
          break;
        }
      }
      // If there is no top value, do nothing and leave the dropdown open
    } else if (event.key === "Escape") {
      Blockly.DropDownDiv.hide();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      // Reimplement keyboard navigation to account for hidden items.
      event.preventDefault();
      event.stopPropagation();
      const items = searchedItems.filter(i => i.score >= 0).map(i => i.item);
      if (items.length === 0) {
        return;
      }
      let selectedIndex = -1;
      for (let i = 0; i < items.length; i++) {
        if (items[i].element.classList.contains("goog-menuitem-highlight")) {
          selectedIndex = i;
          break;
        }
      }
      const lastIndex = items.length - 1;
      let newIndex = 0;
      if (event.key === "ArrowDown") {
        if (selectedIndex === -1 || selectedIndex === lastIndex) {
          newIndex = 0;
        } else {
          newIndex = selectedIndex + 1;
        }
      } else {
        if (selectedIndex === -1 || selectedIndex === 0) {
          newIndex = lastIndex;
        } else {
          newIndex = selectedIndex - 1;
        }
      }
      selectItem(items[newIndex].element, false);
    }
  }
  function getMenuItemMessage(message) {
    var _searchBar;
    // Format used internally by Scratch:
    // [human readable name, internal name]
    return [msg(message, {
      name: ((_searchBar = searchBar) === null || _searchBar === void 0 ? void 0 : _searchBar.value.trim()) || ""
    }), message];
  }
});

/***/ }),

/***/ "./src/addons/addons/folders/_runtime_entry.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/folders/_runtime_entry.js ***!
  \*****************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/folders/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/folders/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./folder.svg */ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "folder.svg": _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/folders/userscript.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/folders/userscript.js ***!
  \*************************************************/
/*! exports provided: addDefaultAssetFolderIfMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultAssetFolderIfMissing", function() { return addDefaultAssetFolderIfMissing; });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
const DIVIDER = "//";

/**
 * getFolderFromName("B") === null
 * getFolderFromName("A//b") === "A"
 */
const getFolderFromName = name => {
  const idx = name.indexOf(DIVIDER);
  if (idx === -1 || idx === 0) {
    return null;
  }
  return name.substr(0, idx);
};

/**
 * getNameWithoutFolder("B") === "B"
 * getNameWithoutFolder("A//b") === "b"
 */
const getNameWithoutFolder = name => {
  const idx = name.indexOf(DIVIDER);
  if (idx === -1 || idx === 0) {
    return name;
  }
  return name.substr(idx + DIVIDER.length);
};

/**
 * setFolderOfName("B", "y") === "y//B"
 * setFolderOfName("c//B", "y") === "y//B"
 * setFolderOfName("B", null) === "B"
 * setFolderOfName("c//B", null) === "B"
 */
const setFolderOfName = (name, folder) => {
  const basename = getNameWithoutFolder(name);
  if (folder) {
    return "".concat(folder).concat(DIVIDER).concat(basename);
  }
  return basename;
};
const isValidFolderName = name => {
  return !name.includes(DIVIDER) && !name.endsWith("/");
};
const RESERVED_NAMES = ["_mouse_", "_stage_", "_edge_", "_myself_", "_random_"];
const ensureNotReserved = name => {
  if (name === "") return "2";
  if (RESERVED_NAMES.includes(name)) return "".concat(name, "2");
  return name;
};
let currentSpriteFolder = null;
let currentAssetFolder = null;

/**
 * Used for compatibility with other addons that trap the add costume or add sound functions.
 * By default new assets are added to the folder that the user currently has open. This gets
 * encoded in the name of the asset, but that information may not be added until late in the
 * process. If you want to guarantee that your addon is aware of the asset name after
 * accounting for folders, then pass it into this function. The asset will be modified in-place.
 * It is safe to call this multiple times with the same asset.
 * @param {{name: string}} asset a sound or costume asset
 */
const addDefaultAssetFolderIfMissing = asset => {
  if (asset && currentAssetFolder !== null && typeof getFolderFromName(asset.name) !== "string") {
    asset.name = setFolderOfName(asset.name, currentAssetFolder);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console,
    msg = _ref.msg;
  // The basic premise of how this addon works is relative simple.
  // scratch-gui renders the sprite selectors and asset selectors in a hierarchy like this:
  // <SelectorHOC>
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   ...
  // </SelectorHOC>
  // It's obviously more complicated than that, but there are two important parts:
  // SelectorHOC - We override this to change which items are displayed
  // SpriteSelectorItem - We override this to change how items are displayed.
  //    Folders are just items rendered differently
  // These two components communicate through the `name` property of the items.
  // We touch some things on the VM to make dragging items work properly.

  const REACT_INTERNAL_PREFIX = "__reactInternalInstance$";
  const TYPE_SPRITES = 1;
  const TYPE_ASSETS = 2;

  // We run too early, will be set later
  let vm;
  let reactInternalKey;
  let currentSpriteItems;
  let currentAssetItems;
  const getSortableHOCFromElement = el => {
    const nearestSpriteSelector = el.closest("[class*='sprite-selector_sprite-selector']");
    if (nearestSpriteSelector) {
      return nearestSpriteSelector[reactInternalKey].child.sibling.child.stateNode;
    }
    const nearestAssetPanelWrapper = el.closest('[class*="asset-panel_wrapper"]');
    if (nearestAssetPanelWrapper) {
      return nearestAssetPanelWrapper[reactInternalKey].child.child.stateNode;
    }
    throw new Error("cannot find SortableHOC");
  };
  const getBackpackFromElement = el => {
    const gui = el.closest('[class*="gui_editor-wrapper"]');
    if (!gui) throw new Error("cannot find Backpack");
    return gui[reactInternalKey].child.sibling.child.child.stateNode;
  };
  const clamp = (n, min, max) => {
    return Math.min(Math.max(n, min), max);
  };

  /**
   * @typedef {Object} ItemData
   * @property {string} realName
   * @property {number} realIndex
   * @property {string} inFolder
   * @property {string} folder
   * @property {boolean} folderOpen
   */

  /**
   * @returns {ItemData|null}
   */
  const getItemData = item => {
    if (item && item.name && typeof item.name === "object") {
      return item.name;
    }
    return null;
  };
  const openFolderAsset = {
    assetId: "&__sa_folders_folder",
    encodeDataURI() {
      // Doesn't actually need to be a data: URI
      return addon.self.getResource("/folder.svg") /* rewritten by pull.js */;
    }
  };

  // https://github.com/scratchfoundation/scratch-gui/blob/develop/src/components/asset-panel/icon--sound.svg
  const imageIconSource = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"100px\" height=\"100px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Sound\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M12.4785058,12.6666667 C12.3144947,12.6666667 12.1458852,12.6272044 11.9926038,12.5440517 C11.537358,12.2960031 11.3856094,11.7562156 11.6553847,11.3376335 C12.1688774,10.5371131 12.1688774,9.54491867 11.6553847,8.74580756 C11.3856094,8.32581618 11.537358,7.78602861 11.9926038,7.53798001 C12.452448,7.29275014 13.0379829,7.43086811 13.3046926,7.84804076 C14.1737981,9.20103311 14.1737981,10.8809986 13.3046926,12.233991 C13.1268862,12.5130457 12.806528,12.6666667 12.4785058,12.6666667 Z M15.3806784,13.8333333 C15.2408902,13.8333333 15.0958763,13.796281 14.9665396,13.7182064 C14.5785295,13.485306 14.4491928,12.9784829 14.6791247,12.5854634 C15.5949331,11.0160321 15.5949331,9.065491 14.6791247,7.49738299 C14.4491928,7.10436352 14.5785295,6.59621712 14.9665396,6.36331669 C15.3558562,6.13438616 15.8549129,6.26274605 16.0848448,6.65444223 C17.3050517,8.74260632 17.3050517,11.3389168 16.0848448,13.4270809 C15.9319924,13.6890939 15.6602547,13.8333333 15.3806784,13.8333333 Z M10.3043478,5.62501557 L10.3043478,13.873675 C10.3043478,14.850934 9.10969849,15.3625101 8.36478311,14.7038052 L6.7566013,13.2797607 C6.18712394,12.7762834 5.44499329,12.4968737 4.67362297,12.4968737 L4.3923652,12.4968737 C3.62377961,12.4968737 3,11.8935108 3,11.1470686 L3,8.36646989 C3,7.62137743 3.62377961,7.01666471 4.3923652,7.01666471 L4.65830695,7.01666471 C5.42967727,7.01666471 6.17180792,6.73725504 6.74128529,6.23377771 L8.36478311,4.79623519 C9.10969849,4.13753026 10.3043478,4.64910643 10.3043478,5.62501557 Z\" id=\"Combined-Shape\" fill=\"#575E75\"></path>\n    </g>\n</svg>";
  const soundIconHref = "data:image/svg+xml;base64,".concat(btoa(imageIconSource));
  let folderColorStylesheet = null;
  const folderColors = Object.create(null);
  const getFolderColorClass = folderName => {
    const mulberry32 = a => {
      // https://stackoverflow.com/a/47593316
      return function () {
        var t = a += 0x6d2b79f5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    };
    const hashCode = str => {
      // Based on Java's String.hashCode
      // https://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/lang/String.java#l1452
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = 31 * hash + str.charCodeAt(i);
        hash = hash | 0;
      }
      return hash;
    };
    const random = str => {
      const seed = hashCode(str);
      const rng = mulberry32(seed);
      // Run RNG a few times to get more random numbers, otherwise similar seeds tend to give somewhat similar results
      rng();
      rng();
      rng();
      rng();
      return rng();
    };
    if (!folderColors[folderName]) {
      if (!folderColorStylesheet) {
        folderColorStylesheet = document.createElement("style");
        document.head.appendChild(folderColorStylesheet);
      }
      const hue = random(folderName) * 360;
      const color = "hsla(".concat(hue, "deg, 100%, 85%, 0.5)");
      const id = Object.keys(folderColors).length;
      const className = "sa-folders-color-".concat(id);
      folderColors[folderName] = className;
      folderColorStylesheet.textContent += ".".concat(className, "{background-color:").concat(color, " !important;}");
      folderColorStylesheet.textContent += ".".concat(className, "[class*=\"sprite-selector_raised\"]:not([class*=\"sa-folders-folder\"]){background-color:hsla(").concat(hue, "deg, 100%, 77%, 1) !important;}");
    }
    return folderColors[folderName];
  };
  const fixOrderOfItemsInFolders = items => {
    const folders = Object.create(null);
    const result = [];
    for (const item of items) {
      const name = item.getName ? item.getName() : item.name;
      const folder = getFolderFromName(name);
      if (typeof folder === "string") {
        if (!folders[folder]) {
          folders[folder] = [];
          result.push(folders[folder]);
        }
        folders[folder].push(item);
      } else {
        result.push(item);
      }
    }
    const flatResult = result.flat();
    for (let i = 0; i < items.length; i++) {
      if (result[i] !== items[i]) {
        return {
          items: flatResult,
          changed: true
        };
      }
    }
    return {
      items: flatResult,
      changed: false
    };
  };
  const fixTargetOrder = () => {
    const _fixOrderOfItemsInFol = fixOrderOfItemsInFolders(vm.runtime.targets),
      items = _fixOrderOfItemsInFol.items,
      changed = _fixOrderOfItemsInFol.changed;
    if (changed) {
      vm.runtime.targets = items;
      vm.emitTargetsUpdate();
    }
  };
  const fixCostumeOrder = function fixCostumeOrder() {
    let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vm.editingTarget;
    const _fixOrderOfItemsInFol2 = fixOrderOfItemsInFolders(target.sprite.costumes),
      items = _fixOrderOfItemsInFol2.items,
      changed = _fixOrderOfItemsInFol2.changed;
    if (changed) {
      target.sprite.costumes = items;
      vm.emitTargetsUpdate();
    }
  };
  const fixSoundOrder = function fixSoundOrder() {
    let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vm.editingTarget;
    const _fixOrderOfItemsInFol3 = fixOrderOfItemsInFolders(target.sprite.sounds),
      items = _fixOrderOfItemsInFol3.items,
      changed = _fixOrderOfItemsInFol3.changed;
    if (changed) {
      target.sprite.sounds = items;
      vm.emitTargetsUpdate();
    }
  };
  const verifySortableHOC = sortableHOCInstance => {
    const SortableHOC = sortableHOCInstance.constructor;
    if (Array.isArray(sortableHOCInstance.props.items) && (typeof sortableHOCInstance.props.selectedId === "string" || typeof sortableHOCInstance.props.selectedItemIndex === "number") && typeof sortableHOCInstance.containerBox !== "undefined" && typeof SortableHOC.prototype.componentDidMount === "undefined" && typeof SortableHOC.prototype.componentDidUpdate === "undefined" && typeof SortableHOC.prototype.handleAddSortable === "function" && typeof SortableHOC.prototype.handleRemoveSortable === "function" && typeof SortableHOC.prototype.setRef === "function") return;
    throw new Error("Can not comprehend SortableHOC");
  };
  const verifySpriteSelectorItem = spriteSelectorItemInstance => {
    const SpriteSelectorItem = spriteSelectorItemInstance.constructor;
    if (typeof spriteSelectorItemInstance.props.asset === "object" && typeof spriteSelectorItemInstance.props.name === "string" && typeof spriteSelectorItemInstance.props.dragType === "string" && typeof SpriteSelectorItem.prototype.handleClick === "function" && typeof SpriteSelectorItem.prototype.setRef === "function" && typeof SpriteSelectorItem.prototype.handleDrag === "function" && typeof SpriteSelectorItem.prototype.handleDragEnd === "function" && typeof SpriteSelectorItem.prototype.handleDelete === "function" && typeof SpriteSelectorItem.prototype.handleDuplicate === "function" && typeof SpriteSelectorItem.prototype.handleExport === "function") return;
    throw new Error("Can not comprehend SpriteSelectorItem");
  };
  const verifyVM = vm => {
    const target = vm.runtime.targets[0];
    if (typeof vm.installTargets === "function" && typeof vm.reorderTarget === "function" && typeof target.reorderCostume === "function" && typeof target.reorderSound === "function" && typeof target.addCostume === "function" && typeof target.addSound === "function") return;
    throw new Error("Can not comprehend VM");
  };
  const verifyBackpack = backpackInstance => {
    const Backpack = backpackInstance.constructor;
    if (typeof Backpack.prototype.handleDrop === "function" && typeof Backpack.prototype.componentDidUpdate === "undefined") {
      return;
    }
    throw new Error("Can not comprehend Backpack");
  };
  class Cache {
    constructor() {
      this.cache = new Map();
      this.usedThisTick = new Set();
    }
    has(id) {
      return this.cache.has(id);
    }
    get(id) {
      this.usedThisTick.add(id);
      return this.cache.get(id);
    }
    set(id, value) {
      this.usedThisTick.add(id);
      this.cache.set(id, value);
    }
    startTick() {
      this.usedThisTick.clear();
    }
    endTick() {
      for (const id of Array.from(this.cache.keys())) {
        if (!this.usedThisTick.has(id)) {
          this.cache.delete(id);
        }
      }
    }
    clear() {
      this.usedThisTick.clear();
      this.cache.clear();
    }
  }
  const patchSortableHOC = (SortableHOC, type) => {
    // SortableHOC should be: https://github.com/scratchfoundation/scratch-gui/blob/29d9851778febe4e69fa5111bf7559160611e366/src/lib/sortable-hoc.jsx#L8

    const itemCache = new Cache();
    const folderItemCache = new Cache();
    const folderAssetCache = new Cache();
    const PREVIEW_SIZE = 80;
    const PREVIEW_POSITIONS = [
    // x, y
    [0, 0], [PREVIEW_SIZE / 2, 0], [0, PREVIEW_SIZE / 2], [PREVIEW_SIZE / 2, PREVIEW_SIZE / 2]];
    const createFolderPreview = items => {
      // Directly generate a string instead of using DOM API for performance as we deal with very large inlined images
      // Because the result is only used as an img src, XSS shouldn't be a concern
      let result = "data:image/svg+xml;,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(PREVIEW_SIZE, "\" height=\"").concat(PREVIEW_SIZE, "\">");
      for (let i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
        const item = items[i];
        const width = PREVIEW_SIZE / 2;
        const height = PREVIEW_SIZE / 2;
        const _PREVIEW_POSITIONS$i = _slicedToArray(PREVIEW_POSITIONS[i], 2),
          x = _PREVIEW_POSITIONS$i[0],
          y = _PREVIEW_POSITIONS$i[1];
        let src;
        if (item.asset) {
          // TW: We can be 100% certain that escaping here is unnecessary
          src = item.asset.encodeDataURI();
        } else if (item.costume && item.costume.asset) {
          src = item.costume.asset.encodeDataURI();
        } else if (item.url) {
          src = soundIconHref;
        }
        if (src) {
          result += "<image width=\"".concat(width, "\" height=\"").concat(height, "\" x=\"").concat(x, "\" y=\"").concat(y, "\" href=\"").concat(src, "\"/>");
        }
      }
      result += "</svg>";
      return result;
    };
    const getUniqueIdOfFolderItems = items => {
      let id = "sa_folder&&";
      for (let i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
        const item = items[i];
        if (item.asset) {
          id += item.asset.assetId;
        } else if (item.costume && item.costume.asset) {
          id += item.costume.asset.assetId;
        } else if (item.url) {
          id += item.url;
        }
        id += "&&";
      }
      return id;
    };
    const processItems = (openFolders, props) => {
      const processItem = item => {
        const itemId = item.name;
        let newItem;
        let itemData;
        if (itemCache.has(itemId)) {
          newItem = itemCache.get(itemId);
          itemData = newItem.name;
        } else {
          itemData = {
            toString() {
              return "_".concat(item.name);
            }
          };
          newItem = {};
          itemCache.set(itemId, newItem);
        }
        const itemFolderName = getFolderFromName(item.name);
        Object.assign(newItem, item);
        itemData.realName = item.name;
        itemData.realIndex = i;
        itemData.inFolder = itemFolderName;
        newItem.name = itemData;
        newItem.order = i;
        return {
          newItem,
          itemData
        };
      };
      itemCache.startTick();
      folderItemCache.startTick();
      folderAssetCache.startTick();
      const folderOccurrences = new Map();
      const items = [];
      const result = {
        items
      };
      let i = 0;
      while (i < props.items.length) {
        const item = props.items[i];
        const folderName = getFolderFromName(item.name);
        if (folderName === null) {
          items.push(processItem(item).newItem);
          if (type === TYPE_ASSETS) {
            const isSelected = props.selectedItemIndex === i;
            if (isSelected) {
              result.selectedItemIndex = items.length - 1;
            }
          }
        } else {
          const isOpen = openFolders.indexOf(folderName) !== -1;
          const folderItems = [];
          while (i < props.items.length) {
            const childItem = props.items[i];
            const processedItem = processItem(childItem);
            if (getFolderFromName(childItem.name) !== folderName) {
              break;
            }
            folderItems.push(processedItem.newItem);
            if (type === TYPE_ASSETS) {
              const isSelected = props.selectedItemIndex === i;
              if (isSelected) {
                if (isOpen) {
                  result.selectedItemIndex = items.length + folderItems.length;
                } else {
                  result.selectedItemIndex = -1;
                }
              }
            }
            i++;
          }
          i--;
          const occurrence = folderOccurrences.get(folderName) || 0;
          folderOccurrences.set(folderName, occurrence + 1);
          const baseUniqueId = getUniqueIdOfFolderItems(folderItems);
          const itemUniqueId = "".concat(isOpen, "&").concat(occurrence, "&").concat(folderName, "&").concat(baseUniqueId, "&");
          const reactKey = "&__".concat(occurrence, "_").concat(folderName);
          const assetUniqueId = baseUniqueId;
          let folderItem;
          let folderData;
          if (folderItemCache.has(itemUniqueId)) {
            folderItem = folderItemCache.get(itemUniqueId);
            folderData = folderItem.name;
          } else {
            folderItem = {
              // Can be used as a react key
              id: {
                toString() {
                  return reactKey;
                }
              }
            };
            folderData = {
              // Can be used as a react key
              toString() {
                return reactKey;
              }
            };
            folderItemCache.set(itemUniqueId, folderItem);
          }
          folderData.folder = folderName;
          folderData.folderOpen = isOpen;
          folderItem.items = folderItems;
          folderItem.name = folderData;
          folderItem.order = i;
          let folderAsset;
          if (isOpen) {
            folderAsset = openFolderAsset;
          } else {
            if (folderAssetCache.has(assetUniqueId)) {
              folderAsset = folderAssetCache.get(assetUniqueId);
            } else {
              folderAsset = {
                assetId: assetUniqueId,
                encodeDataURI() {
                  return createFolderPreview(folderItems);
                }
              };
              folderAssetCache.set(assetUniqueId, folderAsset);
            }
          }
          if (type === TYPE_SPRITES) {
            if (!folderItem.costume) folderItem.costume = {};
            folderItem.costume.asset = folderAsset;
            // For sprite items, `id` is used as the drag payload and toString is used as a React key
            if (!folderItem.id) folderItem.id = {};
            folderItem.id.sa_folder_items = folderItems;
            folderItem.id.toString = () => reactKey;
          } else {
            folderItem.asset = folderAsset;
            if (!folderItem.dragPayload) folderItem.dragPayload = {};
            folderItem.dragPayload.sa_folder_items = folderItems;
          }
          items.push(folderItem);
          if (isOpen) {
            for (const item of folderItems) {
              items.push(item);
            }
          }
        }
        i++;
      }
      itemCache.endTick();
      folderItemCache.endTick();
      folderAssetCache.endTick();
      return result;
    };
    const getSelectedItem = sortable => {
      if (type === TYPE_SPRITES) {
        const selectedItem = sortable.props.items.find(i => i.id === sortable.props.selectedId);
        return selectedItem;
      } else if (type === TYPE_ASSETS) {
        const selectedItem = sortable.props.items[sortable.props.selectedItemIndex];
        return selectedItem;
      }
      return null;
    };
    SortableHOC.prototype.saInitialSetup = function () {
      itemCache.clear();
      folderItemCache.clear();
      folderAssetCache.clear();
      const folders = [];
      const selectedItem = getSelectedItem(this);
      if (selectedItem && !selectedItem.isStage) {
        const folder = getFolderFromName(selectedItem.name);
        folders.push(folder);
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = folder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = folder;
        }
      }
      this.setState({
        folders
      });
    };
    SortableHOC.prototype.componentDidMount = function () {
      // Do part of componentDidUpdate on mount as well
      const selectedItem = getSelectedItem(this);
      if (selectedItem) {
        const folder = getFolderFromName(selectedItem.name);
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = folder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = folder;
        }
      }
      this.saInitialSetup();
    };
    SortableHOC.prototype.componentDidUpdate = function (prevProps, prevState) {
      const selectedItem = getSelectedItem(this);
      if (selectedItem) {
        const folder = getFolderFromName(selectedItem.name);
        const currentFolder = this.state.folders.includes(folder) ? folder : null;
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = currentFolder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = currentFolder;
        }
        let selectedItemChanged;
        if (this.props.selectedId) {
          selectedItemChanged = this.props.selectedId !== prevProps.selectedId;
        } else {
          selectedItemChanged = this.props.items[this.props.selectedItemIndex] && prevProps.items[prevProps.selectedItemIndex] && this.props.items[this.props.selectedItemIndex].name !== prevProps.items[prevProps.selectedItemIndex].name;
        }
        if (selectedItemChanged) {
          if (!selectedItem.isStage) {
            if (typeof folder === "string" && !this.state.folders.includes(folder)) {
              this.setState(prevState => ({
                folders: [...prevState.folders, folder]
              }));
            }
          }
        }
      }
    };
    const originalSortableHOCRender = SortableHOC.prototype.render;
    SortableHOC.prototype.render = function () {
      const originalProps = this.props;
      this.props = _objectSpread(_objectSpread({}, this.props), processItems(this.state && this.state.folders || [], this.props));
      if (type === TYPE_SPRITES) {
        currentSpriteItems = this.props.items;
      } else if (type === TYPE_ASSETS) {
        currentAssetItems = this.props.items;
      }
      const result = originalSortableHOCRender.call(this);
      this.props = originalProps;
      return result;
    };
  };
  const getAllFolders = component => {
    const result = new Set();
    let items;
    if (component.props.dragType === "SPRITE") {
      items = currentSpriteItems;
    } else {
      items = currentAssetItems;
    }
    for (const item of items) {
      const data = getItemData(item);
      if (typeof data.folder === "string") {
        result.add(data.folder);
      }
    }
    return Array.from(result);
  };
  const isFolderOpen = (component, folder) => {
    const sortableHOCInstance = getSortableHOCFromElement(component.ref);
    const folders = sortableHOCInstance.state && sortableHOCInstance.state.folders || [];
    return folders.includes(folder);
  };
  const setFolderOpen = (component, folder, open) => {
    const sortableHOCInstance = getSortableHOCFromElement(component.ref);
    sortableHOCInstance.setState(prevState => {
      let folders = prevState && prevState.folders || [];
      folders = folders.filter(i => i !== folder);
      if (open) {
        return {
          folders: [...folders, folder]
        };
      }
      return {
        folders
      };
    });
  };
  await addon.tab.scratchClassReady();
  addon.tab.createEditorContextMenu((ctxType, ctx) => {
    if (ctxType !== "sprite" && ctxType !== "costume" && ctxType !== "sound") return;
    const component = ctx.target[addon.tab.traps.getInternalKey(ctx.target)].return.return.return.stateNode;
    const data = getItemData(component.props);
    if (!data) return;
    if (typeof data.folder === "string") {
      ctx.target.setAttribute("sa-folders-context-type", "folder");
      const renameItems = newName => {
        const isOpen = isFolderOpen(component, data.folder);
        setFolderOpen(component, data.folder, false);
        if (isOpen && typeof newName === "string") {
          setFolderOpen(component, newName, true);
        }
        if (component.props.dragType === "SPRITE") {
          for (const target of vm.runtime.targets) {
            if (target.isOriginal) {
              if (getFolderFromName(target.getName()) === data.folder) {
                vm.renameSprite(target.id, ensureNotReserved(setFolderOfName(target.getName(), newName)));
              }
            }
          }
          vm.emitWorkspaceUpdate();
          fixTargetOrder();
        } else if (component.props.dragType === "COSTUME") {
          for (let i = 0; i < vm.editingTarget.sprite.costumes.length; i++) {
            const costume = vm.editingTarget.sprite.costumes[i];
            if (getFolderFromName(costume.name) === data.folder) {
              vm.renameCostume(i, setFolderOfName(costume.name, newName));
            }
          }
          fixCostumeOrder();
        } else if (component.props.dragType === "SOUND") {
          for (let i = 0; i < vm.editingTarget.sprite.sounds.length; i++) {
            const sound = vm.editingTarget.sprite.sounds[i];
            if (getFolderFromName(sound.name) === data.folder) {
              vm.renameSound(i, setFolderOfName(sound.name, newName));
            }
          }
          fixSoundOrder();
        }
      };
      const renameFolder = async () => {
        let newName = prompt(msg("rename-folder-prompt") + ":", data.folder);
        // Prompt cancelled, do not rename
        if (newName === null) {
          return;
        }
        if (!isValidFolderName(newName)) {
          alert(msg("name-not-allowed"));
          return;
        }
        // Empty name will remove the folder
        if (!newName) {
          newName = null;
        }
        renameItems(newName);
      };
      const removeFolder = () => {
        renameItems(null);
      };
      return [{
        className: "sa-folders-rename-folder",
        label: msg("rename-folder"),
        callback: renameFolder,
        position: "assetContextMenuAfterDelete",
        order: 10
      }, {
        className: "sa-folders-remove-folder",
        label: msg("remove-folder"),
        callback: removeFolder,
        position: "assetContextMenuAfterDelete",
        order: 11
      }];
    } else {
      ctx.target.setAttribute("sa-folders-context-type", "asset");
      const setFolder = folder => {
        if (component.props.dragType === "SPRITE") {
          const target = vm.runtime.getTargetById(component.props.id);
          vm.renameSprite(component.props.id, ensureNotReserved(setFolderOfName(target.getName(), folder)));
          fixTargetOrder();
          vm.emitWorkspaceUpdate();
        } else if (component.props.dragType === "COSTUME") {
          const data = getItemData(component.props);
          const index = data.realIndex;
          const asset = vm.editingTarget.sprite.costumes[index];
          vm.renameCostume(vm.editingTarget.sprite.costumes.indexOf(asset), setFolderOfName(asset.name, folder));
          fixCostumeOrder();
        } else if (component.props.dragType === "SOUND") {
          const data = getItemData(component.props);
          const index = data.realIndex;
          const asset = vm.editingTarget.sprite.sounds[index];
          vm.renameSound(vm.editingTarget.sprite.sounds.indexOf(asset), setFolderOfName(asset.name, folder));
          fixSoundOrder();
        }
      };
      const createFolder = async () => {
        const name = prompt(msg("name-prompt") + ":", getNameWithoutFolder(data.realName));
        if (name === null) {
          return;
        }
        if (!isValidFolderName(name)) {
          alert(msg("name-not-allowed"));
          return;
        }
        setFolder(name);
      };
      const base = [{
        border: true,
        className: "sa-folders-create-folder",
        label: msg("create-folder"),
        callback: createFolder,
        position: "assetContextMenuAfterDelete",
        order: 13
      }];
      const currentFolder = data.inFolder;
      if (typeof currentFolder === "string") {
        base.push({
          className: "sa-folders-remove-from-folder",
          label: msg("remove-from-folder"),
          callback: () => setFolder(null),
          position: "assetContextMenuAfterDelete",
          order: 14
        });
      }
      return base.concat(getAllFolders(component).filter(folder => folder !== currentFolder).map((folder, i) => {
        return {
          className: "sa-folders-add-to-folder",
          label: msg("add-to-folder", {
            folder
          }),
          callback: () => setFolder(folder),
          position: "assetContextMenuAfterDelete",
          order: 20 + i
        };
      }));
    }
  });
  const patchSpriteSelectorItem = SpriteSelectorItem => {
    for (const method of ["handleDelete", "handleDuplicate", "handleExport"]) {
      const original = SpriteSelectorItem.prototype[method];
      SpriteSelectorItem.prototype[method] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (typeof this.props.id === "number") {
          const itemData = getItemData(this.props);
          if (itemData) {
            const originalProps = this.props;
            this.props = _objectSpread(_objectSpread({}, originalProps), {}, {
              id: itemData.realIndex
            });
            const ret = original.call(this, ...args);
            this.props = originalProps;
            return ret;
          }
        }
        return original.call(this, ...args);
      };
    }
    const originalHandleDragEnd = SpriteSelectorItem.prototype.handleDragEnd;
    SpriteSelectorItem.prototype.handleDragEnd = function () {
      const itemData = getItemData(this.props);
      if (itemData) {
        if (typeof itemData.realIndex === "number" && this.props.dragging) {
          // If the item is being dragged onto another group (eg. costume list -> sprite list)
          // then we fake a drag event to make the `index` be the real index
          const originalIndex = this.props.index;
          const realIndex = itemData.realIndex;
          if (originalIndex !== realIndex) {
            const currentOffset = addon.tab.redux.state.scratchGui.assetDrag.currentOffset;
            const sortableHOCInstance = getSortableHOCFromElement(this.ref);
            if (currentOffset && sortableHOCInstance && sortableHOCInstance.getMouseOverIndex() === null) {
              this.props.index = realIndex;
              this.handleDrag(currentOffset);
              this.props.index = originalIndex;
            }
          }
        }
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return originalHandleDragEnd.call(this, ...args);
    };
    const originalHandleClick = SpriteSelectorItem.prototype.handleClick;
    SpriteSelectorItem.prototype.handleClick = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      const e = args[0];
      if (e && !this.noClick) {
        const itemData = getItemData(this.props);
        if (itemData) {
          if (typeof itemData.folder === "string") {
            e.preventDefault();
            setFolderOpen(this, itemData.folder, !isFolderOpen(this, itemData.folder));
            return;
          }
          if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
            e.preventDefault();
            if (this.props.onClick) {
              this.props.onClick(itemData.realIndex);
            }
            return;
          }
        }
      }
      return originalHandleClick.call(this, ...args);
    };
    const originalRender = SpriteSelectorItem.prototype.render;
    SpriteSelectorItem.prototype.render = function () {
      const itemData = getItemData(this.props);
      if (itemData) {
        const originalProps = this.props;
        this.props = _objectSpread({}, this.props);
        if (typeof itemData.realName === "string") {
          this.props.name = getNameWithoutFolder(itemData.realName);
        }
        if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
          // Convert 0-indexed to 1-indexed
          this.props.number = itemData.realIndex + 1;
        }
        if (typeof itemData.folder === "string") {
          this.props.name = itemData.folder;
          if (itemData.folderOpen) {
            this.props.details = msg("open-folder");
          } else {
            this.props.details = msg("closed-folder");
          }
          this.props.selected = false;
          this.props.number = null;
          this.props.className += " ".concat(getFolderColorClass(itemData.folder), " sa-folders-folder");
        }
        if (typeof itemData.inFolder === "string") {
          this.props.className += " ".concat(getFolderColorClass(itemData.inFolder));
        }
        const result = originalRender.call(this);
        this.props = originalProps;
        return result;
      }
      return originalRender.call(this);
    };
  };
  const patchVM = () => {
    const RenderedTarget = vm.runtime.targets[0].constructor;
    const originalInstallTargets = vm.installTargets;
    vm.installTargets = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      if (currentSpriteFolder !== null) {
        const targets = args[0];
        const wholeProject = args[2];
        if (Array.isArray(targets) && !wholeProject) {
          for (const target of targets) {
            if (target.sprite) {
              target.sprite.name = setFolderOfName(target.sprite.name, currentSpriteFolder);
            }
          }
        }
      }
      return originalInstallTargets.call(this, ...args).then(r => {
        fixTargetOrder();
        return r;
      });
    };
    const originalDuplicateSprite = vm.duplicateSprite;
    vm.duplicateSprite = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return originalDuplicateSprite.call(this, ...args).then(r => {
        fixTargetOrder();
        return r;
      });
    };
    const originalAddCostume = RenderedTarget.prototype.addCostume;
    RenderedTarget.prototype.addCostume = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      addDefaultAssetFolderIfMissing(args[0]);
      const r = originalAddCostume.call(this, ...args);
      fixCostumeOrder(this);
      return r;
    };
    const originalAddSound = RenderedTarget.prototype.addSound;
    RenderedTarget.prototype.addSound = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      addDefaultAssetFolderIfMissing(args[0]);
      const r = originalAddSound.call(this, ...args);
      fixSoundOrder(this);
      return r;
    };
    const abstractReorder = (_ref2, itemIndex, newIndex) => {
      let guiItems = _ref2.guiItems,
        getAll = _ref2.getAll,
        set = _ref2.set,
        rename = _ref2.rename,
        getVMItemFromGUIItem = _ref2.getVMItemFromGUIItem,
        zeroIndexed = _ref2.zeroIndexed,
        onFolderChanged = _ref2.onFolderChanged;
      // First index depends on zeroIndexed
      itemIndex = clamp(itemIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
      newIndex = clamp(newIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
      if (itemIndex === newIndex) {
        return false;
      }
      let assets = getAll();
      const originalAssets = getAll();
      const targetItem = guiItems[itemIndex - (zeroIndexed ? 0 : 1)];
      const itemAtNewIndex = guiItems[newIndex - (zeroIndexed ? 0 : 1)];
      const targetItemData = getItemData(targetItem);
      const itemAtNewIndexData = getItemData(itemAtNewIndex);
      if (!targetItemData || !itemAtNewIndexData) {
        console.warn("should never happen");
        return false;
      }
      const reorderingItems = typeof targetItemData.folder === "string" ? targetItem.items : [targetItem];
      const reorderingAssets = reorderingItems.map(i => getVMItemFromGUIItem(i, assets)).filter(i => i);
      if (typeof itemAtNewIndexData.realIndex === "number") {
        const newTarget = getVMItemFromGUIItem(itemAtNewIndex, assets);
        if (!newTarget || reorderingAssets.includes(newTarget)) {
          // Dragging folder into itself or target doesn't exist. Ignore.
          return false;
        }
      }
      let newFolder = null;
      assets = assets.filter(i => !reorderingAssets.includes(i));
      let realNewIndex;
      if (newIndex === (zeroIndexed ? 0 : 1)) {
        realNewIndex = zeroIndexed ? 0 : 1;
      } else if (newIndex === guiItems.length - (zeroIndexed ? 1 : 0)) {
        realNewIndex = assets.length;
      } else if (typeof itemAtNewIndexData.realIndex === "number") {
        newFolder = typeof itemAtNewIndexData.inFolder === "string" ? itemAtNewIndexData.inFolder : null;
        let newAsset = getVMItemFromGUIItem(itemAtNewIndex, assets);
        if (!newAsset) {
          console.warn("should never happen");
          return false;
        }
        realNewIndex = assets.indexOf(newAsset);
        if (newIndex > itemIndex) {
          realNewIndex++;
        }
      } else if (typeof itemAtNewIndexData.folder === "string") {
        let item;
        let offset = 0;
        if (newIndex < itemIndex) {
          // A B [C D E] F G
          //    ^----------*
          // A B C [D] E F G
          //      ^--------*
          item = itemAtNewIndex.items[0];
        } else if (itemAtNewIndexData.folderOpen) {
          // A B [C D E] F G
          //   *---^
          item = itemAtNewIndex.items[0];
          newFolder = itemAtNewIndexData.folder;
        } else {
          // A B [C] D E F G
          //   *----^
          item = itemAtNewIndex.items[itemAtNewIndex.items.length - 1];
          offset = 1;
        }
        let newAsset = getVMItemFromGUIItem(item, assets);
        if (newAsset) {
          realNewIndex = assets.indexOf(newAsset) + offset;
        } else {
          // Edge case: Dragging the first item of a list on top of the folder item
          // A B [C D E] F G
          //    ^---*
          newAsset = getVMItemFromGUIItem(item, originalAssets);
          if (!newAsset) {
            console.warn("should never happen");
            return false;
          }
          realNewIndex = originalAssets.indexOf(newAsset) + offset;
        }
      } else {
        console.warn("should never happen");
        return false;
      }
      if (typeof targetItemData.folder === "string" && newFolder !== null) {
        // Cannot drag a folder into another folder
        return;
      }
      if (realNewIndex < (zeroIndexed ? 0 : 1) || realNewIndex > assets.length) {
        console.warn("should never happen");
        return false;
      }
      assets.splice(realNewIndex, 0, ...reorderingAssets);
      set(assets);

      // If the folder has changed, update item names to match.
      if (typeof targetItemData.folder !== "string" && targetItemData.inFolder !== newFolder) {
        for (const asset of reorderingAssets) {
          const name = asset.getName ? asset.getName() : asset.name;
          rename(asset, setFolderOfName(name, newFolder));
        }
        if (onFolderChanged) {
          onFolderChanged();
        }
      }
      return true;
    };
    vm.constructor.prototype.reorderTarget = function (targetIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.runtime.targets;
        },
        set: targets => {
          this.runtime.targets = targets;
          this.emitTargetsUpdate();
        },
        rename: (item, name) => {
          this.renameSprite(item.id, ensureNotReserved(name));
        },
        getVMItemFromGUIItem: (item, targets) => {
          return targets.find(i => i.id === item.id);
        },
        onFolderChanged: () => {
          this.emitWorkspaceUpdate();
        },
        guiItems: currentSpriteItems,
        zeroIndexed: false
      }, targetIndex, newIndex);
    };
    RenderedTarget.prototype.reorderCostume = function (costumeIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.sprite.costumes;
        },
        set: assets => {
          this.sprite.costumes = assets;
        },
        rename: (item, name) => {
          this.renameCostume(this.sprite.costumes.indexOf(item), name);
        },
        getVMItemFromGUIItem: (item, costumes) => {
          const itemData = getItemData(item);
          return costumes.find(c => c.name === itemData.realName);
        },
        guiItems: currentAssetItems,
        zeroIndexed: true
      }, costumeIndex, newIndex);
    };
    RenderedTarget.prototype.reorderSound = function (soundIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.sprite.sounds;
        },
        set: assets => {
          this.sprite.sounds = assets;
        },
        rename: (item, name) => {
          this.renameSound(this.sprite.sounds.indexOf(item), name);
        },
        getVMItemFromGUIItem: (item, sounds) => {
          const itemData = getItemData(item);
          return sounds.find(c => c.name === itemData.realName);
        },
        guiItems: currentAssetItems,
        zeroIndexed: true
      }, soundIndex, newIndex);
    };

    // Temporal bug fix for #5762
    const originalShareSoundToTarget = vm.shareSoundToTarget;
    vm.shareSoundToTarget = function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      const target = this.runtime.getTargetById(args[1]);
      if (!target) {
        // Avoid reading property from null
        return Promise.reject(new Error("Dropping sound into folder is not supported"));
        // This would also work no matter what we returned, probably
        // Original method returns a promise, so here too
      }
      return originalShareSoundToTarget.call(this, ...args);
    };
  };
  const patchBackpack = backpackInstance => {
    const Backpack = backpackInstance.constructor;
    Backpack.prototype.sa_loadNextItem = function () {
      if (!this.sa_queuedItems) return;
      const item = this.sa_queuedItems.pop();
      if (item) {
        let payload;
        let type;
        if (item.dragPayload) {
          if (item.url) {
            type = "SOUND";
          } else {
            type = "COSTUME";
          }
          payload = item.dragPayload;
        } else if (item.id) {
          type = "SPRITE";
          payload = item.id;
        }
        if (type && payload) {
          originalHandleDrop.call(this, {
            dragType: type,
            payload: payload
          });
        }
      }
    };
    Backpack.prototype.componentDidUpdate = function (prevProps, prevState) {
      if (!this.state.loading && prevState.loading && !this.state.error) {
        this.sa_loadNextItem();
      }
    };
    const originalHandleDrop = Backpack.prototype.handleDrop;
    Backpack.prototype.handleDrop = function () {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      // When a folder is dropped into the backpack, upload all the items in the folder.
      const dragInfo = args[0];
      const folderItems = dragInfo && dragInfo.payload && dragInfo.payload.sa_folder_items;
      if (Array.isArray(folderItems)) {
        if (confirm(msg("confirm-backpack-folder"))) {
          this.sa_queuedItems = folderItems;
          this.sa_loadNextItem();
        }
        return;
      }
      return originalHandleDrop.call(this, ...args);
    };
    backpackInstance.handleDrop = Backpack.prototype.handleDrop.bind(backpackInstance);
  };

  // Backpack
  {
    const clickListener = e => {
      if (!e.target.closest('[class*="backpack_backpack-header_"]')) {
        return;
      }
      setTimeout(() => {
        const backpackContainer = document.querySelector("[class^='backpack_backpack-list_']");
        if (!backpackContainer) {
          return;
        }
        document.removeEventListener("click", clickListener);
        const backpackInstance = getBackpackFromElement(backpackContainer);
        verifyBackpack(backpackInstance);
        patchBackpack(backpackInstance);
      });
    };
    document.addEventListener("click", clickListener, true);
  }

  // Sprite list
  {
    const spriteSelectorItemElement = await addon.tab.waitForElement("[class^='sprite-selector_sprite-wrapper']", {
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    vm = addon.tab.traps.vm;
    reactInternalKey = Object.keys(spriteSelectorItemElement).find(i => i.startsWith(REACT_INTERNAL_PREFIX));
    const sortableHOCInstance = getSortableHOCFromElement(spriteSelectorItemElement);
    const spriteSelectorItemInstance = spriteSelectorItemElement[reactInternalKey].child.child.child.stateNode;
    verifySortableHOC(sortableHOCInstance);
    verifySpriteSelectorItem(spriteSelectorItemInstance);
    verifyVM(vm);
    patchSortableHOC(sortableHOCInstance.constructor, TYPE_SPRITES);
    patchSpriteSelectorItem(spriteSelectorItemInstance.constructor);
    sortableHOCInstance.saInitialSetup();
    patchVM();
  }

  // Costume and sound list
  {
    const selectorListItem = await addon.tab.waitForElement("[class*='selector_list-item']", {
      reduxCondition: state => state.scratchGui.editorTab.activeTabIndex !== 0 && !state.scratchGui.mode.isPlayerOnly
    });
    const sortableHOCInstance = getSortableHOCFromElement(selectorListItem);
    verifySortableHOC(sortableHOCInstance);
    patchSortableHOC(sortableHOCInstance.constructor, TYPE_ASSETS);
    sortableHOCInstance.saInitialSetup();
  }
});

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/move-to-top-bottom/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let addon = _ref.addon,
    console = _ref.console,
    msg = _ref.msg;
  const types = ["sound", "costume"];
  addon.tab.createEditorContextMenu(ctx => {
    const target = addon.tab.traps.vm.editingTarget;
    if (ctx.type === "sound") {
      target.reorderSound(ctx.index, 0);
    } else {
      target.reorderCostume(ctx.index, 0);
    }
    queueMicrotask(() => {
      addon.tab.traps.vm.emitTargetsUpdate();
      addon.tab.traps.vm.runtime.emitProjectChanged();
      ctx.target.click();
    });
  }, {
    types,
    position: "assetContextMenuAfterExport",
    order: 1,
    label: msg("top"),
    condition: ctx => ctx.index !== 0
  });
  addon.tab.createEditorContextMenu(ctx => {
    const target = addon.tab.traps.vm.editingTarget;
    if (ctx.type === "sound") {
      target.reorderSound(ctx.index, Infinity);
    } else {
      target.reorderCostume(ctx.index, Infinity);
    }
    queueMicrotask(() => {
      addon.tab.traps.vm.emitTargetsUpdate();
      addon.tab.traps.vm.runtime.emitProjectChanged();
      ctx.target.click();
    });
  }, {
    types,
    position: "assetContextMenuAfterExport",
    order: 2,
    label: msg("bottom"),
    condition: ctx => ctx.index !== ctx.target.parentNode.parentNode.childElementCount - 1
  });
});

/***/ }),

/***/ "./src/addons/addons/onion-skinning/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/onion-skinning/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/onion-skinning/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./decrement.svg */ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg");
/* harmony import */ var _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./increment.svg */ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg");
/* harmony import */ var _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./settings.svg */ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg");
/* harmony import */ var _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./toggle.svg */ "./node_modules/.pnpm/url-loader@4.1.1_file-loader@6.2.0_webpack@4.47.0__webpack@4.47.0/node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg");
/* generated by pull.js */






const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "decrement.svg": _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "increment.svg": _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "settings.svg": _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "toggle.svg": _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/addons/addons/onion-skinning/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/onion-skinning/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bilup_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bilup/scratch-svg-renderer */ "./node_modules/.pnpm/@bilup+scratch-svg-renderer@https+++codeload.github.com+Bilup+scratch-svg-renderer+tar.gz+cb4_av7ly5dzjlenxa6wjaho5gzk3a/node_modules/@bilup/scratch-svg-renderer/src/index.js");
/* harmony import */ var _bilup_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bilup_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console,
    msg = _ref.msg;
  const paper = await addon.tab.traps.getPaper();
  const paintEditorCanvasContainer = await addon.tab.waitForElement("[class^='paint-editor_canvas-container']");
  try {
    if (!("colorIndex" in addon.tab.redux.state.scratchPaint.fillMode)) {
      console.error("Detected new paint editor; this will be supported in future versions.");
      return;
    }
  } catch (_) {
    // The check can technically fail when Redux isn't supported (rare cases)
    // Just ignore in this case
  }
  const paperCanvas = paintEditorCanvasContainer[addon.tab.traps.getInternalKey(paintEditorCanvasContainer)].child.child.child.stateNode;
  const storedOnionLayers = [];
  const parseHexColor = color => {
    const hexString = color.substr(1);
    const hexNumber = parseInt(hexString, 16);
    return [hexNumber >> 16 & 0xff,
    // R
    hexNumber >> 8 & 0xff,
    // G
    hexNumber & 0xff // B
    ];
  };
  const settings = {
    enabled: addon.settings.get("default") && !addon.self.disabled,
    previous: +addon.settings.get("previous"),
    next: +addon.settings.get("next"),
    opacity: +addon.settings.get("opacity"),
    opacityStep: +addon.settings.get("opacityStep"),
    layering: addon.settings.get("layering"),
    mode: addon.settings.get("mode"),
    beforeTint: parseHexColor(addon.settings.get("beforeTint")),
    afterTint: parseHexColor(addon.settings.get("afterTint"))
  };
  const getPaperCenter = () => {
    const backgroundGuideLayer = paper.project.layers.find(i => i.data.isBackgroundGuideLayer);
    return backgroundGuideLayer.children[0].position;
  };
  const injectPaper = () => {
    // When background guide layer is added, show onion layers.
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L145
    const originalAddLayer = paper.Project.prototype.addLayer;
    paper.Project.prototype.addLayer = function (layer) {
      const result = originalAddLayer.call(this, layer);
      if (layer.data.isBackgroundGuideLayer) {
        let onion;
        while (onion = storedOnionLayers.shift()) {
          originalAddLayer.call(this, onion);
        }
        relayerOnionLayers();
      }
      return result;
    };

    // Scratch uses importJSON to undo or redo
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/undo.js#L37
    // The code prior to this will remove our onion layers, so we have to manually add them back.
    const originalImportJSON = paper.Project.prototype.importJSON;
    paper.Project.prototype.importJSON = function (json) {
      const result = originalImportJSON.call(this, json);
      if (settings.enabled) {
        updateOnionLayers();
      }
      return result;
    };

    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L114
    // When background guide layer is removed, hide onion layers.
    const originalRemoveLayer = paper.Layer.prototype.remove;
    paper.Layer.prototype.remove = function () {
      if (this.data.isBackgroundGuideLayer) {
        for (const layer of paper.project.layers) {
          if (layer.data.sa_isOnionLayer) {
            storedOnionLayers.push(layer);
          }
        }
        for (const layer of storedOnionLayers) {
          layer.remove();
        }
      }
      return originalRemoveLayer.call(this);
    };
  };
  const injectPaperCanvas = () => {
    let expectingImport = false;
    const PaperCanvas = paperCanvas.constructor;

    // importImage is called to start loading an image.
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L124
    const originalImportImage = PaperCanvas.prototype.importImage;
    PaperCanvas.prototype.importImage = function () {
      expectingImport = true;
      removeOnionLayers();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return originalImportImage.call(this, ...args);
    };

    // recalibrateSize is called when the canvas finishes loading an image.
    // all paths of importImage will result in a call to this method.
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L310-L327
    // We use this to know when to add layers.
    const originalRecalibrateSize = PaperCanvas.prototype.recalibrateSize;
    PaperCanvas.prototype.recalibrateSize = function (callback) {
      return originalRecalibrateSize.call(this, () => {
        if (callback) callback();
        if (expectingImport) {
          expectingImport = false;
          if (settings.enabled) {
            updateOnionLayers();
          }
        }
      });
    };

    // Prototype overrides will work for all future instances, but Scratch manually binds some methods to `this`
    // so we have to manually copy them for the current instance (but not future instances)
    paperCanvas.recalibrateSize = PaperCanvas.prototype.recalibrateSize.bind(paperCanvas);
    paperCanvas.importImage = PaperCanvas.prototype.importImage.bind(paperCanvas);
  };
  const createOnionLayer = () => {
    const layer = new paper.Layer();
    layer.locked = true;
    layer.guide = true;
    layer.data.sa_isOnionLayer = true;
    return layer;
  };

  // Each onion layer update is given an ID
  // Because updating layers is async, we need this to cancel all but the most recent update
  let globalUpdateId = 0;
  const cancelOngoingUpdatesAndGetNewId = () => ++globalUpdateId;
  const removeOnionLayers = () => {
    cancelOngoingUpdatesAndGetNewId();
    const project = paper.project;
    if (!project) {
      return;
    }
    storedOnionLayers.length = 0;
    const layers = project.layers;
    // Iterate downward because we remove items mid-iteration
    for (let i = layers.length - 1; i >= 0; i--) {
      const layer = layers[i];
      if (layer.data.sa_isOnionLayer) {
        layer.remove();
      }
    }
  };
  const relayerOnionLayers = () => {
    const project = paper.project;
    if (!project) {
      return;
    }
    const onionLayer = project.layers.find(i => i.data.sa_isOnionLayer);
    if (!onionLayer) {
      return;
    }
    if (settings.layering === "front") {
      project.addLayer(onionLayer);
    } else {
      const rasterLayer = project.layers.find(i => i.data.isRasterLayer);
      if (rasterLayer.index === 0) {
        project.insertLayer(0, onionLayer);
      } else {
        project.insertLayer(1, onionLayer);
      }
    }
  };
  const recursePaperItem = (item, callback) => {
    if (item.children) {
      for (const child of item.children) {
        recursePaperItem(child, callback);
      }
    }
    callback(item);
  };
  const getTint = (red, green, blue, isBefore) => {
    const referenceColor = isBefore ? settings.beforeTint : settings.afterTint;
    const colorAverage = (red + green + blue) / 3 / 255;
    const WEIGHT = 1.5;
    const weighted = colorAverage / WEIGHT + (1 - 1 / WEIGHT);
    return [referenceColor[0] * weighted, referenceColor[1] * weighted, referenceColor[2] * weighted];
  };
  const toHexColor = _ref2 => {
    let _ref3 = _slicedToArray(_ref2, 3),
      red = _ref3[0],
      green = _ref3[1],
      blue = _ref3[2];
    const r = Math.round(red).toString(16).padStart(2, "0");
    const g = Math.round(green).toString(16).padStart(2, "0");
    const b = Math.round(blue).toString(16).padStart(2, "0");
    return "#".concat(r).concat(g).concat(b);
  };
  const getPaperColorTint = (color, isBefore) => toHexColor(getTint(color.red * 255, color.green * 255, color.blue * 255, isBefore));
  const tintRaster = (raster, isBefore) => {
    const _raster$canvas = raster.canvas,
      width = _raster$canvas.width,
      height = _raster$canvas.height;
    const context = raster.context;
    // TODO: check to see if this is a performance issue
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4 /* RGBA */) {
      const red = data[i + 0];
      const green = data[i + 1];
      const blue = data[i + 2];
      const alpha = data[i + 3];
      if (alpha === 0) {
        continue;
      }
      const newTint = getTint(red, green, blue, isBefore);
      data[i + 0] = newTint[0];
      data[i + 1] = newTint[1];
      data[i + 2] = newTint[2];
    }
    context.putImageData(imageData, 0, 0);
  };
  const waitForAllRastersToLoad = root => {
    const promises = [];
    recursePaperItem(root, item => {
      if (item instanceof paper.Raster) {
        promises.push(new Promise((resolve, reject) => {
          item.on("load", () => resolve());
          item.on("error", () => reject(new Error("Raster inside SVG failed to load")));
        }));
      }
    });
    return Promise.all(promises);
  };
  const rasterizeVector = root => {
    const bounds = root.strokeBounds;
    const width = bounds.width,
      height = bounds.height;

    // Some browsers experience extremely poor performance when this value exceeds 3840.
    const MAX_SIZE = 3000;
    const maxScale = Math.min(MAX_SIZE / width, MAX_SIZE / height);
    const raster = new paper.Raster(new paper.Size(width, height));
    raster.remove();
    raster.smoothing = true;
    raster.guide = true;
    raster.locked = true;
    let renderedAtScale = 0;
    const originalDraw = raster.draw;
    raster.draw = function () {
      const displayedSize = this.getView().getZoom() * window.devicePixelRatio;
      const newScale = Math.max(1, Math.min(maxScale, 2 ** Math.ceil(Math.log2(displayedSize))));
      if (newScale > renderedAtScale) {
        renderedAtScale = newScale;
        const canvas = this.canvas;
        const ctx = this.context;

        // Based on https://github.com/scratchfoundation/paper.js/blob/16d5ff0267e3a0ef647c25e58182a27300afad20/src/item/Item.js#L1761
        const scaledWidth = width * newScale;
        const scaledHeight = height * newScale;
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
        this._size = new paper.Size(scaledWidth, scaledHeight);
        const topLeft = bounds.getTopLeft();
        const bottomRight = bounds.getBottomRight();
        const size = new paper.Size(bottomRight.subtract(topLeft));
        const matrix = new paper.Matrix().scale(newScale).translate(topLeft.negate());
        ctx.save();
        matrix.applyToContext(ctx);
        root.draw(ctx, new paper.Base({
          matrices: [matrix]
        }));
        ctx.restore();
        this.matrix.reset();
        this.transform(new paper.Matrix().translate(topLeft.add(size.divide(2))).scale(1 / newScale));
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return originalDraw.call(this, ...args);
    };
    return raster;
  };
  const makeVectorOnion = (opacity, costume, asset, isBefore) => new Promise((resolve, reject) => {
    asset = _bilup_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__["sanitizeSvg"].sanitizeSvgText(asset);
    const rotationCenterX = costume.rotationCenterX,
      rotationCenterY = costume.rotationCenterY;
    // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L196-L218
    asset = asset.split(/<\s*svg:/).join("<");
    asset = asset.split(/<\/\s*svg:/).join("</");
    const svgAttrs = asset.match(/<svg [^>]*>/);
    if (svgAttrs && svgAttrs[0].indexOf("xmlns=") === -1) {
      asset = asset.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
    }
    const parser = new DOMParser();
    const svgDom = parser.parseFromString(asset, "text/xml");
    const viewBox = svgDom.documentElement.attributes.viewBox ? svgDom.documentElement.attributes.viewBox.value.match(/\S+/g) : null;
    if (viewBox) {
      for (let i = 0; i < viewBox.length; i++) {
        viewBox[i] = parseFloat(viewBox[i]);
      }
    }
    const handleLoad = root => {
      root.opacity = opacity;

      // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L274-L275
      recursePaperItem(root, i => {
        if (i.className === "PathItem") {
          i.clockwise = true;
        }
        if (i.className !== "PointText" && !i.children) {
          if (i.strokeWidth) {
            i.strokeWidth = i.strokeWidth * 2;
          }
        }
        i.locked = true;
        i.guide = true;
      });
      root.scale(2, new paper.Point(0, 0));
      if (settings.mode === "tint") {
        const gradients = new Set();
        recursePaperItem(root, i => {
          if (i.strokeColor) {
            i.strokeColor = getPaperColorTint(i.strokeColor, isBefore);
          }
          if (i.fillColor) {
            const gradient = i.fillColor.gradient;
            if (gradient) {
              if (gradients.has(gradient)) return;
              gradients.add(gradient);
              for (const stop of gradient.stops) {
                stop.color = getPaperColorTint(stop.color, isBefore);
              }
            } else {
              i.fillColor = getPaperColorTint(i.fillColor, isBefore);
            }
          }
          if (i.canvas) {
            tintRaster(i, isBefore);
          }
        });
      }
      const paperCenter = getPaperCenter();
      // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L277-L287
      if (typeof rotationCenterX !== "undefined" && typeof rotationCenterY !== "undefined") {
        let rotationPoint = new paper.Point(rotationCenterX, rotationCenterY);
        if (viewBox && viewBox.length >= 2 && !isNaN(viewBox[0]) && !isNaN(viewBox[1])) {
          rotationPoint = rotationPoint.subtract(viewBox[0], viewBox[1]);
        }
        root.translate(paperCenter.subtract(rotationPoint.multiply(2)));
      } else {
        root.translate(paperCenter.subtract(root.bounds.width, root.bounds.height));
      }
      return rasterizeVector(root);
    };
    paper.project.importSVG(asset, {
      expandShapes: true,
      insert: false,
      onLoad: root => {
        if (!root) {
          reject(new Error("could not load onion skin"));
          return;
        }
        resolve(waitForAllRastersToLoad(root).then(() => handleLoad(root)));
      }
    });
  });
  const makeRasterOnion = (opacity, costume, asset, isBefore) => new Promise((resolve, reject) => {
    let rotationCenterX = costume.rotationCenterX,
      rotationCenterY = costume.rotationCenterY;
    const image = new Image();
    image.onload = () => {
      const paperCenter = getPaperCenter();
      const width = Math.min(paperCenter.x * 2, image.width);
      const height = Math.min(paperCenter.y * 2, image.height);

      // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L151-L156
      if (typeof rotationCenterX === "undefined") {
        rotationCenterX = width / 2;
      }
      if (typeof rotationCenterY === "undefined") {
        rotationCenterY = height / 2;
      }
      const raster = new paper.Raster(image);
      raster.opacity = opacity;
      raster.guide = true;
      raster.locked = true;
      const x = width / 2 + (paperCenter.x - rotationCenterX);
      const y = height / 2 + (paperCenter.y - rotationCenterY);
      raster.position = new paper.Point(x, y);
      raster.remove();
      if (settings.mode === "tint") {
        tintRaster(raster, isBefore);
      }
      resolve(raster);
    };
    image.onerror = () => {
      reject(new Error("could not load image"));
    };
    image.src = asset;
  });
  const getSelectedCostumeIndex = () => {
    const item = document.querySelector("[class*='selector_list-item'][class*='sprite-selector-item_is-selected']");
    if (!item) return -1;
    const numberEl = item.querySelector("[class*='sprite-selector-item_number']");
    if (!numberEl) return -1;
    return +numberEl.textContent - 1;
  };
  const updateOnionLayers = async () => {
    const project = paper.project;
    if (!project) {
      return;
    }
    const selectedCostumeIndex = getSelectedCostumeIndex();
    if (selectedCostumeIndex === -1) {
      return;
    }
    removeOnionLayers();
    const localUpdateId = cancelOngoingUpdatesAndGetNewId();
    const vm = addon.tab.traps.vm;
    if (!vm) {
      return;
    }
    const originalActiveLayer = project.activeLayer;
    const costumes = vm.editingTarget.sprite.costumes;
    const startIndex = Math.max(0, selectedCostumeIndex - settings.previous);
    const endIndex = Math.min(costumes.length - 1, selectedCostumeIndex + settings.next);
    try {
      const layersToCreate = [];
      for (let i = startIndex; i <= endIndex; i++) {
        if (i === selectedCostumeIndex) {
          continue;
        }
        const isBefore = i < selectedCostumeIndex;
        const distance = Math.abs(i - selectedCostumeIndex) - 1;
        const opacity = (settings.opacity - settings.opacityStep * distance) / 100;
        if (opacity <= 0) {
          continue;
        }
        layersToCreate.push({
          index: i,
          isBefore,
          opacity
        });
      }
      const onions = await Promise.all(layersToCreate.map(_ref4 => {
        let index = _ref4.index,
          isBefore = _ref4.isBefore,
          opacity = _ref4.opacity;
        const onionCostume = costumes[index];
        const onionAsset = vm.getCostume(index);
        if (onionCostume.dataFormat === "svg") {
          return makeVectorOnion(opacity, onionCostume, onionAsset, isBefore);
        } else if (onionCostume.dataFormat === "png" || onionCostume.dataFormat === "jpg") {
          return makeRasterOnion(opacity, onionCostume, onionAsset, isBefore);
        } else {
          throw new Error("Unknown data format: ".concat(onionCostume.dataFormat));
        }
      }));

      // Make sure we haven't been cancelled
      if (globalUpdateId === localUpdateId) {
        const layer = createOnionLayer();
        for (const item of onions) {
          layer.addChild(item);
        }
        relayerOnionLayers();
      }
    } catch (e) {
      console.error(e);
    }

    // We must make sure to always reset the active layer to avoid corruption.
    originalActiveLayer.activate();
  };
  const setEnabled = _enabled => {
    if (settings.enabled === _enabled) {
      return;
    }
    settings.enabled = _enabled;
    if (settings.enabled) {
      if (settings.next === 0 && settings.previous === 0) {
        settings.previous = 1;
        layerInputs.previous.value = settings.previous;
      }
      if (settings.opacity === 0) {
        settings.opacity = 25;
        layerInputs.opacity.value = settings.opacity;
      }
      updateOnionLayers();
    } else {
      removeOnionLayers();
    }
    toggleButton.dataset.enabled = settings.enabled;
  };

  //
  // Controls below editor
  //

  const settingsChanged = onlyRelayerNeeded => {
    if (settings.previous === 0 && settings.next === 0 || settings.opacity === 0) {
      setEnabled(false);
      return;
    }
    if (settings.enabled) {
      if (onlyRelayerNeeded) {
        relayerOnionLayers();
      } else {
        updateOnionLayers();
      }
    } else if (settings.previous > 0 || settings.next > 0) {
      setEnabled(true);
    }
  };
  const createGroup = () => {
    const el = document.createElement("div");
    el.className = "sa-onion-group";
    return el;
  };
  const createButton = function createButton() {
    let _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      useButtonTag = _ref5.useButtonTag;
    const el = document.createElement(useButtonTag ? "button" : "span");
    el.className = "sa-onion-button";
    el.setAttribute("role", "button");
    return el;
  };
  const createButtonImage = name => {
    const el = document.createElement("img");
    el.className = "sa-onion-image";
    el.draggable = false;
    el.dataset.image = name;
    el.loading = "lazy";
    el.src = addon.self.getResource("/" + name + ".svg") /* rewritten by pull.js */;
    return el;
  };
  const toggleControlsGroup = createGroup();
  addon.tab.displayNoneWhileDisabled(toggleControlsGroup, {
    display: "flex"
  });
  const toggleButton = createButton();
  toggleButton.dataset.enabled = settings.enabled;
  toggleButton.addEventListener("click", () => setEnabled(!settings.enabled));
  toggleButton.title = msg("toggle");
  toggleButton.appendChild(createButtonImage("toggle"));
  const settingButton = createButton();
  settingButton.addEventListener("click", () => setSettingsOpen(!areSettingsOpen()));
  settingButton.title = msg("settings");
  settingButton.appendChild(createButtonImage("settings"));
  document.body.addEventListener("click", e => {
    if (areSettingsOpen() && !e.target.matches(".sa-onion-group *")) setSettingsOpen(false);
  });

  //
  // Settings page
  //

  const settingPageWrapper = document.createElement("div");
  settingPageWrapper.className = "sa-onion-settings-wrapper";
  toggleControlsGroup.append(settingPageWrapper, toggleButton, settingButton);
  const settingsPage = document.createElement("div");
  settingsPage.className = "sa-onion-settings";
  const setSettingsOpen = open => {
    settingButton.dataset.enabled = open;
    settingsPage.dataset.visible = open;
  };
  const areSettingsOpen = () => settingsPage.dataset.visible === "true";
  const layerInputs = {};
  for (const type of ["previous", "next", "opacity", "opacityStep"]) {
    const container = document.createElement("label");
    container.className = "sa-onion-settings-line";
    const label = document.createElement("div");
    label.className = "sa-onion-settings-label";
    label.textContent = msg(type);
    container.appendChild(label);
    const group = createGroup();
    const currentButton = createButton();
    const filler = document.createElement("div");
    filler.style.width = "20px";
    currentButton.appendChild(filler);
    const currentInput = document.createElement("input");
    layerInputs[type] = currentInput;
    currentInput.className = "sa-onion-settings-input";
    currentInput.type = "number";
    currentInput.step = "1";
    currentInput.min = "0";
    currentInput.max = "100";
    currentInput.value = settings[type];
    currentInput.addEventListener("input", e => {
      if (currentInput.value.length === 0) {
        settings[type] = 0;
        settingsChanged();
        return;
      }
      let value = +currentInput.value;
      if (value > +currentInput.max) {
        value = +currentInput.max;
      } else if (value < 0) {
        value = 0;
      }
      currentInput.value = value;
      settings[type] = value;
      settingsChanged();
    });
    currentInput.addEventListener("blur", () => {
      if (!currentInput.value) {
        currentInput.value = "0";
      }
    });
    currentButton.appendChild(currentInput);
    const decrementButton = createButton();
    decrementButton.appendChild(createButtonImage("decrement"));
    decrementButton.addEventListener("click", () => {
      if (settings[type] > 0) {
        settings[type]--;
        currentInput.value = settings[type];
        settingsChanged();
      }
    });
    const incrementButton = createButton();
    incrementButton.appendChild(createButtonImage("increment"));
    incrementButton.addEventListener("click", () => {
      if (settings[type] < +currentInput.max) {
        settings[type]++;
        currentInput.value = settings[type];
        settingsChanged();
      }
    });
    group.appendChild(decrementButton);
    group.appendChild(currentButton);
    group.appendChild(incrementButton);
    container.appendChild(group);
    settingsPage.appendChild(container);
  }
  const modeContainer = document.createElement("div");
  modeContainer.className = "sa-onion-settings-line";
  const modeLabel = document.createElement("div");
  modeLabel.className = "sa-onion-settings-label";
  modeLabel.textContent = msg("mode");
  const modeGroup = createGroup();
  modeContainer.appendChild(modeLabel);
  const modeMergeButton = createButton({
    useButtonTag: true
  });
  modeMergeButton.appendChild(document.createTextNode(msg("merge")));
  modeGroup.appendChild(modeMergeButton);
  modeMergeButton.addEventListener("click", e => {
    settings.mode = "merge";
    modeTintButton.dataset.enabled = false;
    modeMergeButton.dataset.enabled = true;
    settingsChanged();
  });
  modeMergeButton.dataset.enabled = settings.mode === "merge";
  const modeTintButton = createButton({
    useButtonTag: true
  });
  modeTintButton.appendChild(document.createTextNode(msg("tint")));
  modeGroup.appendChild(modeTintButton);
  modeTintButton.addEventListener("click", e => {
    settings.mode = "tint";
    modeTintButton.dataset.enabled = true;
    modeMergeButton.dataset.enabled = false;
    settingsChanged();
  });
  modeTintButton.dataset.enabled = settings.mode === "tint";
  modeContainer.appendChild(modeGroup);
  settingsPage.appendChild(modeContainer);
  const layeringContainer = document.createElement("div");
  layeringContainer.className = "sa-onion-settings-line";
  const layeringLabel = document.createElement("div");
  layeringLabel.className = "sa-onion-settings-label";
  layeringLabel.textContent = msg("layering");
  const layeringGroup = createGroup();
  layeringContainer.appendChild(layeringLabel);
  const layeringFrontButton = createButton({
    useButtonTag: true
  });
  layeringFrontButton.appendChild(document.createTextNode(msg("front")));
  layeringGroup.appendChild(layeringFrontButton);
  layeringFrontButton.addEventListener("click", e => {
    settings.layering = "front";
    layeringBehindButton.dataset.enabled = false;
    layeringFrontButton.dataset.enabled = true;
    settingsChanged(true);
  });
  layeringFrontButton.dataset.enabled = settings.layering === "front";
  const layeringBehindButton = createButton({
    useButtonTag: true
  });
  layeringBehindButton.appendChild(document.createTextNode(msg("behind")));
  layeringGroup.appendChild(layeringBehindButton);
  layeringBehindButton.addEventListener("click", e => {
    settings.layering = "behind";
    layeringBehindButton.dataset.enabled = true;
    layeringFrontButton.dataset.enabled = false;
    settingsChanged(true);
  });
  layeringBehindButton.dataset.enabled = settings.layering === "behind";
  layeringContainer.appendChild(layeringGroup);
  settingsPage.appendChild(layeringContainer);
  const SVG_NS = "http://www.w3.org/2000/svg";
  const settingsTip = document.createElementNS(SVG_NS, "svg");
  settingsTip.setAttribute("class", "sa-onion-settings-tip");
  settingsTip.setAttribute("width", "14");
  settingsTip.setAttribute("height", "7");
  const settingsTipShape = document.createElementNS(SVG_NS, "polygon");
  settingsTipShape.setAttribute("class", "sa-onion-settings-polygon");
  settingsTipShape.setAttribute("points", "0,0 7,7, 14,0");
  settingsTip.appendChild(settingsTipShape);
  settingsPage.appendChild(settingsTip);
  let oldEnabled = null;
  addon.self.addEventListener("disabled", () => {
    setSettingsOpen(false);
    oldEnabled = settings.enabled;
    setEnabled(false);
  });
  addon.self.addEventListener("reenabled", () => {
    setEnabled(oldEnabled);
  });
  const controlsLoop = async () => {
    let hasRunOnce = false;
    while (true) {
      const canvasControls = await addon.tab.waitForElement("[class^='paint-editor_canvas-controls']", {
        markAsSeen: true,
        reduxEvents: ["scratch-gui/navigation/ACTIVATE_TAB", "scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/targets/UPDATE_TARGET_LIST"],
        reduxCondition: state => state.scratchGui.editorTab.activeTabIndex === 1 && !state.scratchGui.mode.isPlayerOnly
      });
      const zoomControlsContainer = canvasControls.querySelector("[class^='paint-editor_zoom-controls']");
      addon.tab.appendToSharedSpace({
        space: "paintEditorZoomControls",
        element: toggleControlsGroup,
        order: 1
      });
      settingPageWrapper.appendChild(settingsPage);
      if (!hasRunOnce) {
        hasRunOnce = true;
        const groupClass = zoomControlsContainer.firstChild.className;
        const buttonClass = zoomControlsContainer.firstChild.firstChild.className;
        const imageClass = zoomControlsContainer.firstChild.firstChild.firstChild.className;
        for (const el of document.querySelectorAll(".sa-onion-group")) {
          el.className += " " + groupClass;
        }
        for (const el of document.querySelectorAll(".sa-onion-button")) {
          el.className += " " + buttonClass;
        }
        for (const el of document.querySelectorAll(".sa-onion-image")) {
          el.className += " " + imageClass;
        }
      }
      if (settings.enabled) {
        updateOnionLayers();
      }
    }
  };
  injectPaper();
  injectPaperCanvas();
  controlsLoop();
});

/***/ }),

/***/ "./src/addons/addons/paint-skew/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/paint-skew/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-skew/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-skew/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/paint-skew/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paint-snap/compatibility.js */ "./src/addons/addons/paint-snap/compatibility.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon;
  const paper = await addon.tab.traps.getPaper();
  const addSkew = function addSkew() {
    var _paper$tool$boundingB, _paper$tool$boundingB2;
    if (!paper.tool || !paper.tool.boundingBoxTool) return;
    // ScaleTool
    const ST = (_paper$tool$boundingB = paper.tool.boundingBoxTool._modeMap) === null || _paper$tool$boundingB === void 0 ? void 0 : (_paper$tool$boundingB2 = _paper$tool$boundingB.SCALE) === null || _paper$tool$boundingB2 === void 0 ? void 0 : _paper$tool$boundingB2.constructor;
    if (!ST || ST.hasSkew) {
      return;
    }
    ST.hasSkew = true;
    const ogMouseDown = ST.prototype.onMouseDown;
    ST.prototype.onMouseDown = function (hitResult, boundsPath, selectedItems) {
      if (this.active) return;
      this.index = hitResult.item.data.index;
      ogMouseDown.call(this, hitResult, boundsPath, selectedItems);
      this.skewCenter = false;
      this.lastSkx = 0;
      this.lastSky = 0;
      this.skewBounds = this.itemGroup.bounds.clone();
    };
    _paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__["addons"].paintSkew = function (event, original) {
      if (!this.active) return;
      if (addon.self.disabled) return original();
      const bounds = this.skewBounds;
      const doShear = (skx, sky) => {
        if (skx === 0 && sky === 0) return;
        let offcenterPosition;
        if (!this.skewCenter) {
          switch (this._getRectCornerNameByIndex(this.index)) {
            case "topCenter":
            case "leftCenter":
              offcenterPosition = this.itemGroup.position.add(new paper.Point(bounds.width / 2, bounds.height / 2));
              break;
            case "bottomCenter":
            case "rightCenter":
              offcenterPosition = this.itemGroup.position.subtract(new paper.Point(bounds.width / 2, bounds.height / 2));
              break;
          }
        }
        const position = this.skewCenter ? this.itemGroup.position : offcenterPosition;
        const shearMult = this.skewCenter ? 2 : 1;
        // swap width and height because apparently
        // shearing is based on the dimension perpendicular
        // to the one that is being skewed
        const shearX = skx / bounds.height * shearMult;
        const shearY = sky / bounds.width * shearMult;
        this.itemGroup.shear(shearX, shearY, position);
        if (this.selectionAnchor) {
          this.selectionAnchor.shear(-shearX, -shearY);
        }
      };

      // Revert skew
      doShear(-this.lastSkx, -this.lastSky);
      this.skewCenter = event.modifiers.alt;
      let skx = 0;
      let sky = 0;
      this.lastSkx = 0;
      this.lastSky = 0;
      if ((event.modifiers.control || event.modifiers.command) && !this.isCorner) {
        // Skew
        // Reset position
        this.centered = false;
        this.itemGroup.scale(1 / this.lastSx, 1 / this.lastSy, this.pivot);
        if (this.selectionAnchor) {
          this.selectionAnchor.scale(this.lastSx, this.lastSy);
        }
        this.lastSx = 1;
        this.lastSy = 1;
        const delta = event.point.subtract(this.pivot);
        switch (this._getRectCornerNameByIndex(this.index)) {
          case "topCenter":
            delta.x *= -1;
            delta.y = 0;
            break;
          case "bottomCenter":
            delta.y = 0;
            break;
          case "leftCenter":
            delta.y *= -1;
            delta.x = 0;
            break;
          case "rightCenter":
            delta.x = 0;
            break;
          default:
            delta.x = 0;
            delta.y = 0;
        }
        skx = delta.x;
        sky = delta.y;
        doShear(skx, sky);
      } else {
        // Scale
        original();
      }
      this.lastSkx = skx;
      this.lastSky = sky;
    };
    Object(_paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__["initialize"])(paper, ST);
  };
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    const action = e.detail.action;
    if (action.type === "scratch-paint/modes/CHANGE_MODE" && (action.mode === "BIT_SELECT" || action.mode === "SELECT")) {
      addSkew();
    }
  });
  addSkew();
});

/***/ }),

/***/ "./src/addons/addons/paint-snap/compatibility.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/paint-snap/compatibility.js ***!
  \*******************************************************/
/*! exports provided: addons, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addons", function() { return addons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
let overridden = false;
const addons = {
  paintSkew: null,
  paintSnap: null
};
function initialize(paper, ScaleTool) {
  if (overridden) return;
  overridden = true;
  const ogMouseDrag = ScaleTool.prototype.onMouseDrag;
  ScaleTool.prototype.onMouseDrag = function (event) {
    if (!this.active) return;
    const callSnap = () => {
      if (addons.paintSnap) addons.paintSnap.call(this, event);else ogMouseDrag.call(this, event);
    };
    if (addons.paintSkew) {
      addons.paintSkew.call(this, event, callSnap);
    } else {
      callSnap();
    }
  };
}

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/_runtime_entry.js":
/*!********************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/_runtime_entry.js ***!
  \********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/pick-colors-from-stage/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/userscript.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/userscript.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    msg = _ref.msg,
    console = _ref.console;
  const brand = Symbol();
  const setIsPicking = picking => document.body.classList.toggle("sa-stage-color-picker-picking", picking);

  // We only want to handle color picker events from the user clicking on the button, not from
  // addons or other scripts pressing it with click().
  let isMostRecentClickUserInitiated = false;
  document.addEventListener("click", e => {
    isMostRecentClickUserInitiated = e.isTrusted;
  }, {
    capture: true
  });
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    const action = e.detail.action;

    // Do not process events emitted by ourselves.
    if (action[brand]) {
      return;
    }
    if (!addon.self.disabled && isMostRecentClickUserInitiated && action.type === "scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER") {
      setIsPicking(true);

      // When scratch-paint's color picker is activated, also activate scratch-gui's color picker.
      addon.tab.redux.dispatch({
        type: "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER",
        callback: color => {
          // callback is called from reducer; do not dispatch events in reducer
          queueMicrotask(() => {
            // By the time we get here, scratch-paint will have already deactivated its eye dropper.
            // If we were to just call the callback, the color would indeed update, but the sliders
            // in the color selector would not update.
            // https://github.com/scratchfoundation/scratch-paint/blob/970b72c3e75d0ad44ab54e403a44786ca5f45512/src/containers/color-picker.jsx#L64
            // To work around this, we will re-enable the color picker before running the callback.
            addon.tab.redux.dispatch(_objectSpread(_objectSpread({}, action), {}, {
              [brand]: true
            }));
            action.callback(color);
            if (action.previousMode) {
              action.previousMode.activate();
            }
            addon.tab.redux.dispatch({
              type: "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER",
              [brand]: true
            });
            setIsPicking(false);
          });
        }
      });
    }

    // Don't check for addon being disabled here in case we were dynamically disabled while color
    // picking. This code won't do anything anyways when the previous code doesn't run.
    if (action.type === "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER") {
      setIsPicking(false);

      // When someone selects a color in the scratch-paint picker, cancel the scratch-gui picker
      if (addon.tab.redux.state.scratchGui.colorPicker.active) {
        addon.tab.redux.dispatch({
          type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
          [brand]: true
        });
      }
    }
  });
});

/***/ }),

/***/ "./src/addons/addons/rename-broadcasts/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/rename-broadcasts/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/rename-broadcasts/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/rename-broadcasts/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/rename-broadcasts/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    msg = _ref.msg,
    console = _ref.console;
  const vm = addon.tab.traps.vm;
  const Blockly = await addon.tab.traps.getBlockly();

  // editor-searchable-dropdowns relies on this value
  const RENAME_BROADCAST_MESSAGE_ID = "RENAME_BROADCAST_MESSAGE_ID";
  const BROADCAST_MESSAGE_TYPE = Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE;
  const _dropdownCreate = Blockly.FieldVariable.dropdownCreate;
  Blockly.FieldVariable.dropdownCreate = function () {
    const options = _dropdownCreate.call(this);
    if (!addon.self.disabled && this.defaultType_ === BROADCAST_MESSAGE_TYPE &&
    // Disable when workspace has no actual broadcast to rename
    this.sourceBlock_.workspace.getVariableTypes().includes("broadcast_msg")) {
      options.push([msg("RENAME_BROADCAST"), RENAME_BROADCAST_MESSAGE_ID]);
    }
    return options;
  };
  const _onItemSelected = Blockly.FieldVariable.prototype.onItemSelected;
  Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
    const workspace = this.sourceBlock_.workspace;
    if (this.sourceBlock_ && workspace) {
      if (menuItem.getValue() === RENAME_BROADCAST_MESSAGE_ID) {
        promptRenameBroadcast(workspace, this.variable_);
        return;
      }
    }
    return _onItemSelected.call(this, menu, menuItem);
  };
  const resetVMCaches = () => {
    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));
    for (const blocks of blockContainers) {
      blocks.resetCache();
    }
  };
  const addUndoRedoHook = callback => {
    const eventQueue = Blockly.Events.FIRE_QUEUE_;
    // After a rename is emitted, some unrelated garbage events also get emitted
    // So we should trap the first event
    const undoItem = eventQueue[0];
    const originalRun = undoItem.run;
    undoItem.run = function (isRedo) {
      originalRun.call(this, isRedo);
      callback(isRedo);
    };
  };
  const renameBroadcastInVM = (id, newName) => {
    // Editor's rename won't completely rename the variable.
    const vmVariable = vm.runtime.getTargetForStage().variables[id];
    vmVariable.name = newName;
    vmVariable.value = newName;

    // Update all references to the broadcast. Broadcasts won't work if these
    // don't match.
    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));
    for (const blockContainer of blockContainers) {
      for (const block of Object.values(blockContainer._blocks)) {
        const broadcastOption = block.fields && block.fields.BROADCAST_OPTION;
        if (broadcastOption && broadcastOption.id === id) {
          broadcastOption.value = newName;
        }
      }
    }
    resetVMCaches();
  };
  const renameBroadcast = (workspace, id, oldName, newName) => {
    // Rename in editor. Undo/redo will work automatically.
    workspace.renameVariableById(id, newName);

    // Rename in VM. Need to manually implement undo/redo.
    renameBroadcastInVM(id, newName);
    addUndoRedoHook(isRedo => {
      if (isRedo) {
        renameBroadcastInVM(id, newName);
      } else {
        renameBroadcastInVM(id, oldName);
      }
    });
  };
  const mergeBroadcast = (workspace, oldId, oldName, newName) => {
    const newVmVariable = vm.runtime.getTargetForStage().lookupBroadcastByInputValue(newName);
    const newId = newVmVariable.id;

    // Merge in editor. Undo/redo will work automatically for this.
    // Use group so that everything here is undone/redone at the same time.
    Blockly.Events.setGroup(true);
    // Blocks in scripts that are not rendered reference the broadcast too.
    if (workspace.materializeAllScripts) workspace.materializeAllScripts();
    for (const block of workspace.getAllBlocks()) {
      for (const input of block.inputList) {
        for (const field of input.fieldRow) {
          if (field.name === "BROADCAST_OPTION" && field.getValue() === oldId) {
            field.setValue(newId);
          }
        }
      }
    }
    // Remove the broadcast from the editor so it doesn't appear in dropdowns.
    // Undo/redo will work automatically for this.
    workspace.deleteVariableById(oldId);
    Blockly.Events.setGroup(false);

    // Merge in VM to update sprites that aren't open. Need to manually implement undo/redo.
    // To figure out how to undo this operation, we first figure out which blocks we're
    // going to touch and keep hold of that list.
    const vmBlocksToUpdate = [];
    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));
    for (const blockContainer of blockContainers) {
      for (const block of Object.values(blockContainer._blocks)) {
        const broadcastOption = block.fields && block.fields.BROADCAST_OPTION;
        if (broadcastOption && broadcastOption.id === oldId) {
          vmBlocksToUpdate.push(block);
        }
      }
    }
    const applyVmEdits = isRedo => {
      const idToReplaceWith = isRedo ? newId : oldId;
      const nameToReplaceWith = isRedo ? newName : oldName;
      for (const block of vmBlocksToUpdate) {
        const broadcastOption = block.fields.BROADCAST_OPTION;
        broadcastOption.id = idToReplaceWith;
        broadcastOption.value = nameToReplaceWith;
      }
      resetVMCaches();
    };
    applyVmEdits(true);

    // Earlier editor updates are guaranteed to generate at least 1 event that we can hook as the
    // broadcast block must exist in the editor for the user to rename it.
    addUndoRedoHook(isRedo => {
      applyVmEdits(isRedo);
    });
  };
  const promptRenameBroadcast = (workspace, variable) => {
    const modalTitle = msg("RENAME_BROADCAST_MODAL_TITLE");
    const oldName = variable.name;
    const id = variable.getId();
    const promptText = msg("RENAME_BROADCAST_TITLE", {
      name: oldName
    });
    const promptDefaultText = oldName;
    Blockly.prompt(promptText, promptDefaultText, function (newName) {
      newName = Blockly.Variables.trimName_(newName);
      const nameIsEmpty = !newName;
      if (nameIsEmpty) {
        return;
      }
      const variableAlreadyExists = !!workspace.getVariable(newName, BROADCAST_MESSAGE_TYPE);
      if (variableAlreadyExists) {
        mergeBroadcast(workspace, id, oldName, newName);
      } else {
        renameBroadcast(workspace, id, oldName, newName);
      }
    }, modalTitle, BROADCAST_MESSAGE_TYPE);
  };
  const updateExistingMenuGenerators = () => {
    const workspace = Blockly.getMainWorkspace();
    const flyout = workspace && workspace.getFlyout();
    if (workspace && flyout) {
      const allBlocks = [...workspace.getAllBlocks(), ...flyout.getWorkspace().getAllBlocks()];
      for (const block of allBlocks) {
        for (const input of block.inputList) {
          for (const field of input.fieldRow) {
            if (field instanceof Blockly.FieldVariable) {
              field.menuGenerator_ = Blockly.FieldVariable.dropdownCreate;
            }
          }
        }
      }
    }
  };
  updateExistingMenuGenerators();
});

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/reorder-custom-inputs/userscript.js");
/* harmony import */ var _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./arrows.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/reorder-custom-inputs/arrows.css");
/* harmony import */ var _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "arrows.css": _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/modified-funcs.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/modified-funcs.js ***!
  \*******************************************************************/
/*! exports provided: modifiedCreateAllInputs, modifiedUpdateDeclarationProcCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedCreateAllInputs", function() { return modifiedCreateAllInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedUpdateDeclarationProcCode", function() { return modifiedUpdateDeclarationProcCode; });
// https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L205
function modifiedCreateAllInputs(connectionMap) {
  // Split the proc into components, by %n, %b, %s and %l (ignoring escaped).
  var procComponents = this.procCode_.split(/(?=[^\\]%[nbsl])/);
  procComponents = procComponents.map(function (c) {
    return c.trim(); // Strip whitespace.
  });

  // Create arguments and labels as appropriate.
  var argumentCount = 0;
  for (var i = 0, component; component = procComponents[i]; i++) {
    var labelText;
    // Don't treat %l as an argument
    if (component.substring(0, 1) == "%" && component.substring(1, 2) !== "l") {
      var argumentType = component.substring(1, 2);
      if (!(argumentType == "n" || argumentType == "b" || argumentType == "s")) {
        throw new Error("Found an custom procedure with an invalid type: " + argumentType);
      }
      labelText = component.substring(2).trim();
      var id = this.argumentIds_[argumentCount];
      var input = this.appendValueInput(id);
      if (argumentType == "b") {
        input.setCheck("Boolean");
      }
      this.populateArgument_(argumentType, argumentCount, connectionMap, id, input);
      argumentCount++;
    } else {
      labelText = component == "%l" ? " " : component.replace("%l", "").trim();
    }
    this.addProcedureLabel_(labelText.replace(/\\%/, "%"));
  }

  // remove all traces of %l at the earliest possible time
  this.procCode_ = this.procCode_.replace(/%l /g, "");
}

//https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L565
function modifiedUpdateDeclarationProcCode() {
  let prefixLabels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  this.procCode_ = "";
  this.displayNames_ = [];
  this.argumentIds_ = [];
  for (var i = 0; i < this.inputList.length; i++) {
    if (i != 0) {
      this.procCode_ += " ";
    }
    var input = this.inputList[i];
    if (input.type == 5) {
      // replaced Blocky.DUMMY_VALUE with 5
      this.procCode_ += (prefixLabels ? "%l " : "") + input.fieldRow[0].getValue(); // modified to prepend %l delimiter, which prevents label merging
    } else if (input.type == 1) {
      // replaced Blocky.INPUT_VALUE with 1
      // Inspect the argument editor.
      var target = input.connection.targetBlock();
      this.displayNames_.push(target.getFieldValue("TEXT"));
      this.argumentIds_.push(input.name);
      if (target.type == "argument_editor_boolean") {
        this.procCode_ += "%b";
      } else {
        this.procCode_ += "%s";
      }
    } else {
      throw new Error("Unexpected input type on a procedure mutator root: " + input.type);
    }
  }
}

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modified-funcs.js */ "./src/addons/addons/reorder-custom-inputs/modified-funcs.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    console = _ref.console;
  function createArrow(direction, callback) {
    const path = direction === "left" ? "M 17 13 L 9 21 L 17 30" : "M 9 13 L 17 21 L 9 30";
    Blockly.WidgetDiv.DIV.insertAdjacentHTML("beforeend", "\n            <svg width=\"20px\" height=\"40px\" \n                 style=\"left: ".concat(direction === "left" ? "calc(50% - 20px)" : "calc(50% + 20px)", "\" \n                 class=\"blocklyTextShiftArrow\">\n                <path d=\"").concat(path, "\" fill=\"none\" stroke=\"#FF661A\" stroke-width=\"2\"></path>\n            </svg>"));
    Blockly.WidgetDiv.DIV.lastChild.addEventListener("click", callback);
  }

  //https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L674
  function modifiedRemoveFieldCallback(field) {
    // Do not delete if there is only one input
    if (this.inputList.length === 1) {
      return;
    }
    var inputNameToRemove = null;
    for (var n = 0; n < this.inputList.length; n++) {
      var input = this.inputList[n];
      if (input.connection) {
        var target = input.connection.targetBlock();
        if (target.getField(field.name) == field) {
          inputNameToRemove = input.name;
        }
      } else {
        for (var j = 0; j < input.fieldRow.length; j++) {
          if (input.fieldRow[j] == field) {
            inputNameToRemove = input.name;
          }
        }
      }
    }
    if (inputNameToRemove) {
      Blockly.WidgetDiv.hide(true);
      this.removeInput(inputNameToRemove);
      this.onChangeFn(true); // this is the only part we changed. We added this boolean input, which lets us switch on the merging.
      this.updateDisplay_();
    }
  }
  function addInputAfter(addInputFn, fnName) {
    return function () {
      var _selectedField;
      const sourceBlock = (_selectedField = selectedField) === null || _selectedField === void 0 ? void 0 : _selectedField.sourceBlock_;
      const proc = sourceBlock ? sourceBlock.parentBlock_ ? sourceBlock.parentBlock_ : sourceBlock : this;

      // if a label is added, scratch's code will directly append the label text to the procCode
      // We account for this with a hacky method of adding the delimiter at the end of the last label input
      if (fnName === "addLabelExternal") {
        const lastInput = proc.inputList[proc.inputList.length - 1];
        if (lastInput.type === Blockly.DUMMY_INPUT) {
          lastInput.fieldRow[0].setValue(lastInput.fieldRow[0].getValue() + " %l");
        }
      }
      proc.onChangeFn(true);
      if (sourceBlock === null || sourceBlock === undefined || !addon.settings.get("InsertInputsAfter")) return addInputFn.call(this, ...arguments);
      let newPosition = getFieldInputNameAndIndex(selectedField, proc.inputList).index + 1;
      addInputFn.call(proc, ...arguments);
      const lastInputName = proc.inputList[proc.inputList.length - 1].name;
      shiftInput(proc, lastInputName, newPosition);
    };
  }
  function getFieldInputNameAndIndex(field, inputList) {
    for (const _ref2 of inputList.entries()) {
      var _input$connection$tar;
      var _ref3 = _slicedToArray(_ref2, 2);
      const i = _ref3[0];
      const input = _ref3[1];
      const isTargetField = input.connection ? ((_input$connection$tar = input.connection.targetBlock()) === null || _input$connection$tar === void 0 ? void 0 : _input$connection$tar.getField(field.name)) === field : input.fieldRow.includes(field);
      if (isTargetField) {
        return {
          name: input.name,
          index: i
        };
      }
    }
  }
  function shiftInput(procedureBlock, inputNameToShift, newPosition) {
    const initialInputListLength = procedureBlock.inputList.length;

    // return if inputNameToShift and newPosition are not valid
    if (!(inputNameToShift && newPosition >= 0 && newPosition <= initialInputListLength)) {
      return false;
    }
    const originalPosition = procedureBlock.inputList.findIndex(input => input.name === inputNameToShift);
    const itemToMove = procedureBlock.inputList.splice(originalPosition, 1)[0];
    procedureBlock.inputList.splice(newPosition, 0, itemToMove);
    Blockly.Events.disable();
    try {
      procedureBlock.onChangeFn(true);
      procedureBlock.updateDisplay_();
    } finally {
      Blockly.Events.enable();
    }
    focusOnInput(procedureBlock.inputList[newPosition]);
  }
  function focusOnInput(input) {
    if (!input) return;
    if (input.type === Blockly.DUMMY_INPUT) {
      input.fieldRow[0].showEditor_();
    } else if (input.type === Blockly.INPUT_VALUE) {
      const target = input.connection.targetBlock();
      target.getField("TEXT").showEditor_();
    }
  }
  function shiftFieldCallback(sourceBlock, field, direction) {
    const proc = sourceBlock.parentBlock_ ? sourceBlock.parentBlock_ : sourceBlock;

    // if inputList length is 1 there's nowhere to shift the input so we can simply return
    if (proc.inputList.length <= 1) return;
    const _getFieldInputNameAnd = getFieldInputNameAndIndex(field, proc.inputList),
      name = _getFieldInputNameAnd.name,
      index = _getFieldInputNameAnd.index;
    const newPosition = direction === "left" ? index - 1 : index + 1;
    shiftInput(proc, name, newPosition);
  }
  function polluteProcedureDeclaration(procedureDeclaration) {
    let save_original = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    procedureDeclaration.createAllInputs_ = _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__["modifiedCreateAllInputs"];
    procedureDeclaration.onChangeFn = _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__["modifiedUpdateDeclarationProcCode"];
    procedureDeclaration.removeFieldCallback = modifiedRemoveFieldCallback;
    for (const inputFn of ["addLabelExternal", "addBooleanExternal", "addStringNumberExternal"]) {
      if (save_original) {
        originalAddFns[inputFn] = procedureDeclaration[inputFn];
      }
      procedureDeclaration[inputFn] = addInputAfter(procedureDeclaration[inputFn], inputFn);
    }
  }
  function depolluteProcedureDeclaration(procedureDeclaration) {
    procedureDeclaration.createAllInputs_ = originalCreateAllInputs;
    procedureDeclaration.onChangeFn = originalUpdateDeclarationProcCode;
    procedureDeclaration.removeFieldCallback = originalRemoveFieldCallback;
    for (const _ref4 of Object.entries(originalAddFns)) {
      var _ref5 = _slicedToArray(_ref4, 2);
      const inputFnName = _ref5[0];
      const originalFn = _ref5[1];
      procedureDeclaration[inputFnName] = originalFn;
    }
  }
  function getExistingProceduresDeclarationBlock() {
    // Blockly.getMainWorkspace is required for this to work.
    // for future reference "upgrading" to addon.tab.traps.getWorkspace() will cause bugs.
    return Blockly.getMainWorkspace().getAllBlocks().find(block => block.type === "procedures_declaration");
  }
  function enableAddon() {
    // pollute the procedures_declaration prototype with a modified version that prevents merging, and allows inserting after
    polluteProcedureDeclaration(Blockly.Blocks["procedures_declaration"]);

    // if custom procedures modal is already open we also directly pollute the existing procedures_declaration block
    if (addon.tab.redux.state.scratchGui.customProcedures.active) {
      polluteProcedureDeclaration(getExistingProceduresDeclarationBlock(), false);
    }
    Blockly.FieldTextInputRemovable.prototype.showEditor_ = function () {
      originalShowEditor.call(this);
      createArrow("left", () => shiftFieldCallback(this.sourceBlock_, this, "left"));
      createArrow("right", () => shiftFieldCallback(this.sourceBlock_, this, "right"));
      selectedField = this;
    };
  }
  function disableAddon() {
    // depollute the procedures_declaration prototype
    depolluteProcedureDeclaration(Blockly.Blocks["procedures_declaration"]);

    // if custom procedures modal is already open we also directly depollute the existing procedures_declaration block
    if (addon.tab.redux.state.scratchGui.customProcedures.active) {
      depolluteProcedureDeclaration(getExistingProceduresDeclarationBlock());
    }
    Blockly.FieldTextInputRemovable.prototype.showEditor_ = originalShowEditor;
    Blockly.WidgetDiv.DIV.querySelectorAll(".blocklyTextShiftArrow").forEach(e => e.remove());
  }
  const Blockly = await addon.tab.traps.getBlockly();
  const originalCreateAllInputs = Blockly.Blocks["procedures_declaration"].createAllInputs_;
  const originalUpdateDeclarationProcCode = Blockly.Blocks["procedures_declaration"].onChangeFn;
  const originalRemoveFieldCallback = Blockly.Blocks["procedures_declaration"].removeFieldCallback;
  const originalShowEditor = Blockly.FieldTextInputRemovable.prototype.showEditor_;
  let originalAddFns = {};
  let selectedField = null;
  addon.self.addEventListener("disabled", disableAddon);
  addon.self.addEventListener("reenabled", enableAddon);
  enableAddon();
});

/***/ }),

/***/ "./src/addons/libraries/common/cs/normalize-color.js":
/*!***********************************************************!*\
  !*** ./src/addons/libraries/common/cs/normalize-color.js ***!
  \***********************************************************/
/*! exports provided: getHexRegex, normalizeHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHexRegex", function() { return getHexRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
const getHexRegex = () => /^#?[0-9a-fA-F]{3,8}$/;
const normalizeHex = input => {
  let hex = String(input);
  if (!getHexRegex().test(hex)) return "#000000";
  if (!hex.startsWith("#")) hex = "#".concat(hex);
  if (hex.length === 4) {
    const _hex = hex,
      _hex2 = _slicedToArray(_hex, 4),
      _ = _hex2[0],
      r = _hex2[1],
      g = _hex2[2],
      b = _hex2[3];
    hex = "#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
  }
  return hex.toLowerCase();
};

/***/ }),

/***/ "./src/addons/libraries/common/cs/rate-limiter.js":
/*!********************************************************!*\
  !*** ./src/addons/libraries/common/cs/rate-limiter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RateLimiter; });
class RateLimiter {
  constructor(wait) {
    this.timeout = null;
    this.callback = null;
    this.wait = wait;
  }
  abort() {
    let call = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (this.timeout) {
      clearTimeout(this.timeout);
      if (call) this.callback();
      this.timeout = this.callback = null;
    }
  }
  limit(callback) {
    this.abort(false);
    this.callback = callback;
    this.timeout = setTimeout(() => {
      this.timeout = this.callback = null;
      callback();
    }, this.wait);
  }
}

/***/ })

}]);
//# sourceMappingURL=addon-default-entry.js.map