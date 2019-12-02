webpackHotUpdate("static/development/pages/employees.js",{

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hocs_with_internals__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hocs/with-internals */ "./hocs/with-internals.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

/*
  This `Link` component is a wrap of the standard
  NextJs `Link` component, with some simple lang
  redirect logic in place.
  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347
  This component automatically provides this functionality:
  <Link href="/product?slug=something" as="/products/something">
  Wherein `slug` is actually our i18n lang, and it gets
  pulled automatically.
  Very important: if you import `Link` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/



 // import { I18n, Config } from '../../types.d'





var removeWithTranslationProps = function removeWithTranslationProps(props) {
  var strippedProps = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_7___default()({}, props);

  delete strippedProps.defaultNS;
  delete strippedProps.i18n;
  delete strippedProps.i18nOptions;
  delete strippedProps.lng;
  delete strippedProps.reportNS;
  delete strippedProps.t;
  delete strippedProps.tReady;
  delete strippedProps.forwardedRef;
  return strippedProps;
}; // type Props = LinkProps & {
//   i18n: I18n;
//   nextI18NextInternals: {
//     config: Config;
//   };
// }


var Link =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Link, _React$Component);

  function Link() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Link);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Link).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Link, [{
    key: "render",
    //   static defaultProps = {
    //     as: undefined,
    //   }
    value: function render() {
      var _this$props = this.props,
          as = _this$props.as,
          children = _this$props.children,
          href = _this$props.href,
          i18n = _this$props.i18n,
          nextI18NextInternals = _this$props.nextI18NextInternals,
          props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "children", "href", "i18n", "nextI18NextInternals"]);

      console.log('*', this.props);
      var language = i18n.language;
      var config = nextI18NextInternals.config;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_12__["subpathIsRequired"])(config, language)) {
        var _lngPathCorrector = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["lngPathCorrector"])(config, {
          as: as,
          href: href
        }, language),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          href: correctedHref,
          as: correctedAs
        }, removeWithTranslationProps(props)), children);
      }

      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        href: href,
        as: as
      }, removeWithTranslationProps(props)), children);
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Link.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object]).isRequired,
  nextI18NextInternals: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    config: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
      defaultLanguage: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
      localeSubpaths: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
    }).isRequired
  }).isRequired,
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};
var nextI18NextInternals = {
  config: _i18n__WEBPACK_IMPORTED_MODULE_13___default.a.config,
  i18n: _i18n__WEBPACK_IMPORTED_MODULE_13___default.a.i18n
};
/*
  Usage of `withTranslation` here is just to
  force `Link` to rerender on language change
*/

/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_with_internals__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["withTranslation"])()(Link), nextI18NextInternals));

/***/ })

})
//# sourceMappingURL=employees.js.386ab7a7d8c5c2e0542b.hot-update.js.map