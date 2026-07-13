var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"addon-settings": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/addon-settings.jsx","vendors~about~addon-settings~credits~donate~editor~embed~fullscreen~player","about~addon-settings~credits~donate~editor~embed~fullscreen~player","addon-settings~editor~embed~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/addons/settings/settings.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??postcss!./src/addons/settings/settings.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Copyright (C) 2021-2023 Thomas Weber\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with this program.  If not, see <https://www.gnu.org/licenses/>.\n */\n\n/* overridden by src/lib/themes/guiHelpers.js */\n\nbody {\n    background-color: var(--page-background);\n    color: var(--page-foreground);\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n}\n\na[href] {\n    color: var(--link-color);\n    text-decoration: underline;\n}\n\na:active, a:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.settings_container_1qNQ3 {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.settings_section_31t4Q {\n    max-width: 1280px;\n    margin: auto;\n}\n\n.settings_header_Y9USz {\n    position: relative;\n    padding: 8px 20px;\n    background-color: var(--ui-secondary);\n    box-shadow: 0 2px 5px var(--shadow);\n}\n\n@media (max-width: 700px) {\n    .settings_header_Y9USz {\n        padding-left: 5px;\n        padding-right: 5px;\n    }\n}\n\n.settings_header_Y9USz .settings_section_31t4Q {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.settings_button_2ovv0 {\n    color: inherit;\n    background: var(--ui-secondary);\n    border: 1px solid var(--ui-black-transparent);\n    padding: 8px 12px;\n    border-radius: 4px;\n    outline: none;\n    height: 32px;\n    font-family: inherit;\n    font-size: 14px;\n    transition: 0.25s ease;\n    transition-property: background;\n    display: flex;\n    align-items: center;\n}\n\n.settings_button_2ovv0:hover {\n    background: var(--ui-tertiary);\n}\n\n.settings_button_2ovv0:active, .settings_button_2ovv0:focus-within {\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.settings_search-container_24OhB {\n    display: flex;\n    background-color: var(--ui-secondary);\n    border: 1px solid var(--ui-black-transparent);\n    border-radius: 4px;\n}\n\n.settings_search-container_24OhB:focus-within {\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.settings_search-input_9LNCl {\n    color: inherit;\n    width: 150px;\n    height: 16px;\n    padding: 10px 0 10px 15px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n    font-size: 14px;\n}\n\n/* legacy edge */\n\n.settings_search-input_9LNCl::-ms-clear {\n    display: none;\n}\n\n.settings_search-button_LceHy {\n    height: 36px;\n    width: 36px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    background-color: transparent;\n    background-image: url(" + escape(__webpack_require__(/*! ./icons/search.svg */ "./src/addons/settings/icons/search.svg")) + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    filter: var(--filter-icon-black);\n}\n\n.settings_search-input_9LNCl:not([value=\"\"]) ~ .settings_search-button_LceHy {\n    background-image: url(" + escape(__webpack_require__(/*! ./icons/clear.svg */ "./src/addons/settings/icons/clear.svg")) + ") !important;\n}\n\n.settings_feedback-button-outer_3RXeq {\n    background: var(--ui-secondary);\n    border: 1px solid var(--ui-black-transparent);\n    color: inherit !important; /* override <a> colors */\n    height: 36px;\n    box-sizing: border-box;\n    border-radius: 4px;\n    padding: 0 12px;\n    margin-left: 10px;\n    font-size: 12px;\n    outline: none;\n    display: flex;\n    align-items: center;\n    text-decoration: none !important;\n}\n\n.settings_feedback-button-outer_3RXeq:active, .settings_feedback-button-outer_3RXeq:focus-within {\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.settings_feedback-button-inner_2h_ch {\n    text-decoration: none;\n    font-weight: bold;\n    text-align: center;\n}\n\n.settings_addons_2LLFF {\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px 20px;\n    height: 100%;\n}\n\n@media (max-width: 700px) {\n    .settings_addons_2LLFF {\n        padding-left: 5px;\n        padding-right: 5px;\n    }\n}\n\n.settings_addon-group_3d-ZB {\n    margin: 0 0 10px 0;\n}\n\n.settings_addon-group-name_1h56B {\n    background: none;\n    border: none;\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.settings_addon-group-name_1h56B::after {\n    margin-left: 16px;\n    content: '';\n    border-top: 1px solid var(--ui-black-transparent);\n    width: 100px;\n    flex: 1;\n}\n\n.settings_addon-group-expand-container_28XGS {\n    margin-right: 8px;\n    border-radius: 5px;\n    width: 24px;\n    height: 24px;\n}\n\n.settings_addon-group-name_1h56B:hover .settings_addon-group-expand-container_28XGS {\n    background: var(--ui-black-transparent);\n}\n\n.settings_addon-group-expand-icon_OHTZm {\n    width: 100%;\n    height: 100%;\n    filter: var(--filter-icon-black);\n}\n\n.settings_addon-group-expand-icon_OHTZm[data-open=\"true\"] {\n    transform: scaleY(-1);\n}\n\n.settings_addon_3Oi_z {\n    box-shadow: 0 2px 5px var(--shadow);\n    border: 1px solid var(--ui-black-transparent);\n    border-radius: 5px;\n    margin: 10px 0 10px 0;\n    font-size: 14px;\n}\n\n.settings_addon-dirty_2o20T {\n    background-color: var(--ui-tertiary);\n}\n\n.settings_addon-header_271wJ {\n    padding: 0 10px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.settings_extension-image_1HlEn {\n    height: 16px;\n    width: 16px;\n    margin-right: 8px;\n    filter: var(--filter-icon-black);\n}\n\n.settings_addon-title_6MhRl {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n}\n\n.settings_addon-switch_2bf3g {\n    margin-right: 8px;\n}\n\n.settings_addon-title-text_3QjlP {\n\n}\n\n.settings_addon-id_2EeZw {\n    margin-left: 10px;\n}\n\n.settings_inline-description_SovV9 {\n    opacity: 0.7;\n    margin-left: 10px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.settings_addon-operations_28nBd {\n    margin-left: auto;\n    padding-left: 4px;\n    display: flex;\n    align-items: center;\n}\n\n.settings_reset-button_1onc- {\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    border: none;\n    background-color: transparent;\n}\n\n.settings_reset-button_1onc-:hover {\n    background: var(--ui-black-transparent);\n}\n\n.settings_reset-button_1onc-:active, .settings_reset-button_1onc-:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.settings_reset-button-image_2Tgqe {\n    padding: 1px 0;\n    height: 16px;\n    width: 16px;\n    filter: var(--filter-icon-black);\n}\n\n.settings_switch_2V1f5 {\n    display: block;\n    background: #333;\n    width: 40px;\n    height: 22px;\n    border: 1px solid var(--ui-black-transparent);\n    border-radius: 12px;\n    position: relative;\n    cursor: pointer;\n    transition: 0.25s ease;\n    transition-property: background;\n}\n\n.settings_switch_2V1f5[state=\"on\"] {\n    background: var(--looks-secondary);\n}\n\n.settings_switch_2V1f5::before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    width: 12px;\n    height: 12px;\n    background: #fff;\n    border-radius: 6px;\n    top: 4px;\n    left: 4px;\n    transition: 0.25s ease;\n    transition-property: background, left;\n}\n\n.settings_switch_2V1f5[state=\"on\"]::before {\n    background: #fff;\n    left: auto;\n    right: 3px;\n}\n\n.settings_switch_2V1f5:active, .settings_switch_2V1f5:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.settings_tag-container_3yFc4 {\n    display: flex;\n    align-items: center;\n}\n\n.settings_tag_1c-GO {\n    border-radius: 4px;\n    padding: 2px 5px;\n    margin-left: 10px;\n    border-bottom: 2px solid #111;\n    white-space: nowrap;\n}\n\n.settings_tag-recommended_2k7Kt {\n    color: white;\n    background-color: #175ef8;\n    border-color: #0e44b8;\n}\n\n.settings_tag-theme_PbNiB {\n    color: black;\n    background-color: #9ad4cf;\n    border-color: #628f8c;\n}\n\n.settings_tag-beta_26ywj {\n    color: white;\n    background-color: #fd662b;\n    border-color: #d84a12;\n}\n\n.settings_tag-easter-egg_2M8qE {\n    color: black;\n    background-color: #b9f38d;\n    border-color: #8fce5e;\n}\n\n.settings_tag-new_1g9ff {\n    color: white;\n    background: #b117f8;\n    border-color: #6f0073;\n}\n\n.settings_tag-danger_2g6El {\n    color: white;\n    background: #fd2b2b;\n    border-color: #d81212;\n}\n\n.settings_tag-astra-editor_JeY6J {\n    color: white;\n    background: #0099ff;\n    border-color: #005994;\n}\n\n.settings_tag-poorlang_1sJN_ {\n    color: white;\n    background: #fd2b2b;\n    border-color: #d81212;\n}\n\n/* Tag Filter Styles */\n\n.settings_tag-filter_u8P78 {\n    margin: 20px 0;\n    padding: 15px;\n    background: var(--ui-secondary);\n    border-radius: 8px;\n    border: 1px solid var(--ui-black-transparent);\n}\n\n.settings_tag-filter-label_3Tw6- {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 10px;\n    color: var(--text-primary);\n}\n\n.settings_tag-list_35Cz7 {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    align-items: center;\n}\n\n.settings_tag-button_25TWq {\n    background: var(--ui-tertiary);\n    border: 1px solid var(--ui-black-transparent);\n    color: var(--text-primary);\n    padding: 6px 12px;\n    border-radius: 20px;\n    font-size: 12px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    outline: none;\n}\n\n.settings_tag-button_25TWq:hover {\n    background: var(--ui-white);\n    border-color: var(--looks-secondary);\n}\n\n.settings_tag-button_25TWq:focus {\n    box-shadow: 0 0 0 2px var(--looks-transparent);\n}\n\n.settings_tag-button-active_3jcim {\n    background: var(--looks-secondary);\n    color: white;\n    border-color: var(--looks-secondary);\n}\n\n.settings_tag-button-active_3jcim:hover {\n    background: var(--looks-secondary-dark);\n    border-color: var(--looks-secondary-dark);\n}\n\n.settings_clear-tags-button_ax42m {\n    background: #e74c3c;\n    color: white;\n    border: 1px solid #c0392b;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: 16px;\n    font-weight: bold;\n    margin-left: 8px;\n    transition: all 0.2s ease;\n    outline: none;\n}\n\n.settings_clear-tags-button_ax42m:hover {\n    background: #c0392b;\n}\n\n.settings_clear-tags-button_ax42m:focus {\n    box-shadow: 0 0 0 2px var(--looks-transparent);\n}\n\n@media (max-width: 550px) {\n    .settings_tag-filter_u8P78 {\n        margin: 15px 0;\n        padding: 10px;\n    }\n    \n    .settings_tag-button_25TWq {\n        padding: 4px 8px;\n        font-size: 11px;\n    }\n    \n    .settings_tag-list_35Cz7 {\n        gap: 6px;\n    }\n}\n\n@media (max-width: 550px) {\n    .settings_tag_1c-GO:not(.settings_tag-beta_26ywj) {\n        display: none;\n    }\n}\n\n.settings_addon-details_2CKwd {\n    padding: 0 20px;\n    margin-bottom: 10px;\n}\n\n.settings_credit-container_2mHq7 {\n\n}\n\n.settings_credit-title_3f-yX {\n    padding-right: 5px;\n}\n\n.settings_credit_3grR6 {\n\n}\n\n.settings_description_2MbZo {\n\n}\n\n.settings_notice_2q6Z2 {\n    color: black;\n    padding: 10px;\n    border-radius: 5px;\n    font-weight: bold;\n    margin: 10px 0;\n    display: flex;\n    align-items: center;\n    background: rgba(154, 212, 207, 0.7);\n}\n\n.settings_notice-icon_2lAT7 {\n    display: block;\n    height: 16px;\n    width: 16px;\n    margin-right: 10px;\n}\n\n.settings_setting-container_2BA7o {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.settings_setting_2i2j- {\n    margin: 10px;\n    margin-right: 30px;\n    min-height: 35px;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.settings_setting-label_2w3mJ {\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 12px;\n    margin-right: 10px;\n    opacity: 0.8;\n}\n\n.settings_setting_2i2j- input {\n    background: var(--input-background);\n    border: 1px solid var(--ui-black-transparent);\n    padding: 8px 12px;\n    border-radius: 4px;\n    transition: 0.25s ease;\n    transition-property: background;\n}\n\n.settings_setting_2i2j- input:focus, .settings_setting_2i2j- input:active {\n    outline: none;\n    border-color: var(--looks-secondary);\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.settings_setting_2i2j- input[type=\"checkbox\"] {\n    height: 20px;\n    width: 20px;\n    background-position: center center;\n    padding: 8px;\n}\n\n.settings_setting_2i2j- input[type=\"number\"],\n.settings_setting_2i2j- input[type=\"text\"] {\n    border-radius: 20px 0 0 20px;\n    font-size: 14px;\n    width: 75px;\n    height: 35px;\n    box-sizing: border-box;\n}\n\n.settings_setting_2i2j- input[type=\"color\"] {\n    height: 30px;\n    width: 100px;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    border: 1px solid transparent;\n    border-radius: 4px 0px 0px 4px;\n}\n\n.settings_reset-setting-button_-WLwd {\n    background-color: var(--input-background);\n    border-left-width: 0;\n    border-radius: 0 4px 4px 0px;\n    box-sizing: border-box;\n    height: 30px;\n}\n\n.settings_reset-setting-button_-WLwd img {\n    width: 20px;\n    height: 20px;\n    filter: var(--filter-icon-black);\n}\n\n.settings_reset-setting-button_-WLwd[data-for-text-input=\"true\"] {\n    height: 35px;\n    border-radius: 0 20px 20px 0;\n}\n\n.settings_select_sIZno {\n    display: flex;\n}\n\n.settings_select-option_32Zqa {\n    cursor: pointer;\n    padding: 10px;\n    margin: 0;\n    background: transparent;\n    border: none;\n    background: var(--ui-secondary);\n    border: 1px solid var(--ui-black-transparent);\n    border-right-width: 0;\n    transition: 0.25s ease;\n    transition-property: color, background, border;\n}\n\n.settings_select-option_32Zqa:first-child {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n.settings_select-option_32Zqa:last-child {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    border-right-width: 1px;\n}\n\n.settings_select-option_32Zqa.settings_selected_38WtW {\n    color: white;\n    background: var(--looks-secondary);\n}\n\n.settings_select-option_32Zqa:active, .settings_select-option_32Zqa:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n    z-index: 10;\n}\n\n.settings_presets_3zawV {\n    width: 100%;\n}\n\n.settings_preset-button_3zYV3 {\n    margin-right: 10px;\n}\n\n.settings_footer_jjys0 {\n    opacity: 0.8;\n}\n\n.settings_unsupported-container_2vhiH {\n    margin-bottom: 10px;\n}\n\n.settings_unsupported-addon_1p57c {\n    padding-left: 5px;\n}\n\n.settings_version_2_cDA {\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.settings_footer-buttons_xTSXH {\n    margin-bottom: 10px;\n    display: flex;\n}\n\n.settings_footer-buttons_xTSXH > .settings_button_2ovv0 {\n    margin-right: 10px;\n}\n\n.settings_reset-all-button_2Q-Zi {\n\n}\n\n.settings_export-button_2PWOM {\n\n}\n\n.settings_import-button_1NMJN {\n\n}\n\n.settings_no-results_3bDSs {\n    text-align: center;\n    font-style: italic;\n}\n\n.settings_dirty-outer_WmNYy {\n    display: flex;\n    position: absolute;\n    top: calc(100% - 8px);\n    left: 0;\n    width: calc(100% - 20px);\n    margin-left: 10px;\n    z-index: 10;\n    justify-content: center;\n    animation: settings_dirty-appear_2Rcif 0.2s ease;\n    pointer-events: none;\n}\n\n.settings_dirty-inner_2tglM {\n    padding: 8px;\n    background: var(--ui-tertiary);\n    box-shadow: 0 2px 5px var(--shadow);\n    border-radius: 4px;\n    pointer-events: auto;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n.settings_dirty-button_2adjE {\n    margin-left: 6px;\n}\n\n@keyframes settings_dirty-appear_2Rcif {\n    from {\n        transform: translateY(-100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n", ""]);

