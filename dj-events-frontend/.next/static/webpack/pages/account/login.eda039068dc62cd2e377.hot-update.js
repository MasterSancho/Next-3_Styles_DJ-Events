self["webpackHotUpdate_N_E"]("pages/account/login",{

/***/ "./pages/account/login.js":
/*!********************************!*\
  !*** ./pages/account/login.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "User login",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().auth)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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


/***/ }),

/***/ "./styles/AuthForm.module.css":
/*!************************************!*\
  !*** ./styles/AuthForm.module.css ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./AuthForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/AuthForm.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./AuthForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/AuthForm.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./AuthForm.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/AuthForm.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/AuthForm.module.css":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/AuthForm.module.css ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".AuthForm_auth__2lABj {\r\n max-width: 500px;\r\n margin: auto;\r\n padding: 30px;\r\n -webkit-box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);\r\n         box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);\r\n}\r\n\r\n.AuthForm_auth__2lABj label {\r\n display: block;\r\n margin-bottom: 10px;\r\n}\r\n\r\n.AuthForm_auth__2lABj input[type='text'],\r\n.AuthForm_auth__2lABj input[type='email'],\r\n.AuthForm_auth__2lABj input[type='password'] {\r\n display: block;\r\n width: 100%;\r\n height: 40px;\r\n padding: 5px;\r\n font-size: 18px;\r\n}\r\n\r\n.AuthForm_auth__2lABj input[type='submit'] {\r\n margin-top: 20px;\r\n width: 100%;\r\n font-size: 17px;\r\n}\r\n\r\n.AuthForm_auth__2lABj div {\r\n margin-bottom: 20px;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/AuthForm.module.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;CAChB,YAAY;CACZ,aAAa;CACb,4DAAoD;SAApD,oDAAoD;AACrD;;AAEA;CACC,cAAc;CACd,mBAAmB;AACpB;;AAEA;;;CAGC,cAAc;CACd,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,WAAW;CACX,eAAe;AAChB;;AAEA;CACC,mBAAmB;AACpB","sourcesContent":[".auth {\r\n max-width: 500px;\r\n margin: auto;\r\n padding: 30px;\r\n box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);\r\n}\r\n\r\n.auth label {\r\n display: block;\r\n margin-bottom: 10px;\r\n}\r\n\r\n.auth input[type='text'],\r\n.auth input[type='email'],\r\n.auth input[type='password'] {\r\n display: block;\r\n width: 100%;\r\n height: 40px;\r\n padding: 5px;\r\n font-size: 18px;\r\n}\r\n\r\n.auth input[type='submit'] {\r\n margin-top: 20px;\r\n width: 100%;\r\n font-size: 17px;\r\n}\r\n\r\n.auth div {\r\n margin-bottom: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"auth": "AuthForm_auth__2lABj"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9sb2dpbi5lZGEwMzkwNjhkYzYyY2QyZTM3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU1MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNUTiwrQ0FBUSxDQUFDLEVBQUQsQ0FEQztBQUFBLE1BQzVCTyxLQUQ0QjtBQUFBLE1BQ3JCQyxRQURxQjs7QUFBQSxtQkFFSFIsK0NBQVEsQ0FBQyxFQUFELENBRkw7QUFBQSxNQUU1QlMsUUFGNEI7QUFBQSxNQUVsQkMsV0FGa0I7O0FBSW5DLHNCQUNDLDhEQUFDLHVEQUFEO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRUwseUVBQVdNO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLQTs7R0FUdUJMOztLQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J4QixVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLDJhQUFpTjs7QUFFblA7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sMmFBQWlOO0FBQ3ZOO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsMmFBQWlOOztBQUUzTzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7OztBQ25GQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsaUVBQWlFLHNCQUFzQixrQkFBa0IsbUJBQW1CLGtFQUFrRSxrRUFBa0UsS0FBSyxxQ0FBcUMsb0JBQW9CLHlCQUF5QixLQUFLLGlKQUFpSixvQkFBb0IsaUJBQWlCLGtCQUFrQixrQkFBa0IscUJBQXFCLEtBQUssb0RBQW9ELHNCQUFzQixpQkFBaUIscUJBQXFCLEtBQUssbUNBQW1DLHlCQUF5QixLQUFLLFdBQVcsMkZBQTJGLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGlDQUFpQyxzQkFBc0Isa0JBQWtCLG1CQUFtQiwwREFBMEQsS0FBSyxxQkFBcUIsb0JBQW9CLHlCQUF5QixLQUFLLGlHQUFpRyxvQkFBb0IsaUJBQWlCLGtCQUFrQixrQkFBa0IscUJBQXFCLEtBQUssb0NBQW9DLHNCQUFzQixpQkFBaUIscUJBQXFCLEtBQUssbUJBQW1CLHlCQUF5QixLQUFLLHVCQUF1QjtBQUNocUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50L2xvZ2luLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvQXV0aEZvcm0ubW9kdWxlLmNzcz8xNDQ3Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvQXV0aEZvcm0ubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYVVzZXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9BdXRoRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gcmV0dXJuIChcclxuICA8TGF5b3V0IHRpdGxlPSdVc2VyIGxvZ2luJz5cclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRofT48L2Rpdj5cclxuICA8L0xheW91dD5cclxuICk7XHJcbn1cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0F1dGhGb3JtLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0F1dGhGb3JtLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0F1dGhGb3JtLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkF1dGhGb3JtX2F1dGhfXzJsQUJqIHtcXHJcXG4gbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gbWFyZ2luOiBhdXRvO1xcclxcbiBwYWRkaW5nOiAzMHB4O1xcclxcbiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC41Mik7XFxyXFxuICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjUyKTtcXHJcXG59XFxyXFxuXFxyXFxuLkF1dGhGb3JtX2F1dGhfXzJsQUJqIGxhYmVsIHtcXHJcXG4gZGlzcGxheTogYmxvY2s7XFxyXFxuIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBpbnB1dFt0eXBlPSd0ZXh0J10sXFxyXFxuLkF1dGhGb3JtX2F1dGhfXzJsQUJqIGlucHV0W3R5cGU9J2VtYWlsJ10sXFxyXFxuLkF1dGhGb3JtX2F1dGhfXzJsQUJqIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10ge1xcclxcbiBkaXNwbGF5OiBibG9jaztcXHJcXG4gd2lkdGg6IDEwMCU7XFxyXFxuIGhlaWdodDogNDBweDtcXHJcXG4gcGFkZGluZzogNXB4O1xcclxcbiBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuIHdpZHRoOiAxMDAlO1xcclxcbiBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5BdXRoRm9ybV9hdXRoX18ybEFCaiBkaXYge1xcclxcbiBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0F1dGhGb3JtLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGFBQWE7Q0FDYiw0REFBb0Q7U0FBcEQsb0RBQW9EO0FBQ3JEOztBQUVBO0NBQ0MsY0FBYztDQUNkLG1CQUFtQjtBQUNwQjs7QUFFQTs7O0NBR0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmF1dGgge1xcclxcbiBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiBtYXJnaW46IGF1dG87XFxyXFxuIHBhZGRpbmc6IDMwcHg7XFxyXFxuIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC41Mik7XFxyXFxufVxcclxcblxcclxcbi5hdXRoIGxhYmVsIHtcXHJcXG4gZGlzcGxheTogYmxvY2s7XFxyXFxuIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hdXRoIGlucHV0W3R5cGU9J3RleHQnXSxcXHJcXG4uYXV0aCBpbnB1dFt0eXBlPSdlbWFpbCddLFxcclxcbi5hdXRoIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10ge1xcclxcbiBkaXNwbGF5OiBibG9jaztcXHJcXG4gd2lkdGg6IDEwMCU7XFxyXFxuIGhlaWdodDogNDBweDtcXHJcXG4gcGFkZGluZzogNXB4O1xcclxcbiBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5hdXRoIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gd2lkdGg6IDEwMCU7XFxyXFxuIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGggZGl2IHtcXHJcXG4gbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYXV0aFwiOiBcIkF1dGhGb3JtX2F1dGhfXzJsQUJqXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbIkZhVXNlciIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJMaW5rIiwiTGF5b3V0Iiwic3R5bGVzIiwiTG9naW5QYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==