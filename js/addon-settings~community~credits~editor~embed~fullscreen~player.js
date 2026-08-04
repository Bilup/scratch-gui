(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-settings~community~credits~editor~embed~fullscreen~player"],{

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/tab-styles/icon-only.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/tab-styles/icon-only.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tab_\"] span {\n    display: none;\n}\n\n[class*=\"gui_tab_\"] svg {\n    margin-right: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/tab-styles/scratchbox.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/tab-styles/scratchbox.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tab_\"] {\n  border-radius: 0.75rem 0.75rem 0.25rem 0.25rem !important;\n}\n\n[class*=\"gui_tab_\"]:not(:first-child) {\n  margin-left: 0.3rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/tab-styles/text-only.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/tab-styles/text-only.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tab_\"] svg {\n    display: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/tab-styles/turbowarp.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/tab-styles/turbowarp.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* TurboWarp Tab Styles */\n[class*=\"gui_tab_\"] {\n  flex-grow: 1;\n  height: 80%;\n  top: 0;\n  margin-bottom: 0;\n  border-radius: 1rem 1rem 0 0 !important;\n  border: 1px solid var(--ui-black-transparent);\n  padding: 0.125rem 1.25rem 0;\n  font-size: 0.75rem;\n  background-color: var(--ui-tertiary);\n  color: var(--ui-text-primary-transparent);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n\n  &:hover {\n    border: 1px solid var(--ui-black-transparent);\n    background-color: var(--ui-white);\n  }\n\n  & svg {\n    margin-right: 0.125rem;\n  }\n}\n\n[class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"] {\n  height: 90%;\n  color: var(--looks-secondary);\n  background-color: var(--ui-white);\n  z-index: 4 !important;\n}\n\n/* Ensure selected tab always has highest z-index, regardless of position */\n[dir=\"ltr\"] [class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"]:nth-child(1) {\n  z-index: 4 !important;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"]:nth-child(2) {\n  z-index: 4 !important;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"]:nth-child(3) {\n  z-index: 4 !important;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"][class*=\"react-tabs__tab--selected\"]:hover {\n  z-index: 4 !important;\n}\n\n[dir=\"ltr\"] [class*=\"gui_tab_\"] {\n  margin-left: -0.35rem;\n}\n\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(1) {\n  z-index: 3 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(2) {\n  z-index: 2 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(3) {\n  z-index: 1 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(1):hover {\n  z-index: 3 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(2):hover {\n  z-index: 2 ;\n}\n[dir=\"ltr\"] [class*=\"gui_tab_\"]:nth-child(3):hover {\n  z-index: 1 ;\n}\n\n[class*=\"gui_tab-list\"] {\n  padding-left: 0;\n  height: 2.75rem;\n  width: 250px;\n  display: flex;\n  align-items: flex-end;\n  flex-shrink: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 0.80rem;\n  margin: 0 !important;\n  border-bottom: 0 !important;\n  color: var(--text-primary);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/window-theme/macos.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/window-theme/macos.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addon-window {\n  border-radius: 16px !important;\n  backdrop-filter: blur(30px) saturate(180%) !important;\n  background: var(--ui-modal-background, #ffffff) !important;\n}\n\n.addon-window:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.05) inset !important;\n}\n\n.addon-window-header {\n  background: var(--ui-secondary, #f8f9fa) !important;\n  border-bottom: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08)) !important;\n  backdrop-filter: blur(20px) !important;\n  padding: 12px 16px !important;\n  min-height: 48px !important;\n  justify-content: flex-start !important;\n}\n\n.addon-window-title {\n  flex: 1 !important;\n  text-align: center !important;\n  font-weight: 600 !important;\n  font-size: 14px !important;\n  color: var(--text-primary, #333) !important;\n  order: 2 !important;\n  padding: 0 16px !important;\n  font-family: -apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n}\n\n.addon-window-controls {\n  order: 1 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 8px !important;\n  flex: 0 0 auto !important;\n  opacity: 1 !important;\n}\n\n.addon-window-btn {\n  border-radius: 50% !important;\n  width: 12px !important;\n  height: 12px !important;\n  padding: 0 !important;\n}\n\n.addon-window-btn-close {\n  color: #FF5F57 !important;\n  background-color: #FF5F57 !important;\n  order: 1 !important;\n}\n\n.addon-window-btn-minimize {\n  color: #FEBC2E !important;\n  background-color: #FEBC2E !important;\n  order: 2 !important;\n}\n\n.addon-window-btn-maximize,\n.addon-window-btn-restore {\n  color: #28C840 !important;\n  background-color: #28C840 !important;\n  order: 3 !important;\n}\n\n.addon-window-btn svg {\n  display: block !important;\n  width: 8px !important;\n  height: 8px !important;\n  stroke: var(--ui-white, #ffffff) !important;\n  stroke-width: 2px !important;\n  opacity: 0 !important;\n  transition: opacity 0.15s ease !important;\n}\n\n.addon-window-btn:hover {\n  opacity: 1 !important;\n\n  & svg {\n    opacity: 1 !important;\n  }\n}\n\n.addon-window-content {\n  border-radius: 0 0 16px 16px !important;\n  background: var(--ui-modal-background, #ffffff) !important;\n  backdrop-filter: blur(10px) !important;\n  border-top: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.06)) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/window-theme/windows10.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader!./src/addons/addons/window-theme/windows10.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addon-window {\n  border-radius: 0 !important;\n  border: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08)) !important;\n  backdrop-filter: none !important;\n  background: var(--ui-modal-background, #ffffff) !important;\n  font-family: \"Segoe UI\", \"Microsoft YaHei\", Tahoma, Geneva, Verdana, sans-serif !important;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05) !important;\n}\n\n.addon-window:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08) !important;\n}\n\n.addon-window-header {\n  background: var(--ui-tertiary, #f3f3f3) !important;\n  border-bottom: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08)) !important;\n  backdrop-filter: none !important;\n  padding: 0 !important;\n  min-height: 40px !important;\n  justify-content: space-between !important;\n  display: flex !important;\n  align-items: center !important;\n  border-radius: 0 !important;\n}\n\n.addon-window-title {\n  flex: 0 1 auto !important;\n  text-align: left !important;\n  font-weight: 400 !important;\n  font-size: 14px !important;\n  color: var(--text-primary, #333333) !important;\n  text-shadow: none !important;\n  order: 1 !important;\n  padding-left: 16px !important;\n  padding-right: 8px !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  font-family: \"Segoe UI\", sans-serif !important;\n}\n\n.addon-window-controls {\n  order: 2 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-end !important;\n  gap: 0 !important;\n  flex: 0 0 auto !important;\n  height: 100% !important;\n}\n\n.addon-window-btn {\n  background: transparent !important;\n  border: none !important;\n  cursor: pointer !important;\n  width: 46px !important;\n  height: 32px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0 !important;\n  color: var(--text-primary, #666666) !important;\n  font-size: 0 !important;\n  margin-bottom: 7px !important;\n  padding: 0 !important;\n  top: 0 !important;\n  position: relative !important;\n}\n\n.addon-window-btn:hover {\n  background: var(--ui-tertiary, #e5e5e5) !important;\n  color: var(--text-primary, #333333) !important;\n}\n\n.addon-window-btn-close:hover {\n  background: #e81123 !important;\n  color: var(--text-primary, #ffffff) !important;\n}\n\n.addon-window-btn svg {\n  display: block !important;\n  width: 10px !important;\n  height: 10px !important;\n  stroke-width: 2.5px !important;\n  stroke: currentColor !important;\n}\n\n.addon-window-btn-close svg {\n  stroke-width: 2.2px !important;\n}\n\n.addon-window-content {\n  border-radius: 0 !important;\n  background: var(--ui-modal-background, #ffffff) !important;\n  backdrop-filter: none !important;\n  border-top: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.08)) !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js?!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader??ref--7-1!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./src/lib/themes/global-styles.css ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* This is for overriding some styles that don't really \"belong\" to any existing stylesheets */\n\n/* Try to use this sparingly, otherwise this will become unmaintainable again... */\n\n:root {\n    color-scheme: var(--color-scheme);\n\n    /* Default GUI color variables (light theme) — ensures the page is never unstyled */\n    --color-scheme: light;\n    --ui-primary: hsla(215, 100%, 95%, 1);\n    --ui-secondary: hsla(215, 75%, 95%, 1);\n    --ui-tertiary: hsla(215, 50%, 90%, 1);\n    --ui-modal-overlay: rgba(0, 0, 0, 0.3);\n    --ui-modal-background: hsla(0, 100%, 100%, 1);\n    --ui-modal-foreground: hsla(225, 15%, 40%, 1);\n    --ui-modal-header-background: hsla(215, 100%, 65%, 1);\n    --ui-modal-header-foreground: hsla(0, 100%, 100%, 1);\n    --ui-white: hsla(0, 100%, 100%, 1);\n    --ui-white-dim: hsla(0, 100%, 100%, 0.75);\n    --ui-white-transparent: hsla(0, 100%, 100%, 0.25);\n    --ui-transparent: hsla(0, 100%, 100%, 0);\n    --ui-black-transparent: hsla(0, 0%, 0%, 0.15);\n    --text-primary: hsla(225, 15%, 40%, 1);\n    --text-primary-transparent: hsla(225, 15%, 40%, 0.75);\n    --motion-primary: hsla(215, 100%, 65%, 1);\n    --motion-tertiary: hsla(215, 60%, 50%, 1);\n    --looks-secondary: hsla(215, 100%, 65%, 1);\n    --looks-tertiary: hsla(215, 60%, 50%, 1);\n    --looks-transparent: hsla(215, 100%, 65%, 0.35);\n    --looks-light-transparent: hsla(215, 100%, 65%, 0.15);\n    --looks-secondary-dark: hsla(215, 60%, 40%, 1);\n    --red-primary: hsla(20, 100%, 55%, 1);\n    --red-tertiary: hsla(20, 100%, 45%, 1);\n    --sound-primary: hsla(300, 53%, 60%, 1);\n    --sound-tertiary: hsla(300, 48%, 50%, 1);\n    --control-primary: hsla(38, 100%, 55%, 1);\n    --data-primary: hsla(30, 100%, 55%, 1);\n    --pen-primary: hsla(163, 85%, 40%, 1);\n    --pen-transparent: hsla(163, 85%, 40%, 0.25);\n    --pen-tertiary: hsla(163, 86%, 30%, 1);\n    --error-primary: hsla(30, 100%, 55%, 1);\n    --error-light: hsla(30, 100%, 70%, 1);\n    --error-transparent: hsla(30, 100%, 55%, 0.25);\n    --extensions-primary: hsla(163, 85%, 40%, 1);\n    --extensions-tertiary: hsla(163, 85%, 30%, 1);\n    --extensions-transparent: hsla(163, 85%, 40%, 0.35);\n    --extensions-light: hsla(163, 57%, 85%, 1);\n    --drop-highlight: hsla(215, 100%, 77%, 1);\n    --menu-bar-background: hsla(215, 100%, 65%, 1);\n    --menu-bar-background-image: none;\n    --menu-bar-foreground: #ffffff;\n    --assets-background: #ffffff;\n    --input-background: #ffffff;\n    --popover-background: #ffffff;\n    --shadow: hsla(0, 0%, 0%, 0.15);\n    --badge-background: #dbebff;\n    --badge-border: #b9d6ff;\n    --fullscreen-background: #ffffff;\n    --fullscreen-accent: #e8edf1;\n    --page-background: #ffffff;\n    --page-foreground: #000000;\n    --link-color: hsla(215, 100%, 65%, 1);\n    --project-title-inactive: hsla(0, 100%, 100%, 0.25);\n    --project-title-hover: #ffffff7f;\n}\n\n/* popover is used by gui and paint */\n\n/* some of these are duplicated over there too; !important makes sure these win */\n\n.Popover {\n    color-scheme: light !important;\n}\n\n.Popover-body {\n    color: var(--text-primary) !important;\n    background: var(--popover-background) !important;\n    border: 1px solid var(--ui-black-transparent) !important;\n    box-shadow: 0px 0px 8px 1px var(--shadow) !important;\n}\n\n.Popover-tipShape {\n    fill: var(--popover-background) !important;\n    stroke: var(--ui-black-transparent) !important;\n}\n\n/* ScratchAdddons editor-dark-mode compatibility */\n\n:root {\n    --editorDarkMode-primary: var(--looks-secondary);\n    --editorDarkMode-primary-transparent35: var(--looks-transparent);\n    --editorDarkMode-primary-variant: var(--looks-secondary-dark);\n    --editorDarkMode-border: var(--ui-black-transparent);\n    --editorDarkMode-accent: var(--ui-modal-background);\n    --editorDarkMode-categoryMenu-text: var(--text-primary);\n    --editorDarkMode-accent-text: var(--text-primary);\n    --editorDarkMode-page: var(--ui-primary);\n    --editorDarkMode-highlightText: var(--looks-secondary);\n}\n\n/* Workspace theme support */\n\n:root {\n    --editorTheme3-workspace-background: transparent;\n    --editorTheme3-toolbox-background: transparent;\n    --editorTheme3-toolbox-text: inherit;\n    --editorTheme3-flyout-background: transparent;\n    --editorTheme3-flyout-text: inherit;\n    --editorTheme3-scrollbar: #c1c1c1;\n    --editorTheme3-grid-color: #dedede;\n}\n\n/* Disable window animations */\n\n.global-styles_no-window-animation_IBdAf {\n    --animation-duration: 0s !important;\n}\n\n.global-styles_no-window-animation_IBdAf .menu {\n    transition: none !important;\n}\n\n.global-styles_no-window-animation_IBdAf .submenu {\n    transition: none !important;\n}\n\n.global-styles_no-window-animation_IBdAf .stage {\n    transition: none !important;\n}\n\n.global-styles_no-window-animation_IBdAf .stage-overlays {\n    transition: none !important;\n}", ""]);

// exports
exports.locals = {
	"no-window-animation": "global-styles_no-window-animation_IBdAf",
	"noWindowAnimation": "global-styles_no-window-animation_IBdAf"
};

/***/ }),

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./src/lib/themes/icons/dark.svg":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader!./src/lib/themes/icons/dark.svg ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-moon-icon lucide-moon\"><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\"/></svg>"

/***/ }),

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./src/lib/themes/icons/light.svg":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader!./src/lib/themes/icons/light.svg ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-sun-icon lucide-sun\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/></svg>"

/***/ }),

/***/ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./src/lib/themes/icons/midnight.svg":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader!./src/lib/themes/icons/midnight.svg ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-cloud-moon-icon lucide-cloud-moon\"><path d=\"M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z\"/><path d=\"M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36\"/></svg>"

/***/ }),

/***/ "./src/addons/hooks.js":
/*!*****************************!*\
  !*** ./src/addons/hooks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const AddonHooks = {
  appStateReducer: () => {},
  appStateStore: null,
  blockly: null,
  blocklyWorkspace: null,
  blocklyCallbacks: [],
  recolorCallbacks: []
};
/* harmony default export */ __webpack_exports__["default"] = (AddonHooks);

/***/ }),

/***/ "./src/components/menu-bar/tw-align-center.svg":
/*!*****************************************************!*\
  !*** ./src/components/menu-bar/tw-align-center.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBDaXJjdWxhciBiYWNrZ3JvdW5kIC0tPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIiBmaWxsPSIjNEVDREM0IiBzdHJva2U9IiMyNkE2OUEiIHN0cm9rZS13aWR0aD0iMSIvPgogIAogIDwhLS0gQ2VudGVyLWFsaWduZWQgdGV4dCBsaW5lcyBpbiB3aGl0ZSAtLT4KICA8cmVjdCB4PSI2IiB5PSI4IiB3aWR0aD0iMTIiIGhlaWdodD0iMS41IiByeD0iMC43NSIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSI4IiB5PSIxMSIgd2lkdGg9IjgiIGhlaWdodD0iMS41IiByeD0iMC43NSIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSI2IiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+CiAgPHJlY3QgeD0iOCIgeT0iMTciIHdpZHRoPSI4IiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/components/menu-bar/tw-align-left.svg":
/*!***************************************************!*\
  !*** ./src/components/menu-bar/tw-align-left.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBDaXJjdWxhciBiYWNrZ3JvdW5kIC0tPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIiBmaWxsPSIjRkY2NjgwIiBzdHJva2U9IiNFNzRDM0MiIHN0cm9rZS13aWR0aD0iMSIvPgogIAogIDwhLS0gTGVmdC1hbGlnbmVkIHRleHQgbGluZXMgaW4gd2hpdGUgLS0+CiAgPHJlY3QgeD0iNiIgeT0iOCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+CiAgPHJlY3QgeD0iNiIgeT0iMTEiIHdpZHRoPSI4IiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiIGZpbGw9IndoaXRlIi8+CiAgPHJlY3QgeD0iNiIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxLjUiIHJ4PSIwLjc1IiBmaWxsPSJ3aGl0ZSIvPgogIDxyZWN0IHg9IjYiIHk9IjE3IiB3aWR0aD0iOCIgaGVpZ2h0PSIxLjUiIHJ4PSIwLjc1IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/lib/community/api.js":
/*!**********************************!*\
  !*** ./src/lib/community/api.js ***!
  \**********************************/
/*! exports provided: loadSession, stashProjectHandoff, takeProjectHandoff, storeSession, exchangeValidator, runExchange, onAuthInvalid, onBanned, logout, createProject, uploadProject, publishProject, updateProject, checkProjectAssets, getProject, getEditorProject, remixProject, deleteProject, request, getCustomExtensionUrls, hashExtensionUrl, extensionSourceUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSession", function() { return loadSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stashProjectHandoff", function() { return stashProjectHandoff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeProjectHandoff", function() { return takeProjectHandoff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSession", function() { return storeSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exchangeValidator", function() { return exchangeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runExchange", function() { return runExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAuthInvalid", function() { return onAuthInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBanned", function() { return onBanned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProject", function() { return uploadProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishProject", function() { return publishProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProject", function() { return updateProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProjectAssets", function() { return checkProjectAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return getProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorProject", function() { return getEditorProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remixProject", function() { return remixProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomExtensionUrls", function() { return getCustomExtensionUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashExtensionUrl", function() { return hashExtensionUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionSourceUrl", function() { return extensionSourceUrl; });
/* harmony import */ var _turbowarp_jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turbowarp/jszip */ "./node_modules/@turbowarp/jszip/dist/jszip.min.js");
/* harmony import */ var _turbowarp_jszip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_turbowarp_jszip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cached_fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cached-fetch.js */ "./src/lib/community/cached-fetch.js");
/* harmony import */ var _trusted_extension_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trusted-extension.js */ "./src/lib/trusted-extension.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



const API_BASE = 'https://api.bilup.org/api';
const SESSION_KEY = 'mw:mistwarp-session';
const ROTUR_TOKEN_KEY = 'mw:rotur-token';
const loadRoturToken = () => {
  try {
    return localStorage.getItem(ROTUR_TOKEN_KEY) || null;
  } catch (e) {
    return null;
  }
};
let exchangeInFlight = null;
const loadSession = () => {
  try {
    return localStorage.getItem(SESSION_KEY) || null;
  } catch (e) {
    return null;
  }
};
const storeSession = token => {
  try {
    if (token) {
      localStorage.setItem(SESSION_KEY, token);
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  } catch (e) {
    // ignore
  }
};
const GET_CACHE_PREFIX = 'mw:api-cache:';
const GET_CACHE_TTL = 60 * 1000;
const getCacheKey = path => {
  const session = loadSession();
  return "".concat(GET_CACHE_PREFIX).concat(session ? session.slice(-8) : 'anon', ":").concat(path);
};
const clearApiCache = () => {
  try {
    for (let i = sessionStorage.length - 1; i >= 0; i--) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith(GET_CACHE_PREFIX)) {
        sessionStorage.removeItem(key);
      }
    }
  } catch (e) {
    // ignore
  }
};
const readApiCache = path => {
  try {
    const raw = sessionStorage.getItem(getCacheKey(path));
    if (!raw) return null;
    const _JSON$parse = JSON.parse(raw),
      data = _JSON$parse.data,
      at = _JSON$parse.at;
    if (!at || Date.now() - at > GET_CACHE_TTL) return null;
    return data;
  } catch (e) {
    return null;
  }
};
const writeApiCache = (path, data) => {
  try {
    sessionStorage.setItem(getCacheKey(path), JSON.stringify({
      data,
      at: Date.now()
    }));
  } catch (e) {
    clearApiCache();
  }
};
const parseResponse = async response => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false || data.error) {
    const error = new Error(data.error || "Request failed (".concat(response.status, ")"));
    error.status = response.status;
    error.code = data.code;
    error.data = data;
    throw error;
  }
  return data;
};
const exchangeValidator = async function exchangeValidator(roturToken) {
  let appKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bilup';
  const validatorResponse = await fetch("https://api.accounts.bilup.org/generate_validator?key=".concat(encodeURIComponent(appKey), "&auth=").concat(encodeURIComponent(roturToken)));
  const validatorData = await validatorResponse.json().catch(() => ({}));
  const validator = validatorData.validator;
  if (!validator) {
    const error = new Error(validatorData.error || 'Could not validate Bilup Accounts login');
    if (validatorData.error || validatorResponse.status === 403) {
      error.code = 'VALIDATOR_GENERATION_FAILED';
    }
    throw error;
  }
  const authResponse = await fetch("".concat(API_BASE, "/auth?v=").concat(encodeURIComponent(validator)), {
    method: 'POST'
  });
  const authData = await parseResponse(authResponse);
  storeSession(authData.token);
  return authData;
};
let authInvalidHandler = null;
const onAuthInvalid = handler => {
  authInvalidHandler = handler;
};
let bannedHandler = null;
const onBanned = handler => {
  bannedHandler = handler;
};
const runExchange = token => {
  if (!exchangeInFlight) {
    exchangeInFlight = exchangeValidator(token).catch(error => {
      if (error.code === 'VALIDATOR_GENERATION_FAILED' && authInvalidHandler) {
        authInvalidHandler();
      }
      if (error.code === 'banned' && bannedHandler) {
        bannedHandler(error.message);
      }
      throw error;
    }).finally(() => {
      exchangeInFlight = null;
    });
  }
  return exchangeInFlight;
};
const request = async function request(path) {
  let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$method = _ref.method,
    method = _ref$method === void 0 ? 'GET' : _ref$method,
    body = _ref.body,
    _ref$headers = _ref.headers,
    headers = _ref$headers === void 0 ? {} : _ref$headers,
    _ref$raw = _ref.raw,
    raw = _ref$raw === void 0 ? false : _ref$raw,
    _ref$cache = _ref.cache,
    cache = _ref$cache === void 0 ? true : _ref$cache;
  const cacheable = method === 'GET' && !raw && cache;
  if (cacheable) {
    const hit = readApiCache(path);
    if (hit) return hit;
  } else if (method !== 'GET' && !path.endsWith('/view')) {
    clearApiCache();
  }
  const doFetch = () => {
    const session = loadSession();
    const finalHeaders = _objectSpread({}, headers);
    if (session) {
      finalHeaders.Authorization = "Bearer ".concat(session);
    }
    const options = {
      method,
      headers: finalHeaders
    };
    if (body instanceof FormData) {
      options.body = body;
    } else if (typeof body !== 'undefined') {
      finalHeaders['Content-Type'] = 'application/json';
      options.body = JSON.stringify(body);
    }
    return fetch("".concat(API_BASE).concat(path), options);
  };
  let response = await doFetch();
  if (response.status === 401 && !path.startsWith('/auth') && !path.startsWith('/logout')) {
    storeSession(null);
    const roturToken = loadRoturToken();
    if (roturToken) {
      try {
        await runExchange(roturToken);
        response = await doFetch();
      } catch (e) {
        // keep the original 401 response
      }
    }
  }
  if (path === '/me' && response.status === 401) {
    storeSession(null);
  }
  if (raw) {
    return response;
  }
  const data = await parseResponse(response);
  if (cacheable) {
    writeApiCache(path, data);
  }
  return data;
};
const logout = async () => {
  try {
    await request('/logout', {
      method: 'POST'
    });
  } finally {
    storeSession(null);
  }
};
const createProject = payload => request('/projects', {
  method: 'POST',
  body: payload
});
const uploadXhr = (path, form, onUploadProgress) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', "".concat(API_BASE).concat(path));
  const session = loadSession();
  if (session) {
    xhr.setRequestHeader('Authorization', "Bearer ".concat(session));
  }
  xhr.upload.onprogress = event => {
    if (event.lengthComputable && typeof onUploadProgress === 'function') {
      onUploadProgress(event.loaded, event.total);
    }
  };
  xhr.onerror = () => reject(new Error('Network error during upload'));
  xhr.onload = () => {
    let data = {};
    try {
      data = JSON.parse(xhr.responseText);
    } catch (e) {
      data = {};
    }
    if (xhr.status >= 200 && xhr.status < 300 && data.ok !== false && !data.error) {
      resolve(data);
      return;
    }
    const error = new Error(data.error || "Request failed (".concat(xhr.status, ")"));
    error.status = xhr.status;
    error.code = data.code;
    error.data = data;
    reject(error);
  };
  xhr.send(form);
});
const getCustomExtensionUrls = project => {
  const urls = _objectSpread({}, project.extensionURLs || {});
  for (const target of project.targets || []) {
    Object.assign(urls, target && target.extensionURLs || {});
  }
  return [...new Set(Object.values(urls).filter(url => typeof url === 'string' && !Object(_trusted_extension_js__WEBPACK_IMPORTED_MODULE_2__["isGalleryExtensionUrl"])(url)))];
};
const hashExtensionUrl = async url => {
  const bytes = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(url)));
  return [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
};
const extensionSourceUrl = async (project, url) => {
  const params = new URLSearchParams();
  try {
    const key = new URL(project.projectJsonUrl).searchParams.get('k');
    if (key) params.set('k', key);
  } catch (e) {
    params.delete('k');
  }
  const query = params.toString();
  const hash = await hashExtensionUrl(url);
  const sourceUrl = "".concat(API_BASE, "/projects/").concat(encodeURIComponent(project.id), "/extensions/").concat(hash, "/source");
  return "".concat(sourceUrl).concat(query ? "?".concat(query) : '');
};
const collectExtensionSources = async sb3Blob => {
  const zip = await _turbowarp_jszip__WEBPACK_IMPORTED_MODULE_0___default.a.loadAsync(sb3Blob);
  const projectFile = zip.file('project.json');
  if (!projectFile) throw new Error('Project has no project.json');
  const urls = getCustomExtensionUrls(JSON.parse(await projectFile.async('text')));
  const sources = {};
  await Promise.all(urls.map(async url => {
    const response = await fetch(url, {
      credentials: 'omit'
    });
    if (!response.ok) throw new Error("Could not read custom extension source (".concat(response.status, "): ").concat(url));
    sources[url] = await response.text();
  }));
  return sources;
};
const uploadProject = async (id, sb3Blob, thumbnailBlob, onUploadProgress) => {
  const form = new FormData();
  form.append('project', sb3Blob, 'project.sb3');
  form.append('extensions', JSON.stringify(await collectExtensionSources(sb3Blob)));
  if (thumbnailBlob) {
    form.append('thumbnail', thumbnailBlob, 'thumb.png');
  }
  const path = "/projects/".concat(id, "/upload");
  try {
    return await uploadXhr(path, form, onUploadProgress);
  } catch (e) {
    if (e.status !== 401) throw e;
    storeSession(null);
    const roturToken = loadRoturToken();
    if (!roturToken) throw e;
    await runExchange(roturToken);
    return uploadXhr(path, form, onUploadProgress);
  } finally {
    clearApiCache();
    Object(_cached_fetch_js__WEBPACK_IMPORTED_MODULE_1__["clearContentCache"])();
  }
};
const publishProject = id => request("/projects/".concat(id, "/publish"), {
  method: 'POST'
});
const updateProject = (id, patch) => request("/projects/".concat(id), {
  method: 'PUT',
  body: patch
});
const checkProjectAssets = (id, assets) => request("/projects/".concat(id, "/assets/check"), {
  method: 'POST',
  body: {
    assets
  }
});
const getProject = id => request("/projects/".concat(id));
const getEditorProject = id => request("/projects/".concat(id, "/editor"), {
  cache: false
});
const remixProject = id => request("/projects/".concat(id, "/remix"), {
  method: 'POST'
});
const deleteProject = id => request("/projects/".concat(id), {
  method: 'DELETE'
});
const HANDOFF_KEY = 'mw:project-handoff';
const HANDOFF_MAX_AGE = 5 * 60 * 1000;
const stashProjectHandoff = project => {
  try {
    sessionStorage.setItem(HANDOFF_KEY, JSON.stringify({
      project,
      at: Date.now()
    }));
  } catch (e) {
    // ignore
  }
};
const takeProjectHandoff = id => {
  try {
    const raw = sessionStorage.getItem(HANDOFF_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(HANDOFF_KEY);
    const _JSON$parse2 = JSON.parse(raw),
      project = _JSON$parse2.project,
      at = _JSON$parse2.at;
    if (!project || String(project.id) !== String(id)) return null;
    if (!at || Date.now() - at > HANDOFF_MAX_AGE) return null;
    return project;
  } catch (e) {
    return null;
  }
};


/***/ }),