// exports
exports.locals = {
	"container": "settings_container_1qNQ3",
	"section": "settings_section_31t4Q",
	"header": "settings_header_Y9USz",
	"button": "settings_button_2ovv0",
	"search-container": "settings_search-container_24OhB",
	"searchContainer": "settings_search-container_24OhB",
	"search-input": "settings_search-input_9LNCl",
	"searchInput": "settings_search-input_9LNCl",
	"search-button": "settings_search-button_LceHy",
	"searchButton": "settings_search-button_LceHy",
	"feedback-button-outer": "settings_feedback-button-outer_3RXeq",
	"feedbackButtonOuter": "settings_feedback-button-outer_3RXeq",
	"feedback-button-inner": "settings_feedback-button-inner_2h_ch",
	"feedbackButtonInner": "settings_feedback-button-inner_2h_ch",
	"addons": "settings_addons_2LLFF",
	"addon-group": "settings_addon-group_3d-ZB",
	"addonGroup": "settings_addon-group_3d-ZB",
	"addon-group-name": "settings_addon-group-name_1h56B",
	"addonGroupName": "settings_addon-group-name_1h56B",
	"addon-group-expand-container": "settings_addon-group-expand-container_28XGS",
	"addonGroupExpandContainer": "settings_addon-group-expand-container_28XGS",
	"addon-group-expand-icon": "settings_addon-group-expand-icon_OHTZm",
	"addonGroupExpandIcon": "settings_addon-group-expand-icon_OHTZm",
	"addon": "settings_addon_3Oi_z",
	"addon-dirty": "settings_addon-dirty_2o20T",
	"addonDirty": "settings_addon-dirty_2o20T",
	"addon-header": "settings_addon-header_271wJ",
	"addonHeader": "settings_addon-header_271wJ",
	"extension-image": "settings_extension-image_1HlEn",
	"extensionImage": "settings_extension-image_1HlEn",
	"addon-title": "settings_addon-title_6MhRl",
	"addonTitle": "settings_addon-title_6MhRl",
	"addon-switch": "settings_addon-switch_2bf3g",
	"addonSwitch": "settings_addon-switch_2bf3g",
	"addon-title-text": "settings_addon-title-text_3QjlP",
	"addonTitleText": "settings_addon-title-text_3QjlP",
	"addon-id": "settings_addon-id_2EeZw",
	"addonId": "settings_addon-id_2EeZw",
	"inline-description": "settings_inline-description_SovV9",
	"inlineDescription": "settings_inline-description_SovV9",
	"addon-operations": "settings_addon-operations_28nBd",
	"addonOperations": "settings_addon-operations_28nBd",
	"reset-button": "settings_reset-button_1onc-",
	"resetButton": "settings_reset-button_1onc-",
	"reset-button-image": "settings_reset-button-image_2Tgqe",
	"resetButtonImage": "settings_reset-button-image_2Tgqe",
	"switch": "settings_switch_2V1f5",
	"tag-container": "settings_tag-container_3yFc4",
	"tagContainer": "settings_tag-container_3yFc4",
	"tag": "settings_tag_1c-GO",
	"tag-recommended": "settings_tag-recommended_2k7Kt",
	"tagRecommended": "settings_tag-recommended_2k7Kt",
	"tag-theme": "settings_tag-theme_PbNiB",
	"tagTheme": "settings_tag-theme_PbNiB",
	"tag-beta": "settings_tag-beta_26ywj",
	"tagBeta": "settings_tag-beta_26ywj",
	"tag-easter-egg": "settings_tag-easter-egg_2M8qE",
	"tagEasterEgg": "settings_tag-easter-egg_2M8qE",
	"tag-new": "settings_tag-new_1g9ff",
	"tagNew": "settings_tag-new_1g9ff",
	"tag-danger": "settings_tag-danger_2g6El",
	"tagDanger": "settings_tag-danger_2g6El",
	"tag-astra-editor": "settings_tag-astra-editor_JeY6J",
	"tagAstraEditor": "settings_tag-astra-editor_JeY6J",
	"tag-poorlang": "settings_tag-poorlang_1sJN_",
	"tagPoorlang": "settings_tag-poorlang_1sJN_",
	"tag-filter": "settings_tag-filter_u8P78",
	"tagFilter": "settings_tag-filter_u8P78",
	"tag-filter-label": "settings_tag-filter-label_3Tw6-",
	"tagFilterLabel": "settings_tag-filter-label_3Tw6-",
	"tag-list": "settings_tag-list_35Cz7",
	"tagList": "settings_tag-list_35Cz7",
	"tag-button": "settings_tag-button_25TWq",
	"tagButton": "settings_tag-button_25TWq",
	"tag-button-active": "settings_tag-button-active_3jcim",
	"tagButtonActive": "settings_tag-button-active_3jcim",
	"clear-tags-button": "settings_clear-tags-button_ax42m",
	"clearTagsButton": "settings_clear-tags-button_ax42m",
	"addon-details": "settings_addon-details_2CKwd",
	"addonDetails": "settings_addon-details_2CKwd",
	"credit-container": "settings_credit-container_2mHq7",
	"creditContainer": "settings_credit-container_2mHq7",
	"credit-title": "settings_credit-title_3f-yX",
	"creditTitle": "settings_credit-title_3f-yX",
	"credit": "settings_credit_3grR6",
	"description": "settings_description_2MbZo",
	"notice": "settings_notice_2q6Z2",
	"notice-icon": "settings_notice-icon_2lAT7",
	"noticeIcon": "settings_notice-icon_2lAT7",
	"setting-container": "settings_setting-container_2BA7o",
	"settingContainer": "settings_setting-container_2BA7o",
	"setting": "settings_setting_2i2j-",
	"setting-label": "settings_setting-label_2w3mJ",
	"settingLabel": "settings_setting-label_2w3mJ",
	"reset-setting-button": "settings_reset-setting-button_-WLwd",
	"resetSettingButton": "settings_reset-setting-button_-WLwd",
	"select": "settings_select_sIZno",
	"select-option": "settings_select-option_32Zqa",
	"selectOption": "settings_select-option_32Zqa",
	"selected": "settings_selected_38WtW",
	"presets": "settings_presets_3zawV",
	"preset-button": "settings_preset-button_3zYV3",
	"presetButton": "settings_preset-button_3zYV3",
	"footer": "settings_footer_jjys0",
	"unsupported-container": "settings_unsupported-container_2vhiH",
	"unsupportedContainer": "settings_unsupported-container_2vhiH",
	"unsupported-addon": "settings_unsupported-addon_1p57c",
	"unsupportedAddon": "settings_unsupported-addon_1p57c",
	"version": "settings_version_2_cDA",
	"footer-buttons": "settings_footer-buttons_xTSXH",
	"footerButtons": "settings_footer-buttons_xTSXH",
	"reset-all-button": "settings_reset-all-button_2Q-Zi",
	"resetAllButton": "settings_reset-all-button_2Q-Zi",
	"export-button": "settings_export-button_2PWOM",
	"exportButton": "settings_export-button_2PWOM",
	"import-button": "settings_import-button_1NMJN",
	"importButton": "settings_import-button_1NMJN",
	"no-results": "settings_no-results_3bDSs",
	"noResults": "settings_no-results_3bDSs",
	"dirty-outer": "settings_dirty-outer_WmNYy",
	"dirtyOuter": "settings_dirty-outer_WmNYy",
	"dirty-appear": "settings_dirty-appear_2Rcif",
	"dirtyAppear": "settings_dirty-appear_2Rcif",
	"dirty-inner": "settings_dirty-inner_2tglM",
	"dirtyInner": "settings_dirty-inner_2tglM",
	"dirty-button": "settings_dirty-button_2adjE",
	"dirtyButton": "settings_dirty-button_2adjE"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./src/addons/addons-l10n-settings/en.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/en.json ***!
  \*************************************************/
/*! exports provided: 2d-color-picker/@description, 2d-color-picker/@name, autosave/@description, autosave/@name, autosave/@settings-name-enabled, autosave/@settings-name-interval, autosave/@settings-name-saveOnlyWhenChanged, autosave/@settings-name-showNotifications, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, block-count/@description, block-count/@name, block-count/@settings-name-show_complexity_score, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, block-palette-icons/@description, block-palette-icons/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sa, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, blocks2image/@description, blocks2image/@name, calculator/@description, calculator/@name, calculator/@settings-name-remember_position, calculator/@settings-name-show_button, canvas-screenshot/@description, canvas-screenshot/@name, canvas-screenshot/@settings-name-show_notifications, canvas-screenshot/@settings-name-sound_url, cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, clones/@description, clones/@name, clones/@settings-name-projectpage, clones/@settings-name-showicononly, color-picker/@description, color-picker/@name, columns/@description, columns/@name, copy-reporter/@description, copy-reporter/@name, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, custom-block-text/@description, custom-block-text/@name, custom-block-text/@settings-name-bold, custom-block-text/@settings-name-shadow, custom-block-text/@settings-name-size, custom-menu-bar/@description, custom-menu-bar/@info-small-screens, custom-menu-bar/@name, custom-menu-bar/@settings-name-menu-labels, custom-menu-bar/@settings-select-menu-labels-both, custom-menu-bar/@settings-select-menu-labels-icons, custom-menu-bar/@settings-select-menu-labels-labels, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, debugger/@description, debugger/@name, debugger/@settings-name-fancy_graphs, debugger/@settings-name-log_broadcasts, debugger/@settings-name-log_clear_greenflag, debugger/@settings-name-log_clone_create, debugger/@settings-name-log_failed_clone_creation, debugger/@settings-name-log_greenflag, debugger/@settings-name-log_invalid_cloud_data, debugger/@settings-name-log_max_list_length, default-costume-editor-color/@description, default-costume-editor-color/@name, default-costume-editor-color/@settings-name-fill, default-costume-editor-color/@settings-name-persistence, default-costume-editor-color/@settings-name-stroke, default-costume-editor-color/@settings-name-strokeSize, dev-inspector/@description, dev-inspector/@name, disable-paste-offset/@description, disable-paste-offset/@info-vanilla, disable-paste-offset/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@name, disable-stage-drag-select/@settings-name-drag_while_stopped, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, editor-buttons-reverse-order/@description, editor-buttons-reverse-order/@name, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, editor-compact/@description, editor-compact/@info-hide-icons-update, editor-compact/@name, editor-compact/@settings-name-hideLabels, editor-devtools/@description, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@info-twKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, editor-extra-keys/@settings-name-twKeys, editor-number-arrow-keys/@description, editor-number-arrow-keys/@name, editor-number-arrow-keys/@settings-name-alt, editor-number-arrow-keys/@settings-name-altCustom, editor-number-arrow-keys/@settings-name-regular, editor-number-arrow-keys/@settings-name-regularCustom, editor-number-arrow-keys/@settings-name-shift, editor-number-arrow-keys/@settings-name-shiftCustom, editor-number-arrow-keys/@settings-name-useCustom, editor-number-arrow-keys/@settings-select-alt-hundredth, editor-number-arrow-keys/@settings-select-alt-none, editor-number-arrow-keys/@settings-select-alt-one, editor-number-arrow-keys/@settings-select-alt-ten, editor-number-arrow-keys/@settings-select-alt-tenth, editor-number-arrow-keys/@settings-select-regular-hundredth, editor-number-arrow-keys/@settings-select-regular-none, editor-number-arrow-keys/@settings-select-regular-one, editor-number-arrow-keys/@settings-select-regular-ten, editor-number-arrow-keys/@settings-select-regular-tenth, editor-number-arrow-keys/@settings-select-shift-hundredth, editor-number-arrow-keys/@settings-select-shift-none, editor-number-arrow-keys/@settings-select-shift-one, editor-number-arrow-keys/@settings-select-shift-ten, editor-number-arrow-keys/@settings-select-shift-tenth, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, editor-sounds/@description, editor-sounds/@name, editor-square-inputs/@description, editor-square-inputs/@name, editor-square-inputs/@settings-name-color, editor-square-inputs/@settings-name-number, editor-square-inputs/@settings-name-text, editor-stage-left/@description, editor-stage-left/@info-reverseOrder, editor-stage-left/@name, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-contrast, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-new-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-contrast, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-new-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-comment-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-sa-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, expanded-backpack/@description, expanded-backpack/@name, expanded-backpack/@settings-name-rows, expanded-backpack/@settings-name-upscale, find-bar/@description, find-bar/@info-developer-tools, find-bar/@name, find-bar/@settings-name-caseSensitive, find-bar/@settings-name-enableRegex, find-bar/@settings-name-maxHistory, find-bar/@settings-name-searchAllSprites, find-bar/@settings-name-showContext, folders/@description, folders/@info-notice-folders-are-public, folders/@name, frame-stepper/@description, frame-stepper/@name, fullscreen/@description, fullscreen/@info-hideToolbarNotice, fullscreen/@name, fullscreen/@settings-name-browserFullscreen, fullscreen/@settings-name-toolbar, fullscreen/@settings-select-toolbar-hide, fullscreen/@settings-select-toolbar-hover, fullscreen/@settings-select-toolbar-show, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, green-flag-order/@description, green-flag-order/@name, green-flag-order/@settings-name-badge_color, green-flag-order/@settings-name-badge_style, green-flag-order/@settings-name-text_color, green-flag-order/@settings-select-badge_style-circle, green-flag-order/@settings-select-badge_style-square, hide-delete-button/@description, hide-delete-button/@info-restoretip, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-lockLoad, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, hide-new-variables/@description, hide-new-variables/@name, hide-stage/@description, hide-stage/@name, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-duplicate, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, initialise-sprite-position/@settings-select-duplicate-custom, initialise-sprite-position/@settings-select-duplicate-keep, initialise-sprite-position/@settings-select-duplicate-randomize, jump-to-def/@description, jump-to-def/@info-developer-tools, jump-to-def/@name, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, mediarecorder/@description, mediarecorder/@name, middle-click-popup/@description, middle-click-popup/@info-developer-tools, middle-click-popup/@info-math-and-conversions, middle-click-popup/@name, middle-click-popup/@settings-name-popup_max_height, middle-click-popup/@settings-name-popup_scale, middle-click-popup/@settings-name-popup_width, mouse-pos/@description, mouse-pos/@name, move-to-top-bottom/@description, move-to-top-bottom/@info-developer-tools, move-to-top-bottom/@name, move-to-top-layer/@description, move-to-top-layer/@name, mute-project/@description, mute-project/@info-macOS, mute-project/@name, no-category-text/@description, no-category-text/@name, no-category-text/@settings-name-iconScale, no-category-text/@settings-name-iconSpacing, no-script-bumping/@description, no-script-bumping/@name, number-pad/@description, number-pad/@info-explanation, number-pad/@name, onion-skinning/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, paint-skew/@description, paint-skew/@info-useCmdOnMac, paint-skew/@name, paint-snap/@description, paint-snap/@name, paint-snap/@settings-name-boxCenter, paint-snap/@settings-name-boxCorners, paint-snap/@settings-name-boxEdgeMids, paint-snap/@settings-name-enable-default, paint-snap/@settings-name-guide-color, paint-snap/@settings-name-objectCenters, paint-snap/@settings-name-objectCorners, paint-snap/@settings-name-objectEdges, paint-snap/@settings-name-objectMidlines, paint-snap/@settings-name-pageAxes, paint-snap/@settings-name-pageCenter, paint-snap/@settings-name-pageCorners, paint-snap/@settings-name-pageEdges, paint-snap/@settings-name-threshold, pause/@description, pause/@info-keybind, pause/@name, pick-colors-from-stage/@description, pick-colors-from-stage/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, remove-extension-button/@description, remove-extension-button/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@info-restoretip, remove-sprite-confirm/@name, rename-broadcasts/@description, rename-broadcasts/@name, reorder-custom-inputs/@description, reorder-custom-inputs/@name, reorder-custom-inputs/@settings-name-InsertInputsAfter, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, search-sprites/@description, search-sprites/@name, sprite-properties/@description, sprite-properties/@name, sprite-properties/@settings-name-autoCollapse, sprite-properties/@settings-name-hideByDefault, sprite-properties/@settings-name-transitionDuration, sprite-properties/@settings-select-transitionDuration-default, sprite-properties/@settings-select-transitionDuration-long, sprite-properties/@settings-select-transitionDuration-none, sprite-properties/@settings-select-transitionDuration-short, swap-local-global/@description, swap-local-global/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, tw-disable-cloud-variables/@description, tw-disable-cloud-variables/@name, tw-disable-compiler/@description, tw-disable-compiler/@name, tw-remove-backpack/@description, tw-remove-backpack/@name, tw-remove-feedback/@description, tw-remove-feedback/@name, tw-straighten-comments/@description, tw-straighten-comments/@name, variable-manager/@description, variable-manager/@name, vol-slider/@description, vol-slider/@name, vol-slider/@settings-name-always, vol-slider/@settings-name-defVol, zebra-striping/@description, zebra-striping/@name, zebra-striping/@settings-name-intensity, zebra-striping/@settings-name-shade, zebra-striping/@settings-select-shade-darker, zebra-striping/@settings-select-shade-lighter, project-size-display/@name, project-size-display/@description, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"2d-color-picker/@description\":\"Replaces saturation and brightness sliders in the costume editor with a 2D color picker. Hold Shift while dragging the cursor to change the values on a single axis.\",\"2d-color-picker/@name\":\"2D color picker\",\"autosave/@description\":\"Automatically saves your projects to local files at regular intervals to prevent data loss.\",\"autosave/@name\":\"Autosave\",\"autosave/@settings-name-enabled\":\"Enable autosave\",\"autosave/@settings-name-interval\":\"Autosave interval (minutes)\",\"autosave/@settings-name-saveOnlyWhenChanged\":\"Save only when project is changed\",\"autosave/@settings-name-showNotifications\":\"Show save notifications\",\"better-img-uploads/@description\":\"Adds a new button above the \\\"upload costume\\\" button that automatically converts uploaded bitmap images into SVG (vector) images to avoid losing quality.\",\"better-img-uploads/@info-notSuitableEdit\":\"Avoid using the HD upload button if you plan to edit the image after uploading.\",\"better-img-uploads/@name\":\"HD image uploads\",\"better-img-uploads/@settings-name-fitting\":\"Image sizing\",\"better-img-uploads/@settings-select-fitting-fill\":\"Stretch to fill canvas\",\"better-img-uploads/@settings-select-fitting-fit\":\"Shrink to fit canvas\",\"better-img-uploads/@settings-select-fitting-full\":\"Original size\",\"bitmap-copy/@description\":\"Allows you to copy a bitmap image from the costume editor into the system clipboard, so that you can paste it in other websites or software.\",\"bitmap-copy/@info-norightclick\":\"\\\"Right click → copy\\\" is not supported. You must press Ctrl+C while a bitmap image is selected.\",\"bitmap-copy/@name\":\"Bitmap images copying\",\"block-cherry-picking/@description\":\"Adds the ability to drag a single block out of the middle of a script (instead of the entire stack attached below it) while holding the Ctrl key.\",\"block-cherry-picking/@info-flipControls\":\"If \\\"flip controls\\\" is enabled, grabbing blocks individually will be the default behavior. Hold Ctrl to drag the entire stack.\",\"block-cherry-picking/@info-macContextDisabled\":\"On macOS, use the Cmd key instead of the Ctrl key.\",\"block-cherry-picking/@name\":\"Grab single block with Ctrl key\",\"block-cherry-picking/@settings-name-invertDrag\":\"Flip controls\",\"block-count/@description\":\"Shows the total number of blocks in a project in the editor menu bar with detailed complexity analysis. Click the block count to see detailed project metrics including nesting depth, script complexity, and block type distribution. Previously part of \\\"sprite and script count\\\".\",\"block-count/@name\":\"Block count\",\"block-count/@settings-name-show_complexity_score\":\"Show complexity score in menu bar\",\"block-duplicate/@description\":\"Quickly duplicate a script by dragging it while holding the Alt key. Hold Ctrl as well to only duplicate a single block instead of the entire stack attached below it.\",\"block-duplicate/@info-mac\":\"On macOS, use the Option key instead of the Alt key and Command key instead of the Control key.\",\"block-duplicate/@name\":\"Duplicate script with Alt key\",\"block-palette-icons/@description\":\"Adds icons inside the colored circles that identify block categories.\",\"block-palette-icons/@name\":\"Block palette category icons\",\"block-switching/@description\":\"Right click on a block to switch it to a related block.\",\"block-switching/@name\":\"Block switching\",\"block-switching/@settings-name-control\":\"Control blocks\",\"block-switching/@settings-name-customargs\":\"Custom block parameters\",\"block-switching/@settings-name-customargsmode\":\"Shown custom block parameters options\",\"block-switching/@settings-name-data\":\"Data blocks\",\"block-switching/@settings-name-event\":\"Event blocks\",\"block-switching/@settings-name-extension\":\"Extension blocks\",\"block-switching/@settings-name-looks\":\"Looks blocks\",\"block-switching/@settings-name-motion\":\"Motion blocks\",\"block-switching/@settings-name-noop\":\"Show option to change block to self\",\"block-switching/@settings-name-operator\":\"Operator blocks\",\"block-switching/@settings-name-sa\":\"Addon blocks\",\"block-switching/@settings-name-sensing\":\"Sensing blocks\",\"block-switching/@settings-name-sound\":\"Sound blocks\",\"block-switching/@settings-select-customargsmode-all\":\"Parameters in all custom blocks in sprite\",\"block-switching/@settings-select-customargsmode-defOnly\":\"Parameters in own custom block\",\"blocks2image/@description\":\"Right click the code area to export blocks as SVG/PNG images.\",\"blocks2image/@name\":\"Save blocks as image\",\"calculator/@description\":\"Adds a floating calculator window that you can use for quick math calculations while working on your projects. Features basic arithmetic operations, memory functions, and a clean, modern interface.\",\"calculator/@name\":\"Calculator\",\"calculator/@settings-name-remember_position\":\"Remember window position\",\"calculator/@settings-name-show_button\":\"Show calculator button in menu\",\"canvas-screenshot/@description\":\"Adds a screenshot button next to the debugger that captures the stage canvas and copies it to clipboard with a customizable sound effect.\",\"canvas-screenshot/@name\":\"Canvas Screenshot\",\"canvas-screenshot/@settings-name-show_notifications\":\"Enable screenshot notifications\",\"canvas-screenshot/@settings-name-sound_url\":\"Sound effect URL\",\"cat-blocks/@description\":\"Brings back editor cat hat blocks that were first introduced for April Fools' Day 2020.\",\"cat-blocks/@info-watch\":\"The \\\"watch mouse cursor\\\" setting may impact performance when the editor is open.\",\"cat-blocks/@name\":\"Cat blocks\",\"cat-blocks/@settings-name-watch\":\"Watch mouse cursor\",\"clones/@description\":\"Adds a counter above the stage in the editor which shows the total amount of clones.\",\"clones/@name\":\"Clone counter\",\"clones/@settings-name-projectpage\":\"Show on project page\",\"clones/@settings-name-showicononly\":\"Show icon only\",\"color-picker/@description\":\"Adds hex code inputs to color pickers.\",\"color-picker/@name\":\"Hex color picker\",\"columns/@description\":\"Splits the block category menu into two columns and moves it to the top of the block palette, like in Scratch 2.0.\",\"columns/@name\":\"Two-column category menu\",\"copy-reporter/@description\":\"Adds the option to copy values displayed by variable monitors (from the right click context menu) and block reporter balloons.\",\"copy-reporter/@name\":\"Copy reporter values\",\"custom-block-shape/@description\":\"Adjust the padding, corner radius, and notch height of blocks.\",\"custom-block-shape/@info-paddingWarning\":\"Decreasing the padding size is only visible to you, so when your projects are viewed by other users, your scripts may overlap.\",\"custom-block-shape/@name\":\"Customizable block shape\",\"custom-block-shape/@preset-description-default2\":\"An appearance similar to Scratch 2.0 blocks\",\"custom-block-shape/@preset-description-default3\":\"The regular appearance of Scratch 3.0 blocks\",\"custom-block-shape/@preset-description-flat2\":\"Scratch 2.0 blocks with notches and corners removed\",\"custom-block-shape/@preset-description-flat3\":\"Scratch 3.0 blocks with notches and corners removed\",\"custom-block-shape/@preset-name-default2\":\"2.0 Blocks\",\"custom-block-shape/@preset-name-default3\":\"3.0 Blocks\",\"custom-block-shape/@preset-name-flat2\":\"2.0 Flat\",\"custom-block-shape/@preset-name-flat3\":\"3.0 Flat\",\"custom-block-shape/@settings-name-cornerSize\":\"Corner size (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"Notch height (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Padding size (50-200%)\",\"custom-block-text/@description\":\"Lets you customize the style of text on blocks, including adjusting the size, using bold text, or adding a shadow.\",\"custom-block-text/@name\":\"Customizable block text style\",\"custom-block-text/@settings-name-bold\":\"Bold text\",\"custom-block-text/@settings-name-shadow\":\"Shadow under text\",\"custom-block-text/@settings-name-size\":\"Text size (%)\",\"custom-menu-bar/@description\":\"Allows you to hide specific editor menu bar items or remove their labels or icons.\",\"custom-menu-bar/@info-small-screens\":\"The text labels may be automatically replaced by icons on smaller windows.\",\"custom-menu-bar/@name\":\"Customizable editor menu bar\",\"custom-menu-bar/@settings-name-menu-labels\":\"Show menu...\",\"custom-menu-bar/@settings-select-menu-labels-both\":\"Icons and labels\",\"custom-menu-bar/@settings-select-menu-labels-icons\":\"Icons only\",\"custom-menu-bar/@settings-select-menu-labels-labels\":\"Labels only\",\"custom-zoom/@description\":\"Choose custom settings for the minimum, maximum, speed, and start size of the zoom of scripts in the code area, and autohide the controls.\",\"custom-zoom/@name\":\"Customizable code area zoom\",\"custom-zoom/@settings-name-autohide\":\"Autohide Zoom Controls\",\"custom-zoom/@settings-name-maxZoom\":\"Maximum Zoom (100-500%)\",\"custom-zoom/@settings-name-minZoom\":\"Minimum Zoom (1-100%)\",\"custom-zoom/@settings-name-speed\":\"Autohide Animation Speed\",\"custom-zoom/@settings-name-startZoom\":\"Start Zoom (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Zoom Speed (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"Default\",\"custom-zoom/@settings-select-speed-long\":\"Slow\",\"custom-zoom/@settings-select-speed-none\":\"Instant\",\"custom-zoom/@settings-select-speed-short\":\"Quick\",\"data-category-tweaks-v2/@description\":\"Provides tweaks for the Data (\\\"Variables\\\") block category.\",\"data-category-tweaks-v2/@name\":\"Data category tweaks\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Move data blocks above variables list\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Separate List Category\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Separate Sprite-only Variables\",\"debugger/@description\":\"Adds a new \\\"debugger\\\" window to the editor. Allows for logging into the \\\"Logs\\\" tab of the debugger window using the \\\"log\\\", \\\"warn\\\" and \\\"error\\\" blocks. The \\\"breakpoint\\\" block will pause the project when executed. All running stacks of blocks can be viewed in the \\\"Threads\\\" tab of the debugger window, and when paused the \\\"Step\\\" button can be used to execute the next block. A graph of frames per second and number of clones can be viewed in the \\\"Performance\\\" tab. The \\\"Memory\\\" tab provides real-time monitoring of clone count, variable usage, and resource consumption with interactive charts and statistics.\",\"debugger/@name\":\"Debugger\",\"debugger/@settings-name-fancy_graphs\":\"Animated graphs (may affect performance)\",\"debugger/@settings-name-log_broadcasts\":\"Log broadcasts\",\"debugger/@settings-name-log_clear_greenflag\":\"Clear logs on green flag\",\"debugger/@settings-name-log_clone_create\":\"Log clone creation\",\"debugger/@settings-name-log_failed_clone_creation\":\"Log when clone limit exceeded\",\"debugger/@settings-name-log_greenflag\":\"Log green flag clicks\",\"debugger/@settings-name-log_invalid_cloud_data\":\"Log invalid cloud variable values\",\"debugger/@settings-name-log_max_list_length\":\"Log when max list length exceeded\",\"default-costume-editor-color/@description\":\"Changes the default colors and outline size used by the costume editor.\",\"default-costume-editor-color/@name\":\"Customizable default costume editor colors\",\"default-costume-editor-color/@settings-name-fill\":\"Default fill color\",\"default-costume-editor-color/@settings-name-persistence\":\"Use previous color instead of resetting after switching tools\",\"default-costume-editor-color/@settings-name-stroke\":\"Default outline color\",\"default-costume-editor-color/@settings-name-strokeSize\":\"Default outline size\",\"dev-inspector/@description\":\"Adds a right-click option to inspect blocks and view their JSON representation with useful debugging information.\",\"dev-inspector/@name\":\"Dev Inspector\",\"disable-paste-offset/@description\":\"Paste copied items at their original position instead of shifted slightly in the costume editor.\",\"disable-paste-offset/@info-vanilla\":\"This behavior can also be achieved without this addon by Alt+Clicking the item.\",\"disable-paste-offset/@name\":\"Do not shift pasted items\",\"disable-stage-drag-select/@description\":\"Removes the ability to drag sprites around on the stage in the editor, except those explicitly set as draggable. Hold Shift while dragging a sprite to move it normally.\",\"disable-stage-drag-select/@name\":\"Non-draggable sprites in editor\",\"disable-stage-drag-select/@settings-name-drag_while_stopped\":\"Allow dragging while project is stopped\",\"drag-drop/@description\":\"Lets you drag images and sounds from your file manager into the sprite pane or costume/sound list. You can also drag text files into lists or \\\"ask and wait\\\" question inputs.\",\"drag-drop/@name\":\"File drag and drop\",\"drag-drop/@settings-name-use-hd-upload\":\"Use HD uploads\",\"editor-buttons-reverse-order/@description\":\"Moves the green flag and stop buttons to the right and the full screen button to the left, like in Scratch 2.0.\",\"editor-buttons-reverse-order/@name\":\"Reverse order of project controls\",\"editor-colored-context-menus/@description\":\"Makes block right click context menus colorful.\",\"editor-colored-context-menus/@name\":\"Colored context menus\",\"editor-comment-previews/@description\":\"Allows you to preview the contents of comments by hovering over collapsed comments and blocks. You can use this to view comments that are off-screen, identify a loop block from the bottom by its preview, fit many long comments in a small space, and more.\",\"editor-comment-previews/@name\":\"Editor comment previews\",\"editor-comment-previews/@settings-name-delay\":\"Delay duration\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Follow mouse\",\"editor-comment-previews/@settings-name-hover-view\":\"Hover collapsed comments to preview\",\"editor-comment-previews/@settings-name-hover-view-block\":\"Hover blocks to preview attached comments\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"Hover custom blocks to preview definition comments\",\"editor-comment-previews/@settings-name-reduce-animation\":\"Reduce animation\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"Reduce transparency\",\"editor-comment-previews/@settings-select-delay-long\":\"Long\",\"editor-comment-previews/@settings-select-delay-none\":\"None\",\"editor-comment-previews/@settings-select-delay-short\":\"Short\",\"editor-compact/@description\":\"Decreases the size of buttons, input fields, the menu bar, and other elements in the editor, making more space for components such as the code area, the costume editor, and costume previews, as was the case in Scratch 2.0.\",\"editor-compact/@info-hide-icons-update\":\"To hide menu bar icons, use the \\\"Customizable menu bar\\\" addon.\",\"editor-compact/@name\":\"Compact editor\",\"editor-compact/@settings-name-hideLabels\":\"Hide button labels in costume and sound editor\",\"editor-devtools/@description\":\"Adds new menu options to the editor: copy/paste blocks, better clean up, and more!\",\"editor-devtools/@name\":\"Developer tools\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Enhance \\\"Clean up Blocks\\\"\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Paste blocks at mouse cursor\",\"editor-extra-keys/@description\":\"Adds more keys to the \\\"key () pressed?\\\" and \\\"when () key pressed\\\" block dropdowns, such as enter, dot, comma, and more. These keys will work even for users who do not have this addon.\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"The \\\"experimental keys\\\" include equals, slash, semicolon and more. They may not work on all operating systems or keyboard layouts.\",\"editor-extra-keys/@info-shiftKeysWarn\":\"The \\\"Shift keys\\\" include keys which typically require the Shift key and a number key, like hashtag, exclamation mark and more. These keys only work with the \\\"when () key pressed\\\" block and do not work on all operating systems or keyboard layouts.\",\"editor-extra-keys/@info-twKeysWarn\":\"The \\\"TurboWarp keys\\\" will only work in TurboWarp, not in Scratch.\",\"editor-extra-keys/@name\":\"Extra key options\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"Show experimental keys\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Show Shift keys\",\"editor-extra-keys/@settings-name-twKeys\":\"Show TurboWarp keys\",\"editor-number-arrow-keys/@description\":\"Use the up and down arrow keys to increase or decrease number values in numeric input fields such as those in blocks or the sprite properties area.\",\"editor-number-arrow-keys/@name\":\"Arrow key incrementation in editor\",\"editor-number-arrow-keys/@settings-name-alt\":\"Change on Alt+Key\",\"editor-number-arrow-keys/@settings-name-altCustom\":\"Change on Alt+Key\",\"editor-number-arrow-keys/@settings-name-regular\":\"Change on regular key press\",\"editor-number-arrow-keys/@settings-name-regularCustom\":\"Change on regular key press\",\"editor-number-arrow-keys/@settings-name-shift\":\"Change on Shift+Key\",\"editor-number-arrow-keys/@settings-name-shiftCustom\":\"Change on Shift+Key\",\"editor-number-arrow-keys/@settings-name-useCustom\":\"Use custom values\",\"editor-number-arrow-keys/@settings-select-alt-hundredth\":\"0.01\",\"editor-number-arrow-keys/@settings-select-alt-none\":\"None\",\"editor-number-arrow-keys/@settings-select-alt-one\":\"1\",\"editor-number-arrow-keys/@settings-select-alt-ten\":\"10\",\"editor-number-arrow-keys/@settings-select-alt-tenth\":\"0.1\",\"editor-number-arrow-keys/@settings-select-regular-hundredth\":\"0.01\",\"editor-number-arrow-keys/@settings-select-regular-none\":\"None\",\"editor-number-arrow-keys/@settings-select-regular-one\":\"1\",\"editor-number-arrow-keys/@settings-select-regular-ten\":\"10\",\"editor-number-arrow-keys/@settings-select-regular-tenth\":\"0.1\",\"editor-number-arrow-keys/@settings-select-shift-hundredth\":\"0.01\",\"editor-number-arrow-keys/@settings-select-shift-none\":\"None\",\"editor-number-arrow-keys/@settings-select-shift-one\":\"1\",\"editor-number-arrow-keys/@settings-select-shift-ten\":\"10\",\"editor-number-arrow-keys/@settings-select-shift-tenth\":\"0.1\",\"editor-searchable-dropdowns/@description\":\"Allows you to search the options in block dropdowns.\",\"editor-searchable-dropdowns/@name\":\"Block dropdown search\",\"editor-sounds/@description\":\"Plays sound effects when you connect or delete blocks.\",\"editor-sounds/@name\":\"Editor sound effects\",\"editor-square-inputs/@description\":\"Makes certain block input types (such as text or color) rectangular instead of round, like in Scratch 2.0.\",\"editor-square-inputs/@name\":\"Square block inputs\",\"editor-square-inputs/@settings-name-color\":\"Color inputs\",\"editor-square-inputs/@settings-name-number\":\"Number inputs\",\"editor-square-inputs/@settings-name-text\":\"Text inputs\",\"editor-stage-left/@description\":\"Moves the stage to the left side of the editor, like in Scratch 2.0.\",\"editor-stage-left/@info-reverseOrder\":\"To change the position of buttons above the stage, use the \\\"reverse order of project controls\\\" addon.\",\"editor-stage-left/@name\":\"Display stage on left side\",\"editor-stepping/@description\":\"Adds a colored highlight to the blocks that are currently being executed in a project.\",\"editor-stepping/@name\":\"Running block border\",\"editor-stepping/@settings-name-highlight-color\":\"Highlight color\",\"editor-theme3/@description\":\"Edit block colors for each category in the editor.\",\"editor-theme3/@name\":\"Customizable block colors\",\"editor-theme3/@preset-description-black\":\"Makes block backgrounds black and borders/text colored\",\"editor-theme3/@preset-description-contrast\":\"Scratch 3.0's high contrast block color palette\",\"editor-theme3/@preset-description-dark\":\"Even darker versions of the default colors\",\"editor-theme3/@preset-description-new-dark\":\"Dark versions of the default colors that look good in dark themes\",\"editor-theme3/@preset-description-original\":\"The original block colors from Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Scratch 3.0's block colors with Events, Control, and Custom blocks that resemble Scratch 2.0's colors\",\"editor-theme3/@preset-name-black\":\"Black\",\"editor-theme3/@preset-name-contrast\":\"High contrast\",\"editor-theme3/@preset-name-dark\":\"Darker\",\"editor-theme3/@preset-name-new-dark\":\"Dark\",\"editor-theme3/@preset-name-original\":\"Scratch 2.0 colors\",\"editor-theme3/@preset-name-tweaks\":\"Scratch 3.0 tweaked\",\"editor-theme3/@settings-name-comment-color\":\"Comments\",\"editor-theme3/@settings-name-control-color\":\"control\",\"editor-theme3/@settings-name-custom-color\":\"custom\",\"editor-theme3/@settings-name-data-color\":\"variables\",\"editor-theme3/@settings-name-data-lists-color\":\"lists\",\"editor-theme3/@settings-name-events-color\":\"events\",\"editor-theme3/@settings-name-input-color\":\"Block inputs\",\"editor-theme3/@settings-name-looks-color\":\"looks\",\"editor-theme3/@settings-name-motion-color\":\"motion\",\"editor-theme3/@settings-name-operators-color\":\"operators\",\"editor-theme3/@settings-name-Pen-color\":\"extensions\",\"editor-theme3/@settings-name-sa-color\":\"Addon blocks\",\"editor-theme3/@settings-name-sensing-color\":\"sensing\",\"editor-theme3/@settings-name-sounds-color\":\"sounds\",\"editor-theme3/@settings-name-text\":\"Text color\",\"editor-theme3/@settings-select-text-black\":\"Black\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Colored on black background\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Colored on white background\",\"editor-theme3/@settings-select-text-white\":\"White\",\"expanded-backpack/@description\":\"Arranges the contents of the editor backpack into an expandable two-way grid, similar to the costume library and increases the size of certain thumbnails.\",\"expanded-backpack/@name\":\"Multiple rows in backpack\",\"expanded-backpack/@settings-name-rows\":\"Number of displayed rows\",\"expanded-backpack/@settings-name-upscale\":\"Larger costume and script thumbnails\",\"find-bar/@description\":\"Adds a find bar to find and jump to scripts, costumes and sounds next to the sounds tab. Use Ctrl+Left and Ctrl+Right in the code area to navigate to previous or next visited position after using the find bar.\",\"find-bar/@info-developer-tools\":\"This addon was previously part of the \\\"developer tools\\\" addon but has moved here.\",\"find-bar/@name\":\"Editor find bar\",\"find-bar/@settings-name-caseSensitive\":\"Case sensitive search by default\",\"find-bar/@settings-name-enableRegex\":\"Enable regex search\",\"find-bar/@settings-name-maxHistory\":\"Max search history entries\",\"find-bar/@settings-name-searchAllSprites\":\"Search across all sprites\",\"find-bar/@settings-name-showContext\":\"Show search context\",\"folders/@description\":\"Adds folders to the sprite pane, as well as costume and sound lists. To create a folder, right click any sprite and click \\\"create folder\\\". Click a folder to open or close it. Right click a sprite to see what folders you can move it to, or alternatively drag and drop it into an open folder. This feature works by adding \\\"[folderName]//\\\" at the beginning of the names for your sprites.\",\"folders/@info-notice-folders-are-public\":\"Users with this feature enabled will be able to see the folders in your project. Anyone else will see sprite lists normally (no folders).\",\"folders/@name\":\"Sprite folders\",\"frame-stepper/@description\":\"Adds a frame stepping button that appears when paused, allowing you to advance the project by exactly one frame at a time for precise debugging.\",\"frame-stepper/@name\":\"Frame Stepper\",\"fullscreen/@description\":\"Fixes some undesired effects in the project player's full screen mode, opens it in your browser's full screen mode, and hides the green flag toolbar.\",\"fullscreen/@info-hideToolbarNotice\":\"If you choose to never show the toolbar, remember that you can use the Esc key to exit the project player's full screen mode.\",\"fullscreen/@name\":\"Enhanced full screen\",\"fullscreen/@settings-name-browserFullscreen\":\"Open full screen project player in full screen browser mode\",\"fullscreen/@settings-name-toolbar\":\"Toolbar visibility\",\"fullscreen/@settings-select-toolbar-hide\":\"Never\",\"fullscreen/@settings-select-toolbar-hover\":\"When hovered\",\"fullscreen/@settings-select-toolbar-show\":\"Always\",\"gamepad/@description\":\"Interact with projects using a USB or Bluetooth controller/gamepad.\",\"gamepad/@name\":\"Gamepad support\",\"gamepad/@settings-name-hide\":\"Hide settings button when no controllers detected\",\"green-flag-order/@description\":\"Shows numbered badges next to green flag blocks indicating the order they will be executed when the green flag is clicked. Numbers are based on the actual execution order: Stage scripts run last, followed by sprites in reverse layer order.\",\"green-flag-order/@name\":\"Green flag execution order\",\"green-flag-order/@settings-name-badge_color\":\"Badge color\",\"green-flag-order/@settings-name-badge_style\":\"Badge style\",\"green-flag-order/@settings-name-text_color\":\"Text color\",\"green-flag-order/@settings-select-badge_style-circle\":\"Circular badge\",\"green-flag-order/@settings-select-badge_style-square\":\"Square badge\",\"hide-delete-button/@description\":\"Hides delete button (trash can icon) from sprites, costumes and sounds. They can still be deleted using the right click context menu.\",\"hide-delete-button/@info-restoretip\":\"Tip: If you accidentally delete a sprite, costume, or sound, you can undo the deletion by clicking Edit in the menu bar then Restore.\",\"hide-delete-button/@name\":\"Hide delete button\",\"hide-delete-button/@settings-name-costumes\":\"Costumes and backdrops\",\"hide-delete-button/@settings-name-sounds\":\"Sounds\",\"hide-delete-button/@settings-name-sprites\":\"Sprites\",\"hide-flyout/@description\":\"Hides the block palette unless you're hovering over it. Click the lock icon to lock it in place temporarily. Or use the \\\"category click\\\" mode to show/hide it when you click a block category.\",\"hide-flyout/@info-hoverExplanation\":\"\\\"Palette area hover\\\" mode only extends the viewing area. If you want to be able to drag blocks into that area without them getting trashed, use one of the other modes.\",\"hide-flyout/@name\":\"Auto-hiding block palette\",\"hide-flyout/@settings-name-lockLoad\":\"Open by default\",\"hide-flyout/@settings-name-speed\":\"Animation speed\",\"hide-flyout/@settings-name-toggle\":\"Toggle on...\",\"hide-flyout/@settings-select-speed-default\":\"Default\",\"hide-flyout/@settings-select-speed-long\":\"Slow\",\"hide-flyout/@settings-select-speed-none\":\"Instant\",\"hide-flyout/@settings-select-speed-short\":\"Quick\",\"hide-flyout/@settings-select-toggle-category\":\"Category click\",\"hide-flyout/@settings-select-toggle-cathover\":\"Category hover\",\"hide-flyout/@settings-select-toggle-hover\":\"Palette area hover\",\"hide-new-variables/@description\":\"Do not automatically show monitors for newly created variables or lists.\",\"hide-new-variables/@name\":\"Hide new variables\",\"hide-stage/@description\":\"Adds a button next to the \\\"small stage\\\" and \\\"large stage\\\" buttons that hides the stage and the sprite pane, making the code area much larger.\",\"hide-stage/@name\":\"Hide stage and sprite pane\",\"initialise-sprite-position/@description\":\"Change where newly created sprites are placed on the stage.\",\"initialise-sprite-position/@name\":\"Customizable new sprite position\",\"initialise-sprite-position/@settings-name-duplicate\":\"Position for duplicated sprites\",\"initialise-sprite-position/@settings-name-library\":\"Place sprites from library at random position\",\"initialise-sprite-position/@settings-name-x\":\"X position\",\"initialise-sprite-position/@settings-name-y\":\"Y position\",\"initialise-sprite-position/@settings-select-duplicate-custom\":\"Specified x/y position\",\"initialise-sprite-position/@settings-select-duplicate-keep\":\"Same as original sprite\",\"initialise-sprite-position/@settings-select-duplicate-randomize\":\"Random\",\"jump-to-def/@description\":\"Allows you to jump to a custom block's definition using the middle mouse button or Shift+Click on the block.\",\"jump-to-def/@info-developer-tools\":\"This addon was previously part of the \\\"developer tools\\\" addon but has moved here.\",\"jump-to-def/@name\":\"Jump to custom block definition\",\"load-extensions/@description\":\"Auto-shows music, pen, and other extensions in the block category menu in the editor.\",\"load-extensions/@name\":\"Automatically add extensions\",\"load-extensions/@settings-name-music\":\"Music\",\"load-extensions/@settings-name-pen\":\"Pen\",\"load-extensions/@settings-name-text2speech\":\"Text to Speech\",\"load-extensions/@settings-name-translate\":\"Translate\",\"mediarecorder/@description\":\"Adds a \\\"start recording\\\" button to the editor menu bar that allows you to record the project's stage.\",\"mediarecorder/@name\":\"Project video recorder\",\"middle-click-popup/@description\":\"Middle or shift-click the code area, or press Ctrl+Space to bring up a block search window. Type block names (or parts of them) and drag them into the code area to add them to your project. The menu can be navigated with the arrow keys, Page Up/Down, Home/End, and Enter. It supports autocompleting with Tab. To prevent the menu from closing, hold Shift while dragging blocks out of it.\",\"middle-click-popup/@info-developer-tools\":\"This addon was previously part of the \\\"developer tools\\\" addon but has moved here.\",\"middle-click-popup/@info-math-and-conversions\":\"You can now perform math calculations directly in the search (e.g., \\\"10 + 5 * 2\\\") and see the result in a green box. Unit conversions support flexible queries like \\\"5cm in inches\\\", \\\"what is 100 km to miles\\\", \\\"25 c to f\\\". Supports distance (mm, cm, m, km, in, ft, yd, mi), temperature (c, f, k), weight (mg, g, kg, oz, lb, ton), time (ms, s, min, hr, day, week), and angles (deg, rad, grad).\",\"middle-click-popup/@name\":\"Insert blocks by name\",\"middle-click-popup/@settings-name-popup_max_height\":\"Popup Maximum Height\",\"middle-click-popup/@settings-name-popup_scale\":\"Popup Block Size\",\"middle-click-popup/@settings-name-popup_width\":\"Popup Width\",\"mouse-pos/@description\":\"Displays your mouse x/y position above the stage in the editor.\",\"mouse-pos/@name\":\"Mouse position display\",\"move-to-top-bottom/@description\":\"Adds options to the right click context menu for costumes and sounds to move them to the top or the bottom of the list.\",\"move-to-top-bottom/@info-developer-tools\":\"This addon was previously part of the \\\"developer tools\\\" addon but has moved here.\",\"move-to-top-bottom/@name\":\"Move costume to top or bottom\",\"move-to-top-layer/@description\":\"Shift+Click a sprite within the sprite pane to move it to the front (top layer) of the stage.\",\"move-to-top-layer/@name\":\"Move sprite to front layer\",\"mute-project/@description\":\"Ctrl+Click the green flag to mute/unmute the project.\",\"mute-project/@info-macOS\":\"On macOS, use the Cmd key instead of the Ctrl key.\",\"mute-project/@name\":\"Muted project player mode\",\"no-category-text/@description\":\"Removes the text labels from block categories and expands the icon/bubble to fill the space. Includes settings to adjust the spacing between icons and their scale.\",\"no-category-text/@name\":\"Hide category text and expand icons\",\"no-category-text/@settings-name-iconScale\":\"Icon scale (50-300%)\",\"no-category-text/@settings-name-iconSpacing\":\"Icon spacing (10-200%)\",\"no-script-bumping/@description\":\"Allows scripts to be moved and modified without causing overlapping scripts to move around.\",\"no-script-bumping/@name\":\"Do not automatically space overlapping scripts\",\"number-pad/@description\":\"Show Scratch's virtual number pad when editing number fields in blocks on all devices, instead of only touchscreen devices.\",\"number-pad/@info-explanation\":\"A number pad will show when editing number inputs from blocks such as \\\"move () steps\\\".\",\"number-pad/@name\":\"Always show number pad\",\"onion-skinning/@description\":\"Shows transparent overlays of previous or next costumes when editing a costume. Controlled by buttons under the costume editor by the zoom buttons.\",\"onion-skinning/@name\":\"Onion skinning\",\"onion-skinning/@settings-name-afterTint\":\"Next costume tint\",\"onion-skinning/@settings-name-beforeTint\":\"Previous costume tint\",\"onion-skinning/@settings-name-default\":\"Enable by default\",\"onion-skinning/@settings-name-layering\":\"Default layering\",\"onion-skinning/@settings-name-mode\":\"Default mode\",\"onion-skinning/@settings-name-next\":\"Default next costumes\",\"onion-skinning/@settings-name-opacity\":\"Opacity (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Opacity Step (%)\",\"onion-skinning/@settings-name-previous\":\"Default previous costumes\",\"onion-skinning/@settings-select-layering-behind\":\"Behind\",\"onion-skinning/@settings-select-layering-front\":\"Front\",\"onion-skinning/@settings-select-mode-merge\":\"Merge images\",\"onion-skinning/@settings-select-mode-tint\":\"Color tint\",\"paint-by-default/@description\":\"Changes the default action of \\\"Choose a Sprite/Costume/Backdrop/Sound\\\" buttons, which open the library by default.\",\"paint-by-default/@name\":\"Paint costume by default\",\"paint-by-default/@settings-name-backdrop\":\"Add backdrop\",\"paint-by-default/@settings-name-costume\":\"Add costume\",\"paint-by-default/@settings-name-sound\":\"Add sound\",\"paint-by-default/@settings-name-sprite\":\"Add sprite\",\"paint-by-default/@settings-select-backdrop-library\":\"Library\",\"paint-by-default/@settings-select-backdrop-paint\":\"Paint\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Surprise\",\"paint-by-default/@settings-select-backdrop-upload\":\"Upload\",\"paint-by-default/@settings-select-costume-library\":\"Library\",\"paint-by-default/@settings-select-costume-paint\":\"Paint\",\"paint-by-default/@settings-select-costume-surprise\":\"Surprise\",\"paint-by-default/@settings-select-costume-upload\":\"Upload\",\"paint-by-default/@settings-select-sound-library\":\"Library\",\"paint-by-default/@settings-select-sound-record\":\"Record\",\"paint-by-default/@settings-select-sound-surprise\":\"Surprise\",\"paint-by-default/@settings-select-sound-upload\":\"Upload\",\"paint-by-default/@settings-select-sprite-library\":\"Library\",\"paint-by-default/@settings-select-sprite-paint\":\"Paint\",\"paint-by-default/@settings-select-sprite-surprise\":\"Surprise\",\"paint-by-default/@settings-select-sprite-upload\":\"Upload\",\"paint-skew/@description\":\"Hold Ctrl while scaling an object on its sides to skew it. Hold Alt while skewing an object to skew it from its center.\",\"paint-skew/@info-useCmdOnMac\":\"On macOS, use the Command key instead of the Control key and the Option key instead of the Alt key.\",\"paint-skew/@name\":\"Skewing in costume editor\",\"paint-snap/@description\":\"Snap objects in the costume editor to bounding boxes and vector nodes.\",\"paint-snap/@name\":\"Costume editor snapping\",\"paint-snap/@settings-name-boxCenter\":\"Snap from selection box center\",\"paint-snap/@settings-name-boxCorners\":\"Snap from selection box corners\",\"paint-snap/@settings-name-boxEdgeMids\":\"Snap from selection box edge midpoints\",\"paint-snap/@settings-name-enable-default\":\"Enable by default\",\"paint-snap/@settings-name-guide-color\":\"Snapping guide color\",\"paint-snap/@settings-name-objectCenters\":\"Snap to object centers\",\"paint-snap/@settings-name-objectCorners\":\"Snap to object corners\",\"paint-snap/@settings-name-objectEdges\":\"Snap to object edges\",\"paint-snap/@settings-name-objectMidlines\":\"Snap to object midlines\",\"paint-snap/@settings-name-pageAxes\":\"Snap to page x and y axes\",\"paint-snap/@settings-name-pageCenter\":\"Snap to page center\",\"paint-snap/@settings-name-pageCorners\":\"Snap to page corners\",\"paint-snap/@settings-name-pageEdges\":\"Snap to page edges\",\"paint-snap/@settings-name-threshold\":\"Snapping distance\",\"pause/@description\":\"Adds a button to pause the project next to the green flag.\",\"pause/@info-keybind\":\"The project can also be paused with Alt+X (Option+X on macOS).\",\"pause/@name\":\"Pause button\",\"pick-colors-from-stage/@description\":\"Allows the eyedropper in the costume editor to also pick colors from the stage.\",\"pick-colors-from-stage/@name\":\"Pick colors on stage with eyedropper\",\"remove-curved-stage-border/@description\":\"Removes the curved border around the stage, allowing you to see the corners.\",\"remove-curved-stage-border/@name\":\"Remove curved stage border\",\"remove-extension-button/@description\":\"Removes the \\\"Add Extension\\\" button from the block palette.\",\"remove-extension-button/@name\":\"Hide extension button\",\"remove-sprite-confirm/@description\":\"Asks if you're sure when deleting a sprite inside a project.\",\"remove-sprite-confirm/@info-restoretip\":\"Tip: If you accidentally delete a sprite, costume, or sound, you can undo the deletion by clicking Edit in the menu bar then Restore.\",\"remove-sprite-confirm/@name\":\"Sprite deletion confirmation\",\"rename-broadcasts/@description\":\"Adds an option to rename broadcast messages in the broadcast blocks' dropdowns.\",\"rename-broadcasts/@name\":\"Rename broadcasts\",\"reorder-custom-inputs/@description\":\"Allows rearranging custom block parameters on the \\\"Make a block\\\" screen.\",\"reorder-custom-inputs/@name\":\"Rearrangeable custom block inputs\",\"reorder-custom-inputs/@settings-name-InsertInputsAfter\":\"Insert new inputs after selected input\",\"script-snap/@description\":\"Drag a script to automatically align its position to the code area dots.\",\"script-snap/@name\":\"Snap scripts to grid\",\"script-snap/@preset-name-default\":\"Default\",\"script-snap/@preset-name-half-block\":\"Half-block\",\"script-snap/@preset-name-whole-block\":\"Whole-block\",\"script-snap/@settings-name-grid\":\"Grid size (px)\",\"search-sprites/@description\":\"Adds a search box to the sprite pane to search for sprites by name.\",\"search-sprites/@name\":\"Search box in sprite pane\",\"sprite-properties/@description\":\"Hides the sprite properties panel by default, like in Scratch 2.0. Use the info button on the currently selected sprite or double-click a sprite to show the properties panel again. To re-hide it, use the collapse button in the properties panel or double-click a sprite.\",\"sprite-properties/@name\":\"Collapsing sprite properties\",\"sprite-properties/@settings-name-autoCollapse\":\"Automatically collapse when mouse leaves sprite panel\",\"sprite-properties/@settings-name-hideByDefault\":\"Collapse panel by default\",\"sprite-properties/@settings-name-transitionDuration\":\"Animation speed\",\"sprite-properties/@settings-select-transitionDuration-default\":\"Default\",\"sprite-properties/@settings-select-transitionDuration-long\":\"Slow\",\"sprite-properties/@settings-select-transitionDuration-none\":\"Instant\",\"sprite-properties/@settings-select-transitionDuration-short\":\"Quick\",\"swap-local-global/@description\":\"Adds more options when renaming an existing variable or list: allows changing between \\\"For all sprites\\\" and \\\"For this sprite only\\\" and whether variables are stored in the cloud. Also adds a new option when right clicking a variable/list to quickly change its scope.\",\"swap-local-global/@name\":\"Switch variables between \\\"For all sprites\\\" and \\\"For this sprite only\\\"\",\"transparent-orphans/@description\":\"Adjust the transparency for blocks in the editor, with separate options for orphaned blocks (those without a hat block at the top) and blocks that are being dragged.\",\"transparent-orphans/@name\":\"Block transparency\",\"transparent-orphans/@settings-name-block\":\"Block transparency (%)\",\"transparent-orphans/@settings-name-dragged\":\"Dragged transparency (%)\",\"transparent-orphans/@settings-name-orphan\":\"Orphaned transparency (%)\",\"tw-disable-cloud-variables/@description\":\"Disable cloud variables by default.You can still re-enable them using the Edit > Enable cloud variables menu.\",\"tw-disable-cloud-variables/@name\":\"Disable cloud variables\",\"tw-disable-compiler/@description\":\"Turns off the compiler by default in the script editor. It can still be manually enabled through the \\\"Advanced\\\" menu bar button.\",\"tw-disable-compiler/@name\":\"Disable compiler in editor\",\"tw-remove-backpack/@description\":\"Removes the backpack feature from the editor.\",\"tw-remove-backpack/@name\":\"Hide backpack\",\"tw-remove-feedback/@description\":\"Removes the feedback button from the menu bar.\",\"tw-remove-feedback/@name\":\"Remove feedback button\",\"tw-straighten-comments/@description\":\"Forces block comments to always be connected to their source block by a horizontal straight line, not at an angle.\",\"tw-straighten-comments/@name\":\"Keep block comment connections straight\",\"variable-manager/@description\":\"Enhanced variable and list manager with improved accessibility, modern UI design, better search capabilities, responsive positioning, and optimized performance for managing project variables.\",\"variable-manager/@name\":\"Variable manager\",\"vol-slider/@description\":\"Adds a volume slider next to the green flag controls.\",\"vol-slider/@name\":\"Project volume slider\",\"vol-slider/@settings-name-always\":\"Always show slider\",\"vol-slider/@settings-name-defVol\":\"Default volume\",\"zebra-striping/@description\":\"Makes blocks of the same category alternate between lighter and darker shades when nested inside each other. This is also known as zebra striping.\",\"zebra-striping/@name\":\"Alternating nested block colors\",\"zebra-striping/@settings-name-intensity\":\"Intensity (0-100%)\",\"zebra-striping/@settings-name-shade\":\"Shade\",\"zebra-striping/@settings-select-shade-darker\":\"Darker\",\"zebra-striping/@settings-select-shade-lighter\":\"Lighter\",\"project-size-display/@name\":\"Project Size Display\",\"project-size-display/@description\":\"Displays project size, block count, and selected sprite/stage size at the bottom of the sprite selector.\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/zh-cn.json":
/*!****************************************************!*\
  !*** ./src/addons/addons-l10n-settings/zh-cn.json ***!
  \****************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enablePasteBlocksAtMouse, find-bar/@description, find-bar/@info-developer-tools, find-bar/@name, middle-click-popup/@description, middle-click-popup/@info-developer-tools, middle-click-popup/@name, middle-click-popup/@settings-name-popup_max_height, middle-click-popup/@settings-name-popup_scale, middle-click-popup/@settings-name-popup_width, jump-to-def/@description, jump-to-def/@info-developer-tools, jump-to-def/@name, reorder-custom-inputs/@description, reorder-custom-inputs/@name, reorder-custom-inputs/@settings-name-InsertInputsAfter, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-lockLoad, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, debugger/@name, debugger/@settings-name-fancy_graphs, debugger/@settings-name-log_broadcasts, debugger/@settings-name-log_clear_greenflag, debugger/@settings-name-log_clone_create, debugger/@settings-name-log_failed_clone_creation, debugger/@settings-name-log_greenflag, pause/@description, pause/@info-keybind, pause/@name, mute-project/@description, mute-project/@info-macOS, mute-project/@name, vol-slider/@description, vol-slider/@name, vol-slider/@settings-name-always, vol-slider/@settings-name-defVol, clones/@description, clones/@name, clones/@settings-name-projectpage, clones/@settings-name-showicononly, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@info-restoretip, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, paint-snap/@description, paint-snap/@name, paint-snap/@settings-name-boxCenter, paint-snap/@settings-name-boxCorners, paint-snap/@settings-name-boxEdgeMids, paint-snap/@settings-name-enable-default, paint-snap/@settings-name-guide-color, paint-snap/@settings-name-objectCenters, paint-snap/@settings-name-objectCorners, paint-snap/@settings-name-objectEdges, paint-snap/@settings-name-objectMidlines, paint-snap/@settings-name-pageAxes, paint-snap/@settings-name-pageCenter, paint-snap/@settings-name-pageCorners, paint-snap/@settings-name-pageEdges, paint-snap/@settings-name-threshold, default-costume-editor-color/@description, default-costume-editor-color/@name, default-costume-editor-color/@settings-name-fill, default-costume-editor-color/@settings-name-persistence, default-costume-editor-color/@settings-name-stroke, default-costume-editor-color/@settings-name-strokeSize, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, paint-skew/@description, paint-skew/@info-useCmdOnMac, paint-skew/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, pick-colors-from-stage/@description, pick-colors-from-stage/@name, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-square-inputs/@description, editor-square-inputs/@name, editor-square-inputs/@settings-name-color, editor-square-inputs/@settings-name-number, editor-square-inputs/@settings-name-text, zebra-striping/@description, zebra-striping/@name, zebra-striping/@settings-name-intensity, zebra-striping/@settings-name-shade, zebra-striping/@settings-select-shade-darker, zebra-striping/@settings-select-shade-lighter, custom-menu-bar/@description, custom-menu-bar/@info-small-screens, custom-menu-bar/@name, custom-menu-bar/@settings-name-menu-labels, custom-menu-bar/@settings-select-menu-labels-both, custom-menu-bar/@settings-select-menu-labels-icons, custom-menu-bar/@settings-select-menu-labels-labels, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-contrast, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-new-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-contrast, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-new-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-comment-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, custom-block-text/@description, custom-block-text/@name, custom-block-text/@settings-name-bold, custom-block-text/@settings-name-shadow, custom-block-text/@settings-name-size, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@info-reverseOrder, editor-stage-left/@name, editor-buttons-reverse-order/@description, editor-buttons-reverse-order/@name, variable-manager/@description, variable-manager/@name, search-sprites/@description, search-sprites/@name, sprite-properties/@description, sprite-properties/@name, sprite-properties/@settings-name-autoCollapse, sprite-properties/@settings-name-hideByDefault, sprite-properties/@settings-name-transitionDuration, sprite-properties/@settings-select-transitionDuration-default, sprite-properties/@settings-select-transitionDuration-long, sprite-properties/@settings-select-transitionDuration-none, sprite-properties/@settings-select-transitionDuration-short, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, copy-reporter/@description, copy-reporter/@name, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-duplicate, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, initialise-sprite-position/@settings-select-duplicate-custom, initialise-sprite-position/@settings-select-duplicate-keep, initialise-sprite-position/@settings-select-duplicate-randomize, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@info-restoretip, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@name, disable-stage-drag-select/@settings-name-drag_while_stopped, move-to-top-bottom/@description, move-to-top-bottom/@info-developer-tools, move-to-top-bottom/@name, move-to-top-layer/@description, move-to-top-layer/@name, disable-paste-offset/@description, disable-paste-offset/@info-vanilla, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, rename-broadcasts/@description, rename-broadcasts/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, number-pad/@description, number-pad/@info-explanation, number-pad/@name, editor-number-arrow-keys/@description, editor-number-arrow-keys/@name, editor-number-arrow-keys/@settings-name-alt, editor-number-arrow-keys/@settings-name-altCustom, editor-number-arrow-keys/@settings-name-regular, editor-number-arrow-keys/@settings-name-regularCustom, editor-number-arrow-keys/@settings-name-shift, editor-number-arrow-keys/@settings-name-shiftCustom, editor-number-arrow-keys/@settings-name-useCustom, editor-number-arrow-keys/@settings-select-alt-none, editor-number-arrow-keys/@settings-select-regular-none, editor-number-arrow-keys/@settings-select-shift-none, expanded-backpack/@description, expanded-backpack/@name, expanded-backpack/@settings-name-rows, expanded-backpack/@settings-name-upscale, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, fullscreen/@description, fullscreen/@info-hideToolbarNotice, fullscreen/@name, fullscreen/@settings-name-browserFullscreen, fullscreen/@settings-name-toolbar, fullscreen/@settings-select-toolbar-hide, fullscreen/@settings-select-toolbar-hover, fullscreen/@settings-select-toolbar-show, hide-stage/@description, hide-stage/@name, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, workspace-tabs/@name, workspace-tabs/@description, workspace-tabs/@settings-name-maxTabs, workspace-tabs/@settings-name-showNumbers, workspace-tabs/@settings-name-enableCategories, workspace-tabs/@settings-name-showSearch, workspace-tabs/@settings-name-autoBackup, autosave/@description, autosave/@name, autosave/@settings-name-enabled, autosave/@settings-name-interval, autosave/@settings-name-saveOnlyWhenChanged, autosave/@settings-name-showNotifications, block-count/@settings-name-show_complexity_score, block-switching/@settings-name-sa, calculator/@description, calculator/@name, calculator/@settings-name-remember_position, calculator/@settings-name-show_button, canvas-screenshot/@description, canvas-screenshot/@name, canvas-screenshot/@settings-name-show_notifications, canvas-screenshot/@settings-name-sound_url, debugger/@settings-name-log_invalid_cloud_data, debugger/@settings-name-log_max_list_length, dev-inspector/@description, dev-inspector/@name, editor-compact/@description, editor-compact/@info-hide-icons-update, editor-compact/@name, editor-compact/@settings-name-hideLabels, editor-extra-keys/@info-twKeysWarn, editor-extra-keys/@settings-name-twKeys, editor-number-arrow-keys/@settings-select-alt-hundredth, editor-number-arrow-keys/@settings-select-alt-one, editor-number-arrow-keys/@settings-select-alt-ten, editor-number-arrow-keys/@settings-select-alt-tenth, editor-number-arrow-keys/@settings-select-regular-hundredth, editor-number-arrow-keys/@settings-select-regular-one, editor-number-arrow-keys/@settings-select-regular-ten, editor-number-arrow-keys/@settings-select-regular-tenth, editor-number-arrow-keys/@settings-select-shift-hundredth, editor-number-arrow-keys/@settings-select-shift-one, editor-number-arrow-keys/@settings-select-shift-ten, editor-number-arrow-keys/@settings-select-shift-tenth, editor-theme3/@settings-name-sa-color, find-bar/@settings-name-caseSensitive, find-bar/@settings-name-enableRegex, find-bar/@settings-name-maxHistory, find-bar/@settings-name-searchAllSprites, find-bar/@settings-name-showContext, frame-stepper/@description, frame-stepper/@name, green-flag-order/@description, green-flag-order/@name, green-flag-order/@settings-name-badge_color, green-flag-order/@settings-name-badge_style, green-flag-order/@settings-name-text_color, green-flag-order/@settings-select-badge_style-circle, green-flag-order/@settings-select-badge_style-square, middle-click-popup/@info-math-and-conversions, no-category-text/@description, no-category-text/@name, no-category-text/@settings-name-iconScale, no-category-text/@settings-name-iconSpacing, remove-extension-button/@description, remove-extension-button/@name, tw-disable-cloud-variables/@description, tw-disable-cloud-variables/@name, tw-disable-compiler/@description, tw-disable-compiler/@name, tw-remove-backpack/@description, tw-remove-backpack/@name, tw-remove-feedback/@description, tw-remove-feedback/@name, tw-straighten-comments/@description, tw-straighten-comments/@name, window-theme/@name, window-theme/@description, window-theme/@settings-name-window-theme, window-theme/@settings-select-window-theme-mistwarp, window-theme/@settings-select-window-theme-macos, window-theme/@settings-select-window-theme-windows10, tab-styles/@name, tab-styles/@description, tab-styles/@settings-name-tab_style, tab-styles/@settings-select-tab_style-turbowarp, tab-styles/@settings-select-tab_style-scratchbox, tab-styles/@settings-select-tab_style-bilup, tab-styles/@settings-name-looks, tab-styles/@settings-select-looks-default, tab-styles/@settings-select-looks-text-only, tab-styles/@settings-select-looks-icon-only, sprite-folders/@name, sprite-folders/@description, tw-comment-markdown-editor/@name, tw-comment-markdown-editor/@description, hide-menubar/@name, hide-menubar/@description, toolbox-category-drag/@name, toolbox-category-drag/@description, toolbox-category-drag/@info-draggable-incompatibility, block-pins/@name, block-pins/@description, block-pins/@info-checkbox-notice, block-pins/@settings-name-autoLoadExts, show-fps/@description, show-fps/@name, simple-project-analyzer/@name, simple-project-analyzer/@description, background/@name, background/@description, background/@info-reducePerformance, todo/@name, todo/@description, novatheai/@name, novatheai/@description, project-size-display/@name, project-size-display/@description, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"重新获取2020年愚人节首次推出的编辑器猫猫帽子积木。\",\"cat-blocks/@info-watch\":\"当编辑器打开时，“跟随鼠标”设置可能会影响性能。\",\"cat-blocks/@name\":\"猫积木\",\"cat-blocks/@settings-name-watch\":\"跟随鼠标\",\"editor-devtools/@description\":\"为编辑器添加了新的菜单选项:复制/粘贴积木，更好的积木整理，以及更多功能!\",\"editor-devtools/@name\":\"开发者工具\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"增强“整理积木”\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"在鼠标指针处粘贴积木\",\"find-bar/@description\":\"可以查找并跳转至积木，造型和声音。电脑用户可以按Ctrl+←和Ctrl+→来导航至上一个或下一个积木。\",\"find-bar/@info-developer-tools\":\"此插件曾是“开发者工具”的一部分，后来放到了这里。\",\"find-bar/@name\":\"查找积木\",\"middle-click-popup/@description\":\"鼠标中键或Shift+左键单击代码区域，或者按Ctrl+空格键弹出积木搜索窗口。输入积木名称(或部分名称)，然后将积木拖入代码区以添加到项目中。可以使用上下键和Enter键导航菜单，支持Tab键自动补全。为了防止菜单关闭，可以在拖出积木时按住Shift键。\",\"middle-click-popup/@info-developer-tools\":\"这个插件之前是“开发者工具”插件的一部分，但现在移到了这里。\",\"middle-click-popup/@name\":\"根据名字插入积木\",\"middle-click-popup/@settings-name-popup_max_height\":\"弹窗的最大高度\",\"middle-click-popup/@settings-name-popup_scale\":\"弹窗中积木的大小\",\"middle-click-popup/@settings-name-popup_width\":\"弹窗的宽度\",\"jump-to-def/@description\":\"可以让你用鼠标滚轮或Shift+鼠标左键跳转至自制积木的代码。\",\"jump-to-def/@info-developer-tools\":\"此插件曾是“开发者工具”的一部分，后来移到了这里。\",\"jump-to-def/@name\":\"跳至自制积木\",\"reorder-custom-inputs/@description\":\"允许在“制作新的积木”页面，重新排列自制积木的参数顺序。\",\"reorder-custom-inputs/@name\":\"可重新排序的自制积木参数\",\"reorder-custom-inputs/@settings-name-InsertInputsAfter\":\"在选中的输入框后插入新的输入框\",\"editor-searchable-dropdowns/@description\":\"让你能够搜索积木下拉菜单中的选项\",\"editor-searchable-dropdowns/@name\":\"积木下拉菜单搜索框\",\"data-category-tweaks-v2/@description\":\"给变量区不同种类的变量分组\",\"data-category-tweaks-v2/@name\":\"变量区分组\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"将变量/列表设置积木移到变量和列表上方\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"列表单独分组\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"分离“仅适用于当前角色”的变量\",\"block-palette-icons/@description\":\"在标识块类别的彩色圆圈内添加图标。\",\"block-palette-icons/@name\":\"积木调色板类别图标\",\"hide-flyout/@description\":\"隐藏积木栏，除非鼠标悬停在积木栏上方。点击锁定图标来置顶积木栏，也可以使用“类别区点击”模式，当点击积木类别图标时显示/隐藏积木栏。\",\"hide-flyout/@info-hoverExplanation\":\"“积木区悬停”模式可能会将你的脚本删除。你还可以试试其他模式。\",\"hide-flyout/@name\":\"自动隐藏积木区\",\"hide-flyout/@settings-name-lockLoad\":\"默认打开\",\"hide-flyout/@settings-name-speed\":\"动画速度\",\"hide-flyout/@settings-name-toggle\":\"模式\",\"hide-flyout/@settings-select-speed-default\":\"默认\",\"hide-flyout/@settings-select-speed-long\":\"缓慢\",\"hide-flyout/@settings-select-speed-none\":\"立即\",\"hide-flyout/@settings-select-speed-short\":\"快速\",\"hide-flyout/@settings-select-toggle-category\":\"类别区点击\",\"hide-flyout/@settings-select-toggle-cathover\":\"类别区悬停\",\"hide-flyout/@settings-select-toggle-hover\":\"积木区悬停\",\"mediarecorder/@description\":\"在编辑器菜单栏添加“开始录制”按钮，用于录制作品的舞台区。\",\"mediarecorder/@name\":\"作品录制工具\",\"drag-drop/@description\":\"让你将文件直接拖入角色区并导入!当然，你还能将文字文件拖入文字输入框中。\",\"drag-drop/@name\":\"文件拖放\",\"drag-drop/@settings-name-use-hd-upload\":\"使用高清图片上传\",\"debugger/@description\":\"向编辑器添加一个新的“调试器”窗口。允许使用“日志”、“警告”和“错误”积木在调试器窗口的日志选项卡中记录日志。当执行“断点”积木时，作品将暂停。可以在调试器窗口的“线程”选项卡中查看所有正在运行的积木栈，并且在暂停时，可以使用“单步执行”按钮执行下一个积木。在“性能”选项卡中，可以查看每秒帧数和克隆数量的曲线图。\",\"debugger/@name\":\"调试器\",\"debugger/@settings-name-fancy_graphs\":\"带动画的曲线图(可能影响性能)\",\"debugger/@settings-name-log_broadcasts\":\"记录广播日志\",\"debugger/@settings-name-log_clear_greenflag\":\"当绿旗被点击时清除日志\",\"debugger/@settings-name-log_clone_create\":\"记录克隆日志\",\"debugger/@settings-name-log_failed_clone_creation\":\"当克隆体数量超出限制时，产生日志\",\"debugger/@settings-name-log_greenflag\":\"记录绿旗点击日志\",\"pause/@description\":\"在绿旗按钮旁边增加一个暂停作品的按钮。\",\"pause/@info-keybind\":\"作品也可以用Alt+X暂停 (macOS上是Option+X)。\",\"pause/@name\":\"暂停按钮\",\"mute-project/@description\":\"Ctrl+鼠标左键点击小绿旗切换静音或取消静音。\",\"mute-project/@info-macOS\":\"在 macOS 上，用 Cmd 键代替 Ctrl 键。\",\"mute-project/@name\":\"静音\",\"vol-slider/@description\":\"在绿旗旁添加一个声音滑动条\",\"vol-slider/@name\":\"项目声音滑动条\",\"vol-slider/@settings-name-always\":\"总是显示音量滑竿\",\"vol-slider/@settings-name-defVol\":\"默认音量\",\"clones/@description\":\"在编辑器中的舞台上方添加一个计数器，显示克隆体总数。\",\"clones/@name\":\"克隆计数器\",\"clones/@settings-name-projectpage\":\"显示在作品页面\",\"clones/@settings-name-showicononly\":\"只显示图标\",\"mouse-pos/@description\":\"在编辑器的舞台上方显示鼠标x/y坐标。\",\"mouse-pos/@name\":\"显示鼠标坐标\",\"color-picker/@description\":\"在取色器增加一个16进制颜色代码的输入框。\",\"color-picker/@name\":\"16进制取色器\",\"remove-sprite-confirm/@description\":\"当你在项目中删除一个角色时，询问是否确认。\",\"remove-sprite-confirm/@info-restoretip\":\"提示:如果您不小心删除了角色、造型或声音，您可以通过单击菜单栏中的编辑，然后点击还原来恢复删除内容。\",\"remove-sprite-confirm/@name\":\"删除角色确认框\",\"block-count/@description\":\"在编辑器菜单栏上显示作品里积木的总数。原先是拓展“角色和积木数量”的一部分。\",\"block-count/@name\":\"积木数量\",\"onion-skinning/@description\":\"在编辑造型时显示上一个或下一个造型的透明叠加层。由造型编辑器下方，缩放按钮旁边的按钮控制。\",\"onion-skinning/@name\":\"洋葱皮\",\"onion-skinning/@settings-name-afterTint\":\"后面造型染色\",\"onion-skinning/@settings-name-beforeTint\":\"前面造型染色\",\"onion-skinning/@settings-name-default\":\"默认开启\",\"onion-skinning/@settings-name-layering\":\"默认图层位置\",\"onion-skinning/@settings-name-mode\":\"默认模式\",\"onion-skinning/@settings-name-next\":\"默认的后面造型数\",\"onion-skinning/@settings-name-opacity\":\"不透明度(%)\",\"onion-skinning/@settings-name-opacityStep\":\"不透明度步长(%)\",\"onion-skinning/@settings-name-previous\":\"默认的前面造型数\",\"onion-skinning/@settings-select-layering-behind\":\"后面\",\"onion-skinning/@settings-select-layering-front\":\"前面\",\"onion-skinning/@settings-select-mode-merge\":\"融合图片\",\"onion-skinning/@settings-select-mode-tint\":\"颜色染色\",\"paint-snap/@description\":\"将造型编辑器中的对象吸附到边界框和矢量点。\",\"paint-snap/@name\":\"造型编辑器吸附\",\"paint-snap/@settings-name-boxCenter\":\"从选中框中心对齐\",\"paint-snap/@settings-name-boxCorners\":\"从选中框角落对齐\",\"paint-snap/@settings-name-boxEdgeMids\":\"从选中框边缘中点对齐\",\"paint-snap/@settings-name-enable-default\":\"默认开启\",\"paint-snap/@settings-name-guide-color\":\"吸附引导色\",\"paint-snap/@settings-name-objectCenters\":\"吸附到物体中心\",\"paint-snap/@settings-name-objectCorners\":\"吸附到物体角落\",\"paint-snap/@settings-name-objectEdges\":\"吸附到物体边缘\",\"paint-snap/@settings-name-objectMidlines\":\"吸附到物体中线\",\"paint-snap/@settings-name-pageAxes\":\"吸附到页面x和y轴\",\"paint-snap/@settings-name-pageCenter\":\"吸附到页面中心\",\"paint-snap/@settings-name-pageCorners\":\"吸附到页面角落\",\"paint-snap/@settings-name-pageEdges\":\"吸附到页面边缘\",\"paint-snap/@settings-name-threshold\":\"吸附距离\",\"default-costume-editor-color/@description\":\"更改造型编辑器的颜色和轮廓大小。\",\"default-costume-editor-color/@name\":\"自定义缺省造型编辑器颜色\",\"default-costume-editor-color/@settings-name-fill\":\"默认填充色\",\"default-costume-editor-color/@settings-name-persistence\":\"在切换工具时，使用之前使用的颜色而不是重置颜色\",\"default-costume-editor-color/@settings-name-stroke\":\"默认轮廓色\",\"default-costume-editor-color/@settings-name-strokeSize\":\"默认轮廓大小\",\"bitmap-copy/@description\":\"允许你将位图图片从造型编辑器复制到系统剪贴板中，以便将其粘贴到其他网站或软件中。\",\"bitmap-copy/@info-norightclick\":\"不支持“右键点击→复制”。你必须在选择位图图像时按Ctrl+C来复制。\",\"bitmap-copy/@name\":\"位图复制\",\"2d-color-picker/@description\":\"用 2D 颜色选择器替换角色编辑器中的饱和度和亮度滑块。在拖动光标的同时按住 Shift 以更改单个轴上的值。\",\"2d-color-picker/@name\":\"2D 颜色选择器\",\"paint-skew/@description\":\"在侧边缩放对象时，按住 Ctrl 键以倾斜它。在倾斜对象时按住 Alt 键以从中心倾斜它。\",\"paint-skew/@info-useCmdOnMac\":\"在 macOS 上，使用 Command 键代替 Control 键，使用 Option 键代替 Alt 键。\",\"paint-skew/@name\":\"在造型编辑器中倾斜\",\"better-img-uploads/@description\":\"在“上传造型”按钮上方添加一个新按钮，该按钮自动将上传的位图图像转换为 SVG(矢量)图像，以避免丢失质量。\",\"better-img-uploads/@info-notSuitableEdit\":\"如果您打算在上传后编辑图像，请避免使用高清图片上传按钮。\",\"better-img-uploads/@name\":\"高清图片上传\",\"better-img-uploads/@settings-name-fitting\":\"图片大小\",\"better-img-uploads/@settings-select-fitting-fill\":\"拉伸以填充画布\",\"better-img-uploads/@settings-select-fitting-fit\":\"缩小以适应画布\",\"better-img-uploads/@settings-select-fitting-full\":\"原始大小\",\"pick-colors-from-stage/@description\":\"允许造型编辑器中的取色器在舞台上取色。\",\"pick-colors-from-stage/@name\":\"在舞台上使用选色器\",\"custom-block-shape/@description\":\"随意更改积木形状!\",\"custom-block-shape/@info-paddingWarning\":\"这些设置的效果只有你能看到。当其他用户浏览你的作品时，作品中的积木可能会重叠。\",\"custom-block-shape/@name\":\"自定义积木形状\",\"custom-block-shape/@preset-description-default2\":\"很向 Scratch 2.0 积木的形状\",\"custom-block-shape/@preset-description-default3\":\"Scratch 3.0 积木的正常显示\",\"custom-block-shape/@preset-description-flat2\":\"去除了凹口和边角的 Scratch 2.0 块\",\"custom-block-shape/@preset-description-flat3\":\"去除了凹口和边角的 Scratch 3.0 块\",\"custom-block-shape/@preset-name-default2\":\"2.0 积木\",\"custom-block-shape/@preset-name-default3\":\"3.0 积木\",\"custom-block-shape/@preset-name-flat2\":\"扁平化 2.0 积木\",\"custom-block-shape/@preset-name-flat3\":\"扁平化 3.0 积木\",\"custom-block-shape/@settings-name-cornerSize\":\"圆角大小 (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"缺口高度 (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"内边距 (50-200%)\",\"editor-square-inputs/@description\":\"让特定积木输入类型(如文本、颜色框)变成方形而不是圆形，就像 Scratch 2.0 中的那样。\",\"editor-square-inputs/@name\":\"方形积木输入\",\"editor-square-inputs/@settings-name-color\":\"颜色输入框\",\"editor-square-inputs/@settings-name-number\":\"数字输入框\",\"editor-square-inputs/@settings-name-text\":\"文本输入框\",\"zebra-striping/@description\":\"让同类的积木像斑马一样交替在亮色与暗色间。\",\"zebra-striping/@name\":\"交替积木颜色\",\"zebra-striping/@settings-name-intensity\":\"强度(0-100)\",\"zebra-striping/@settings-name-shade\":\"阴影\",\"zebra-striping/@settings-select-shade-darker\":\"暗色\",\"zebra-striping/@settings-select-shade-lighter\":\"亮色\",\"custom-menu-bar/@description\":\"允许你隐藏特定的菜单栏内容，或移除他们的标签或图标。\",\"custom-menu-bar/@info-small-screens\":\"在小窗口中时，自动将文本标签替换为小图标。\",\"custom-menu-bar/@name\":\"自定义编辑器菜单栏\",\"custom-menu-bar/@settings-name-menu-labels\":\"显示菜单……\",\"custom-menu-bar/@settings-select-menu-labels-both\":\"图标和标签\",\"custom-menu-bar/@settings-select-menu-labels-icons\":\"只显示图标\",\"custom-menu-bar/@settings-select-menu-labels-labels\":\"只显示标签\",\"editor-theme3/@description\":\"设定编辑器中每一类积木的颜色\",\"editor-theme3/@name\":\"自定义积木颜色\",\"editor-theme3/@preset-description-black\":\"使积木变为黑色背景彩色文字\",\"editor-theme3/@preset-description-contrast\":\"Scratch 3.0 高对比度积木颜色\",\"editor-theme3/@preset-description-dark\":\"比默认颜色更加暗的颜色\",\"editor-theme3/@preset-description-new-dark\":\"比默认颜色稍微暗的颜色，适合暗黑主题\",\"editor-theme3/@preset-description-original\":\"Scratch 2.0 的积木颜色\",\"editor-theme3/@preset-description-tweaks\":\"使用 Scratch 3.0 中的颜色，其中事件、控制和自定义积木使用 Scratch 2.0 中的颜色\",\"editor-theme3/@preset-name-black\":\"黑\",\"editor-theme3/@preset-name-contrast\":\"高对比度\",\"editor-theme3/@preset-name-dark\":\"更暗\",\"editor-theme3/@preset-name-new-dark\":\"暗色\",\"editor-theme3/@preset-name-original\":\"Scratch 2.0 颜色\",\"editor-theme3/@preset-name-tweaks\":\"Scratch 3.0 调整\",\"editor-theme3/@settings-name-Pen-color\":\"扩展程序\",\"editor-theme3/@settings-name-comment-color\":\"积木批注\",\"editor-theme3/@settings-name-control-color\":\"控制\",\"editor-theme3/@settings-name-custom-color\":\"自制积木\",\"editor-theme3/@settings-name-data-color\":\"变量\",\"editor-theme3/@settings-name-data-lists-color\":\"列表\",\"editor-theme3/@settings-name-events-color\":\"事件\",\"editor-theme3/@settings-name-input-color\":\"输入框颜色\",\"editor-theme3/@settings-name-looks-color\":\"外观\",\"editor-theme3/@settings-name-motion-color\":\"运动\",\"editor-theme3/@settings-name-operators-color\":\"运算\",\"editor-theme3/@settings-name-sensing-color\":\"侦测\",\"editor-theme3/@settings-name-sounds-color\":\"声音\",\"editor-theme3/@settings-name-text\":\"文字颜色\",\"editor-theme3/@settings-select-text-black\":\"黑色\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"黑底彩字\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"白底彩字\",\"editor-theme3/@settings-select-text-white\":\"白色\",\"custom-block-text/@description\":\"让你可以自定义积木上的文本样式，包括调整大小、使用粗体文本或添加阴影。\",\"custom-block-text/@name\":\"个性化积木文本样式\",\"custom-block-text/@settings-name-bold\":\"粗体\",\"custom-block-text/@settings-name-shadow\":\"文字加阴影\",\"custom-block-text/@settings-name-size\":\"文本大小(%)\",\"editor-colored-context-menus/@description\":\"使积木的右键菜单背景颜色与积木的颜色对应。\",\"editor-colored-context-menus/@name\":\"彩色右键菜单\",\"editor-stage-left/@description\":\"像 Scratch 2.0 中一样在编辑器中将舞台移动到左侧。\",\"editor-stage-left/@info-reverseOrder\":\"为了更改舞台上方按钮的位置，使用“项目控件反向顺序”插件\",\"editor-stage-left/@name\":\"将舞台移到左侧\",\"editor-buttons-reverse-order/@description\":\"将绿旗和停止按钮向右移动，将全屏按钮向左移动，就像在 Scratch 2.0 中一样。\",\"editor-buttons-reverse-order/@name\":\"项目控件反向顺序\",\"variable-manager/@description\":\"在编辑器中的“声音”旁边添加一个选项卡，以便轻松更新变量和列表。\",\"variable-manager/@name\":\"变量管理器\",\"search-sprites/@description\":\"在角色面板内增加一个搜索框，以按名字搜索角色\",\"search-sprites/@name\":\"角色面板的搜索框\",\"sprite-properties/@description\":\"默认情况下隐藏角色属性面板，就像在Scratch 2.0中一样。点击选定角色上的信息按钮或双击角色，可以显示属性面板。若要再次隐藏面板，点击面板中的折叠按钮或双击角色。\",\"sprite-properties/@name\":\"折叠角色属性\",\"sprite-properties/@settings-name-autoCollapse\":\"当鼠标离开时自动收起角色面板\",\"sprite-properties/@settings-name-hideByDefault\":\"默认收起角色面板\",\"sprite-properties/@settings-name-transitionDuration\":\"动画速度\",\"sprite-properties/@settings-select-transitionDuration-default\":\"默认\",\"sprite-properties/@settings-select-transitionDuration-long\":\"缓慢\",\"sprite-properties/@settings-select-transitionDuration-none\":\"立刻\",\"sprite-properties/@settings-select-transitionDuration-short\":\"快速\",\"gamepad/@description\":\"使用 USB 或蓝牙控制器/游戏手柄与项目交互。\",\"gamepad/@name\":\"游戏手柄支持\",\"gamepad/@settings-name-hide\":\"未检测到控制器时隐藏设置按钮\",\"editor-sounds/@description\":\"连接或删除积木时播放音效。\",\"editor-sounds/@name\":\"编辑器音效\",\"folders/@description\":\"将文件夹添加到角色窗格，以及造型和声音列表。 要创建文件夹，请右键单击任何角色并单击“创建文件夹”。 单击文件夹以打开或关闭它。 右键单击角色以查看可以将其移动到哪些文件夹，或者将其拖放到打开的文件夹中。 此功能通过在您的角色名称的开头添加“[文件夹名称]//”来工作。\",\"folders/@info-notice-folders-are-public\":\"启用此功能的用户将能够看到您项目中的文件夹。 其他任何人都会正常看到角色列表(没有文件夹)。\",\"folders/@name\":\"角色文件夹\",\"block-switching/@description\":\"右键单击一个积木将其切换到相关积木。\",\"block-switching/@name\":\"切换积木\",\"block-switching/@settings-name-control\":\"控制积木\",\"block-switching/@settings-name-customargs\":\"自制积木参数\",\"block-switching/@settings-name-customargsmode\":\"显示自制积木的参数选项\",\"block-switching/@settings-name-data\":\"数据积木\",\"block-switching/@settings-name-event\":\"事件积木\",\"block-switching/@settings-name-extension\":\"扩展积木\",\"block-switching/@settings-name-looks\":\"外观积木\",\"block-switching/@settings-name-motion\":\"运动积木\",\"block-switching/@settings-name-noop\":\"显示切换积木为自己的选项\",\"block-switching/@settings-name-operator\":\"运算积木\",\"block-switching/@settings-name-sensing\":\"侦测积木\",\"block-switching/@settings-name-sound\":\"声音积木\",\"block-switching/@settings-select-customargsmode-all\":\"角色中所有自制积木的参数\",\"block-switching/@settings-select-customargsmode-defOnly\":\"当前自制积木的参数\",\"load-extensions/@description\":\"自动显示音乐、画笔、或其他拓展程序，无需手动操作。\",\"load-extensions/@name\":\"自动添加扩展\",\"load-extensions/@settings-name-music\":\"音乐\",\"load-extensions/@settings-name-pen\":\"画笔\",\"load-extensions/@settings-name-text2speech\":\"文字转语音\",\"load-extensions/@settings-name-translate\":\"翻译\",\"custom-zoom/@description\":\"为代码区域中积木缩放的最小值、最大值、速度和起始大小选择自定义设置，并自动隐藏控件。\",\"custom-zoom/@name\":\"自定义代码区域缩放\",\"custom-zoom/@settings-name-autohide\":\"自动隐藏缩放控件\",\"custom-zoom/@settings-name-maxZoom\":\"最大缩放 (100-500%)\",\"custom-zoom/@settings-name-minZoom\":\"最小缩放 (1-100%)\",\"custom-zoom/@settings-name-speed\":\"自动隐藏动画的速度\",\"custom-zoom/@settings-name-startZoom\":\"起始缩放 (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"缩放速度 (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"默认\",\"custom-zoom/@settings-select-speed-long\":\"缓慢\",\"custom-zoom/@settings-select-speed-none\":\"立即\",\"custom-zoom/@settings-select-speed-short\":\"快速\",\"copy-reporter/@description\":\"在变量显示器 (右键菜单)，以及在积木返回值气泡上增加一个复制值的选项。\",\"copy-reporter/@name\":\"复制返回值积木的值\",\"initialise-sprite-position/@description\":\"改变新创建的角色被放置在舞台的位置。\",\"initialise-sprite-position/@name\":\"自定义新角色位置\",\"initialise-sprite-position/@settings-name-duplicate\":\"复制角色的位置\",\"initialise-sprite-position/@settings-name-library\":\"将角色库中的角色放置在随机位置\",\"initialise-sprite-position/@settings-name-x\":\"X 坐标\",\"initialise-sprite-position/@settings-name-y\":\"Y 坐标\",\"initialise-sprite-position/@settings-select-duplicate-custom\":\"特定的x/y坐标\",\"initialise-sprite-position/@settings-select-duplicate-keep\":\"和原角色相同\",\"initialise-sprite-position/@settings-select-duplicate-randomize\":\"随机\",\"blocks2image/@description\":\"右键单击代码区域以将积木导出为 SVG/PNG 图像。\",\"blocks2image/@name\":\"保存积木为图像\",\"remove-curved-stage-border/@description\":\"移除舞台周围的弯曲边框，让您可以看到角落。\",\"remove-curved-stage-border/@name\":\"移除弯曲的舞台边框\",\"transparent-orphans/@description\":\"调整编辑器中块的透明度，为孤立块(顶部没有帽子块的那些)和正在拖动的块提供单独的选项。\",\"transparent-orphans/@name\":\"积木透明度\",\"transparent-orphans/@settings-name-block\":\"积木透明度 (%)\",\"transparent-orphans/@settings-name-dragged\":\"正在拖动的块透明度 (%)\",\"transparent-orphans/@settings-name-orphan\":\"孤立积木的透明度 (%)\",\"paint-by-default/@description\":\"更改直接点击“选择一个角色/造型/背景/声音”按钮，默认打开“库”。\",\"paint-by-default/@name\":\"更改直接点击“选择一个…”的操作\",\"paint-by-default/@settings-name-backdrop\":\"直接添加背景\",\"paint-by-default/@settings-name-costume\":\"直接添加造型\",\"paint-by-default/@settings-name-sound\":\"直接添加声音\",\"paint-by-default/@settings-name-sprite\":\"直接添加角色\",\"paint-by-default/@settings-select-backdrop-library\":\"库\",\"paint-by-default/@settings-select-backdrop-paint\":\"绘制\",\"paint-by-default/@settings-select-backdrop-surprise\":\"随机\",\"paint-by-default/@settings-select-backdrop-upload\":\"上传\",\"paint-by-default/@settings-select-costume-library\":\"库\",\"paint-by-default/@settings-select-costume-paint\":\"绘制\",\"paint-by-default/@settings-select-costume-surprise\":\"随机\",\"paint-by-default/@settings-select-costume-upload\":\"上传\",\"paint-by-default/@settings-select-sound-library\":\"库\",\"paint-by-default/@settings-select-sound-record\":\"录制\",\"paint-by-default/@settings-select-sound-surprise\":\"随机\",\"paint-by-default/@settings-select-sound-upload\":\"上传\",\"paint-by-default/@settings-select-sprite-library\":\"库\",\"paint-by-default/@settings-select-sprite-paint\":\"绘制\",\"paint-by-default/@settings-select-sprite-surprise\":\"随机\",\"paint-by-default/@settings-select-sprite-upload\":\"上传\",\"block-cherry-picking/@description\":\"让你可以按住 Ctrl 键把单个积木从积木组中拖出(而不是积木以及后面连接的所有积木)。\",\"block-cherry-picking/@info-flipControls\":\"如果启用了\\\"翻转控件\\\"，则单独抓取积木将是默认行为。 按住Ctrl拖动整个脚本。\",\"block-cherry-picking/@info-macContextDisabled\":\"在 macOS 上，用 Cmd 键代替 Ctrl 键。\",\"block-cherry-picking/@name\":\"按 Ctrl 键拖动单个积木\",\"block-cherry-picking/@settings-name-invertDrag\":\"翻转控件\",\"hide-new-variables/@description\":\"不自动显示新创建的变量或列表的显示器。\",\"hide-new-variables/@name\":\"隐藏新变量\",\"editor-extra-keys/@description\":\"为“按下()键?”和“当按下()键?”积木增加更多按键选项，例如enter、点、逗号键，以及更多。这些按键甚至可对没有安装此插件的用户起作用。\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"\\\"实验按键\\\"包括等号、斜杠、分号等。 它们可能不适用于所有操作系统或键盘布局。\",\"editor-extra-keys/@info-shiftKeysWarn\":\"\\\"Shift键\\\"包括通常需要Shift键和数字键的键，如井号，感叹号等。 这些键仅适用于\\\"当 () 被点击\\\"块，不适用于所有操作系统或键盘布局。\",\"editor-extra-keys/@name\":\"更多按键选项\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"显示实验按键\",\"editor-extra-keys/@settings-name-shiftKeys\":\"显示shift键\",\"hide-delete-button/@description\":\"隐藏了角色、造型和声音中的删除按钮(垃圾桶图标)。它们仍然可以使用右键菜单删除。\",\"hide-delete-button/@info-restoretip\":\"提示:如果你不小心删除了角色、造型或声音，你可以通过点击菜单栏中的“编辑”按钮，然后单击“还原”来恢复删除。\",\"hide-delete-button/@name\":\"隐藏删除按钮\",\"hide-delete-button/@settings-name-costumes\":\"造型和背景\",\"hide-delete-button/@settings-name-sounds\":\"声音\",\"hide-delete-button/@settings-name-sprites\":\"角色\",\"no-script-bumping/@description\":\"允许移动和修改脚本，而不会导致重叠的脚本四处移动。\",\"no-script-bumping/@name\":\"不要自动设置重叠脚本的空间\",\"disable-stage-drag-select/@description\":\"禁止在编辑器中在舞台上拖动角色，那些明确设置为可拖动的角色除外。需要按住 Shift 才能在编辑器中正常拖动不可拖动的角色。\",\"disable-stage-drag-select/@name\":\"编辑器内不可拖拽的角色\",\"disable-stage-drag-select/@settings-name-drag_while_stopped\":\"在作品停止时允许拖动\",\"move-to-top-bottom/@description\":\"在造型和音频页的右键菜单中添加移到列表顶部或底部的选项。\",\"move-to-top-bottom/@info-developer-tools\":\"此插件曾是“开发者工具”的一部分，后来移到了这里。\",\"move-to-top-bottom/@name\":\"把造型移到顶部或底部\",\"move-to-top-layer/@description\":\"Shift+单击角色栏中的角色，将其移动到舞台的前面(顶层)。\",\"move-to-top-layer/@name\":\"将角色移到最前面\",\"disable-paste-offset/@description\":\"在同一个造型中复制粘贴形状时在原始位置粘贴，不向右下偏移\",\"disable-paste-offset/@info-vanilla\":\"也可以通过Alt+单击物体实现原地复制，无需插件。\",\"disable-paste-offset/@name\":\"粘贴形状时不偏移\",\"block-duplicate/@description\":\"按住 Ait 键拖动积木可以复制积木。\",\"block-duplicate/@info-mac\":\"在 macOS 上用 Option 键代替 Alt 键。\",\"block-duplicate/@name\":\"按住 Alt 键复制积木\",\"rename-broadcasts/@description\":\"在广播语句的下拉列表中添加重命名广播的选项\",\"rename-broadcasts/@name\":\"重命名广播\",\"swap-local-global/@description\":\"重命名存在的变量或者列表的时候添加更多功能:把变量在“适用于所有角色”与“仅适用于当前角色”和云变量与普通变量之间转换。也可以右键点击变量，在右键菜单中直接进行转换。\",\"swap-local-global/@name\":\"把变量或者列表在“适用于所有角色”和“仅适用于当前角色”之间转换\",\"editor-comment-previews/@description\":\"让你能够把鼠标放在积木或者折叠的注释上面预览注释的内容。可以用这一点来查看连接的太远的注释，通过查看积木注释来从底下判断处于哪个循环积木，把很长的单行注释折叠到比较小的地方，等等。\",\"editor-comment-previews/@name\":\"预览注释\",\"editor-comment-previews/@settings-name-delay\":\"延迟\",\"editor-comment-previews/@settings-name-follow-mouse\":\"跟随鼠标\",\"editor-comment-previews/@settings-name-hover-view\":\"指向折叠的注释时预览内容\",\"editor-comment-previews/@settings-name-hover-view-block\":\"指向积木时预览其注释的内容\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"指向自制积木时预览其定义的注释的内容\",\"editor-comment-previews/@settings-name-reduce-animation\":\"无弹出动画\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"不透明\",\"editor-comment-previews/@settings-select-delay-long\":\"长\",\"editor-comment-previews/@settings-select-delay-none\":\"无\",\"editor-comment-previews/@settings-select-delay-short\":\"短\",\"columns/@description\":\"将积木分类菜单分成两列，并把分类栏移到积木列表的顶部，就像在 Scratch 2.0 中那样。\",\"columns/@name\":\"双列分类菜单\",\"number-pad/@description\":\"在所有设备上编辑积木的数字参数时显示Scratch的虚拟数字键盘，而不仅仅是在触屏设备上显示。\",\"number-pad/@info-explanation\":\"在编辑如“移动()步”等代码块中的数字输入时，会显示数字键盘。\",\"number-pad/@name\":\"始终显示数字键盘\",\"editor-number-arrow-keys/@description\":\"使用上下键增减数字输入框中的值，例如积木的数字框或角色属性输入框。\",\"editor-number-arrow-keys/@name\":\"在编辑器中上下键增减值\",\"editor-number-arrow-keys/@settings-name-alt\":\"按下 Alt + 按键时改变\",\"editor-number-arrow-keys/@settings-name-altCustom\":\"按下 Alt + 按键时改变\",\"editor-number-arrow-keys/@settings-name-regular\":\"按下常规按键时改变\",\"editor-number-arrow-keys/@settings-name-regularCustom\":\"按下常规按键时改变\",\"editor-number-arrow-keys/@settings-name-shift\":\"按下 Shift + 按键时改变\",\"editor-number-arrow-keys/@settings-name-shiftCustom\":\"按下 Shift + 按键时改变\",\"editor-number-arrow-keys/@settings-name-useCustom\":\"使用自定义值\",\"editor-number-arrow-keys/@settings-select-alt-none\":\"无\",\"editor-number-arrow-keys/@settings-select-regular-none\":\"无\",\"editor-number-arrow-keys/@settings-select-shift-none\":\"无\",\"expanded-backpack/@description\":\"将编辑器背包的内容排列成一个可扩展的双向网格，类似于造型库，并增加某些缩略图的大小。\",\"expanded-backpack/@name\":\"多行背包\",\"expanded-backpack/@settings-name-rows\":\"显示的行数\",\"expanded-backpack/@settings-name-upscale\":\"更大的造型和脚本缩略图\",\"script-snap/@description\":\"积木拖动之后会自动和积木区的格点对齐。\",\"script-snap/@name\":\"把积木吸附到网格\",\"script-snap/@preset-name-default\":\"默认\",\"script-snap/@preset-name-half-block\":\"半个积木的高度\",\"script-snap/@preset-name-whole-block\":\"整个积木的高度\",\"script-snap/@settings-name-grid\":\"格点距离(像素)\",\"fullscreen/@description\":\"修复了一些全屏模式下一些不希望的效果。全屏时同时让浏览器全屏并且隐藏绿旗所在工具栏。\",\"fullscreen/@info-hideToolbarNotice\":\"如果你选择不显示工具栏，请记住你可以使用Esc键来退出项目播放器的全屏模式。\",\"fullscreen/@name\":\"增强全屏\",\"fullscreen/@settings-name-browserFullscreen\":\"点击全屏时同时让浏览器进入全屏模式\",\"fullscreen/@settings-name-toolbar\":\"工具栏可见性\",\"fullscreen/@settings-select-toolbar-hide\":\"从不\",\"fullscreen/@settings-select-toolbar-hover\":\"当鼠标悬停时\",\"fullscreen/@settings-select-toolbar-show\":\"总是\",\"hide-stage/@description\":\"在“小舞台”和“大舞台”按钮旁边添加一个按钮，隐藏舞台和角色窗格，使代码区域更大。\",\"hide-stage/@name\":\"隐藏舞台和角色窗格\",\"editor-stepping/@description\":\"项目运行时高亮正在运行的积木\",\"editor-stepping/@name\":\"给运行中的积木显示边框\",\"editor-stepping/@settings-name-highlight-color\":\"高亮色\",\"workspace-tabs/@name\":\"工作区书签\",\"workspace-tabs/@description\":\"增强的工作区书签系统，支持分类、搜索和导入/导出功能。轻松在项目不同部分之间导航，使用高级分类功能。\",\"workspace-tabs/@settings-name-maxTabs\":\"最大书签数量\",\"workspace-tabs/@settings-name-showNumbers\":\"显示书签数量\",\"workspace-tabs/@settings-name-enableCategories\":\"启用分类\",\"workspace-tabs/@settings-name-showSearch\":\"显示搜索栏\",\"workspace-tabs/@settings-name-autoBackup\":\"自动备份书签\",\"autosave/@description\":\"定期自动将项目保存为本地文件，以防止数据丢失。\",\"autosave/@name\":\"自动保存\",\"autosave/@settings-name-enabled\":\"启用自动保存\",\"autosave/@settings-name-interval\":\"自动保存间隔(分钟)\",\"autosave/@settings-name-saveOnlyWhenChanged\":\"仅在项目发生更改时保存\",\"autosave/@settings-name-showNotifications\":\"显示保存通知\",\"block-count/@settings-name-show_complexity_score\":\"在菜单栏中显示复杂度评分\",\"block-switching/@settings-name-sa\":\"插件积木\",\"calculator/@description\":\"添加一个浮动的计算器窗口，可在制作项目时进行快速数学计算。支持基本算术运算、存储功能，并具有简洁现代的界面。\",\"calculator/@name\":\"计算器\",\"calculator/@settings-name-remember_position\":\"记住窗口位置\",\"calculator/@settings-name-show_button\":\"在菜单中显示计算器按钮\",\"canvas-screenshot/@description\":\"在调试器旁添加一个截图按钮，用于截取舞台画布并复制到剪贴板，同时可设置自定义音效。\",\"canvas-screenshot/@name\":\"画布截图\",\"canvas-screenshot/@settings-name-show_notifications\":\"启用截图通知\",\"canvas-screenshot/@settings-name-sound_url\":\"音效 URL\",\"debugger/@settings-name-log_invalid_cloud_data\":\"记录无效的云变量值\",\"debugger/@settings-name-log_max_list_length\":\"列表长度超出上限时记录日志\",\"dev-inspector/@description\":\"添加右键选项，用于检查积木并查看其 JSON 表示形式及有用的调试信息。\",\"dev-inspector/@name\":\"开发者检查器\",\"editor-compact/@description\":\"减小编辑器中按钮、输入框、菜单栏等元素的尺寸，为代码区、造型编辑器和造型预览等区域腾出更多空间，类似 Scratch 2.0 的布局。\",\"editor-compact/@info-hide-icons-update\":\"如需隐藏菜单栏图标，请使用“可自定义菜单栏”插件。\",\"editor-compact/@name\":\"紧凑编辑器\",\"editor-compact/@settings-name-hideLabels\":\"在造型和声音编辑器中隐藏按钮标签\",\"editor-extra-keys/@info-twKeysWarn\":\"“TurboWarp 按键”仅在 TurboWarp 中可用，在 Scratch 中无法使用。\",\"editor-extra-keys/@settings-name-twKeys\":\"显示 TurboWarp 按键\",\"editor-number-arrow-keys/@settings-select-alt-hundredth\":\"0.01\",\"editor-number-arrow-keys/@settings-select-alt-one\":\"1\",\"editor-number-arrow-keys/@settings-select-alt-ten\":\"10\",\"editor-number-arrow-keys/@settings-select-alt-tenth\":\"0.1\",\"editor-number-arrow-keys/@settings-select-regular-hundredth\":\"0.01\",\"editor-number-arrow-keys/@settings-select-regular-one\":\"1\",\"editor-number-arrow-keys/@settings-select-regular-ten\":\"10\",\"editor-number-arrow-keys/@settings-select-regular-tenth\":\"0.1\",\"editor-number-arrow-keys/@settings-select-shift-hundredth\":\"0.01\",\"editor-number-arrow-keys/@settings-select-shift-one\":\"1\",\"editor-number-arrow-keys/@settings-select-shift-ten\":\"10\",\"editor-number-arrow-keys/@settings-select-shift-tenth\":\"0.1\",\"editor-theme3/@settings-name-sa-color\":\"插件积木\",\"find-bar/@settings-name-caseSensitive\":\"默认区分大小写搜索\",\"find-bar/@settings-name-enableRegex\":\"启用正则表达式搜索\",\"find-bar/@settings-name-maxHistory\":\"最大搜索历史记录数\",\"find-bar/@settings-name-searchAllSprites\":\"在所有角色中搜索\",\"find-bar/@settings-name-showContext\":\"显示搜索上下文\",\"frame-stepper/@description\":\"在暂停时显示逐帧执行按钮，允许一次精确推进项目一帧，便于精细调试。\",\"frame-stepper/@name\":\"逐帧执行\",\"green-flag-order/@description\":\"在绿旗积木旁显示编号徽章，表示点击绿旗时的执行顺序。顺序基于实际执行情况:舞台脚本最后运行，其次是按图层逆序排列的角色。\",\"green-flag-order/@name\":\"绿旗执行顺序\",\"green-flag-order/@settings-name-badge_color\":\"徽章颜色\",\"green-flag-order/@settings-name-badge_style\":\"徽章样式\",\"green-flag-order/@settings-name-text_color\":\"文字颜色\",\"green-flag-order/@settings-select-badge_style-circle\":\"圆形徽章\",\"green-flag-order/@settings-select-badge_style-square\":\"方形徽章\",\"middle-click-popup/@info-math-and-conversions\":\"你现在可以直接在搜索框中进行数学计算(例如“10 + 5 * 2”)，并在绿色框中查看结果。还支持单位换算，如“5cm in inches”、“100 km to miles”、“25 c to f”。支持距离、温度、重量、时间和角度单位。\",\"no-category-text/@description\":\"移除积木分类中的文字标签，并放大图标或气泡以填充空间。包含用于调整图标间距和缩放比例的设置。\",\"no-category-text/@name\":\"隐藏分类文字并放大图标\",\"no-category-text/@settings-name-iconScale\":\"图标缩放比例(50-300%)\",\"no-category-text/@settings-name-iconSpacing\":\"图标间距(10-200%)\",\"remove-extension-button/@description\":\"从积木面板中移除“添加扩展”按钮。\",\"remove-extension-button/@name\":\"隐藏扩展按钮\",\"tw-disable-cloud-variables/@description\":\"默认禁用云变量。你仍可通过“编辑 > 启用云变量”菜单重新启用。\",\"tw-disable-cloud-variables/@name\":\"禁用云变量\",\"tw-disable-compiler/@description\":\"在脚本编辑器中默认关闭编译器。仍可通过“高级”菜单按钮手动启用。\",\"tw-disable-compiler/@name\":\"在编辑器中禁用编译器\",\"tw-remove-backpack/@description\":\"从编辑器中移除背包功能。\",\"tw-remove-backpack/@name\":\"隐藏背包\",\"tw-remove-feedback/@description\":\"从菜单栏中移除反馈按钮。\",\"tw-remove-feedback/@name\":\"移除反馈按钮\",\"tw-straighten-comments/@description\":\"强制积木注释始终通过一条水平直线连接到其源积木，而不是以倾斜角度连接。\",\"tw-straighten-comments/@name\":\"保持积木注释连接为直线\",\"window-theme/@name\":\"窗口主题\",\"window-theme/@description\":\"在不同的窗口主题之间切换:MistWarp(默认)、macOS或Windows 10。\",\"window-theme/@settings-name-window-theme\":\"窗口主题\",\"window-theme/@settings-select-window-theme-mistwarp\":\"MistWarp (默认)\",\"window-theme/@settings-select-window-theme-macos\":\"macOS 样式\",\"window-theme/@settings-select-window-theme-windows10\":\"Windows 10 样式\",\"tab-styles/@name\":\"选项卡样式\",\"tab-styles/@description\":\"更改编辑器选项卡的外观，使其看起来像其他编辑器。\",\"tab-styles/@settings-name-tab_style\":\"选项卡样式\",\"tab-styles/@settings-select-tab_style-turbowarp\":\"TurboWarp\",\"tab-styles/@settings-select-tab_style-scratchbox\":\"ScratchBox\",\"tab-styles/@settings-select-tab_style-bilup\":\"Bilup\",\"tab-styles/@settings-name-looks\":\"外观\",\"tab-styles/@settings-select-looks-default\":\"默认\",\"tab-styles/@settings-select-looks-text-only\":\"仅文字\",\"tab-styles/@settings-select-looks-icon-only\":\"仅图标\",\"sprite-folders/@name\":\"角色文件列表视图\",\"sprite-folders/@description\":\"将角色列表转换为 VSCode 风格的文件浏览器，支持文件夹(需要使用 // 文件夹命名)。\",\"tw-comment-markdown-editor/@name\":\"Markdown注释编辑器\",\"tw-comment-markdown-editor/@description\":\"为注释框添加Markdown编辑和预览功能，支持标题、粗体、斜体、代码和链接等语法。使用快捷键 Ctrl+M 快速切换编辑/预览模式\",\"hide-menubar/@name\":\"隐藏工具栏\",\"hide-menubar/@description\":\"将工具栏隐藏，且当鼠标靠近时可自动弹出。您也可将其锁定，恢复为常驻显示。\",\"toolbox-category-drag/@name\":\"拖动调整工具箱分类\",\"toolbox-category-drag/@description\":\"通过长按工具箱分类图标来改变他们的分类顺序。\",\"toolbox-category-drag/@info-draggable-incompatibility\":\"该扩展与'双列分类菜单'插件不兼容\",\"block-pins/@name\":\"置顶积木\",\"block-pins/@description\":\"将您最喜爱的积木固定在工具箱的顶部。\",\"block-pins/@info-checkbox-notice\":\"当固定带有复选框的积木时可能会出现BUG\",\"block-pins/@settings-name-autoLoadExts\":\"自动加载置顶积木中的扩展\",\"show-fps/@description\":\"在舞台上方显示当前帧率(FPS)。\",\"show-fps/@name\":\"显示 FPS\",\"simple-project-analyzer/@name\":\"SPA 简易作品分析器\",\"simple-project-analyzer/@description\":\"使用简单的算法在编辑器中分析您的作品!\",\"background/@name\":\"背景\",\"background/@description\":\"让你的编辑器焕然一新。\",\"background/@info-reducePerformance\":\"这可能会造成一些性能问题，而且会覆盖 Bilup 原有的壁纸设置。\",\"todo/@name\":\"待办\",\"todo/@description\":\"记录作品的待办!\",\"novatheai/@name\":\"Bilup Nova\",\"novatheai/@description\":\"一个为 Bilup 设计的 AI 助手，基于 Gandi IDE AI 助手插件。\",\"project-size-display/@name\":\"项目大小显示\",\"project-size-display/@description\":\"在角色栏底部显示作品大小、代码数量和选中角色/舞台的大小。\"}");

/***/ }),

