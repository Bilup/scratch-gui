(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-merge-operators"],{

/***/ "./src/addons/addons/merge-operators/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/merge-operators/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/merge-operators/userscript.js");

const resources = {
  'userscript.js': _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/merge-operators/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/merge-operators/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// eslint-disable-next-line require-jsdoc
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon;
  const Blockly = await addon.tab.traps.getBlockly();
  const populate = Blockly.Toolbox.prototype.populate_;
  Blockly.Toolbox.prototype.populate_ = function (tree) {
    if (addon.self.disabled) return populate.call(this, tree);
    const merged = tree.cloneNode(true);
    const operators = Array.from(merged.children).find(category => category.id === 'operators');
    const strings = Array.from(merged.children).find(category => category.id === 'mwStrings');
    if (operators && strings) {
      while (strings.firstChild) operators.appendChild(strings.firstChild);
      strings.remove();
    }
    return populate.call(this, merged);
  };
  const updateToolbox = () => {
    const workspace = Blockly.getMainWorkspace();
    if (workspace) workspace.updateToolbox(workspace.options.languageTree);
  };
  updateToolbox();
  addon.self.addEventListener('disabled', updateToolbox);
  addon.self.addEventListener('reenabled', updateToolbox);
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-merge-operators.js.map