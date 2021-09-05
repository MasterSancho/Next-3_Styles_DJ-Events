"use strict";
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PaGination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\components\\Pagination.js";
function PaGination(_ref) {
  var page = _ref.page,
      total = _ref.total;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 9
  }, this);
}
_c = PaGination;

var _c;

$RefreshReg$(_c, "PaGination");

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

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Pagination */ "./components/Pagination.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\index.js";




var PER_PAGE = 5;
var __N_SSP = true;
function HomePage(_ref) {
  var _this = this;

  var events = _ref.events,
      page = _ref.page,
      total = _ref.total;
  var lastPage = Math.ceil(total / PER_PAGE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 28
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_3__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}
_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLmJlOTJjNDkyNTlmODEzOTgwNjI3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsVUFBVCxPQUFxQztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNuRCxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDQTtLQUZ1QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEI7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTyxRQUFRLEdBQUcsQ0FBakI7O0FBRWUsU0FBU0MsUUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxNQUFmUixJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDekQsTUFBTVEsUUFBUSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVVYsS0FBSyxHQUFHSyxRQUFsQixDQUFqQjtBQUVBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQUVFRSxNQUFNLENBQUNJLE1BQVAsS0FBa0IsQ0FBbEIsaUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnpCLEVBSUVKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNDLEdBQUQ7QUFBQSwwQkFDWCw4REFBQywwREFBRDtBQUF3QixXQUFHLEVBQUVBO0FBQTdCLFNBQWdCQSxHQUFHLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVgsQ0FKRixlQVFDLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBO0tBZnVCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYUdpbmF0aW9uKHsgcGFnZSwgdG90YWwgfSkge1xyXG4gcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBFdmVudEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0V2ZW50SXRlbSc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcbmNvbnN0IFBFUl9QQUdFID0gNTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgZXZlbnRzLCBwYWdlLCB0b3RhbCB9KSB7XHJcbiBjb25zdCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0b3RhbCAvIFBFUl9QQUdFKTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgIDxoMT5FdmVudHM8L2gxPlxyXG4gICB7ZXZlbnRzLmxlbmd0aCA9PT0gMCAmJiA8aDM+Tm8gZXZlbnRzIHRvIHNob3c8L2gzPn1cclxuXHJcbiAgIHtldmVudHMubWFwKChldnQpID0+IChcclxuICAgIDxFdmVudEl0ZW0ga2V5PXtldnQuaWR9IGV2dD17ZXZ0fSAvPlxyXG4gICApKX1cclxuXHJcbiAgIDxQYWdpbmF0aW9uIC8+XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnk6IHsgcGFnZSA9IDEgfSB9KSB7XHJcbiAvLyBDYWxjdWxhdGUgc3RhcnQgcGFnZVxyXG4gY29uc3Qgc3RhcnQgPSArcGFnZSA9PT0gMSA/IDAgOiAoK3BhZ2UgLSAxKSAqIFBFUl9QQUdFO1xyXG5cclxuIC8vIEZldGNoIHRvdGFsL2NvdW50XHJcbiBjb25zdCB0b3RhbFJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2V2ZW50cy9jb3VudGApO1xyXG4gY29uc3QgdG90YWwgPSBhd2FpdCB0b3RhbFJlcy5qc29uKCk7XHJcblxyXG4gLy8gRmV0Y2ggZXZlbnRzXHJcbiBjb25zdCBldmVudFJlcyA9IGF3YWl0IGZldGNoKFxyXG4gIGAke0FQSV9VUkx9L2V2ZW50cz9fc29ydD1kYXRlOkFTQyZfbGltaXQ9JHtQRVJfUEFHRX0mX3N0YXJ0PSR7c3RhcnR9YFxyXG4gKTtcclxuIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGV2ZW50UmVzLmpzb24oKTtcclxuXHJcbiByZXR1cm4ge1xyXG4gIHByb3BzOiB7IGV2ZW50cywgcGFnZTogK3BhZ2UsIHRvdGFsIH0sXHJcbiB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQYUdpbmF0aW9uIiwicGFnZSIsInRvdGFsIiwiTGluayIsIkxheW91dCIsIkV2ZW50SXRlbSIsIlBhZ2luYXRpb24iLCJQRVJfUEFHRSIsIkhvbWVQYWdlIiwiZXZlbnRzIiwibGFzdFBhZ2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm1hcCIsImV2dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==