/***/ "./src/addons/channels.js":
/*!********************************!*\
  !*** ./src/addons/channels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let changeChannel;
let reloadChannel;
if (typeof BroadcastChannel !== 'undefined') {
  changeChannel = new BroadcastChannel('addons-change');
  reloadChannel = new BroadcastChannel('addons-reload');
}
/* harmony default export */ __webpack_exports__["default"] = ({
  changeChannel,
  reloadChannel
});

/***/ }),

/***/ "./src/addons/generated/l10n-settings-entries.js":
/*!*******************************************************!*\
  !*** ./src/addons/generated/l10n-settings-entries.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* generated by pull.js */
/* harmony default export */ __webpack_exports__["default"] = ({
  "en": () => __webpack_require__(/*! ../addons-l10n-settings/en.json */ "./src/addons/addons-l10n-settings/en.json"),
  "zh-cn": () => __webpack_require__(/*! ../addons-l10n-settings/zh-cn.json */ "./src/addons/addons-l10n-settings/zh-cn.json")
});

/***/ }),

/***/ "./src/addons/settings/en.json":
/*!*************************************!*\
  !*** ./src/addons/settings/en.json ***!
  \*************************************/
/*! exports provided: title, credits, reset, resetAll, confirmResetAll, dirty, dirtyButton, presets, noCompiler, tagRecommended, tagDanger, tagTheme, tagBeta, tagNew, tagAstraEditor, tagPoorlang, groupNew, groupOthers, groupDanger, search, noResults, filterByTags, clearTagFilters, tags.MistWarp, tags.sprites, tags.recommended, tags.theme, tags.beta, tags.new, tags.danger, tags.easter-egg, tags.editor, tags.workflow, tags.toolbox, tags.astraeditor, tags.poorlang, export, import, unsupported, addonFeedback, enableDangerous, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Addon Settings\",\"credits\":\"Credits:\",\"reset\":\"Reset\",\"resetAll\":\"Reset all\",\"confirmResetAll\":\"Are you sure you want to reset all addon settings to their default values?\",\"dirty\":\"Reload tabs to apply settings.\",\"dirtyButton\":\"Reload now\",\"presets\":\"Presets\",\"noCompiler\":\"This addon only works when the compiler is disabled through the Advanced > Disable Compiler menu or using the \\\"Disable compiler in editor\\\" addon.\",\"tagRecommended\":\"Recommended\",\"tagDanger\":\"Dangerous\",\"tagTheme\":\"Theme\",\"tagBeta\":\"Beta\",\"tagNew\":\"New!\",\"tagAstraEditor\":\"AstraEditor\",\"tagPoorlang\":\"Poor Language Support\",\"groupNew\":\"New ({number})\",\"groupOthers\":\"Others ({number})\",\"groupDanger\":\"Dangerous ({number})\",\"search\":\"Search\",\"noResults\":\"No results.\",\"filterByTags\":\"Filter by tags:\",\"clearTagFilters\":\"Clear filters\",\"tags.MistWarp\":\"MistWarp\",\"tags.sprites\":\"Sprites\",\"tags.recommended\":\"Recommended\",\"tags.theme\":\"Theme\",\"tags.beta\":\"Beta\",\"tags.new\":\"New\",\"tags.danger\":\"Dangerous\",\"tags.easter-egg\":\"Easter Egg\",\"tags.editor\":\"Editor\",\"tags.workflow\":\"Workflow\",\"tags.toolbox\":\"Toolbox\",\"tags.astraeditor\":\"AstraEditor\",\"tags.poorlang\":\"Poor Language Support\",\"export\":\"Export settings\",\"import\":\"Import settings\",\"unsupported\":\"Some addons are not available in this browser:\",\"addonFeedback\":\"Addon Feedback\",\"enableDangerous\":\"This addon is dangerous and may intentionally DISABLE features. We do not recommend you enable this addon. Are you sure you want to enable it?\"}");

/***/ }),

