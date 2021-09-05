"use strict";
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
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

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "./config/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method === 'POST') {
    const {
      identifier,
      password
    } = req.body;
    const starapiRes = await fetch(`${config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier,
        password
      })
    });
    const data = await starapiRes.json();
    console.log(data.jwt);

    if (starapiRes.ok) {
      // @todo - Set cookie
      res.status(200).json({
        user: data.user
      });
    } else {
      res.status(data.statusCode).json({
        message: data.message[0].messages[0].message
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({
      message: `Method ${req.method} not allowed`
    });
  }
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQ25CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBRDdCO0FBR0EsTUFBTUMsUUFBUSxHQUNwQkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLHdCQUFaLElBQXdDLHVCQURsQztBQUdBLE1BQU1DLFFBQVEsR0FBRyxDQUFqQjs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDMUIsVUFBTTtBQUFFQyxNQUFBQSxVQUFGO0FBQWNDLE1BQUFBO0FBQWQsUUFBMkJKLEdBQUcsQ0FBQ0ssSUFBckM7QUFFQSxVQUFNQyxVQUFVLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVkLDJDQUFRLGFBQVosRUFBMEI7QUFDdkRTLE1BQUFBLE1BQU0sRUFBRSxNQUQrQztBQUV2RE0sTUFBQUEsT0FBTyxFQUFFO0FBQ1Isd0JBQWdCO0FBRFIsT0FGOEM7QUFLdkRILE1BQUFBLElBQUksRUFBRUksSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDcEJQLFFBQUFBLFVBRG9CO0FBRXBCQyxRQUFBQTtBQUZvQixPQUFmO0FBTGlELEtBQTFCLENBQTlCO0FBV0EsVUFBTU8sSUFBSSxHQUFHLE1BQU1MLFVBQVUsQ0FBQ00sSUFBWCxFQUFuQjtBQUVBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDSSxHQUFqQjs7QUFFQSxRQUFJVCxVQUFVLENBQUNVLEVBQWYsRUFBbUI7QUFDbEI7QUFDQWYsTUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JMLElBQWhCLENBQXFCO0FBQUVNLFFBQUFBLElBQUksRUFBRVAsSUFBSSxDQUFDTztBQUFiLE9BQXJCO0FBQ0EsS0FIRCxNQUdPO0FBQ05qQixNQUFBQSxHQUFHLENBQ0RnQixNQURGLENBQ1NOLElBQUksQ0FBQ1EsVUFEZCxFQUVFUCxJQUZGLENBRU87QUFBRVEsUUFBQUEsT0FBTyxFQUFFVCxJQUFJLENBQUNTLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxRQUFoQixDQUF5QixDQUF6QixFQUE0QkQ7QUFBdkMsT0FGUDtBQUdBO0FBQ0QsR0ExQkQsTUEwQk87QUFDTm5CLElBQUFBLEdBQUcsQ0FBQ3FCLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsTUFBRCxDQUF2QjtBQUNBckIsSUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JMLElBQWhCLENBQXFCO0FBQUVRLE1BQUFBLE9BQU8sRUFBRyxVQUFTcEIsR0FBRyxDQUFDRSxNQUFPO0FBQWhDLEtBQXJCO0FBQ0E7QUFDRCxDQS9CRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC8uL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9wYWdlcy9hcGkvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxyXG4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3JztcclxuXHJcbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9XHJcbiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQgY29uc3QgUEVSX1BBR0UgPSAyO1xyXG4iLCJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnY29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gIGNvbnN0IHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBjb25zdCBzdGFyYXBpUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXV0aC9sb2NhbGAsIHtcclxuICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgIH0sXHJcbiAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIGlkZW50aWZpZXIsXHJcbiAgICBwYXNzd29yZCxcclxuICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzdGFyYXBpUmVzLmpzb24oKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YS5qd3QpO1xyXG5cclxuICBpZiAoc3RhcmFwaVJlcy5vaykge1xyXG4gICAvLyBAdG9kbyAtIFNldCBjb29raWVcclxuICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyOiBkYXRhLnVzZXIgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgcmVzXHJcbiAgICAuc3RhdHVzKGRhdGEuc3RhdHVzQ29kZSlcclxuICAgIC5qc29uKHsgbWVzc2FnZTogZGF0YS5tZXNzYWdlWzBdLm1lc3NhZ2VzWzBdLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG4gfSBlbHNlIHtcclxuICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSk7XHJcbiB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJORVhUX1VSTCIsIk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCIsIlBFUl9QQUdFIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwiYm9keSIsInN0YXJhcGlSZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiand0Iiwib2siLCJzdGF0dXMiLCJ1c2VyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=