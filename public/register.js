(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=template&id=aacc3324&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register.vue?vue&type=template&id=aacc3324& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-md-8"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Register")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    attrs: {
      method: "POST",
      action: "http://127.0.0.1:8000/register"
    }
  }, [_c("input", {
    attrs: {
      type: "hidden",
      name: "_token",
      value: "u88hsTlOOtJZo0nS8oHiSUNAFwLZk0UOa0b2ehXz"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-4 col-form-label text-md-right",
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      id: "name",
      type: "text",
      name: "name",
      value: "",
      required: "required",
      autocomplete: "name",
      autofocus: "autofocus"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-4 col-form-label text-md-right",
    attrs: {
      "for": "email"
    }
  }, [_vm._v("E-Mail Address")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      id: "email",
      type: "email",
      name: "email",
      value: "",
      required: "required",
      autocomplete: "email"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-4 col-form-label text-md-right",
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      id: "password",
      type: "password",
      name: "password",
      required: "required",
      autocomplete: "new-password"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-4 col-form-label text-md-right",
    attrs: {
      "for": "password-confirm"
    }
  }, [_vm._v("Confirm Password")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      id: "password-confirm",
      type: "password",
      name: "password_confirmation",
      required: "required",
      autocomplete: "new-password"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row mb-0"
  }, [_c("div", {
    staticClass: "col-md-6 offset-md-4"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\r\n                                    Register\r\n                                ")])])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/register.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=aacc3324& */ "./resources/js/components/register.vue?vue&type=template&id=aacc3324&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/register.vue?vue&type=template&id=aacc3324&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/register.vue?vue&type=template&id=aacc3324& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=aacc3324& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register.vue?vue&type=template&id=aacc3324&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_aacc3324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);