/***/ "./src/lib/community/cached-fetch.js":
/*!*******************************************!*\
  !*** ./src/lib/community/cached-fetch.js ***!
  \*******************************************/
/*! exports provided: cachedFetchBuffer, cachedFetchJson, clearContentCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cachedFetchBuffer", function() { return cachedFetchBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cachedFetchJson", function() { return cachedFetchJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearContentCache", function() { return clearContentCache; });
const CACHE_NAME = 'mw-project-content';
const TTL = 5 * 60 * 1000;
const CACHED_AT_HEADER = 'x-mw-cached-at';
const inflight = new Map();
const openCache = async () => {
  try {
    if (typeof caches === 'undefined') return null;
    return await caches.open(CACHE_NAME);
  } catch (e) {
    return null;
  }
};
const fetchAndStore = async url => {
  const cache = await openCache();
  if (cache) {
    try {
      const hit = await cache.match(url);
      if (hit) {
        const at = Number(hit.headers.get(CACHED_AT_HEADER));
        if (at && Date.now() - at < TTL) {
          return hit.arrayBuffer();
        }
      }
    } catch (e) {
      // fall through to network
    }
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Request returned status ".concat(response.status));
  }
  const buffer = await response.arrayBuffer();
  if (cache) {
    try {
      await cache.put(url, new Response(buffer, {
        headers: {
          [CACHED_AT_HEADER]: String(Date.now())
        }
      }));
    } catch (e) {
      // cache full or unavailable; the fetch still succeeded
    }
  }
  return buffer;
};
const sharedFetch = url => {
  let promise = inflight.get(url);
  if (!promise) {
    promise = fetchAndStore(url).finally(() => inflight.delete(url));
    inflight.set(url, promise);
  }
  return promise;
};
const cachedFetchBuffer = url => sharedFetch(url).then(buffer => buffer.slice(0));
const cachedFetchJson = url => sharedFetch(url).then(buffer => JSON.parse(new TextDecoder().decode(buffer)));
const clearContentCache = () => {
  try {
    if (typeof caches !== 'undefined') {
      caches.delete(CACHE_NAME).catch(() => null);
    }
  } catch (e) {
    // ignore
  }
};


/***/ }),

/***/ "./src/lib/menu-bar/settings.js":
/*!**************************************!*\
  !*** ./src/lib/menu-bar/settings.js ***!
  \**************************************/
/*! exports provided: STORAGE_PREFIX, CHANGE_EVENT, DEFINITIONS, getSetting, getSettings, setSetting, onSettingsChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_PREFIX", function() { return STORAGE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_EVENT", function() { return CHANGE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFINITIONS", function() { return DEFINITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSetting", function() { return setSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSettingsChanged", function() { return onSettingsChanged; });
const STORAGE_PREFIX = 'mw:menu-bar:';
const CHANGE_EVENT = 'mw-menu-bar-settings-changed';
const DEFINITIONS = [{
  id: 'menu_labels',
  type: 'select',
  default: 'both',
  label: 'Menu item labels',
  labelId: 'mw.settings.menuBar.itemLabels',
  options: [{
    value: 'both',
    label: 'Icons and labels',
    labelId: 'mw.settings.menuBar.itemLabels.both'
  }, {
    value: 'icons',
    label: 'Icons only',
    labelId: 'mw.settings.menuBar.itemLabels.icons'
  }, {
    value: 'labels',
    label: 'Labels only',
    labelId: 'mw.settings.menuBar.itemLabels.labels'
  }]
}, {
  id: 'show_block_count',
  type: 'boolean',
  default: true,
  label: 'Show block count',
  labelId: 'mw.settings.menuBar.showBlockCount'
}, {
  id: 'show_costume_count',
  type: 'boolean',
  default: false,
  label: 'Show costume count',
  labelId: 'mw.settings.menuBar.showCostumeCount'
}, {
  id: 'show_sound_count',
  type: 'boolean',
  default: false,
  label: 'Show sound count',
  labelId: 'mw.settings.menuBar.showSoundCount'
}, {
  id: 'show_complexity_score',
  type: 'boolean',
  default: false,
  label: 'Show complexity score',
  labelId: 'mw.settings.menuBar.showComplexityScore'
}, {
  id: 'show_media_recorder',
  type: 'boolean',
  default: false,
  label: 'Show project video recorder',
  labelId: 'mw.settings.menuBar.showVideoRecorder'
}, {
  id: 'autosave_enabled',
  type: 'boolean',
  default: false,
  label: 'Enable autosave',
  labelId: 'mw.settings.menuBar.enableAutosave'
}, {
  id: 'autosave_interval',
  type: 'number',
  default: 5,
  min: 1,
  max: 60,
  label: 'Autosave interval (minutes)',
  labelId: 'mw.settings.menuBar.autosaveInterval'
}, {
  id: 'autosave_notifications',
  type: 'boolean',
  default: true,
  label: 'Show autosave notifications',
  labelId: 'mw.settings.menuBar.showAutosaveNotifications'
}, {
  id: 'autosave_only_when_changed',
  type: 'boolean',
  default: true,
  label: 'Only autosave changed projects',
  labelId: 'mw.settings.menuBar.onlyAutosaveChanged'
}];
const byId = Object.fromEntries(DEFINITIONS.map(definition => [definition.id, definition]));
const readLegacy = () => {
  try {
    return JSON.parse(localStorage.getItem('tw:addons')) || {};
  } catch (_) {
    return {};
  }
};
const legacyValue = id => {
  var _addons$customMenuB, _addons$mediarecorder;
  const addons = readLegacy();
  const blockCount = addons['block-count'] || addons['tw-project-info'];
  const autosave = addons.autosave;
  switch (id) {
    case 'menu_labels':
      return (_addons$customMenuB = addons['custom-menu-bar']) !== null && _addons$customMenuB !== void 0 && _addons$customMenuB.enabled ? addons['custom-menu-bar']['menu-labels'] : null;
    case 'show_block_count':
      return blockCount ? blockCount.enabled !== false && blockCount.hide_block_count !== true : null;
    case 'show_costume_count':
    case 'show_sound_count':
    case 'show_complexity_score':
      return blockCount === null || blockCount === void 0 ? void 0 : blockCount[id];
    case 'show_media_recorder':
      return typeof ((_addons$mediarecorder = addons.mediarecorder) === null || _addons$mediarecorder === void 0 ? void 0 : _addons$mediarecorder.enabled) === 'boolean' ? addons.mediarecorder.enabled : null;
    case 'autosave_enabled':
      return autosave ? autosave.enabled === true && autosave.autosaveEnabled !== false : null;
    case 'autosave_interval':
      return autosave === null || autosave === void 0 ? void 0 : autosave.interval;
    case 'autosave_notifications':
      return autosave === null || autosave === void 0 ? void 0 : autosave.showNotifications;
    case 'autosave_only_when_changed':
      return autosave === null || autosave === void 0 ? void 0 : autosave.saveOnlyWhenChanged;
    default:
      return null;
  }
};
const normalize = (definition, value) => {
  if (definition.type === 'boolean') return value === true || value === 'true';
  if (definition.type === 'number') {
    const number = Number(value);
    if (!Number.isFinite(number)) return definition.default;
    return Math.min(definition.max, Math.max(definition.min, number));
  }
  return definition.options.some(option => option.value === value) ? value : definition.default;
};
const getSetting = id => {
  const definition = byId[id];
  if (!definition) return null;
  let stored = null;
  try {
    stored = localStorage.getItem("".concat(STORAGE_PREFIX).concat(id));
  } catch (_) {
    return definition.default;
  }
  if (stored !== null) return normalize(definition, stored);
  const legacy = legacyValue(id);
  return legacy === null || typeof legacy === 'undefined' ? definition.default : normalize(definition, legacy);
};
const getSettings = () => Object.fromEntries(DEFINITIONS.map(_ref => {
  let id = _ref.id;
  return [id, getSetting(id)];
}));
const setSetting = (id, value) => {
  const definition = byId[id];
  if (!definition) return;
  const normalized = normalize(definition, value);
  try {
    localStorage.setItem("".concat(STORAGE_PREFIX).concat(id), String(normalized));
    __webpack_require__(/*! ../rotur/cloud-sync.js */ "./src/lib/rotur/cloud-sync.js").notifyLocalChange();
  } catch (_) {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, {
    detail: {
      id,
      value: normalized
    }
  }));
};
const onSettingsChanged = listener => {
  window.addEventListener(CHANGE_EVENT, listener);
  return () => window.removeEventListener(CHANGE_EVENT, listener);
};


/***/ }),

/***/ "./src/lib/mw-menu-bar-layout.js":
/*!***************************************!*\
  !*** ./src/lib/mw-menu-bar-layout.js ***!
  \***************************************/
/*! exports provided: ZONES, ALL_ITEMS, ALWAYS_SHOW, CHANGE_EVENT, ORDER_KEY, HIDDEN_KEY, getStoredOrder, setZoneOrder, getZoneDisplayOrder, getZoneExtras, getHidden, isHidden, setHidden, getPresentOrderedIds, getMenuBarLayout, applyMenuBarLayout, applyLayout, initMenuBarLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZONES", function() { return ZONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ITEMS", function() { return ALL_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_SHOW", function() { return ALWAYS_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_EVENT", function() { return CHANGE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_KEY", function() { return ORDER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDDEN_KEY", function() { return HIDDEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoredOrder", function() { return getStoredOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setZoneOrder", function() { return setZoneOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneDisplayOrder", function() { return getZoneDisplayOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneExtras", function() { return getZoneExtras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHidden", function() { return getHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHidden", function() { return isHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHidden", function() { return setHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPresentOrderedIds", function() { return getPresentOrderedIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuBarLayout", function() { return getMenuBarLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMenuBarLayout", function() { return applyMenuBarLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyLayout", function() { return applyLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMenuBarLayout", function() { return initMenuBarLayout; });
const ZONES = [{
  id: 'left',
  items: ['__errors', 'file', 'edit', 'mode', 'tools', 'bookmarks', 'view', '__divider', 'project-title', '__view-counter', 'community', 'media-recorder', 'block-count', 'share', 'remix', 'feedback'],
  extras: []
}, {
  id: 'right',
  items: ['save-status', 'about', 'collab-presence', 'rotur-account'],
  extras: []
}];
const ALWAYS_SHOW = ['save-status', 'rotur-account', 'collab-presence', 'view'];
const ALL_ITEMS = ZONES.reduce((acc, zone) => acc.concat(zone.items, zone.extras), []);

// Bump when default zone membership/order changes so old custom orders reset
const ORDER_KEY = 'mw:menu-bar-order-v6';
const HIDDEN_KEY = 'mw:menu-bar-hidden';
const CHANGE_EVENT = 'mw-menu-bar-layout-changed';
const STYLE_ID = 'mw-menu-bar-layout';
const readJSON = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    // ignore
  }
  return fallback;
};
const getLegacyHidden = () => {
  try {
    var _addons$twRemoveFee;
    const addons = JSON.parse(localStorage.getItem('tw:addons')) || {};
    const legacy = addons['tw-interface-customization'];
    return (_addons$twRemoveFee = addons['tw-remove-feedback']) !== null && _addons$twRemoveFee !== void 0 && _addons$twRemoveFee.enabled || legacy !== null && legacy !== void 0 && legacy.enabled && legacy.removeFeedback ? ['feedback'] : [];
  } catch (_) {
    return [];
  }
};
const writeJSON = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    // ignore
  }
  try {
    __webpack_require__(/*! ./rotur/cloud-sync.js */ "./src/lib/rotur/cloud-sync.js").notifyLocalChange();
  } catch (_) {
    // cloud sync optional
  }
};
const normalizeLayout = layout => {
  if (!layout || typeof layout !== 'object') return null;
  const orders = {};
  for (const zone of ZONES) {
    const order = layout.orders && Array.isArray(layout.orders[zone.id]) ? layout.orders[zone.id] : [];
    orders[zone.id] = [...new Set(order.filter(id => zone.items.includes(id)))];
  }
  const hidden = Array.isArray(layout.hidden) ? [...new Set(layout.hidden.filter(id => ALL_ITEMS.includes(id) && !ALWAYS_SHOW.includes(id)))] : [];
  return {
    orders,
    hidden
  };
};
const getMenuBarLayout = () => {
  const orders = readJSON(ORDER_KEY, {});
  const hidden = readJSON(HIDDEN_KEY, getLegacyHidden());
  if (Object.keys(orders).length === 0 && hidden.length === 0) return null;
  return normalizeLayout({
    orders,
    hidden
  });
};
const zoneById = zoneId => ZONES.find(z => z.id === zoneId);
const hasStoredOrder = zoneId => {
  const stored = readJSON(ORDER_KEY, {})[zoneId];
  return Array.isArray(stored) && stored.length > 0;
};
const getStoredOrder = zoneId => {
  const zone = zoneById(zoneId);
  if (!zone) return [];
  const stored = (readJSON(ORDER_KEY, {})[zoneId] || []).filter(id => zone.items.includes(id));
  for (const id of zone.items) {
    if (!stored.includes(id)) stored.push(id);
  }
  return stored;
};
const getHidden = () => readJSON(HIDDEN_KEY, getLegacyHidden()).filter(id => ALL_ITEMS.includes(id) && !ALWAYS_SHOW.includes(id));
const isHidden = id => getHidden().includes(id);
const getPresentOrderedIds = () => {
  const hidden = new Set(getHidden());
  const ids = [];
  const seen = new Set();
  for (const el of document.querySelectorAll('[data-mw-item]')) {
    const id = el.getAttribute('data-mw-item');
    if (seen.has(id)) continue;
    if (hidden.has(id) || ALWAYS_SHOW.includes(id) || el.offsetWidth > 0 || el.offsetHeight > 0) {
      ids.push(id);
      seen.add(id);
    }
  }
  return ids;
};
const getZoneDisplayOrder = (zoneId, presentIds) => {
  const zone = zoneById(zoneId);
  if (!zone) return [];
  const present = presentIds.filter(id => zone.items.includes(id));
  if (!hasStoredOrder(zoneId)) return present;
  const stored = getStoredOrder(zoneId).filter(id => present.includes(id));
  for (const id of present) {
    if (!stored.includes(id)) stored.push(id);
  }
  return stored;
};
const getZoneExtras = (zoneId, presentIds) => {
  const zone = zoneById(zoneId);
  if (!zone) return [];
  return zone.extras.filter(id => presentIds.includes(id));
};
const applyLayout = () => {
  const parts = [];
  for (const zone of ZONES) {
    if (!hasStoredOrder(zone.id)) continue;
    const order = getStoredOrder(zone.id);
    for (let i = 0; i < order.length; i++) {
      parts.push("[data-mw-item=\"".concat(order[i], "\"]{order:").concat(i, ";}"));
    }
  }
  for (const id of getHidden()) {
    parts.push("[data-mw-item=\"".concat(id, "\"]{display:none !important;}"));
  }
  let style = document.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  style.textContent = parts.join('');
};
const applyMenuBarLayout = layout => {
  const normalized = normalizeLayout(layout);
  try {
    if (normalized) {
      localStorage.setItem(ORDER_KEY, JSON.stringify(normalized.orders));
      localStorage.setItem(HIDDEN_KEY, JSON.stringify(normalized.hidden));
    } else {
      localStorage.removeItem(ORDER_KEY);
      localStorage.removeItem(HIDDEN_KEY);
    }
  } catch (err) {
    // ignore
  }
  applyLayout();
  window.dispatchEvent(new Event(CHANGE_EVENT));
};
const setZoneOrder = (zoneId, order) => {
  const all = readJSON(ORDER_KEY, {});
  all[zoneId] = order;
  writeJSON(ORDER_KEY, all);
  applyLayout();
  window.dispatchEvent(new Event(CHANGE_EVENT));
};
const setHidden = (id, hidden) => {
  const current = new Set(getHidden());
  if (hidden) {
    current.add(id);
  } else {
    current.delete(id);
  }
  writeJSON(HIDDEN_KEY, Array.from(current));
  applyLayout();
  window.dispatchEvent(new Event(CHANGE_EVENT));
};
const initMenuBarLayout = () => {
  applyLayout();
};


/***/ }),

/***/ "./src/lib/mw-style-settings.js":
/*!**************************************!*\
  !*** ./src/lib/mw-style-settings.js ***!
  \**************************************/
/*! exports provided: STYLE_GROUPS, getStyleSetting, getStyleSettings, getStoredStyleSettings, setStyleSetting, applyStyleSetting, applyStyleSettings, initStyleSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_GROUPS", function() { return STYLE_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleSetting", function() { return getStyleSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleSettings", function() { return getStyleSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoredStyleSettings", function() { return getStoredStyleSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyleSetting", function() { return setStyleSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyleSetting", function() { return applyStyleSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyleSettings", function() { return applyStyleSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStyleSettings", function() { return initStyleSettings; });
/* harmony import */ var _css_loader_addons_addons_tab_styles_turbowarp_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-loader!../addons/addons/tab-styles/turbowarp.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/tab-styles/turbowarp.css");
/* harmony import */ var _css_loader_addons_addons_tab_styles_turbowarp_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_addons_addons_tab_styles_turbowarp_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_addons_addons_tab_styles_scratchbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!../addons/addons/tab-styles/scratchbox.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/tab-styles/scratchbox.css");
/* harmony import */ var _css_loader_addons_addons_tab_styles_scratchbox_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_addons_addons_tab_styles_scratchbox_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_addons_addons_tab_styles_icon_only_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!../addons/addons/tab-styles/icon-only.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/tab-styles/icon-only.css");
/* harmony import */ var _css_loader_addons_addons_tab_styles_icon_only_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_addons_addons_tab_styles_icon_only_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_loader_addons_addons_tab_styles_text_only_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-loader!../addons/addons/tab-styles/text-only.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/tab-styles/text-only.css");
/* harmony import */ var _css_loader_addons_addons_tab_styles_text_only_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_loader_addons_addons_tab_styles_text_only_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_loader_addons_addons_window_theme_macos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-loader!../addons/addons/window-theme/macos.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/window-theme/macos.css");
/* harmony import */ var _css_loader_addons_addons_window_theme_macos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_loader_addons_addons_window_theme_macos_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_addons_addons_window_theme_windows10_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-loader!../addons/addons/window-theme/windows10.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js!./src/addons/addons/window-theme/windows10.css");
/* harmony import */ var _css_loader_addons_addons_window_theme_windows10_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_loader_addons_addons_window_theme_windows10_css__WEBPACK_IMPORTED_MODULE_5__);






const STYLE_GROUPS = [{
  id: 'tab-style',
  defaultValue: 'mistwarp',
  options: [{
    value: 'mistwarp',
    css: null
  }, {
    value: 'turbowarp',
    css: String(_css_loader_addons_addons_tab_styles_turbowarp_css__WEBPACK_IMPORTED_MODULE_0___default.a)
  }, {
    value: 'scratchbox',
    css: String(_css_loader_addons_addons_tab_styles_scratchbox_css__WEBPACK_IMPORTED_MODULE_1___default.a)
  }]
}, {
  id: 'tab-looks',
  defaultValue: 'default',
  options: [{
    value: 'default',
    css: null
  }, {
    value: 'icon-only',
    css: String(_css_loader_addons_addons_tab_styles_icon_only_css__WEBPACK_IMPORTED_MODULE_2___default.a)
  }, {
    value: 'text-only',
    css: String(_css_loader_addons_addons_tab_styles_text_only_css__WEBPACK_IMPORTED_MODULE_3___default.a)
  }]
}, {
  id: 'window-style',
  defaultValue: 'mistwarp',
  options: [{
    value: 'mistwarp',
    css: null
  }, {
    value: 'macos',
    css: String(_css_loader_addons_addons_window_theme_macos_css__WEBPACK_IMPORTED_MODULE_4___default.a)
  }, {
    value: 'windows10',
    css: String(_css_loader_addons_addons_window_theme_windows10_css__WEBPACK_IMPORTED_MODULE_5___default.a)
  }]
}];
const findGroup = id => STYLE_GROUPS.find(g => g.id === id);
const storageKey = id => "mw:style-".concat(id);
const isValidValue = (group, value) => group.options.some(option => option.value === value);
const getStyleSetting = id => {
  const group = findGroup(id);
  if (!group) return null;
  try {
    const stored = localStorage.getItem(storageKey(id));
    if (stored && isValidValue(group, stored)) {
      return stored;
    }
  } catch (err) {
    // ignore
  }
  return group.defaultValue;
};
const elementId = id => "mw-style-".concat(id);
const applyStyleSetting = (id, value) => {
  const group = findGroup(id);
  if (!group) return;
  const existing = document.getElementById(elementId(id));
  if (existing) existing.remove();
  const option = group.options.find(o => o.value === value);
  if (option && option.css) {
    const style = document.createElement('style');
    style.id = elementId(id);
    style.textContent = option.css;
    document.body.appendChild(style);
  }
};
const setStyleSetting = (id, value) => {
  const group = findGroup(id);
  if (!group || !isValidValue(group, value)) return;
  try {
    localStorage.setItem(storageKey(id), value);
  } catch (err) {
    // ignore
  }
  applyStyleSetting(id, value);
};
const getStyleSettings = () => Object.fromEntries(STYLE_GROUPS.map(group => [group.id, getStyleSetting(group.id)]));
const getStoredStyleSettings = () => {
  try {
    if (!STYLE_GROUPS.some(group => localStorage.getItem(storageKey(group.id)) !== null)) return null;
  } catch (err) {
    return null;
  }
  return getStyleSettings();
};
const applyStyleSettings = settings => {
  for (const group of STYLE_GROUPS) {
    const value = settings && isValidValue(group, settings[group.id]) ? settings[group.id] : group.defaultValue;
    try {
      if (settings) localStorage.setItem(storageKey(group.id), value);else localStorage.removeItem(storageKey(group.id));
    } catch (err) {
      // ignore
    }
    applyStyleSetting(group.id, value);
  }
};
const initStyleSettings = () => {
  for (const group of STYLE_GROUPS) {
    applyStyleSetting(group.id, getStyleSetting(group.id));
  }
};


