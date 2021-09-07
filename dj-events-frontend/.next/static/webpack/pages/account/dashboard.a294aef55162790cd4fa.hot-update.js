self["webpackHotUpdate_N_E"]("pages/account/dashboard",{

/***/ "./components/DashboardEvent.js":
/*!**************************************!*\
  !*** ./components/DashboardEvent.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardEvent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/DashboardEvent.module.css */ "./styles/DashboardEvent.module.css");
/* harmony import */ var _styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\components\\DashboardEvent.js";



function DashboardEvent(_ref) {
  var evt = _ref.evt;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2___default().event),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/events/".concat(evt.slug),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: evt.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}
_c = DashboardEvent;

var _c;

$RefreshReg$(_c, "DashboardEvent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/account/dashboard.js":
/*!************************************!*\
  !*** ./pages/account/dashboard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_DashboardEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/DashboardEvent */ "./components/DashboardEvent.js");
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Dashboard.module.css */ "./styles/Dashboard.module.css");
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\account\\dashboard.js";



var __N_SSP = true;
function DashboardPage(_ref) {
  var _this = this;

  var events = _ref.events;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "User Dashboard",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default().dash),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Dashboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "My Events"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, this), events.map(function (evt) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardEvent__WEBPACK_IMPORTED_MODULE_2__.default, {
          evt: evt
        }, evt.id, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, this);
}
_c = DashboardPage;

var _c;

