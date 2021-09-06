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
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjM1NGIyM2ZhMTA1NzllOGJhOGVhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxXQUFXLGdCQUFHTCxvREFBYSxFQUFqQztBQUVPLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNyQk4sK0NBQVEsQ0FBQyxJQUFELENBRGE7QUFBQSxNQUN0Q08sSUFEc0M7QUFBQSxNQUNoQ0MsT0FEZ0M7O0FBQUEsbUJBRW5CUiwrQ0FBUSxDQUFDLElBQUQsQ0FGVztBQUFBLE1BRXRDUyxLQUZzQztBQUFBLE1BRS9CQyxRQUYrQjs7QUFJN0MsTUFBTUMsTUFBTSxHQUFHVCxzREFBUyxFQUF4QjtBQUVBRCxFQUFBQSxnREFBUyxDQUFDO0FBQUEsV0FBTVcsaUJBQWlCLEVBQXZCO0FBQUEsR0FBRCxFQUE0QixFQUE1QixDQUFULENBTjZDLENBUTdDOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxvV0FBRyxpQkFBT04sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCTyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjs7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk0sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkLENBVDZDLENBYTdDOzs7QUFDQSxNQUFNRyxLQUFLO0FBQUEsb1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdCQyxjQUFBQSxVQUFoQixTQUFTQyxLQUFULEVBQTRCQyxRQUE1QixTQUE0QkEsUUFBNUI7QUFBQTtBQUFBLHFCQUNLQyxLQUFLLFdBQUlqQiw0Q0FBSixpQkFBMEI7QUFDaERrQixnQkFBQUEsTUFBTSxFQUFFLE1BRHdDO0FBRWhEQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Isa0NBQWdCO0FBRFIsaUJBRnVDO0FBS2hEQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFUixrQkFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNFLGtCQUFBQSxRQUFRLEVBQVJBO0FBQWQsaUJBQWY7QUFMMEMsZUFBMUIsQ0FEVjs7QUFBQTtBQUNQTyxjQUFBQSxHQURPO0FBQUE7QUFBQSxxQkFTTUEsR0FBRyxDQUFDQyxJQUFKLEVBVE47O0FBQUE7QUFTUEMsY0FBQUEsSUFUTztBQVdiZCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWEsSUFBWjs7QUFFQSxrQkFBSUYsR0FBRyxDQUFDRyxFQUFSLEVBQVk7QUFDWHJCLGdCQUFBQSxPQUFPLENBQUNvQixJQUFJLENBQUNyQixJQUFOLENBQVA7QUFDQSxlQUZELE1BRU87QUFDTkcsZ0JBQUFBLFFBQVEsQ0FBQ2tCLElBQUksQ0FBQ0UsT0FBTixDQUFSO0FBQ0FwQixnQkFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBOztBQWxCWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFMTSxLQUFLO0FBQUE7QUFBQTtBQUFBLEtBQVgsQ0FkNkMsQ0FtQzdDOzs7QUFDQSxNQUFNZSxNQUFNO0FBQUEsb1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkakIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOZ0IsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaLENBcEM2QyxDQXdDN0M7OztBQUNBLE1BQU1uQixpQkFBaUI7QUFBQSxvV0FBRyxrQkFBT0wsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNQYSxLQUFLLFdBQUlqQiw0Q0FBSixlQURFOztBQUFBO0FBQ25CdUIsY0FBQUEsR0FEbUI7QUFBQTtBQUFBLHFCQUVOQSxHQUFHLENBQUNDLElBQUosRUFGTTs7QUFBQTtBQUVuQkMsY0FBQUEsSUFGbUI7O0FBSXpCLGtCQUFJRixHQUFHLENBQUNHLEVBQVIsRUFBWTtBQUNYckIsZ0JBQUFBLE9BQU8sQ0FBQ29CLElBQUksQ0FBQ3JCLElBQU4sQ0FBUDtBQUNBLGVBRkQsTUFFTztBQUNOQyxnQkFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBOztBQVJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQkksaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQVdBLHNCQUNDLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFTCxNQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUUsTUFBQUEsS0FBSyxFQUFMQSxLQUFSO0FBQWVJLE1BQUFBLFFBQVEsRUFBUkEsUUFBZjtBQUF5QkcsTUFBQUEsS0FBSyxFQUFMQSxLQUF6QjtBQUFnQ2UsTUFBQUEsTUFBTSxFQUFOQTtBQUFoQyxLQUE3QjtBQUFBLGNBQ0V6QjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtBLENBekRNOztHQUFNRDtVQUlHSDs7O0tBSkhHO0FBMkRiLCtEQUFlRCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBORVhUX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gdXNlRWZmZWN0KCgpID0+IGNoZWNrVXNlckxvZ2dlZEluKCksIFtdKTtcclxuXHJcbiAvLyBSZWdpc3RlciB1c2VyXHJcbiBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgY29uc29sZS5sb2codXNlcik7XHJcbiB9O1xyXG5cclxuIC8vIExvZ2luIHVzZXJcclxuIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWw6IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ2luYCwge1xyXG4gICBtZXRob2Q6ICdQT1NUJyxcclxuICAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgfSxcclxuICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBpZiAocmVzLm9rKSB7XHJcbiAgIHNldFVzZXIoZGF0YS51c2VyKTtcclxuICB9IGVsc2Uge1xyXG4gICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICBzZXRFcnJvcihudWxsKTtcclxuICB9XHJcbiB9O1xyXG5cclxuIC8vIExvZ291dCB1c2VyXHJcbiBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0xvZ291dCcpO1xyXG4gfTtcclxuXHJcbiAvLyBDaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAodXNlcikgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvdXNlcmApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBpZiAocmVzLm9rKSB7XHJcbiAgIHNldFVzZXIoZGF0YS51c2VyKTtcclxuICB9IGVsc2Uge1xyXG4gICBzZXRVc2VyKG51bGwpO1xyXG4gIH1cclxuIH07XHJcblxyXG4gcmV0dXJuIChcclxuICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgZXJyb3IsIHJlZ2lzdGVyLCBsb2dpbiwgbG9nb3V0IH19PlxyXG4gICB7Y2hpbGRyZW59XHJcbiAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5FWFRfVVJMIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImNoZWNrVXNlckxvZ2dlZEluIiwicmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJpZGVudGlmaWVyIiwiZW1haWwiLCJwYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImRhdGEiLCJvayIsIm1lc3NhZ2UiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9