/***/ }),

/***/ "./src/lib/rotur/cloud-sync.js":
/*!*************************************!*\
  !*** ./src/lib/rotur/cloud-sync.js ***!
  \*************************************/
/*! exports provided: notifyLocalChange, getUsernameOverride, setUsernameOverride, onRoturLogin, onRoturLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyLocalChange", function() { return notifyLocalChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsernameOverride", function() { return getUsernameOverride; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsernameOverride", function() { return setUsernameOverride; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRoturLogin", function() { return onRoturLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRoturLogout", function() { return onRoturLogout; });
/* harmony import */ var _community_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../community/api.js */ "./src/lib/community/api.js");
/* harmony import */ var _mw_menu_bar_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mw-menu-bar-layout.js */ "./src/lib/mw-menu-bar-layout.js");
/* harmony import */ var _menu_bar_settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-bar/settings.js */ "./src/lib/menu-bar/settings.js");
/* harmony import */ var _themes_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/menu-bar-accent.js */ "./src/lib/themes/menu-bar-accent.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.js */ "./src/lib/rotur/settings.js");





let suppressPush = false;
let pushTimer = null;
let pushChain = Promise.resolve();
const USERNAME_OVERRIDE_KEY = 'tw:username-override';
const DIRTY_KEY = 'tw:settings-dirty';
const markDirty = dirty => {
  try {
    if (dirty) {
      localStorage.setItem(DIRTY_KEY, '1');
    } else {
      localStorage.removeItem(DIRTY_KEY);
    }
  } catch (_) {
    // ignore
  }
};
const isDirty = () => {
  try {
    return localStorage.getItem(DIRTY_KEY) === '1';
  } catch (_) {
    return false;
  }
};
const getUsernameOverride = () => {
  try {
    return localStorage.getItem(USERNAME_OVERRIDE_KEY) || null;
  } catch (_) {
    return null;
  }
};
const readLocalJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null || typeof raw === 'undefined') return fallback;
    return JSON.parse(raw);
  } catch (_) {
    return fallback;
  }
};
const writeLocalJson = (key, value) => {
  try {
    if (value === null || typeof value === 'undefined') {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (_) {
    // ignore
  }
};
const collectLocalSnapshot = () => {
  const username = getUsernameOverride();
  return {
    theme: readLocalJson('tw:theme', null),
    customThemes: (() => {
      const raw = readLocalJson('tw:custom-themes', []);
      return Array.isArray(raw) ? raw : [];
    })(),
    settings: Object.assign({
      rotur: Object(_settings_js__WEBPACK_IMPORTED_MODULE_4__["getRoturSettings"])(),
      menuBar: {
        order: readLocalJson(_mw_menu_bar_layout_js__WEBPACK_IMPORTED_MODULE_1__["ORDER_KEY"], {}),
        hidden: readLocalJson(_mw_menu_bar_layout_js__WEBPACK_IMPORTED_MODULE_1__["HIDDEN_KEY"], []),
        accent: Object(_themes_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_3__["getAccentMenuBar"])(),
        text: Object(_themes_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_3__["getMenuBarText"])(),
        compactSave: Object(_themes_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_3__["getCompactSave"])(),
        features: Object(_menu_bar_settings_js__WEBPACK_IMPORTED_MODULE_2__["getSettings"])()
      },
      version: 1,
      updatedAt: Date.now()
    }, username ? {
      username
    } : {})
  };
};
const applySnapshotLocally = snapshot => {
  if (!snapshot || typeof snapshot !== 'object') return;
  suppressPush = true;
  try {
    if (snapshot.theme && typeof snapshot.theme === 'object') {
      writeLocalJson('tw:theme', snapshot.theme);
    } else if (snapshot.theme === null) {
      writeLocalJson('tw:theme', null);
    }
    if (Array.isArray(snapshot.customThemes)) {
      writeLocalJson('tw:custom-themes', snapshot.customThemes.length === 0 ? null : snapshot.customThemes);
    }
    if (snapshot.settings && typeof snapshot.settings === 'object') {
      if (snapshot.settings.rotur) {
        Object(_settings_js__WEBPACK_IMPORTED_MODULE_4__["updateRoturSettings"])(snapshot.settings.rotur);
      }
      try {
        if (typeof snapshot.settings.username === 'string' && snapshot.settings.username) {
          localStorage.setItem(USERNAME_OVERRIDE_KEY, snapshot.settings.username);
        } else {
          localStorage.removeItem(USERNAME_OVERRIDE_KEY);
        }
      } catch (_) {
        // ignore
      }
      if (snapshot.settings.menuBar) {
        if (snapshot.settings.menuBar.order) {
          writeLocalJson(_mw_menu_bar_layout_js__WEBPACK_IMPORTED_MODULE_1__["ORDER_KEY"], snapshot.settings.menuBar.order);
        }
        if (Array.isArray(snapshot.settings.menuBar.hidden)) {
          writeLocalJson(_mw_menu_bar_layout_js__WEBPACK_IMPORTED_MODULE_1__["HIDDEN_KEY"], snapshot.settings.menuBar.hidden);
        }
        if (typeof snapshot.settings.menuBar.accent === 'boolean') {
          try {
            localStorage.setItem(_themes_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_3__["ACCENT_MENU_BAR_KEY"], snapshot.settings.menuBar.accent ? 'true' : 'false');
          } catch (_) {
            // ignore
          }
        }
        if (typeof snapshot.settings.menuBar.compactSave === 'boolean') {
          Object(_themes_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_3__["setCompactSave"])(snapshot.settings.menuBar.compactSave);
        }
        if (_themes_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_3__["MENU_BAR_TEXT_OPTIONS"].includes(snapshot.settings.menuBar.text)) {
          try {
            localStorage.setItem(_themes_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_3__["MENU_BAR_TEXT_KEY"], snapshot.settings.menuBar.text);
          } catch (_) {
            // ignore
          }
        }
        if (snapshot.settings.menuBar.features) {
          for (const _ref of _menu_bar_settings_js__WEBPACK_IMPORTED_MODULE_2__["DEFINITIONS"]) {
            const id = _ref.id;
            if (typeof snapshot.settings.menuBar.features[id] === 'undefined') continue;
            try {
              localStorage.setItem("".concat(_menu_bar_settings_js__WEBPACK_IMPORTED_MODULE_2__["STORAGE_PREFIX"]).concat(id), String(snapshot.settings.menuBar.features[id]));
            } catch (_) {
              // ignore
            }
          }
          window.dispatchEvent(new CustomEvent(_menu_bar_settings_js__WEBPACK_IMPORTED_MODULE_2__["CHANGE_EVENT"], {
            detail: {
              id: 'cloud-sync'
            }
          }));
        }
      }
    }
  } finally {
    setTimeout(() => {
      suppressPush = false;
    }, 0);
  }
};
const pushToCloud = () => {
  if (suppressPush || !Object(_community_api_js__WEBPACK_IMPORTED_MODULE_0__["loadSession"])()) return Promise.resolve(false);
  pushChain = pushChain.catch(() => null).then(async () => {
    if (suppressPush || !Object(_community_api_js__WEBPACK_IMPORTED_MODULE_0__["loadSession"])()) return false;
    try {
      await Object(_community_api_js__WEBPACK_IMPORTED_MODULE_0__["request"])('/me/settings', {
        method: 'PUT',
        body: collectLocalSnapshot()
      });
      markDirty(false);
      return true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[cloud-sync] Failed to save settings', e);
      return false;
    }
  });
  return pushChain;
};
const pullFromCloud = async () => {
  if (!Object(_community_api_js__WEBPACK_IMPORTED_MODULE_0__["loadSession"])()) {
    return {
      applied: false
    };
  }
  let snapshot;
  try {
    const response = await Object(_community_api_js__WEBPACK_IMPORTED_MODULE_0__["request"])('/me/settings');
    snapshot = response.settings;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('[cloud-sync] Failed to load settings', e);
    return {
      applied: false
    };
  }
  if (!snapshot || typeof snapshot !== 'object' || Object.keys(snapshot).length === 0) {
    // First login with empty cloud: seed from local
    await pushToCloud();
    return {
      applied: false
    };
  }
  if (isDirty()) {
    await pushToCloud();
    return {
      applied: false
    };
  }
  applySnapshotLocally(snapshot);
  return {
    applied: true
  };
};

/**
 * Debounced push after local preference writes.
 * @param {number} delayMs debounce delay in milliseconds
 */
const notifyLocalChange = function notifyLocalChange() {
  let delayMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
  if (suppressPush) return;
  if (!Object(_community_api_js__WEBPACK_IMPORTED_MODULE_0__["loadSession"])()) return;
  markDirty(true);
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    pushTimer = null;
    pushToCloud().catch(err => {
      // eslint-disable-next-line no-console
      console.warn('[cloud-sync] push failed', err);
    });
  }, delayMs);
};
const setUsernameOverride = value => {
  try {
    if (value) {
      localStorage.setItem(USERNAME_OVERRIDE_KEY, value);
    } else {
      localStorage.removeItem(USERNAME_OVERRIDE_KEY);
    }
  } catch (_) {
    // ignore
  }
  notifyLocalChange();
};

// Keep cloud in sync when Bilup Accounts presence settings change (avoids circular require)
Object(_settings_js__WEBPACK_IMPORTED_MODULE_4__["subscribeRoturSettings"])(() => {
  notifyLocalChange();
});
const onRoturLogin = async () => {
  const result = await pullFromCloud();
  return {
    applied: result.applied
  };
};
const onRoturLogout = () => {
  if (pushTimer) {
    clearTimeout(pushTimer);
    pushTimer = null;
  }
  markDirty(false);
  try {
    localStorage.removeItem(USERNAME_OVERRIDE_KEY);
  } catch (_) {
    // ignore
  }
};


/***/ }),

/***/ "./src/lib/rotur/settings.js":
/*!***********************************!*\
  !*** ./src/lib/rotur/settings.js ***!
  \***********************************/
/*! exports provided: getRoturSettings, setRoturSetting, updateRoturSettings, formatActivityTitle, formatActivityStatus, subscribeRoturSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoturSettings", function() { return getRoturSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoturSetting", function() { return setRoturSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRoturSettings", function() { return updateRoturSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatActivityTitle", function() { return formatActivityTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatActivityStatus", function() { return formatActivityStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeRoturSettings", function() { return subscribeRoturSettings; });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Persistent Bilup Accounts integration settings.
 * Presence text is fixed; users can toggle RPC and the edit-duration timer
 * (native start_time — never written into title/status strings).
 */

const STORAGE_KEY = 'mw:rotur-settings';
const APP_NAME = 'Bilup';
const DEFAULTS = {
  presenceEnabled: true,
  includeEditDuration: true,
  // How project extensions may show activity on your Bilup Accounts profile:
  // 'ask' (prompt per project), 'all' (always allow), 'off' (never).
  activitySharing: 'ask'
};
const SHARING_MODES = ['ask', 'all', 'off'];

/** @type {Set<(settings: typeof DEFAULTS) => void>} */
const listeners = new Set();
const readAll = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return _objectSpread({}, DEFAULTS);
    const parsed = JSON.parse(raw);
    return {
      presenceEnabled: parsed.presenceEnabled !== false,
      includeEditDuration: parsed.includeEditDuration !== false,
      activitySharing: SHARING_MODES.includes(parsed.activitySharing) ? parsed.activitySharing : 'ask'
    };
  } catch (_) {
    return _objectSpread({}, DEFAULTS);
  }
};
const writeAll = next => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch (_) {
    // ignore
  }
  for (const handler of listeners) {
    try {
      handler(next);
    } catch (_) {
      // ignore subscriber errors
    }
  }
};
const getRoturSettings = () => readAll();
const setRoturSetting = (key, value) => {
  if (!Object.prototype.hasOwnProperty.call(DEFAULTS, key)) {
    return;
  }
  writeAll(_objectSpread(_objectSpread({}, readAll()), {}, {
    [key]: value
  }));
};
const updateRoturSettings = patch => {
  const next = _objectSpread({}, readAll());
  for (const key of Object.keys(patch)) {
    if (Object.prototype.hasOwnProperty.call(DEFAULTS, key)) {
      next[key] = patch[key];
    }
  }
  writeAll(next);
};

/**
 * @param {object|string} [ctx] - Activity context.
 * @returns {string} Activity title
 */
const formatActivityTitle = ctx => ctx && typeof ctx === 'object' && ctx.collaborating ? "Collaborating In ".concat(APP_NAME) : "Editing In ".concat(APP_NAME);

/**
 * @param {string|object} projectTitleOrCtx - Project title or activity context.
 * @returns {string} Activity status
 */
const formatActivityStatus = projectTitleOrCtx => {
  const ctx = typeof projectTitleOrCtx === 'object' && projectTitleOrCtx !== null ? projectTitleOrCtx : {
    projectTitle: projectTitleOrCtx
  };
  const name = ctx.projectTitle && String(ctx.projectTitle).trim() || 'Untitled Project';
  // e.g. "Working on My Game · Editing costume "walk-a" in Sprite1"
  return ctx.doing ? "Working on ".concat(name, " \xB7 ").concat(ctx.doing) : "Working on ".concat(name);
};

/**
 * @param {Function} handler - Settings change handler
 * @returns {Function} Unsubscribe function
 */
const subscribeRoturSettings = handler => {
  listeners.add(handler);
  return () => {
    listeners.delete(handler);
  };
};


/***/ }),

/***/ "./src/lib/themes/accent/blue.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/blue.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'looks-secondary': 'hsla(215, 100%, 65%, 1)',
  'looks-tertiary': 'hsla(215, 100%, 55%, 1)',
  'looks-transparent': 'hsla(215, 100%, 65%, 0.35)',
  'looks-light-transparent': 'hsla(215, 100%, 65%, 0.15)',
  'looks-secondary-dark': 'hsla(215, 60%, 50%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/eggplant-purple.js":
/*!**************************************************!*\
  !*** ./src/lib/themes/accent/eggplant-purple.js ***!
  \**************************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#49214A',
  'motion-primary-transparent': '#49214Ae6',
  'motion-tertiary': '#3a1a3b',
  'looks-secondary': '#6b3d6c',
  'looks-tertiary': 'hsla(300, 29%, 23%, 1)',
  'looks-transparent': '#6b3d6c59',
  'looks-light-transparent': '#6b3d6c26',
  'looks-secondary-dark': 'hsla(300, 29%, 33%, 1)',
  'extensions-primary': 'hsla(300, 38%, 21%, 1)',
  'extensions-tertiary': 'hsla(300, 38%, 13%, 1)',
  'extensions-transparent': 'hsla(300, 38%, 21%, 0.35)',
  'extensions-light': 'hsla(300, 29%, 33%, 1)',
  'drop-highlight': '#8a4d8b'
};
const blockColors = {
  checkboxActiveBackground: '#49214A',
  checkboxActiveBorder: '#3a1a3b'
};


/***/ }),

/***/ "./src/lib/themes/accent/green-tea.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/green-tea.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#91B821',
  'motion-primary-transparent': '#91B821e6',
  'motion-tertiary': '#73941a',
  'looks-secondary': '#6BB392',
  'looks-tertiary': 'hsla(157, 35%, 46%, 1)',
  'looks-transparent': '#6BB39259',
  'looks-light-transparent': '#6BB39226',
  'looks-secondary-dark': 'hsla(157, 35%, 56%, 1)',
  'extensions-primary': 'hsla(73, 70%, 43%, 1)',
  'extensions-tertiary': 'hsla(73, 70%, 26%, 1)',
  'extensions-transparent': 'hsla(73, 70%, 43%, 0.35)',
  'extensions-light': 'hsla(157, 35%, 56%, 1)',
  'drop-highlight': '#b8d455'
};
const blockColors = {
  checkboxActiveBackground: '#91B821',
  checkboxActiveBorder: '#73941a'
};


/***/ }),

/***/ "./src/lib/themes/accent/green.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/green.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#4caf50',
  // bright green
  'motion-primary-transparent': '#4caf50e6',
  // semi-transparent green
  'motion-tertiary': '#388e3c',
  // darker green

  'looks-secondary': '#4caf50',
  // bright green
  'looks-tertiary': 'hsla(122, 39%, 25%, 1)',
  // dark green
  'looks-transparent': '#4caf5059',
  // more transparent green
  'looks-light-transparent': '#4caf5026',
  // very transparent green
  'looks-secondary-dark': 'hsla(122, 39%, 35%, 1)',
  // dark green

  'extensions-primary': 'hsla(122, 39%, 65%, 1)',
  // light green
  'extensions-tertiary': 'hsla(122, 39%, 45%, 1)',
  // medium green
  'extensions-transparent': 'hsla(122, 39%, 65%, 0.35)',
  // semi-transparent green
  'extensions-light': 'hsla(122, 39%, 85%, 1)',
  // very light green

  'drop-highlight': '#80c883' // light green
};
const blockColors = {
  checkboxActiveBackground: '#4caf50',
  // bright green
  checkboxActiveBorder: '#388e3c' // darker green
};


/***/ }),

/***/ "./src/lib/themes/accent/orange.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/orange.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff7f2a',
  // bright orange
  'motion-primary-transparent': '#ff7f2ae6',
  // semi-transparent orange
  'motion-tertiary': '#e65c00',
  // darker orange

  'looks-secondary': '#ff7f2a',
  // bright orange
  'looks-tertiary': 'hsla(25, 100%, 35%, 1)',
  // dark orange
  'looks-transparent': '#ff7f2a59',
  // more transparent orange
  'looks-light-transparent': '#ff7f2a26',
  // very transparent orange
  'looks-secondary-dark': 'hsla(25, 100%, 45%, 1)',
  // dark orange

  'extensions-primary': 'hsla(30, 100%, 65%, 1)',
  // light orange
  'extensions-tertiary': 'hsla(30, 90%, 45%, 1)',
  // medium orange
  'extensions-transparent': 'hsla(30, 90%, 65%, 0.35)',
  // semi-transparent orange
  'extensions-light': 'hsla(30, 100%, 85%, 1)',
  // very light orange

  'drop-highlight': '#ffad66' // light orange
};
const blockColors = {
  checkboxActiveBackground: '#ff7f2a',
  // bright orange
  checkboxActiveBorder: '#e65c00' // darker orange
};


/***/ }),

/***/ "./src/lib/themes/accent/pale-blue.js":
/*!********************************************!*\
  !*** ./src/lib/themes/accent/pale-blue.js ***!
  \********************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#3C7699',
  'motion-primary-transparent': '#3C7699e6',
  'motion-tertiary': '#305e7a',
  'looks-secondary': '#75C1C4',
  'looks-tertiary': 'hsla(181, 44%, 51%, 1)',
  'looks-transparent': '#75C1C459',
  'looks-light-transparent': '#75C1C426',
  'looks-secondary-dark': 'hsla(181, 44%, 61%, 1)',
  'extensions-primary': 'hsla(203, 44%, 42%, 1)',
  'extensions-tertiary': 'hsla(203, 44%, 25%, 1)',
  'extensions-transparent': 'hsla(203, 44%, 42%, 0.35)',
  'extensions-light': 'hsla(181, 44%, 61%, 1)',
  'drop-highlight': '#5da8cc'
};
const blockColors = {
  checkboxActiveBackground: '#3C7699',
  checkboxActiveBorder: '#305e7a'
};


/***/ }),

/***/ "./src/lib/themes/accent/pink.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/pink.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(330, 80%, 70%, 1)',
  'motion-primary-transparent': 'hsla(330, 80%, 70%, 0.9)',
  'motion-tertiary': 'hsla(330, 60%, 55%, 1)',
  'looks-secondary': 'hsla(330, 80%, 70%, 1)',
  'looks-tertiary': 'hsla(330, 80%, 60%, 1)',
  'looks-transparent': 'hsla(330, 80%, 70%, 0.35)',
  'looks-light-transparent': 'hsla(330, 80%, 70%, 0.15)',
  'looks-secondary-dark': 'hsla(330, 60%, 55%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/purple.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/purple.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': 'hsla(260, 60%, 60%, 1)',
  'motion-primary-transparent': 'hsla(260, 60%, 60%, 0.9)',
  'motion-tertiary': 'hsla(260, 42%, 51%, 1)',
  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  'looks-tertiary': 'hsla(260, 60%, 50%, 1)',
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/red.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/red.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-tertiary': 'hsla(0, 42%, 41%, 1)',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/accent/yellow.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/yellow.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  'motion-primary': '#ffcc00',
  // bright yellow
  'motion-primary-transparent': '#ffcc00e6',
  // semi-transparent yellow
  'motion-tertiary': '#e6b800',
  // darker yellow

  'looks-secondary': '#ffcc00',
  // bright yellow
  'looks-tertiary': 'hsla(48, 100%, 30%, 1)',
  // dark yellow
  'looks-transparent': '#ffcc0059',
  // more transparent yellow
  'looks-light-transparent': '#ffcc0026',
  // very transparent yellow
  'looks-secondary-dark': 'hsla(48, 100%, 40%, 1)',
  // dark yellow

  'extensions-primary': 'hsla(50, 100%, 65%, 1)',
  // light yellow
  'extensions-tertiary': 'hsla(50, 90%, 45%, 1)',
  // medium yellow
  'extensions-transparent': 'hsla(50, 90%, 65%, 0.35)',
  // semi-transparent yellow
  'extensions-light': 'hsla(50, 100%, 85%, 1)',
  // very light yellow

  'drop-highlight': '#ffdb4d' // light yellow
};
const blockColors = {
  checkboxActiveBackground: '#ffcc00',
  // bright yellow
  checkboxActiveBorder: '#e6b800' // darker yellow
};


/***/ }),

/***/ "./src/lib/themes/accents.js":
/*!***********************************!*\
  !*** ./src/lib/themes/accents.js ***!
  \***********************************/
/*! exports provided: ACCENTS, ACCENT_MAP, ACCENT_GROUPS, ACCENT_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENTS", function() { return ACCENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAP", function() { return ACCENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_GROUPS", function() { return ACCENT_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_DEFAULT", function() { return ACCENT_DEFAULT; });
/* harmony import */ var _accent_purple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accent/purple */ "./src/lib/themes/accent/purple.js");
/* harmony import */ var _accent_blue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accent/blue */ "./src/lib/themes/accent/blue.js");
/* harmony import */ var _accent_red__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accent/red */ "./src/lib/themes/accent/red.js");
/* harmony import */ var _accent_orange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accent/orange */ "./src/lib/themes/accent/orange.js");
/* harmony import */ var _accent_yellow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accent/yellow */ "./src/lib/themes/accent/yellow.js");
/* harmony import */ var _accent_green__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accent/green */ "./src/lib/themes/accent/green.js");
/* harmony import */ var _accent_green_tea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accent/green-tea */ "./src/lib/themes/accent/green-tea.js");
/* harmony import */ var _accent_pale_blue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accent/pale-blue */ "./src/lib/themes/accent/pale-blue.js");
/* harmony import */ var _accent_eggplant_purple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accent/eggplant-purple */ "./src/lib/themes/accent/eggplant-purple.js");
/* harmony import */ var _accent_pink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accent/pink */ "./src/lib/themes/accent/pink.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










const ACCENTS = [{
  name: 'Red',
  accent: _accent_red__WEBPACK_IMPORTED_MODULE_2__,
  description: 'Red accent color',
  id: 'tw.accent.red'
}, {
  name: 'Orange',
  accent: _accent_orange__WEBPACK_IMPORTED_MODULE_3__,
  description: 'Orange accent color',
  id: 'tw.accent.orange'
}, {
  name: 'Yellow',
  accent: _accent_yellow__WEBPACK_IMPORTED_MODULE_4__,
  description: 'Yellow accent color',
  id: 'tw.accent.yellow'
}, {
  name: 'Green',
  accent: _accent_green__WEBPACK_IMPORTED_MODULE_5__,
  description: 'Green accent color',
  id: 'tw.accent.green'
}, {
  name: 'Green Tea',
  accent: _accent_green_tea__WEBPACK_IMPORTED_MODULE_6__,
  description: 'Green Tea accent color',
  id: 'tw.accent.green-tea'
}, {
  name: 'Pale Blue',
  accent: _accent_pale_blue__WEBPACK_IMPORTED_MODULE_7__,
  description: 'Pale Blue accent color',
  id: 'tw.accent.pale-blue'
}, {
  name: 'Blue',
  accent: _accent_blue__WEBPACK_IMPORTED_MODULE_1__,
  description: 'Blue accent color',
  id: 'tw.accent.blue'
}, {
  name: 'Purple',
  accent: _accent_purple__WEBPACK_IMPORTED_MODULE_0__,
  description: 'Purple accent color',
  id: 'tw.accent.purple'
}, {
  name: 'Eggplant',
  accent: _accent_eggplant_purple__WEBPACK_IMPORTED_MODULE_8__,
  description: 'Eggplant accent color',
  id: 'tw.accent.eggplant-purple'
}, {
  name: 'Pink',
  accent: _accent_pink__WEBPACK_IMPORTED_MODULE_9__,
  description: 'Pink accent color',
  id: 'tw.accent.pink'
}];
const ACCENT_GROUPS = [{
  label: {
    id: 'mw.accentGroup.colors',
    defaultMessage: 'Colors'
  },
  accents: ['red', 'orange', 'yellow', 'green', 'pale-blue', 'blue', 'purple', 'eggplant-purple', 'pink']
}];
const ACCENT_MAP = {};
for (const accent of ACCENTS) {
  ACCENT_MAP[accent.name.toLowerCase()] = _objectSpread(_objectSpread({}, accent.accent), {}, {
    defaultMessage: accent.name,
    description: accent.description,
    id: accent.id
  });
}
const ACCENT_DEFAULT = ACCENTS[5].name.toLowerCase();


