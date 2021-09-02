"use strict";
self["webpackHotUpdate_N_E"]("pages/events/add",{

/***/ "./pages/events/add.js":
/*!*****************************!*\
  !*** ./pages/events/add.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddEventPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! config */ "./config/index.js");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\add.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function AddEventPage() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var hasEmptyFields, res, evt;
      return C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // Validation

              hasEmptyFields = Object.values(values).some(function (element) {
                return element === '';
              });

              if (hasEmptyFields) {
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error('Please fill in all fields');
              }

              _context.next = 5;
              return fetch("".concat(config__WEBPACK_IMPORTED_MODULE_9__.API_URL, "/events"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              });

            case 5:
              res = _context.sent;

              if (res.ok) {
                _context.next = 10;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error('Something Went Wrong');
              _context.next = 14;
              break;

            case 10:
              _context.next = 12;
              return res.json();

            case 12:
              evt = _context.sent;
              router.push("/events/".concat(evt.slug));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__.default, {
    title: "Add New Event",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
      href: "/events",
      children: "Go Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Add Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_10__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11___default().form),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "name",
            children: "Event name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "name",
            name: "name",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "performers",
            children: "Performers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "performers",
            id: "performers",
            value: values.performers,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "venue",
            children: "Venue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "venue",
            id: "vanue",
            value: values.venue,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "address",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "address",
            id: "address",
            value: values.address,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "date",
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "date",
            name: "date",
            id: "date",
            value: values.date,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "time",
            children: "Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "time",
            id: "time",
            value: values.time,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "description",
          children: "Event Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          type: "text",
          name: "description",
          id: "description",
          value: values.description,
          onChange: handleInputChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "submit",
        value: "Add Event",
        className: "btn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, this);
}

_s(AddEventPage, "NqqpgZ6reVhK4EGMZglGJ1XuVG8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = AddEventPage;

var _c;

$RefreshReg$(_c, "AddEventPage");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2FkZC43OWM0Nzc1NjMyM2FiNDU3ZDAzMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ1ZOLCtDQUFRLENBQUM7QUFDcENPLElBQUFBLElBQUksRUFBRSxFQUQ4QjtBQUVwQ0MsSUFBQUEsVUFBVSxFQUFFLEVBRndCO0FBR3BDQyxJQUFBQSxLQUFLLEVBQUUsRUFINkI7QUFJcENDLElBQUFBLE9BQU8sRUFBRSxFQUoyQjtBQUtwQ0MsSUFBQUEsSUFBSSxFQUFFLEVBTDhCO0FBTXBDQyxJQUFBQSxJQUFJLEVBQUUsRUFOOEI7QUFPcENDLElBQUFBLFdBQVcsRUFBRTtBQVB1QixHQUFELENBREU7QUFBQSxNQUMvQkMsTUFEK0I7QUFBQSxNQUN2QkMsU0FEdUI7O0FBV3RDLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBeEI7O0FBRUEsTUFBTWdCLFlBQVk7QUFBQSxtV0FBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURvQixDQUdwQjs7QUFDTUMsY0FBQUEsY0FKYyxHQUlHQyxNQUFNLENBQUNQLE1BQVAsQ0FBY0EsTUFBZCxFQUFzQlEsSUFBdEIsQ0FDdEIsVUFBQ0MsT0FBRDtBQUFBLHVCQUFhQSxPQUFPLEtBQUssRUFBekI7QUFBQSxlQURzQixDQUpIOztBQVFwQixrQkFBSUgsY0FBSixFQUFvQjtBQUNuQnJCLGdCQUFBQSx3REFBQSxDQUFZLDJCQUFaO0FBQ0E7O0FBVm1CO0FBQUEscUJBWUYwQixLQUFLLFdBQUlyQiwyQ0FBSixjQUFzQjtBQUM1Q3NCLGdCQUFBQSxNQUFNLEVBQUUsTUFEb0M7QUFFNUNDLGdC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QUFFd0I7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJFRCxlQStFQztBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBQyxXQUEzQjtBQUF1QyxpQkFBUyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEwRkE7O0dBeEl1Qi9CO1VBV1JMOzs7S0FYUUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9hZGQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEV2ZW50UGFnZSgpIHtcclxuIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgbmFtZTogJycsXHJcbiAgcGVyZm9ybWVyczogJycsXHJcbiAgdmVudWU6ICcnLFxyXG4gIGFkZHJlc3M6ICcnLFxyXG4gIGRhdGU6ICcnLFxyXG4gIHRpbWU6ICcnLFxyXG4gIGRlc2NyaXB0aW9uOiAnJyxcclxuIH0pO1xyXG5cclxuIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvLyBWYWxpZGF0aW9uXHJcbiAgY29uc3QgaGFzRW1wdHlGaWVsZHMgPSBPYmplY3QudmFsdWVzKHZhbHVlcykuc29tZShcclxuICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09ICcnXHJcbiAgKTtcclxuXHJcbiAgaWYgKGhhc0VtcHR5RmllbGRzKSB7XHJcbiAgIHRvYXN0LmVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHNgLCB7XHJcbiAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICB9LFxyXG4gICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICB0b2FzdC5lcnJvcignU29tZXRoaW5nIFdlbnQgV3JvbmcnKTtcclxuICB9IGVsc2Uge1xyXG4gICBjb25zdCBldnQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICByb3V0ZXIucHVzaChgL2V2ZW50cy8ke2V2dC5zbHVnfWApO1xyXG4gIH1cclxuIH07XHJcblxyXG4gY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSB9KTtcclxuIH07XHJcblxyXG4gcmV0dXJuIChcclxuICA8TGF5b3V0IHRpdGxlPSdBZGQgTmV3IEV2ZW50Jz5cclxuICAgPExpbmsgaHJlZj0nL2V2ZW50cyc+R28gQmFjazwvTGluaz5cclxuICAgPGgxPkFkZCBFdmVudDwvaDE+XHJcblxyXG4gICA8VG9hc3RDb250YWluZXIgLz5cclxuXHJcbiAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+RXZlbnQgbmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3BlcmZvcm1lcnMnPlBlcmZvcm1lcnM8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICBuYW1lPSdwZXJmb3JtZXJzJ1xyXG4gICAgICAgaWQ9J3BlcmZvcm1lcnMnXHJcbiAgICAgICB2YWx1ZT17dmFsdWVzLnBlcmZvcm1lcnN9XHJcbiAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSd2ZW51ZSc+VmVudWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICBuYW1lPSd2ZW51ZSdcclxuICAgICAgIGlkPSd2YW51ZSdcclxuICAgICAgIHZhbHVlPXt2YWx1ZXMudmVudWV9XHJcbiAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdhZGRyZXNzJz5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgbmFtZT0nYWRkcmVzcydcclxuICAgICAgIGlkPSdhZGRyZXNzJ1xyXG4gICAgICAgdmFsdWU9e3ZhbHVlcy5hZGRyZXNzfVxyXG4gICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nZGF0ZSc+RGF0ZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0nZGF0ZSdcclxuICAgICAgIG5hbWU9J2RhdGUnXHJcbiAgICAgICBpZD0nZGF0ZSdcclxuICAgICAgIHZhbHVlPXt2YWx1ZXMuZGF0ZX1cclxuICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3RpbWUnPlRpbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICBuYW1lPSd0aW1lJ1xyXG4gICAgICAgaWQ9J3RpbWUnXHJcbiAgICAgICB2YWx1ZT17dmFsdWVzLnRpbWV9XHJcbiAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgIDxsYWJlbCBodG1sRm9yPSdkZXNjcmlwdGlvbic+RXZlbnQgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgIDx0ZXh0YXJlYVxyXG4gICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICB2YWx1ZT17dmFsdWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nQWRkIEV2ZW50JyBjbGFzc05hbWU9J2J0bicgLz5cclxuICAgPC9mb3JtPlxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTGluayIsIkxheW91dCIsIkFQSV9VUkwiLCJzdHlsZXMiLCJBZGRFdmVudFBhZ2UiLCJuYW1lIiwicGVyZm9ybWVycyIsInZlbnVlIiwiYWRkcmVzcyIsImRhdGUiLCJ0aW1lIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNFbXB0eUZpZWxkcyIsIk9iamVjdCIsInNvbWUiLCJlbGVtZW50IiwiZXJyb3IiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsIm9rIiwianNvbiIsImV2dCIsInB1c2giLCJzbHVnIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm0iLCJncmlkIl0sInNvdXJjZVJvb3QiOiIifQ==