/***/ "./src/addons/settings/icons/brush.svg":
/*!*********************************************!*\
  !*** ./src/addons/settings/icons/brush.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNyAxNGMtMS42NiAwLTMgMS4zNC0zIDMgMCAxLjMxLTEuMTYgMi0yIDIgLjkyIDEuMjIgMi40OSAyIDQgMiAyLjIxIDAgNC0xLjc5IDQtNCAwLTEuNjYtMS4zNC0zLTMtM3ptMTMuNzEtOS4zN2wtMS4zNC0xLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw5IDEyLjI1IDExLjc1IDE1bDguOTYtOC45NmMuMzktLjM5LjM5LTEuMDIgMC0xLjQxeiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/settings/icons/clear.svg":
/*!*********************************************!*\
  !*** ./src/addons/settings/icons/clear.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/settings/icons/expand.svg":
/*!**********************************************!*\
  !*** ./src/addons/settings/icons/expand.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE2LjU5IDguNTkgMTIgMTMuMTcgNy40MSA4LjU5IDYgMTBsNiA2IDYtNnoiLz48L3N2Zz4K"

/***/ }),

/***/ "./src/addons/settings/icons/extension.svg":
/*!*************************************************!*\
  !*** ./src/addons/settings/icons/extension.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcgMjJINWEzIDMgMCAwIDEtMy0zVjlhMyAzIDAgMCAxIDMtM2gxYTQgNCAwIDAgMSA3LjMtMi4xOEEzLjg2IDMuODYgMCAwIDEgMTQgNmgzYTEgMSAwIDAgMSAxIDF2M2E0IDQgMCAwIDEgMi4xOCA3LjNBMy44NiAzLjg2IDAgMCAxIDE4IDE4djNhMSAxIDAgMCAxLTEgMXpNNSA4YTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDEgMWgxMXYtMy4xOGExIDEgMCAwIDEgLjQyLS44MmExIDEgMCAwIDEgLjkxLS4xM2ExLjc3IDEuNzcgMCAwIDAgMS43NC0uMjNhMiAyIDAgMCAwIC45My0xLjM3YTIgMiAwIDAgMC0uNDgtMS41OWExLjg5IDEuODkgMCAwIDAtMi4xNy0uNTVhMSAxIDAgMCAxLS45MS0uMTNhMSAxIDAgMCAxLS40Mi0uODJWOGgtMy4yYTEgMSAwIDAgMS0xLTEuMzNhMS43NyAxLjc3IDAgMCAwLS4yMy0xLjc0YTEuOTQgMS45NCAwIDAgMC0zLS40M0EyIDIgMCAwIDAgOCA2YTEuODkgMS44OSAwIDAgMCAuMTMuNjdBMSAxIDAgMCAxIDcuMTggOHoiIGZpbGw9ImJsYWNrIi8+PC9zdmc+"

/***/ }),

