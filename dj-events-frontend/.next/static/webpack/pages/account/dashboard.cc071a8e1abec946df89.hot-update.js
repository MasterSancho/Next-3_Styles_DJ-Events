"use strict";
self["webpackHotUpdate_N_E"]("pages/account/dashboard",{

/***/ "./pages/account/dashboard.js":
/*!************************************!*\
  !*** ./pages/account/dashboard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

  var deleteEvent = function deleteEvent(id) {
    console.log(id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "User Dashboard",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default().dash),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Dashboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "My Events"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this), events.map(function (evt) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardEvent__WEBPACK_IMPORTED_MODULE_2__.default, {
          evt: evt,
          handleDelete: deleteEvent
        }, evt.id, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9kYXNoYm9hcmQuY2MwNzFhOGUxYWJlYzk0NmRmODkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTRyxhQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUNqRCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQVE7QUFDM0JDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixFQUFaO0FBQ0EsR0FGRDs7QUFJQSxzQkFDQyw4REFBQyx1REFBRDtBQUFRLFNBQUssRUFBQyxnQkFBZDtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFSiwwRUFBaEI7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxFQUlFRSxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxHQUFEO0FBQUEsNEJBQ1gsOERBQUMsK0RBQUQ7QUFBNkIsYUFBRyxFQUFFQSxHQUFsQztBQUF1QyxzQkFBWSxFQUFFTjtBQUFyRCxXQUFxQk0sR0FBRyxDQUFDTCxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWCxDQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBO0tBakJ1QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC9kYXNoYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VDb29raWUgfSBmcm9tICdAL2hlbHBlcnMvaW5kZXgnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkRXZlbnQgZnJvbSAnQC9jb21wb25lbnRzL0Rhc2hib2FyZEV2ZW50JztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkUGFnZSh7IGV2ZW50cyB9KSB7XHJcbiBjb25zdCBkZWxldGVFdmVudCA9IChpZCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuIH07XHJcblxyXG4gcmV0dXJuIChcclxuICA8TGF5b3V0IHRpdGxlPSdVc2VyIERhc2hib2FyZCc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGFzaH0+XHJcbiAgICA8aDE+RGFzaGJvYXJkPC9oMT5cclxuICAgIDxoMz5NeSBFdmVudHM8L2gzPlxyXG5cclxuICAgIHtldmVudHMubWFwKChldnQpID0+IChcclxuICAgICA8RGFzaGJvYXJkRXZlbnQga2V5PXtldnQuaWR9IGV2dD17ZXZ0fSBoYW5kbGVEZWxldGU9e2RlbGV0ZUV2ZW50fSAvPlxyXG4gICAgKSl9XHJcbiAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSB9KSB7XHJcbiBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZShyZXEpO1xyXG5cclxuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2V2ZW50cy9tZWAsIHtcclxuICBtZXRob2Q6ICdHRVQnLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgfSxcclxuIH0pO1xyXG5cclxuIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gcmV0dXJuIHtcclxuICBwcm9wczoge1xyXG4gICBldmVudHMsXHJcbiAgfSxcclxuIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkRhc2hib2FyZEV2ZW50Iiwic3R5bGVzIiwiRGFzaGJvYXJkUGFnZSIsImV2ZW50cyIsImRlbGV0ZUV2ZW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGFzaCIsIm1hcCIsImV2dCJdLCJzb3VyY2VSb290IjoiIn0=