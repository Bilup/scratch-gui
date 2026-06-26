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
/******/ 		"about": 0
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
/******/ 	deferredModules.push(["./src/playground/about/about.jsx","vendors~about~addon-settings~credits~donate~editor~embed~fullscreen~player","about~addon-settings~credits~donate~editor~embed~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/playground/about/about.jsx":
/*!****************************************!*\
  !*** ./src/playground/about/about.jsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _version_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version.json */ "./src/playground/about/version.json");
var _version_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./version.json */ "./src/playground/about/version.json", 1);
/* harmony import */ var _lib_constants_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/constants/brand */ "./src/lib/constants/brand.js");
/* harmony import */ var _lib_constants_brand__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_constants_brand__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");





const theme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_4__["detectTheme"])();
document.documentElement.setAttribute('data-theme', theme.id || (theme.isDark ? 'dark' : 'light'));
document.documentElement.lang = 'en';
const About = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n            :root,\n            [data-theme=\"dark\"] {\n                --bg-color: #1a1a2e;\n                --text-color: #e4e4e7;\n                --accent-color: #75C1C4;\n                --secondary-bg: #252542;\n                --card-bg: rgba(37, 37, 66, 0.8);\n                --border-color: rgba(117, 193, 196, 0.2);\n                --hover-bg: rgba(117, 193, 196, 0.1);\n            }\n\n            [data-theme=\"light\"] {\n                --bg-color: #f8fafc;\n                --text-color: #1e293b;\n                --accent-color: #75C1C4;\n                --secondary-bg: #e2e8f0;\n                --card-bg: rgba(255, 255, 255, 0.95);\n                --border-color: rgba(117, 193, 196, 0.3);\n                --hover-bg: rgba(117, 193, 196, 0.08);\n            }\n\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n\n            body {\n                background: var(--bg-color);\n                background-image: \n                    radial-gradient(circle at 20% 80%, rgba(117, 193, 196, 0.05) 0%, transparent 50%),\n                    radial-gradient(circle at 80% 20%, rgba(117, 193, 196, 0.03) 0%, transparent 50%),\n                    radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);\n                background-size: 100% 100%, 100% 100%, 32px 32px;\n                font-family: \"Inter\", system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", \"Noto Sans\", Helvetica, Arial, sans-serif;\n                color: var(--text-color);\n                line-height: 1.6;\n                min-height: 100vh;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                padding: 2rem;\n            }\n\n            [data-theme=\"light\"] body {\n                background-image: \n                    radial-gradient(circle at 20% 80%, rgba(117, 193, 196, 0.08) 0%, transparent 50%),\n                    radial-gradient(circle at 80% 20%, rgba(117, 193, 196, 0.05) 0%, transparent 50%),\n                    radial-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px);\n            }\n\n            main {\n                max-width: 680px;\n                width: 100%;\n            }\n\n            .card {\n                background: var(--card-bg);\n                border: 1px solid var(--border-color);\n                border-radius: 24px;\n                padding: 3rem;\n                box-shadow: \n                    0 8px 32px rgba(0, 0, 0, 0.15),\n                    0 0 0 1px rgba(117, 193, 196, 0.1);\n                position: relative;\n                overflow: hidden;\n            }\n\n            .header {\n                margin-bottom: 2rem;\n                text-align: center;\n            }\n\n            h1 {\n                font-size: 2.5rem;\n                font-weight: 700;\n                letter-spacing: -0.02em;\n                margin-top: 0;\n                margin-bottom: 0.5rem;\n                background: linear-gradient(135deg, var(--accent-color), #98D8C8);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                background-clip: text;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex-wrap: wrap;\n                gap: 12px;\n            }\n\n            .version {\n                font-size: 1rem;\n                font-weight: 600;\n                background: linear-gradient(135deg, var(--accent-color), #5AB8BA);\n                color: #fff;\n                -webkit-text-fill-color: #fff;\n                padding: 0.3rem 1rem;\n                border-radius: 40px;\n                letter-spacing: normal;\n                font-family: 'SF Mono', 'Fira Code', monospace;\n                box-shadow: 0 4px 12px rgba(117, 193, 196, 0.3);\n            }\n\n            .more-version {\n                font-size: 0.875rem;\n                color: rgba(255, 255, 255, 0.6);\n                font-family: 'SF Mono', 'Fira Code', monospace;\n                background: var(--secondary-bg);\n                display: inline-block;\n                padding: 0.3rem 1rem;\n                margin: 0.75rem 0 1.5rem 0;\n                border-radius: 32px;\n                border: 1px solid var(--border-color);\n            }\n\n            [data-theme=\"light\"] .more-version {\n                color: rgba(0, 0, 0, 0.5);\n            }\n\n            .content {\n                margin-bottom: 2rem;\n            }\n\n            p {\n                margin: 1rem 0;\n                font-weight: 450;\n                color: var(--text-color);\n                font-size: 1.05rem;\n                opacity: 0.9;\n            }\n\n            p:first-child {\n                margin-top: 0;\n            }\n\n            p:last-child {\n                margin-bottom: 0;\n            }\n\n            a {\n                color: var(--accent-color);\n                text-decoration: none;\n                font-weight: 600;\n                border-bottom: 2px solid transparent;\n                transition: all 0.25s ease;\n                padding-bottom: 2px;\n            }\n\n            a:hover {\n                color: #98D8C8;\n                border-bottom-color: var(--accent-color);\n            }\n\n            .links {\n                display: flex;\n                flex-wrap: wrap;\n                gap: 12px;\n                justify-content: center;\n                margin-top: 2rem;\n                padding-top: 2rem;\n                border-top: 1px solid var(--border-color);\n            }\n\n            .btn {\n                display: inline-flex;\n                align-items: center;\n                gap: 8px;\n                padding: 0.75rem 1.5rem;\n                border-radius: 12px;\n                font-weight: 600;\n                font-size: 0.95rem;\n                transition: all 0.25s ease;\n                text-decoration: none;\n                border: none;\n                cursor: pointer;\n            }\n\n            .btn-primary {\n                background: linear-gradient(135deg, var(--accent-color), #5AB8BA);\n                color: #fff;\n                box-shadow: 0 4px 15px rgba(117, 193, 196, 0.3);\n            }\n\n            .btn-primary:hover {\n                transform: translateY(-2px);\n                box-shadow: 0 6px 20px rgba(117, 193, 196, 0.4);\n            }\n\n            .btn-secondary {\n                background: var(--secondary-bg);\n                color: var(--text-color);\n                border: 1px solid var(--border-color);\n            }\n\n            .btn-secondary:hover {\n                background: var(--hover-bg);\n                border-color: var(--accent-color);\n                transform: translateY(-2px);\n            }\n\n            @media (max-width: 720px) {\n                body {\n                    padding: 1rem;\n                }\n\n                .card {\n                    padding: 2rem 1.5rem;\n                    border-radius: 20px;\n                }\n\n                h1 {\n                    font-size: 2rem;\n                }\n\n                .links {\n                    flex-direction: column;\n                }\n\n                .btn {\n                    justify-content: center;\n                }\n            }\n\n            @media (max-width: 560px) {\n                .card {\n                    padding: 1.5rem;\n                    border-radius: 16px;\n                }\n\n                h1 {\n                    font-size: 1.75rem;\n                    flex-direction: column;\n                    gap: 8px;\n                }\n            }\n        "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "card"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _lib_constants_brand__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " About ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "version"
}, "v", _version_json__WEBPACK_IMPORTED_MODULE_2__.version, "_", _version_json__WEBPACK_IMPORTED_MODULE_2__.version_little)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "more-version"
}, "Latest updated: ".concat(_version_json__WEBPACK_IMPORTED_MODULE_2__['latest-date']))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "content"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_constants_brand__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " is a better offline editor for Scratch 3. It enhances your Scratch experience with advanced features and optimizations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Learn more at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.bilup.org/"
}, "https://www.bilup.org/"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_constants_brand__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " is licensed under the GNU General Public License v3.0. The source code is published ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/Bilup/",
  target: "_blank",
  rel: "noreferrer"
}, "on GitHub"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "About more updates, please visit at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/Bilup/"
}, "GitHub"), ".")))));
Object(_app_target__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, null));

/***/ }),

/***/ "./src/playground/about/version.json":
/*!*******************************************!*\
  !*** ./src/playground/about/version.json ***!
  \*******************************************/
/*! exports provided: version, version_little, latest-date, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"1.5.3\",\"version_little\":\"7\",\"latest-date\":\"2026-06-26\"}");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map