/***/ "./src/addons/settings/icons/info.svg":
/*!********************************************!*\
  !*** ./src/addons/settings/icons/info.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTEgN2gydjJoLTJ6bTAgNGgydjZoLTJ6bTEtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+PC9zdmc+"

/***/ }),

/***/ "./src/addons/settings/icons/search.svg":
/*!**********************************************!*\
  !*** ./src/addons/settings/icons/search.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/settings/icons/undo.svg":
/*!********************************************!*\
  !*** ./src/addons/settings/icons/undo.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIj48cGF0aCBkPSJNMyAxMWExIDEgMCAwIDEgMSAxIDguMDUgOC4wNSAwIDEgMCAyLjIyLTUuNWgyLjRhMSAxIDAgMCAxIDAgMkg0LjA5YTEgMSAwIDAgMS0xLTFWM2ExIDEgMCAwIDEgMiAwdjEuNzdBMTAgMTAgMCAxIDEgMiAxMmExIDEgMCAwIDEgMS0xeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGZpbGw9InJnYmEoMCwgMCwgMCwgMCkiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz4="

/***/ }),

/***/ "./src/addons/settings/search.js":
/*!***************************************!*\
  !*** ./src/addons/settings/search.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/['"()\-+,./[\]]/g, ' ').trim();
const splitToWords = text => normalize(text).split(' ').filter(i => i);
const parseTexts = texts => {
  const result = [];
  for (const _ref of texts) {
    const score = _ref.score;
    const text = _ref.text;
    result.push({
      score,
      words: splitToWords(text)
    });
  }
  return result;
};
class Search {
  constructor(texts) {
    this.items = texts.map(parseTexts);
  }
  search(query) {
    const terms = splitToWords(query);
    const result = [];
    const processItem = item => {
      let totalScore = 0;
      for (const term of terms) {
        let highestScoreForTerm = 0;
        for (const group of item) {
          for (const word of group.words) {
            const wordIndex = word.indexOf(term);
            if (wordIndex !== -1) {
              let multiplier;
              if (wordIndex === 0) {
                multiplier = 1.5;
              } else {
                multiplier = 1;
              }
              const itemScore = group.score * multiplier;
              if (itemScore > highestScoreForTerm) {
                highestScoreForTerm = itemScore;
              }
            }
          }
        }
        if (highestScoreForTerm === 0) {
          return;
        }
        totalScore += highestScoreForTerm;
      }
      return totalScore;
    };
    for (let i = 0; i < this.items.length; i++) {
      const score = processItem(this.items[i]);
      if (score > 0) {
        result.push({
          index: i,
          score
        });
      }
    }
    result.sort((a, b) => b.score - a.score);
    return result;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/addons/settings/settings.css":
/*!******************************************!*\
  !*** ./src/addons/settings/settings.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??postcss!./settings.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/addons/settings/settings.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/addons/settings/settings.jsx":
/*!******************************************!*\
  !*** ./src/addons/settings/settings.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/addons/settings/search.js");
/* harmony import */ var _generated_addon_manifests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/addon-manifests */ "./src/addons/generated/addon-manifests.js");
/* harmony import */ var _generated_l10n_settings_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/l10n-settings-entries */ "./src/addons/generated/l10n-settings-entries.js");
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.json */ "./src/addons/settings/en.json");
var _en_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./en.json */ "./src/addons/settings/en.json", 1);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translations.json */ "./src/addons/settings/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./src/addons/settings/translations.json", 1);
/* harmony import */ var _generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generated/upstream-meta.json */ "./src/addons/generated/upstream-meta.json");
var _generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../generated/upstream-meta.json */ "./src/addons/generated/upstream-meta.json", 1);
/* harmony import */ var _lib_utils_detect_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils/detect-locale */ "./src/lib/utils/detect-locale.js");
/* harmony import */ var _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../settings-store-singleton */ "./src/addons/settings-store-singleton.js");
/* harmony import */ var _channels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../channels */ "./src/addons/channels.js");
/* harmony import */ var _icons_extension_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/extension.svg */ "./src/addons/settings/icons/extension.svg");
/* harmony import */ var _icons_extension_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_icons_extension_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icons_brush_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/brush.svg */ "./src/addons/settings/icons/brush.svg");
/* harmony import */ var _icons_brush_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_icons_brush_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _icons_undo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/undo.svg */ "./src/addons/settings/icons/undo.svg");
/* harmony import */ var _icons_undo_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_icons_undo_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icons_expand_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/expand.svg */ "./src/addons/settings/icons/expand.svg");
/* harmony import */ var _icons_expand_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_expand_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _icons_info_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/info.svg */ "./src/addons/settings/icons/info.svg");
/* harmony import */ var _icons_info_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_icons_info_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_tw_fancy_checkbox_checkbox_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/tw-fancy-checkbox/checkbox.jsx */ "./src/components/tw-fancy-checkbox/checkbox.jsx");
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings.css */ "./src/addons/settings/settings.css");
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_settings_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _lib_themes_themePersistance_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../lib/themes/themePersistance.js */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _lib_themes_guiHelpers_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../lib/themes/guiHelpers.js */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_constants_brand_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../lib/constants/brand.js */ "./src/lib/constants/brand.js");
/* harmony import */ var _lib_constants_brand_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_lib_constants_brand_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _lib_normalize_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../lib/normalize.css */ "./src/lib/normalize.css");
/* harmony import */ var _lib_normalize_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_lib_normalize_css__WEBPACK_IMPORTED_MODULE_22__);
const _excluded = ["onChange", "value"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Copyright (C) 2021-2023 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

























/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-no-bind */

const locale = Object(_lib_utils_detect_locale__WEBPACK_IMPORTED_MODULE_9__["detectLocale"])(Object.keys(_generated_l10n_settings_entries__WEBPACK_IMPORTED_MODULE_5__["default"]));
document.documentElement.lang = locale;
const addonTranslations = _generated_l10n_settings_entries__WEBPACK_IMPORTED_MODULE_5__["default"][locale] ? _generated_l10n_settings_entries__WEBPACK_IMPORTED_MODULE_5__["default"][locale]() : {};
const settingsTranslations = _en_json__WEBPACK_IMPORTED_MODULE_6__;
if (locale !== 'en') {
  const messages = _translations_json__WEBPACK_IMPORTED_MODULE_7__[locale] || _translations_json__WEBPACK_IMPORTED_MODULE_7__[locale.split('-')[0]];
  if (messages) {
    Object.assign(settingsTranslations, messages);
  }
}
document.title = "".concat(settingsTranslations.title, " - ").concat(_lib_constants_brand_js__WEBPACK_IMPORTED_MODULE_21__["APP_NAME"]);
const theme = Object(_lib_themes_themePersistance_js__WEBPACK_IMPORTED_MODULE_19__["detectTheme"])();
Object(_lib_themes_guiHelpers_js__WEBPACK_IMPORTED_MODULE_20__["applyGuiColors"])(theme);
let _throttleTimeout;
const postThrottledSettingsChange = store => {
  if (_throttleTimeout) {
    clearTimeout(_throttleTimeout);
  }
  _throttleTimeout = setTimeout(() => {
    _channels__WEBPACK_IMPORTED_MODULE_11__["default"].changeChannel.postMessage({
      version: _generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.commit,
      store
    });
  }, 100);
};
const NATIVISED_ADDONS = new Set(['remove-curved-stage-border', 'hide-delete-button', 'remove-extension-button', 'tw-remove-backpack', 'tab-styles', 'window-theme']);
const filterAddonsBySupport = () => {
  const supported = {};
  const unsupported = {};
  for (const _ref of Object.entries(_generated_addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    var _ref2 = _slicedToArray(_ref, 2);
    const id = _ref2[0];
    const manifest = _ref2[1];
    if (NATIVISED_ADDONS.has(id)) {
      continue;
    }
    if (manifest.unsupported) {
      unsupported[id] = manifest;
    } else {
      supported[id] = manifest;
    }
  }
  return {
    supported,
    unsupported
  };
};
const _filterAddonsBySuppor = filterAddonsBySupport(),
  supportedAddons = _filterAddonsBySuppor.supported,
  unsupportedAddons = _filterAddonsBySuppor.unsupported;
const getAllTags = () => {
  const tags = new Set();
  for (const manifest of Object.values(supportedAddons)) {
    for (const tag of manifest.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags).sort();
};
const allTags = getAllTags();
const getInitialSearch = () => {
  const hash = location.hash.substring(1);

  // If the query is an addon ID, it's a better user experience to show the name of the addon
  // in the search bar instead of a ID they won't understand.
  if (Object.prototype.hasOwnProperty.call(_generated_addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"], hash)) {
    const manifest = _generated_addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"][hash];
    return addonTranslations["".concat(hash, "/@name")] || manifest.name;
  }
  return hash;
};
const clearHash = () => {
  // Don't want to insert unnecssary history entry
  // location.hash = ''; leaves a # in the URL
  if (location.hash !== '') {
    history.replaceState(null, null, "".concat(location.pathname).concat(location.search));
  }
};
const CreditList = _ref3 => {
  let credits = _ref3.credits;
  return credits.map((author, index) => {
    const isLast = index === credits.length - 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.credit,
      key: index
    }, author.link ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.link,
      target: "_blank",
      rel: "noreferrer"
    }, author.name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, author.name), isLast ? null : ', ');
  });
};
CreditList.propTypes = {
  credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
const TagFilter = _ref4 => {
  let tags = _ref4.tags,
    selectedTags = _ref4.selectedTags,
    onTagToggle = _ref4.onTagToggle,
    onClearAll = _ref4.onClearAll;
  if (tags.length === 0) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagFilterLabel
  }, settingsTranslations.filterByTags || 'Filter by tags:'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagList
  }, tags.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    key: tag,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagButton, {
      [_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagButtonActive]: selectedTags.has(tag)
    }),
    onClick: () => onTagToggle(tag),
    "aria-pressed": selectedTags.has(tag)
  }, settingsTranslations["tags.".concat(tag)] || tag)), selectedTags.size > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.clearTagsButton,
    onClick: onClearAll,
    title: settingsTranslations.clearTagFilters || 'Clear filters'
  }, '×')));
};
TagFilter.propTypes = {
  tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired,
  selectedTags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Set).isRequired,
  onTagToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onClearAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const Switch = _ref5 => {
  let onChange = _ref5.onChange,
    value = _ref5.value,
    props = _objectWithoutProperties(_ref5, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.switch,
    state: value ? 'on' : 'off',
    role: "checkbox",
    "aria-checked": value ? 'true' : 'false',
    tabIndex: "0",
    onClick: () => onChange(!value)
  }, props));
};
Switch.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
const Select = _ref6 => {
  let onChange = _ref6.onChange,
    value = _ref6.value,
    values = _ref6.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.select
  }, values.map(potentialValue => {
    const id = potentialValue.id;
    const selected = id === value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: id,
      onClick: () => onChange(id),
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.selectOption, {
        [_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.selected]: selected
      })
    }, potentialValue.name);
  }));
};
Select.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
const Tags = _ref7 => {
  let manifest = _ref7.manifest;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagContainer
  }, manifest.tags.includes('recommended') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagRecommended)
  }, settingsTranslations.tagRecommended), manifest.tags.includes('theme') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagTheme)
  }, settingsTranslations.tagTheme), manifest.tags.includes('beta') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagBeta)
  }, settingsTranslations.tagBeta), manifest.tags.includes('new') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagNew)
  }, settingsTranslations.tagNew), manifest.tags.includes('danger') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagDanger)
  }, settingsTranslations.tagDanger), manifest.tags.includes('astraeditor') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagAstraEditor)
  }, settingsTranslations.tagAstraEditor), manifest.tags.includes('poorlang') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagPoorlang)
  }, settingsTranslations.tagPoorlang));
};
Tags.propTypes = {
  manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired
  }).isRequired
};
class TextInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleFlush = this.handleFlush.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: null,
      focused: false
    };
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleFlush(e);
      e.target.blur();
    }
  }
  handleFocus() {
    this.setState({
      focused: true
    });
  }
  handleFlush(e) {
    this.setState({
      focused: false
    });
    if (this.state.value === null) {
      return;
    }
    if (this.props.type === 'number') {
      let value = +this.state.value;
      const min = e.target.min;
      const max = e.target.max;
      const step = e.target.step;
      if (min !== '') value = Math.max(min, value);
      if (max !== '') value = Math.min(max, value);
      if (step === '1') value = Math.round(value);
      this.props.onChange(value);
    } else {
      this.props.onChange(this.state.value);
    }
    this.setState({
      value: null
    });
  }
  handleChange(e) {
    e.persist();
    this.setState({
      value: e.target.value
    }, () => {
      // A change event can be fired when not focused by using the browser's number spinners
      if (!this.state.focused) {
        this.handleFlush(e);
      }
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, this.props, {
      value: this.state.value === null ? this.props.value : this.state.value,
      onFocus: this.handleFocus,
      onBlur: this.handleFlush,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress
    }));
  }
}
TextInput.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
const ColorInput = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  type: "color",
  id: props.id,
  value: props.value,
  onChange: props.onChange
});
ColorInput.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
const ResetButton = _ref8 => {
  let addonId = _ref8.addonId,
    settingId = _ref8.settingId,
    forTextInput = _ref8.forTextInput;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.resetSettingButton),
    onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].setAddonSetting(addonId, settingId, null),
    title: settingsTranslations.reset,
    "data-for-text-input": forTextInput
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_undo_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: settingsTranslations.reset,
    draggable: false
  }));
};
ResetButton.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  settingId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  forTextInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
const Setting = _ref9 => {
  let addonId = _ref9.addonId,
    setting = _ref9.setting,
    value = _ref9.value;
  if (!_settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].evaluateCondition(addonId, setting.if)) {
    return null;
  }
  const settingId = setting.id;
  const settingName = addonTranslations["".concat(addonId, "/@settings-name-").concat(settingId)] || setting.name;
  const uniqueId = "setting/".concat(addonId, "/").concat(settingId);
  const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: uniqueId,
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.settingLabel
  }, settingName);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.setting
  }, setting.type === 'boolean' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tw_fancy_checkbox_checkbox_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: uniqueId,
    checked: value,
    onChange: e => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].setAddonSetting(addonId, settingId, e.target.checked)
  })), (setting.type === 'integer' || setting.type === 'positive_integer') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
    id: uniqueId,
    type: "number",
    min: setting.type === 'positive_integer' ? '0' : setting.min,
    max: setting.max,
    step: "1",
    value: value,
    onChange: newValue => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].setAddonSetting(addonId, settingId, newValue)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResetButton, {
    addonId: addonId,
    settingId: settingId,
    forTextInput: true
  })), (setting.type === 'string' || setting.type === 'untranslated') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextInput, {
    id: uniqueId,
    type: "text",
    value: value,
    onChange: newValue => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].setAddonSetting(addonId, settingId, newValue)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResetButton, {
    addonId: addonId,
    settingId: settingId,
    forTextInput: true
  })), setting.type === 'color' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorInput, {
    id: uniqueId,
    value: value,
    onChange: e => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].setAddonSetting(addonId, settingId, e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResetButton, {
    addonId: addonId,
    settingId: settingId
  })), setting.type === 'select' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    value: value,
    values: setting.potentialValues.map(_ref0 => {
      let id = _ref0.id,
        name = _ref0.name;
      return {
        id,
        name: addonTranslations["".concat(addonId, "/@settings-select-").concat(settingId, "-").concat(id)] || name
      };
    }),
    onChange: v => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].setAddonSetting(addonId, settingId, v),
    setting: setting
  })));
};
Setting.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    default: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
    potentialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    if: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      addonEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),
      // eslint-disable-next-line react/forbid-prop-types
      settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