$RefreshReg$(_c, "DashboardPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./styles/DashboardEvent.module.css":
/*!******************************************!*\
  !*** ./styles/DashboardEvent.module.css ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./DashboardEvent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/DashboardEvent.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./DashboardEvent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/DashboardEvent.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./DashboardEvent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/DashboardEvent.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/DashboardEvent.module.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/DashboardEvent.module.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DashboardEvent_event__175RV {\r\n margin: 10px 0;\r\n padding: 10px;\r\n border-radius: 5px;\r\n border: 1px #ddd solid;\r\n background-color: #f4f4f4;\r\n display: -moz-box;\r\n display: flex;\r\n -moz-box-align: center;\r\n      align-items: center;\r\n -moz-box-pack: start;\r\n      justify-content: flex-start;\r\n}\r\n\r\n.DashboardEvent_event__175RV h4 {\r\n margin-bottom: 10px;\r\n -moz-box-flex: 2;\r\n      flex: 2 1;\r\n}\r\n\r\n.DashboardEvent_edit__3485P,\r\n.DashboardEvent_delete__3bzb_ {\r\n margin: 10px;\r\n}\r\n\r\n.DashboardEvent_delete__3bzb_ {\r\n color: red;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/DashboardEvent.module.css"],"names":[],"mappings":"AAAA;CACC,cAAc;CACd,aAAa;CACb,kBAAkB;CAClB,sBAAsB;CACtB,yBAAyB;CACzB,iBAAa;CAAb,aAAa;CACb,sBAAmB;MAAnB,mBAAmB;CACnB,oBAA2B;MAA3B,2BAA2B;AAC5B;;AAEA;CACC,mBAAmB;CACnB,gBAAO;MAAP,SAAO;AACR;;AAEA;;CAEC,YAAY;AACb;;AAEA;CACC,UAAU;AACX","sourcesContent":[".event {\r\n margin: 10px 0;\r\n padding: 10px;\r\n border-radius: 5px;\r\n border: 1px #ddd solid;\r\n background-color: #f4f4f4;\r\n display: flex;\r\n align-items: center;\r\n justify-content: flex-start;\r\n}\r\n\r\n.event h4 {\r\n margin-bottom: 10px;\r\n flex: 2;\r\n}\r\n\r\n.edit,\r\n.delete {\r\n margin: 10px;\r\n}\r\n\r\n.delete {\r\n color: red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"event": "DashboardEvent_event__175RV",
	"edit": "DashboardEvent_edit__3485P",
	"delete": "DashboardEvent_delete__3bzb_"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9kYXNoYm9hcmQuYTI5NGFlZjU1MTYyNzkwY2Q0ZmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0ksY0FBVCxPQUFpQztBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTztBQUMvQyxzQkFDQztBQUFLLGFBQVMsRUFBRUYsZ0ZBQWhCO0FBQUEsMkJBQ0M7QUFBQSw2QkFDQyw4REFBQyxrREFBRDtBQUFNLFlBQUksb0JBQWFFLEdBQUcsQ0FBQ0UsSUFBakIsQ0FBVjtBQUFBLCtCQUNDO0FBQUEsb0JBQUlGLEdBQUcsQ0FBQ0c7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFTQTtLQVZ1Qko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFDQTtBQUVBOztBQUVlLFNBQVNNLGFBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDakQsc0JBQ0MsOERBQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUMsZ0JBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRVIsMEVBQWhCO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsRUFJRVEsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ1IsR0FBRDtBQUFBLDRCQUNYLDhEQUFDLCtEQUFEO0FBQTZCLGFBQUcsRUFBRUE7QUFBbEMsV0FBcUJBLEdBQUcsQ0FBQ1MsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVgsQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFZQTtLQWJ1Qko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeEIsVUFBVSxtQkFBTyxDQUFDLG9OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQyx1YkFBdU47O0FBRXpQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHViQUF1TjtBQUM3TjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHViQUF1Tjs7QUFFalA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7QUNuRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLHdFQUF3RSxvQkFBb0IsbUJBQW1CLHdCQUF3Qiw0QkFBNEIsK0JBQStCLHVCQUF1QixtQkFBbUIsNEJBQTRCLDhCQUE4QiwwQkFBMEIsc0NBQXNDLEtBQUsseUNBQXlDLHlCQUF5QixzQkFBc0Isb0JBQW9CLEtBQUssdUVBQXVFLGtCQUFrQixLQUFLLHVDQUF1QyxnQkFBZ0IsS0FBSyxXQUFXLGlHQUFpRyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLGlDQUFpQyxvQkFBb0IsbUJBQW1CLHdCQUF3Qiw0QkFBNEIsK0JBQStCLG1CQUFtQix5QkFBeUIsaUNBQWlDLEtBQUssbUJBQW1CLHlCQUF5QixhQUFhLEtBQUssMkJBQTJCLGtCQUFrQixLQUFLLGlCQUFpQixnQkFBZ0IsS0FBSyx1QkFBdUI7QUFDeDFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGFzaGJvYXJkRXZlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnQvZGFzaGJvYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvRGFzaGJvYXJkRXZlbnQubW9kdWxlLmNzcz80ZDc0Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvRGFzaGJvYXJkRXZlbnQubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBGYVBlbmNpbEFsdCwgRmFUaW1lcyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9EYXNoYm9hcmRFdmVudC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZEV2ZW50KHsgZXZ0IH0pIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudH0+XHJcbiAgIDxoND5cclxuICAgIDxMaW5rIGhyZWY9e2AvZXZlbnRzLyR7ZXZ0LnNsdWd9YH0+XHJcbiAgICAgPGE+e2V2dC5uYW1lfTwvYT5cclxuICAgIDwvTGluaz5cclxuICAgPC9oND5cclxuICA8L2Rpdj5cclxuICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyc2VDb29raWUgfSBmcm9tICdAL2hlbHBlcnMvaW5kZXgnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkRXZlbnQgZnJvbSAnQC9jb21wb25lbnRzL0Rhc2hib2FyZEV2ZW50JztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkUGFnZSh7IGV2ZW50cyB9KSB7XHJcbiByZXR1cm4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9J1VzZXIgRGFzaGJvYXJkJz5cclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXNofT5cclxuICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxyXG4gICAgPGgzPk15IEV2ZW50czwvaDM+XHJcblxyXG4gICAge2V2ZW50cy5tYXAoKGV2dCkgPT4gKFxyXG4gICAgIDxEYXNoYm9hcmRFdmVudCBrZXk9e2V2dC5pZH0gZXZ0PXtldnR9IC8+XHJcbiAgICApKX1cclxuICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxIH0pIHtcclxuIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llKHJlcSk7XHJcblxyXG4gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzL21lYCwge1xyXG4gIG1ldGhvZDogJ0dFVCcsXHJcbiAgaGVhZGVyczoge1xyXG4gICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICB9LFxyXG4gfSk7XHJcblxyXG4gY29uc3QgZXZlbnRzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiByZXR1cm4ge1xyXG4gIHByb3BzOiB7XHJcbiAgIGV2ZW50cyxcclxuICB9LFxyXG4gfTtcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vRGFzaGJvYXJkRXZlbnQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vRGFzaGJvYXJkRXZlbnQubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vRGFzaGJvYXJkRXZlbnQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRGFzaGJvYXJkRXZlbnRfZXZlbnRfXzE3NVJWIHtcXHJcXG4gbWFyZ2luOiAxMHB4IDA7XFxyXFxuIHBhZGRpbmc6IDEwcHg7XFxyXFxuIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gYm9yZGVyOiAxcHggI2RkZCBzb2xpZDtcXHJcXG4gYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG4gZGlzcGxheTogLW1vei1ib3g7XFxyXFxuIGRpc3BsYXk6IGZsZXg7XFxyXFxuIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gLW1vei1ib3gtcGFjazogc3RhcnQ7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uRGFzaGJvYXJkRXZlbnRfZXZlbnRfXzE3NVJWIGg0IHtcXHJcXG4gbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gLW1vei1ib3gtZmxleDogMjtcXHJcXG4gICAgICBmbGV4OiAyIDE7XFxyXFxufVxcclxcblxcclxcbi5EYXNoYm9hcmRFdmVudF9lZGl0X18zNDg1UCxcXHJcXG4uRGFzaGJvYXJkRXZlbnRfZGVsZXRlX18zYnpiXyB7XFxyXFxuIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkRhc2hib2FyZEV2ZW50X2RlbGV0ZV9fM2J6Yl8ge1xcclxcbiBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0Rhc2hib2FyZEV2ZW50Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLGlCQUFhO0NBQWIsYUFBYTtDQUNiLHNCQUFtQjtNQUFuQixtQkFBbUI7Q0FDbkIsb0JBQTJCO01BQTNCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBTztNQUFQLFNBQU87QUFDUjs7QUFFQTs7Q0FFQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxVQUFVO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmV2ZW50IHtcXHJcXG4gbWFyZ2luOiAxMHB4IDA7XFxyXFxuIHBhZGRpbmc6IDEwcHg7XFxyXFxuIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gYm9yZGVyOiAxcHggI2RkZCBzb2xpZDtcXHJcXG4gYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG4gZGlzcGxheTogZmxleDtcXHJcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4ganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnQgaDQge1xcclxcbiBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiBmbGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCxcXHJcXG4uZGVsZXRlIHtcXHJcXG4gbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlIHtcXHJcXG4gY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZXZlbnRcIjogXCJEYXNoYm9hcmRFdmVudF9ldmVudF9fMTc1UlZcIixcblx0XCJlZGl0XCI6IFwiRGFzaGJvYXJkRXZlbnRfZWRpdF9fMzQ4NVBcIixcblx0XCJkZWxldGVcIjogXCJEYXNoYm9hcmRFdmVudF9kZWxldGVfXzNiemJfXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJGYVBlbmNpbEFsdCIsIkZhVGltZXMiLCJzdHlsZXMiLCJEYXNoYm9hcmRFdmVudCIsImV2dCIsImV2ZW50Iiwic2x1ZyIsIm5hbWUiLCJMYXlvdXQiLCJEYXNoYm9hcmRQYWdlIiwiZXZlbnRzIiwiZGFzaCIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==