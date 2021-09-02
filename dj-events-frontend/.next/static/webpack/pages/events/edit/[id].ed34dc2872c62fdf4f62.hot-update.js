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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(evt.image ? evt.image.formats.thumbnail.url : null),
      imagePreview = _useState2[0],
      setImagePreview = _useState2[1];

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
      lineNumber: 63,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Edit Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_11__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
            lineNumber: 71,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "name",
            name: "name",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "performers",
            children: "Performers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "performers",
            id: "performers",
            value: values.performers,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "venue",
            children: "Venue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "venue",
            id: "vanue",
            value: values.venue,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "address",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "address",
            id: "address",
            value: values.address,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "date",
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "date",
            name: "date",
            id: "date",
            value: moment__WEBPACK_IMPORTED_MODULE_4___default()(values.date).format('yyyy-MM-DD'),
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "time",
            children: "Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "time",
            id: "time",
            value: values.time,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "description",
          children: "Event Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          type: "text",
          name: "description",
          id: "description",
          value: values.description,
          onChange: handleInputChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "submit",
        value: "Update Event",
        className: "btn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 3
  }, this);
}

_s(EditEventPage, "9O5fU4oQgufVdNXQ+XNfwDvFSUE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL2VkaXQvW2lkXS5lZDM0ZGMyODcyYzYyZmRmNGY2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTUyxhQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUFBLGtCQUNsQlAsK0NBQVEsQ0FBQztBQUNwQ1EsSUFBQUEsSUFBSSxFQUFFRCxHQUFHLENBQUNDLElBRDBCO0FBRXBDQyxJQUFBQSxVQUFVLEVBQUVGLEdBQUcsQ0FBQ0UsVUFGb0I7QUFHcENDLElBQUFBLEtBQUssRUFBRUgsR0FBRyxDQUFDRyxLQUh5QjtBQUlwQ0MsSUFBQUEsT0FBTyxFQUFFSixHQUFHLENBQUNJLE9BSnVCO0FBS3BDQyxJQUFBQSxJQUFJLEVBQUVMLEdBQUcsQ0FBQ0ssSUFMMEI7QUFNcENDLElBQUFBLElBQUksRUFBRU4sR0FBRyxDQUFDTSxJQU4wQjtBQU9wQ0MsSUFBQUEsV0FBVyxFQUFFUCxHQUFHLENBQUNPO0FBUG1CLEdBQUQsQ0FEVTtBQUFBLE1BQ3ZDQyxNQUR1QztBQUFBLE1BQy9CQyxTQUQrQjs7QUFBQSxtQkFXTmhCLCtDQUFRLENBQy9DTyxHQUFHLENBQUNVLEtBQUosR0FBWVYsR0FBRyxDQUFDVSxLQUFKLENBQVVDLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCQyxHQUF4QyxHQUE4QyxJQURDLENBWEY7QUFBQSxNQVd2Q0MsWUFYdUM7QUFBQSxNQVd6QkMsZUFYeUI7O0FBZTlDLE1BQU1DLE1BQU0sR0FBR3RCLHNEQUFTLEVBQXhCOztBQUVBLE1BQU11QixZQUFZO0FBQUEsb1dBQUcsaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFG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SSxFQUFDLE1BRk47QUFHQyxjQUFFLEVBQUMsTUFISjtBQUlDLGlCQUFLLEVBQUU3QixNQUFNLENBQUNGLElBSmY7QUFLQyxvQkFBUSxFQUFFK0I7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFxRUM7QUFBQSxnQ0FDQztBQUFPLGlCQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQ0MsY0FBSSxFQUFDLE1BRE47QUFFQyxjQUFJLEVBQUMsYUFGTjtBQUdDLFlBQUUsRUFBQyxhQUhKO0FBSUMsZUFBSyxFQUFFN0IsTUFBTSxDQUFDRCxXQUpmO0FBS0Msa0JBQVEsRUFBRThCO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyRUQsZUErRUM7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUMsY0FBM0I7QUFBMEMsaUJBQVMsRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0VEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMEZBOztHQTVJdUJ0QztVQWVSTDs7O0tBZlFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9lZGl0L1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdjb25maWcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0Zvcm0ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0RXZlbnRQYWdlKHsgZXZ0IH0pIHtcclxuIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgbmFtZTogZXZ0Lm5hbWUsXHJcbiAgcGVyZm9ybWVyczogZXZ0LnBlcmZvcm1lcnMsXHJcbiAgdmVudWU6IGV2dC52ZW51ZSxcclxuICBhZGRyZXNzOiBldnQuYWRkcmVzcyxcclxuICBkYXRlOiBldnQuZGF0ZSxcclxuICB0aW1lOiBldnQudGltZSxcclxuICBkZXNjcmlwdGlvbjogZXZ0LmRlc2NyaXB0aW9uLFxyXG4gfSk7XHJcblxyXG4gY29uc3QgW2ltYWdlUHJldmlldywgc2V0SW1hZ2VQcmV2aWV3XSA9IHVzZVN0YXRlKFxyXG4gIGV2dC5pbWFnZSA/IGV2dC5pbWFnZS5mb3JtYXRzLnRodW1ibmFpbC51cmwgOiBudWxsXHJcbiApO1xyXG5cclxuIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvLyBWYWxpZGF0aW9uXHJcbiAgY29uc3QgaGFzRW1wdHlGaWVsZHMgPSBPYmplY3QudmFsdWVzKHZhbHVlcykuc29tZShcclxuICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09ICcnXHJcbiAgKTtcclxuXHJcbiAgaWYgKGhhc0VtcHR5RmllbGRzKSB7XHJcbiAgIHRvYXN0LmVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHMvJHtldnQuaWR9YCwge1xyXG4gICBtZXRob2Q6ICdQVVQnLFxyXG4gICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICB9LFxyXG4gICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICB0b2FzdC5lcnJvcignU29tZXRoaW5nIFdlbnQgV3JvbmcnKTtcclxuICB9IGVsc2Uge1xyXG4gICBjb25zdCBldnQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICByb3V0ZXIucHVzaChgL2V2ZW50cy8ke2V2dC5zbHVnfWApO1xyXG4gIH1cclxuIH07XHJcblxyXG4gY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSB9KTtcclxuIH07XHJcblxyXG4gcmV0dXJuIChcclxuICA8TGF5b3V0IHRpdGxlPSdBZGQgTmV3IEV2ZW50Jz5cclxuICAgPExpbmsgaHJlZj0nL2V2ZW50cyc+R28gQmFjazwvTGluaz5cclxuICAgPGgxPkVkaXQgRXZlbnQ8L2gxPlxyXG5cclxuICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcblxyXG4gICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPkV2ZW50IG5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICBpZD0nbmFtZSdcclxuICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdwZXJmb3JtZXJzJz5QZXJmb3JtZXJzPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgbmFtZT0ncGVyZm9ybWVycydcclxuICAgICAgIGlkPSdwZXJmb3JtZXJzJ1xyXG4gICAgICAgdmFsdWU9e3ZhbHVlcy5wZXJmb3JtZXJzfVxyXG4gICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0ndmVudWUnPlZlbnVlPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgbmFtZT0ndmVudWUnXHJcbiAgICAgICBpZD0ndmFudWUnXHJcbiAgICAgICB2YWx1ZT17dmFsdWVzLnZlbnVlfVxyXG4gICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nYWRkcmVzcyc+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgIG5hbWU9J2FkZHJlc3MnXHJcbiAgICAgICBpZD0nYWRkcmVzcydcclxuICAgICAgIHZhbHVlPXt2YWx1ZXMuYWRkcmVzc31cclxuICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J2RhdGUnPkRhdGU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J2RhdGUnXHJcbiAgICAgICBuYW1lPSdkYXRlJ1xyXG4gICAgICAgaWQ9J2RhdGUnXHJcbiAgICAgICB2YWx1ZT17bW9tZW50KHZhbHVlcy5kYXRlKS5mb3JtYXQoJ3l5eXktTU0tREQnKX1cclxuICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3RpbWUnPlRpbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICBuYW1lPSd0aW1lJ1xyXG4gICAgICAgaWQ9J3RpbWUnXHJcbiAgICAgICB2YWx1ZT17dmFsdWVzLnRpbWV9XHJcbiAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgIDxsYWJlbCBodG1sRm9yPSdkZXNjcmlwdGlvbic+RXZlbnQgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgIDx0ZXh0YXJlYVxyXG4gICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICB2YWx1ZT17dmFsdWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nVXBkYXRlIEV2ZW50JyBjbGFzc05hbWU9J2J0bicgLz5cclxuICAgPC9mb3JtPlxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtczogeyBpZCB9IH0pIHtcclxuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2V2ZW50cy8ke2lkfWApO1xyXG4gY29uc3QgZXZ0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiByZXR1cm4ge1xyXG4gIHByb3BzOiB7XHJcbiAgIGV2dCxcclxuICB9LFxyXG4gfTtcclxufVxyXG4iXSwibmFtZXMiOlsibW9tZW50IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTGluayIsIkxheW91dCIsIkFQSV9VUkwiLCJzdHlsZXMiLCJFZGl0RXZlbnRQYWdlIiwiZXZ0IiwibmFtZSIsInBlcmZvcm1lcnMiLCJ2ZW51ZSIsImFkZHJlc3MiLCJkYXRlIiwidGltZSIsImRlc2NyaXB0aW9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaW1hZ2UiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwidXJsIiwiaW1hZ2VQcmV2aWV3Iiwic2V0SW1hZ2VQcmV2aWV3Iiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzRW1wdHlGaWVsZHMiLCJPYmplY3QiLCJzb21lIiwiZWxlbWVudCIsImVycm9yIiwiZmV0Y2giLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsIm9rIiwianNvbiIsInB1c2giLCJzbHVnIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm0iLCJncmlkIiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==