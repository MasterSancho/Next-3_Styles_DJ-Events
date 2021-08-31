"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/EventItem.js":
/*!*********************************!*\
  !*** ./components/EventItem.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EventItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/EventItem.module.css */ "./styles/EventItem.module.css");
/* harmony import */ var _styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\components\\EventItem.js";



function EventItem(_ref) {
  var evt = _ref.evt;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().event),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().img),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: evt.image ? evt.image : '/images/event-default.png',
        width: 170,
        height: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [evt.date, " at ", evt.time]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: evt.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}
_c = EventItem;

var _c;

$RefreshReg$(_c, "EventItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGIwZWQ3MWVlZTM0YTgyMWI5NDQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTRyxTQUFULE9BQTRCO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQzFDLHNCQUNDO0FBQUssYUFBUyxFQUFFRiwyRUFBaEI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUEseUVBQWhCO0FBQUEsNkJBQ0MsOERBQUMsbURBQUQ7QUFDQyxXQUFHLEVBQUVFLEdBQUcsQ0FBQ0csS0FBSixHQUFZSCxHQUFHLENBQUNHLEtBQWhCLEdBQXdCLDJCQUQ5QjtBQUVDLGFBQUssRUFBRSxHQUZSO0FBR0MsY0FBTSxFQUFFO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVNDO0FBQUssZUFBUyxFQUFFTCwwRUFBaEI7QUFBQSw4QkFDQztBQUFBLG1CQUNFRSxHQUFHLENBQUNLLElBRE4sVUFDZ0JMLEdBQUcsQ0FBQ00sSUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFBLGtCQUFLTixHQUFHLENBQUNPO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0JBO0tBbkJ1QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FdmVudEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0V2ZW50SXRlbS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50SXRlbSh7IGV2dCB9KSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnR9PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ30+XHJcbiAgICA8SW1hZ2VcclxuICAgICBzcmM9e2V2dC5pbWFnZSA/IGV2dC5pbWFnZSA6ICcvaW1hZ2VzL2V2ZW50LWRlZmF1bHQucG5nJ31cclxuICAgICB3aWR0aD17MTcwfVxyXG4gICAgIGhlaWdodD17MTAwfVxyXG4gICAgLz5cclxuICAgPC9kaXY+XHJcblxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxyXG4gICAgPHNwYW4+XHJcbiAgICAge2V2dC5kYXRlfSBhdCB7ZXZ0LnRpbWV9XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8aDM+e2V2dC5uYW1lfTwvaDM+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwic3R5bGVzIiwiRXZlbnRJdGVtIiwiZXZ0IiwiZXZlbnQiLCJpbWciLCJpbWFnZSIsImluZm8iLCJkYXRlIiwidGltZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9