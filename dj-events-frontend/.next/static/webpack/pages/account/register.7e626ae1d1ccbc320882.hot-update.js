"use strict";
self["webpackHotUpdate_N_E"]("pages/account/register",{

/***/ "./pages/account/register.js":
/*!***********************************!*\
  !*** ./pages/account/register.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RegisterPage; }
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


var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\account\\register.js",
    _s = $RefreshSig$();








function RegisterPage() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log({
      email: email,
      password: password
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "User Registration",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().auth),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUser, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, this), " Register"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "username",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "username",
            value: username,
            onChange: function onChange(e) {
              return setUsername(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "email",
            children: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
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
            lineNumber: 41,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
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
            lineNumber: 51,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "passwordConfirm",
            children: "Confirm Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "password",
            id: "passwordConfirm",
            value: passwordConfirm,
            onChange: function onChange(e) {
              return setPasswordConfirm(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Login",
          className: "btn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Don't have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/register",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, this);
}

_s(RegisterPage, "tRYla3vCO/TiaNXVkXSQty2VxO8=");

_c = RegisterPage;

var _c;

$RefreshReg$(_c, "RegisterPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9yZWdpc3Rlci43ZTYyNmFlMWQxY2NiYzMyMDg4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ05OLCtDQUFRLENBQUMsRUFBRCxDQURGO0FBQUEsTUFDL0JPLFFBRCtCO0FBQUEsTUFDckJDLFdBRHFCOztBQUFBLG1CQUVaUiwrQ0FBUSxDQUFDLEVBQUQsQ0FGSTtBQUFBLE1BRS9CUyxLQUYrQjtBQUFBLE1BRXhCQyxRQUZ3Qjs7QUFBQSxtQkFHTlYsK0NBQVEsQ0FBQyxFQUFELENBSEY7QUFBQSxNQUcvQlcsUUFIK0I7QUFBQSxNQUdyQkMsV0FIcUI7O0FBS3RDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMzQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVSLE1BQUFBLEtBQUssRUFBTEEsS0FBRjtBQUFTRSxNQUFBQSxRQUFRLEVBQVJBO0FBQVQsS0FBWjtBQUNBLEdBSEQ7O0FBS0Esc0JBQ0MsOERBQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUMsbUJBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRU4seUVBQWhCO0FBQUEsOEJBQ0M7QUFBQSxnQ0FDQyw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBS0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBT0M7QUFBTSxnQkFBUSxFQUFFUSxZQUFoQjtBQUFBLGdDQUNDO0FBQUEsa0NBQ0M7QUFBTyxtQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsTUFETjtBQUVDLGNBQUUsRUFBQyxVQUZKO0FBR0MsaUJBQUssRUFBRU4sUUFIUjtBQUlDLG9CQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxxQkFBT04sV0FBVyxDQUFDTSxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFXQztBQUFBLGtDQUNDO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFDQyxnQkFBSSxFQUFDLE9BRE47QUFFQyxjQUFFLEVBQUMsT0FGSjtBQUdDLGlCQUFLLEVBQUVYLEtBSFI7QUFJQyxvQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEscUJBQU9KLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQsZUFxQkM7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQ0MsZ0JBQUksRUFBQyxVQUROO0FBRUMsY0FBRSxFQUFDLFVBRko7QUFHQyxpQkFBSyxFQUFFVCxRQUhSO0FBSUMsb0JBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLHFCQUFPRixXQUFXLENBQUNFLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkQsZUErQkM7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsVUFETjtBQUVDLGNBQUUsRUFBQyxpQkFGSjtBQUdDLGlCQUFLLEVBQUVDLGVBSFI7QUFJQyxvQkFBUSxFQUFFLGtCQUFDUCxDQUFEO0FBQUEscUJBQU9RLGtCQUFrQixDQUFDUixDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUF6QjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0JELGVBeUNDO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDLE9BQTNCO0FBQW1DLG1CQUFTLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEQsZUFtREM7QUFBQSwyREFDd0IsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5ERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEyREE7O0dBckV1QmQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnQvcmVnaXN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFVc2VyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvQXV0aEZvcm0ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlclBhZ2UoKSB7XHJcbiBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5sb2coeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbiB9O1xyXG5cclxuIHJldHVybiAoXHJcbiAgPExheW91dCB0aXRsZT0nVXNlciBSZWdpc3RyYXRpb24nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9PlxyXG4gICAgPGgxPlxyXG4gICAgIDxGYVVzZXIgLz4gUmVnaXN0ZXJcclxuICAgIDwvaDE+XHJcblxyXG4gICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcblxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgIGlkPSd1c2VybmFtZSdcclxuICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgaWQ9J3Bhc3N3b3JkJ1xyXG4gICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZENvbmZpcm0nPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgaWQ9J3Bhc3N3b3JkQ29uZmlybSdcclxuICAgICAgIHZhbHVlPXtwYXNzd29yZENvbmZpcm19XHJcbiAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkQ29uZmlybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdMb2dpbicgY2xhc3NOYW1lPSdidG4nIC8+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgPHA+XHJcbiAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8TGluayBocmVmPScvYWNjb3VudC9yZWdpc3Rlcic+UmVnaXN0ZXI8L0xpbms+XHJcbiAgICA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmFVc2VyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkxpbmsiLCJMYXlvdXQiLCJzdHlsZXMiLCJSZWdpc3RlclBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmRDb25maXJtIiwic2V0UGFzc3dvcmRDb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==