const Notice = _ref1 => {
  let type = _ref1.type,
    text = _ref1.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.notice,
    type: type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.noticeIcon,
    src: _icons_info_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "",
    draggable: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, text));
};
Notice.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const Presets = _ref10 => {
  let addonId = _ref10.addonId,
    presets = _ref10.presets;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.setting, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.presets)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.settingLabel
  }, settingsTranslations.presets), presets.map(preset => {
    const presetId = preset.id;
    const name = addonTranslations["".concat(addonId, "/@preset-name-").concat(presetId)] || preset.name;
    const description = addonTranslations["".concat(addonId, "/@preset-description-").concat(presetId)] || preset.description;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: presetId,
      title: description,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.presetButton),
      onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].applyAddonPreset(addonId, presetId)
    }, name);
  }));
};
Presets.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  presets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})
  }))
};
const Addon = _ref11 => {
  let id = _ref11.id,
    settings = _ref11.settings,
    manifest = _ref11.manifest,
    extended = _ref11.extended;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addon, {
      [_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonDirty]: settings.dirty
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonSwitch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, {
    value: settings.enabled,
    onChange: value => {
      if (!value || !manifest.tags.includes('danger') || confirm(settingsTranslations.enableDangerous)) {
        _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].setAddonEnabled(id, value);
      }
    }
  })), manifest.tags.includes('theme') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.extensionImage,
    src: _icons_brush_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    draggable: false,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.extensionImage,
    src: _icons_extension_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    draggable: false,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonTitleText
  }, addonTranslations["".concat(id, "/@name")] || manifest.name), extended && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonId
  }, "(".concat(id, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tags, {
    manifest: manifest
  }), !settings.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.inlineDescription
  }, addonTranslations["".concat(id, "/@description")] || manifest.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonOperations
  }, settings.enabled && manifest.settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.resetButton,
    onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].resetAddon(id),
    title: settingsTranslations.reset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_undo_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.resetButtonImage,
    alt: settingsTranslations.reset,
    draggable: false
  })))), settings.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.description
  }, addonTranslations["".concat(id, "/@description")] || manifest.description), manifest.credits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.creditContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.creditTitle
  }, settingsTranslations.credits), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreditList, {
    credits: manifest.credits
  })), manifest.info && manifest.info.map(info => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Notice, {
    key: info.id,
    type: info.type,
    text: addonTranslations["".concat(id, "/@info-").concat(info.id)] || info.text
  })), manifest.noCompiler && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Notice, {
    type: "warning",
    text: settingsTranslations.noCompiler
  }), manifest.settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.settingContainer
  }, manifest.settings.map(setting => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Setting, {
    key: setting.id,
    addonId: id,
    setting: setting,
    value: settings[setting.id]
  })), manifest.presets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Presets, {
    addonId: id,
    presets: manifest.presets
  }))));
};
Addon.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    dirty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }),
  manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})),
    info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    presets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})),
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
    noCompiler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }),
  extended: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
