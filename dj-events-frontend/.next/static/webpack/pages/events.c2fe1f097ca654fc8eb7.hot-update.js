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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_EventItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EventItem */ "./components/EventItem.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Pagination */ "./components/Pagination.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\index.js";




var PER_PAGE = 5;
var __N_SSP = true;
function HomePage(_ref) {
  var _this = this;

  var events = _ref.events,
      page = _ref.page,
      total = _ref.total;
  var lastPage = Math.ceil(total / PER_PAGE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this), events.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "No events to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 28
    }, this), events.map(function (evt) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventItem__WEBPACK_IMPORTED_MODULE_3__.default, {
        evt: evt
      }, evt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_4__.default, {
      page: page,
      total: total
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLmMyZmUxZjA5N2NhNjU0ZmM4ZWI3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSSxRQUFRLEdBQUcsQ0FBakI7O0FBRWUsU0FBU0MsUUFBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDekQsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUgsS0FBSyxHQUFHSixRQUFsQixDQUFqQjtBQUVBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQUVFRSxNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBbEIsaUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnpCLEVBSUVOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUNDLEdBQUQ7QUFBQSwwQkFDWCw4REFBQywwREFBRDtBQUF3QixXQUFHLEVBQUVBO0FBQTdCLFNBQWdCQSxHQUFHLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVgsQ0FKRixlQVFDLDhEQUFDLDJEQUFEO0FBQVksVUFBSSxFQUFFUixJQUFsQjtBQUF3QixXQUFLLEVBQUVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBO0tBZnVCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEV2ZW50SXRlbSBmcm9tICdAL2NvbXBvbmVudHMvRXZlbnRJdGVtJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnY29uZmlnJztcclxuY29uc3QgUEVSX1BBR0UgPSA1O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBldmVudHMsIHBhZ2UsIHRvdGFsIH0pIHtcclxuIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gUEVSX1BBR0UpO1xyXG5cclxuIHJldHVybiAoXHJcbiAgPExheW91dD5cclxuICAgPGgxPkV2ZW50czwvaDE+XHJcbiAgIHtldmVudHMubGVuZ3RoID09PSAwICYmIDxoMz5ObyBldmVudHMgdG8gc2hvdzwvaDM+fVxyXG5cclxuICAge2V2ZW50cy5tYXAoKGV2dCkgPT4gKFxyXG4gICAgPEV2ZW50SXRlbSBrZXk9e2V2dC5pZH0gZXZ0PXtldnR9IC8+XHJcbiAgICkpfVxyXG5cclxuICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZX0gdG90YWw9e3RvdGFsfSAvPlxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5OiB7IHBhZ2UgPSAxIH0gfSkge1xyXG4gLy8gQ2FsY3VsYXRlIHN0YXJ0IHBhZ2VcclxuIGNvbnN0IHN0YXJ0ID0gK3BhZ2UgPT09IDEgPyAwIDogKCtwYWdlIC0gMSkgKiBQRVJfUEFHRTtcclxuXHJcbiAvLyBGZXRjaCB0b3RhbC9jb3VudFxyXG4gY29uc3QgdG90YWxSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHMvY291bnRgKTtcclxuIGNvbnN0IHRvdGFsID0gYXdhaXQgdG90YWxSZXMuanNvbigpO1xyXG5cclxuIC8vIEZldGNoIGV2ZW50c1xyXG4gY29uc3QgZXZlbnRSZXMgPSBhd2FpdCBmZXRjaChcclxuICBgJHtBUElfVVJMfS9ldmVudHM/X3NvcnQ9ZGF0ZTpBU0MmX2xpbWl0PSR7UEVSX1BBR0V9Jl9zdGFydD0ke3N0YXJ0fWBcclxuICk7XHJcbiBjb25zdCBldmVudHMgPSBhd2FpdCBldmVudFJlcy5qc29uKCk7XHJcblxyXG4gcmV0dXJuIHtcclxuICBwcm9wczogeyBldmVudHMsIHBhZ2U6ICtwYWdlLCB0b3RhbCB9LFxyXG4gfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkxheW91dCIsIkV2ZW50SXRlbSIsIlBhZ2luYXRpb24iLCJQRVJfUEFHRSIsIkhvbWVQYWdlIiwiZXZlbnRzIiwicGFnZSIsInRvdGFsIiwibGFzdFBhZ2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm1hcCIsImV2dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==