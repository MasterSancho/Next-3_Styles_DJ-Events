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
        children: [evt.date, " at ", evt.time]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1tzbHVnXS4xMGJiNmRmN2UxZDIxNDA2ODY3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU00sU0FBVCxPQUE0QjtBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFDMUMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsR0FGRDs7QUFJQSxzQkFDQyw4REFBQyx1REFBRDtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFTix1RUFBaEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUFBLGdDQUNDLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSx5QkFBa0JFLEdBQUcsQ0FBQ08sRUFBdEIsQ0FBVjtBQUFBLGlDQUNDO0FBQUEsb0NBQ0MsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBTUM7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFTLEVBQUVULHdFQUF2QjtBQUFzQyxpQkFBTyxFQUFFRyxXQUEvQztBQUFBLGtDQUNDLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBWUM7QUFBQSxtQkFDRUQsR0FBRyxDQUFDUSxJQUROLFVBQ2dCUixHQUFHLENBQUNTLElBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpELGVBZUM7QUFBQSxrQkFBS1QsR0FBRyxDQUFDVTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRCxFQWdCRVYsR0FBRyxDQUFDVyxLQUFKLGlCQUNBO0FBQUssaUJBQVMsRUFBRWIsdUVBQWhCO0FBQUEsK0JBQ0MsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVFLEdBQUcsQ0FBQ1csS0FBSixDQUFVQyxPQUFWLENBQWtCQyxNQUFsQixDQUF5QkMsR0FBckM7QUFBMEMsZUFBSyxFQUFFLEdBQWpEO0FBQXNELGdCQUFNLEVBQUU7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkYsZUFzQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkQsZUF1QkM7QUFBQSxrQkFBSWQsR0FBRyxDQUFDZTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkQsZUF3QkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkQsZUF5QkM7QUFBQSxrQkFBSWYsR0FBRyxDQUFDZ0I7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJELGVBMEJDO0FBQUEsOEJBQVloQixHQUFHLENBQUNpQixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkQsZUEyQkM7QUFBQSxrQkFBSWpCLEdBQUcsQ0FBQ2tCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRCxlQTZCQyw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxFQUFFcEIsc0VBQWQ7QUFBQSxxQkFBNEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFxQ0E7S0ExQ3VCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvW3NsdWddLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhUGVuY2lsQWx0LCBGYVRpbWVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdjb25maWcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0V2ZW50Lm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRQYWdlKHsgZXZ0IH0pIHtcclxuIGNvbnN0IGRlbGV0ZUV2ZW50ID0gKGUpID0+IHtcclxuICBjb25zb2xlLmxvZygnZGVsZXRlJyk7XHJcbiB9O1xyXG5cclxuIHJldHVybiAoXHJcbiAgPExheW91dD5cclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2xzfT5cclxuICAgICA8TGluayBocmVmPXtgL2V2ZW50cy9lZGl0LyR7ZXZ0LmlkfWB9PlxyXG4gICAgICA8YT5cclxuICAgICAgIDxGYVBlbmNpbEFsdCAvPiBFZGl0IEV2ZW50XHJcbiAgICAgIDwvYT5cclxuICAgICA8L0xpbms+XHJcbiAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBvbkNsaWNrPXtkZWxldGVFdmVudH0+XHJcbiAgICAgIDxGYVRpbWVzIC8+IERlbGV0ZSBFdmVudFxyXG4gICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzcGFuPlxyXG4gICAgIHtldnQuZGF0ZX0gYXQge2V2dC50aW1lfVxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGgxPntldnQubmFtZX08L2gxPlxyXG4gICAge2V2dC5pbWFnZSAmJiAoXHJcbiAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2V2dC5pbWFnZS5mb3JtYXRzLm1lZGl1bS51cmx9IHdpZHRoPXs5NjB9IGhlaWdodD17NjAwfSAvPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgKX1cclxuXHJcbiAgICA8aDM+UGVyZm9ybWVyczo8L2gzPlxyXG4gICAgPHA+e2V2dC5wZXJmb3JtZXJzfTwvcD5cclxuICAgIDxoMz5EZXNjcmlwdGlvbjo8L2gzPlxyXG4gICAgPHA+e2V2dC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8aDM+VmVudWU6IHtldnQudmVudWV9PC9oMz5cclxuICAgIDxwPntldnQuYWRkcmVzc308L3A+XHJcblxyXG4gICAgPExpbmsgaHJlZj0nL2V2ZW50cyc+XHJcbiAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFja30+eyc8J30gR28gQmFjazwvYT5cclxuICAgIDwvTGluaz5cclxuICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbiApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHNgKTtcclxuIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gY29uc3QgcGF0aHMgPSBldmVudHMubWFwKChldnQpID0+ICh7XHJcbiAgcGFyYW1zOiB7IHNsdWc6IGV2dC5zbHVnIH0sXHJcbiB9KSk7XHJcblxyXG4gcmV0dXJuIHtcclxuICBwYXRocyxcclxuICBmYWxsYmFjazogdHJ1ZSxcclxuIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xyXG4gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzP3NsdWc9JHtzbHVnfWApO1xyXG4gY29uc3QgZXZlbnRzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiByZXR1cm4ge1xyXG4gIHByb3BzOiB7XHJcbiAgIGV2dDogZXZlbnRzWzBdLFxyXG4gIH0sXHJcbiAgcmV2YWxpZGF0ZTogMSxcclxuIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZhUGVuY2lsQWx0IiwiRmFUaW1lcyIsIkxpbmsiLCJJbWFnZSIsIkxheW91dCIsInN0eWxlcyIsIkV2ZW50UGFnZSIsImV2dCIsImRlbGV0ZUV2ZW50IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsImNvbnRyb2xzIiwiaWQiLCJkYXRlIiwidGltZSIsIm5hbWUiLCJpbWFnZSIsImZvcm1hdHMiLCJtZWRpdW0iLCJ1cmwiLCJwZXJmb3JtZXJzIiwiZGVzY3JpcHRpb24iLCJ2ZW51ZSIsImFkZHJlc3MiLCJiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==