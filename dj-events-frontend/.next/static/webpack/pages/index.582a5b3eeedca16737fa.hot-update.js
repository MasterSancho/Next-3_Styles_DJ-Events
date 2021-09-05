"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ "./components/Search.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Header.module.css */ "./styles/Header.module.css");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\components\\Header.js",
    _s = $RefreshSig$();







function Header() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.default),
      user = _useContext.user,
      logout = _useContext.logout;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "DJ Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/events",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Events"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, this), user ?
        /*#__PURE__*/
        // If logged in
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/events/add",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: "Add Event"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: function onClick() {
                return logout();
              },
              className: "btn-secondary btn-icon",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaSignOutAlt, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 10
              }, this), " Logout"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 8
          }, this)]
        }, void 0, true) :
        /*#__PURE__*/
        // If logged out
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/account/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn-secondary btn-icon",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaSignInAlt, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 11
                }, this), " Login"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 8
          }, this)
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

_s(Header, "ke5VSTPoS9VmZ9Rb/aBZ/M9DV3c=");

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTgyYTViM2VlZWRjYTE2NzM3ZmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU08sTUFBVCxHQUFrQjtBQUFBOztBQUFBLG9CQUNQTCxpREFBVSxDQUFDRyx5REFBRCxDQURIO0FBQUEsTUFDeEJHLElBRHdCLGVBQ3hCQSxJQUR3QjtBQUFBLE1BQ2xCQyxNQURrQixlQUNsQkEsTUFEa0I7O0FBR2hDLHNCQUNDO0FBQVEsYUFBUyxFQUFFSCx5RUFBbkI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUEsdUVBQWhCO0FBQUEsNkJBQ0MsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU9DLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVNDO0FBQUEsNkJBQ0M7QUFBQSxnQ0FDQztBQUFBLGlDQUNDLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxTQUFYO0FBQUEsbUNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxFQU9FRSxJQUFJO0FBQUE7QUFDSjtBQUNBO0FBQUEsa0NBQ0M7QUFBQSxtQ0FDQyw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsYUFBWDtBQUFBLHFDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFPQztBQUFBLG1DQUNDO0FBQVEscUJBQU8sRUFBRTtBQUFBLHVCQUFNQyxNQUFNLEVBQVo7QUFBQSxlQUFqQjtBQUFpQyx1QkFBUyxFQUFDLHdCQUEzQztBQUFBLHNDQUNDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRDtBQUFBLHdCQUZJO0FBQUE7QUFnQko7QUFDQTtBQUFBLGlDQUNDO0FBQUEsbUNBQ0MsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGdCQUFYO0FBQUEscUNBQ0M7QUFBRyx5QkFBUyxFQUFDLHdCQUFiO0FBQUEsd0NBQ0MsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELHlCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpREE7O0dBcER1QkY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhU2lnbkluQWx0LCBGYVNpZ25PdXRBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiBjb25zdCB7IHVzZXIsIGxvZ291dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gcmV0dXJuIChcclxuICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICA8TGluayBocmVmPScvJz5cclxuICAgICA8YT5ESiBFdmVudHM8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgIDwvZGl2PlxyXG5cclxuICAgPFNlYXJjaCAvPlxyXG5cclxuICAgPG5hdj5cclxuICAgIDx1bD5cclxuICAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9ldmVudHMnPlxyXG4gICAgICAgPGE+RXZlbnRzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgPC9saT5cclxuXHJcbiAgICAge3VzZXIgPyAoXHJcbiAgICAgIC8vIElmIGxvZ2dlZCBpblxyXG4gICAgICA8PlxyXG4gICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9ldmVudHMvYWRkJz5cclxuICAgICAgICAgPGE+QWRkIEV2ZW50PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgPGxpPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9nb3V0KCl9IGNsYXNzTmFtZT0nYnRuLXNlY29uZGFyeSBidG4taWNvbic+XHJcbiAgICAgICAgIDxGYVNpZ25PdXRBbHQgLz4gTG9nb3V0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICA8L2xpPlxyXG4gICAgICA8Lz5cclxuICAgICApIDogKFxyXG4gICAgICAvLyBJZiBsb2dnZWQgb3V0XHJcbiAgICAgIDw+XHJcbiAgICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL2FjY291bnQvbG9naW4nPlxyXG4gICAgICAgICA8YSBjbGFzc05hbWU9J2J0bi1zZWNvbmRhcnkgYnRuLWljb24nPlxyXG4gICAgICAgICAgPEZhU2lnbkluQWx0IC8+IExvZ2luXHJcbiAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICA8L2xpPlxyXG4gICAgICA8Lz5cclxuICAgICApfVxyXG4gICAgPC91bD5cclxuICAgPC9uYXY+XHJcbiAgPC9oZWFkZXI+XHJcbiApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGYVNpZ25JbkFsdCIsIkZhU2lnbk91dEFsdCIsInVzZUNvbnRleHQiLCJMaW5rIiwiU2VhcmNoIiwiQXV0aENvbnRleHQiLCJzdHlsZXMiLCJIZWFkZXIiLCJ1c2VyIiwibG9nb3V0IiwiaGVhZGVyIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=