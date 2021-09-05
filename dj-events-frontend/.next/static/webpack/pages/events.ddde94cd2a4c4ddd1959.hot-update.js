"use strict";
self["webpackHotUpdate_N_E"]("pages/events",{

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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/account/dashboard",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: function onClick() {
                return logout();
              },
              className: "btn-secondary btn-icon",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaSignOutAlt, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 10
              }, this), " Logout"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
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
                  lineNumber: 56,
                  columnNumber: 11
                }, this), " Login"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLmRkZGU5NGNkMmE0YzRkZGQxOTU5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNPLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxvQkFDUEwsaURBQVUsQ0FBQ0cseURBQUQsQ0FESDtBQUFBLE1BQ3hCRyxJQUR3QixlQUN4QkEsSUFEd0I7QUFBQSxNQUNsQkMsTUFEa0IsZUFDbEJBLE1BRGtCOztBQUdoQyxzQkFDQztBQUFRLGFBQVMsRUFBRUgseUVBQW5CO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVBLHVFQUFoQjtBQUFBLDZCQUNDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFPQyw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFTQztBQUFBLDZCQUNDO0FBQUEsZ0NBQ0M7QUFBQSxpQ0FDQyw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsU0FBWDtBQUFBLG1DQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsRUFPRUUsSUFBSTtBQUFBO0FBQ0o7QUFDQTtBQUFBLGtDQUNDO0FBQUEsbUNBQ0MsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGFBQVg7QUFBQSxxQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBT0M7QUFBQSxtQ0FDQyw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsb0JBQVg7QUFBQSxxQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBELGVBYUM7QUFBQSxtQ0FDQztBQUFRLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUMsTUFBTSxFQUFaO0FBQUEsZUFBakI7QUFBaUMsdUJBQVMsRUFBQyx3QkFBM0M7QUFBQSxzQ0FDQyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkQ7QUFBQSx3QkFGSTtBQUFBO0FBc0JKO0FBQ0E7QUFBQSxpQ0FDQztBQUFBLG1DQUNDLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxnQkFBWDtBQUFBLHFDQUNDO0FBQUcseUJBQVMsRUFBQyx3QkFBYjtBQUFBLHdDQUNDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCx5QkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBdURBOztHQTFEdUJGOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYVNpZ25JbkFsdCwgRmFTaWduT3V0QWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuIHJldHVybiAoXHJcbiAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgPGE+REogRXZlbnRzPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICA8L2Rpdj5cclxuXHJcbiAgIDxTZWFyY2ggLz5cclxuXHJcbiAgIDxuYXY+XHJcbiAgICA8dWw+XHJcbiAgICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPScvZXZlbnRzJz5cclxuICAgICAgIDxhPkV2ZW50czwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgIDwvbGk+XHJcblxyXG4gICAgIHt1c2VyID8gKFxyXG4gICAgICAvLyBJZiBsb2dnZWQgaW5cclxuICAgICAgPD5cclxuICAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPScvZXZlbnRzL2FkZCc+XHJcbiAgICAgICAgIDxhPkFkZCBFdmVudDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICA8L2xpPlxyXG5cclxuICAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPScvYWNjb3VudC9kYXNoYm9hcmQnPlxyXG4gICAgICAgICA8YT5EYXNoYm9hcmQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgPC9saT5cclxuXHJcbiAgICAgICA8bGk+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0gY2xhc3NOYW1lPSdidG4tc2Vjb25kYXJ5IGJ0bi1pY29uJz5cclxuICAgICAgICAgPEZhU2lnbk91dEFsdCAvPiBMb2dvdXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgIDwvbGk+XHJcbiAgICAgIDwvPlxyXG4gICAgICkgOiAoXHJcbiAgICAgIC8vIElmIGxvZ2dlZCBvdXRcclxuICAgICAgPD5cclxuICAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPScvYWNjb3VudC9sb2dpbic+XHJcbiAgICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuLXNlY29uZGFyeSBidG4taWNvbic+XHJcbiAgICAgICAgICA8RmFTaWduSW5BbHQgLz4gTG9naW5cclxuICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgIDwvbGk+XHJcbiAgICAgIDwvPlxyXG4gICAgICl9XHJcbiAgICA8L3VsPlxyXG4gICA8L25hdj5cclxuICA8L2hlYWRlcj5cclxuICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZhU2lnbkluQWx0IiwiRmFTaWduT3V0QWx0IiwidXNlQ29udGV4dCIsIkxpbmsiLCJTZWFyY2giLCJBdXRoQ29udGV4dCIsInN0eWxlcyIsIkhlYWRlciIsInVzZXIiLCJsb2dvdXQiLCJoZWFkZXIiLCJsb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==