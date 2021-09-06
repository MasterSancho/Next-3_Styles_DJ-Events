"use strict";
self["webpackHotUpdate_N_E"]("pages/events",{

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
    lineNumber: 58,
    columnNumber: 3
  }, _this);
};

_s(AuthProvider, "FoT8xzvemVmWV60BhcL+ltjm2pQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjRlNDFjYzBkMTk2ZGE3ZDY0YTM4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxXQUFXLGdCQUFHTCxvREFBYSxFQUFqQztBQUVPLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNyQk4sK0NBQVEsQ0FBQyxJQUFELENBRGE7QUFBQSxNQUN0Q08sSUFEc0M7QUFBQSxNQUNoQ0MsT0FEZ0M7O0FBQUEsbUJBRW5CUiwrQ0FBUSxDQUFDLElBQUQsQ0FGVztBQUFBLE1BRXRDUyxLQUZzQztBQUFBLE1BRS9CQyxRQUYrQjs7QUFJN0NULEVBQUFBLGdEQUFTLENBQUM7QUFBQSxXQUFNVSxpQkFBaUIsRUFBdkI7QUFBQSxHQUFELEVBQTRCLEVBQTVCLENBQVQsQ0FKNkMsQ0FNN0M7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLG9XQUFHLGlCQUFPTCxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJNLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaOztBQURnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSSyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQsQ0FQNkMsQ0FXN0M7OztBQUNBLE1BQU1HLEtBQUs7QUFBQSxvV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0JDLGNBQUFBLFVBQWhCLFNBQVNDLEtBQVQsRUFBNEJDLFFBQTVCLFNBQTRCQSxRQUE1QjtBQUFBO0FBQUEscUJBQ0tDLEtBQUssV0FBSWhCLDRDQUFKLGlCQUEwQjtBQUNoRGlCLGdCQUFBQSxNQUFNLEVBQUUsTUFEd0M7QUFFaERDLGdCQUFBQSxPQUFPLEVBQUU7QUFDUixrQ0FBZ0I7QUFEUixpQkFGdUM7QUFLaERDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVSLGtCQUFBQSxVQUFVLEVBQVZBLFVBQUY7QUFBY0Usa0JBQUFBLFFBQVEsRUFBUkE7QUFBZCxpQkFBZjtBQUwwQyxlQUExQixDQURWOztBQUFBO0FBQ1BPLGNBQUFBLEdBRE87QUFBQTtBQUFBLHFCQVNNQSxHQUFHLENBQUNDLElBQUosRUFUTjs7QUFBQTtBQVNQQyxjQUFBQSxJQVRPO0FBV2JkLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxJQUFaOztBQUVBLGtCQUFJRixHQUFHLENBQUNHLEVBQVIsRUFBWTtBQUNYcEIsZ0JBQUFBLE9BQU8sQ0FBQ21CLElBQUksQ0FBQ3BCLElBQU4sQ0FBUDtBQUNBLGVBRkQsTUFFTztBQUNORyxnQkFBQUEsUUFBUSxDQUFDaUIsSUFBSSxDQUFDRSxPQUFOLENBQVI7QUFDQW5CLGdCQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0E7O0FBbEJZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxLLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWCxDQVo2QyxDQWlDN0M7OztBQUNBLE1BQU1lLE1BQU07QUFBQSxvV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RqQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5nQixNQUFNO0FBQUE7QUFBQTtBQUFBLEtBQVosQ0FsQzZDLENBc0M3Qzs7O0FBQ0EsTUFBTW5CLGlCQUFpQjtBQUFBLG9XQUFHLGtCQUFPSixJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1BZLEtBQUssV0FBSWhCLDRDQUFKLGVBREU7O0FBQUE7QUFDbkJzQixjQUFBQSxHQURtQjtBQUFBO0FBQUEscUJBRU5BLEdBQUcsQ0FBQ0MsSUFBSixFQUZNOztBQUFBO0FBRW5CQyxjQUFBQSxJQUZtQjs7QUFJekIsa0JBQUlGLEdBQUcsQ0FBQ0csRUFBUixFQUFZO0FBQ1hwQixnQkFBQUEsT0FBTyxDQUFDbUIsSUFBSSxDQUFDcEIsSUFBTixDQUFQO0FBQ0EsZUFGRCxNQUVPO0FBQ05DLGdCQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0E7O0FBUndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWpCRyxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBV0Esc0JBQ0MsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVKLE1BQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRRSxNQUFBQSxLQUFLLEVBQUxBLEtBQVI7QUFBZUcsTUFBQUEsUUFBUSxFQUFSQSxRQUFmO0FBQXlCRyxNQUFBQSxLQUFLLEVBQUxBLEtBQXpCO0FBQWdDZSxNQUFBQSxNQUFNLEVBQU5BO0FBQWhDLEtBQTdCO0FBQUEsY0FDRXhCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0F2RE07O0dBQU1EOztLQUFBQTtBQXlEYiwrREFBZUQsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgTkVYVF9VUkwgfSBmcm9tICdjb25maWcnO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuIHVzZUVmZmVjdCgoKSA9PiBjaGVja1VzZXJMb2dnZWRJbigpLCBbXSk7XHJcblxyXG4gLy8gUmVnaXN0ZXIgdXNlclxyXG4gY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gfTtcclxuXHJcbiAvLyBMb2dpbiB1c2VyXHJcbiBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsOiBpZGVudGlmaWVyLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dpbmAsIHtcclxuICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgIH0sXHJcbiAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgaWYgKHJlcy5vaykge1xyXG4gICBzZXRVc2VyKGRhdGEudXNlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgfVxyXG4gfTtcclxuXHJcbiAvLyBMb2dvdXQgdXNlclxyXG4gY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdMb2dvdXQnKTtcclxuIH07XHJcblxyXG4gLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cclxuIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL3VzZXJgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgaWYgKHJlcy5vaykge1xyXG4gICBzZXRVc2VyKGRhdGEudXNlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgc2V0VXNlcihudWxsKTtcclxuICB9XHJcbiB9O1xyXG5cclxuIHJldHVybiAoXHJcbiAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGVycm9yLCByZWdpc3RlciwgbG9naW4sIGxvZ291dCB9fT5cclxuICAge2NoaWxkcmVufVxyXG4gIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJORVhUX1VSTCIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJjaGVja1VzZXJMb2dnZWRJbiIsInJlZ2lzdGVyIiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwiaWRlbnRpZmllciIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJkYXRhIiwib2siLCJtZXNzYWdlIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==