/***/ }),

/***/ "./src/lib/themes/appearance.js":
/*!**************************************!*\
  !*** ./src/lib/themes/appearance.js ***!
  \**************************************/
/*! exports provided: captureStoredAppearance, mergeStoredAppearance, applyAppearance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureStoredAppearance", function() { return captureStoredAppearance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStoredAppearance", function() { return mergeStoredAppearance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAppearance", function() { return applyAppearance; });
/* harmony import */ var _mw_menu_bar_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mw-menu-bar-layout.js */ "./src/lib/mw-menu-bar-layout.js");
/* harmony import */ var _mw_style_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mw-style-settings.js */ "./src/lib/mw-style-settings.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// New theme-aware visual settings only need one entry here.
const MODULES = [{
  id: 'menuBarLayout',
  read: _mw_menu_bar_layout_js__WEBPACK_IMPORTED_MODULE_0__["getMenuBarLayout"],
  apply: _mw_menu_bar_layout_js__WEBPACK_IMPORTED_MODULE_0__["applyMenuBarLayout"]
}, {
  id: 'styles',
  read: _mw_style_settings_js__WEBPACK_IMPORTED_MODULE_1__["getStoredStyleSettings"],
  apply: _mw_style_settings_js__WEBPACK_IMPORTED_MODULE_1__["applyStyleSettings"]
}];
const captureStoredAppearance = () => MODULES.reduce((appearance, module) => {
  const value = module.read();
  if (value !== null) appearance[module.id] = value;
  return appearance;
}, {});
const mergeStoredAppearance = appearance => _objectSpread(_objectSpread({}, captureStoredAppearance()), appearance || {});
const applyAppearance = appearance => {
  for (const module of MODULES) module.apply((appearance || {})[module.id] || null);
};


/***/ }),

/***/ "./src/lib/themes/blocks/dark.js":
/*!***************************************!*\
  !*** ./src/lib/themes/blocks/dark.js ***!
  \***************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/color */ "./src/lib/utils/color.js");

const blockColors = {
  motion: {
    primary: '#0F1E33',
    secondary: '#4C4C4C',
    tertiary: '#4C97FF',
    quaternary: '#4C97FF'
  },
  looks: {
    primary: '#1E1433',
    secondary: '#4C4C4C',
    tertiary: '#9966FF',
    quaternary: '#9966FF'
  },
  sounds: {
    primary: '#291329',
    secondary: '#4C4C4C',
    tertiary: '#CF63CF',
    quaternary: '#CF63CF'
  },
  control: {
    primary: '#332205',
    secondary: '#4C4C4C',
    tertiary: '#FFAB19',
    quaternary: '#FFAB19'
  },
  event: {
    primary: '#332600',
    secondary: '#4C4C4C',
    tertiary: '#FFBF00',
    quaternary: '#FFBF00'
  },
  sensing: {
    primary: '#12232A',
    secondary: '#4C4C4C',
    tertiary: '#5CB1D6',
    quaternary: '#5CB1D6'
  },
  pen: {
    primary: '#03251C',
    secondary: '#4C4C4C',
    tertiary: '#0fBD8C',
    quaternary: '#0fBD8C'
  },
  operators: {
    primary: '#112611',
    secondary: '#4C4C4C',
    tertiary: '#59C059',
    quaternary: '#59C059'
  },
  strings: {
    primary: '#002929',
    secondary: '#4C4C4C',
    tertiary: '#00A6A6',
    quaternary: '#00A6A6'
  },
  data: {
    primary: '#331C05',
    secondary: '#4C4C4C',
    tertiary: '#FF8C1A',
    quaternary: '#FF8C1A'
  },
  data_lists: {
    primary: '#331405',
    secondary: '#4C4C4C',
    tertiary: '#FF661A',
    quaternary: '#FF661A'
  },
  assets: {
    primary: '#1A1D21',
    secondary: '#4C4C4C',
    tertiary: '#6E7A8A',
    quaternary: '#6E7A8A'
  },
  more: {
    primary: '#331419',
    secondary: '#4C4C4C',
    tertiary: '#FF6680',
    quaternary: '#FF6680'
  },
  addons: {
    primary: '#0b3331',
    secondary: '#4C4C4C',
    tertiary: '#34e4d0',
    quaternary: '#34e4d0'
  },
  text: 'rgba(255, 255, 255, 0.7)',
  textFieldText: '#E5E5E5',
  textField: '#4C4C4C',
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {};
const customExtensionColors = {
  primary: _primary => {
    const hsv = Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["hex2hsv"])(_primary);
    hsv[2] = Math.max(hsv[2] - 70, 20);
    return Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["hsv2hex"])(hsv);
  },
  secondary: () => '#4C4C4C',
  tertiary: primary => primary,
  quaternary: primary => primary,
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg":
/*!****************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjQzMzggMzBDMjkuNTEzIDMwIDMxLjYzNjYgMjguMTU2OSAzMS4xNzkgMjUuODc0QzI4LjI5OTQgMTMuMDQzNiAyNy40MjU2IDkuODUxMzQgMjcuOTQ1NCA5LjYwNTQ3QzI4LjMxMjUgOS40MzE4MyAyOS4zNzQ2IDEwLjcyNzYgMzAuOTE2MiAxMS4xMzU5QzM0LjY0MTYgMTIuMTEyNiA0MC4yNzQyIDYuNDA3NTEgMzQuNTY1NSA3LjI5MTg2QzMyLjMyMjQgNy42MzkgMzAuMTU4NyA2LjIzODM2IDI4LjQ4NzkgNS4xNTY3OUMyNS45MDcyIDMuNDg2MiAyNC41MDI0IDIuNTc2ODQgMjUuNzk3NCAxMC4wNDUxQzI2LjQzNDkgMTMuNzAzNSAyNi45Njk3IDE2LjMyMzEgMjcuMzQ3NSAxOC4xNzM5QzI3Ljk5NTcgMjEuMzQ5NCAyOC4xODE5IDIyLjI2MTYgMjcuNjMyNSAyMi4yNzQxQzI3LjMzMjEgMjIuMTUyIDI3LjAzMjcgMjIuMDU3OCAyNi42OTU3IDIxLjk3MjRDMjYuMDg4IDIxLjgyMjUgMjUuNDUxNiAyMS43MzgyIDI0LjgwNTMgMjEuNzM4MkMyMS43MjcxIDIxLjczODIgMTkuNjAzNiAyMy41ODkyIDIwLjA2MjEgMjUuODc0QzIwLjUxMDcgMjguMTU2OSAyMy4zNjQ2IDMwIDI2LjQzMzggMzBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS40Mzg2MSAzNi4wMDAxQzEyLjUwNjUgMzYuMDAwMSAxNC42MzAyIDM0LjE0OCAxNC4xODE3IDMxLjg2NDJDMTEuMzAzMiAxOS4wMzM2IDEwLjQyOTkgMTUuODQxNiAxMC45NDk2IDE1LjU5NThDMTEuMzE2NiAxNS40MjIyIDEyLjM3ODMgMTYuNzE3NyAxMy45MTkgMTcuMTI2QzE3LjY0MjggMTguMTEzNiAyMy4yNzI5IDEyLjM5ODUgMTcuNTY2NyAxMy4yOTE4QzE1LjMyNDggMTMuNjM4NiAxMy4xNjIzIDEyLjIzODIgMTEuNDkyMiAxMS4xNTY5QzguOTEyMzcgOS40ODYzNiA3LjUwNzk3IDguNTc2OTggOC44MDI1MSAxNi4wNDUxQzkuNDQyOTQgMTkuNzI4NiA5Ljk3OTggMjIuMzU5NCAxMC4zNTggMjQuMjEyNUMxMC45OTEyIDI3LjMxNTQgMTEuMTc5NSAyOC4yMzg0IDEwLjY2NDQgMjguMjczMkM5Ljc4NDMyIDI3LjkyNTggOC44MTIzOSAyNy43MjkzIDcuODEwODIgMjcuNzI5M0M0LjczNCAyNy43MjkzIDIuNjExMzQgMjkuNTgwNCAzLjA1OTc4IDMxLjg2NDJDMy41MTgwOSAzNC4xNDggNi4zNzA2OSAzNi4wMDAxIDkuNDM4NjEgMzYuMDAwMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg":
/*!**************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/b631383707e87a454b479dedaa8ca014.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg":
/*!**********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxLjY2OTNWMzQuMjgzNEMxNiAzNS44MTUxIDE0IDM2LjUzNTkgMTIuOCAzNS41NDQ4TDEwLjIgMzMuMzgyNEM5LjIgMzIuNTcxNSA4IDMyLjIxMTEgNi43IDMyLjIxMTFINi4zQzUgMzIuMjExMSA0IDMxLjMxMDEgNCAzMC4xMzg4VjI1LjkwNDFDNCAyNC43MzI4IDUgMjMuODMxOCA2LjMgMjMuODMxOEg2LjdDOCAyMy44MzE4IDkuMiAyMy4zODEzIDEwLjEgMjIuNjYwNEwxMi44IDIwLjQ5OEMxNCAxOS40MTY4IDE2IDIwLjIyNzcgMTYgMjEuNjY5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNCA0QzE5LjU4MTcgNCAxNiA3LjU4MTcyIDE2IDEyQzE2IDE1LjExNDcgMTcuNzc5OSAxNy44MTM2IDIwLjM3ODEgMTkuMTM1MUMyMC4yMDk1IDIwLjkwODcgMTkuNjU2NCAyMS42NjU1IDE5LjMwNDIgMjIuMTQ3M0MxOS4xMjY1IDIyLjM5MDQgMTkgMjIuNTYzNSAxOSAyMi43NjE5QzE5IDIzLjQyODYgMTkuNjY2NyAyMy40Mjg2IDE5LjY2NjcgMjMuNDI4NkMyMC42MTMyIDIzLjQyODYgMjMuNTgxMyAyMi4yNjIzIDI1LjQwOTcgMjBIMjhDMzIuNDE4MyAyMCAzNiAxNi40MTgzIDM2IDEyQzM2IDcuNTgxNzIgMzIuNDE4MyA0IDI4IDRIMjRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg":
/*!********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/ef4a998a82a8567de018baa4607bc6a0.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg":
/*!***********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjI1IiBjeD0iMzIiIGN5PSIyNiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iMzIiIGN5PSIyMiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC43NSIgY3g9IjMyIiBjeT0iMTgiIHI9IjQiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIzMiIgY3k9IjE0IiByPSI0IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDE3LjVMMjIuNCAxNEMyMi45IDEzLjcgMjMuNSAxMy44IDIzLjggMTQuM0MyMy45IDE0LjUgMjQgMTQuNyAyNCAxNC44VjI1LjFDMjQgMjUuNyAyMy41IDI2LjEgMjMgMjYuMUMyMi44IDI2LjEgMjIuNiAyNiAyMi41IDI1LjlMMTcgMjIuNlYyNEMxNyAyNi4yIDE1LjIgMjguMSAxMyAyOC4xSDQuMUMxLjggMjggMCAyNi4yIDAgMjRWMTYuMUMwIDEzLjggMS44IDEyIDQuMSAxMkgxM0MxNS4yIDEyIDE3IDEzLjggMTcgMTYuMVYxNy41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast.js":
/*!************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast.js ***!
  \************************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./high-contrast-media/extensions/musicIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./high-contrast-media/extensions/penIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./high-contrast-media/extensions/text2speechIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./high-contrast-media/extensions/translateIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./high-contrast-media/extensions/videoSensingIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/color */ "./src/lib/utils/color.js");






const blockColors = {
  motion: {
    primary: '#80B5FF',
    secondary: '#B3D2FF',
    tertiary: '#3373CC',
    quaternary: '#CCE1FF'
  },
  looks: {
    primary: '#CCB3FF',
    secondary: '#DDCCFF',
    tertiary: '#774DCB',
    quaternary: '#EEE5FF'
  },
  sounds: {
    primary: '#E19DE1',
    secondary: '#FFB3FF',
    tertiary: '#BD42BD',
    quaternary: '#FFCCFF'
  },
  control: {
    primary: '#FFBE4C',
    secondary: '#FFDA99',
    tertiary: '#CF8B17',
    quaternary: '#FFE3B3'
  },
  event: {
    primary: '#FFD966',
    secondary: '#FFECB3',
    tertiary: '#CC9900',
    quaternary: '#FFF2CC'
  },
  sensing: {
    primary: '#85C4E0',
    secondary: '#AED8EA',
    tertiary: '#2E8EB8',
    quaternary: '#C2E2F0'
  },
  pen: {
    primary: '#13ECAF',
    secondary: '#75F0CD',
    tertiary: '#0B8E69',
    quaternary: '#A3F5DE'
  },
  operators: {
    primary: '#7ECE7E',
    secondary: '#B5E3B5',
    tertiary: '#389438',
    quaternary: '#DAF1DA'
  },
  strings: {
    primary: '#4CD2D2',
    secondary: '#99E5E5',
    tertiary: '#007A7A',
    quaternary: '#CCF2F2'
  },
  data: {
    primary: '#FFA54C',
    secondary: '#FFCC99',
    tertiary: '#DB6E00',
    quaternary: '#FFE5CC'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF9966',
    secondary: '#FFCAB0',
    // I don't think this is used, b/c we don't have any droppable fields in list blocks
    tertiary: '#E64D00',
    quaternary: '#FFDDCC'
  },
  assets: {
    primary: '#A6B0BC',
    secondary: '#C4CBD3',
    tertiary: '#4F5866',
    quaternary: '#DDE2E7'
  },
  more: {
    primary: '#FF99AA',
    secondary: '#FFCCD5',
    tertiary: '#FF3355',
    quaternary: '#FFE5EA'
  },
  addons: {
    primary: '#34e4d0',
    secondary: '#71e2d5',
    tertiary: '#29b2a2',
    quaternary: '#9ee2db'
  },
  text: '#000000',
  textFieldText: '#000000',
  // Text inside of inputs e.g. 90 in [point in direction (90)]
  toolboxText: '#000000',
  // Toolbox text, color picker text (used to be #575E75)
  blackText: '#000000',
  // The color that the category menu label (e.g. 'motion', 'looks', etc.) changes to on hover
  toolboxHover: '#3373CC',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dragShadowOpacity: 0.6,
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {
  music: {
    blockIconURI: _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  pen: {
    blockIconURI: _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  text2speech: {
    blockIconURI: _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  translate: {
    blockIconURI: _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  videoSensing: {
    blockIconURI: _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }
};
const clamp = (value, lower, upper) => Math.max(lower, Math.min(upper, value));
const customExtensionColors = {
  primary: _primary => {
    const hsv = Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(_primary);
    hsv[1] = clamp(hsv[1] - 20, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  secondary: primary => {
    const hsv = Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 40, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  tertiary: primary => {
    const hsv = Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[2] = clamp(hsv[2] - 20, 0, 100);
    return Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  quaternary: primary => {
    const hsv = Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 60, 0, 100);
    hsv[2] = clamp(hsv[2] + 20, 90, 100);
    return Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/three.js":
/*!****************************************!*\
  !*** ./src/lib/themes/blocks/three.js ***!
  \****************************************/
/*! exports provided: blockColors, extensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
const blockColors = {
  motion: {
    primary: '#4C97FF',
    secondary: '#4280D7',
    tertiary: '#3373CC',
    quaternary: '#3373CC'
  },
  looks: {
    primary: '#9966FF',
    secondary: '#855CD6',
    tertiary: '#774DCB',
    quaternary: '#774DCB'
  },
  sounds: {
    primary: '#CF63CF',
    secondary: '#C94FC9',
    tertiary: '#BD42BD',
    quaternary: '#BD42BD'
  },
  control: {
    primary: '#FFAB19',
    secondary: '#EC9C13',
    tertiary: '#CF8B17',
    quaternary: '#CF8B17'
  },
  event: {
    primary: '#FFBF00',
    secondary: '#E6AC00',
    tertiary: '#CC9900',
    quaternary: '#CC9900'
  },
  sensing: {
    primary: '#5CB1D6',
    secondary: '#47A8D1',
    tertiary: '#2E8EB8',
    quaternary: '#2E8EB8'
  },
  pen: {
    primary: '#0fBD8C',
    secondary: '#0DA57A',
    tertiary: '#0B8E69',
    quaternary: '#0B8E69'
  },
  operators: {
    primary: '#59C059',
    secondary: '#46B946',
    tertiary: '#389438',
    quaternary: '#389438'
  },
  strings: {
    primary: '#00A6A6',
    secondary: '#009292',
    tertiary: '#007A7A',
    quaternary: '#007A7A'
  },
  data: {
    primary: '#FF8C1A',
    secondary: '#FF8000',
    tertiary: '#DB6E00',
    quaternary: '#DB6E00'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF661A',
    secondary: '#FF5500',
    tertiary: '#E64D00',
    quaternary: '#E64D00'
  },
  assets: {
    primary: '#6E7A8A',
    secondary: '#5E6977',
    tertiary: '#4F5866',
    quaternary: '#4F5866'
  },
  more: {
    primary: '#FF6680',
    secondary: '#FF4D6A',
    tertiary: '#FF3355',
    quaternary: '#FF3355'
  },
  addons: {
    primary: '#29beb8',
    secondary: '#3aa8a4',
    tertiary: '#3aa8a4',
    quaternary: '#3aa8a4'
  },
  patch: {
    primary: '#2DA4A0',
    secondary: '#66BDBA',
    tertiary: '#24827F',
    quaternary: '#1B615F'
  },
  text: '#FFFFFF',
  workspace: '#F9F9F9',
  toolboxHover: '#4C97FF',
  toolboxSelected: '#E9EEF2',
  toolboxText: '#575E75',
  toolbox: '#FFFFFF',
  blackText: '#575E75',
  flyout: '#F9F9F9',
  scrollbar: '#CECDCE',
  scrollbarHover: '#CECDCE',
  textField: '#FFFFFF',
  textFieldText: '#575E75',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  dragShadowOpacity: 0.6,
  stackGlow: '#FFF200',
  stackGlowSize: 4,
  stackGlowOpacity: 1,
  replacementGlow: '#FFFFFF',
  replacementGlowSize: 2,
  replacementGlowOpacity: 1,
  colourPickerStroke: '#FFFFFF',
  // CSS colours: support RGBA
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dropDownShadow: 'rgba(0, 0, 0, .3)',
  numPadBackground: '#547AB2',
  numPadBorder: '#435F91',
  numPadActiveBackground: '#435F91',
  numPadText: 'white',
  // Do not use hex here, it cannot be inlined with data-uri SVG
  valueReportBackground: '#FFFFFF',
  valueReportBorder: '#AAAAAA',
  valueReportForeground: '#000000',
  menuHover: 'rgba(0, 0, 0, 0.2)',
  contextMenuBackground: '#ffffff',
  contextMenuBorder: '#cccccc',
  contextMenuForeground: '#000000',
  contextMenuActiveBackground: '#d6e9f8',
  contextMenuDisabledForeground: '#cccccc',
  flyoutLabelColor: '#575E75',
  checkboxInactiveBackground: '#ffffff',
  checkboxInactiveBorder: '#c8c8c8',
  checkboxActiveBackground: '#4C97FF',
  checkboxActiveBorder: '#3373CC',
  checkboxCheck: '#ffffff',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#ffffff',
  buttonForeground: '#575E75',
  zoomIconFilter: 'none',
  gridColor: '#dddddd'
};
const extensions = {};


/***/ }),

/***/ "./src/lib/themes/custom-themes.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/custom-themes.js ***!
  \*****************************************/
/*! exports provided: CustomTheme, CustomThemeManager, GradientUtils, customThemeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTheme", function() { return CustomTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomThemeManager", function() { return CustomThemeManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientUtils", function() { return GradientUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customThemeManager", function() { return customThemeManager; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/lib/themes/index.js");
/* harmony import */ var _appearance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appearance.js */ "./src/lib/themes/appearance.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Custom theme management for Bilup
 * Handles creation, storage, and management of user-defined themes including custom gradients and accents
 */



const CUSTOM_THEMES_STORAGE_KEY = 'tw:custom-themes';
const MAX_CUSTOM_THEMES = 50; // Reasonable limit to prevent storage issues

/**
 * Utility functions for custom gradients and accent creation
 */
class GradientUtils {
  /**
   * Create a linear gradient CSS string from color stops
   * @param {Array} colorStops - Array of {color: string, position: number} objects
   * @param {number} direction - Gradient direction in degrees (default: 90 for horizontal)
   * @returns {string} CSS linear-gradient string
   */
  static createLinearGradient(colorStops) {
    let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 90;
    if (!Array.isArray(colorStops) || colorStops.length < 2) {
      throw new Error('At least 2 color stops are required');
    }
    const sortedStops = colorStops.sort((a, b) => a.position - b.position).map(stop => "".concat(stop.color, " ").concat(stop.position, "%"));
    return "linear-gradient(".concat(direction, "deg, ").concat(sortedStops.join(', '), ")");
  }

  /**
   * Convert hex color to RGBA
   * @param {string} hex - Hex color string
   * @param {number} opacity - Opacity value (0-1)
   * @returns {string} RGBA color string
   */
  static hexToRgba(hex) {
    let opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substr(0, 2), 16);
    const g = parseInt(cleanHex.substr(2, 2), 16);
    const b = parseInt(cleanHex.substr(4, 2), 16);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")");
  }

  /**
   * Convert hex to HSL
   * @param {string} hex - Hex color string
   * @returns {object} HSL object {h, s, l}
   */
  static hexToHsl(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    const l = (max + min) / 2;
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

  /**
   * Convert HSL to hex
   * @param {number} h - Hue (0-360)
   * @param {number} s - Saturation (0-100)
   * @param {number} l - Lightness (0-100)
   * @returns {string} Hex color string
   */
  static hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    let r;
    let g;
    let b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = c => {
      const hex = Math.round(c * 255).toString(16);
      return hex.length === 1 ? "0".concat(hex) : hex;
    };
    return "#".concat(toHex(r)).concat(toHex(g)).concat(toHex(b));
  }

  /**
   * Lighten a color by percentage
   * @param {string} hex - Hex color string
   * @param {number} percent - Percentage to lighten (0-100)
   * @returns {string} Lightened hex color
   */
  static lightenColor(hex, percent) {
    const hsl = this.hexToHsl(hex);
    hsl.l = Math.min(100, hsl.l + percent);
    return this.hslToHex(hsl.h, hsl.s, hsl.l);
  }

  /**
   * Darken a color by percentage
   * @param {string} hex - Hex color string
   * @param {number} percent - Percentage to darken (0-100)
   * @returns {string} Darkened hex color
   */
  static darkenColor(hex, percent) {
    const hsl = this.hexToHsl(hex);
    hsl.l = Math.max(0, hsl.l - percent);
    return this.hslToHex(hsl.h, hsl.s, hsl.l);
  }

  /**
   * Generate color variations for an accent theme
   * @param {string} baseColor - Base hex color
   * @returns {object} Color variations
   */
  static generateColorVariations(baseColor) {
    return {
      primary: baseColor,
      light: this.lightenColor(baseColor, 15),
      lighter: this.lightenColor(baseColor, 30),
      dark: this.darkenColor(baseColor, 15),
      darker: this.darkenColor(baseColor, 30),
      transparent: this.hexToRgba(baseColor, 0.35),
      lightTransparent: this.hexToRgba(baseColor, 0.15),
      mediumTransparent: this.hexToRgba(baseColor, 0.75)
    };
  }

  /**
   * Generate accent theme colors from a primary color
   * @param {string} primaryColor - Primary color (hex, rgb, hsl, etc.)
   * @param {object} options - Options for color generation
   * @returns {object} Generated accent colors
   */
  static generateAccentColors(primaryColor) {
    const variations = this.generateColorVariations(primaryColor);
    return {
      'motion-primary': variations.primary,
      'motion-primary-transparent': variations.mediumTransparent,
      'motion-tertiary': variations.dark,
      'looks-secondary': variations.primary,
      'looks-tertiary': variations.dark,
      'looks-transparent': variations.transparent,
      'looks-light-transparent': variations.lightTransparent,
      'looks-secondary-dark': variations.dark,
      'extensions-primary': variations.light,
      'extensions-tertiary': variations.lighter,
      'extensions-transparent': variations.transparent,
      'extensions-light': variations.lighter,
      'drop-highlight': variations.light
    };
  }

  /**
   * Create a custom gradient accent theme
   * @param {Array} colorStops - Gradient color stops
   * @param {string} primaryColor - Primary accent color
   * @param {object} options - Additional options
   * @returns {object} Custom accent theme object
   */
  static createGradientAccent(colorStops, primaryColor) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const baseColors = this.generateAccentColors(primaryColor, options);

    // Create a version with reduced opacity for menu bar background
    const gradientStopsWithOpacity = colorStops.map(stop => ({
      color: this.hexToRgba(stop.color, 0.8),
      position: stop.position
    }));
    const gradientWithOpacity = this.createLinearGradient(gradientStopsWithOpacity, options.direction || 90);
    return {
      guiColors: _objectSpread(_objectSpread({}, baseColors), {}, {
        'menu-bar-background-image': gradientWithOpacity
      }),
      blockColors: {
        checkboxActiveBackground: primaryColor,
        checkboxActiveBorder: this.darkenColor(primaryColor, 10)
      }
    };
  }

  /**
   * Generate complementary colors for color harmonies
   * @param {string} baseColor - Base hex color
   * @returns {object} Complementary color schemes
   */
  static generateColorHarmonies(baseColor) {
    const hsl = this.hexToHsl(baseColor);
    const complementary = this.hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l);
    const triadic1 = this.hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l);
    const triadic2 = this.hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l);
    const analogous1 = this.hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l);
    const analogous2 = this.hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l);
    return {
      complementary: [baseColor, complementary],
      triadic: [baseColor, triadic1, triadic2],
      analogous: [baseColor, analogous1, analogous2],
      monochromatic: [baseColor, this.lightenColor(baseColor, 20), this.darkenColor(baseColor, 20)]
    };
  }

  /**
   * Generate gradient presets
   * @returns {Array} Array of gradient presets
   */
  static getGradientPresets() {
    return [{
      name: 'Sunset',
      colors: ['#ff6b6b', '#feca57', '#ff9ff3'],
      direction: 90
    }, {
      name: 'Ocean',
      colors: ['#667eea', '#764ba2', '#6dd5ed'],
      direction: 45
    }, {
      name: 'Forest',
      colors: ['#134e5e', '#71b280', '#a8e6cf'],
      direction: 135
    }, {
      name: 'Purple Rain',
      colors: ['#667eea', '#764ba2', '#f093fb'],
      direction: 90
    }, {
      name: 'Fire',
      colors: ['#ff416c', '#ff4b2b', '#ffb347'],
      direction: 45
    }, {
      name: 'Aurora',
      colors: ['#00c9ff', '#92fe9d', '#a8e6cf'],
      direction: 90
    }, {
      name: 'Space',
      colors: ['#2c3e50', '#4ca1af', '#c0392b'],
      direction: 180
    }, {
      name: 'Cherry',
      colors: ['#eb3349', '#f45c43', '#ff8a80'],
      direction: 90
    }];
  }

  /**
   * Create gradient from preset
   * @param {string} presetName - Name of the preset
   * @param {string} primaryColor - Primary color override (optional)
   * @returns {object} Gradient accent theme
   */
  static createPresetGradient(presetName) {
    let primaryColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const preset = this.getGradientPresets().find(p => p.name === presetName);
    if (!preset) {
      throw new Error("Gradient preset \"".concat(presetName, "\" not found"));
    }
    const colorStops = preset.colors.map((color, index) => ({
      color: color,
      position: index / (preset.colors.length - 1) * 100
    }));
    const primary = primaryColor || preset.colors[0];
    return this.createGradientAccent(colorStops, primary, {
      direction: preset.direction
    });
  }
}

