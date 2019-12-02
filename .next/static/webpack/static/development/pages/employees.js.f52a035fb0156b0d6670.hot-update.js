webpackHotUpdate("static/development/pages/employees.js",{

/***/ "./components/employee.js":
/*!********************************!*\
  !*** ./components/employee.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var User = function User(_ref) {
  var user = _ref.user;
  return __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "employee/".concat(user.id)
  }, __jsx("div", {
    className: "jsx-748990123" + " " + "user-wrapper"
  }, __jsx("div", {
    className: "jsx-748990123" + " " + "field"
  }, user.id), __jsx("div", {
    className: "jsx-748990123" + " " + "field"
  }, user.employee_name), __jsx("div", {
    className: "jsx-748990123" + " " + "field"
  }, user.employee_age), __jsx("div", {
    clasName: "field",
    className: "jsx-748990123"
  }, user.employee_salary), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "748990123"
  }, ".user-wrapper.jsx-748990123{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGVlay9EZXNrdG9wL3plbnJheXMvbmV4dC9sYW5nL3NpbXBsZS9jb21wb25lbnRzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVc0QixBQUdzQywwRUFDTSw2RkFDVSwySEFDaEIsYUFDakIiLCJmaWxlIjoiL1VzZXJzL2thcnRoZWVrL0Rlc2t0b3AvemVucmF5cy9uZXh0L2xhbmcvc2ltcGxlL2NvbXBvbmVudHMvZW1wbG95ZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rJztcblxuY29uc3QgVXNlciA9ICh7IHVzZXIgfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPExpbmsgaHJlZj17YGVtcGxveWVlLyR7dXNlci5pZH1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPnt1c2VyLmlkfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj57dXNlci5lbXBsb3llZV9uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj57dXNlci5lbXBsb3llZV9hZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzTmFtZT1cImZpZWxkXCI+e3VzZXIuZW1wbG95ZWVfc2FsYXJ5fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnVzZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG4vLyBVc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vZHVtbXkucmVzdGFwaWV4YW1wbGUuY29tL2FwaS92MS9lbXBsb3llZS8xJylcbi8vICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4vLyAgICAgcmV0dXJuIHsgdXNlcjogcGF5bG9hZCB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il19 */\n/*@ sourceURL=/Users/kartheek/Desktop/zenrays/next/lang/simple/components/employee.js */")));
}; // User.getInitialProps = async () => {
//     const response = await fetch('http://dummy.restapiexample.com/api/v1/employee/1')
//     const payload = await response.json()
//     return { user: payload }
// }


/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=employees.js.f52a035fb0156b0d6670.hot-update.js.map