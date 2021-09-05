"use strict";
self["webpackHotUpdate_N_E"]("pages/events",{

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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\index.js";


var PER_PAGE = 2;
var __N_SSP = true;
function HomePage(_ref) {
  var _this = this;

  var events = _ref.events,
      page = _ref.page,
      total = _ref.total;
  var lastPage = Math.ceil(total / PER_PAGE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 28
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this);
    }), page > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
      href: "/events?page=".concat(page - 1),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "btn-secondary",
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjNhNzE2YjNiN2NkYzU4MzZlZDI1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1FLFFBQVEsR0FBRyxDQUFqQjs7QUFFZSxTQUFTQyxRQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN6RCxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxLQUFLLEdBQUdKLFFBQWxCLENBQWpCO0FBRUEsc0JBQ0MsOERBQUMsdURBQUQ7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEVBRUVFLE1BQU0sQ0FBQ00sTUFBUCxLQUFrQixDQUFsQixpQkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGekIsRUFJRU4sTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQ0MsR0FBRDtBQUFBLDBCQUNYLDhEQUFDLDBEQUFEO0FBQXdCLFdBQUcsRUFBRUE7QUFBN0IsU0FBZ0JBLEdBQUcsQ0FBQ0MsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0FBWCxDQUpGLEVBUUVSLElBQUksR0FBRyxDQUFQLGlCQUNBLDhEQUFDLElBQUQ7QUFBTSxVQUFJLHlCQUFrQkEsSUFBSSxHQUFHLENBQXpCLENBQVY7QUFBQSw2QkFDQztBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWdCQTtLQW5CdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgRXZlbnRJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9FdmVudEl0ZW0nO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnY29uZmlnJztcclxuY29uc3QgUEVSX1BBR0UgPSAyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBldmVudHMsIHBhZ2UsIHRvdGFsIH0pIHtcclxuIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gUEVSX1BBR0UpO1xyXG5cclxuIHJldHVybiAoXHJcbiAgPExheW91dD5cclxuICAgPGgxPkV2ZW50czwvaDE+XHJcbiAgIHtldmVudHMubGVuZ3RoID09PSAwICYmIDxoMz5ObyBldmVudHMgdG8gc2hvdzwvaDM+fVxyXG5cclxuICAge2V2ZW50cy5tYXAoKGV2dCkgPT4gKFxyXG4gICAgPEV2ZW50SXRlbSBrZXk9e2V2dC5pZH0gZXZ0PXtldnR9IC8+XHJcbiAgICkpfVxyXG5cclxuICAge3BhZ2UgPiAxICYmIChcclxuICAgIDxMaW5rIGhyZWY9e2AvZXZlbnRzP3BhZ2U9JHtwYWdlIC0gMX1gfT5cclxuICAgICA8YSBjbGFzc05hbWU9J2J0bi1zZWNvbmRhcnknPlByZXY8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgICl9XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnk6IHsgcGFnZSA9IDEgfSB9KSB7XHJcbiAvLyBDYWxjdWxhdGUgc3RhcnQgcGFnZVxyXG4gY29uc3Qgc3RhcnQgPSArcGFnZSA9PT0gMSA/IDAgOiAoK3BhZ2UgLSAxKSAqIFBFUl9QQUdFO1xyXG5cclxuIC8vIEZldGNoIHRvdGFsL2NvdW50XHJcbiBjb25zdCB0b3RhbFJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2V2ZW50cy9jb3VudGApO1xyXG4gY29uc3QgdG90YWwgPSBhd2FpdCB0b3RhbFJlcy5qc29uKCk7XHJcblxyXG4gLy8gRmV0Y2ggZXZlbnRzXHJcbiBjb25zdCBldmVudFJlcyA9IGF3YWl0IGZldGNoKFxyXG4gIGAke0FQSV9VUkx9L2V2ZW50cz9fc29ydD1kYXRlOkFTQyZfbGltaXQ9JHtQRVJfUEFHRX0mX3N0YXJ0PSR7c3RhcnR9YFxyXG4gKTtcclxuIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGV2ZW50UmVzLmpzb24oKTtcclxuXHJcbiByZXR1cm4ge1xyXG4gIHByb3BzOiB7IGV2ZW50cywgcGFnZTogK3BhZ2UsIHRvdGFsIH0sXHJcbiB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJFdmVudEl0ZW0iLCJQRVJfUEFHRSIsIkhvbWVQYWdlIiwiZXZlbnRzIiwicGFnZSIsInRvdGFsIiwibGFzdFBhZ2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm1hcCIsImV2dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==