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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/AuthForm.module.css */ "./styles/AuthForm.module.css");
/* harmony import */ var _styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6__);
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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      passwordConfirm = _useState4[0],
      setPasswordConfirm = _useState4[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error('Passwords do not match!');
      return;
    }

    console.log({
      email: email,
      password: password
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "User Registration",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().auth),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUser, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, this), " Register"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "username",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
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
            lineNumber: 38,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "email",
            children: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
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
            lineNumber: 48,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
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
            lineNumber: 58,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "passwordConfirm",
            children: "Confirm Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
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
            lineNumber: 68,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Register",
          className: "btn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Already have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/login",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 31
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, this);
}

_s(RegisterPage, "Ke5pyXTJSyG3uPKBuAzgKJr0r6g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9yZWdpc3Rlci5kMTk4MjEzNWE2NmEzZGRmYTVkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ05OLCtDQUFRLENBQUMsRUFBRCxDQURGO0FBQUEsTUFDL0JPLFFBRCtCO0FBQUEsTUFDckJDLFdBRHFCOztBQUFBLG1CQUVaUiwrQ0FBUSxDQUFDLEVBQUQsQ0FGSTtBQUFBLE1BRS9CUyxLQUYrQjtBQUFBLE1BRXhCQyxRQUZ3Qjs7QUFBQSxtQkFHTlYsK0NBQVEsQ0FBQyxFQUFELENBSEY7QUFBQSxNQUcvQlcsUUFIK0I7QUFBQSxNQUdyQkMsV0FIcUI7O0FBQUEsbUJBSVFaLCtDQUFRLENBQUMsRUFBRCxDQUpoQjtBQUFBLE1BSS9CYSxlQUorQjtBQUFBLE1BSWRDLGtCQUpjOztBQU10QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFFQSxRQUFJTixRQUFRLEtBQUtFLGVBQWpCLEVBQWtDO0FBQ2pDZCxNQUFBQSx1REFBQSxDQUFZLHlCQUFaO0FBQ0E7QUFDQTs7QUFFRG9CLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVYLE1BQUFBLEtBQUssRUFBTEEsS0FBRjtBQUFTRSxNQUFBQSxRQUFRLEVBQVJBO0FBQVQsS0FBWjtBQUNBLEdBVEQ7O0FBV0Esc0JBQ0MsOERBQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUMsbUJBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRU4seUVBQWhCO0FBQUEsOEJBQ0M7QUFBQSxnQ0FDQyw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBS0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBT0M7QUFBTSxnQkFBUSxFQUFFVSxZQUFoQjtBQUFBLGdDQUNDO0FBQUEsa0NBQ0M7QUFBTyxtQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsTUFETjtBQUVDLGNBQUUsRUFBQyxVQUZKO0FBR0MsaUJBQUssRUFBRVIsUUFIUjtBQUlDLG9CQUFRLEVBQUUsa0JBQUNTLENBQUQ7QUFBQSxxQkFBT1IsV0FBVyxDQUFDUSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFXQztBQUFBLGtDQUNDO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFDQyxnQkFBSSxFQUFDLE9BRE47QUFFQyxjQUFFLEVBQUMsT0FGSjtBQUdDLGlCQUFLLEVBQUVkLEtBSFI7QUFJQyxvQkFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEscUJBQU9OLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQsZUFxQkM7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQ0MsZ0JBQUksRUFBQyxVQUROO0FBRUMsY0FBRSxFQUFDLFVBRko7QUFHQyxpQkFBSyxFQUFFWixRQUhSO0FBSUMsb0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLHFCQUFPSixXQUFXLENBQUNJLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkQsZUErQkM7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsVUFETjtBQUVDLGNBQUUsRUFBQyxpQkFGSjtBQUdDLGlCQUFLLEVBQUVWLGVBSFI7QUFJQyxvQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEscUJBQU9GLGtCQUFrQixDQUFDRSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUF6QjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0JELGVBeUNDO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDLFVBQTNCO0FBQXNDLG1CQUFTLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEQsZUFtREM7QUFBQSw2REFDMEIsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5ERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEyREE7O0dBNUV1QmpCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50L3JlZ2lzdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0F1dGhGb3JtLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJQYWdlKCkge1xyXG4gY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gY29uc3QgW3Bhc3N3b3JkQ29uZmlybSwgc2V0UGFzc3dvcmRDb25maXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcclxuICAgdG9hc3QuZXJyb3IoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2ghJyk7XHJcbiAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gfTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9J1VzZXIgUmVnaXN0cmF0aW9uJz5cclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRofT5cclxuICAgIDxoMT5cclxuICAgICA8RmFVc2VyIC8+IFJlZ2lzdGVyXHJcbiAgICA8L2gxPlxyXG5cclxuICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICBpZD0ndXNlcm5hbWUnXHJcbiAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgIGlkPSdlbWFpbCdcclxuICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgIGlkPSdwYXNzd29yZCdcclxuICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmRDb25maXJtJz5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgIGlkPSdwYXNzd29yZENvbmZpcm0nXHJcbiAgICAgICB2YWx1ZT17cGFzc3dvcmRDb25maXJtfVxyXG4gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZENvbmZpcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nUmVnaXN0ZXInIGNsYXNzTmFtZT0nYnRuJyAvPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDxwPlxyXG4gICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8TGluayBocmVmPScvYWNjb3VudC9sb2dpbic+TG9naW48L0xpbms+XHJcbiAgICA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmFVc2VyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkxpbmsiLCJMYXlvdXQiLCJzdHlsZXMiLCJSZWdpc3RlclBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJzZXRQYXNzd29yZENvbmZpcm0iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhdXRoIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9