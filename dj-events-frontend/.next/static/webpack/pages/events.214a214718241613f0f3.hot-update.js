"use strict";
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\index.js";


var PER_PAGE = 2;
var __N_SSP = true;
function HomePage(_ref) {
  var _this = this;

  var events = _ref.events;
  var lastPage = Math.ceil(total / PER_PAGE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 28
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this);
    }), page > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
      href: "/events?page=".concat(page - 1),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "btn-secondary",
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, this);
}
_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjIxNGEyMTQ3MTgyNDE2MTNmMGYzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1FLFFBQVEsR0FBRyxDQUFqQjs7QUFFZSxTQUFTQyxRQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzVDLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQUssR0FBR04sUUFBbEIsQ0FBakI7QUFFQSxzQkFDQyw4REFBQyx1REFBRDtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFFRUUsTUFBTSxDQUFDSyxNQUFQLEtBQWtCLENBQWxCLGlCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZ6QixFQUlFTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxHQUFEO0FBQUEsMEJBQ1gsOERBQUMsMERBQUQ7QUFBd0IsV0FBRyxFQUFFQTtBQUE3QixTQUFnQkEsR0FBRyxDQUFDQyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFYLENBSkYsRUFRRUMsSUFBSSxHQUFHLENBQVAsaUJBQ0EsOERBQUMsSUFBRDtBQUFNLFVBQUkseUJBQWtCQSxJQUFJLEdBQUcsQ0FBekIsQ0FBVjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZ0JBO0tBbkJ1QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBFdmVudEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0V2ZW50SXRlbSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdjb25maWcnO1xyXG5jb25zdCBQRVJfUEFHRSA9IDI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGV2ZW50cyB9KSB7XHJcbiBjb25zdCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0b3RhbCAvIFBFUl9QQUdFKTtcclxuXHJcbiByZXR1cm4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgIDxoMT5FdmVudHM8L2gxPlxyXG4gICB7ZXZlbnRzLmxlbmd0aCA9PT0gMCAmJiA8aDM+Tm8gZXZlbnRzIHRvIHNob3c8L2gzPn1cclxuXHJcbiAgIHtldmVudHMubWFwKChldnQpID0+IChcclxuICAgIDxFdmVudEl0ZW0ga2V5PXtldnQuaWR9IGV2dD17ZXZ0fSAvPlxyXG4gICApKX1cclxuXHJcbiAgIHtwYWdlID4gMSAmJiAoXHJcbiAgICA8TGluayBocmVmPXtgL2V2ZW50cz9wYWdlPSR7cGFnZSAtIDF9YH0+XHJcbiAgICAgPGEgY2xhc3NOYW1lPSdidG4tc2Vjb25kYXJ5Jz5QcmV2PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICApfVxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5OiB7IHBhZ2UgPSAxIH0gfSkge1xyXG4gLy8gQ2FsY3VsYXRlIHN0YXJ0IHBhZ2VcclxuIGNvbnN0IHN0YXJ0ID0gK3BhZ2UgPT09IDEgPyAwIDogKCtwYWdlIC0gMSkgKiBQRVJfUEFHRTtcclxuXHJcbiAvLyBGZXRjaCB0b3RhbC9jb3VudFxyXG4gY29uc3QgdG90YWxSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHMvY291bnRgKTtcclxuIGNvbnN0IHRvdGFsID0gYXdhaXQgdG90YWxSZXMuanNvbigpO1xyXG5cclxuIC8vIEZldGNoIGV2ZW50c1xyXG4gY29uc3QgZXZlbnRSZXMgPSBhd2FpdCBmZXRjaChcclxuICBgJHtBUElfVVJMfS9ldmVudHM/X3NvcnQ9ZGF0ZTpBU0MmX2xpbWl0PSR7UEVSX1BBR0V9Jl9zdGFydD0ke3N0YXJ0fWBcclxuICk7XHJcbiBjb25zdCBldmVudHMgPSBhd2FpdCBldmVudFJlcy5qc29uKCk7XHJcblxyXG4gcmV0dXJuIHtcclxuICBwcm9wczogeyBldmVudHMsIHBhZ2U6ICtwYWdlLCB0b3RhbCB9LFxyXG4gfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiRXZlbnRJdGVtIiwiUEVSX1BBR0UiLCJIb21lUGFnZSIsImV2ZW50cyIsImxhc3RQYWdlIiwiTWF0aCIsImNlaWwiLCJ0b3RhbCIsImxlbmd0aCIsIm1hcCIsImV2dCIsImlkIiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=