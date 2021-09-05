"use strict";
self["webpackHotUpdate_N_E"]("pages/account/register",{

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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
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
          }, this)
        }, void 0, false) :
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
                  lineNumber: 44,
                  columnNumber: 11
                }, this), " Login"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9yZWdpc3Rlci44NWY3MzI2MzY0OTM0NjFjYWVlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsb0JBQ1BMLGlEQUFVLENBQUNHLHlEQUFELENBREg7QUFBQSxNQUN4QkcsSUFEd0IsZUFDeEJBLElBRHdCO0FBQUEsTUFDbEJDLE1BRGtCLGVBQ2xCQSxNQURrQjs7QUFHaEMsc0JBQ0M7QUFBUSxhQUFTLEVBQUVILHlFQUFuQjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFQSx1RUFBaEI7QUFBQSw2QkFDQyw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBT0MsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBU0M7QUFBQSw2QkFDQztBQUFBLGdDQUNDO0FBQUEsaUNBQ0MsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFNBQVg7QUFBQSxtQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEVBT0VFLElBQUk7QUFBQTtBQUNKO0FBQ0E7QUFBQSxpQ0FDQztBQUFBLG1DQUNDLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxhQUFYO0FBQUEscUNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELHlCQUZJO0FBQUE7QUFVSjtBQUNBO0FBQUEsaUNBQ0M7QUFBQSxtQ0FDQyw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsZ0JBQVg7QUFBQSxxQ0FDQztBQUFHLHlCQUFTLEVBQUMsd0JBQWI7QUFBQSx3Q0FDQyw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQseUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTJDQTs7R0E5Q3VCRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFTaWduSW5BbHQsIEZhU2lnbk91dEFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgIDxhPkRKIEV2ZW50czwvYT5cclxuICAgIDwvTGluaz5cclxuICAgPC9kaXY+XHJcblxyXG4gICA8U2VhcmNoIC8+XHJcblxyXG4gICA8bmF2PlxyXG4gICAgPHVsPlxyXG4gICAgIDxsaT5cclxuICAgICAgPExpbmsgaHJlZj0nL2V2ZW50cyc+XHJcbiAgICAgICA8YT5FdmVudHM8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICA8L2xpPlxyXG5cclxuICAgICB7dXNlciA/IChcclxuICAgICAgLy8gSWYgbG9nZ2VkIGluXHJcbiAgICAgIDw+XHJcbiAgICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL2V2ZW50cy9hZGQnPlxyXG4gICAgICAgICA8YT5BZGQgRXZlbnQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgPC9saT5cclxuICAgICAgPC8+XHJcbiAgICAgKSA6IChcclxuICAgICAgLy8gSWYgbG9nZ2VkIG91dFxyXG4gICAgICA8PlxyXG4gICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9hY2NvdW50L2xvZ2luJz5cclxuICAgICAgICAgPGEgY2xhc3NOYW1lPSdidG4tc2Vjb25kYXJ5IGJ0bi1pY29uJz5cclxuICAgICAgICAgIDxGYVNpZ25JbkFsdCAvPiBMb2dpblxyXG4gICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgPC9saT5cclxuICAgICAgPC8+XHJcbiAgICAgKX1cclxuICAgIDwvdWw+XHJcbiAgIDwvbmF2PlxyXG4gIDwvaGVhZGVyPlxyXG4gKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmFTaWduSW5BbHQiLCJGYVNpZ25PdXRBbHQiLCJ1c2VDb250ZXh0IiwiTGluayIsIlNlYXJjaCIsIkF1dGhDb250ZXh0Iiwic3R5bGVzIiwiSGVhZGVyIiwidXNlciIsImxvZ291dCIsImhlYWRlciIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9