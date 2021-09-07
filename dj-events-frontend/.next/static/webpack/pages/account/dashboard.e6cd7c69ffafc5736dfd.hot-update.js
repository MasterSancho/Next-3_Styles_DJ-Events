"use strict";
self["webpackHotUpdate_N_E"]("pages/account/dashboard",{

/***/ "./components/DashboardEvent.js":
/*!**************************************!*\
  !*** ./components/DashboardEvent.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardEvent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/DashboardEvent.module.css */ "./styles/DashboardEvent.module.css");
/* harmony import */ var _styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\components\\DashboardEvent.js";



function DashboardEvent(_ref) {
  var evt = _ref.evt,
      handleDelete = _ref.handleDelete;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2___default().event),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/events/edit/".concat(evt.id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2___default().dit),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPencilAlt, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Edit Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      className: (_styles_DashboardEvent_module_css__WEBPACK_IMPORTED_MODULE_2___default().delete),
      onClick: function onClick() {
        return handleDelete(evt.id);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTimes, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9kYXNoYm9hcmQuZTZjZDdjNjlmZmFmYzU3MzZkZmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNJLGNBQVQsT0FBK0M7QUFBQSxNQUFyQkMsR0FBcUIsUUFBckJBLEdBQXFCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM3RCxzQkFDQztBQUFLLGFBQVMsRUFBRUgsZ0ZBQWhCO0FBQUEsNEJBQ0M7QUFBQSw2QkFDQyw4REFBQyxrREFBRDtBQUFNLFlBQUksb0JBQWFFLEdBQUcsQ0FBQ0csSUFBakIsQ0FBVjtBQUFBLCtCQUNDO0FBQUEsb0JBQUlILEdBQUcsQ0FBQ0k7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU9DLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSx5QkFBa0JKLEdBQUcsQ0FBQ0ssRUFBdEIsQ0FBVjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBRVAsOEVBQWQ7QUFBQSxnQ0FDQyw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELG9CQUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBYUM7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQVMsRUFBRUEsaUZBQXZCO0FBQXNDLGFBQU8sRUFBRTtBQUFBLGVBQU1HLFlBQVksQ0FBQ0QsR0FBRyxDQUFDSyxFQUFMLENBQWxCO0FBQUEsT0FBL0M7QUFBQSw4QkFDQyw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsb0JBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1CQTtLQXBCdUJOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGFzaGJvYXJkRXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRmFQZW5jaWxBbHQsIEZhVGltZXMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRGFzaGJvYXJkRXZlbnQubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRFdmVudCh7IGV2dCwgaGFuZGxlRGVsZXRlIH0pIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudH0+XHJcbiAgIDxoND5cclxuICAgIDxMaW5rIGhyZWY9e2AvZXZlbnRzLyR7ZXZ0LnNsdWd9YH0+XHJcbiAgICAgPGE+e2V2dC5uYW1lfTwvYT5cclxuICAgIDwvTGluaz5cclxuICAgPC9oND5cclxuXHJcbiAgIDxMaW5rIGhyZWY9e2AvZXZlbnRzL2VkaXQvJHtldnQuaWR9YH0+XHJcbiAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5kaXR9PlxyXG4gICAgIDxGYVBlbmNpbEFsdCAvPiA8c3Bhbj5FZGl0IEV2ZW50PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICA8L0xpbms+XHJcblxyXG4gICA8YSBocmVmPScjJyBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShldnQuaWQpfT5cclxuICAgIDxGYVRpbWVzIC8+IDxzcGFuPkRlbGV0ZTwvc3Bhbj5cclxuICAgPC9hPlxyXG4gIDwvZGl2PlxyXG4gKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkZhUGVuY2lsQWx0IiwiRmFUaW1lcyIsInN0eWxlcyIsIkRhc2hib2FyZEV2ZW50IiwiZXZ0IiwiaGFuZGxlRGVsZXRlIiwiZXZlbnQiLCJzbHVnIiwibmFtZSIsImlkIiwiZGl0Il0sInNvdXJjZVJvb3QiOiIifQ==