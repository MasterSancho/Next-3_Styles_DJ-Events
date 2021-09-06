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
/* harmony export */   "NEXT_URL": () => (/* binding */ NEXT_URL),
/* harmony export */   "PER_PAGE": () => (/* binding */ PER_PAGE)
/* harmony export */ });
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => checkUserLoggedIn(), []); // Register user

  const register = async user => {
    console.log(user);
  }; // Login user


  const login = async ({
    email: identifier,
    password
  }) => {
    const res = await fetch(`${config__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier,
        password
      })
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
  }; // Logout user


  const logout = async () => {
    console.log('Logout');
  }; // Check if user is logged in


  const checkUserLoggedIn = async user => {
    const res = await fetch(`${config__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
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
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBQUEsSUFBRjtBQUFRRSxNQUFBQSxLQUFSO0FBQWVJLE1BQUFBLFFBQWY7QUFBeUJHLE1BQUFBLEtBQXpCO0FBQWdDZ0IsTUFBQUE7QUFBaEMsS0FBN0I7QUFBQSxjQUNFMUI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFLQSxDQTFETTtBQTREUCxpRUFBZUYsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTs7QUFFQSxTQUFTNkIsS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3hDLHNCQUNDLDhEQUFDLDhEQUFEO0FBQUEsMkJBQ0MsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0E7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxyXG4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3JztcclxuXHJcbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9XHJcbiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQgY29uc3QgUEVSX1BBR0UgPSAyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IE5FWFRfVVJMIH0gZnJvbSAnY29uZmlnJztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiB1c2VFZmZlY3QoKCkgPT4gY2hlY2tVc2VyTG9nZ2VkSW4oKSwgW10pO1xyXG5cclxuIC8vIFJlZ2lzdGVyIHVzZXJcclxuIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxuIH07XHJcblxyXG4gLy8gTG9naW4gdXNlclxyXG4gY29uc3QgbG9naW4gPSBhc3luYyAoeyBlbWFpbDogaWRlbnRpZmllciwgcGFzc3dvcmQgfSkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvbG9naW5gLCB7XHJcbiAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICB9LFxyXG4gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIGlmIChyZXMub2spIHtcclxuICAgc2V0VXNlcihkYXRhLnVzZXIpO1xyXG4gICByb3V0ZXIucHVzaCgnL2FjY291bnQvZGFzaGJvYXJkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgfVxyXG4gfTtcclxuXHJcbiAvLyBMb2dvdXQgdXNlclxyXG4gY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdMb2dvdXQnKTtcclxuIH07XHJcblxyXG4gLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cclxuIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL3VzZXJgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgaWYgKHJlcy5vaykge1xyXG4gICBzZXRVc2VyKGRhdGEudXNlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgc2V0VXNlcihudWxsKTtcclxuICB9XHJcbiB9O1xyXG5cclxuIHJldHVybiAoXHJcbiAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGVycm9yLCByZWdpc3RlciwgbG9naW4sIGxvZ291dCB9fT5cclxuICAge2NoaWxkcmVufVxyXG4gIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbiIsImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuIHJldHVybiAoXG4gIDxBdXRoUHJvdmlkZXI+XG4gICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvQXV0aFByb3ZpZGVyPlxuICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJORVhUX1VSTCIsIk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCIsIlBFUl9QQUdFIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImNoZWNrVXNlckxvZ2dlZEluIiwicmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJlbWFpbCIsImlkZW50aWZpZXIiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsInB1c2giLCJtZXNzYWdlIiwibG9nb3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9