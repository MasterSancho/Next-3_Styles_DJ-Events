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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 28
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_3__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, _this);
    }), page > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/events?page=".concat(page - 1),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "btn-secondary",
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, this), page > lastPage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/events?page=".concat(page + 1),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "btn-secondary",
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLmQzNjEyZDI3ZGIyODU1MjU2Yjk1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNRyxRQUFRLEdBQUcsQ0FBakI7O0FBRWUsU0FBU0MsUUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDekQsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUgsS0FBSyxHQUFHSixRQUFsQixDQUFqQjtBQUVBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQUVFRSxNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBbEIsaUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnpCLEVBSUVOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUNDLEdBQUQ7QUFBQSwwQkFDWCw4REFBQywwREFBRDtBQUF3QixXQUFHLEVBQUVBO0FBQTdCLFNBQWdCQSxHQUFHLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVgsQ0FKRixFQVFFUixJQUFJLEdBQUcsQ0FBUCxpQkFDQSw4REFBQyxrREFBRDtBQUFNLFVBQUkseUJBQWtCQSxJQUFJLEdBQUcsQ0FBekIsQ0FBVjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBY0VBLElBQUksR0FBR0UsUUFBUCxpQkFDQSw4REFBQyxrREFBRDtBQUFNLFVBQUkseUJBQWtCRixJQUFJLEdBQUcsQ0FBekIsQ0FBVjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBc0JBO0tBekJ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBFdmVudEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0V2ZW50SXRlbSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdjb25maWcnO1xyXG5jb25zdCBQRVJfUEFHRSA9IDI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGV2ZW50cywgcGFnZSwgdG90YWwgfSkge1xyXG4gY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyBQRVJfUEFHRSk7XHJcblxyXG4gcmV0dXJuIChcclxuICA8TGF5b3V0PlxyXG4gICA8aDE+RXZlbnRzPC9oMT5cclxuICAge2V2ZW50cy5sZW5ndGggPT09IDAgJiYgPGgzPk5vIGV2ZW50cyB0byBzaG93PC9oMz59XHJcblxyXG4gICB7ZXZlbnRzLm1hcCgoZXZ0KSA9PiAoXHJcbiAgICA8RXZlbnRJdGVtIGtleT17ZXZ0LmlkfSBldnQ9e2V2dH0gLz5cclxuICAgKSl9XHJcblxyXG4gICB7cGFnZSA+IDEgJiYgKFxyXG4gICAgPExpbmsgaHJlZj17YC9ldmVudHM/cGFnZT0ke3BhZ2UgLSAxfWB9PlxyXG4gICAgIDxhIGNsYXNzTmFtZT0nYnRuLXNlY29uZGFyeSc+UHJldjwvYT5cclxuICAgIDwvTGluaz5cclxuICAgKX1cclxuXHJcbiAgIHtwYWdlID4gbGFzdFBhZ2UgJiYgKFxyXG4gICAgPExpbmsgaHJlZj17YC9ldmVudHM/cGFnZT0ke3BhZ2UgKyAxfWB9PlxyXG4gICAgIDxhIGNsYXNzTmFtZT0nYnRuLXNlY29uZGFyeSc+TmV4dDwvYT5cclxuICAgIDwvTGluaz5cclxuICAgKX1cclxuICA8L0xheW91dD5cclxuICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeTogeyBwYWdlID0gMSB9IH0pIHtcclxuIC8vIENhbGN1bGF0ZSBzdGFydCBwYWdlXHJcbiBjb25zdCBzdGFydCA9ICtwYWdlID09PSAxID8gMCA6ICgrcGFnZSAtIDEpICogUEVSX1BBR0U7XHJcblxyXG4gLy8gRmV0Y2ggdG90YWwvY291bnRcclxuIGNvbnN0IHRvdGFsUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzL2NvdW50YCk7XHJcbiBjb25zdCB0b3RhbCA9IGF3YWl0IHRvdGFsUmVzLmpzb24oKTtcclxuXHJcbiAvLyBGZXRjaCBldmVudHNcclxuIGNvbnN0IGV2ZW50UmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgYCR7QVBJX1VSTH0vZXZlbnRzP19zb3J0PWRhdGU6QVNDJl9saW1pdD0ke1BFUl9QQUdFfSZfc3RhcnQ9JHtzdGFydH1gXHJcbiApO1xyXG4gY29uc3QgZXZlbnRzID0gYXdhaXQgZXZlbnRSZXMuanNvbigpO1xyXG5cclxuIHJldHVybiB7XHJcbiAgcHJvcHM6IHsgZXZlbnRzLCBwYWdlOiArcGFnZSwgdG90YWwgfSxcclxuIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJMYXlvdXQiLCJFdmVudEl0ZW0iLCJQRVJfUEFHRSIsIkhvbWVQYWdlIiwiZXZlbnRzIiwicGFnZSIsInRvdGFsIiwibGFzdFBhZ2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm1hcCIsImV2dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==