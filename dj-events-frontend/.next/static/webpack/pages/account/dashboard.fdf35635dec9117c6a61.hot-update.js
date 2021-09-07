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
  var evt = _ref.evt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9kYXNoYm9hcmQuZmRmMzU2MzVkZWM5MTE3YzZhNjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNJLGNBQVQsT0FBaUM7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87QUFDL0Msc0JBQ0M7QUFBSyxhQUFTLEVBQUVGLGdGQUFoQjtBQUFBLDRCQUNDO0FBQUEsNkJBQ0MsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLG9CQUFhRSxHQUFHLENBQUNFLElBQWpCLENBQVY7QUFBQSwrQkFDQztBQUFBLG9CQUFJRixHQUFHLENBQUNHO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFPQyw4REFBQyxrREFBRDtBQUFNLFVBQUkseUJBQWtCSCxHQUFHLENBQUNJLEVBQXRCLENBQVY7QUFBQSw2QkFDQztBQUFHLGlCQUFTLEVBQUVOLDhFQUFkO0FBQUEsZ0NBQ0MsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxvQkFDaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQWFDO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFTLEVBQUVBLGlGQUF2QjtBQUFzQyxhQUFPLEVBQUU7QUFBQSxlQUFNUSxZQUFZLENBQUNOLEdBQUcsQ0FBQ0ksRUFBTCxDQUFsQjtBQUFBLE9BQS9DO0FBQUEsOEJBQ0MsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELG9CQUNhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtQkE7S0FwQnVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rhc2hib2FyZEV2ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEZhUGVuY2lsQWx0LCBGYVRpbWVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0Rhc2hib2FyZEV2ZW50Lm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkRXZlbnQoeyBldnQgfSkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50fT5cclxuICAgPGg0PlxyXG4gICAgPExpbmsgaHJlZj17YC9ldmVudHMvJHtldnQuc2x1Z31gfT5cclxuICAgICA8YT57ZXZ0Lm5hbWV9PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICA8L2g0PlxyXG5cclxuICAgPExpbmsgaHJlZj17YC9ldmVudHMvZWRpdC8ke2V2dC5pZH1gfT5cclxuICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmRpdH0+XHJcbiAgICAgPEZhUGVuY2lsQWx0IC8+IDxzcGFuPkVkaXQgRXZlbnQ8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgIDwvTGluaz5cclxuXHJcbiAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZX0gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGV2dC5pZCl9PlxyXG4gICAgPEZhVGltZXMgLz4gPHNwYW4+RGVsZXRlPC9zcGFuPlxyXG4gICA8L2E+XHJcbiAgPC9kaXY+XHJcbiApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiRmFQZW5jaWxBbHQiLCJGYVRpbWVzIiwic3R5bGVzIiwiRGFzaGJvYXJkRXZlbnQiLCJldnQiLCJldmVudCIsInNsdWciLCJuYW1lIiwiaWQiLCJkaXQiLCJoYW5kbGVEZWxldGUiXSwic291cmNlUm9vdCI6IiJ9