const Dirty = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.dirtyOuter
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.dirtyInner
}, settingsTranslations.dirty, props.onReloadNow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.dirtyButton),
  onClick: props.onReloadNow
}, settingsTranslations.dirtyButton)));
Dirty.propTypes = {
  onReloadNow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
const UnsupportedAddons = _ref12 => {
  let addonList = _ref12.addons;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.unsupportedContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.unsupportedText
  }, settingsTranslations.unsupported), addonList.map((_ref13, index) => {
    let id = _ref13.id,
      manifest = _ref13.manifest;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: id,
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.unsupportedAddon
    }, addonTranslations["".concat(id, "/@name")] || manifest.name, index !== addonList.length - 1 && ', ');
  }));
};
UnsupportedAddons.propTypes = {
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  }))
};
const InternalAddonList = _ref14 => {
  let addons = _ref14.addons,
    extended = _ref14.extended;
  return addons.map(_ref15 => {
    let id = _ref15.id,
      manifest = _ref15.manifest,
      state = _ref15.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Addon, {
      key: id,
      id: id,
      settings: state,
      manifest: manifest,
      extended: extended
    });
  });
};
class AddonGroup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }
  render() {
    if (this.props.addons.length === 0) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonGroup
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonGroupName,
      onClick: () => {
        this.setState({
          open: !this.state.open
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonGroupExpandContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonGroupExpandIcon,
      src: _icons_expand_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
      "data-open": this.state.open,
      alt: ""
    })), this.props.label.replace('{number}', this.props.addons.length)), this.state.open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InternalAddonList, {
      addons: this.props.addons,
      extended: this.props.extended
    }));
  }
}
AddonGroup.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
    manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
  })).isRequired,
  extended: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
