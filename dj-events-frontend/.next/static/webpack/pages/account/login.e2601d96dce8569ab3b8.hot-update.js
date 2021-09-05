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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/AuthForm.module.css */ "./styles/AuthForm.module.css");
/* harmony import */ var _styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5__);
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

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log({
      email: email,
      password: password
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "User login",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().auth),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUser, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, this), " Log In"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "email",
            children: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
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
            lineNumber: 30,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
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
            lineNumber: 40,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Login",
          className: "btn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Don't have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/register",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

_s(LoginPage, "TSZhDBNy8CmbxXgprY/vvMmTG1Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9sb2dpbi5lMjYwMWQ5NmRjZTg1NjlhYjNiOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ1ROLCtDQUFRLENBQUMsRUFBRCxDQURDO0FBQUEsTUFDNUJPLEtBRDRCO0FBQUEsTUFDckJDLFFBRHFCOztBQUFBLG1CQUVIUiwrQ0FBUSxDQUFDLEVBQUQsQ0FGTDtBQUFBLE1BRTVCUyxRQUY0QjtBQUFBLE1BRWxCQyxXQUZrQjs7QUFJbkMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVIsTUFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNFLE1BQUFBLFFBQVEsRUFBUkE7QUFBVCxLQUFaO0FBQ0EsR0FIRDs7QUFLQSxzQkFDQyw4REFBQyx1REFBRDtBQUFRLFNBQUssRUFBQyxZQUFkO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUVKLHlFQUFoQjtBQUFBLDhCQUNDO0FBQUEsZ0NBQ0MsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUtDLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxlQU9DO0FBQU0sZ0JBQVEsRUFBRU0sWUFBaEI7QUFBQSxnQ0FDQztBQUFBLGtDQUNDO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFDQyxnQkFBSSxFQUFDLE9BRE47QUFFQyxjQUFFLEVBQUMsT0FGSjtBQUdDLGlCQUFLLEVBQUVKLEtBSFI7QUFJQyxvQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEscUJBQU9KLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFXQztBQUFBLGtDQUNDO0FBQU8sbUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFDQyxnQkFBSSxFQUFDLFVBRE47QUFFQyxjQUFFLEVBQUMsVUFGSjtBQUdDLGlCQUFLLEVBQUVULFFBSFI7QUFJQyxvQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEscUJBQU9GLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhELGVBcUJDO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDLE9BQTNCO0FBQW1DLG1CQUFTLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEQsZUErQkM7QUFBQSwyREFDd0IsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF1Q0E7O0dBaER1Qlo7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnQvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFVc2VyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvQXV0aEZvcm0ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XHJcbiBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnNvbGUubG9nKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gfTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9J1VzZXIgbG9naW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9PlxyXG4gICAgPGgxPlxyXG4gICAgIDxGYVVzZXIgLz4gTG9nIEluXHJcbiAgICA8L2gxPlxyXG5cclxuICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICBpZD0nZW1haWwnXHJcbiAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICBpZD0ncGFzc3dvcmQnXHJcbiAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J0xvZ2luJyBjbGFzc05hbWU9J2J0bicgLz5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgICA8cD5cclxuICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9Jy9hY2NvdW50L3JlZ2lzdGVyJz5SZWdpc3RlcjwvTGluaz5cclxuICAgIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGYVVzZXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiTGluayIsIkxheW91dCIsInN0eWxlcyIsIkxvZ2luUGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImF1dGgiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=