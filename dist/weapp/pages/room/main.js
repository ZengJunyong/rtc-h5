require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(21);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_37b6c60c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(29);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(22)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-37b6c60c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_37b6c60c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/room/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37b6c60c", Component.options)
  } else {
    hotAPI.reload("data-v-37b6c60c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "room",
  data: function data() {
    return {
      previewVideo: false,
      remoteVideo: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      lengthOfRemoteVideo: 0,
      enableCamera: true,
      enableMic: true
    };
  },
  mounted: function mounted() {},

  methods: {
    toggleCamera: function toggleCamera() {
      this.enableCamera = !this.enableCamera;
      zg.enableCamera(this.enableCamera);
    },
    toggleMic: function toggleMic() {
      this.enableMic = !this.enableMic;
      zg.enableMicrophone(this.enableMic);
    }
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container flex"
  }, [_c('div', {
    staticClass: "room",
    class: _vm.lengthOfRemoteVideo <= 3 ? '' : 'scroll'
  }, [_c('div', {
    staticClass: "video flex-center",
    class: _vm.previewVideo ? '' : 'opacity55'
  }, [_c('video', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.previewVideo),
      expression: "previewVideo"
    }],
    attrs: {
      "id": "previewVideo",
      "muted": "",
      "autoplay": "",
      "playsinline": "",
      "controls": ""
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.previewVideo),
      expression: "!previewVideo"
    }],
    attrs: {
      "src": "/static/roomset_1.png",
      "alt": ""
    }
  })]), _vm._v(" "), _vm._l((_vm.remoteVideo), function(r, i) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.lengthOfRemoteVideo <= 3 ? i < 3 : i < _vm.lengthOfRemoteVideo),
        expression: "lengthOfRemoteVideo<=3? i<3: i<lengthOfRemoteVideo"
      }],
      staticClass: "video flex-center",
      class: r ? '' : 'opacity55'
    }, [_c('video', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (r),
        expression: "r"
      }],
      staticClass: "remoteVideo",
      attrs: {
        "autoplay": "",
        "playsinline": "",
        "controls": ""
      }
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!r),
        expression: "!r"
      }],
      attrs: {
        "src": '/static/roomset_' + (i + 2) + '.png',
        "alt": ""
      }
    })])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('img', {
    attrs: {
      "src": '/static/camera' + (_vm.enableCamera ? '' : '-dis') + '.png',
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.toggleCamera
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": '/static/mic' + (_vm.enableMic ? '' : '-dis') + '.png',
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleMic
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37b6c60c", esExports)
  }
}

/***/ })

},[20]);
//# sourceMappingURL=main.js.map