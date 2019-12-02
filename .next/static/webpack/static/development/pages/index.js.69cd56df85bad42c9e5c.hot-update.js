webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




 // import Link from 'next/link';



var Header = function Header(_ref) {
  var t = _ref.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].language),
      select = _useState[0],
      setSelect = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].changeLanguage(select);
  }, [select]);

  var handleSelect = function handleSelect(event) {
    event.preventDefault();
    setSelect(event.target.value);
  };

  return __jsx("div", {
    className: "jsx-2737128962"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("title", {
    className: "jsx-2737128962"
  }, "next-i18next"), __jsx("link", {
    href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
    rel: "stylesheet",
    className: "jsx-2737128962"
  }), __jsx("link", {
    href: "/static/app.css",
    rel: "stylesheet",
    className: "jsx-2737128962"
  }), __jsx("link", {
    href: "https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css",
    rel: "stylesheet",
    className: "jsx-2737128962"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600",
    rel: "stylesheet",
    className: "jsx-2737128962"
  }), __jsx("link", {
    "data-react-helmet": "true",
    rel: "icon",
    href: "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media",
    className: "jsx-2737128962"
  })), __jsx("div", {
    className: "jsx-2737128962" + " " + "header-wrapper"
  }, __jsx("div", {
    className: "jsx-2737128962" + " " + "header-item"
  }, "next-i18next"), __jsx("div", {
    className: "jsx-2737128962" + " " + "header-item"
  }, t('operabase.general.m_INTRODUCTION')), __jsx("div", {
    className: "jsx-2737128962" + " " + "header-links"
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "/"
  }, __jsx("a", {
    className: "jsx-2737128962"
  }, "Home")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "employees"
  }, __jsx("a", {
    className: "jsx-2737128962"
  }, "Employees"))), __jsx("select", {
    value: select,
    onChange: handleSelect,
    className: "jsx-2737128962"
  }, __jsx("option", {
    value: "en",
    className: "jsx-2737128962"
  }, "EN"), __jsx("option", {
    value: "de",
    className: "jsx-2737128962"
  }, "DE"), __jsx("option", {
    value: "es",
    className: "jsx-2737128962"
  }, "ES"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2737128962"
  }, ".header-wrapper.jsx-2737128962{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;height:100px;background-color:white;position:fixed;top:0;left:0;width:100%;color:gray;-webkit-text-decoration:none;text-decoration:none;}.header-links.jsx-2737128962>*.jsx-2737128962{padding:0 20px;color:gray;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGVlay9EZXNrdG9wL3plbnJheXMvbmV4dC9sYW5nL3NpbXBsZS9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRG9CLEFBRzBCLEFBZUUsZUFDSixXQUNVLGdEQWhCRixFQWlCckIsMkZBaEIrQiwySEFDaEIsYUFDVSx1QkFDUixlQUNULE1BQ0MsT0FDSSxXQUNBLFdBQ1Usa0RBRXZCIiwiZmlsZSI6Ii9Vc2Vycy9rYXJ0aGVlay9EZXNrdG9wL3plbnJheXMvbmV4dC9sYW5nL3NpbXBsZS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gIH0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL0xpbmsnO1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEhlYWRlciA9ICh7IHQgfSkgPT4ge1xuICBjb25zdCBbIHNlbGVjdCwgc2V0U2VsZWN0IF0gPSB1c2VTdGF0ZShpMThuLmxhbmd1YWdlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2Uoc2VsZWN0KVxuICB9LCBbc2VsZWN0XSlcblxuICBsZXQgaGFuZGxlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWxlY3QoZXZlbnQudGFyZ2V0LnZhbHVlKVxuXG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5uZXh0LWkxOG5leHQ8L3RpdGxlPlxuXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21leWVyLXJlc2V0LzIuMC9yZXNldC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvYXBwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R5cGljb25zLzIuMC45L3R5cGljb25zLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwfE9zd2FsZDo2MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8bGluayBkYXRhLXJlYWN0LWhlbG1ldD1cInRydWVcIiByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vYmxvYnNjZG4uZ2l0Ym9vay5jb20vdjAvYi9naXRib29rLTI4NDI3LmFwcHNwb3QuY29tL28vc3BhY2VzJTJGLUw5aVM2V20yaHluUzVIOUdqN2olMkZhdmF0YXIucG5nP2dlbmVyYXRpb249MTUyMzQ2MjI1NDU0ODc4MCZhbXA7YWx0PW1lZGlhXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7LyogPGgyPlxuICAgICAgICAgIG5leHQtaTE4bmV4dFxuICAgICAgICAgIDxociAvPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgXG4gICAgICAgIDwvaDE+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaXRlbVwiPm5leHQtaTE4bmV4dDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWl0ZW1cIj57dCgnb3BlcmFiYXNlLmdlbmVyYWwubV9JTlRST0RVQ1RJT04nKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5rc1wiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5Ib21lPC9hPjwvTGluaz5cbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwidXNlcnNcIj48YT5Vc2VyczwvYT48L0xpbms+ICovfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImVtcGxveWVlc1wiPjxhPkVtcGxveWVlczwvYT48L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0fSBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlblwiPkVOPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVcIj5ERTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVzXCI+RVM8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVhZGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci1saW5rcyA+ICoge1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkhlYWRlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsndHJhbnNsYXRpb24nXSxcbn0pXG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigndHJhbnNsYXRpb24nKShIZWFkZXIpXG5cbiJdfQ== */\n/*@ sourceURL=/Users/kartheek/Desktop/zenrays/next/lang/simple/components/Header.js */"));
};

Header.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            namespacesRequired: ['translation']
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
Header.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])('translation')(Header));

/***/ })

})
//# sourceMappingURL=index.js.69cd56df85bad42c9e5c.hot-update.js.map