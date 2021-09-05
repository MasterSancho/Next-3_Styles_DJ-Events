"use strict";
self["webpackHotUpdate_N_E"]("pages/account/register",{

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! config */ "./config/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\context\\AuthContext.js",
    _this = undefined,
    _s = $RefreshSig$();




var AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();
var AuthProvider = function AuthProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      error = _useState2[0],
      setError = _useState2[1]; // Register user


  var register = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(user) {
      return C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(user);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function register(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // Login user


  var login = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref3) {
      var identifier, password, res;
      return C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              identifier = _ref3.email, password = _ref3.password;
              _context2.next = 3;
              return fetch("".concat(config__WEBPACK_IMPORTED_MODULE_5__.NEXT_URL, "/api/login"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  identifier: identifier,
                  password: password
                })
              });

            case 3:
              res = _context2.sent;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function login(_x2) {
      return _ref4.apply(this, arguments);
    };
  }(); // Logout user


  var logout = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('Logout');

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function logout() {
      return _ref5.apply(this, arguments);
    };
  }(); // Check if user is


  var checkUserLoggedIn = /*#__PURE__*/function () {
    var _ref6 = (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(user) {
      return C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('Check');

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function checkUserLoggedIn(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      user: user,
      error: error,
      register: register,
      login: login,
      logout: logout
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, _this);
};

_s(AuthProvider, "v7rnY3wB8K8bJ5T16BSeNVjHHLs=");

_c = AuthProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

var _c;

$RefreshReg$(_c, "AuthProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9yZWdpc3Rlci4yMTQyMTJmODMyMWIyOTE0ZGQ3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUssV0FBVyxnQkFBR0wsb0RBQWEsRUFBakM7QUFFTyxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDckJOLCtDQUFRLENBQUMsSUFBRCxDQURhO0FBQUEsTUFDdENPLElBRHNDO0FBQUEsTUFDaENDLE9BRGdDOztBQUFBLG1CQUVuQlIsK0NBQVEsQ0FBQyxJQUFELENBRlc7QUFBQSxNQUV0Q1MsS0FGc0M7QUFBQSxNQUUvQkMsUUFGK0Isa0JBSTdDOzs7QUFDQSxNQUFNQyxRQUFRO0FBQUEsb1dBQUcsaUJBQU9KLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkssY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7O0FBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJJLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZCxDQUw2QyxDQVM3Qzs7O0FBQ0EsTUFBTUcsS0FBSztBQUFBLG9XQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQkMsY0FBQUEsVUFBaEIsU0FBU0MsS0FBVCxFQUE0QkMsUUFBNUIsU0FBNEJBLFFBQTVCO0FBQUE7QUFBQSxxQkFDS0MsS0FBSyxXQUFJZiw0Q0FBSixpQkFBMEI7QUFDaERnQixnQkFBQUEsTUFBTSxFQUFFLE1BRHdDO0FBRWhEQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Isa0NBQWdCO0FBRFIsaUJBRnVDO0FBS2hEQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFUixrQkFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNFLGtCQUFBQSxRQUFRLEVBQVJBO0FBQWQsaUJBQWY7QUFMMEMsZUFBMUIsQ0FEVjs7QUFBQTtBQUNQTyxjQUFBQSxHQURPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxWLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWCxDQVY2QyxDQW9CN0M7OztBQUNBLE1BQU1XLE1BQU07QUFBQSxvV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RiLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7O0FBRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTlksTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaLENBckI2QyxDQXlCN0M7OztBQUNBLE1BQU1DLGlCQUFpQjtBQUFBLG9XQUFHLGtCQUFPbkIsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCSyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaOztBQUR5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQmEsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQUlBLHNCQUNDLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFbkIsTUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFFLE1BQUFBLEtBQUssRUFBTEEsS0FBUjtBQUFlRSxNQUFBQSxRQUFRLEVBQVJBLFFBQWY7QUFBeUJHLE1BQUFBLEtBQUssRUFBTEEsS0FBekI7QUFBZ0NXLE1BQUFBLE1BQU0sRUFBTkE7QUFBaEMsS0FBN0I7QUFBQSxjQUNFbkI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQW5DTTs7R0FBTUQ7O0tBQUFBO0FBcUNiLCtEQUFlRCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBORVhUX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gLy8gUmVnaXN0ZXIgdXNlclxyXG4gY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gfTtcclxuXHJcbiAvLyBMb2dpbiB1c2VyXHJcbiBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsOiBpZGVudGlmaWVyLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dpbmAsIHtcclxuICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgIH0sXHJcbiAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSksXHJcbiAgfSk7XHJcbiB9O1xyXG5cclxuIC8vIExvZ291dCB1c2VyXHJcbiBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0xvZ291dCcpO1xyXG4gfTtcclxuXHJcbiAvLyBDaGVjayBpZiB1c2VyIGlzXHJcbiBjb25zdCBjaGVja1VzZXJMb2dnZWRJbiA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0NoZWNrJyk7XHJcbiB9O1xyXG5cclxuIHJldHVybiAoXHJcbiAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGVycm9yLCByZWdpc3RlciwgbG9naW4sIGxvZ291dCB9fT5cclxuICAge2NoaWxkcmVufVxyXG4gIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJORVhUX1VSTCIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsImlkZW50aWZpZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJsb2dvdXQiLCJjaGVja1VzZXJMb2dnZWRJbiJdLCJzb3VyY2VSb290IjoiIn0=