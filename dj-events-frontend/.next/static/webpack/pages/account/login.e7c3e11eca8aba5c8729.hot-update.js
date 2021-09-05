"use strict";
self["webpackHotUpdate_N_E"]("pages/account/login",{

/***/ "./pages/account/login.js":
/*!********************************!*\
  !*** ./pages/account/login.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/AuthForm.module.css */ "./styles/AuthForm.module.css");
/* harmony import */ var _styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\account\\login.js",
    _s = $RefreshSig$();









function LoginPage() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.default),
      login = _useContext.login,
      error = _useContext.error;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return error && react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(error);
  });

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    login({
      email: email,
      password: password
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "User login",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().auth),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaUser, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, this), " Log In"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "email",
            children: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "email",
            id: "email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "password",
            id: "password",
            value: password,
            onChange: function onChange(e) {
              return setPassword(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Login",
          className: "btn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Don't have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/register",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, this);
}

_s(LoginPage, "QnBFtutiiaC48KCl/+dmtDm/M30=");

_c = LoginPage;

var _c;

$RefreshReg$(_c, "LoginPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9sb2dpbi5lN2MzZTExZWNhOGFiYTVjODcyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTVSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ1RQLCtDQUFRLENBQUMsRUFBRCxDQURDO0FBQUEsTUFDNUJRLEtBRDRCO0FBQUEsTUFDckJDLFFBRHFCOztBQUFBLG1CQUVIVCwrQ0FBUSxDQUFDLEVBQUQsQ0FGTDtBQUFBLE1BRTVCVSxRQUY0QjtBQUFBLE1BRWxCQyxXQUZrQjs7QUFBQSxvQkFJVlQsaURBQVUsQ0FBQ0cseURBQUQsQ0FKQTtBQUFBLE1BSTNCTyxLQUoyQixlQUkzQkEsS0FKMkI7QUFBQSxNQUlwQkMsS0FKb0IsZUFJcEJBLEtBSm9COztBQU1uQ1osRUFBQUEsZ0RBQVMsQ0FBQztBQUFBLFdBQU1ZLEtBQUssSUFBSWQsdURBQUEsQ0FBWWMsS0FBWixDQUFmO0FBQUEsR0FBRCxDQUFUOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMzQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FKLElBQUFBLEtBQUssQ0FBQztBQUFFSixNQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0UsTUFBQUEsUUFBUSxFQUFSQTtBQUFULEtBQUQsQ0FBTDtBQUNBLEdBSEQ7O0FBS0Esc0JBQ0MsOERBQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUMsWUFBZDtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFSix5RUFBaEI7QUFBQSw4QkFDQztBQUFBLGdDQUNDLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFLQyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsZUFPQztBQUFNLGdCQUFRLEVBQUVRLFlBQWhCO0FBQUEsZ0NBQ0M7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQ0MsZ0JBQUksRUFBQyxPQUROO0FBRUMsY0FBRSxFQUFDLE9BRko7QUFHQyxpQkFBSyxFQUFFTixLQUhSO0FBSUMsb0JBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLHFCQUFPTixRQUFRLENBQUNNLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBV0M7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQ0MsZ0JBQUksRUFBQyxVQUROO0FBRUMsY0FBRSxFQUFDLFVBRko7QUFHQyxpQkFBSyxFQUFFVCxRQUhSO0FBSUMsb0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLHFCQUFPSixXQUFXLENBQUNJLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRCxlQXFCQztBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLGVBQUssRUFBQyxPQUEzQjtBQUFtQyxtQkFBUyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELGVBK0JDO0FBQUEsMkRBQ3dCLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBdUNBOztHQXBEdUJaOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50L2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9BdXRoRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gY29uc3QgeyBsb2dpbiwgZXJyb3IgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuIHVzZUVmZmVjdCgoKSA9PiBlcnJvciAmJiB0b2FzdC5lcnJvcihlcnJvcikpO1xyXG5cclxuIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gfTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9J1VzZXIgbG9naW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9PlxyXG4gICAgPGgxPlxyXG4gICAgIDxGYVVzZXIgLz4gTG9nIEluXHJcbiAgICA8L2gxPlxyXG5cclxuICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICBpZD0nZW1haWwnXHJcbiAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICBpZD0ncGFzc3dvcmQnXHJcbiAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J0xvZ2luJyBjbGFzc05hbWU9J2J0bicgLz5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgICA8cD5cclxuICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9Jy9hY2NvdW50L3JlZ2lzdGVyJz5SZWdpc3RlcjwvTGluaz5cclxuICAgIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGYVVzZXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiTGluayIsIkxheW91dCIsIkF1dGhDb250ZXh0Iiwic3R5bGVzIiwiTG9naW5QYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dpbiIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==