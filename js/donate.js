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
/******/ 		"donate": 0
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
/******/ 	deferredModules.push(["./src/playground/donate/donate.jsx","vendors~about~addon-settings~credits~donate~editor~embed~fullscreen~player","about~addon-settings~credits~donate~editor~embed~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/playground/donate/donate.jsx":
/*!******************************************!*\
  !*** ./src/playground/donate/donate.jsx ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _lib_constants_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constants/brand */ "./src/lib/constants/brand.js");
/* harmony import */ var _lib_constants_brand__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_constants_brand__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");




const theme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_3__["detectTheme"])();
document.documentElement.setAttribute('data-theme', theme.id || (theme.isDark ? 'dark' : 'light'));
document.documentElement.lang = 'en';
const Donate = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n            :root,\n            [data-theme=\"dark\"] {\n                --bg-color: #1a1a2e;\n                --text-color: #e4e4e7;\n                --accent-color: #75C1C4;\n                --secondary-bg: #252542;\n                --card-bg: rgba(37, 37, 66, 0.8);\n                --border-color: rgba(117, 193, 196, 0.2);\n                --hover-bg: rgba(117, 193, 196, 0.1);\n            }\n\n            [data-theme=\"light\"] {\n                --bg-color: #f8fafc;\n                --text-color: #1e293b;\n                --accent-color: #75C1C4;\n                --secondary-bg: #e2e8f0;\n                --card-bg: rgba(255, 255, 255, 0.95);\n                --border-color: rgba(117, 193, 196, 0.3);\n                --hover-bg: rgba(117, 193, 196, 0.08);\n            }\n\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n\n            body {\n                background: var(--bg-color);\n                background-image: \n                    radial-gradient(circle at 20% 80%, rgba(117, 193, 196, 0.05) 0%, transparent 50%),\n                    radial-gradient(circle at 80% 20%, rgba(117, 193, 196, 0.03) 0%, transparent 50%),\n                    radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);\n                background-size: 100% 100%, 100% 100%, 32px 32px;\n                font-family: \"Inter\", system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", \"Noto Sans\", Helvetica, Arial, sans-serif;\n                color: var(--text-color);\n                line-height: 1.6;\n                min-height: 100vh;\n                padding: 2rem;\n            }\n\n            [data-theme=\"light\"] body {\n                background-image: \n                    radial-gradient(circle at 20% 80%, rgba(117, 193, 196, 0.08) 0%, transparent 50%),\n                    radial-gradient(circle at 80% 20%, rgba(117, 193, 196, 0.05) 0%, transparent 50%),\n                    radial-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px);\n            }\n\n            main {\n                max-width: 700px;\n                width: 100%;\n                margin: 0 auto;\n            }\n\n            .card {\n                background: var(--card-bg);\n                border: 1px solid var(--border-color);\n                border-radius: 24px;\n                padding: 3rem;\n                box-shadow: \n                    0 8px 32px rgba(0, 0, 0, 0.15),\n                    0 0 0 1px rgba(117, 193, 196, 0.1);\n                position: relative;\n                overflow: hidden;\n            }\n\n            .header {\n                margin-bottom: 2rem;\n                text-align: center;\n            }\n\n            h1 {\n                font-size: 2.5rem;\n                font-weight: 700;\n                letter-spacing: -0.02em;\n                margin-top: 0;\n                margin-bottom: 0.5rem;\n                background: linear-gradient(135deg, var(--accent-color), #98D8C8);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                background-clip: text;\n            }\n\n            section {\n                margin-bottom: 2rem;\n            }\n\n            section:last-child {\n                margin-bottom: 0;\n            }\n\n            h2 {\n                font-size: 1.3rem;\n                font-weight: 600;\n                color: var(--accent-color);\n                margin-bottom: 0.75rem;\n                padding-bottom: 0.25rem;\n                border-bottom: 2px solid var(--border-color);\n            }\n\n            p {\n                margin: 0.75rem 0;\n                font-weight: 450;\n                color: var(--text-color);\n                font-size: 1rem;\n                opacity: 0.9;\n            }\n\n            strong {\n                color: var(--accent-color);\n            }\n\n            a {\n                color: var(--accent-color);\n                text-decoration: none;\n                font-weight: 600;\n                border-bottom: 2px solid transparent;\n                transition: all 0.25s ease;\n                padding-bottom: 2px;\n            }\n\n            a:hover {\n                color: #98D8C8;\n                border-bottom-color: var(--accent-color);\n            }\n\n            @media (max-width: 720px) {\n                body {\n                    padding: 1rem;\n                }\n\n                .card {\n                    padding: 2rem 1.5rem;\n                    border-radius: 20px;\n                }\n\n                h1 {\n                    font-size: 2rem;\n                }\n            }\n        "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "card"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _lib_constants_brand__WEBPACK_IMPORTED_MODULE_2__["APP_NAME"], " Donate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We do not consider accepting any ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "monetary"), " support."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "However, you can support us in the following ways:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "AI API Key"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can purchase an API Key and send it to us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Note: Do not expose your API Key publicly, as it may cause security issues.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Documentation & Extensions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can write documentation or extensions for Bilup, and pull request it.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Join Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can join the Bilup development team to help improve Bilup.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For more information, please ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "mailto:support@bilup.org"
}, "contact us"), ".")))));
Object(_app_target__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Donate, null));

/***/ })

/******/ });
//# sourceMappingURL=donate.js.map