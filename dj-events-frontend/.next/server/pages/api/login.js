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
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./config/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method === 'POST') {
    const {
      identifier,
      password
    } = req.body;
    const starapiRes = await fetch(`${config__WEBPACK_IMPORTED_MODULE_1__.API_URL}/auth/local`, {
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

    if (starapiRes.ok) {
      // Set cookie
      res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('token', data.jwt, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7,
        // 1 week
        sameSite: 'strict',
        path: '/'
      }));
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQ25CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBRDdCO0FBR0EsTUFBTUMsUUFBUSxHQUNwQkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLHdCQUFaLElBQXdDLHVCQURsQztBQUdBLE1BQU1DLFFBQVEsR0FBRyxDQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOUDtBQUNBO0FBRUEsaUVBQWUsT0FBT0UsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2xDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQzFCLFVBQU07QUFBRUMsTUFBQUEsVUFBRjtBQUFjQyxNQUFBQTtBQUFkLFFBQTJCSixHQUFHLENBQUNLLElBQXJDO0FBRUEsVUFBTUMsVUFBVSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFZiwyQ0FBUSxhQUFaLEVBQTBCO0FBQ3ZEVSxNQUFBQSxNQUFNLEVBQUUsTUFEK0M7QUFFdkRNLE1BQUFBLE9BQU8sRUFBRTtBQUNSLHdCQUFnQjtBQURSLE9BRjhDO0FBS3ZESCxNQUFBQSxJQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3BCUCxRQUFBQSxVQURvQjtBQUVwQkMsUUFBQUE7QUFGb0IsT0FBZjtBQUxpRCxLQUExQixDQUE5QjtBQVdBLFVBQU1PLElBQUksR0FBRyxNQUFNTCxVQUFVLENBQUNNLElBQVgsRUFBbkI7O0FBRUEsUUFBSU4sVUFBVSxDQUFDTyxFQUFmLEVBQW1CO0FBQ2xCO0FBQ0FaLE1BQUFBLEdBQUcsQ0FBQ2EsU0FBSixDQUNDLFlBREQsRUFFQ2YsdURBQUEsQ0FBaUIsT0FBakIsRUFBMEJZLElBQUksQ0FBQ0ssR0FBL0IsRUFBb0M7QUFDbkNDLFFBQUFBLFFBQVEsRUFBRSxJQUR5QjtBQUVuQ0MsUUFBQUEsTUFBTSxPQUY2QjtBQUduQ0MsUUFBQUEsTUFBTSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxDQUhZO0FBR1Q7QUFDMUJDLFFBQUFBLFFBQVEsRUFBRSxRQUp5QjtBQUtuQ0MsUUFBQUEsSUFBSSxFQUFFO0FBTDZCLE9BQXBDLENBRkQ7QUFXQXBCLE1BQUFBLEdBQUcsQ0FBQ3FCLE1BQUosQ0FBVyxHQUFYLEVBQWdCVixJQUFoQixDQUFxQjtBQUFFVyxRQUFBQSxJQUFJLEVBQUVaLElBQUksQ0FBQ1k7QUFBYixPQUFyQjtBQUNBLEtBZEQsTUFjTztBQUNOdEIsTUFBQUEsR0FBRyxDQUNEcUIsTUFERixDQUNTWCxJQUFJLENBQUNhLFVBRGQsRUFFRVosSUFGRixDQUVPO0FBQUVhLFFBQUFBLE9BQU8sRUFBRWQsSUFBSSxDQUFDYyxPQUFMLENBQWEsQ0FBYixFQUFnQkMsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEJEO0FBQXZDLE9BRlA7QUFHQTtBQUNELEdBbkNELE1BbUNPO0FBQ054QixJQUFBQSxHQUFHLENBQUNhLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsTUFBRCxDQUF2QjtBQUNBYixJQUFBQSxHQUFHLENBQUNxQixNQUFKLENBQVcsR0FBWCxFQUFnQlYsSUFBaEIsQ0FBcUI7QUFBRWEsTUFBQUEsT0FBTyxFQUFHLFVBQVN6QixHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDQTtBQUNELENBeENEOzs7Ozs7Ozs7O0FDSEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vcGFnZXMvYXBpL2xvZ2luLmpzIiwid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC9leHRlcm5hbCBcImNvb2tpZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMID1cclxuIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNyc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVYVF9VUkwgPVxyXG4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBFUl9QQUdFID0gMjtcclxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnY29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gIGNvbnN0IHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBjb25zdCBzdGFyYXBpUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXV0aC9sb2NhbGAsIHtcclxuICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgIH0sXHJcbiAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIGlkZW50aWZpZXIsXHJcbiAgICBwYXNzd29yZCxcclxuICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzdGFyYXBpUmVzLmpzb24oKTtcclxuXHJcbiAgaWYgKHN0YXJhcGlSZXMub2spIHtcclxuICAgLy8gU2V0IGNvb2tpZVxyXG4gICByZXMuc2V0SGVhZGVyKFxyXG4gICAgJ1NldC1Db29raWUnLFxyXG4gICAgY29va2llLnNlcmlhbGl6ZSgndG9rZW4nLCBkYXRhLmp3dCwge1xyXG4gICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXHJcbiAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLyAxIHdlZWtcclxuICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXHJcbiAgICAgcGF0aDogJy8nLFxyXG4gICAgfSlcclxuICAgKTtcclxuXHJcbiAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXNlcjogZGF0YS51c2VyIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgIHJlc1xyXG4gICAgLnN0YXR1cyhkYXRhLnN0YXR1c0NvZGUpXHJcbiAgICAuanNvbih7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZVswXS5tZXNzYWdlc1swXS5tZXNzYWdlIH0pO1xyXG4gIH1cclxuIH0gZWxzZSB7XHJcbiAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pO1xyXG4gfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7Il0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIk5FWFRfVVJMIiwiTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIiwiUEVSX1BBR0UiLCJjb29raWUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJib2R5Iiwic3RhcmFwaVJlcyIsImZldGNoIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9rIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiand0IiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJ1c2VyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJtZXNzYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=