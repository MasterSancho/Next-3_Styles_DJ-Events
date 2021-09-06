"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

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
      setError = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return checkUserLoggedIn();
  }, []); // Register user

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
      var identifier, password, res, data;
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
              _context2.next = 6;
              return res.json();

            case 6:
              data = _context2.sent;
              console.log(data);

              if (res.ok) {
                setUser(data.user);
                router.push('/account/dashboard');
              } else {
                setError(data.message);
                setError(null);
              }

            case 9:
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
  }(); // Check if user is logged in


  var checkUserLoggedIn = /*#__PURE__*/function () {
    var _ref6 = (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(user) {
      var res, data;
      return C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch("".concat(config__WEBPACK_IMPORTED_MODULE_5__.NEXT_URL, "/api/user"));

            case 2:
              res = _context4.sent;
              _context4.next = 5;
              return res.json();

            case 5:
              data = _context4.sent;

              if (res.ok) {
                setUser(data.user);
              } else {
                setUser(null);
              }

            case 7:
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
    lineNumber: 61,
    columnNumber: 3
  }, _this);
};

_s(AuthProvider, "YsCDDfjtsa03iRyjr2jNLxLWeXI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44OTA4NGZkMzI0NWViZGIzMDE0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUssV0FBVyxnQkFBR0wsb0RBQWEsRUFBakM7QUFFTyxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDckJOLCtDQUFRLENBQUMsSUFBRCxDQURhO0FBQUEsTUFDdENPLElBRHNDO0FBQUEsTUFDaENDLE9BRGdDOztBQUFBLG1CQUVuQlIsK0NBQVEsQ0FBQyxJQUFELENBRlc7QUFBQSxNQUV0Q1MsS0FGc0M7QUFBQSxNQUUvQkMsUUFGK0I7O0FBSTdDLE1BQU1DLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEI7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQztBQUFBLFdBQU1XLGlCQUFpQixFQUF2QjtBQUFBLEdBQUQsRUFBNEIsRUFBNUIsQ0FBVCxDQU42QyxDQVE3Qzs7QUFDQSxNQUFNQyxRQUFRO0FBQUEsb1dBQUcsaUJBQU9OLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQk8sY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7O0FBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJNLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZCxDQVQ2QyxDQWE3Qzs7O0FBQ0EsTUFBTUcsS0FBSztBQUFBLG9XQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQkMsY0FBQUEsVUFBaEIsU0FBU0MsS0FBVCxFQUE0QkMsUUFBNUIsU0FBNEJBLFFBQTVCO0FBQUE7QUFBQSxxQkFDS0MsS0FBSyxXQUFJakIsNENBQUosaUJBQTBCO0FBQ2hEa0IsZ0JBQUFBLE1BQU0sRUFBRSxNQUR3QztBQUVoREMsZ0JBQUFBLE9BQU8sRUFBRTtBQUNSLGtDQUFnQjtBQURSLGlCQUZ1QztBQUtoREMsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRVIsa0JBQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjRSxrQkFBQUEsUUFBUSxFQUFSQTtBQUFkLGlCQUFmO0FBTDBDLGVBQTFCLENBRFY7O0FBQUE7QUFDUE8sY0FBQUEsR0FETztBQUFBO0FBQUEscUJBU01BLEdBQUcsQ0FBQ0MsSUFBSixFQVROOztBQUFBO0FBU1BDLGNBQUFBLElBVE87QUFXYmQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlhLElBQVo7O0FBRUEsa0JBQUlGLEdBQUcsQ0FBQ0csRUFBUixFQUFZO0FBQ1hyQixnQkFBQUEsT0FBTyxDQUFDb0IsSUFBSSxDQUFDckIsSUFBTixDQUFQO0FBQ0FJLGdCQUFBQSxNQUFNLENBQUNtQixJQUFQLENBQVksb0JBQVo7QUFDQSxlQUhELE1BR087QUFDTnBCLGdCQUFBQSxRQUFRLENBQUNrQixJQUFJLENBQUNHLE9BQU4sQ0FBUjtBQUNBckIsZ0JBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDQTs7QUFuQlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTE0sS0FBSztBQUFBO0FBQUE7QUFBQSxLQUFYLENBZDZDLENBb0M3Qzs7O0FBQ0EsTUFBTWdCLE1BQU07QUFBQSxvV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RsQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5pQixNQUFNO0FBQUE7QUFBQTtBQUFBLEtBQVosQ0FyQzZDLENBeUM3Qzs7O0FBQ0EsTUFBTXBCLGlCQUFpQjtBQUFBLG9XQUFHLGtCQUFPTCxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1BhLEtBQUssV0FBSWpCLDRDQUFKLGVBREU7O0FBQUE7QUFDbkJ1QixjQUFBQSxHQURtQjtBQUFBO0FBQUEscUJBRU5BLEdBQUcsQ0FBQ0MsSUFBSixFQUZNOztBQUFBO0FBRW5CQyxjQUFBQSxJQUZtQjs7QUFJekIsa0JBQUlGLEdBQUcsQ0FBQ0csRUFBUixFQUFZO0FBQ1hyQixnQkFBQUEsT0FBTyxDQUFDb0IsSUFBSSxDQUFDckIsSUFBTixDQUFQO0FBQ0EsZUFGRCxNQUVPO0FBQ05DLGdCQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0E7O0FBUndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWpCSSxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBV0Esc0JBQ0MsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVMLE1BQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRRSxNQUFBQSxLQUFLLEVBQUxBLEtBQVI7QUFBZUksTUFBQUEsUUFBUSxFQUFSQSxRQUFmO0FBQXlCRyxNQUFBQSxLQUFLLEVBQUxBLEtBQXpCO0FBQWdDZ0IsTUFBQUEsTUFBTSxFQUFOQTtBQUFoQyxLQUE3QjtBQUFBLGNBQ0UxQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtBLENBMURNOztHQUFNRDtVQUlHSDs7O0tBSkhHO0FBNERiLCtEQUFlRCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBORVhUX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gdXNlRWZmZWN0KCgpID0+IGNoZWNrVXNlckxvZ2dlZEluKCksIFtdKTtcclxuXHJcbiAvLyBSZWdpc3RlciB1c2VyXHJcbiBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgY29uc29sZS5sb2codXNlcik7XHJcbiB9O1xyXG5cclxuIC8vIExvZ2luIHVzZXJcclxuIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWw6IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ2luYCwge1xyXG4gICBtZXRob2Q6ICdQT1NUJyxcclxuICAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgfSxcclxuICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBpZiAocmVzLm9rKSB7XHJcbiAgIHNldFVzZXIoZGF0YS51c2VyKTtcclxuICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgIHNldEVycm9yKG51bGwpO1xyXG4gIH1cclxuIH07XHJcblxyXG4gLy8gTG9nb3V0IHVzZXJcclxuIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnTG9nb3V0Jyk7XHJcbiB9O1xyXG5cclxuIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiBjb25zdCBjaGVja1VzZXJMb2dnZWRJbiA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS91c2VyYCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGlmIChyZXMub2spIHtcclxuICAgc2V0VXNlcihkYXRhLnVzZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgIHNldFVzZXIobnVsbCk7XHJcbiAgfVxyXG4gfTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfX0+XHJcbiAgIHtjaGlsZHJlbn1cclxuICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTkVYVF9VUkwiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsImlkZW50aWZpZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9rIiwicHVzaCIsIm1lc3NhZ2UiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9