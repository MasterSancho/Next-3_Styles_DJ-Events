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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\search.js",
    _s = $RefreshSig$();





var __N_SSP = true;
function SearchPage(_ref) {
  _s();

  var _this = this;

  var events = _ref.events;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: "Search Results",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/events",
      children: "Go Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["Search Results for ", router.query.term]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 28
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_4__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL3NlYXJjaC45MjU1NmMwYWJhY2JkMWZiOThmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTSSxVQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzlDLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7QUFFQSxzQkFDQyw4REFBQyx1REFBRDtBQUFRLFNBQUssRUFBQyxnQkFBZDtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUEsd0NBQXdCTSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsSUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsRUFHRUgsTUFBTSxDQUFDSSxNQUFQLEtBQWtCLENBQWxCLGlCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUh6QixFQUtFSixNQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFDQyxHQUFEO0FBQUEsMEJBQ1gsOERBQUMsMERBQUQ7QUFBd0IsV0FBRyxFQUFFQTtBQUE3QixTQUFnQkEsR0FBRyxDQUFDQyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFYLENBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFXQTs7R0FkdUJSO1VBQ1JKOzs7S0FEUUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBFdmVudEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0V2ZW50SXRlbSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdjb25maWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUGFnZSh7IGV2ZW50cyB9KSB7XHJcbiBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9J1NlYXJjaCBSZXN1bHRzJz5cclxuICAgPExpbmsgaHJlZj0nL2V2ZW50cyc+R28gQmFjazwvTGluaz5cclxuICAgPGgxPlNlYXJjaCBSZXN1bHRzIGZvciB7cm91dGVyLnF1ZXJ5LnRlcm19PC9oMT5cclxuICAge2V2ZW50cy5sZW5ndGggPT09IDAgJiYgPGgzPk5vIGV2ZW50cyB0byBzaG93PC9oMz59XHJcblxyXG4gICB7ZXZlbnRzLm1hcCgoZXZ0KSA9PiAoXHJcbiAgICA8RXZlbnRJdGVtIGtleT17ZXZ0LmlkfSBldnQ9e2V2dH0gLz5cclxuICAgKSl9XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnk6IHsgdGVybSB9IH0pIHtcclxuIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICBfd2hlcmU6IHtcclxuICAgX29yOiBbXHJcbiAgICB7IG5hbWVfY29udGFpbnM6IHRlcm0gfSxcclxuICAgIHsgcGVyZm9ybWVyc19jb250YWluczogdGVybSB9LFxyXG4gICAgeyBkZXNjcmlwdGlvbl9jb250YWluczogdGVybSB9LFxyXG4gICAgeyB2ZW51ZV9jb250YWluczogdGVybSB9LFxyXG4gICBdLFxyXG4gIH0sXHJcbiB9KTtcclxuXHJcbiBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHM/JHtxdWVyeX1gKTtcclxuIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gcmV0dXJuIHtcclxuICBwcm9wczogeyBldmVudHMgfSxcclxuIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxpbmsiLCJMYXlvdXQiLCJFdmVudEl0ZW0iLCJTZWFyY2hQYWdlIiwiZXZlbnRzIiwicm91dGVyIiwicXVlcnkiLCJ0ZXJtIiwibGVuZ3RoIiwibWFwIiwiZXZ0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9