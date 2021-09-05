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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      passwordConfirm = _useState4[0],
      setPasswordConfirm = _useState4[1];

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
          lineNumber: 24,
          columnNumber: 6
        }, this), " Register"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "username",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
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
            lineNumber: 32,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "email",
            children: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
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
            lineNumber: 42,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
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
            lineNumber: 52,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "passwordConfirm",
            children: "Confirm Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
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
            lineNumber: 62,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Register",
          className: "btn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Already have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/login",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 31
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9yZWdpc3Rlci4xMmZhOGJiNjczYjgxOWY1NjA5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ05OLCtDQUFRLENBQUMsRUFBRCxDQURGO0FBQUEsTUFDL0JPLFFBRCtCO0FBQUEsTUFDckJDLFdBRHFCOztBQUFBLG1CQUVaUiwrQ0FBUSxDQUFDLEVBQUQsQ0FGSTtBQUFBLE1BRS9CUyxLQUYrQjtBQUFBLE1BRXhCQyxRQUZ3Qjs7QUFBQSxtQkFHTlYsK0NBQVEsQ0FBQyxFQUFELENBSEY7QUFBQSxNQUcvQlcsUUFIK0I7QUFBQSxNQUdyQkMsV0FIcUI7O0FBQUEsbUJBSVFaLCtDQUFRLENBQUMsRUFBRCxDQUpoQjtBQUFBLE1BSS9CYSxlQUorQjtBQUFBLE1BSWRDLGtCQUpjOztBQU10QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFVixNQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0UsTUFBQUEsUUFBUSxFQUFSQTtBQUFULEtBQVo7QUFDQSxHQUhEOztBQUtBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQVEsU0FBSyxFQUFDLG1CQUFkO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUVOLHlFQUFoQjtBQUFBLDhCQUNDO0FBQUEsZ0NBQ0MsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUtDLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxlQU9DO0FBQU0sZ0JBQVEsRUFBRVUsWUFBaEI7QUFBQSxnQ0FDQztBQUFBLGtDQUNDO0FBQU8sbUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFDQyxnQkFBSSxFQUFDLE1BRE47QUFFQyxjQUFFLEVBQUMsVUFGSjtBQUdDLGlCQUFLLEVBQUVSLFFBSFI7QUFJQyxvQkFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEscUJBQU9SLFdBQVcsQ0FBQ1EsQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBV0M7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQ0MsZ0JBQUksRUFBQyxPQUROO0FBRUMsY0FBRSxFQUFDLE9BRko7QUFHQyxpQkFBSyxFQUFFYixLQUhSO0FBSUMsb0JBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLHFCQUFPTixRQUFRLENBQUNNLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhELGVBcUJDO0FBQUEsa0NBQ0M7QUFBTyxtQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsVUFETjtBQUVDLGNBQUUsRUFBQyxVQUZKO0FBR0MsaUJBQUssRUFBRVgsUUFIUjtBQUlDLG9CQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSxxQkFBT0osV0FBVyxDQUFDSSxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJELGVBK0JDO0FBQUEsa0NBQ0M7QUFBTyxtQkFBTyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFDQyxnQkFBSSxFQUFDLFVBRE47QUFFQyxjQUFFLEVBQUMsaUJBRko7QUFHQyxpQkFBSyxFQUFFVCxlQUhSO0FBSUMsb0JBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLHFCQUFPRixrQkFBa0IsQ0FBQ0UsQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBekI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRCxlQXlDQztBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLGVBQUssRUFBQyxVQUEzQjtBQUFzQyxtQkFBUyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELGVBbURDO0FBQUEsNkRBQzBCLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMkRBOztHQXRFdUJoQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC9yZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYVVzZXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9BdXRoRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyUGFnZSgpIHtcclxuIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuIGNvbnN0IFtwYXNzd29yZENvbmZpcm0sIHNldFBhc3N3b3JkQ29uZmlybV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5sb2coeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbiB9O1xyXG5cclxuIHJldHVybiAoXHJcbiAgPExheW91dCB0aXRsZT0nVXNlciBSZWdpc3RyYXRpb24nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9PlxyXG4gICAgPGgxPlxyXG4gICAgIDxGYVVzZXIgLz4gUmVnaXN0ZXJcclxuICAgIDwvaDE+XHJcblxyXG4gICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcblxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgIGlkPSd1c2VybmFtZSdcclxuICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgaWQ9J3Bhc3N3b3JkJ1xyXG4gICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZENvbmZpcm0nPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgaWQ9J3Bhc3N3b3JkQ29uZmlybSdcclxuICAgICAgIHZhbHVlPXtwYXNzd29yZENvbmZpcm19XHJcbiAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkQ29uZmlybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdSZWdpc3RlcicgY2xhc3NOYW1lPSdidG4nIC8+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgPHA+XHJcbiAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9Jy9hY2NvdW50L2xvZ2luJz5Mb2dpbjwvTGluaz5cclxuICAgIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGYVVzZXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiTGluayIsIkxheW91dCIsInN0eWxlcyIsIlJlZ2lzdGVyUGFnZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsInNldFBhc3N3b3JkQ29uZmlybSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9