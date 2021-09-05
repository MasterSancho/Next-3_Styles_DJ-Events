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
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "User login",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().auth),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUser, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, this), " Log In"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "email",
            children: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
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
            lineNumber: 29,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
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
            lineNumber: 39,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9sb2dpbi43MWY4NjIzMGRiMDZlNmJiMmU2YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ1ROLCtDQUFRLENBQUMsRUFBRCxDQURDO0FBQUEsTUFDNUJPLEtBRDRCO0FBQUEsTUFDckJDLFFBRHFCOztBQUFBLG1CQUVIUiwrQ0FBUSxDQUFDLEVBQUQsQ0FGTDtBQUFBLE1BRTVCUyxRQUY0QjtBQUFBLE1BRWxCQyxXQUZrQjs7QUFJbkMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxHQUZEOztBQUlBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRVIseUVBQWhCO0FBQUEsOEJBQ0M7QUFBQSxnQ0FDQyw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBS0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBT0M7QUFBTSxnQkFBUSxFQUFFTSxZQUFoQjtBQUFBLGdDQUNDO0FBQUEsa0NBQ0M7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsT0FETjtBQUVDLGNBQUUsRUFBQyxPQUZKO0FBR0MsaUJBQUssRUFBRUosS0FIUjtBQUlDLG9CQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSxxQkFBT0osUUFBUSxDQUFDSSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQVdDO0FBQUEsa0NBQ0M7QUFBTyxtQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsVUFETjtBQUVDLGNBQUUsRUFBQyxVQUZKO0FBR0MsaUJBQUssRUFBRVAsUUFIUjtBQUlDLG9CQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxxQkFBT0YsV0FBVyxDQUFDRSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBaUNBOztHQXpDdUJWOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50L2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0F1dGhGb3JtLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuIH07XHJcblxyXG4gcmV0dXJuIChcclxuICA8TGF5b3V0IHRpdGxlPSdVc2VyIGxvZ2luJz5cclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRofT5cclxuICAgIDxoMT5cclxuICAgICA8RmFVc2VyIC8+IExvZyBJblxyXG4gICAgPC9oMT5cclxuXHJcbiAgICA8VG9hc3RDb250YWluZXIgLz5cclxuXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgaWQ9J3Bhc3N3b3JkJ1xyXG4gICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmFVc2VyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkxpbmsiLCJMYXlvdXQiLCJzdHlsZXMiLCJMb2dpblBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=