/**
 * CustomTheme class extends Theme with additional metadata
 */
class CustomTheme extends _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"] {
  constructor(name, description, accent, gui, blocks, menuBarAlign, wallpaper, fonts) {
    let author = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'User';
    let appearance = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : {};
    // If accent is an object (custom gradient),
    // pass a default string to parent and store the custom accent separately
    const accentKey = typeof accent === 'object' ? 'red' : accent; // Default to 'red' as fallback
    super(accentKey, gui, blocks, menuBarAlign, wallpaper, fonts, null, appearance);

    /** @readonly */
    this.name = name;
    /** @readonly */
    this.description = description;
    /** @readonly */
    this.author = author;
    /** @readonly */
    this.createdAt = new Date().toISOString();
    /** @readonly */
    this.uuid = this.generateUUID();

    // Raw gradient data ({colors, direction}) becomes a full accent, same as import()
    const isGradientData = accent && typeof accent === 'object' && Array.isArray(accent.colors);
    const resolved = isGradientData ? GradientUtils.createGradientAccent(accent.colors, accent.colors[0] ? accent.colors[0].color : '#ff6b6b', {
      direction: accent.direction || '90'
    }) : accent;
    this.customAccent = resolved && typeof resolved === 'object' && resolved.guiColors ? resolved : null;

    // Store the original accent data (either gradient format or full accent object)
    this.originalAccent = accent;
  }
  generateUUID() {
    return "custom-theme-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9));
  }

  /**
   * Override getGuiColors to handle custom accent objects
   * @returns {object} GUI colors
   */
  getGuiColors() {
    if (this.customAccent) {
      // Use dynamic imports to avoid circular dependency issues
      const defaultsDeep = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");

      // Get the base GUI colors directly without importing from index.js
      let baseGuiColors = {};
      try {
        baseGuiColors = _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_MAP"][this.gui].guiColors || {};
      } catch (e) {
        console.warn('Failed to load GUI theme modules:', e);
        // Fallback to basic colors if import fails
        baseGuiColors = {
          'color-scheme': 'light',
          'ui-primary': '#E5F0FF',
          'text-primary': '#575E75'
        };
      }

      // For custom accents, use the custom accent object directly
      const mergedColors = defaultsDeep({}, this.customAccent.guiColors || {}, baseGuiColors);
      return mergedColors;
    }

    // For standard accents, use the parent implementation
    return super.getGuiColors();
  }
  _getOptions() {
    return _objectSpread(_objectSpread({}, super._getOptions()), {}, {
      accent: this.originalAccent || this.accent
    });
  }
  _create(options) {
    const theme = new CustomTheme(options.name, this.description, options.accent, options.gui, options.blocks, options.menuBarAlign, options.wallpaper, options.fonts, this.author, options.appearance);
    theme.createdAt = this.createdAt;
    return theme;
  }

  /**
   * Override getBlockColors to handle custom accent objects
   * @returns {object} Block colors
   */
  getBlockColors() {
    if (this.customAccent) {
      // Use dynamic imports to avoid circular dependency issues
      const defaultsDeep = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");

      // Get base block colors directly without importing from index.js
      let baseGuiColors = {};
      let baseBlockColors = {};
      try {
        // Import block theme modules directly
        if (this.blocks === 'high-contrast') {
          const blocksHighContrast = __webpack_require__(/*! ./blocks/high-contrast.js */ "./src/lib/themes/blocks/high-contrast.js");
          baseBlockColors = blocksHighContrast.blockColors || {};
        } else if (this.blocks === 'dark') {
          const blocksDark = __webpack_require__(/*! ./blocks/dark.js */ "./src/lib/themes/blocks/dark.js");
          baseBlockColors = blocksDark.blockColors || {};
        } else {
          const blocksThree = __webpack_require__(/*! ./blocks/three.js */ "./src/lib/themes/blocks/three.js");
          baseBlockColors = blocksThree.blockColors || {};
        }
        baseGuiColors = _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_MAP"][this.gui].blockColors || {};
      } catch (e) {
        console.warn('Failed to load block theme modules:', e);
        // Fallback to basic block colors if import fails
        baseBlockColors = {
          motion: {
            primary: '#4C97FF',
            secondary: '#4280D7',
            tertiary: '#3373CC'
          },
          looks: {
            primary: '#9966FF',
            secondary: '#855CD6',
            tertiary: '#774DCB'
          }
        };
      }

      // For custom accents, use the custom accent object directly
      const mergedColors = defaultsDeep({}, this.customAccent.blockColors || {}, baseGuiColors, baseBlockColors);
      return mergedColors;
    }

    // For standard accents, use the parent implementation
    return super.getBlockColors();
  }

  /**
   * Export theme to JSON format
   * @returns {object} Theme data
   */
  export() {
    const accentExport = this._exportGradient();
    const menuBarForeground = this.customAccent && this.customAccent.guiColors && this.customAccent.guiColors['menu-bar-foreground'];
    return {
      uuid: this.uuid,
      createdAt: this.createdAt,
      name: this.name,
      description: this.description,
      author: this.author,
      accent: accentExport || (typeof this.originalAccent === 'string' ? this.originalAccent : null),
      menuBarForeground: menuBarForeground || null,
      gui: this.gui,
      blocks: this.blocks,
      menuBarAlign: this.menuBarAlign,
      appearance: this.appearance,
      wallpaper: this.wallpaper || {
        url: '',
        opacity: 0.3,
        darkness: 0,
        gridVisible: true,
        history: []
      },
      fonts: this.fonts || {
        system: [],
        google: [],
        history: []
      }
    };
  }

  /**
   * Convert OKLab to sRGB (0–255)
   * Based on Björn Ottosson's reference implementation
   * @param {number} L OKLab L component
   * @param {number} a OKLab a component
   * @param {number} b OKLab b component
   * @returns {object} An object of {r, g, b}
   */
  oklabToRgb(L, a, b) {
    // OKLab → LMS
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;

    // LMS → linear sRGB
    let r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    let b2 = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;

    // linear → gamma
    const compand = x => x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
    r = compand(r);
    g = compand(g);
    b2 = compand(b2);
    const clamp = v => Math.min(255, Math.max(0, Math.round(v * 255)));
    return {
      r: clamp(r),
      g: clamp(g),
      b: clamp(b2)
    };
  }

  /**
  * Export gradient accent to format
  * @returns {object} Gradient format
  */
  _exportGradient() {
    if (this.originalAccent && typeof this.originalAccent === 'object' && Array.isArray(this.originalAccent.colors)) {
      return this.originalAccent;
    }

    // Only ever derive the gradient from this theme's own stored colors.
    // Reading the live DOM here would export whatever theme is currently
    // applied and silently overwrite every other theme with it.
    const menuBarImage = this.customAccent && this.customAccent.guiColors && this.customAccent.guiColors['menu-bar-background-image'] || '';
    if (!menuBarImage) return null;
    const directionMatch = menuBarImage.match(/([\d.]+)deg/i);
    const direction = directionMatch ? directionMatch[1] : '90';
    const colorStops = [];

    // Match full color stop tokens (rgb/rgba/hex/oklab + optional position)
    const stops = menuBarImage.match(/(oklab\([^)]+\)|rgba?\([^)]+\)|#[a-fA-F0-9]{3,8})\s*([\d.]+%?)?/gi) || [];
    stops.forEach((stop, index) => {
      let color = null;
      let position = null;
      const rgbaMatch = stop.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*[\d.]+)?\s*\)\s*([\d.]+)?%?/i);
      const hexMatch = stop.match(/#([a-fA-F0-9]{3,8})/);
      const oklabMatch = stop.match(/oklab\(\s*([+-]?[\d.]+)\s+([+-]?[\d.]+)\s+([+-]?[\d.]+)(?:\s*\/\s*([+-]?[\d.]+))?\s*\)\s*([\d.]+)?%?/i);
      if (rgbaMatch) {
        const _rgbaMatch = _slicedToArray(rgbaMatch, 5),
          r = _rgbaMatch[1],
          g = _rgbaMatch[2],
          b = _rgbaMatch[3],
          pos = _rgbaMatch[4];
        color = "#".concat(parseInt(r, 10).toString(16).padStart(2, '0')).concat(parseInt(g, 10).toString(16).padStart(2, '0')).concat(parseInt(b, 10).toString(16).padStart(2, '0'));
        position = typeof pos === 'undefined' ? index / (stops.length - 1) * 100 : parseFloat(pos);
      } else if (hexMatch) {
        color = hexMatch[0];
        const posMatch = stop.match(/([\d.]+)%/);
        position = posMatch ? parseFloat(posMatch[1]) : index / (stops.length - 1) * 100;
      } else if (oklabMatch) {
        const _oklabMatch = _slicedToArray(oklabMatch, 6),
          L = _oklabMatch[1],
          A = _oklabMatch[2],
          B = _oklabMatch[3],
          _alpha = _oklabMatch[4],
          pos = _oklabMatch[5];
        const _this$oklabToRgb = this.oklabToRgb(parseFloat(L), parseFloat(A), parseFloat(B)),
          r = _this$oklabToRgb.r,
          g = _this$oklabToRgb.g,
          b = _this$oklabToRgb.b;
        color = "#".concat(r.toString(16).padStart(2, '0')).concat(g.toString(16).padStart(2, '0')).concat(b.toString(16).padStart(2, '0'));
        position = typeof pos === 'undefined' ? index / (stops.length - 1) * 100 : parseFloat(pos);
      }
      if (color !== null && position !== null) {
        colorStops.push({
          color,
          position
        });
      }
    });
    colorStops.sort((a, b) => a.position - b.position);
    return {
      colors: colorStops,
      direction: direction.toString()
    };
  }

  /**
   * Export standard accent to format
   * @param {string} accent - Standard accent color name
   * @returns {object} Standard accent format
   */
  _exportStandardAccent(accent) {
    return {
      type: 'standard',
      name: accent
    };
  }

  /**
   * Create CustomTheme from exported data
   * @param {object} data the inputted custom theme data
   * @returns {CustomTheme} the finished custom theme object
   */
  static import(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid theme data');
    }
    if (!data.name || !data.gui || !data.blocks) {
      throw new Error('Missing required theme properties');
    }
    let accentToUse = data.accent;

    // Handle null/undefined accent - create a default accent
    if (!accentToUse) {
      accentToUse = {
        guiColors: GradientUtils.generateAccentColors('#ff6b6b')
      };
    } else if (accentToUse && typeof accentToUse === 'object' && Array.isArray(accentToUse.colors)) {
      // Check if accent is in gradient format (colors array)
      const colors = accentToUse.colors;
      const direction = accentToUse.direction || '90';
      const primaryColor = colors[0] ? colors[0].color : '#ff6b6b';
      accentToUse = GradientUtils.createGradientAccent(colors, primaryColor, {
        direction
      });
    }
    if (data.menuBarForeground && accentToUse && typeof accentToUse === 'object') {
      accentToUse = _objectSpread(_objectSpread({}, accentToUse), {}, {
        guiColors: _objectSpread(_objectSpread({}, accentToUse.guiColors || {}), {}, {
          'menu-bar-foreground': data.menuBarForeground
        })
      });
    }
    const theme = new CustomTheme(data.name, data.description || '', accentToUse,
    // This will be the gradient object for custom themes
    data.gui, data.blocks, data.menuBarAlign, data.wallpaper, data.fonts, data.author || 'Unknown', data.appearance || {
      menuBarLayout: data.menuBarLayout || null,
      styles: data.styleSettings || null
    });

    // Preserve original UUID and creation date if available
    if (data.uuid) {
      Object.defineProperty(theme, 'uuid', {
        value: data.uuid,
        writable: false
      });
    }
    if (data.createdAt) {
      Object.defineProperty(theme, 'createdAt', {
        value: data.createdAt,
        writable: false
      });
    }

    // Keep the stored gradient data as the export source of truth so the
    // theme round-trips losslessly through import/export cycles.
    if (data.accent && typeof data.accent === 'object' && Array.isArray(data.accent.colors)) {
      theme.originalAccent = data.accent;
    }
    return theme;
  }
}

/**
 * CustomThemeManager handles storage and management of custom themes
 */
class CustomThemeManager {
  constructor() {
    this.themes = new Map();
    this._listeners = new Set();
    this.loadCustomThemes();
  }
  subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Listener must be a function');
    }
    this._listeners.add(listener);
    return () => {
      this._listeners.delete(listener);
    };
  }
  _emitChange() {
    for (const listener of this._listeners) {
      try {
        listener();
      } catch (e) {
        // Ignore listener errors
      }
    }
  }

  /**
   * Load custom themes from localStorage
   */
  loadCustomThemes() {
    try {
      const stored = localStorage.getItem(CUSTOM_THEMES_STORAGE_KEY);
      if (!stored) {
        console.log('No custom themes found in storage');
        return;
      }
      const themesData = JSON.parse(stored);
      if (!Array.isArray(themesData)) {
        console.warn('Invalid themes data format in storage - not an array');
        return;
      }
      console.log("Loading ".concat(themesData.length, " custom themes from storage"));
      let loadedCount = 0;
      for (const themeData of themesData) {
        try {
          const theme = CustomTheme.import(themeData);
          this.themes.set(theme.uuid, theme);
          loadedCount++;
        } catch (e) {
          console.warn("Failed to load custom theme \"".concat((themeData === null || themeData === void 0 ? void 0 : themeData.name) || 'unknown', "\":"), e);
        }
      }
      console.log("Successfully loaded ".concat(loadedCount, "/").concat(themesData.length, " custom themes"));
    } catch (e) {
      console.error('Failed to load custom themes from storage:', e);
    }
  }

  /**
   * Save custom themes to localStorage
   */
  saveCustomThemes() {
    try {
      const themesData = Array.from(this.themes.values()).map(theme => theme.export());
      if (themesData.length === 0) {
        localStorage.removeItem(CUSTOM_THEMES_STORAGE_KEY);
        console.log('Cleared custom themes storage (no themes)');
        try {
          __webpack_require__(/*! ../rotur/cloud-sync.js */ "./src/lib/rotur/cloud-sync.js").notifyLocalChange();
        } catch (_) {
          // cloud sync optional
        }
        this._emitChange();
        return;
      }
      const jsonString = JSON.stringify(themesData, null, 2);
      if (jsonString.length > 5 * 1024 * 1024) {
        console.warn('Theme data is very large (over 5MB), may cause storage issues');
      }
      localStorage.setItem(CUSTOM_THEMES_STORAGE_KEY, jsonString);
      console.log("Saved ".concat(themesData.length, " custom themes to storage (").concat(jsonString.length, " bytes)"));
      try {
        __webpack_require__(/*! ../rotur/cloud-sync.js */ "./src/lib/rotur/cloud-sync.js").notifyLocalChange();
      } catch (_) {
        // cloud sync optional
      }
      this._emitChange();
    } catch (e) {
      console.error('Failed to save custom themes to storage:', e);
      if (e.name === 'QuotaExceededError') {
        const currentData = localStorage.getItem(CUSTOM_THEMES_STORAGE_KEY);
        if (currentData) {
          localStorage.setItem("".concat(CUSTOM_THEMES_STORAGE_KEY, "_backup"), currentData);
        }
        throw new Error('Storage quota exceeded - try deleting some themes');
      }
      throw new Error("Failed to save themes: ".concat(e.message));
    }
  }

  /**
   * Add a new custom theme
   * @param {CustomTheme} theme a custom theme
   */
  addTheme(theme) {
    if (!(theme instanceof CustomTheme)) {
      throw new Error('Theme must be an instance of CustomTheme');
    }
    if (this.themes.size >= MAX_CUSTOM_THEMES) {
      throw new Error("Maximum number of custom themes (".concat(MAX_CUSTOM_THEMES, ") reached"));
    }

    // Check for duplicate names
    for (const existingTheme of this.themes.values()) {
      if (existingTheme.name === theme.name) {
        throw new Error("Theme with name \"".concat(theme.name, "\" already exists"));
      }
    }
    this.themes.set(theme.uuid, theme);
    this.saveCustomThemes();
  }

  /**
   * Remove a custom theme
   * @param {string} uuid the uuid of a custom theme
   * @returns {boolean} whether the deletion was successful
   */
  removeTheme(uuid) {
    if (this.themes.has(uuid)) {
      this.themes.delete(uuid);
      this.saveCustomThemes();
      return true;
    }
    return false;
  }

  /**
   * Get a custom theme by UUID
   * @param {string} uuid a custom theme uuid
   * @returns {CustomTheme|null} a custom theme
   */
  getTheme(uuid) {
    return this.themes.get(uuid) || null;
  }

  /**
   * Get all custom themes
   * @returns {CustomTheme[]} all custom themes
   */
  getAllThemes() {
    return Array.from(this.themes.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * Update an existing theme
   * @param {string} uuid a custom theme uuid
   * @param {object} updates an object of key value pairs to edit
   * @throws when the theme doesnt exist
   * @returns {CustomTheme} the updated custom theme
   */
  updateTheme(uuid, updates) {
    const existingTheme = this.themes.get(uuid);
    if (!existingTheme) {
      throw new Error('Theme not found');
    }

    // Create new theme with updates
    const updatedTheme = new CustomTheme(updates.name || existingTheme.name, typeof updates.description === 'undefined' ? existingTheme.description : updates.description, updates.accent || existingTheme.originalAccent || existingTheme.accent, updates.gui || existingTheme.gui, updates.blocks || existingTheme.blocks, updates.menuBarAlign || existingTheme.menuBarAlign, updates.wallpaper || existingTheme.wallpaper, updates.fonts || existingTheme.fonts, existingTheme.author, updates.appearance || existingTheme.appearance);

    // Preserve original UUID and creation date
    Object.defineProperty(updatedTheme, 'uuid', {
      value: uuid,
      writable: false
    });
    Object.defineProperty(updatedTheme, 'createdAt', {
      value: existingTheme.createdAt,
      writable: false
    });
    this.themes.set(uuid, updatedTheme);
    this.saveCustomThemes();
    return updatedTheme;
  }

  /**
   * Update gradient for an existing custom theme
   * @param {string} uuid - Theme UUID
   * @param {Array} colorStops - New gradient color stops
   * @param {string} primaryColor - New primary accent color
   * @param {object} options - Additional options
   * @returns {CustomTheme} Updated theme
   */
  updateThemeGradient(uuid, colorStops, primaryColor) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const existingTheme = this.themes.get(uuid);
    if (!existingTheme) {
      throw new Error('Theme not found');
    }

    // Generate new gradient accent
    const gradientAccent = GradientUtils.createGradientAccent(colorStops, primaryColor, options);

    // Create updated theme with new gradient
    const updatedTheme = new CustomTheme(existingTheme.name, existingTheme.description, gradientAccent,
    // Updated gradient accent
    existingTheme.gui, existingTheme.blocks, existingTheme.menuBarAlign, existingTheme.wallpaper, existingTheme.fonts, existingTheme.author, existingTheme.appearance);

    // Preserve original UUID and creation date
    Object.defineProperty(updatedTheme, 'uuid', {
      value: uuid,
      writable: false
    });
    Object.defineProperty(updatedTheme, 'createdAt', {
      value: existingTheme.createdAt,
      writable: false
    });
    this.themes.set(uuid, updatedTheme);
    this.saveCustomThemes();
    return updatedTheme;
  }

  /**
   * Check if a theme has a custom gradient
   * @param {string} uuid - Theme UUID
   * @returns {boolean} True if theme has custom gradient
   */
  hasCustomGradient(uuid) {
    const theme = this.themes.get(uuid);
    return theme && theme.customAccent && theme.customAccent.guiColors && theme.customAccent.guiColors['menu-bar-background-image'];
  }

  /**
   * Convert RGBA color to hex
   * @param {string} rgba - RGBA color string like "rgba(255, 107, 107, 0.8)"
   * @returns {string} Hex color string
   */
  rgbaToHex(rgba) {
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (!match) return rgba; // Return original if not RGBA format

    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    const toHex = n => {
      const hex = n.toString(16);
      return hex.length === 1 ? "0".concat(hex) : hex;
    };
    return "#".concat(toHex(r)).concat(toHex(g)).concat(toHex(b));
  }

  /**
   * Extract gradient information from a custom theme
   * @param {string} uuid - Theme UUID
   * @returns {object|null} Gradient information or null if not a gradient theme
   */
  getThemeGradientInfo(uuid) {
    const theme = this.themes.get(uuid);
    if (!theme || !this.hasCustomGradient(uuid)) {
      return null;
    }
    const gradientString = theme.customAccent.guiColors['menu-bar-background-image'];

    // Try to parse the gradient string to extract colors and direction
    const gradientMatch = gradientString.match(/linear-gradient\((\d+)deg,\s*(.+)\)/);
    if (!gradientMatch) {
      return null;
    }
    const direction = parseInt(gradientMatch[1], 10);
    const colorString = gradientMatch[2];

    // Parse color stops using a more sophisticated approach
    const colorStops = [];

    // Split the color string by looking for patterns that start with rgba( or #
    // This handles the comma issue within RGBA values
    const stopPattern = /(?:rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*[\d.]+)?\)\s*[\d.]*%?|#[a-fA-F0-9]{3,8}\s*[\d.]*%?)/g;
    const stopMatches = colorString.match(stopPattern);
    if (!stopMatches) {
      return null;
    }
    stopMatches.forEach((stopString, index) => {
      let color;
      let position;

      // Clean up the stop string
      stopString = stopString.trim();

      // Check for RGBA format: rgba(255, 107, 107, 0.8) 50%
      const rgbaMatch = stopString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)\s*([\d.]+)%?/);
      if (rgbaMatch) {
        const _rgbaMatch2 = _slicedToArray(rgbaMatch, 5),
          r = _rgbaMatch2[1],
          g = _rgbaMatch2[2],
          b = _rgbaMatch2[3],
          pos = _rgbaMatch2[4];
        const rHex = parseInt(r, 10).toString(16).padStart(2, '0');
        const gHex = parseInt(g, 10).toString(16).padStart(2, '0');
        const bHex = parseInt(b, 10).toString(16).padStart(2, '0');
        color = "#".concat(rHex).concat(gHex).concat(bHex);
        position = pos ? parseFloat(pos) : index / (stopMatches.length - 1) * 100;
      } else {
        // Check for hex format: #ff6b6b 50%
        const hexMatch = stopString.match(/#([a-fA-F0-9]{3,8})/);
        const posMatch = stopString.match(/([\d.]+)%/);
        if (hexMatch) {
          color = hexMatch[0];
          // Ensure 6-digit hex
          if (color.length === 4) {
            color = "#".concat(color[1]).concat(color[1]).concat(color[2]).concat(color[2]).concat(color[3]).concat(color[3]);
          }
        } else {
          color = '#000000'; // fallback
        }
        position = posMatch ? parseFloat(posMatch[1]) : index / (stopMatches.length - 1) * 100;
      }
      colorStops.push({
        color,
        position
      });
    });

    // Sort color stops by position
    colorStops.sort((a, b) => a.position - b.position);

    // Try to extract primary color from accent colors
    let primaryColor = '#ff6b6b'; // fallback
    if (theme.customAccent.guiColors['motion-primary']) {
      primaryColor = theme.customAccent.guiColors['motion-primary'];
    }

    // If we have color stops, use the first one as primary color
    if (colorStops.length > 0) {
      primaryColor = colorStops[0].color;
    }
    return {
      colorStops,
      direction,
      primaryColor,
      gradientString
    };
  }

  /**
   * Export all custom themes
   * @returns {object} all your custom themes
   */
  exportAllThemes() {
    const themes = this.getAllThemes().map(theme => theme.export());
    return {
      version: '2.0',
      platform: 'Bilup',
      timestamp: Date.now(),
      themes: themes
    };
  }

  /**
   * Import themes from exported data
   * @param {object} data your custom theme json file
   * @param {boolean} overwrite Whether to overwrite existing themes with same name
   * @returns {object} Import results
   */
  importThemes(data) {
    let overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const isPlainObject = obj => obj && typeof obj === 'object' && !Array.isArray(obj);
    const looksLikeNitroboltTheme = obj => isPlainObject(obj) && typeof obj.name === 'string' && (typeof obj.isGradient === 'boolean' || isPlainObject(obj.gradient) || obj.gradient === null) && (typeof obj.primaryColor === 'string' || typeof obj.secondaryColor === 'string' || typeof obj.tertiaryColor === 'string');
    const toNumberOrNull = value => {
      if (typeof value === 'number' && Number.isFinite(value)) return value;
      if (typeof value === 'string' && value.trim() !== '') {
        const parsed = Number(value);
        if (Number.isFinite(parsed)) return parsed;
      }
      return null;
    };
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const importNitroboltTheme = nitrobolt => {
      const name = (nitrobolt.name || '').trim();
      if (!name) throw new Error('Theme name is required');
      const description = '';

      // Nitrobolt format provides a few colors; treat primary as the accent base.
      const primaryColor = typeof nitrobolt.primaryColor === 'string' ? nitrobolt.primaryColor : '#ff6b6b';
      const gradient = nitrobolt.gradient;
      const hasGradient = Boolean(nitrobolt.isGradient) && isPlainObject(gradient) && Array.isArray(gradient.colors);
      let accent;
      if (hasGradient) {
        const directionRaw = toNumberOrNull(gradient.direction);
        const direction = directionRaw === null ? 90 : directionRaw;
        const colorStops = gradient.colors.filter(stop => stop && typeof stop.color === 'string').map(stop => {
          const pos = toNumberOrNull(stop.position);
          return {
            color: stop.color,
            position: pos === null ? 0 : clamp(pos, 0, 100)
          };
        }).sort((a, b) => a.position - b.position);
        if (colorStops.length < 2) {
          throw new Error('Gradient themes must have at least 2 color stops');
        }
        accent = GradientUtils.createGradientAccent(colorStops, primaryColor, {
          direction
        });
      } else {
        // No gradient (or gradient is null/missing): keep default GUI theme background.
        accent = {
          guiColors: GradientUtils.generateAccentColors(primaryColor),
          blockColors: {
            checkboxActiveBackground: primaryColor,
            checkboxActiveBorder: GradientUtils.darkenColor(primaryColor, 10)
          }
        };
      }
      return new CustomTheme(name, description, accent, 'light', 'three', 'left', null, null);
    };
    let themesToImport;
    if (data && Array.isArray(data.themes)) {
      themesToImport = data.themes.map(t => ({
        kind: 'bilup',
        data: t
      }));
    } else if (Array.isArray(data) && data.every(looksLikeNitroboltTheme)) {
      themesToImport = data.map(t => ({
        kind: 'nitrobolt',
        data: t
      }));
    } else if (looksLikeNitroboltTheme(data)) {
      themesToImport = [{
        kind: 'nitrobolt',
        data
      }];
    } else {
      throw new Error('Invalid import data format');
    }
    const results = {
      imported: 0,
      skipped: 0,
      errors: []
    };
    for (const entry of themesToImport) {
      try {
        const theme = entry.kind === 'bilup' ? CustomTheme.import(entry.data) : importNitroboltTheme(entry.data);

        // Check for existing theme with same name
        const existingTheme = Array.from(this.themes.values()).find(t => t.name === theme.name);
        if (existingTheme && !overwrite) {
          results.skipped++;
          continue;
        }
        if (existingTheme && overwrite) {
          this.removeTheme(existingTheme.uuid);
        }
        this.addTheme(theme);
        results.imported++;
      } catch (e) {
        const themeName = entry && entry.data && entry.data.name ? entry.data.name : 'Unknown';
        results.errors.push("Failed to import theme \"".concat(themeName, "\": ").concat(e.message));
      }
    }
    return results;
  }

  /**
   * Clear all custom themes
   */
  clearAllThemes() {
    this.themes.clear();
    try {
      localStorage.removeItem(CUSTOM_THEMES_STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear custom themes storage:', e);
    }
  }

  /**
   * Create a custom theme from current theme
   * @param {Theme} currentTheme the current theme
   * @param {string} name the name for the new theme
   * @param {string} description the description for the new theme
   * @returns {CustomTheme} the new custom theme
   */
  createFromCurrentTheme(currentTheme, name) {
    let description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    if (!name || typeof name !== 'string') {
      throw new Error('Theme name is required');
    }
    const customTheme = new CustomTheme(name.trim(), description.trim(), currentTheme.accent, currentTheme.gui, currentTheme.blocks, currentTheme.menuBarAlign, currentTheme.wallpaper, currentTheme.fonts, 'User', Object(_appearance_js__WEBPACK_IMPORTED_MODULE_1__["mergeStoredAppearance"])(currentTheme.appearance));
    this.addTheme(customTheme);
    return customTheme;
  }

  /**
   * Create a custom gradient theme
   * @param {string} name - Theme name
   * @param {string} description - Theme description
   * @param {Array} colorStops - Gradient color stops
   * @param {string} primaryColor - Primary accent color
   * @param {object} options - Additional options
   * @param {Theme} baseTheme - Base theme for GUI and block settings
   * @returns {CustomTheme} the new theme
   */
  createGradientTheme(name, description, colorStops, primaryColor) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    let baseTheme = arguments.length > 5 ? arguments[5] : undefined;
    if (!name || typeof name !== 'string') {
      throw new Error('Theme name is required');
    }

    // Generate gradient accent
    const gradientAccent = GradientUtils.createGradientAccent(colorStops, primaryColor, options);
    const customTheme = new CustomTheme(name.trim(), description.trim(), gradientAccent,
    // Custom gradient accent
    (baseTheme === null || baseTheme === void 0 ? void 0 : baseTheme.gui) || 'light', (baseTheme === null || baseTheme === void 0 ? void 0 : baseTheme.blocks) || 'three', (baseTheme === null || baseTheme === void 0 ? void 0 : baseTheme.menuBarAlign) || 'left', (baseTheme === null || baseTheme === void 0 ? void 0 : baseTheme.wallpaper) || null, (baseTheme === null || baseTheme === void 0 ? void 0 : baseTheme.fonts) || null, 'User', Object(_appearance_js__WEBPACK_IMPORTED_MODULE_1__["mergeStoredAppearance"])(baseTheme === null || baseTheme === void 0 ? void 0 : baseTheme.appearance));
    this.addTheme(customTheme);
    return customTheme;
  }

  /**
   * Whether a theme name is already in use
   * @param {string} name theme name
   * @returns {boolean} true if taken
   */
  isNameTaken(name) {
    const trimmed = (name || '').trim().toLowerCase();
    if (!trimmed) return false;
    for (const theme of this.themes.values()) {
      if (theme.name.toLowerCase() === trimmed) return true;
    }
    return false;
  }

  /**
   * Produce a unique library name, appending (2), (3), …
   * @param {string} baseName preferred name
   * @returns {string} unique name
   */
  uniqueName(baseName) {
    const base = (baseName || 'Imported Theme').trim() || 'Imported Theme';
    if (!this.isNameTaken(base)) return base;
    let n = 2;
    while (this.isNameTaken("".concat(base, " (").concat(n, ")"))) n += 1;
    return "".concat(base, " (").concat(n, ")");
  }

  /**
   * Add a theme from BilupTheme / Bilup export JSON into the local library.
   * Always assigns a fresh UUID so marketplace ids never collide with local ones.
   * @param {object} data export payload ({themes:[…]}) or a single theme object
   * @param {object} [meta] optional overrides {name, description, author}
   * @returns {CustomTheme} the saved theme
   */
  addFromExportData(data) {
    let meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let config = data;
    if (data && Array.isArray(data.themes) && data.themes.length > 0) {
      config = data.themes[0];
    }
    if (!config || typeof config !== 'object') {
      throw new Error('Invalid theme data');
    }
    const name = this.uniqueName(meta.name || config.name || 'Imported Theme');
    const description = typeof meta.description === 'string' ? meta.description : config.description || '';
    const author = meta.author || config.author || 'User';

    // Drop marketplace uuid so CustomTheme generates a local one.
    const rest = Object.assign({}, config);
    delete rest.uuid;
    delete rest.createdAt;
    const theme = CustomTheme.import(_objectSpread(_objectSpread({}, rest), {}, {
      name,
      description,
      author
    }));
    this.addTheme(theme);
    return theme;
  }

  /**
   * Get storage diagnostics
   * @returns {object} Storage information
   */
  getStorageInfo() {
    try {
      const stored = localStorage.getItem(CUSTOM_THEMES_STORAGE_KEY);
      const size = stored ? new Blob([stored]).size : 0;
      const parsed = stored ? JSON.parse(stored) : [];
      return {
        hasData: Boolean(stored),
        themeCount: Array.isArray(parsed) ? parsed.length : 0,
        dataSize: size,
        dataSizeFormatted: "".concat((size / 1024).toFixed(2), " KB"),
        isValid: Array.isArray(parsed),
        quotaEstimate: {
          used: size,
          total: 5 * 1024 * 1024,
          percentage: (size / (5 * 1024 * 1024) * 100).toFixed(2)
        }
      };
    } catch (e) {
      return {
        error: e.message,
        hasData: !!localStorage.getItem(CUSTOM_THEMES_STORAGE_KEY)
      };
    }
  }
}

