"use strict";
self["webpackHotUpdate_N_E"]("pages/events/search",{

/***/ "./pages/events/search.js":
/*!********************************!*\
  !*** ./pages/events/search.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ SearchPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\search.js",
    _s = $RefreshSig$();




var __N_SSP = true;
function SearchPage(_ref) {
  _s();

  var _this = this;

  var events = _ref.events;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Search Results",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["Search Results for ", router.query.term]
    }, void 0, true, {
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
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

_s(SearchPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = SearchPage;

var _c;

$RefreshReg$(_c, "SearchPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL3NlYXJjaC4zOTNmZDExN2U2MDdiMWUyMzk1MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNHLFVBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDOUMsTUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUVBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQVEsU0FBSyxFQUFDLGdCQUFkO0FBQUEsNEJBQ0M7QUFBQSx3Q0FBd0JLLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQUVFSCxNQUFNLENBQUNJLE1BQVAsS0FBa0IsQ0FBbEIsaUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnpCLEVBSUVKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNDLEdBQUQ7QUFBQSwwQkFDWCw4REFBQywwREFBRDtBQUF3QixXQUFHLEVBQUVBO0FBQTdCLFNBQWdCQSxHQUFHLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVgsQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVVBOztHQWJ1QlI7VUFDUkg7OztLQURRRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tICdxcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEV2ZW50SXRlbSBmcm9tICdAL2NvbXBvbmVudHMvRXZlbnRJdGVtJztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hQYWdlKHsgZXZlbnRzIH0pIHtcclxuIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuIHJldHVybiAoXHJcbiAgPExheW91dCB0aXRsZT0nU2VhcmNoIFJlc3VsdHMnPlxyXG4gICA8aDE+U2VhcmNoIFJlc3VsdHMgZm9yIHtyb3V0ZXIucXVlcnkudGVybX08L2gxPlxyXG4gICB7ZXZlbnRzLmxlbmd0aCA9PT0gMCAmJiA8aDM+Tm8gZXZlbnRzIHRvIHNob3c8L2gzPn1cclxuXHJcbiAgIHtldmVudHMubWFwKChldnQpID0+IChcclxuICAgIDxFdmVudEl0ZW0ga2V5PXtldnQuaWR9IGV2dD17ZXZ0fSAvPlxyXG4gICApKX1cclxuICA8L0xheW91dD5cclxuICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeTogeyB0ZXJtIH0gfSkge1xyXG4gY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gIF93aGVyZToge1xyXG4gICBfb3I6IFtcclxuICAgIHsgbmFtZV9jb250YWluczogdGVybSB9LFxyXG4gICAgeyBwZXJmb3JtZXJzX2NvbnRhaW5zOiB0ZXJtIH0sXHJcbiAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zOiB0ZXJtIH0sXHJcbiAgICB7IHZlbnVlX2NvbnRhaW5zOiB0ZXJtIH0sXHJcbiAgIF0sXHJcbiAgfSxcclxuIH0pO1xyXG5cclxuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2V2ZW50cz8ke3F1ZXJ5fWApO1xyXG4gY29uc3QgZXZlbnRzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiByZXR1cm4ge1xyXG4gIHByb3BzOiB7IGV2ZW50cyB9LFxyXG4gfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGF5b3V0IiwiRXZlbnRJdGVtIiwiU2VhcmNoUGFnZSIsImV2ZW50cyIsInJvdXRlciIsInF1ZXJ5IiwidGVybSIsImxlbmd0aCIsIm1hcCIsImV2dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==