const addonToSearchItem = _ref16 => {
  let id = _ref16.id,
    manifest = _ref16.manifest;
  const texts = new Set();
  const addText = (score, text) => {
    if (text) {
      texts.add({
        score,
        text
      });
    }
  };
  addText(1, id);
  addText(1, manifest.name);
  addText(1, addonTranslations["".concat(id, "/@name")]);
  addText(0.5, manifest.description);
  addText(0.5, addonTranslations["".concat(id, "/@description")]);
  if (manifest.settings) {
    for (const setting of manifest.settings) {
      addText(0.25, setting.name);
      addText(0.25, addonTranslations["".concat(id, "/@settings-name-").concat(setting.id)]);
    }
  }
  if (manifest.presets) {
    for (const preset of manifest.presets) {
      addText(0.1, preset.name);
      addText(0.1, addonTranslations["".concat(id, "/@preset-name-").concat(preset.id)]);
      addText(0.1, preset.description);
      addText(0.1, addonTranslations["".concat(id, "/@preset-description-").concat(preset.id)]);
    }
  }
  for (const tag of manifest.tags) {
    const key = "tags.".concat(tag);
    if (settingsTranslations[key]) {
      addText(0.25, settingsTranslations[key]);
    }
  }
  if (manifest.info) {
    for (const info of manifest.info) {
      addText(0.25, info.text);
      addText(0.25, addonTranslations["".concat(id, "/@info-").concat(info.id)]);
    }
  }
  return texts;
};
class AddonList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.search = new _search__WEBPACK_IMPORTED_MODULE_3__["default"](this.props.addons.map(addonToSearchItem));
    this.groups = [];
  }
  filterAddonsByTags(addons) {
    if (this.props.selectedTags.size === 0) {
      return addons;
    }
    return addons.filter(addon => Array.from(this.props.selectedTags).some(tag => addon.manifest.tags.includes(tag)));
  }
  render() {
    let filteredAddons = this.props.addons;

    // Apply tag filtering first
    filteredAddons = this.filterAddonsByTags(filteredAddons);
    if (this.props.search) {
      // Rebuild search index with filtered addons
      const search = new _search__WEBPACK_IMPORTED_MODULE_3__["default"](filteredAddons.map(addonToSearchItem));
      const addons = search.search(this.props.search).slice(0, 20).map(_ref17 => {
        let index = _ref17.index;
        return filteredAddons[index];
      });
      if (addons.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.noResults
        }, settingsTranslations.noResults);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InternalAddonList, {
        addons: addons,
        extended: this.props.extended
      }));
    }

    // Group filtered addons
    const groupedFilteredAddons = {
      new: {
        label: settingsTranslations.groupNew,
        open: true,
        addons: []
      },
      others: {
        label: settingsTranslations.groupOthers,
        open: true,
        addons: []
      },
      danger: {
        label: settingsTranslations.groupDanger,
        open: false,
        addons: []
      }
    };
    for (const addon of filteredAddons) {
      if (addon.manifest.tags.includes('new')) {
        groupedFilteredAddons.new.addons.push(addon);
      } else if (addon.manifest.tags.includes('danger') || addon.manifest.noCompiler) {
        groupedFilteredAddons.danger.addons.push(addon);
      } else {
        groupedFilteredAddons.others.addons.push(addon);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object.entries(groupedFilteredAddons).map(_ref18 => {
      let _ref19 = _slicedToArray(_ref18, 2),
        id = _ref19[0],
        _ref19$ = _ref19[1],
        label = _ref19$.label,
        addons = _ref19$.addons,
        open = _ref19$.open;
      return addons.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddonGroup, {
        key: id,
        label: label,
        open: open,
        addons: addons,
        extended: this.props.extended
      });
    }));
  }
}
AddonList.propTypes = {
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
    manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
  })).isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  selectedTags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Set).isRequired,
  extended: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
class AddonSettingsComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleSettingStoreChanged = this.handleSettingStoreChanged.bind(this);
    this.handleReloadNow = this.handleReloadNow.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleImport = this.handleImport.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleClickVersion = this.handleClickVersion.bind(this);
    this.searchRef = this.searchRef.bind(this);
    this.handleTagFilter = this.handleTagFilter.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
    this.searchBar = null;
    this.state = _objectSpread({
      loading: false,
      dirty: false,
      search: getInitialSearch(),
      extended: false,
      selectedTags: new Set()
    }, this.readFullAddonState());
    if (_channels__WEBPACK_IMPORTED_MODULE_11__["default"].changeChannel) {
      _channels__WEBPACK_IMPORTED_MODULE_11__["default"].changeChannel.addEventListener('message', () => {
        _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].readLocalStorage();
        this.setState(this.readFullAddonState());
      });
    }
  }
  componentDidMount() {
    _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].addEventListener('setting-changed', this.handleSettingStoreChanged);
    document.body.addEventListener('keydown', this.handleKeyDown);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      clearHash();
    }
  }
  componentWillUnmount() {
    _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].removeEventListener('setting-changed', this.handleSettingStoreChanged);
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  readFullAddonState() {
    const result = {};
    for (const _ref20 of Object.entries(supportedAddons)) {
      var _ref21 = _slicedToArray(_ref20, 2);
      const id = _ref21[0];
      const manifest = _ref21[1];
      const enabled = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].getAddonEnabled(id);
      const addonState = {
        enabled: enabled,
        dirty: false
      };
      if (manifest.settings) {
        for (const setting of manifest.settings) {
          addonState[setting.id] = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].getAddonSetting(id, setting.id);
        }
      }
      result[id] = addonState;
    }
    return result;
  }
  handleSettingStoreChanged(e) {
    const _e$detail = e.detail,
      addonId = _e$detail.addonId,
      settingId = _e$detail.settingId,
      value = _e$detail.value;
    // If channels are unavailable, every change requires reload.
    const reloadRequired = e.detail.reloadRequired || !_channels__WEBPACK_IMPORTED_MODULE_11__["default"].changeChannel;
    this.setState(state => {
      const newState = {
        [addonId]: _objectSpread(_objectSpread({}, state[addonId]), {}, {
          [settingId]: value,
          dirty: true
        })
      };
      if (reloadRequired) {
        newState.dirty = true;
      }
      return newState;
    });
    if (!reloadRequired) {
      postThrottledSettingsChange(_settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].store);
    }
  }
  handleReloadNow() {
    // Value posted does not matter
    _channels__WEBPACK_IMPORTED_MODULE_11__["default"].reloadChannel.postMessage(0);
    this.setState({
      dirty: false
    });
    for (const addonId of Object.keys(supportedAddons)) {
      if (this.state[addonId].dirty) {
        this.setState(state => ({
          [addonId]: _objectSpread(_objectSpread({}, state[addonId]), {}, {
            dirty: false
          })
        }));
      }
    }
  }
  handleResetAll() {
    if (confirm(settingsTranslations.confirmResetAll)) {
      _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].resetAllAddons();
      this.setState({
        search: ''
      });
    }
  }
  handleExport() {
    const exportedData = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].export({
      theme
    });
    this.props.onExportSettings(exportedData);
  }
  handleImport() {
    const fileSelector = document.createElement('input');
    fileSelector.type = 'file';
    fileSelector.accept = '.json';
    document.body.appendChild(fileSelector);
    fileSelector.click();
    document.body.removeChild(fileSelector);
    fileSelector.addEventListener('change', async () => {
      const file = fileSelector.files[0];
      if (!file) {
        return;
      }
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        _settings_store_singleton__WEBPACK_IMPORTED_MODULE_10__["default"].import(data);
        this.setState({
          search: ''
        });
      } catch (e) {
        console.error(e);
        alert(e);
      }
    });
  }
  handleSearch(e) {
    const value = e.target.value;
    this.setState({
      search: value
    });
  }
  handleClickSearchButton() {
    this.setState({
      search: ''
    });
    this.searchBar.focus();
  }
  handleClickVersion() {
    this.setState({
      extended: !this.state.extended
    });
  }
  searchRef(searchBar) {
    this.searchBar = searchBar;

    // Only focus search bar if we have no initial search
    if (searchBar && this.state.search === '') {
      searchBar.focus();
    }
  }
  handleKeyDown(e) {
    const key = e.key;
    if (key.length === 1 && key !== ' ' && e.target === document.body && !(e.ctrlKey || e.metaKey || e.altKey)) {
      this.searchBar.focus();
    }
    // Only preventDefault() if the search bar isn't already focused so
    // that we don't break the browser's builtin ctrl+f
    if (key === 'f' && (e.ctrlKey || e.metaKey) && document.activeElement !== this.searchBar) {
      this.searchBar.focus();
      e.preventDefault();
    }
  }
  handleTagFilter(tag) {
    this.setState(state => {
      const newSelectedTags = new Set(state.selectedTags);
      if (newSelectedTags.has(tag)) {
        newSelectedTags.delete(tag);
      } else {
        newSelectedTags.add(tag);
      }
      return {
        selectedTags: newSelectedTags
      };
    });
  }
  handleClearAll() {
    this.setState({
      selectedTags: new Set()
    });
  }
  render() {
    const addonState = Object.entries(supportedAddons).map(_ref22 => {
      let _ref23 = _slicedToArray(_ref22, 2),
        id = _ref23[0],
        manifest = _ref23[1];
      return {
        id,
        manifest,
        state: this.state[id]
      };
    });
    const unsupported = Object.entries(unsupportedAddons).map(_ref24 => {
      let _ref25 = _slicedToArray(_ref24, 2),
        id = _ref25[0],
        manifest = _ref25[1];
      return {
        id,
        manifest
      };
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.container
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.header
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.searchContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.searchInput,
      value: this.state.search,
      onChange: this.handleSearch,
      placeholder: settingsTranslations.search,
      "aria-label": settingsTranslations.search,
      ref: this.searchRef,
      spellCheck: "false"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.searchButton,
      onClick: this.handleClickSearchButton
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _lib_constants_brand_js__WEBPACK_IMPORTED_MODULE_21__["FEEDBACK_URL"],
      target: "_blank",
      rel: "noreferrer",
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.feedbackButtonOuter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.feedbackButtonInner
    }, settingsTranslations.addonFeedback))), this.state.dirty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dirty, {
      onReloadNow: _channels__WEBPACK_IMPORTED_MODULE_11__["default"].reloadChannel ? this.handleReloadNow : null
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addons
    }, !this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TagFilter, {
      tags: allTags,
      selectedTags: this.state.selectedTags,
      onTagToggle: this.handleTagFilter,
      onClearAll: this.handleClearAll
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddonList, {
      addons: addonState,
      search: this.state.search,
      selectedTags: this.state.selectedTags,
      extended: this.state.extended
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.footerButtons
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.resetAllButton),
      onClick: this.handleResetAll
    }, settingsTranslations.resetAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.exportButton),
      onClick: this.handleExport
    }, settingsTranslations.export), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.importButton),
      onClick: this.handleImport
    }, settingsTranslations.import)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.footer
    }, unsupported.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnsupportedAddons, {
      addons: unsupported
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.version,
      onClick: this.handleClickVersion
    }, this.state.extended ? // Don't bother translating, pretty much no one will ever see this.
    // eslint-disable-next-line max-len
    "You have enabled debug mode. (Addons version ".concat(_generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.commit, ")") : "Addons version ".concat(_generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.commit))))));
  }
}
AddonSettingsComponent.propTypes = {
  onExportSettings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AddonSettingsComponent);

/***/ }),

/***/ "./src/addons/settings/translations.json":
/*!***********************************************!*\
  !*** ./src/addons/settings/translations.json ***!
  \***********************************************/
/*! exports provided: zh-cn, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"zh-cn\":{\"title\":\"插件设置\",\"credits\":\"鸣谢:\",\"reset\":\"重置\",\"resetAll\":\"全部重置\",\"confirmResetAll\":\"确认要将所有插件设置重置为默认值吗?\",\"dirty\":\"重新加载标签页以应用设置\",\"dirtyButton\":\"立即重新加载\",\"presets\":\"预设\",\"noCompiler\":\"此插件仅在通过“高级 > 禁用编译器”选项关闭编译器，或使用“在编辑器中禁用编译器”插件时可用。\",\"tagRecommended\":\"推荐\",\"tagDanger\":\"危险\",\"tagTheme\":\"主题\",\"tagBeta\":\"测试版\",\"tagNew\":\"新增\",\"tagAstraEditor\":\"AstraEditor\",\"tagPoorlang\":\"少语言支持\",\"groupNew\":\"新增({number})\",\"groupOthers\":\"其他({number})\",\"groupDanger\":\"危险({number})\",\"search\":\"搜索\",\"noResults\":\"无匹配结果。\",\"filterByTags\":\"按标签筛选:\",\"clearTagFilters\":\"清除筛选条件\",\"tags.MistWarp\":\"MistWarp\",\"tags.sprites\":\"角色\",\"tags.recommended\":\"推荐\",\"tags.theme\":\"主题\",\"tags.beta\":\"测试版\",\"tags.new\":\"新上架!\",\"tags.developer\":\"开发者\",\"tags.featured\":\"精选\",\"tags.danger\":\"危险\",\"tags.easter-egg\":\"彩蛋\",\"tags.editor\":\"编辑器\",\"tags.workflow\":\"工作流\",\"tags.toolbox\":\"工具箱\",\"tags.astraeditor\":\"AstraEditor\",\"tags.poorlang\":\"少语言支持\",\"export\":\"导出设置\",\"import\":\"导入设置\",\"unsupported\":\"以下插件在当前浏览器中不可用:\",\"addonFeedback\":\"插件反馈\",\"enableDangerous\":\"此插件存在潜在风险，可能会禁用某些功能。我们并不推荐启用此插件。确认要继续启用吗?\"}}");

/***/ }),

/***/ "./src/playground/addon-settings.jsx":
/*!*******************************************!*\
  !*** ./src/playground/addon-settings.jsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_download_blob_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils/download-blob.js */ "./src/lib/utils/download-blob.js");
/* harmony import */ var _addons_settings_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addons/settings/settings.jsx */ "./src/addons/settings/settings.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-target */ "./src/playground/app-target.js");
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */





const onExportSettings = settings => {
  const blob = new Blob([JSON.stringify(settings)]);
  Object(_lib_utils_download_blob_js__WEBPACK_IMPORTED_MODULE_1__["default"])('bilup-addon-settings.json', blob);
};
Object(_app_target__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_addons_settings_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
  onExportSettings: onExportSettings
}));

/***/ })

/******/ });
//# sourceMappingURL=addon-settings.js.map