// Singleton instance
const customThemeManager = new CustomThemeManager();


/***/ }),

/***/ "./src/lib/themes/fonts.js":
/*!*********************************!*\
  !*** ./src/lib/themes/fonts.js ***!
  \*********************************/
/*! exports provided: applyThemeFonts, removeThemeFonts, getFontFamilyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyThemeFonts", function() { return applyThemeFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeThemeFonts", function() { return removeThemeFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontFamilyString", function() { return getFontFamilyString; });
/* harmony import */ var _google_fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-fonts */ "./src/lib/themes/google-fonts.js");
/**
 * Font management utility for applying theme fonts to the document
 */


let currentFontStyleElement = null;
const DEFAULT_FALLBACK_STACK = ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'];
const setCurrentFontStyleEl = element => {
  currentFontStyleElement = element;
};

/**
 * Apply theme fonts to the document
 * @param {object} fonts - The fonts object from theme
 * @param {Array} fonts.google - Array of Google Font names
 * @param {Array} fonts.system - Array of system font names
 */
const applyThemeFonts = async fonts => {
  var _fonts$google, _fonts$google2, _fonts$system;
  const existingStyleEl = document.getElementById('theme-fonts');
  if (existingStyleEl) {
    existingStyleEl.remove();
  }

  // Remove existing font styles
  if (currentFontStyleElement) {
    currentFontStyleElement.remove();
    setCurrentFontStyleEl(null);
  }

  // Load Google Fonts first
  if (fonts !== null && fonts !== void 0 && (_fonts$google = fonts.google) !== null && _fonts$google !== void 0 && _fonts$google.length) {
    await Promise.all(fonts.google.map(fontName => Object(_google_fonts__WEBPACK_IMPORTED_MODULE_0__["loadGoogleFont"])(fontName, ['400', '700'])));
  }

  // Create CSS for theme fonts
  const fontStack = [];

  // Add Google Fonts first (they have priority)
  if (fonts !== null && fonts !== void 0 && (_fonts$google2 = fonts.google) !== null && _fonts$google2 !== void 0 && _fonts$google2.length) {
    fontStack.push(...fonts.google.map(font => "\"".concat(font, "\"")));
  }

  // Add system fonts
  if (fonts !== null && fonts !== void 0 && (_fonts$system = fonts.system) !== null && _fonts$system !== void 0 && _fonts$system.length) {
    fontStack.push(...fonts.system.map(font => "\"".concat(font, "\"")));
  }

  // Add fallback fonts
  fontStack.push(...DEFAULT_FALLBACK_STACK);
  const fontFamily = fontStack.join(', ');

  // Elements excluded from the theme font (stage contents and renderer HTML overlays keep their own fonts)
  const fontExclusions = ['[class^="paint-editor_text-area_"]', '[class*="stage_"]', '[class*="stage_"] *', '.scratch-render-overlays', '.scratch-render-overlays *'].map(selector => ":not(".concat(selector, ")")).join('');

  // Create style element
  const newFontStyleElement = document.createElement('style');
  newFontStyleElement.id = 'theme-fonts';
  newFontStyleElement.textContent = "\n        /* Theme Fonts - High Priority Overrides */\n        *".concat(fontExclusions, " {\n            font-family: var(--theme-font, ").concat(fontFamily, ") !important;\n        }\n\n        /* Ensure key UI elements inherit correctly */\n        body, html,\n        .gui, \n        .blocklySvg,\n        [class*=\"gui_\"],\n        [class*=\"menu-bar_\"],\n        [class*=\"settings-menu_\"],\n        .blocklyHtmlInput,\n        button, input, textarea[class^=\"paint-editor_text-area_*\"], select,\n        .menu-bar, .menu-item {\n            font-family: inherit !important;\n        }\n        \n        /* SVG text elements in Blockly */\n        text, tspan {\n            font-family: ").concat(fontFamily, " !important;\n        }\n    ");
  setCurrentFontStyleEl(newFontStyleElement);
  document.head.appendChild(currentFontStyleElement);
};

/**
 * Remove theme fonts from the document
 */
const removeThemeFonts = () => {
  const existingStyleEl = document.getElementById('theme-fonts');
  if (existingStyleEl) {
    existingStyleEl.remove();
  }
  if (currentFontStyleElement) {
    currentFontStyleElement.remove();
    setCurrentFontStyleEl(null);
  }
};

/**
 * Get the current font stack as a CSS font-family string
 * @param {object} fonts - The fonts object from theme
 * @returns {string} CSS font-family string
 */
const getFontFamilyString = fonts => {
  var _fonts$google3, _fonts$system2, _fonts$google4, _fonts$system3;
  if (!fonts || !((_fonts$google3 = fonts.google) !== null && _fonts$google3 !== void 0 && _fonts$google3.length) && !((_fonts$system2 = fonts.system) !== null && _fonts$system2 !== void 0 && _fonts$system2.length)) {
    return DEFAULT_FALLBACK_STACK.join(', ');
  }
  const fontStack = [];
  if ((_fonts$google4 = fonts.google) !== null && _fonts$google4 !== void 0 && _fonts$google4.length) {
    fontStack.push(...fonts.google.map(font => "\"".concat(font, "\"")));
  }
  if ((_fonts$system3 = fonts.system) !== null && _fonts$system3 !== void 0 && _fonts$system3.length) {
    fontStack.push(...fonts.system.map(font => "\"".concat(font, "\"")));
  }
  fontStack.push(...DEFAULT_FALLBACK_STACK);
  return fontStack.join(', ');
};


/***/ }),

/***/ "./src/lib/themes/global-styles.css":
/*!******************************************!*\
  !*** ./src/lib/themes/global-styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader??ref--7-1!../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??postcss!./global-styles.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.47.0/node_modules/css-loader/index.js?!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/.pnpm/style-loader@0.23.1/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.pnpm/style-loader@0.23.1/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/themes/google-fonts.js":
/*!****************************************!*\
  !*** ./src/lib/themes/google-fonts.js ***!
  \****************************************/
/*! exports provided: loadGoogleFont, getGoogleFontsList, searchGoogleFonts, isGoogleFont, getPopularGoogleFonts, removeGoogleFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGoogleFont", function() { return loadGoogleFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGoogleFontsList", function() { return getGoogleFontsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchGoogleFonts", function() { return searchGoogleFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGoogleFont", function() { return isGoogleFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularGoogleFonts", function() { return getPopularGoogleFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGoogleFont", function() { return removeGoogleFont; });
/**
 * Google Fonts integration utility
 */

const GOOGLE_FONTS_API_KEY = process.env.GOOGLE_FONTS_API_KEY || 'demo'; // Can be set via environment
const GOOGLE_FONTS_API_URL = 'https://www.googleapis.com/webfonts/v1/webfonts';
const GOOGLE_FONTS_METADATA_URL = 'https://fonts.google.com/metadata/fonts';

// Popular Google Fonts list for quick selection
const POPULAR_GOOGLE_FONTS = ['Open Sans', 'Roboto', 'Lato', 'Montserrat', 'Source Sans Pro', 'Roboto Condensed', 'Oswald', 'Raleway', 'Nunito', 'Ubuntu', 'Playfair Display', 'Merriweather', 'PT Sans', 'Poppins', 'Fira Sans', 'Work Sans', 'Roboto Slab', 'Crimson Text', 'Droid Sans', 'Libre Baskerville'];
let fontsCache = null;
let loadingPromise = null;
const normalizeFamily = fontFamily => (fontFamily || '').trim();
const encodeCss2Family = fontFamily => encodeURIComponent(normalizeFamily(fontFamily)).replace(/%20/g, '+');
const uniqSortedWeights = weights => {
  const normalized = (weights || []).map(w => String(w).trim()).filter(Boolean).map(w => w === 'regular' ? '400' : w);
  return [...new Set(normalized)].sort((a, b) => Number(a) - Number(b));
};
const buildCss2AxisSpecifier = (weights, _ref) => {
  let includeItalic = _ref.includeItalic;
  const w = uniqSortedWeights(weights);
  const fallback = w.length ? w : ['400', '700'];
  if (includeItalic) {
    const entries = [];
    for (const weight of fallback) {
      entries.push("0,".concat(weight));
    }
    for (const weight of fallback) {
      entries.push("1,".concat(weight));
    }
    return "ital,wght@".concat(entries.join(';'));
  }
  return "wght@".concat(fallback.join(';'));
};
const getOrCreateGoogleFontLink = fontFamily => {
  const family = normalizeFamily(fontFamily);
  const existing = document.querySelector("link[data-google-font=\"".concat(CSS.escape(family), "\"]"));
  if (existing) return existing;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.setAttribute('data-google-font', family);
  document.head.appendChild(link);
  return link;
};
const fetchGoogleFontsMetadata = async () => {
  const response = await fetch(GOOGLE_FONTS_METADATA_URL);
  if (!response.ok) {
    throw new Error("Google Fonts metadata error: ".concat(response.status));
  }
  const text = await response.text();
  const jsonText = text.replace(/^\)\]\}'\n/, '');
  const data = JSON.parse(jsonText);
  const list = data.familyMetadataList || [];
  return list.map(item => ({
    family: item.family,
    category: item.category || 'sans-serif',
    variants: item.fonts ? Object.keys(item.fonts) : []
  }));
};

/**
 * Load a Google Font by adding a link tag to the document head
 * @param {string} fontFamily - The font family name
 * @param {string[]} weightsOrOptions - Array of font weights (e.g., ['400', '700'])
 * @returns {undefined}
 */
const loadGoogleFont = (fontFamily, weightsOrOptions) => new Promise((resolve, reject) => {
  const family = normalizeFamily(fontFamily);
  if (!family) {
    resolve();
    return;
  }

  // Back-compat: second arg used to be an array of weights
  const includeItalic = !weightsOrOptions || Array.isArray(weightsOrOptions) ? true : weightsOrOptions.includeItalic !== false;
  const weights = Array.isArray(weightsOrOptions) ? weightsOrOptions : weightsOrOptions && weightsOrOptions.weights;
  const familyParam = encodeCss2Family(family);
  const axis = buildCss2AxisSpecifier(weights, {
    includeItalic
  });
  const url = "https://fonts.googleapis.com/css2?family=".concat(familyParam, ":").concat(axis, "&display=swap");
  const link = getOrCreateGoogleFontLink(family);
  if (link.href === url) {
    resolve();
    return;
  }
  link.onload = () => resolve();
  link.onerror = () => reject(new Error("Failed to load font: ".concat(family)));
  link.href = url;
});

/**
 * Get list of available Google Fonts
 * @returns {Promise<Array>} Array of font objects with family, category, variants
 */
const getGoogleFontsList = () => {
  if (fontsCache) {
    return fontsCache;
  }
  if (loadingPromise) {
    return loadingPromise;
  }
  loadingPromise = (async () => {
    try {
      // If no API key, fall back to the public metadata endpoint (no key required).
      if (GOOGLE_FONTS_API_KEY === 'demo') {
        try {
          fontsCache = await fetchGoogleFontsMetadata();
          return fontsCache;
        } catch (error) {
          // If metadata fetch fails (offline/CSP/etc.), fall back to popular fonts.
          fontsCache = POPULAR_GOOGLE_FONTS.map(family => ({
            family,
            category: 'sans-serif',
            variants: ['regular', '700']
          }));
          return fontsCache;
        }
      }
      const response = await fetch("".concat(GOOGLE_FONTS_API_URL, "?key=").concat(GOOGLE_FONTS_API_KEY, "&sort=popularity"));
      if (!response.ok) {
        throw new Error("Google Fonts API error: ".concat(response.status));
      }
      const data = await response.json();
      fontsCache = data.items || [];
      return fontsCache;
    } catch (error) {
      console.warn('Failed to load Google Fonts list, using popular fonts:', error);
      // Fallback to popular fonts
      fontsCache = POPULAR_GOOGLE_FONTS.map(family => ({
        family,
        category: 'sans-serif',
        variants: ['regular', '700']
      }));
      return fontsCache;
    }
  })();
  return loadingPromise;
};

/**
 * Search Google Fonts by name
 * @param {string} query - Search query
 * @returns {Promise<Array>} Filtered array of font objects
 */
const searchGoogleFonts = async query => {
  const fonts = await getGoogleFontsList();
  const lowercaseQuery = query.toLowerCase();
  return fonts.filter(font => font.family.toLowerCase().includes(lowercaseQuery)).slice(0, 10); // Limit results
};

/**
 * Check if a font is a Google Font
 * @param {string} fontFamily - Font family name
 * @returns {boolean} if a font family is on google fonts
 */
const isGoogleFont = async fontFamily => {
  const fonts = await getGoogleFontsList();
  return fonts.some(font => font.family.toLowerCase() === fontFamily.toLowerCase());
};

/**
 * Get popular Google Fonts for quick selection
 * @returns {Array<string>} Array of popular font family names
 */
const getPopularGoogleFonts = () => [...POPULAR_GOOGLE_FONTS];

/**
 * Remove a Google Font from the document
 * @param {string} fontFamily - The font family name to remove
 */
const removeGoogleFont = fontFamily => {
  const family = normalizeFamily(fontFamily);
  const existingLink = family ? document.querySelector("link[data-google-font=\"".concat(CSS.escape(family), "\"]")) : null;
  if (existingLink) {
    existingLink.remove();
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js */ "./node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js")))

/***/ }),

/***/ "./src/lib/themes/gui.js":
/*!*******************************!*\
  !*** ./src/lib/themes/gui.js ***!
  \*******************************/
/*! exports provided: GUI_MAP, GUI_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MAP", function() { return GUI_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_DEFAULT", function() { return GUI_DEFAULT; });
/* harmony import */ var _gui_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui/light */ "./src/lib/themes/gui/light.js");
/* harmony import */ var _gui_dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui/dark */ "./src/lib/themes/gui/dark.js");
/* harmony import */ var _gui_midnight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gui/midnight */ "./src/lib/themes/gui/midnight.js");
// This file defines all GUI themes available in the Scratch GUI

// The GUI pulls from here, you only need to update this file to add a new GUI theme




const GUI_LIGHT = 'light';
const GUI_DARK = 'dark';
const GUI_MIDNIGHT = 'midnight';
const GUI_MAP = {
  [GUI_LIGHT]: _gui_light__WEBPACK_IMPORTED_MODULE_0__,
  [GUI_DARK]: _gui_dark__WEBPACK_IMPORTED_MODULE_1__,
  [GUI_MIDNIGHT]: _gui_midnight__WEBPACK_IMPORTED_MODULE_2__
};
const GUI_DEFAULT = GUI_LIGHT;


/***/ }),

/***/ "./src/lib/themes/gui/dark.js":
/*!************************************!*\
  !*** ./src/lib/themes/gui/dark.js ***!
  \************************************/
/*! exports provided: name, icon, guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _raw_loader_icons_dark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!../icons/dark.svg */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./src/lib/themes/icons/dark.svg");
/* harmony import */ var _raw_loader_icons_dark_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_icons_dark_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return _raw_loader_icons_dark_svg__WEBPACK_IMPORTED_MODULE_0___default.a; });

const name = {
  defaultMessage: 'Dark',
  description: 'Label for the dark GUI theme',
  id: 'tw.theme.gui.dark'
};
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#111111',
  'ui-secondary': '#1e1e1e',
  'ui-tertiary': '#2e2e2e',
  'ui-modal-overlay': '#333333aa',
  'ui-modal-background': '#111111',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#333333',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#111111',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': '#333333',
  'assets-background': '#111111',
  'input-background': '#1e1e1e',
  'popover-background': '#1e1e1e',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'fullscreen-background': '#111111',
  'fullscreen-accent': '#111111',
  'page-background': '#111111',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#1e1e1e',
  toolboxSelected: '#1e1e1e',
  toolboxText: '#cccccc',
  toolbox: '#111111',
  flyout: '#111111',
  scrollbar: '#666666',
  valueReportBackground: '#1e1e1e',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#111111',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#484848'
};


