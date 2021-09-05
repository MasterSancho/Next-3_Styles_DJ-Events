(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "PER_PAGE": () => (/* binding */ PER_PAGE)
/* harmony export */ });
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const PER_PAGE = 2;

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config */ "./config/index.js");

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\context\\AuthContext.js";



const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Register user

  const register = async user => {
    console.log(user);
  }; // Login user


  const login = async ({
    email: identifier,
    password
  }) => {
    console.log({
      identifier,
      password
    });
  }; // Logout user


  const logout = async () => {
    console.log('Logout');
  }; // Check if user is


  const checkUserLoggedIn = async user => {
    console.log('Check');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      user,
      error,
      register,
      login,
      logout
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQ25CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBRDdCO0FBR0EsTUFBTUMsUUFBUSxHQUFHLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTtBQUNBO0FBRUEsTUFBTUssV0FBVyxnQkFBR0osb0RBQWEsRUFBakM7QUFFTyxNQUFNSyxZQUFZLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFDN0MsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCUCwrQ0FBUSxDQUFDLElBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1EsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JULCtDQUFRLENBQUMsSUFBRCxDQUFsQyxDQUY2QyxDQUk3Qzs7QUFDQSxRQUFNVSxRQUFRLEdBQUcsTUFBT0osSUFBUCxJQUFnQjtBQUNoQ0ssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFDQSxHQUZELENBTDZDLENBUzdDOzs7QUFDQSxRQUFNTyxLQUFLLEdBQUcsT0FBTztBQUFFQyxJQUFBQSxLQUFLLEVBQUVDLFVBQVQ7QUFBcUJDLElBQUFBO0FBQXJCLEdBQVAsS0FBMkM7QUFDeERMLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVHLE1BQUFBLFVBQUY7QUFBY0MsTUFBQUE7QUFBZCxLQUFaO0FBQ0EsR0FGRCxDQVY2QyxDQWM3Qzs7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLFlBQVk7QUFDMUJOLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxHQUZELENBZjZDLENBbUI3Qzs7O0FBQ0EsUUFBTU0saUJBQWlCLEdBQUcsTUFBT1osSUFBUCxJQUFnQjtBQUN6Q0ssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0MsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVOLE1BQUFBLElBQUY7QUFBUUUsTUFBQUEsS0FBUjtBQUFlRSxNQUFBQSxRQUFmO0FBQXlCRyxNQUFBQSxLQUF6QjtBQUFnQ0ksTUFBQUE7QUFBaEMsS0FBN0I7QUFBQSxjQUNFWjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUtBLENBN0JNO0FBK0JQLGlFQUFlRixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBLFNBQVNnQixLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDeEMsc0JBQ0MsOERBQUMsOERBQUQ7QUFBQSwyQkFDQyw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLQTs7QUFFRCxpRUFBZUYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9XHJcbiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBFUl9QQUdFID0gMjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnY29uZmlnJztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAvLyBSZWdpc3RlciB1c2VyXHJcbiBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgY29uc29sZS5sb2codXNlcik7XHJcbiB9O1xyXG5cclxuIC8vIExvZ2luIHVzZXJcclxuIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWw6IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyh7IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pO1xyXG4gfTtcclxuXHJcbiAvLyBMb2dvdXQgdXNlclxyXG4gY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdMb2dvdXQnKTtcclxuIH07XHJcblxyXG4gLy8gQ2hlY2sgaWYgdXNlciBpc1xyXG4gY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAodXNlcikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdDaGVjaycpO1xyXG4gfTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfX0+XHJcbiAgIHtjaGlsZHJlbn1cclxuICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG4iLCJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiByZXR1cm4gKFxuICA8QXV0aFByb3ZpZGVyPlxuICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L0F1dGhQcm92aWRlcj5cbiApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiUEVSX1BBR0UiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwicmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJlbWFpbCIsImlkZW50aWZpZXIiLCJwYXNzd29yZCIsImxvZ291dCIsImNoZWNrVXNlckxvZ2dlZEluIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9