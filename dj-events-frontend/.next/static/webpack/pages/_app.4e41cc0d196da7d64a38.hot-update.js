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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZTQxY2MwZDE5NmRhN2Q2NGEzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUssV0FBVyxnQkFBR0wsb0RBQWEsRUFBakM7QUFFTyxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDckJOLCtDQUFRLENBQUMsSUFBRCxDQURhO0FBQUEsTUFDdENPLElBRHNDO0FBQUEsTUFDaENDLE9BRGdDOztBQUFBLG1CQUVuQlIsK0NBQVEsQ0FBQyxJQUFELENBRlc7QUFBQSxNQUV0Q1MsS0FGc0M7QUFBQSxNQUUvQkMsUUFGK0I7O0FBSTdDVCxFQUFBQSxnREFBUyxDQUFDO0FBQUEsV0FBTVUsaUJBQWlCLEVBQXZCO0FBQUEsR0FBRCxFQUE0QixFQUE1QixDQUFULENBSjZDLENBTTdDOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxvV0FBRyxpQkFBT0wsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCTSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWjs7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkssUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkLENBUDZDLENBVzdDOzs7QUFDQSxNQUFNRyxLQUFLO0FBQUEsb1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdCQyxjQUFBQSxVQUFoQixTQUFTQyxLQUFULEVBQTRCQyxRQUE1QixTQUE0QkEsUUFBNUI7QUFBQTtBQUFBLHFCQUNLQyxLQUFLLFdBQUloQiw0Q0FBSixpQkFBMEI7QUFDaERpQixnQkFBQUEsTUFBTSxFQUFFLE1BRHdDO0FBRWhEQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Isa0NBQWdCO0FBRFIsaUJBRnVDO0FBS2hEQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFUixrQkFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNFLGtCQUFBQSxRQUFRLEVBQVJBO0FBQWQsaUJBQWY7QUFMMEMsZUFBMUIsQ0FEVjs7QUFBQTtBQUNQTyxjQUFBQSxHQURPO0FBQUE7QUFBQSxxQkFTTUEsR0FBRyxDQUFDQyxJQUFKLEVBVE47O0FBQUE7QUFTUEMsY0FBQUEsSUFUTztBQVdiZCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWEsSUFBWjs7QUFFQSxrQkFBSUYsR0FBRyxDQUFDRyxFQUFSLEVBQVk7QUFDWHBCLGdCQUFBQSxPQUFPLENBQUNtQixJQUFJLENBQUNwQixJQUFOLENBQVA7QUFDQSxlQUZELE1BRU87QUFDTkcsZ0JBQUFBLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQ0UsT0FBTixDQUFSO0FBQ0FuQixnQkFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBOztBQWxCWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFMSyxLQUFLO0FBQUE7QUFBQTtBQUFBLEtBQVgsQ0FaNkMsQ0FpQzdDOzs7QUFDQSxNQUFNZSxNQUFNO0FBQUEsb1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkakIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOZ0IsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaLENBbEM2QyxDQXNDN0M7OztBQUNBLE1BQU1uQixpQkFBaUI7QUFBQSxvV0FBRyxrQkFBT0osSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNQWSxLQUFLLFdBQUloQiw0Q0FBSixlQURFOztBQUFBO0FBQ25Cc0IsY0FBQUEsR0FEbUI7QUFBQTtBQUFBLHFCQUVOQSxHQUFHLENBQUNDLElBQUosRUFGTTs7QUFBQTtBQUVuQkMsY0FBQUEsSUFGbUI7O0FBSXpCLGtCQUFJRixHQUFHLENBQUNHLEVBQVIsRUFBWTtBQUNYcEIsZ0JBQUFBLE9BQU8sQ0FBQ21CLElBQUksQ0FBQ3BCLElBQU4sQ0FBUDtBQUNBLGVBRkQsTUFFTztBQUNOQyxnQkFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBOztBQVJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQkcsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQVdBLHNCQUNDLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFSixNQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUUsTUFBQUEsS0FBSyxFQUFMQSxLQUFSO0FBQWVHLE1BQUFBLFFBQVEsRUFBUkEsUUFBZjtBQUF5QkcsTUFBQUEsS0FBSyxFQUFMQSxLQUF6QjtBQUFnQ2UsTUFBQUEsTUFBTSxFQUFOQTtBQUFoQyxLQUE3QjtBQUFBLGNBQ0V4QjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtBLENBdkRNOztHQUFNRDs7S0FBQUE7QUF5RGIsK0RBQWVELFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IE5FWFRfVVJMIH0gZnJvbSAnY29uZmlnJztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiB1c2VFZmZlY3QoKCkgPT4gY2hlY2tVc2VyTG9nZ2VkSW4oKSwgW10pO1xyXG5cclxuIC8vIFJlZ2lzdGVyIHVzZXJcclxuIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxuIH07XHJcblxyXG4gLy8gTG9naW4gdXNlclxyXG4gY29uc3QgbG9naW4gPSBhc3luYyAoeyBlbWFpbDogaWRlbnRpZmllciwgcGFzc3dvcmQgfSkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvbG9naW5gLCB7XHJcbiAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICB9LFxyXG4gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIGlmIChyZXMub2spIHtcclxuICAgc2V0VXNlcihkYXRhLnVzZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgIHNldEVycm9yKG51bGwpO1xyXG4gIH1cclxuIH07XHJcblxyXG4gLy8gTG9nb3V0IHVzZXJcclxuIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnTG9nb3V0Jyk7XHJcbiB9O1xyXG5cclxuIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiBjb25zdCBjaGVja1VzZXJMb2dnZWRJbiA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS91c2VyYCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGlmIChyZXMub2spIHtcclxuICAgc2V0VXNlcihkYXRhLnVzZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgIHNldFVzZXIobnVsbCk7XHJcbiAgfVxyXG4gfTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfX0+XHJcbiAgIHtjaGlsZHJlbn1cclxuICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTkVYVF9VUkwiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsImlkZW50aWZpZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZGF0YSIsIm9rIiwibWVzc2FnZSIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=