/***/ }),

/***/ "./src/lib/themes/gui/light.js":
/*!*************************************!*\
  !*** ./src/lib/themes/gui/light.js ***!
  \*************************************/
/*! exports provided: name, icon, guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _raw_loader_icons_light_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!../icons/light.svg */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./src/lib/themes/icons/light.svg");
/* harmony import */ var _raw_loader_icons_light_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_icons_light_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return _raw_loader_icons_light_svg__WEBPACK_IMPORTED_MODULE_0___default.a; });

const name = {
  defaultMessage: 'Light',
  description: 'Label for the light GUI theme',
  id: 'tw.theme.gui.light'
};
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'hsla(215, 100%, 95%, 1)',
  /* #E5F0FF */
  'ui-secondary': 'hsla(215, 75%, 95%, 1)',
  /* #E9F1FC */
  'ui-tertiary': 'hsla(215, 50%, 90%, 1)',
  /* #D9E3F2 */

  'ui-modal-overlay': 'var(--motion-primary-transparent)',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-modal-foreground': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'ui-modal-header-background': 'var(--looks-secondary)',
  'ui-modal-header-foreground': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */

  'ui-white': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)',
  /* 25% transparent version of ui-white */
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)',
  /* 25% transparent version of ui-white */
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  /* 25% transparent version of ui-white */

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)',
  /* 15% transparent version of black */

  'text-primary': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'red-primary': 'hsla(20, 100%, 55%, 1)',
  /* #FF661A */
  'red-tertiary': 'hsla(20, 100%, 45%, 1)',
  /* #E64D00 */

  'sound-primary': 'hsla(300, 53%, 60%, 1)',
  /* #CF63CF */
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)',
  /* #BD42BD */

  'control-primary': 'hsla(38, 100%, 55%, 1)',
  /* #FFAB19 */

  'data-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */

  'pen-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)',
  /* #0FBD8C */
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)',
  /* #0B8E69 */

  'error-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */
  'error-light': 'hsla(30, 100%, 70%, 1)',
  /* #FFB366 */
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)',
  /* #FF8C1A */

  'extensions-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)',
  /* #0B8E69 */
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)',
  /* 35% transparent version of extensions-primary */
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  /* opaque version of extensions-transparent, on white bg */

  'drop-highlight': 'hsla(215, 100%, 77%, 1)',
  /* lighter than motion-primary */

  'menu-bar-background': 'var(--looks-secondary)',
  'menu-bar-background-image': 'none',
  'menu-bar-foreground': '#ffffff',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/gui/midnight.js":
/*!****************************************!*\
  !*** ./src/lib/themes/gui/midnight.js ***!
  \****************************************/
/*! exports provided: name, icon, guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _raw_loader_icons_midnight_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!../icons/midnight.svg */ "./node_modules/.pnpm/raw-loader@0.5.1/node_modules/raw-loader/index.js!./src/lib/themes/icons/midnight.svg");
/* harmony import */ var _raw_loader_icons_midnight_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_icons_midnight_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return _raw_loader_icons_midnight_svg__WEBPACK_IMPORTED_MODULE_0___default.a; });

const name = {
  defaultMessage: 'Midnight',
  description: 'Label for the midnight GUI theme',
  id: 'tw.theme.gui.midnight'
};
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#000000',
  'ui-secondary': '#0a0a0a',
  'ui-tertiary': '#151515',
  'ui-modal-overlay': '#222222aa',
  'ui-modal-background': '#000000',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#222222',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#000000',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': '#222222',
  'assets-background': '#000000',
  'input-background': '#0a0a0a',
  'popover-background': '#0a0a0a',
  'badge-background': '#101820',
  'badge-border': '#152638',
  'fullscreen-background': '#000000',
  'fullscreen-accent': '#000000',
  'page-background': '#000000',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#0a0a0a',
  toolboxSelected: '#0a0a0a',
  toolboxText: '#cccccc',
  toolbox: '#000000',
  flyout: '#000000',
  scrollbar: '#555555',
  valueReportBackground: '#0a0a0a',
  valueReportBorder: '#222222',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#000000',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#1a1a1a',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#111111',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#111111',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#383838'
};


/***/ }),

/***/ "./src/lib/themes/guiHelpers.js":
/*!**************************************!*\
  !*** ./src/lib/themes/guiHelpers.js ***!
  \**************************************/
/*! exports provided: applyGuiColors, applyWallpaper, applyBlocksWorkspaceTransparency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyGuiColors", function() { return applyGuiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyWallpaper", function() { return applyWallpaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBlocksWorkspaceTransparency", function() { return _applyBlocksWorkspaceTransparency; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/lib/themes/index.js");
/* harmony import */ var _menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-bar-accent.js */ "./src/lib/themes/menu-bar-accent.js");
/* harmony import */ var _addons_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addons/hooks */ "./src/addons/hooks.js");
/* harmony import */ var _themes_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/fonts */ "./src/lib/themes/fonts.js");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-styles.css */ "./src/lib/themes/global-styles.css");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global_styles_css__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





const BLOCK_COLOR_NAMES = [
// Corresponds to the name of the object in blockColors
'motion', 'looks', 'sounds', 'control', 'event', 'sensing', 'pen', 'operators', 'strings', 'data', 'data_lists', 'more', 'addons'];
const hslToRgb = (h, s, l) => {
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = (h % 360 + 360) % 360 / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const _ref = huePrime < 1 ? [chroma, x, 0] : huePrime < 2 ? [x, chroma, 0] : huePrime < 3 ? [0, chroma, x] : huePrime < 4 ? [0, x, chroma] : huePrime < 5 ? [x, 0, chroma] : [chroma, 0, x],
    _ref2 = _slicedToArray(_ref, 3),
    r = _ref2[0],
    g = _ref2[1],
    b = _ref2[2];
  const m = l - chroma / 2;
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
};

/**
 * @param {string} color A CSS color (hex, rgb(a) or hsl(a)).
 * @returns {?Array.<number>} [r, g, b] in 0-255, or null when unparseable.
 */
const parseColor = color => {
  if (typeof color !== 'string') return null;
  const value = color.trim();
  const hex = value.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    let digits = hex[1];
    if (digits.length === 3 || digits.length === 4) {
      digits = digits.split('').map(c => c + c).join('');
    }
    if (digits.length < 6) return null;
    return [0, 2, 4].map(i => parseInt(digits.substr(i, 2), 16));
  }
  const rgb = value.match(/^rgba?\(([^)]+)\)$/i);
  if (rgb) {
    const parts = rgb[1].split(/[\s,/]+/).filter(Boolean);
    if (parts.length < 3) return null;
    return parts.slice(0, 3).map(part => part.endsWith('%') ? parseFloat(part) / 100 * 255 : parseFloat(part));
  }
  const hsl = value.match(/^hsla?\(([^)]+)\)$/i);
  if (hsl) {
    const parts = hsl[1].split(/[\s,/]+/).filter(Boolean);
    if (parts.length < 3) return null;
    return hslToRgb(parseFloat(parts[0]), parseFloat(parts[1]) / 100, parseFloat(parts[2]) / 100);
  }
  return null;
};

/**
 * @param {string} color A CSS color.
 * @returns {number} WCAG relative luminance, 0 (black) to 1 (white).
 */
const relativeLuminance = color => {
  const rgb = parseColor(color);
  if (!rgb) return 0;
  const _rgb$map = rgb.map(channel => {
      const c = Math.min(Math.max(channel, 0), 255) / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }),
    _rgb$map2 = _slicedToArray(_rgb$map, 3),
    r = _rgb$map2[0],
    g = _rgb$map2[1],
    b = _rgb$map2[2];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/**
 * @param {string} css CSS color or var(--...)
 * @returns {string} evaluated CSS
 */
const evaluateCSS = css => {
  const variableMatch = css.match(/^var\(([\w-]+)\)$/);
  if (variableMatch) {
    return document.documentElement.style.getPropertyValue(variableMatch[1]);
  }
  return css;
};

/**
 * Convert hex color to rgba with given opacity
 * @param {string} hex hex color string
 * @param {number} opacity opacity value (0-1)
 * @returns {string} rgba color string
 */
const hexToRgba = (hex, opacity) => {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substr(0, 2), 16);
  const g = parseInt(cleanHex.substr(2, 2), 16);
  const b = parseInt(cleanHex.substr(4, 2), 16);
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")");
};

/**
 * Apply transparency styling to a specific element
 * @param {Element} element the element to apply transparency to
 * @param {boolean} hasWallpaper whether wallpaper is active
 * @param {number} wallpaperOpacity opacity of the wallpaper (0.1 to 1.0)
 */
const applyTransparencyToElement = function applyTransparencyToElement(element, hasWallpaper) {
  let wallpaperOpacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;
  if (hasWallpaper) {
    // Calculate appropriate background transparency based on wallpaper opacity
    // Higher wallpaper opacity means we need more workspace transparency to see through
    const backgroundOpacity = Math.max(0.2, Math.min(0.8, 1 - wallpaperOpacity + 0.1));
    const guiColors = document.documentElement.style.getPropertyValue('--ui-primary') || '#e5f0ff';
    const backgroundColor = guiColors.startsWith('#') ? hexToRgba(guiColors, backgroundOpacity) : "rgba(229, 240, 255, ".concat(backgroundOpacity, ")");
    element.style.backgroundColor = backgroundColor;
  } else {
    // Remove transparency styling
    element.style.backgroundColor = '';
  }
};

/**
 * Apply or remove transparency from the blocks workspace using JavaScript
 * @param {boolean} hasWallpaper whether wallpaper is active
 * @param {number} wallpaperOpacity opacity of the wallpaper (0.1 to 1.0)
 * @param {number} retryCount current retry attempt (for internal use)
 */
const _applyBlocksWorkspaceTransparency = function applyBlocksWorkspaceTransparency(hasWallpaper) {
  let wallpaperOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  let retryCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // Find the blocks workspace SVG element using the specific selector
  const blocksSvg = document.querySelector('svg.blocklySvg');
  if (!blocksSvg) {
    // Fallback to a more general selector if the specific one doesn't work
    const fallbackSvg = document.querySelector('svg.blocklySvg');
    if (fallbackSvg) {
      applyTransparencyToElement(fallbackSvg, hasWallpaper, wallpaperOpacity);
      return;
    }

    // If no blocks workspace is found and we haven't retried too many times, try again
    // This handles cases where wallpaper is applied before blocks are loaded
    const maxRetries = 20; // Try for up to 10 seconds (50ms * 20 = 1000ms, then exponential backoff)
    if (retryCount < maxRetries) {
      // Use exponential backoff: start with 50ms, then increase
      const delay = retryCount < 10 ? 50 : Math.min(500, 50 * Math.pow(2, retryCount - 10));
      setTimeout(() => {
        _applyBlocksWorkspaceTransparency(hasWallpaper, wallpaperOpacity, retryCount + 1);
      }, delay);
    }
    return;
  }
  applyTransparencyToElement(blocksSvg, hasWallpaper, wallpaperOpacity);
};

// Keep track of the current wallpaper state for observer
let currentWallpaperState = {
  hasWallpaper: false,
  opacity: 0.3
};

/**
 * Observer to watch for blocks workspace changes and apply transparency when needed
 */
const createBlocksWorkspaceObserver = () => {
  // Only create observer if we don't already have one
  if (window.blocksWorkspaceObserver) {
    return;
  }
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        // Check for both specific and general blocks workspace selectors
        const blocksSvg = document.querySelector('svg.blocklySvg');
        if (blocksSvg && currentWallpaperState.hasWallpaper) {
          // Apply transparency to newly created blocks workspace
          applyTransparencyToElement(blocksSvg, true, currentWallpaperState.opacity);

          // Also check for any nested SVG elements that might need transparency
          const nestedSvgs = blocksSvg.querySelectorAll('svg');
          for (let i = 0; i < nestedSvgs.length; i++) {
            applyTransparencyToElement(nestedSvgs[i], true, currentWallpaperState.opacity);
          }
          break;
        }
      }
    }
  });

  // Observe the entire document for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  window.blocksWorkspaceObserver = observer;
};

/**
 * Update the observer's knowledge of current wallpaper state
 * @param {boolean} hasWallpaper whether wallpaper is active
 * @param {number} opacity wallpaper opacity
 */
const updateWallpaperObserverState = function updateWallpaperObserverState(hasWallpaper) {
  let opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  currentWallpaperState = {
    hasWallpaper,
    opacity
  };
  if (hasWallpaper) {
    createBlocksWorkspaceObserver();

    // Also add a listener for workspace creation events if available
    if (window.AddonHooks && window.AddonHooks.workspaceCreated) {
      window.AddonHooks.workspaceCreated(() => {
        if (currentWallpaperState.hasWallpaper) {
          // Small delay to ensure workspace is fully initialized
          setTimeout(() => {
            _applyBlocksWorkspaceTransparency(true, currentWallpaperState.opacity);
          }, 50);
        }
      });
    }
  } else if (window.blocksWorkspaceObserver) {
    // Clean up observer when no wallpaper is active
    window.blocksWorkspaceObserver.disconnect();
    window.blocksWorkspaceObserver = null;
  }
};

/**
 * Apply wallpaper background to the GUI
 * @param {object} wallpaper wallpaper configuration
 */
const applyWallpaper = wallpaper => {
  const target = document.querySelector("[class*='blocks-wrapper_']");
  let checkCountTarget = 0;
  if (!target) {
    const maxChecks = 50;
    const checkInterval = setInterval(() => {
      checkCountTarget++;
      const newTarget = document.querySelector("[class*='blocks-wrapper_']");
      if (newTarget) {
        applyWallpaper(wallpaper);
        clearInterval(checkInterval);
      } else if (checkCountTarget >= maxChecks) {
        clearInterval(checkInterval);
      }
    }, 500);
    return;
  }
  if (wallpaper.url) {
    // Apply opacity by creating a semi-transparent overlay
    const opacity = Math.max(0.1, Math.min(1, wallpaper.opacity || 0.3));
    const overlayOpacity = 1 - opacity;

    // Apply darkness tinting with black overlay
    const darkness = Math.max(0, Math.min(0.8, wallpaper.darkness || 0));

    // Create a composite background with the image and darkness overlay
    // The darkness overlay is applied as a black semi-transparent layer over the image
    if (darkness > 0) {
      target.style.backgroundImage = "\n                linear-gradient(rgba(0, 0, 0, ".concat(darkness, "), rgba(0, 0, 0, ").concat(darkness, ")),\n                url(\"").concat(wallpaper.url, "\")\n            ");
    } else {
      target.style.backgroundImage = "url(\"".concat(wallpaper.url, "\")");
    }
    target.style.backgroundSize = 'cover';
    target.style.backgroundPosition = 'center';
    target.style.backgroundRepeat = 'no-repeat';
    target.style.backgroundAttachment = 'fixed';

    // Use CSS custom properties for overlay and darkness
    document.documentElement.style.setProperty('--wallpaper-overlay-opacity', overlayOpacity.toString());
    document.documentElement.style.setProperty('--wallpaper-darkness', darkness.toString());

    // Apply JavaScript-based transparency to blocks workspace
    _applyBlocksWorkspaceTransparency(true, opacity);

    // Update observer state for future blocks workspace changes
    updateWallpaperObserverState(true, opacity);

    // Also set up a periodic check for blocks workspace in case it loads later
    let checkCount = 0;
    const maxChecks = 50;
    const checkInterval = setInterval(() => {
      checkCount++;
      const blocksSvg = document.querySelector('svg.blocklySvg');
      if (blocksSvg) {
        // Found the blocks workspace, apply transparency and stop checking
        applyTransparencyToElement(blocksSvg, true, opacity);
        clearInterval(checkInterval);
      } else if (checkCount >= maxChecks) {
        // Stop checking after max attempts
        clearInterval(checkInterval);
      }
    }, 500);
  } else {
    // Remove wallpaper
    target.style.backgroundImage = '';
    target.style.backgroundSize = '';
    target.style.backgroundPosition = '';
    target.style.backgroundRepeat = '';
    target.style.backgroundAttachment = '';
    document.documentElement.style.removeProperty('--wallpaper-overlay-opacity');
    document.documentElement.style.removeProperty('--wallpaper-darkness');

    // Remove transparency from blocks workspace
    _applyBlocksWorkspaceTransparency(false);

    // Update observer state
    updateWallpaperObserverState(false);
  }
};

/**
 * @param {Theme} theme the theme
 */
const applyGuiColors = theme => {
  const doc = document.documentElement;
  const defaultGuiColors = _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults && _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.light && typeof _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.light.getGuiColors === 'function' ? _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.light.getGuiColors() : _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_MAP"] && _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_MAP"].light && _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_MAP"].light.guiColors || {};
  for (const _ref3 of Object.entries(defaultGuiColors)) {
    var _ref4 = _slicedToArray(_ref3, 2);
    const name = _ref4[0];
    const value = _ref4[1];
    doc.style.setProperty("--".concat(name, "-default"), value);
  }
  const guiColors = theme.getGuiColors();
  for (const _ref5 of Object.entries(defaultGuiColors)) {
    var _ref6 = _slicedToArray(_ref5, 2);
    const name = _ref6[0];
    const defaultValue = _ref6[1];
    const value = Object.prototype.hasOwnProperty.call(guiColors, name) ? guiColors[name] : defaultValue;
    doc.style.setProperty("--".concat(name), value);

    // Convert hex colors to RGB values for overlay purposes
    if (name === 'ui-primary' && typeof value === 'string' && value.startsWith('#')) {
      const hex = value.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      doc.style.setProperty('--ui-primary-rgb', "".concat(r, ", ").concat(g, ", ").concat(b));
    } else if (name === 'ui-primary' && typeof value === 'string' && value.startsWith('hsla')) {
      // For HSLA values, set a default RGB fallback
      doc.style.setProperty('--ui-primary-rgb', '229, 240, 255');
    }
  }
  for (const _ref7 of Object.entries(guiColors)) {
    var _ref8 = _slicedToArray(_ref7, 2);
    const name = _ref8[0];
    const value = _ref8[1];
    if (!Object.prototype.hasOwnProperty.call(defaultGuiColors, name)) {
      doc.style.setProperty("--".concat(name), value);
    }
  }
  const blockColors = theme.getBlockColors();
  doc.style.setProperty('--editorTheme3-blockText', blockColors.text);
  doc.style.setProperty('--editorTheme3-inputColor', blockColors.textField);
  doc.style.setProperty('--editorTheme3-inputColor-text', blockColors.textFieldText);
  for (const color of BLOCK_COLOR_NAMES) {
    doc.style.setProperty("--editorTheme3-".concat(color, "-primary"), blockColors[color].primary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-secondary"), blockColors[color].secondary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-tertiary"), blockColors[color].tertiary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-field-background"), blockColors[color].quaternary);
  }

  // Set workspace-specific colors from GUI themes
  if (blockColors.workspace) {
    doc.style.setProperty('--editorTheme3-workspace-background', blockColors.workspace);
  }
  if (blockColors.toolbox) {
    doc.style.setProperty('--editorTheme3-toolbox-background', blockColors.toolbox);
  }
  if (blockColors.toolboxText || blockColors.flyoutLabelColor) {
    doc.style.setProperty('--editorTheme3-toolbox-text', blockColors.toolboxText || blockColors.flyoutLabelColor);
  }
  if (blockColors.flyout) {
    doc.style.setProperty('--editorTheme3-flyout-background', blockColors.flyout);
  }
  if (blockColors.flyoutText || blockColors.flyoutLabelColor) {
    doc.style.setProperty('--editorTheme3-flyout-text', blockColors.flyoutText || blockColors.flyoutLabelColor);
  }
  if (blockColors.scrollbar) {
    doc.style.setProperty('--editorTheme3-scrollbar', blockColors.scrollbar);
  }
  if (blockColors.gridColor) {
    doc.style.setProperty('--editorTheme3-grid-color', blockColors.gridColor);
  }
  const accentMenuBar = Object(_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__["getAccentMenuBar"])();
  let menuBarBackground;
  if (accentMenuBar) {
    menuBarBackground = guiColors['looks-secondary'] || guiColors['menu-bar-background'];
  } else {
    const baseColors = _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_MAP"][theme.gui] && _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_MAP"][theme.gui].guiColors || {};
    menuBarBackground = baseColors['menu-bar-background'] || guiColors['menu-bar-background'];
    if (menuBarBackground === 'var(--looks-secondary)') {
      menuBarBackground = _index_js__WEBPACK_IMPORTED_MODULE_0__["ACCENT_MAP"][_index_js__WEBPACK_IMPORTED_MODULE_0__["ACCENT_DEFAULT"]].guiColors['looks-secondary'];
    }
    doc.style.setProperty('--menu-bar-background-image', 'none');
  }
  doc.style.setProperty('--menu-bar-background', menuBarBackground);
  const themeMenuBarText = theme.customAccent && theme.customAccent.guiColors && theme.customAccent.guiColors['menu-bar-foreground'];
  const menuBarTextPreference = Object(_menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__["getMenuBarText"])();
  let menuBarForeground;
  if (menuBarTextPreference === 'light') {
    menuBarForeground = _menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__["MENU_BAR_TEXT_LIGHT"];
  } else if (menuBarTextPreference === 'dark') {
    menuBarForeground = _menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__["MENU_BAR_TEXT_DARK"];
  } else if (themeMenuBarText) {
    menuBarForeground = themeMenuBarText;
  } else {
    menuBarForeground = relativeLuminance(evaluateCSS(menuBarBackground)) > 0.5 ? _menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__["MENU_BAR_TEXT_DARK"] : _menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__["MENU_BAR_TEXT_LIGHT"];
  }
  doc.style.setProperty('--menu-bar-foreground', menuBarForeground);
  const accentForeground = relativeLuminance(evaluateCSS(guiColors['looks-secondary'])) > 0.5 ? _menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__["MENU_BAR_TEXT_DARK"] : _menu_bar_accent_js__WEBPACK_IMPORTED_MODULE_1__["MENU_BAR_TEXT_LIGHT"];
  doc.style.setProperty('--accent-foreground', accentForeground);

  // Some browsers will color their interfaces to match theme-color, so if we make it the same color as our
  // menu bar, it'll look pretty cool.
  let metaThemeColor = document.head.querySelector('meta[name=theme-color]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', evaluateCSS(menuBarBackground));

  // a horrible hack for icons...
  window.Recolor = {
    primary: guiColors['looks-secondary']
  };
  _addons_hooks__WEBPACK_IMPORTED_MODULE_2__["default"].recolorCallbacks.forEach(i => i());

  // Apply wallpaper
  applyWallpaper(theme.wallpaper);

  // Apply fonts (async but don't block UI)
  Object(_themes_fonts__WEBPACK_IMPORTED_MODULE_3__["applyThemeFonts"])(theme.fonts).catch(console.error);
};


/***/ }),

/***/ "./src/lib/themes/index.js":
/*!*********************************!*\
  !*** ./src/lib/themes/index.js ***!
  \*********************************/
