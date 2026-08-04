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
/******/ 		"credits": 0
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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./src/playground/credits/credits.jsx","vendors~addon-settings~community~credits~editor~embed~fullscreen~player","addon-settings~community~credits~editor~embed~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/constants/brand.js":
/*!************************************!*\
  !*** ./src/lib/constants/brand.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Legacy export format because this is used by some build-time scripts stuck in the past.
// eslint-disable-next-line import/no-commonjs
module.exports = {
  APP_NAME: 'Bilup',
  FEEDBACK_URL: 'https://github.com/orgs/Bilup/discussions/new?category=bug-report-unsure-repo',
  GITHUB_URL: 'https://github.com/Bilup'
};

/***/ }),

/***/ "./src/playground/credits/credits.jsx":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users */ "./src/playground/credits/users.js");
/* harmony import */ var _lib_constants_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/constants/brand */ "./src/lib/constants/brand.js");
/* harmony import */ var _lib_constants_brand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_constants_brand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






const theme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_5__["detectTheme"])();
document.documentElement.setAttribute('data-theme', theme.id || (theme.isDark ? 'dark' : 'light'));
document.documentElement.lang = 'en';
const User = _ref => {
  let image = _ref.image,
    text = _ref.text,
    href = _ref.href;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    className: "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    loading: "lazy",
    className: "user-image",
    src: image,
    width: "60",
    height: "60"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-info"
  }, text));
};
User.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const UserList = _ref2 => {
  let users = _ref2.users;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "users"
  }, users.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, _extends({
    key: index
  }, data))));
};
UserList.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
const Credits = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n            :root,\n            [data-theme=\"dark\"] {\n                --bg-color: #1a1a2e;\n                --text-color: #e4e4e7;\n                --accent-color: #75C1C4;\n                --secondary-bg: #252542;\n                --card-bg: rgba(37, 37, 66, 0.8);\n                --border-color: rgba(117, 193, 196, 0.2);\n                --hover-bg: rgba(117, 193, 196, 0.1);\n            }\n\n            [data-theme=\"light\"] {\n                --bg-color: #f8fafc;\n                --text-color: #1e293b;\n                --accent-color: #75C1C4;\n                --secondary-bg: #e2e8f0;\n                --card-bg: rgba(255, 255, 255, 0.95);\n                --border-color: rgba(117, 193, 196, 0.3);\n                --hover-bg: rgba(117, 193, 196, 0.08);\n            }\n\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n\n            body {\n                background: var(--bg-color);\n                background-image: \n                    radial-gradient(circle at 20% 80%, rgba(117, 193, 196, 0.05) 0%, transparent 50%),\n                    radial-gradient(circle at 80% 20%, rgba(117, 193, 196, 0.03) 0%, transparent 50%),\n                    radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);\n                background-size: 100% 100%, 100% 100%, 32px 32px;\n                font-family: \"Inter\", system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", \"Noto Sans\", Helvetica, Arial, sans-serif;\n                color: var(--text-color);\n                line-height: 1.6;\n                min-height: 100vh;\n                padding: 2rem;\n            }\n\n            [data-theme=\"light\"] body {\n                background-image: \n                    radial-gradient(circle at 20% 80%, rgba(117, 193, 196, 0.08) 0%, transparent 50%),\n                    radial-gradient(circle at 80% 20%, rgba(117, 193, 196, 0.05) 0%, transparent 50%),\n                    radial-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px);\n            }\n\n            main {\n                max-width: 700px;\n                width: 100%;\n                margin: 0 auto;\n            }\n\n            .card {\n                background: var(--card-bg);\n                border: 1px solid var(--border-color);\n                border-radius: 24px;\n                padding: 3rem;\n                box-shadow: \n                    0 8px 32px rgba(0, 0, 0, 0.15),\n                    0 0 0 1px rgba(117, 193, 196, 0.1);\n                position: relative;\n                overflow: hidden;\n            }\n\n            .header {\n                margin-bottom: 2rem;\n                text-align: center;\n            }\n\n            h1 {\n                font-size: 2.5rem;\n                font-weight: 700;\n                letter-spacing: -0.02em;\n                margin-top: 0;\n                margin-bottom: 0.5rem;\n                background: linear-gradient(135deg, var(--accent-color), #98D8C8);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                background-clip: text;\n            }\n\n            section {\n                margin-bottom: 2rem;\n            }\n\n            section:last-child {\n                margin-bottom: 0;\n            }\n\n            h2 {\n                font-size: 1.3rem;\n                font-weight: 600;\n                color: var(--accent-color);\n                margin-bottom: 0.75rem;\n                padding-bottom: 0.25rem;\n                border-bottom: 2px solid var(--border-color);\n            }\n\n            p {\n                margin: 0.75rem 0;\n                font-weight: 450;\n                color: var(--text-color);\n                font-size: 1rem;\n                opacity: 0.9;\n            }\n\n            a {\n                color: var(--accent-color);\n                text-decoration: none;\n                font-weight: 600;\n                border-bottom: 2px solid transparent;\n                transition: all 0.25s ease;\n                padding-bottom: 2px;\n            }\n\n            a:hover {\n                color: #98D8C8;\n                border-bottom-color: var(--accent-color);\n            }\n\n            .users {\n                display: flex;\n                flex-direction: row;\n                flex-wrap: wrap;\n                gap: 12px;\n            }\n\n            .user {\n                display: flex;\n                align-items: center;\n                width: calc(50% - 6px);\n                padding: 12px;\n                border-radius: 12px;\n                font-size: 1.1rem;\n                color: var(--text-color) !important;\n                text-decoration: none;\n                transition: all 0.25s ease;\n                background: var(--secondary-bg);\n                border: 1px solid transparent;\n            }\n\n            .user:hover {\n                background: var(--hover-bg);\n                border-color: var(--accent-color);\n                transform: translateY(-2px);\n            }\n\n            .user-image {\n                margin-right: 12px;\n                border-radius: 50%;\n                object-fit: cover;\n                border: 2px solid var(--accent-color);\n            }\n\n            .user-info {\n                font-weight: 500;\n            }\n\n            @media (max-width: 720px) {\n                body {\n                    padding: 1rem;\n                }\n\n                .card {\n                    padding: 2rem 1.5rem;\n                    border-radius: 20px;\n                }\n\n                h1 {\n                    font-size: 2rem;\n                }\n\n                .user {\n                    width: 100%;\n                }\n            }\n        "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "card"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _lib_constants_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The ", _lib_constants_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " project is made possible by the work of many volunteers.")), _lib_constants_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"] !== 'TurboWarp' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "TurboWarp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_constants_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " is based on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://turbowarp.org/"
}, "TurboWarp"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Scratch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_constants_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " is based on the work of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/credits"
}, "Scratch contributors"), " but is not endorsed by Scratch in any way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support Scratch."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_3__["default"].contributors
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Addons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_3__["default"].addonDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Bilup Extension Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_3__["default"].extensionDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Documentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_3__["default"].docs
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Translators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_3__["default"].translators
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Individual contributors and organizations are listed in no particular order. The order is randomized each visit."))))));
Object(_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Credits, null));

