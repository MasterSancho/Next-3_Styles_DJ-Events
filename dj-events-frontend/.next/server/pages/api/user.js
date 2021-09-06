"use strict";
(() => {
var exports = {};
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "NEXT_URL": () => (/* binding */ NEXT_URL),
/* harmony export */   "PER_PAGE": () => (/* binding */ PER_PAGE)
/* harmony export */ });
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
const PER_PAGE = 2;

/***/ }),

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./config/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({
        message: 'Not Authorized'
      });
      return;
    }

    const {
      token
    } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);
    const strapiRes = await fetch(`${config__WEBPACK_IMPORTED_MODULE_1__.API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({
        user
      });
    } else {
      res.status(403).json({
        message: 'User forbidden'
      });
    }
  } else {
    res.setHeader('Allow', [GET]);
    res.status(405).json({
      message: `Method ${req.method} not allowed`
    });
  }
});

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/user.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLE9BQU8sR0FDbkJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFEN0I7QUFHQSxNQUFNQyxRQUFRLEdBQ3BCSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsd0JBQVosSUFBd0MsdUJBRGxDO0FBR0EsTUFBTUMsUUFBUSxHQUFHLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0E7QUFFQSxpRUFBZSxPQUFPRSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDekIsUUFBSSxDQUFDRixHQUFHLENBQUNHLE9BQUosQ0FBWUosTUFBakIsRUFBeUI7QUFDeEJFLE1BQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQTs7QUFFRCxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBWVIsbURBQUEsQ0FBYUMsR0FBRyxDQUFDRyxPQUFKLENBQVlKLE1BQXpCLENBQWxCO0FBRUEsVUFBTVUsU0FBUyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFbEIsMkNBQVEsV0FBWixFQUF3QjtBQUNwRFUsTUFBQUEsTUFBTSxFQUFFLEtBRDRDO0FBRXBEQyxNQUFBQSxPQUFPLEVBQUU7QUFDUlEsUUFBQUEsYUFBYSxFQUFHLFVBQVNKLEtBQU07QUFEdkI7QUFGMkMsS0FBeEIsQ0FBN0I7QUFPQSxVQUFNSyxJQUFJLEdBQUcsTUFBTUgsU0FBUyxDQUFDSixJQUFWLEVBQW5COztBQUVBLFFBQUlJLFNBQVMsQ0FBQ0ksRUFBZCxFQUFrQjtBQUNqQlosTUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRU8sUUFBQUE7QUFBRixPQUFyQjtBQUNBLEtBRkQsTUFFTztBQUNOWCxNQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0QsR0F0QkQsTUFzQk87QUFDTkwsSUFBQUEsR0FBRyxDQUFDYSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDQyxHQUFELENBQXZCO0FBQ0FkLElBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRyxVQUFTTixHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDQTtBQUNELENBM0JEOzs7Ozs7Ozs7O0FDSEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vcGFnZXMvYXBpL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kL2V4dGVybmFsIFwiY29va2llXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxyXG4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3JztcclxuXHJcbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9XHJcbiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQgY29uc3QgUEVSX1BBR0UgPSAyO1xyXG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdjb25maWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6ICdOb3QgQXV0aG9yaXplZCcgfSk7XHJcbiAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdG9rZW4gfSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpO1xyXG5cclxuICBjb25zdCBzdHJhcGlSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS91c2Vycy9tZWAsIHtcclxuICAgbWV0aG9kOiAnR0VUJyxcclxuICAgaGVhZGVyczoge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBzdHJhcGlSZXMuanNvbigpO1xyXG5cclxuICBpZiAoc3RyYXBpUmVzLm9rKSB7XHJcbiAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXNlciB9KTtcclxuICB9IGVsc2Uge1xyXG4gICByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6ICdVc2VyIGZvcmJpZGRlbicgfSk7XHJcbiAgfVxyXG4gfSBlbHNlIHtcclxuICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFtHRVRdKTtcclxuICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSk7XHJcbiB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTkVYVF9VUkwiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSIsImNvb2tpZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRva2VuIiwicGFyc2UiLCJzdHJhcGlSZXMiLCJmZXRjaCIsIkF1dGhvcml6YXRpb24iLCJ1c2VyIiwib2siLCJzZXRIZWFkZXIiLCJHRVQiXSwic291cmNlUm9vdCI6IiJ9