/*! exports provided: Theme, defaultBlockColors, ACCENT_MAP, GUI_MAP, MENUBAR_ALIGN, ACCENT_DEFAULT, GUI_DEFAULT, MENUBAR_ALIGN_DEFAULT, BLOCKS_THREE, BLOCKS_DARK, BLOCKS_HIGH_CONTRAST, BLOCKS_CUSTOM, BLOCKS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBlockColors", function() { return defaultBlockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_THREE", function() { return BLOCKS_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_DARK", function() { return BLOCKS_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_HIGH_CONTRAST", function() { return BLOCKS_HIGH_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_CUSTOM", function() { return BLOCKS_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_MAP", function() { return BLOCKS_MAP; });
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/three */ "./src/lib/themes/blocks/three.js");
/* harmony import */ var _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/high-contrast */ "./src/lib/themes/blocks/high-contrast.js");
/* harmony import */ var _blocks_dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/dark */ "./src/lib/themes/blocks/dark.js");
/* harmony import */ var _accents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accents */ "./src/lib/themes/accents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAP", function() { return _accents__WEBPACK_IMPORTED_MODULE_4__["ACCENT_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCENT_DEFAULT", function() { return _accents__WEBPACK_IMPORTED_MODULE_4__["ACCENT_DEFAULT"]; });

/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gui */ "./src/lib/themes/gui.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUI_MAP", function() { return _gui__WEBPACK_IMPORTED_MODULE_5__["GUI_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUI_DEFAULT", function() { return _gui__WEBPACK_IMPORTED_MODULE_5__["GUI_DEFAULT"]; });

/* harmony import */ var _menubar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menubar */ "./src/lib/themes/menubar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MENUBAR_ALIGN", function() { return _menubar__WEBPACK_IMPORTED_MODULE_6__["MENUBAR_ALIGN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MENUBAR_ALIGN_DEFAULT", function() { return _menubar__WEBPACK_IMPORTED_MODULE_6__["MENUBAR_ALIGN_DEFAULT"]; });

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







const BLOCKS_THREE = 'three';
const BLOCKS_DARK = 'dark';
const BLOCKS_HIGH_CONTRAST = 'high-contrast';
const BLOCKS_CUSTOM = 'custom';
const BLOCKS_DEFAULT = BLOCKS_THREE;
const defaultBlockColors = _blocks_three__WEBPACK_IMPORTED_MODULE_1__["blockColors"];
const BLOCKS_MAP = {
  [BLOCKS_THREE]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_1__["blockColors"],
    extensions: _blocks_three__WEBPACK_IMPORTED_MODULE_1__["extensions"],
    customExtensionColors: {},
    useForStage: true
  },
  [BLOCKS_HIGH_CONTRAST]: {
    blocksMediaFolder: 'blocks-media/high-contrast',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_2__["blockColors"], defaultBlockColors),
    extensions: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_2__["extensions"],
    customExtensionColors: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_2__["customExtensionColors"],
    useForStage: true
  },
  [BLOCKS_DARK]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_dark__WEBPACK_IMPORTED_MODULE_3__["blockColors"], defaultBlockColors),
    extensions: _blocks_dark__WEBPACK_IMPORTED_MODULE_3__["extensions"],
    customExtensionColors: _blocks_dark__WEBPACK_IMPORTED_MODULE_3__["customExtensionColors"],
    useForStage: false
  },
  [BLOCKS_CUSTOM]: {
    // to be filled by editor-theme3 addon
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_1__["blockColors"],
    extensions: {},
    customExtensionColors: {},
    useForStage: false
  }
};
let themeObjectsCreated = 0;
class Theme {
  constructor(accent, gui, blocks, menuBarAlign, wallpaper, fonts, name) {
    let appearance = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
    if (!name) name = gui;
    // do not modify these directly
    /** @readonly */
    this.id = ++themeObjectsCreated;
    /** @readonly */
    this.accent = Object.prototype.hasOwnProperty.call(_accents__WEBPACK_IMPORTED_MODULE_4__["ACCENT_MAP"], accent) ? accent : _accents__WEBPACK_IMPORTED_MODULE_4__["ACCENT_DEFAULT"];
    /** @readonly */
    this.gui = Object.prototype.hasOwnProperty.call(_gui__WEBPACK_IMPORTED_MODULE_5__["GUI_MAP"], gui) ? gui : _gui__WEBPACK_IMPORTED_MODULE_5__["GUI_DEFAULT"];
    /** @readonly */
    this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
    /** @readonly */
    this.menuBarAlign = Object.keys(_menubar__WEBPACK_IMPORTED_MODULE_6__["MENUBAR_ALIGN"]).includes(menuBarAlign) ? menuBarAlign : _menubar__WEBPACK_IMPORTED_MODULE_6__["MENUBAR_ALIGN_DEFAULT"];

    /** @readonly */
    this.wallpaper = wallpaper || {
      url: '',
      opacity: 0.3,
      darkness: 0,
      gridVisible: true,
      history: []
    };
    /** @readonly */
    this.fonts = fonts || {
      system: [],
      google: [],
      history: []
    };
    /** @readonly */
    this.appearance = appearance || {};

    /** @readonly */
    this.name = name;
  }
  _getOptions() {
    return {
      accent: this.accent,
      gui: this.gui,
      blocks: this.blocks,
      menuBarAlign: this.menuBarAlign,
      wallpaper: this.wallpaper,
      fonts: this.fonts,
      name: this.name,
      appearance: this.appearance
    };
  }
  _create(options) {
    return new Theme(options.accent, options.gui, options.blocks, options.menuBarAlign, options.wallpaper, options.fonts, options.name, options.appearance);
  }
  set(what, to) {
    const next = this._getOptions();
    if (!Object.prototype.hasOwnProperty.call(next, what)) throw new Error("Unknown theme property: ".concat(what));
    next[what] = to;
    return this._create(next);
  }
  setAppearance(changes) {
    return this.set('appearance', _objectSpread(_objectSpread({}, this.appearance), changes));
  }
  getBlocksMediaFolder() {
    return BLOCKS_MAP[this.blocks].blocksMediaFolder;
  }
  getGuiColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _accents__WEBPACK_IMPORTED_MODULE_4__["ACCENT_MAP"][this.accent].guiColors, _gui__WEBPACK_IMPORTED_MODULE_5__["GUI_MAP"][this.gui].guiColors, BLOCKS_MAP[this.blocks].colors);
  }
  getBlockColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _accents__WEBPACK_IMPORTED_MODULE_4__["ACCENT_MAP"][this.accent].blockColors, _gui__WEBPACK_IMPORTED_MODULE_5__["GUI_MAP"][this.gui].blockColors, BLOCKS_MAP[this.blocks].colors);
  }
  getExtensions() {
    return BLOCKS_MAP[this.blocks].extensions;
  }
  isDark() {
    return this.getGuiColors()['color-scheme'] === 'dark';
  }
  getStageBlockColors() {
    if (BLOCKS_MAP[this.blocks].useForStage) {
      return this.getBlockColors();
    }
    return Theme.defaults.light.getBlockColors();
  }
  getCustomExtensionColors() {
    return BLOCKS_MAP[this.blocks].customExtensionColors;
  }
  getBlocksThemeId() {
    return "".concat(this.blocks, "-").concat(BLOCKS_MAP[this.blocks].blocksMediaFolder);
  }
}
_defineProperty(Theme, "defaults", Object.create(null));
const keys = Object.keys(_gui__WEBPACK_IMPORTED_MODULE_5__["GUI_MAP"]);
for (const key of keys) {
  Theme.defaults[key] = new Theme(_accents__WEBPACK_IMPORTED_MODULE_4__["ACCENT_DEFAULT"], key, BLOCKS_DEFAULT, _menubar__WEBPACK_IMPORTED_MODULE_6__["MENUBAR_ALIGN_DEFAULT"], {
    url: '',
    opacity: 0.3,
    darkness: 0,
    gridVisible: true,
    history: []
  }, {
    system: [],
    google: [],
    history: []
  }, _gui__WEBPACK_IMPORTED_MODULE_5__["GUI_MAP"][key].name);
}


/***/ }),

/***/ "./src/lib/themes/menu-bar-accent.js":
/*!*******************************************!*\
  !*** ./src/lib/themes/menu-bar-accent.js ***!
  \*******************************************/
/*! exports provided: ACCENT_MENU_BAR_KEY, COMPACT_SAVE_KEY, getCompactSave, setCompactSave, applyCompactSave, MENU_BAR_TEXT_KEY, MENU_BAR_TEXT_OPTIONS, MENU_BAR_TEXT_DEFAULT, MENU_BAR_TEXT_LIGHT, MENU_BAR_TEXT_DARK, getAccentMenuBar, setAccentMenuBar, getMenuBarText, setMenuBarText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MENU_BAR_KEY", function() { return ACCENT_MENU_BAR_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPACT_SAVE_KEY", function() { return COMPACT_SAVE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompactSave", function() { return getCompactSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCompactSave", function() { return setCompactSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyCompactSave", function() { return applyCompactSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_BAR_TEXT_KEY", function() { return MENU_BAR_TEXT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_BAR_TEXT_OPTIONS", function() { return MENU_BAR_TEXT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_BAR_TEXT_DEFAULT", function() { return MENU_BAR_TEXT_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_BAR_TEXT_LIGHT", function() { return MENU_BAR_TEXT_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_BAR_TEXT_DARK", function() { return MENU_BAR_TEXT_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccentMenuBar", function() { return getAccentMenuBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccentMenuBar", function() { return setAccentMenuBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuBarText", function() { return getMenuBarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMenuBarText", function() { return setMenuBarText; });
const ACCENT_MENU_BAR_KEY = 'mw:accent-menu-bar';
const COMPACT_SAVE_KEY = 'mw:compact-save';
const MENU_BAR_TEXT_KEY = 'mw:menu-bar-text';
const MENU_BAR_TEXT_OPTIONS = ['auto', 'light', 'dark'];
const MENU_BAR_TEXT_DEFAULT = 'auto';
const MENU_BAR_TEXT_LIGHT = '#ffffff';
const MENU_BAR_TEXT_DARK = '#2e2e2e';
const notifyCloudSync = () => {
  try {
    __webpack_require__(/*! ../rotur/cloud-sync.js */ "./src/lib/rotur/cloud-sync.js").notifyLocalChange();
  } catch (_) {
    // cloud sync optional
  }
};
const getAccentMenuBar = () => {
  try {
    return localStorage.getItem(ACCENT_MENU_BAR_KEY) !== 'false';
  } catch (_) {
    return true;
  }
};
const setAccentMenuBar = enabled => {
  try {
    localStorage.setItem(ACCENT_MENU_BAR_KEY, enabled ? 'true' : 'false');
  } catch (_) {
    // ignore
  }
  notifyCloudSync();
};
const getMenuBarText = () => {
  try {
    const stored = localStorage.getItem(MENU_BAR_TEXT_KEY);
    return MENU_BAR_TEXT_OPTIONS.includes(stored) ? stored : MENU_BAR_TEXT_DEFAULT;
  } catch (_) {
    return MENU_BAR_TEXT_DEFAULT;
  }
};
const setMenuBarText = value => {
  const next = MENU_BAR_TEXT_OPTIONS.includes(value) ? value : MENU_BAR_TEXT_DEFAULT;
  try {
    localStorage.setItem(MENU_BAR_TEXT_KEY, next);
  } catch (_) {
    // ignore
  }
  notifyCloudSync();
};
const getCompactSave = () => {
  try {
    return localStorage.getItem(COMPACT_SAVE_KEY) === 'true';
  } catch (_) {
    return false;
  }
};
const applyCompactSave = () => {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('mw-compact-save', getCompactSave());
};
const setCompactSave = enabled => {
  try {
    localStorage.setItem(COMPACT_SAVE_KEY, enabled ? 'true' : 'false');
  } catch (_) {
    // ignore
  }
  applyCompactSave();
  notifyCloudSync();
};
applyCompactSave();


/***/ }),

/***/ "./src/lib/themes/menubar.js":
/*!***********************************!*\
  !*** ./src/lib/themes/menubar.js ***!
  \***********************************/
/*! exports provided: MENUBAR_ALIGN, MENUBAR_ALIGN_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUBAR_ALIGN", function() { return MENUBAR_ALIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUBAR_ALIGN_DEFAULT", function() { return MENUBAR_ALIGN_DEFAULT; });
/* harmony import */ var _components_menu_bar_tw_align_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/menu-bar/tw-align-left.svg */ "./src/components/menu-bar/tw-align-left.svg");
/* harmony import */ var _components_menu_bar_tw_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_menu_bar_tw_align_left_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu_bar_tw_align_center_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/menu-bar/tw-align-center.svg */ "./src/components/menu-bar/tw-align-center.svg");
/* harmony import */ var _components_menu_bar_tw_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_menu_bar_tw_align_center_svg__WEBPACK_IMPORTED_MODULE_1__);


const MENUBAR_ALIGN = {
  left: {
    defaultMessage: 'Left',
    description: 'Label for left-aligned menu bar',
    id: 'tw.menuBar.align.left',
    icon: _components_menu_bar_tw_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  center: {
    defaultMessage: 'Center',
    description: 'Label for center-aligned menu bar',
    id: 'tw.menuBar.align.center',
    icon: _components_menu_bar_tw_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  }
};
const MENUBAR_ALIGN_DEFAULT = 'center';


/***/ }),

/***/ "./src/lib/themes/themePersistance.js":
/*!********************************************!*\
  !*** ./src/lib/themes/themePersistance.js ***!
  \********************************************/
/*! exports provided: onSystemPreferenceChange, detectTheme, persistTheme, applyTheme, applyThemeVisuals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSystemPreferenceChange", function() { return onSystemPreferenceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectTheme", function() { return detectTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistTheme", function() { return persistTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTheme", function() { return applyTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyThemeVisuals", function() { return applyThemeVisuals; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/lib/themes/index.js");
/* harmony import */ var _custom_themes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-themes.js */ "./src/lib/themes/custom-themes.js");
/* harmony import */ var _guiHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guiHelpers.js */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _appearance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appearance.js */ "./src/lib/themes/appearance.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




const matchMedia = query => window.matchMedia ? window.matchMedia(query) : null;
const PREFERS_HIGH_CONTRAST_QUERY = matchMedia('(prefers-contrast: more)');
const PREFERS_DARK_QUERY = matchMedia('(prefers-color-scheme: dark)');
const STORAGE_KEY = 'tw:theme';

/**
 * @returns {Theme} detected theme
 */
const systemPreferencesTheme = () => {
  const defaultsAvailable = _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"] && _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults && _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.light;
  if (defaultsAvailable) {
    if (PREFERS_HIGH_CONTRAST_QUERY && PREFERS_HIGH_CONTRAST_QUERY.matches) {
      return _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.highContrast;
    }
    if (PREFERS_DARK_QUERY && PREFERS_DARK_QUERY.matches) {
      return _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.dark;
    }
    return _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.light;
  }

  // Fallback: construct a minimal Theme if Theme.defaults isn't initialized yet
  if (PREFERS_HIGH_CONTRAST_QUERY && PREFERS_HIGH_CONTRAST_QUERY.matches) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"](_index_js__WEBPACK_IMPORTED_MODULE_0__["ACCENT_DEFAULT"], _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_DEFAULT"], _index_js__WEBPACK_IMPORTED_MODULE_0__["BLOCKS_THREE"], _index_js__WEBPACK_IMPORTED_MODULE_0__["MENUBAR_ALIGN_DEFAULT"]);
  }
  if (PREFERS_DARK_QUERY && PREFERS_DARK_QUERY.matches) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"](_index_js__WEBPACK_IMPORTED_MODULE_0__["ACCENT_DEFAULT"], 'dark', _index_js__WEBPACK_IMPORTED_MODULE_0__["BLOCKS_THREE"], _index_js__WEBPACK_IMPORTED_MODULE_0__["MENUBAR_ALIGN_DEFAULT"]);
  }
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"](_index_js__WEBPACK_IMPORTED_MODULE_0__["ACCENT_DEFAULT"], _index_js__WEBPACK_IMPORTED_MODULE_0__["GUI_DEFAULT"], _index_js__WEBPACK_IMPORTED_MODULE_0__["BLOCKS_THREE"], _index_js__WEBPACK_IMPORTED_MODULE_0__["MENUBAR_ALIGN_DEFAULT"]);
};

/**
 * @param {function} onChange callback; no guarantees about arguments
 * @returns {function} call to remove event listeners to prevent memory leak
 */
const onSystemPreferenceChange = onChange => {
  if (!PREFERS_HIGH_CONTRAST_QUERY || !PREFERS_DARK_QUERY ||
  // Some old browsers don't support addEventListener on media queries
  !PREFERS_HIGH_CONTRAST_QUERY.addEventListener || !PREFERS_DARK_QUERY.addEventListener) {
    return () => {};
  }
  PREFERS_HIGH_CONTRAST_QUERY.addEventListener('change', onChange);
  PREFERS_DARK_QUERY.addEventListener('change', onChange);
  return () => {
    PREFERS_HIGH_CONTRAST_QUERY.removeEventListener('change', onChange);
    PREFERS_DARK_QUERY.removeEventListener('change', onChange);
  };
};

/**
 * @returns {Theme} the theme
 */
const detectTheme = () => {
  const systemPreferences = systemPreferencesTheme();
  const storedAppearance = Object(_appearance_js__WEBPACK_IMPORTED_MODULE_3__["captureStoredAppearance"])();
  const addStoredAppearance = theme => {
    const missingStoredValue = Object.keys(storedAppearance).some(key => typeof theme.appearance[key] === 'undefined');
    return missingStoredValue ? theme.set('appearance', Object(_appearance_js__WEBPACK_IMPORTED_MODULE_3__["mergeStoredAppearance"])(theme.appearance)) : theme;
  };
  try {
    const local = localStorage.getItem(STORAGE_KEY);
    if (local === null) {
      return addStoredAppearance(systemPreferences);
    }

    // Migrate legacy preferences
    if (local === 'dark') {
      return addStoredAppearance(_index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.dark);
    }
    if (local === 'light') {
      return addStoredAppearance(_index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"].defaults.light);
    }
    const parsed = JSON.parse(local);
    if (!parsed || typeof parsed !== 'object') {
      return addStoredAppearance(systemPreferences);
    }

    // Check if this is a custom theme
    if (parsed.isCustom && parsed.customThemeUuid) {
      const customTheme = _custom_themes_js__WEBPACK_IMPORTED_MODULE_1__["customThemeManager"].getTheme(parsed.customThemeUuid);
      if (customTheme) {
        const migratedTheme = addStoredAppearance(customTheme);
        return migratedTheme === customTheme ? customTheme : _custom_themes_js__WEBPACK_IMPORTED_MODULE_1__["customThemeManager"].updateTheme(customTheme.uuid, {
          appearance: migratedTheme.appearance
        });
      }
      // Fall back to system preferences if custom theme not found
      console.warn("Custom theme ".concat(parsed.customThemeUuid, " not found, falling back to system preferences"));
    }
    if (parsed.inlineCustomTheme && typeof parsed.inlineCustomTheme === 'object') {
      try {
        return addStoredAppearance(_custom_themes_js__WEBPACK_IMPORTED_MODULE_1__["CustomTheme"].import(parsed.inlineCustomTheme));
      } catch (e) {
        console.warn('Failed to import inline custom theme, falling back to system preferences', e);
      }
    }

    // Any invalid values in storage will be handled by Theme itself
    const wallpaper = parsed.wallpaper || {
      url: '',
      opacity: 0.3,
      darkness: 0,
      gridVisible: true,
      history: []
    };

    // Add backward compatibility for gridVisible
    if (typeof wallpaper.gridVisible === 'undefined') {
      wallpaper.gridVisible = true;
    }
    const legacyAppearance = _objectSpread(_objectSpread({}, parsed.menuBarLayout ? {
      menuBarLayout: parsed.menuBarLayout
    } : {}), parsed.styleSettings ? {
      styles: parsed.styleSettings
    } : {});
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Theme"](parsed.accent || systemPreferences.accent, parsed.gui || systemPreferences.gui, parsed.blocks || systemPreferences.blocks, parsed.menuBarAlign || systemPreferences.menuBarAlign, wallpaper, parsed.fonts || {
      system: [],
      google: [],
      history: []
    }, null, _objectSpread(_objectSpread(_objectSpread({}, storedAppearance), legacyAppearance), parsed.appearance || {}));
  } catch (e) {
    // ignore
  }
  return addStoredAppearance(systemPreferences);
};

/**
 * @param {Theme} theme the theme
 */
const persistTheme = theme => {
  const systemPreferences = systemPreferencesTheme();
  const nonDefaultSettings = {};

  // Handle custom themes differently
  if (theme instanceof _custom_themes_js__WEBPACK_IMPORTED_MODULE_1__["CustomTheme"]) {
    const savedCustomTheme = _custom_themes_js__WEBPACK_IMPORTED_MODULE_1__["customThemeManager"].getTheme(theme.uuid);
    if (savedCustomTheme) {
      nonDefaultSettings.customThemeUuid = theme.uuid;
      nonDefaultSettings.isCustom = true;
      if (JSON.stringify(savedCustomTheme.appearance) !== JSON.stringify(theme.appearance)) {
        _custom_themes_js__WEBPACK_IMPORTED_MODULE_1__["customThemeManager"].updateTheme(theme.uuid, {
          appearance: theme.appearance
        });
      }
    } else {
      // Modified/unselected custom theme: persist inline so it can be restored.
      nonDefaultSettings.inlineCustomTheme = theme.export();
    }
  } else {
    if (theme.accent !== systemPreferences.accent) {
      nonDefaultSettings.accent = theme.accent;
    }
    if (theme.gui !== systemPreferences.gui) {
      nonDefaultSettings.gui = theme.gui;
    }
    // custom blocks are managed by addon at runtime, don't save here
    if (theme.blocks !== systemPreferences.blocks && theme.blocks !== _index_js__WEBPACK_IMPORTED_MODULE_0__["BLOCKS_CUSTOM"]) {
      nonDefaultSettings.blocks = theme.blocks;
    }
    if (theme.menuBarAlign !== systemPreferences.menuBarAlign) {
      nonDefaultSettings.menuBarAlign = theme.menuBarAlign;
    }
    if (Object.keys(theme.appearance).length > 0) {
      nonDefaultSettings.appearance = theme.appearance;
    }
    // Always save wallpaper settings if they exist
    if (theme.wallpaper && (theme.wallpaper.url || theme.wallpaper.history.length > 0)) {
      nonDefaultSettings.wallpaper = theme.wallpaper;
    }

    // Always save fonts settings if they exist
    if (theme.fonts && (theme.fonts.system.length > 0 || theme.fonts.google.length > 0 || theme.fonts.history.length > 0)) {
      nonDefaultSettings.fonts = theme.fonts;
    }
  }
  let previous = null;
  try {
    previous = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    // ignore
  }
  const next = Object.keys(nonDefaultSettings).length === 0 ? null : JSON.stringify(nonDefaultSettings);
  try {
    if (next === null) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, next);
    }
  } catch (e) {
    // ignore
  }
  if (next !== previous) {
    try {
      __webpack_require__(/*! ../rotur/cloud-sync.js */ "./src/lib/rotur/cloud-sync.js").notifyLocalChange();
    } catch (_) {
      // cloud sync optional
    }
  }
};

/**
 * Apply a theme to the GUI pipeline without persisting it.
 * Use for boot, storage events, and forced themes (embeds); persistence
 * must only happen on an explicit user change via applyTheme.
 * @param {Theme} theme the theme
 */
const applyThemeVisuals = theme => {
  try {
    Object(_guiHelpers_js__WEBPACK_IMPORTED_MODULE_2__["applyGuiColors"])(theme);
  } catch (e) {
    console.error('Failed to apply GUI colors for theme:', e);
  }
  Object(_appearance_js__WEBPACK_IMPORTED_MODULE_3__["applyAppearance"])(theme.appearance);
};

/**
 * Apply a theme to the GUI pipeline and persist settings.
 * This centralizes application so loading and manual changes behave the same.
 * @param {Theme} theme the theme
 */
const applyTheme = theme => {
  applyThemeVisuals(theme);
  persistTheme(theme);
};
if (typeof window !== 'undefined') {
  window.addEventListener('storage', event => {
    if (event.key === STORAGE_KEY) applyThemeVisuals(detectTheme());
  });
}
try {
  applyThemeVisuals(detectTheme());
} catch (e) {
  console.error('Failed to apply theme:', e);
}


/***/ }),

/***/ "./src/lib/trusted-extension.js":
/*!**************************************!*\
  !*** ./src/lib/trusted-extension.js ***!
  \**************************************/
/*! exports provided: isGalleryExtensionUrl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGalleryExtensionUrl", function() { return isGalleryExtensionUrl; });
const isGalleryExtensionUrl = url => url.startsWith('https://extensions.turbowarp.org/') || url.startsWith('https://extensions.bilup.org/') || url.startsWith('https://extensions.mistium.com/') || url.startsWith('https://sharkpools-extensions.vercel.app/') || url.startsWith('https://editors.astras.top/extensions/') || url.startsWith('https://extensions.mistium.com/') || url.startsWith('http://localhost:8000/');
const isTrustedExtensionUrl = url => isGalleryExtensionUrl(url) || url.startsWith('http://localhost:8000/');

/* harmony default export */ __webpack_exports__["default"] = (isTrustedExtensionUrl);

/***/ }),

/***/ "./src/lib/utils/color.js":
/*!********************************!*\
  !*** ./src/lib/utils/color.js ***!
  \********************************/
/*! exports provided: hex2hsv, hsv2hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2hsv", function() { return hex2hsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return hsv2hex; });
/*
    Parts of this file are from https://github.com/Qix-/color-convert/blob/6b7dee5a168f76bf42c084fefa7bbe1a0941ad7e/conversions.js

    Copyright (c) 2011-2016 Heather Arthur <fayearthur@gmail.com>.
    Copyright (c) 2016-2021 Josh Junon <josh@junon.me>.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @param {string} hex hex color code like #abc123
 * @returns {number[]} [r, g, b] in range [0-255]. Alpha channel is ignored.
 */
const hex2rgb = hex => {
  const parsed = Number.parseInt(hex.substring(1), 16);
  return [parsed >> 16 & 255, parsed >> 8 & 255, parsed & 255];
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {string} hex color code like #123abc
 */
const rgb2hex = rgb => {
  const number = rgb[0] << 16 | rgb[1] << 8 | rgb[2];
  return "#".concat(number.toString(16).padStart(6, '0'));
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {number[]} [h, s, v] in range [0-360] for h, [0-100] for s, v
 */
const rgb2hsv = rgb => {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = c => (v - c) / 6 / diff + 1 / 2;
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [h * 360, s * 100, v * 100];
};

/**
 * @param {number[]} hsv [h, s, v] in range [0-360] for h, [0-100] for s, v
 * @returns {number[]} [r, g, b] in range [0-255]
 */
const hsv2rgb = hsv => {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
const hex2hsv = hex => rgb2hsv(hex2rgb(hex));
const hsv2hex = hsv => rgb2hex(hsv2rgb(hsv));


/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/.pnpm/react-dom@16.14.0_react@16.14.0/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);


const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
Object(react_modal__WEBPACK_IMPORTED_MODULE_1__["setAppElement"])(appTarget);
const render = children => {
  // Use ReactDOM.createRoot for better performance if available (React 18+)
  if (react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.createRoot) {
    const root = react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.createRoot(appTarget);
    root.render(children);
  } else {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(children, appTarget);
  }

  // Schedule splash end after render completes
  requestAnimationFrame(() => {
    // Log time when React app renders (splash screen ends)
    if (window.BILUP_LOAD_START_TIME) {
      if (window.performance && window.performance.mark) {
        window.performance.mark('bilup-app-render');
      }
    }
    if (window.SplashEnd) {
      window.SplashEnd();
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ })

}]);
//# sourceMappingURL=addon-settings~community~credits~editor~embed~fullscreen~player.js.map