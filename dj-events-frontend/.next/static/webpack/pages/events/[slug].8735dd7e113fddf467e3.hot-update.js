"use strict";
self["webpackHotUpdate_N_E"]("pages/events/[slug]",{

/***/ "./pages/events/[slug].js":
/*!********************************!*\
  !*** ./pages/events/[slug].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ EventPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Event.module.css */ "./styles/Event.module.css");
/* harmony import */ var _styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-3_Styles_DJ-Events\\dj-events-frontend\\pages\\events\\[slug].js";





var __N_SSG = true;
function EventPage(_ref) {
  var evt = _ref.evt;

  var deleteEvent = function deleteEvent(e) {
    console.log('delete');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().event),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().controls),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/events/edit/".concat(evt.id),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPencilAlt, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 8
            }, this), " Edit Event"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().delete),
          onClick: deleteEvent,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTimes, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, this), " Delete Event"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [new Date(evt.date).toLocaleDateString('en-US'), " at ", evt.time]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: evt.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this), evt.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: evt.image.formats.medium.url,
          width: 960,
          height: 600
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 6
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Performers:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: evt.performers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Description:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: evt.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: ["Venue: ", evt.venue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: evt.address
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/events",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().back),
          children: ['<', " Go Back"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, this);
}
_c = EventPage;

var _c;

$RefreshReg$(_c, "EventPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1tzbHVnXS44NzM1ZGQ3ZTExM2ZkZGY0NjdlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU00sU0FBVCxPQUE0QjtBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFDMUMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsR0FGRDs7QUFJQSxzQkFDQyw4REFBQyx1REFBRDtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFTix1RUFBaEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUFBLGdDQUNDLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSx5QkFBa0JFLEdBQUcsQ0FBQ08sRUFBdEIsQ0FBVjtBQUFBLGlDQUNDO0FBQUEsb0NBQ0MsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBTUM7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFTLEVBQUVULHdFQUF2QjtBQUFzQyxpQkFBTyxFQUFFRyxXQUEvQztBQUFBLGtDQUNDLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBWUM7QUFBQSxtQkFDRSxJQUFJTyxJQUFKLENBQVNSLEdBQUcsQ0FBQ1MsSUFBYixFQUFtQkMsa0JBQW5CLENBQXNDLE9BQXRDLENBREYsVUFDc0RWLEdBQUcsQ0FBQ1csSUFEMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkQsZUFlQztBQUFBLGtCQUFLWCxHQUFHLENBQUNZO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZELEVBZ0JFWixHQUFHLENBQUNhLEtBQUosaUJBQ0E7QUFBSyxpQkFBUyxFQUFFZix1RUFBaEI7QUFBQSwrQkFDQyw4REFBQyxtREFBRDtBQUFPLGFBQUcsRUFBRUUsR0FBRyxDQUFDYSxLQUFKLENBQVVDLE9BQVYsQ0FBa0JDLE1BQWxCLENBQXlCQyxHQUFyQztBQUEwQyxlQUFLLEVBQUUsR0FBakQ7QUFBc0QsZ0JBQU0sRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQXNCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRCxlQXVCQztBQUFBLGtCQUFJaEIsR0FBRyxDQUFDaUI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJELGVBd0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJELGVBeUJDO0FBQUEsa0JBQUlqQixHQUFHLENBQUNrQjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkQsZUEwQkM7QUFBQSw4QkFBWWxCLEdBQUcsQ0FBQ21CLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRCxlQTJCQztBQUFBLGtCQUFJbkIsR0FBRyxDQUFDb0I7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JELGVBNkJDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQSwrQkFDQztBQUFHLG1CQUFTLEVBQUV0QixzRUFBZDtBQUFBLHFCQUE0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXFDQTtLQTFDdUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bc2x1Z10uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFQZW5jaWxBbHQsIEZhVGltZXMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ2NvbmZpZyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRXZlbnQubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudFBhZ2UoeyBldnQgfSkge1xyXG4gY29uc3QgZGVsZXRlRXZlbnQgPSAoZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdkZWxldGUnKTtcclxuIH07XHJcblxyXG4gcmV0dXJuIChcclxuICA8TGF5b3V0PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbHN9PlxyXG4gICAgIDxMaW5rIGhyZWY9e2AvZXZlbnRzL2VkaXQvJHtldnQuaWR9YH0+XHJcbiAgICAgIDxhPlxyXG4gICAgICAgPEZhUGVuY2lsQWx0IC8+IEVkaXQgRXZlbnRcclxuICAgICAgPC9hPlxyXG4gICAgIDwvTGluaz5cclxuICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9IG9uQ2xpY2s9e2RlbGV0ZUV2ZW50fT5cclxuICAgICAgPEZhVGltZXMgLz4gRGVsZXRlIEV2ZW50XHJcbiAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHNwYW4+XHJcbiAgICAge25ldyBEYXRlKGV2dC5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJyl9IGF0IHtldnQudGltZX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxoMT57ZXZ0Lm5hbWV9PC9oMT5cclxuICAgIHtldnQuaW1hZ2UgJiYgKFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtldnQuaW1hZ2UuZm9ybWF0cy5tZWRpdW0udXJsfSB3aWR0aD17OTYwfSBoZWlnaHQ9ezYwMH0gLz5cclxuICAgICA8L2Rpdj5cclxuICAgICl9XHJcblxyXG4gICAgPGgzPlBlcmZvcm1lcnM6PC9oMz5cclxuICAgIDxwPntldnQucGVyZm9ybWVyc308L3A+XHJcbiAgICA8aDM+RGVzY3JpcHRpb246PC9oMz5cclxuICAgIDxwPntldnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPGgzPlZlbnVlOiB7ZXZ0LnZlbnVlfTwvaDM+XHJcbiAgICA8cD57ZXZ0LmFkZHJlc3N9PC9wPlxyXG5cclxuICAgIDxMaW5rIGhyZWY9Jy9ldmVudHMnPlxyXG4gICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJhY2t9PnsnPCd9IEdvIEJhY2s8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4gKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzYCk7XHJcbiBjb25zdCBldmVudHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuIGNvbnN0IHBhdGhzID0gZXZlbnRzLm1hcCgoZXZ0KSA9PiAoe1xyXG4gIHBhcmFtczogeyBzbHVnOiBldnQuc2x1ZyB9LFxyXG4gfSkpO1xyXG5cclxuIHJldHVybiB7XHJcbiAgcGF0aHMsXHJcbiAgZmFsbGJhY2s6IHRydWUsXHJcbiB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcclxuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2V2ZW50cz9zbHVnPSR7c2x1Z31gKTtcclxuIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gcmV0dXJuIHtcclxuICBwcm9wczoge1xyXG4gICBldnQ6IGV2ZW50c1swXSxcclxuICB9LFxyXG4gIHJldmFsaWRhdGU6IDEsXHJcbiB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGYVBlbmNpbEFsdCIsIkZhVGltZXMiLCJMaW5rIiwiSW1hZ2UiLCJMYXlvdXQiLCJzdHlsZXMiLCJFdmVudFBhZ2UiLCJldnQiLCJkZWxldGVFdmVudCIsImUiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJjb250cm9scyIsImlkIiwiRGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0aW1lIiwibmFtZSIsImltYWdlIiwiZm9ybWF0cyIsIm1lZGl1bSIsInVybCIsInBlcmZvcm1lcnMiLCJkZXNjcmlwdGlvbiIsInZlbnVlIiwiYWRkcmVzcyIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9