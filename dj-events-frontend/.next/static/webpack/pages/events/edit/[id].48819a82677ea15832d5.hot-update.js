"use strict";
self["webpackHotUpdate_N_E"]("pages/events/edit/[id]",{

/***/ "./pages/events/edit/[id].js":
/*!***********************************!*\
  !*** ./pages/events/edit/[id].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ EditEventPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! config */ "./config/index.js");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\edit\\[id].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var __N_SSP = true;
function EditEventPage(_ref) {
  _s();

  var evt = _ref.evt;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    name: evt.name,
    performers: evt.performers,
    venue: evt.venue,
    address: evt.address,
    date: evt.date,
    time: evt.time,
    description: evt.description
  }),
      values = _useState[0],
      setValues = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var hasEmptyFields, res, _evt;

      return C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // Validation

              hasEmptyFields = Object.values(values).some(function (element) {
                return element === '';
              });

              if (hasEmptyFields) {
                react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error('Please fill in all fields');
              }

              _context.next = 5;
              return fetch("".concat(config__WEBPACK_IMPORTED_MODULE_10__.API_URL, "/events/").concat(evt.id), {
                method: 'PUT',
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

              react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error('Something Went Wrong');
              _context.next = 14;
              break;

            case 10:
              _context.next = 12;
              return res.json();

            case 12:
              _evt = _context.sent;
              router.push("/events/".concat(_evt.slug));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, (0,C_Users_Alex_Documents_GitHub_Next_3_Styles_DJ_Events_dj_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {
    title: "Add New Event",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
      href: "/events",
      children: "Go Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Edit Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_11__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().form),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "name",
            children: "Event name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "name",
            name: "name",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "performers",
            children: "Performers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "performers",
            id: "performers",
            value: values.performers,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "venue",
            children: "Venue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "venue",
            id: "vanue",
            value: values.venue,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "address",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "address",
            id: "address",
            value: values.address,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "date",
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "date",
            name: "date",
            id: "date",
            value: moment__WEBPACK_IMPORTED_MODULE_4___default()(values.date).format('yyyy-MM-DD'),
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "time",
            children: "Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "time",
            id: "time",
            value: values.time,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "description",
          children: "Event Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          type: "text",
          name: "description",
          id: "description",
          value: values.description,
          onChange: handleInputChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "submit",
        value: "Update Event",
        className: "btn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, this);
}

_s(EditEventPage, "rTePvsEb8xtFHKO1IFmxLfksoLo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = EditEventPage;

var _c;

$RefreshReg$(_c, "EditEventPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2VkaXQvW2lkXS40ODgxOWE4MjY3N2VhMTU4MzJkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTUyxhQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUFBLGtCQUNsQlAsK0NBQVEsQ0FBQztBQUNwQ1EsSUFBQUEsSUFBSSxFQUFFRCxHQUFHLENBQUNDLElBRDBCO0FBRXBDQyxJQUFBQSxVQUFVLEVBQUVGLEdBQUcsQ0FBQ0UsVUFGb0I7QUFHcENDLElBQUFBLEtBQUssRUFBRUgsR0FBRyxDQUFDRyxLQUh5QjtBQUlwQ0MsSUFBQUEsT0FBTyxFQUFFSixHQUFHLENBQUNJLE9BSnVCO0FBS3BDQyxJQUFBQSxJQUFJLEVBQUVMLEdBQUcsQ0FBQ0ssSUFMMEI7QUFNcENDLElBQUFBLElBQUksRUFBRU4sR0FBRyxDQUFDTSxJQU4wQjtBQU9wQ0MsSUFBQUEsV0FBVyxFQUFFUCxHQUFHLENBQUNPO0FBUG1CLEdBQUQsQ0FEVTtBQUFBLE1BQ3ZDQyxNQUR1QztBQUFBLE1BQy9CQyxTQUQrQjs7QUFXOUMsTUFBTUMsTUFBTSxHQUFHaEIsc0RBQVMsRUFBeEI7O0FBRUEsTUFBTWlCLFlBQVk7QUFBQSxvV0FBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCQSxjQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEb0IsQ0FHcEI7O0FBQ01DLGNBQUFBLGNBSmMsR0FJR0MsTUFBTSxDQUFDUCxNQUFQLENBQWNBLE1BQWQsRUFBc0JRLElBQXRCLENBQ3RCLFVBQUNDLE9BQUQ7QUFBQSx1QkFBYUEsT0FBTyxLQUFLLEVBQXpCO0FBQUEsZUFEc0IsQ0FKSDs7QUFRcEIsa0JBQUlILGNB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O0FBQUE7QUFBQTtBQUFBLGNBREQsZUFxRUM7QUFBQSxnQ0FDQztBQUFPLGlCQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQ0MsY0FBSSxFQUFDLE1BRE47QUFFQyxjQUFJLEVBQUMsYUFGTjtBQUdDLFlBQUUsRUFBQyxhQUhKO0FBSUMsZUFBSyxFQUFFdkIsTUFBTSxDQUFDRCxXQUpmO0FBS0Msa0JBQVEsRUFBRXdCO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyRUQsZUErRUM7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUMsY0FBM0I7QUFBMEMsaUJBQVMsRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0VEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMEZBOztHQXhJdUJoQztVQVdSTDs7O0tBWFFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9lZGl0L1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdjb25maWcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0Zvcm0ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0RXZlbnRQYWdlKHsgZXZ0IH0pIHtcclxuIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgbmFtZTogZXZ0Lm5hbWUsXHJcbiAgcGVyZm9ybWVyczogZXZ0LnBlcmZvcm1lcnMsXHJcbiAgdmVudWU6IGV2dC52ZW51ZSxcclxuICBhZGRyZXNzOiBldnQuYWRkcmVzcyxcclxuICBkYXRlOiBldnQuZGF0ZSxcclxuICB0aW1lOiBldnQudGltZSxcclxuICBkZXNjcmlwdGlvbjogZXZ0LmRlc2NyaXB0aW9uLFxyXG4gfSk7XHJcblxyXG4gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vIFZhbGlkYXRpb25cclxuICBjb25zdCBoYXNFbXB0eUZpZWxkcyA9IE9iamVjdC52YWx1ZXModmFsdWVzKS5zb21lKFxyXG4gICAoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gJydcclxuICApO1xyXG5cclxuICBpZiAoaGFzRW1wdHlGaWVsZHMpIHtcclxuICAgdG9hc3QuZXJyb3IoJ1BsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2V2ZW50cy8ke2V2dC5pZH1gLCB7XHJcbiAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgIH0sXHJcbiAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgIHRvYXN0LmVycm9yKCdTb21ldGhpbmcgV2VudCBXcm9uZycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgIGNvbnN0IGV2dCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgIHJvdXRlci5wdXNoKGAvZXZlbnRzLyR7ZXZ0LnNsdWd9YCk7XHJcbiAgfVxyXG4gfTtcclxuXHJcbiBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gfTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9J0FkZCBOZXcgRXZlbnQnPlxyXG4gICA8TGluayBocmVmPScvZXZlbnRzJz5HbyBCYWNrPC9MaW5rPlxyXG4gICA8aDE+RWRpdCBFdmVudDwvaDE+XHJcblxyXG4gICA8VG9hc3RDb250YWluZXIgLz5cclxuXHJcbiAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+RXZlbnQgbmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3BlcmZvcm1lcnMnPlBlcmZvcm1lcnM8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICBuYW1lPSdwZXJmb3JtZXJzJ1xyXG4gICAgICAgaWQ9J3BlcmZvcm1lcnMnXHJcbiAgICAgICB2YWx1ZT17dmFsdWVzLnBlcmZvcm1lcnN9XHJcbiAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSd2ZW51ZSc+VmVudWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICBuYW1lPSd2ZW51ZSdcclxuICAgICAgIGlkPSd2YW51ZSdcclxuICAgICAgIHZhbHVlPXt2YWx1ZXMudmVudWV9XHJcbiAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdhZGRyZXNzJz5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgbmFtZT0nYWRkcmVzcydcclxuICAgICAgIGlkPSdhZGRyZXNzJ1xyXG4gICAgICAgdmFsdWU9e3ZhbHVlcy5hZGRyZXNzfVxyXG4gICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nZGF0ZSc+RGF0ZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0nZGF0ZSdcclxuICAgICAgIG5hbWU9J2RhdGUnXHJcbiAgICAgICBpZD0nZGF0ZSdcclxuICAgICAgIHZhbHVlPXttb21lbnQodmFsdWVzLmRhdGUpLmZvcm1hdCgneXl5eS1NTS1ERCcpfVxyXG4gICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0ndGltZSc+VGltZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgIG5hbWU9J3RpbWUnXHJcbiAgICAgICBpZD0ndGltZSdcclxuICAgICAgIHZhbHVlPXt2YWx1ZXMudGltZX1cclxuICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgPGxhYmVsIGh0bWxGb3I9J2Rlc2NyaXB0aW9uJz5FdmVudCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgPHRleHRhcmVhXHJcbiAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgIHZhbHVlPXt2YWx1ZXMuZGVzY3JpcHRpb259XHJcbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdVcGRhdGUgRXZlbnQnIGNsYXNzTmFtZT0nYnRuJyAvPlxyXG4gICA8L2Zvcm0+XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zOiB7IGlkIH0gfSkge1xyXG4gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzLyR7aWR9YCk7XHJcbiBjb25zdCBldnQgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuIHJldHVybiB7XHJcbiAgcHJvcHM6IHtcclxuICAgZXZ0LFxyXG4gIH0sXHJcbiB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb21lbnQiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiTGF5b3V0IiwiQVBJX1VSTCIsInN0eWxlcyIsIkVkaXRFdmVudFBhZ2UiLCJldnQiLCJuYW1lIiwicGVyZm9ybWVycyIsInZlbnVlIiwiYWRkcmVzcyIsImRhdGUiLCJ0aW1lIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNFbXB0eUZpZWxkcyIsIk9iamVjdCIsInNvbWUiLCJlbGVtZW50IiwiZXJyb3IiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwib2siLCJqc29uIiwicHVzaCIsInNsdWciLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZm9ybSIsImdyaWQiLCJmb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9