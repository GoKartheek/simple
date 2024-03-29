webpackHotUpdate("static/development/pages/employees.js",{

/***/ "./pages/employees/index.js":
/*!**********************************!*\
  !*** ./pages/employees/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Link */ "./components/Link.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/User */ "./components/User.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var Employees = function Employees(_ref) {
  var t = _ref.t,
      users = _ref.users;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("main", null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/users"
  }, __jsx("a", null, "Go to users")), __jsx("div", null, users.slice(0, 10).map(function (user, index) {
    return __jsx(_components_User__WEBPACK_IMPORTED_MODULE_9__["default"], {
      user: user,
      key: "user-".concat(index)
    });
  }))));
};

Employees.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response, payload;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('http://dummy.restapiexample.com/api/v1/employees');

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();

        case 5:
          payload = _context.sent;
          console.log(payload.slice(0, 3));
          return _context.abrupt("return", {
            users: payload,
            namespacesRequired: ['translation']
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
Employees.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('translation')(Employees));

/***/ })

})
//# sourceMappingURL=employees.js.45d0eb10b0c10e058b59.hot-update.js.map