/***/ }),

/***/ "./src/playground/credits/users.js":
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }
  return list;
};
const fromHardcoded = _ref => {
  let _ref$userID = _ref.userID,
    userID = _ref$userID === void 0 ? '0' : _ref$userID,
    username = _ref.username,
    _ref$userUrlType = _ref.userUrlType,
    userUrlType = _ref$userUrlType === void 0 ? 'github' : _ref$userUrlType;
  const result = {
    // image: `https://avatars.githubusercontent.com/u/${userID}`,
    text: username
  };
  if (username && userID !== '0') {
    if (userUrlType === 'github') {
      result.image = "https://avatars.githubusercontent.com/u/".concat(userID);
      result.href = "https://github.com/".concat(username, "/");
    } else if (userUrlType === 'bilibili') {
      result.image = "/static/credits/".concat(userID, ".webp");
      result.href = "https://space.bilibili.com/".concat(userID, "/");
    }
  }
  return result;
};

// The lists below are in no particular order.

const contributors = [{
  userUrlType: 'github',
  userID: '148440803',
  username: 'RyaninCn11'
}, {
  userUrlType: 'github',
  userID: '67349469',
  username: 'TurboWarp'
}, {
  userUrlType: 'github',
  userID: '175630084',
  username: 'MistWarp'
}, {
  userUrlType: 'github',
  userID: '244335609',
  username: 'AstraEditor'
}].map(fromHardcoded);
const addonDevelopers = [{
  userUrlType: 'github',
  userID: '148440803',
  username: 'RyaninCn11'
}, {
  userUrlType: 'github',
  userID: '67349469',
  username: 'TurboWarp'
}, {
  userUrlType: 'github',
  userID: '175630084',
  username: 'MistWarp'
}].map(fromHardcoded);
const extensionDevelopers = [{
  userUrlType: 'bilibili',
  username: 'MR醉诗',
  userID: '3546960701163977'
  // userImage:'https://i1.hdslb.com/bfs/face/594b7c3a597f9f5bf3e66e384feb1d17ce7387cb.jpg@128w_128h_1c_1s.webp'
}, {
  userUrlType: 'github',
  userID: '273910431',
  username: 'DLGrass'
}, {
  userUrlType: 'bilibili',
  username: '蓝立方Blue3',
  userID: '25786611'
  // userImage:'https://i1.hdslb.com/bfs/face/62a30dec6dc1aa1e319db1e77e5e948fd37e85e3.jpg@128w_128h_1c_1s.webp', 
}, {
  userUrlType: 'github',
  userID: '148440803',
  username: 'RyaninCn11'
}, {
  userUrlType: 'bilibili',
  username: '勇敢的菠萝🍍',
  userID: '521949499'
}].map(fromHardcoded);
const docs = [{
  userUrlType: 'github',
  userID: '148440803',
  username: 'RyaninCn11'
}, {
  userUrlType: 'github',
  userID: '273910431',
  username: 'DLGrass'
}, {
  userUrlType: 'github',
  userID: '67349469',
  username: 'TurboWarp'
}, {
  userUrlType: 'github',
  userID: '175630084',
  username: 'MistWarp'
}].map(fromHardcoded);
const translators = [{
  userUrlType: 'github',
  userID: '148440803',
  username: 'RyaninCn11'
}, {
  userUrlType: 'github',
  userID: '67349469',
  username: 'TurboWarp'
}, {
  userUrlType: 'github',
  userID: '175630084',
  username: 'MistWarp'
}].map(fromHardcoded);
/* harmony default export */ __webpack_exports__["default"] = ({
  contributors: shuffle(contributors),
  addonDevelopers: shuffle(addonDevelopers),
  extensionDevelopers: shuffle(extensionDevelopers),
  docs: shuffle(docs),
  translators: shuffle(translators)
});

/***/ })

/******/ });
//# sourceMappingURL=credits.js.map