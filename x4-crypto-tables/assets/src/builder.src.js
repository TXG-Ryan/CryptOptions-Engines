/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://192.168.1.101:8000/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var globName = X4CryptoTables;
var x4plugin = window[globName];
/* harmony default export */ __webpack_exports__["a"] = ({
  components: function (modules) {
    var components = {};

    for (var name in modules) {
      components[name] = modules[name].default;
    }

    return components;
  },
  variables: function (methods) {
    var _loop = function (name) {
      var wrappedMethod = methods[name];

      methods[name] = function () {
        var args = [].slice.call(arguments);
        args.unshift({
          state: this.$store.state,
          getters: this.$store.getters,
          commit: this.$store.commit,
          dispatch: this.$store.dispatch
        });
        return wrappedMethod.apply(this, args);
      };
    };

    for (var name in methods) {
      _loop(name);
    }

    return methods;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Style/Style.vue?vue&type=template&id=69a6a5ad&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Style',{attrs:{"type":"text/css"},domProps:{"innerHTML":_vm._s(_vm.output)}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Style/Style.vue?vue&type=template&id=69a6a5ad&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Style/Style.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Stylevue_type_script_lang_js_ = ({
  props: ['scale', 'colors'],
  data: function () {
    return {
      text: this.$slots.default ? this.$slots.default[0].text : ''
    };
  },
  updated: function () {
    if (this.$slots.default && this.text !== this.$slots.default[0].text) {
      this.text = this.$slots.default[0].text;
    }
  },
  computed: {
    ascale: function () {
      return parseFloat(this.scale || this.$vnode.context.scale) || 1;
    },
    acolors: function () {
      return this.colors || this.$root.colors || this.$store.state.colors;
    },
    output: function () {
      var _this = this;

      var result = '';
      var text = this.text;
      text = this.applyScale(text);
      text = this.applyColor(text);

      var _this$buildBlocks = this.buildBlocks(text),
          blocks = _this$buildBlocks.blocks,
          extraBlocks = _this$buildBlocks.extraBlocks;

      blocks = this.buildMultiBlocks(blocks);
      extraBlocks.forEach(function (extraBlock) {
        extraBlock.blocks = _this.buildMultiBlocks(extraBlock.blocks);
      });
      result += this.buildOutput(blocks);
      result += this.buildExtraOutput(extraBlocks);
      return result;
    }
  },
  methods: {
    buildBlocks: function (text) {
      var blocks = [];
      var curSelector = [];
      var curProps = [];
      var extraBlocks = [];
      var curExtraBlock = {
        key: false,
        name: false,
        blocks: []
      };

      var pushBlock = function () {
        if (curProps.length === 0) {
          return;
        }

        var container = curExtraBlock.name ? curExtraBlock.blocks : blocks;
        container.push({
          selector: curSelector,
          props: curProps
        });
        curProps = [];
      };

      text.split('\n').forEach(function (line) {
        var trimmed = line.trim();
        var splitted = trimmed.split(': ');

        if (trimmed.length === 0) {
          return;
        }

        if (trimmed.match(/\{$/)) {
          pushBlock();

          if (trimmed.match(/^@/)) {
            curExtraBlock.key = trimmed.match(/^(@[^\s]+)\s/)[1];
          }

          curExtraBlock.name = trimmed.match(/^(.+)\{$/)[1].trim();
          return;
        }

        if (trimmed === '}') {
          pushBlock();

          if (curExtraBlock.blocks.length > 0) {
            extraBlocks.push(curExtraBlock);
          }

          curExtraBlock = {
            key: false,
            name: false,
            blocks: []
          };
          return;
        }

        if (splitted.length === 1) {
          pushBlock();
          var index = Math.ceil(line.match(/^\s*/)[0].length / 2) - (curExtraBlock.name ? 1 : 0);
          curSelector = curSelector.slice(0, index + 1);
          curSelector[index] = trimmed;
        } else {
          curProps.push({
            name: splitted[0].trim(),
            value: splitted.slice(1).join(':').trim()
          });
        }
      });
      pushBlock();
      return {
        blocks: blocks,
        extraBlocks: extraBlocks
      };
    },
    applyScale: function (text) {
      var _this2 = this;

      return text.replace(/\$scale\(([^)]+)\)/g, function (match, value) {
        if (_this2.ascale !== 1) {
          value = value.replace(/[0-9.]+/g, function (match) {
            return _this2.ascale * parseFloat(match);
          });
        }

        return value;
      });
    },
    applyColor: function (text) {
      var _this3 = this;

      return text.replace(/\$color\(([^)]+)\)/g, function (match, value) {
        var colorString = value.split(',')[0].trim();
        var opacityString = (value.split(',')[1] || '').trim();
        value = _this3.acolors[colorString];

        if (opacityString) {
          var opacity = parseFloat(opacityString);

          if (_this3.acolors.dark && opacity <= .16 && opacityString.substr(opacityString.length - 1, 1) !== '!') {
            opacity *= 2;
          }

          if (opacity < 1) {
            opacity = opacity.toString().replace('0.', '.');
          }

          value = value.replace(/,\s*[0-9.]+\s*\)$/g, ',' + opacity + ')');
        }

        return value;
      });
    },
    buildMultiBlocks: function (blocks) {
      var multiBlocks = [];
      blocks.forEach(function (block) {
        var selectors = [[]];
        block.selector.forEach(function (subselectors, index) {
          var tmpselectors = [];
          subselectors = subselectors.split(',');

          var _loop = function (i) {
            selectors.forEach(function (selector) {
              var tmpselector = selector.slice();
              tmpselector[index] = subselectors[i].trim();
              tmpselectors.push(tmpselector);
            });
          };

          for (var i = 0; i < subselectors.length; i++) {
            _loop(i);
          }

          selectors = tmpselectors;
        });
        selectors.forEach(function (selector) {
          multiBlocks.push(Object.assign({}, block, {
            selector: selector
          }));
        });
      });
      return multiBlocks;
    },
    buildOutput: function (blocks, noUnique) {
      var _this4 = this;

      var output = '';
      var restrictedUnique = ['@font-face'];
      blocks.forEach(function (block) {
        noUnique = noUnique || restrictedUnique.indexOf(block.selector[0]) !== -1;

        if (!noUnique) {
          var parts = block.selector[0].split(' ');
          parts[0] += '[data-x4wp="' + (_this4.$vnode.context.x4wp || _this4.$parent.x4wp) + '"]';
          block.selector[0] = parts.join(' ');
        }

        block.selector = block.selector.join(' ').replace(/ &/g, '');
        block.selector = block.selector.replace(/ > /g, '>');
        var props = block.props.map(function (prop) {
          return prop.name + ':' + prop.value;
        });
        output += block.selector + '{' + props.join(';') + '}';
      });
      return output;
    },
    buildExtraOutput: function (extraBlocks) {
      var _this5 = this;

      var output = '';
      var restrictedUnique = ['@block', '@keyframes'];
      extraBlocks.forEach(function (extraBlock) {
        var noUnique = restrictedUnique.indexOf(extraBlock.key) !== -1;

        var extraOutput = _this5.buildOutput(extraBlock.blocks, noUnique);

        output += extraBlock.key !== '@block' ? extraBlock.name + '{' + extraOutput + '}' : extraOutput;
      });
      return output;
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Style/Style.vue?vue&type=script&lang=js&
 /* harmony default export */ var Style_Stylevue_type_script_lang_js_ = (Stylevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Style/Style.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Style_Stylevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Style.vue"
/* harmony default export */ var Style = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/DIV/DIV.vue?vue&type=template&id=5844510a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.atag,{tag:"div",attrs:{"data-x4wp":_vm.x4wp}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/DIV/DIV.vue?vue&type=template&id=5844510a&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/DIV/DIV.vue?vue&type=script&lang=js&
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

/* harmony default export */ var DIVvue_type_script_lang_js_ = ({
  props: ['tag', 'level'],
  created: function () {
    var parent = this.$parent;
    this.x4wp = !parent.x4wp ? Math.random().toString(36).substr(2, 8) : parent.x4wp;

    if (this.level) {
      var current = this;

      for (var i = 0; i < this.level; i++) {
        current.$parent.x4wp = this.x4wp;
        current = this.$parent;
      }
    } else {
      while (!parent.x4wp && parent !== this.$root) {
        parent.x4wp = this.x4wp;
        parent = parent.$parent;
      }
    }
  },
  computed: map["a" /* default */].variables({
    atag: function () {
      return this.tag || 'div';
    }
  })
});
// CONCATENATED MODULE: ./common/components/ui/DIV/DIV.vue?vue&type=script&lang=js&
 /* harmony default export */ var DIV_DIVvue_type_script_lang_js_ = (DIVvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/DIV/DIV.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  DIV_DIVvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "DIV.vue"
/* harmony default export */ var DIV = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInput/BOInput.vue?vue&type=template&id=30dee56c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Input',{attrs:{"scale":".75","type":_vm.type,"value":_vm.value,"options":_vm.options},on:{"change":_vm.change}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOInput/BOInput.vue?vue&type=template&id=30dee56c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInput/BOInput.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOInputvue_type_script_lang_js_ = ({
  props: ['type', 'path', 'value', 'options'],
  components: map["a" /* default */].components({
    Input: __webpack_require__(21)
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;

      if (this.type === 'number') {
        value = parseFloat(value);
      }

      if (this.$listeners && this.$listeners.change) {
        return this.$emit('change', {
          value: value
        });
      }

      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOInput/BOInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOInput_BOInputvue_type_script_lang_js_ = (BOInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOInput/BOInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOInput_BOInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOInput.vue"
/* harmony default export */ var BOInput = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOActions/BOActions.vue?vue&type=template&id=6da126d6&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-bo-actions"},[_c('div',{staticClass:"x4-buttons"},[_c('Icon',{staticClass:"x4-transition",attrs:{"icon":"cancel","title":"Cancel changes"},nativeOn:{"click":function($event){return _vm.resetInitial($event)}}}),_c('Icon',{staticClass:"x4-transition",attrs:{"icon":"refresh","title":"Reset to default value"},nativeOn:{"click":function($event){return _vm.resetDefault($event)}}})],1),_c('Style',[_vm._v(".x4-bo-actions\n  display: flex\n  flex-direction: column\n  line-height: 0\n  margin: -14px -12px 8px 0\n\n  .x4-buttons\n    display: flex\n    justify-content: flex-end\n\n  .x4-ui-icon\n    color: $color(accent)\n    cursor: pointer\n    font-size: 14px\n    margin-left: 2px\n\n    &:hover\n      transform: scale(1.2)\n\n    &.x4-glob-button\n      margin-right: 2px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOActions/BOActions.vue?vue&type=template&id=6da126d6&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOActions/BOActions.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOActionsvue_type_script_lang_js_ = ({
  props: ['path'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7)
  }),
  computed: map["a" /* default */].variables({
    paths: function () {
      return !Array.isArray(this.path) ? [this.path] : this.path;
    }
  }),
  methods: map["a" /* default */].variables({
    resetInitial: function (_ref) {
      var dispatch = _ref.dispatch;
      this.paths.forEach(function (path) {
        dispatch('builder/reset/initial/option', {
          path: path
        });
      });
    },
    resetDefault: function (_ref2) {
      var dispatch = _ref2.dispatch;
      this.paths.forEach(function (path) {
        dispatch('builder/reset/default/option', {
          path: path
        });
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOActions/BOActions.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOActions_BOActionsvue_type_script_lang_js_ = (BOActionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOActions/BOActions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOActions_BOActionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOActions.vue"
/* harmony default export */ var BOActions = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/base/BBSection/BBSection.vue?vue&type=template&id=73bccaac&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{class:_vm.baseClass},[_c('div',{staticClass:"x4-header",on:{"click":_vm.open}},[_c('Icon',{staticClass:"x4-icon x4-transition",attrs:{"icon":"arrow_right"}}),_c('Icon',{staticClass:"x4-icon2",attrs:{"icon":_vm.icon}}),_c('div',{staticClass:"x4-title"},[_vm._v(_vm._s(_vm.title))]),(_vm.visibility)?_c('Switchbox',{staticClass:"x4-visibility",attrs:{"scale":".875","value":_vm.avisible},on:{"change":_vm.changeVisibility}}):_vm._e()],1),_c('DropDown',{staticClass:"x4-content",attrs:{"opened":_vm.aopened}},[_vm._t("default")],2),_c('Style',[_vm._v(".x4-bb-section\n  display: flex\n  flex-direction: column\n\n  > .x4-header\n    align-items: center\n    background-color: $color(primary, .06)\n    border-bottom: 1px solid $color(primary, .06)\n    cursor: pointer\n    display: flex\n    flex-basis: 40px\n\n    .x4-icon\n      font-size: 18px\n      margin-left: 12px\n      margin-top: -1px\n      transform: rotate(0)\n\n    .x4-icon2\n      font-size: 20px\n      margin-right: 4px\n      margin-top: -1px\n\n    .x4-visibility\n      margin-right: 16px\n\n    .x4-title\n      flex-grow: 1\n      font-size: 14px\n      margin-right: 16px\n      overflow-x: hidden\n      text-overflow: ellipsis\n      white-space: nowrap\n\n  &.x4-opened > .x4-header .x4-icon\n    transform: rotate(90deg)\n\n  > .x4-content\n    display: flex\n    flex-direction: column\n\n    > .x4-inside\n      display: flex\n      flex-direction: column\n      flex-shrink: 0\n\n  &.x4-fill > .x4-content\n    background-color: $color(primary, .09)\n    border-bottom: 1px solid $color(primary, .06)\n\n    > .x4-inside\n      font-size: 12px\n      padding: 16px 16px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/base/BBSection/BBSection.vue?vue&type=template&id=73bccaac&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/base/BBSection/BBSection.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BBSectionvue_type_script_lang_js_ = ({
  props: ['fill', 'path', 'opened', 'visibility', 'visible', 'icon', 'title'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7),
    Switchbox: __webpack_require__(22),
    DropDown: __webpack_require__(16)
  }),
  data: function () {
    return {
      aopened: this.opened !== undefined ? this.opened : false
    };
  },
  computed: map["a" /* default */].variables({
    baseClass: function () {
      return {
        'x4-bb-section': true,
        'x4-opened': this.aopened,
        'x4-fill': !!this.fill
      };
    },
    avisible: function () {
      return this.visible !== undefined ? this.visible : true;
    }
  }),
  methods: map["a" /* default */].variables({
    open: function () {
      this.aopened = !this.aopened;
    },
    changeVisibility: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;
      dispatch('builder/option/change', {
        path: this.path + '.visible',
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/base/BBSection/BBSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var BBSection_BBSectionvue_type_script_lang_js_ = (BBSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/base/BBSection/BBSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BBSection_BBSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BBSection.vue"
/* harmony default export */ var BBSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Icon/Icon.vue?vue&type=template&id=77a7a7c2&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:_vm.baseClass},[_vm._v(_vm._s(_vm.icon)),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Icon/Icon.vue?vue&type=template&id=77a7a7c2&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Icon/Icon.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Iconvue_type_script_lang_js_ = ({
  props: ['icon'],
  data: function () {
    return {
      visible: document.fonts && document.fonts.check ? document.fonts.check('12px \'Material Icons\'') : true
    };
  },
  mounted: function () {
    var _this = this;

    if (!this.visible) {
      document.fonts.load('12px \'Material Icons\'').then(function (fonts) {
        if (fonts.length > 0) {
          _this.visible = true;
        }
      });
    }
  },
  computed: {
    baseClass: function () {
      var result = {};
      result['x4-ui-icon'] = true;
      result['material-icons'] = true;
      return result;
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Icon/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icon_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Icon/Icon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Icon_Iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Icon.vue"
/* harmony default export */ var Icon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/base/BBOption/BBOption.vue?vue&type=template&id=e38c293e&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{class:_vm.baseClass},[_c('div',{staticClass:"x4-header",on:{"click":_vm.open}},[_c('Icon',{staticClass:"x4-icon x4-transition",attrs:{"icon":"arrow_right"}}),_c('div',{staticClass:"x4-title"},[_vm._v(_vm._s(_vm.title))]),(_vm.visibility)?_c('Switchbox',{staticClass:"x4-visibility",attrs:{"scale":".875","value":_vm.avisible},on:{"change":_vm.changeVisibility}}):_vm._e()],1),_c('DropDown',{staticClass:"x4-content",attrs:{"opened":_vm.aopened}},[_vm._t("default")],2),_c('Style',[_vm._v(".x4-bb-option\n  display: flex\n  flex-direction: column\n\n  > .x4-header\n    align-items: center\n    background-color: $color(primary, .09)\n    border-bottom: 1px solid $color(primary, .06)\n    cursor: pointer\n    display: flex\n    flex-basis: 32px\n\n    .x4-icon\n      font-size: 18px\n      margin-left: 12px\n      margin-top: -1px\n      transform: rotate(0)\n\n    .x4-visibility\n      margin-right: 16px\n\n      .x4-shape\n        margin-top: -1px!important\n\n    .x4-title\n      flex-grow: 1\n      font-size: 12px\n      margin-right: 8px\n      overflow-x: hidden\n      text-overflow: ellipsis\n      text-transform: uppercase\n      white-space: nowrap\n\n  &.x4-opened > .x4-header .x4-icon\n    transform: rotate(90deg)\n\n  > .x4-content\n    background-color: $color(primary, .12)\n    border-bottom: 1px solid $color(primary, .06)\n    display: flex\n    flex-direction: column\n\n    > .x4-inside\n      display: flex\n      flex-direction: column\n      flex-shrink: 0\n      font-size: 12px\n      padding: 16px 16px\n\n  &.x4-self > .x4-content\n    background-color: inherit\n    border-bottom: 0\n\n    > .x4-inside\n      font-size: inherit\n      padding: 0\n\n  .x4-bb-option\n\n    > .x4-header\n      background-color: $color(primary, .12)\n      padding-left: 8px\n\n    > .x4-content\n      background-color: $color(primary, .15)\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/base/BBOption/BBOption.vue?vue&type=template&id=e38c293e&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/base/BBOption/BBOption.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//

/* harmony default export */ var BBOptionvue_type_script_lang_js_ = ({
  props: ['self', 'path', 'title', 'opened', 'visibility', 'visible'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7),
    Switchbox: __webpack_require__(22),
    DropDown: __webpack_require__(16)
  }),
  data: function () {
    return {
      aopened: this.opened !== undefined ? this.opened : false
    };
  },
  computed: map["a" /* default */].variables({
    baseClass: function () {
      return {
        'x4-bb-option': true,
        'x4-opened': this.aopened,
        'x4-self': !!this.self
      };
    },
    avisible: function () {
      return this.visible !== undefined ? this.visible : true;
    }
  }),
  methods: map["a" /* default */].variables({
    open: function () {
      this.aopened = !this.aopened;
    },
    changeVisibility: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;
      dispatch('builder/option/change', {
        path: this.path + '.visible',
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/base/BBOption/BBOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var BBOption_BBOptionvue_type_script_lang_js_ = (BBOptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/base/BBOption/BBOption.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BBOption_BBOptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BBOption.vue"
/* harmony default export */ var BBOption = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOColors/BOColors.vue?vue&type=template&id=73b9965a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-bo-colors x4-clearfix"},[(!_vm.nodark)?_c('BOCheckbox',{staticClass:"x4-margin-bottom",attrs:{"value":_vm.value.dark,"options":{ title: 'Dark theme' }},on:{"change":_vm.darkChange}}):_vm._e(),_vm._l((_vm.indexes),function(subindexes){return [_vm._l((subindexes),function(index){return _c('div',{staticClass:"x4-colors-item x4-float-left",class:{ 'x4-active': _vm.opened[index] },on:{"click":function($event){_vm.open(index)}}},[_c('div',{staticClass:"x4-image x4-margin-top x4-margin-semi-bottom",style:({ 'background-color': _vm.value[_vm.colors[index].name] })}),_c('div',{staticClass:"x4-title x4-margin-bottom",domProps:{"innerHTML":_vm._s(_vm.colors[index].title)}})])}),_vm._l((subindexes),function(index){return [_c('DropDown',{staticClass:"x4-colors-popup x4-clear-both",attrs:{"opened":_vm.opened[index]}},[_c('BOColor',{attrs:{"value":_vm.value[_vm.colors[index].name],"path":(_vm.colors[index].path || _vm.path) + '.' + _vm.colors[index].name,"decline":_vm.decline}})],1)]})]}),_c('Style',[_vm._v(".x4-bo-colors\n\n  .x4-colors-item\n    cursor: pointer\n    width: 33.33%\n\n    &:hover\n      background-color: $color(primary, .06)\n\n    &.x4-active\n      background-color: $color(primary, .08)\n\n    .x4-image\n      border-radius: 50%\n      font-size: 0\n      height: 40px\n      line-height: 0\n      margin-left: auto\n      margin-right: auto\n      width: 40px\n\n    .x4-title\n      color: $color(primary)\n      font-size: 10px\n      height: 24px\n      line-height: 12px\n      overflow: hidden\n      text-align: center\n\n  .x4-colors-popup\n    padding-top: .1px\n    padding-bottom: .1px\n\n    > .x4-inside\n      margin: 8px 0 16px\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOColors/BOColors.vue?vue&type=template&id=73b9965a&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOColors/BOColors.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOColorsvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'colors', 'nodark', 'decline'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    DropDown: __webpack_require__(16),
    BOCheckbox: __webpack_require__(34),
    BOColor: __webpack_require__(43)
  }),
  data: function () {
    var opened = {};

    for (var i = 0; i < this.colors.length; i++) {
      opened[i] = false;
    }

    return {
      opened: opened
    };
  },
  computed: map["a" /* default */].variables({
    indexes: function () {
      var result = [];
      var sub = [];

      for (var i = 0; i < this.colors.length; i++) {
        sub.push(i);

        if ((i + 1) % 3 === 0 || i === this.colors.length - 1) {
          result.push(sub);
          sub = [];
        }
      }

      return result;
    }
  }),
  methods: map["a" /* default */].variables({
    darkChange: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;

      if (this.decline && this.decline({
        name: 'dark',
        value: value
      })) {
        value = undefined;
      }

      dispatch('builder/option/change', {
        path: this.path + '.dark',
        value: value
      });
    },
    open: function (context, index) {
      var opened = this.opened[index];

      for (var key in this.opened) {
        this.opened[key] = false;
      }

      this.opened[index] = !opened;
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOColors/BOColors.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOColors_BOColorsvue_type_script_lang_js_ = (BOColorsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOColors/BOColors.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOColors_BOColorsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOColors.vue"
/* harmony default export */ var BOColors = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOSwitchbox/BOSwitchbox.vue?vue&type=template&id=44718cb7&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Switchbox',{attrs:{"scale":".75","value":_vm.value,"options":_vm.options},on:{"change":_vm.change}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOSwitchbox/BOSwitchbox.vue?vue&type=template&id=44718cb7&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOSwitchbox/BOSwitchbox.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOSwitchboxvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'options'],
  components: map["a" /* default */].components({
    Switchbox: __webpack_require__(22)
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;

      if (this.$listeners && this.$listeners.change) {
        return this.$emit('change', {
          value: value
        });
      }

      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOSwitchbox/BOSwitchbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOSwitchbox_BOSwitchboxvue_type_script_lang_js_ = (BOSwitchboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOSwitchbox/BOSwitchbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOSwitchbox_BOSwitchboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOSwitchbox.vue"
/* harmony default export */ var BOSwitchbox = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/BOTheme.vue?vue&type=template&id=0fc0144b&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-bo-theme x4-clearfix"},[_vm._l((_vm.themes),function(theme0){return _vm._l((theme0.subthemes),function(subtheme0){return _c('div',{staticClass:"x4-theme-item x4-float-left",class:{ 'x4-active': _vm.theme === theme0.name && _vm.subtheme === subtheme0.name },on:{"click":function($event){_vm.change({ theme: theme0.name, subtheme: subtheme0.name, changes: subtheme0.changes })}}},[_c(_vm.components[theme0.name][subtheme0.name],{tag:"div",staticClass:"x4-margin-top x4-margin-semi-bottom"}),_c('div',{staticClass:"x4-title x4-margin-bottom",domProps:{"innerHTML":_vm._s(subtheme0.title)}})])})}),_c('Style',[_vm._v(".x4-bo-theme\n\n  .x4-theme-item\n    cursor: pointer\n    width: 33.33%\n\n    &:hover\n      background-color: $color(primary, .052!)\n\n    &.x4-active\n      background-color: $color(primary, .08!)\n\n    .x4-image\n      font-size: 0\n      line-height: 0\n      margin-left: 12px\n      margin-right: 12px\n      text-align: center\n\n      > .x4-inside\n        height: 0\n        padding-top: 100%\n        position: relative\n        width: 100%\n\n        svg\n          left: 0\n          position: absolute\n          top: 0\n\n    .x4-title\n      color: $color(primary)\n      font-size: 10px\n      height: 24px\n      line-height: 12px\n      overflow: hidden\n      text-align: center\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/BOTheme.vue?vue&type=template&id=0fc0144b&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/themes.js

/* harmony default export */ var themes = ({
  material: map["a" /* default */].components({
    default: __webpack_require__(114),
    filled: __webpack_require__(115),
    outlined: __webpack_require__(113),
    standard: __webpack_require__(112)
  })
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/BOTheme.vue?vue&type=script&lang=js&
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
//


/* harmony default export */ var BOThemevue_type_script_lang_js_ = ({
  props: ['path', 'theme', 'subtheme', 'themes', 'decline'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  }),
  computed: map["a" /* default */].variables({
    components: function () {
      return themes;
    }
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var theme = _ref2.theme,
          subtheme = _ref2.subtheme,
          changes = _ref2.changes;

      if (this.decline && this.decline({
        theme: theme,
        subtheme: subtheme,
        changes: changes
      })) {
        theme = undefined;
        subtheme = undefined;
      }

      dispatch('builder/option/change', {
        path: this.path + '.theme',
        value: theme
      });
      dispatch('builder/option/change', {
        path: this.path + '.subtheme',
        value: subtheme
      });

      if (changes) {
        for (var name in changes) {
          changes[name].forEach(function (change) {
            dispatch('builder/option/change', change);
          });
        }
      }
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/BOTheme.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOTheme_BOThemevue_type_script_lang_js_ = (BOThemevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/BOTheme.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOTheme_BOThemevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOTheme.vue"
/* harmony default export */ var BOTheme = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/values/BSInput/BSInput.vue?vue&type=template&id=029ef86d&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"fill":true,"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BOActions',{attrs:{"path":_vm.schema.path}}),_c('BOInput',{attrs:{"value":_vm.value,"type":_vm.schema.type,"options":_vm.schema.options,"path":_vm.schema.path}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/values/BSInput/BSInput.vue?vue&type=template&id=029ef86d&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/values/BSInput/BSInput.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BSInputvue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4)
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/values/BSInput/BSInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSInput_BSInputvue_type_script_lang_js_ = (BSInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/values/BSInput/BSInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSInput_BSInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSInput.vue"
/* harmony default export */ var BSInput = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInputList/BOInputList.vue?vue&type=template&id=c0706456&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-bo-select-list"},[_c('SortableList',{attrs:{"type":_vm.type,"values":_vm.values,"options":_vm.options,"addremove":_vm.addremove},on:{"change":_vm.change}}),(_vm.addremove !== false)?_c('div',{staticClass:"x4-clearfix"},[_c('Button',{staticClass:"x4-add-more x4-float-right x4-margin-top",attrs:{"scale":.75,"options":_vm.options2},on:{"click":_vm.add}})],1):_vm._e(),_c('Style',[_vm._v(".x4-bo-select-list\n\n  .x4-add-more\n    margin-right: 14px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOInputList/BOInputList.vue?vue&type=template&id=c0706456&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInputList/BOInputList.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var BOInputListvue_type_script_lang_js_ = ({
  props: ['type', 'path', 'value', 'options', 'addremove'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Button: __webpack_require__(14),
    SortableList: __webpack_require__(101)
  }),
  data: function () {
    var value = this.$store.getters['helpers/items/src']({
      src: this.value
    });
    return {
      values: this.parseValue({
        value: value
      })
    };
  },
  watch: {
    avalue: function (value) {
      if (value !== this.prevValue) {
        this.values = this.parseValue({
          value: value
        });
      }
    }
  },
  computed: map["a" /* default */].variables({
    avalue: function (_ref) {
      var getters = _ref.getters;
      return getters['helpers/items/src']({
        src: this.value
      });
    },
    options2: function () {
      return {
        subtheme: 'outlined',
        label: 'Add more',
        icon: 'add'
      };
    }
  }),
  methods: map["a" /* default */].variables({
    add: function () {
      this.values.push([null, Math.random()]);
    },
    parseValue: function (context, _ref2) {
      var value = _ref2.value;
      value = value || [];
      var values = value.map(function (value) {
        return [value, Math.random()];
      });
      return values.length === 0 ? [[null, Math.random()]] : values;
    },
    change: function (_ref3, _ref4) {
      var dispatch = _ref3.dispatch;
      var op = _ref4.op,
          values = _ref4.values,
          index = _ref4.index,
          value = _ref4.value;

      switch (op) {
        case 'replace':
          this.values = values;
          break;

        case 'splice':
          this.values.splice(index, 1);
          break;

        case 'set':
          this.values[index][0] = value;
          break;
      }

      var result = this.values.map(function (item) {
        return item[0];
      }).filter(function (item) {
        return !!item;
      });
      this.prevValue = result;
      dispatch('builder/option/change', {
        path: this.path,
        value: result
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOInputList/BOInputList.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOInputList_BOInputListvue_type_script_lang_js_ = (BOInputListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOInputList/BOInputList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOInputList_BOInputListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOInputList.vue"
/* harmony default export */ var BOInputList = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/Button.vue?vue&type=template&id=7fb695b6&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c(_vm.themeComponent,{tag:"div",class:_vm.baseClass,attrs:{"is2":_vm.subthemeComponent,"options":_vm.options,"colors":_vm.colors,"scale":_vm.scale,"tag":_vm.tag,"href":_vm.href,"target":_vm.target,"title":_vm.tooltip,"nostyle":_vm.nostyle},nativeOn:{"click":function($event){return _vm.click($event)}}},[(_vm.icon)?_c('Icon',{staticClass:"x4-icon",attrs:{"slot":"icon","icon":_vm.icon},slot:"icon"}):_vm._e(),(!!_vm.label)?_c('div',{staticClass:"x4-label",attrs:{"slot":"label"},domProps:{"innerHTML":_vm._s(_vm.label)},slot:"label"}):_vm._e(),_c('transition',{attrs:{"slot":"flylabel","name":"x4"},slot:"flylabel"},[(_vm.flyforce)?_c('div',{class:_vm.flyClass,domProps:{"innerHTML":_vm._s(_vm.flylabel)}}):_vm._e()]),(_vm.loading)?_c('Loader',{staticClass:"x4-loader",attrs:{"slot":"loader","colorize":true},slot:"loader"}):_vm._e(),_c('Ripple',{attrs:{"slot":"ripple","theme":_vm.theme,"opacity":_vm.colorize ? (_vm.subtheme !== 'filled' ? .08 : .16) : .04,"color":_vm.colorize ? (_vm.subtheme !== 'filled' ? _vm.colors.accent : _vm.colors.inverted) : _vm.colors.primary},slot:"ripple"}),_vm._t("default"),(!_vm.nostyle)?_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-button\n  cursor: pointer\n  display: inline-block\n  position: relative\n  text-decoration: none\n  vertical-align: top\n\n  .x4-label\n    overflow-x: hidden\n    text-overflow: ellipsis\n    white-space: nowrap\n")]):_vm._e()],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Button/Button.vue?vue&type=template&id=7fb695b6&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./common/components/ui/Button/themes/themes.js

/* harmony default export */ var themes = ({
  themes: map["a" /* default */].components({
    material: __webpack_require__(96)
  }),
  subthemes: {
    material: map["a" /* default */].components({
      filled: __webpack_require__(95),
      outlined: __webpack_require__(93),
      standard: __webpack_require__(94)
    })
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/Button.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  props: ['options', 'labelPatterns', 'tooltipPatterns', 'urlPatterns', 'nostyle', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7),
    Loader: __webpack_require__(85),
    Ripple: __webpack_require__(36)
  }),
  data: function () {
    return {
      flyforce: false
    };
  },
  created: function () {
    this.handleFlyLabel();
  },
  computed: map["a" /* default */].variables({
    visible: function () {
      return this.options && this.options.visible !== undefined ? this.options.visible : true;
    },
    colorize: function () {
      return this.options && this.options.colorize !== undefined ? this.options.colorize : true;
    },
    icon: function () {
      return this.options && this.options.icon ? this.options.icon : null;
    },
    label: function (_ref) {
      var getters = _ref.getters;
      return this.options && this.options.label ? this.labelPatterns ? getters['helpers/items/format/template'](null, {
        template: this.options.label,
        patterns: this.labelPatterns
      }) : this.options.label : '';
    },
    tooltip: function (_ref2) {
      var getters = _ref2.getters;
      return this.options && this.options.tooltip ? this.tooltipPatterns ? getters['helpers/items/format/template'](null, {
        notags: true,
        template: this.options.tooltip,
        patterns: this.tooltipPatterns
      }) : this.options.tooltip : '';
    },
    tag: function () {
      return this.options && this.options.url ? 'a' : null;
    },
    href: function (_ref3) {
      var getters = _ref3.getters;
      return this.options && this.options.url && this.options.url !== true ? this.urlPatterns ? getters['helpers/items/format/template'](null, {
        template: this.options.url,
        patterns: this.urlPatterns
      }) : this.options.url : null;
    },
    target: function () {
      return this.options && this.options.blank ? '_blank' : null;
    },
    flylabel: function (_ref4) {
      var getters = _ref4.getters;
      return this.options && this.options.flylabel ? this.options.flylabel : '';
    },
    flytiny: function () {
      return this.options && this.options.flytiny !== undefined ? this.options.flytiny : false;
    },
    flydown: function () {
      return this.options && this.options.flydown !== undefined ? this.options.flydown : false;
    },
    loading: function () {
      return this.options && this.options.loading !== undefined ? this.options.loading : false;
    },
    theme: function (_ref5) {
      var state = _ref5.state;
      var value = !this.options || !this.options.theme ? this.$root.theme || state.theme : this.options.theme;
      return !themes.themes[value] ? 'material' : value;
    },
    subtheme: function (_ref6) {
      var state = _ref6.state;
      var value = !this.options || !this.options.subtheme ? this.$root.subtheme || state.subtheme : this.options.subtheme;
      return !themes.subthemes[this.theme][value] ? 'filled' : value;
    },
    colors: function (_ref7) {
      var state = _ref7.state;
      var colors = this.$root.colors || state.colors;
      return this.options && this.options.colors ? Object.assign({}, colors, this.options.colors) : colors;
    },
    themeComponent: function () {
      return themes.themes[this.theme];
    },
    subthemeComponent: function () {
      return themes.subthemes[this.theme][this.subtheme];
    },
    baseClass: function () {
      var result = {};
      result['x4-ui-button'] = true;
      result['x4-theme-' + this.theme] = true;
      result['x4-subtheme-' + this.subtheme] = true;
      result['x4-colorize'] = this.colorize;
      result['x4-no-icon'] = !this.icon;
      result['x4-no-label'] = !this.label;
      result['x4-loading'] = this.loading;
      result['x4-transition'] = true;
      result['x4-clearfix'] = true;
      return result;
    },
    flyClass: function () {
      return {
        'x4-flylabel': true,
        'x4-flytiny': this.flytiny,
        'x4-flydown': this.flydown,
        'x4-transition': true
      };
    }
  }),
  methods: {
    click: function () {
      if (!this.loading) {
        this.$emit('click');
      }
    },
    handleFlyLabel: function () {
      var _this = this;

      if (!this.flylabel) {
        return;
      }

      this.$vnode.context.flyforce = function () {
        _this.flyforce = true;
        setTimeout(function () {
          _this.flyforce = false;
        }, 2000);
      };
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Button/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Button/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Button_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Button.vue"
/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTemplate/BOTemplate.vue?vue&type=template&id=c7aa8c24&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BOInput',{attrs:{"type":"text","path":_vm.path,"value":_vm.value,"options":_vm.options0}}),(_vm.options0.patterns)?_c('BOPatterns',{attrs:{"patterns":_vm.options0.patterns}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOTemplate/BOTemplate.vue?vue&type=template&id=c7aa8c24&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTemplate/BOTemplate.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOTemplatevue_type_script_lang_js_ = ({
  props: ['path', 'value', 'options'],
  components: map["a" /* default */].components({
    BOInput: __webpack_require__(4),
    BOPatterns: __webpack_require__(19)
  }),
  computed: map["a" /* default */].variables({
    options0: function () {
      var options = {
        icon: 'text_format',
        label: 'Value' + (this.options && this.options.patterns ? ' template' : '')
      };
      return Object.assign(options, this.options);
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOTemplate/BOTemplate.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOTemplate_BOTemplatevue_type_script_lang_js_ = (BOTemplatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOTemplate/BOTemplate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOTemplate_BOTemplatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOTemplate.vue"
/* harmony default export */ var BOTemplate = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/DropDown/DropDown.vue?vue&type=template&id=042366dc&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"x4"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"after-enter":_vm.afterEnter,"before-leave":_vm.beforeLeave,"leave":_vm.leave,"after-leave":_vm.afterLeave}},[(_vm.aopened)?_c('DIV',{class:_vm.baseClass},[_c('div',{staticClass:"x4-inside"},[_vm._t("default")],2)]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/DropDown/DropDown.vue?vue&type=template&id=042366dc&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/DropDown/DropDown.vue?vue&type=script&lang=js&
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

/* harmony default export */ var DropDownvue_type_script_lang_js_ = ({
  props: ['fixed', 'opened'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3)
  }),
  computed: map["a" /* default */].variables({
    aopened: function () {
      return this.opened !== undefined ? this.opened : false;
    },
    baseClass: function () {
      return {
        'x4-ui-dropdown': true,
        'x4-transition': true
      };
    }
  }),
  methods: map["a" /* default */].variables({
    beforeEnter: function (context, el) {
      if (this.fixed) return;
      el.style['max-height'] = 0;
      el.style['overflow'] = 'hidden';
    },
    enter: function (context, el, done) {
      if (this.fixed) return;

      if (this.$listeners.enter) {
        this.$emit('enter', {
          scrollHeight: el.scrollHeight
        });
      }

      el.style['max-height'] = el.scrollHeight + 'px';
    },
    afterEnter: function (context, el) {
      if (this.fixed) return;
      el.style.removeProperty('max-height');
      el.style.removeProperty('overflow');
    },
    beforeLeave: function (context, el) {
      if (this.fixed) return;
      el.style['max-height'] = el.scrollHeight + 'px';
      el.style['overflow'] = 'hidden';
    },
    leave: function (context, el) {
      var _this = this;

      if (this.fixed) return;
      setTimeout(function () {
        if (_this.$listeners.leave) {
          _this.$emit('leave');
        }

        el.style['max-height'] = 0;
      }, 50);
    },
    afterLeave: function (context, el) {
      if (this.fixed) return;
      el.style.removeProperty('max-height');
      el.style.removeProperty('overflow');
    }
  })
});
// CONCATENATED MODULE: ./common/components/ui/DropDown/DropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var DropDown_DropDownvue_type_script_lang_js_ = (DropDownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/DropDown/DropDown.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  DropDown_DropDownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "DropDown.vue"
/* harmony default export */ var DropDown = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BORadioButtons/BORadioButtons.vue?vue&type=template&id=d75e4b9c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('RadioButtons',{attrs:{"scale":".75","value":_vm.value,"options":_vm.options},on:{"change":_vm.change}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BORadioButtons/BORadioButtons.vue?vue&type=template&id=d75e4b9c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BORadioButtons/BORadioButtons.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BORadioButtonsvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'options'],
  components: map["a" /* default */].components({
    RadioButtons: __webpack_require__(30)
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;

      if (this.$listeners && this.$listeners.change) {
        return this.$emit('change', {
          value: value
        });
      }

      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BORadioButtons/BORadioButtons.vue?vue&type=script&lang=js&
 /* harmony default export */ var BORadioButtons_BORadioButtonsvue_type_script_lang_js_ = (BORadioButtonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BORadioButtons/BORadioButtons.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BORadioButtons_BORadioButtonsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BORadioButtons.vue"
/* harmony default export */ var BORadioButtons = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSButton/BSButton.vue?vue&type=template&id=0f07303a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.atag,{tag:"div",attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"self":_vm.tag === 'option',"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BBOption',{attrs:{"title":"Base options"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.colorize', _vm.path + '.url', _vm.path + '.blank']}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.colorize,"options":{ label: 'Colorize button' },"path":_vm.path + '.colorize'}}),(_vm.schema.urlOptions)?_c('BOUrl',{attrs:{"value":_vm.values.url,"valueBlank":_vm.values.blank,"options":_vm.schema.urlOptions,"path":_vm.path + '.url',"pathBlank":_vm.path + '.blank'}}):_vm._e()],1),_c('BBOption',{attrs:{"title":"Label"}},[_c('BOActions',{attrs:{"path":_vm.path + '.label'}}),_c('BOLabel',{attrs:{"value":_vm.values.label,"options":_vm.schema.labelOptions,"path":_vm.path + '.label'}})],1),_c('BBOption',{attrs:{"title":"Tooltip"}},[_c('BOActions',{attrs:{"path":_vm.path + '.tooltip'}}),_c('BOTooltip',{attrs:{"value":_vm.values.tooltip,"options":_vm.schema.tooltipOptions,"path":_vm.path + '.tooltip'}})],1),_c('BBOption',{attrs:{"title":"Icon"}},[_c('BOActions',{attrs:{"path":_vm.path + '.icon'}}),_c('BOIcon',{attrs:{"value":_vm.values.icon,"options":_vm.schema.iconOptions,"path":_vm.path + '.icon'}})],1),_c('BBOption',{attrs:{"title":"Theme"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.theme', _vm.path + '.subtheme']}}),_c('BOTheme',{attrs:{"path":_vm.path,"theme":_vm.themeValue,"subtheme":_vm.subthemeValue,"themes":_vm.themePresets,"decline":_vm.declineTheme}})],1),(!_vm.nocolors)?_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSButton/BSButton.vue?vue&type=template&id=0f07303a&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSButton/BSButton.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSButtonvue_type_script_lang_js_ = ({
  props: ['tag', 'path', 'values', 'defaults', 'schema', 'vvalue', 'vschema', 'nocolors'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOSwitchbox: __webpack_require__(10),
    BOUrl: __webpack_require__(98),
    BOLabel: __webpack_require__(20),
    BOTooltip: __webpack_require__(103),
    BOIcon: __webpack_require__(28),
    BOTheme: __webpack_require__(11),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    atag: function () {
      return this.tag !== 'option' ? __webpack_require__(6).default : __webpack_require__(8).default;
    },
    themeValue: function (_ref) {
      var state = _ref.state;
      return this.values.theme || this.schema.theme || state.theme;
    },
    subthemeValue: function (_ref2) {
      var state = _ref2.state;
      return this.values.subtheme || this.schema.subtheme || state.subtheme;
    },
    colorsValue: function (_ref3) {
      var state = _ref3.state;
      return Object.assign({}, state.colors, this.schema.colors, this.values.colors);
    },
    themePresets: function (_ref4) {
      var getters = _ref4.getters;
      return getters['builder/presets/themes']({
        changeName: this.schema.name,
        allowedThemes: ['material'],
        allowedSubthemes: {
          material: ['filled', 'outlined', 'standard']
        }
      });
    },
    colorPresets: function (_ref5) {
      var getters = _ref5.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary', 'inverted', 'accent']
      });
    },
    declineTheme: function (_ref6) {
      var _this = this;

      var state = _ref6.state;
      return function (_ref7) {
        var theme = _ref7.theme,
            subtheme = _ref7.subtheme;
        return theme === (_this.schema.theme || state.theme) && subtheme === (_this.schema.subtheme || state.subtheme);
      };
    },
    declineColor: function (_ref8) {
      var _this2 = this;

      var state = _ref8.state;
      return function (_ref9) {
        var name = _ref9.name,
            value = _ref9.value;
        return value === (_this2.schema.colors ? _this2.schema.colors[name] : state.colors[name]);
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSButton/BSButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSButton_BSButtonvue_type_script_lang_js_ = (BSButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSButton/BSButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSButton_BSButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSButton.vue"
/* harmony default export */ var BSButton = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOPatterns/BOPatterns.vue?vue&type=template&id=f163caae&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-bo-patterns"},[_c('div',{staticClass:"x4-margin-semi-top"},[_vm._v("Patterns:")]),_vm._l((_vm.patterns),function(pattern){return _c('div',{staticClass:"x4-hint"},[_vm._v("    "),_c('strong',{staticClass:"x4-code"},[_vm._v(_vm._s(pattern.name))]),_vm._v(" - "),_c('span',{domProps:{"innerHTML":_vm._s(pattern.desc)}})])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOPatterns/BOPatterns.vue?vue&type=template&id=f163caae&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOPatterns/BOPatterns.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOPatternsvue_type_script_lang_js_ = ({
  props: ['patterns'],
  computed: map["a" /* default */].variables({})
});
// CONCATENATED MODULE: ./common/components/bui/options/BOPatterns/BOPatterns.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOPatterns_BOPatternsvue_type_script_lang_js_ = (BOPatternsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOPatterns/BOPatterns.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOPatterns_BOPatternsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOPatterns.vue"
/* harmony default export */ var BOPatterns = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOLabel/BOLabel.vue?vue&type=template&id=7d185014&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BOSwitchbox',{attrs:{"path":_vm.path,"value":_vm.value1,"options":_vm.options1},on:{"change":_vm.change}}),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"text","path":_vm.path,"value":_vm.value2,"options":_vm.options2},on:{"change":_vm.change}}),(_vm.options2.patterns)?_c('BOPatterns',{attrs:{"patterns":_vm.options2.patterns}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOLabel/BOLabel.vue?vue&type=template&id=7d185014&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOLabel/BOLabel.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var BOLabelvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'options'],
  components: map["a" /* default */].components({
    BOSwitchbox: __webpack_require__(10),
    BOInput: __webpack_require__(4),
    BOPatterns: __webpack_require__(19)
  }),
  computed: map["a" /* default */].variables({
    value1: function () {
      return !!this.value;
    },
    value2: function () {
      return this.value || '';
    },
    options1: function () {
      return {
        label: 'Show label'
      };
    },
    options2: function () {
      var options = {
        icon: 'text_fields',
        label: 'Label ' + (this.options && this.options.patterns ? 'template' : 'value')
      };
      return Object.assign(options, this.options);
    }
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;
      value = value === true ? this.options.default : value;
      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOLabel/BOLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOLabel_BOLabelvue_type_script_lang_js_ = (BOLabelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOLabel/BOLabel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOLabel_BOLabelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOLabel.vue"
/* harmony default export */ var BOLabel = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/Input.vue?vue&type=template&id=78b15bf9&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c(_vm.themeComponent,{tag:"div",class:_vm.baseClass,attrs:{"is2":_vm.subthemeComponent,"options":_vm.options,"colors":_vm.colors,"scale":_vm.scale},nativeOn:{"click":function($event){return _vm.forceFocus($event)}}},[_c('transition',{attrs:{"slot":"icon","name":"x4"},slot:"icon"},[(_vm.icon)?_c('Icon',{staticClass:"x4-icon x4-transition",attrs:{"icon":_vm.icon}}):_vm._e()],1),(_vm.isSelect)?_c('Icon',{staticClass:"x4-dd-icon x4-transition",attrs:{"slot":"ddicon","icon":"arrow_drop_down"},slot:"ddicon"}):_vm._e(),(_vm.label)?_c('div',{staticClass:"x4-label x4-transition",attrs:{"slot":"label"},slot:"label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"x4-input-wrapper",attrs:{"slot":"input"},slot:"input"},[(!_vm.isSelect && !_vm.isTextarea)?_c('input',{ref:"input",staticClass:"x4-input",attrs:{"type":_vm.atype,"min":_vm.amin,"max":_vm.amax,"step":_vm.astep},domProps:{"value":_vm.avalue},on:{"input":_vm.input,"mouseup":_vm.mouseup,"focus":_vm.focus,"blur":_vm.blur}}):_vm._e(),(_vm.isSelect)?_c('div',{ref:"input",staticClass:"x4-select",domProps:{"innerHTML":_vm._s(_vm.atitle)}}):_vm._e(),(_vm.isTextarea)?_c('textarea',{ref:"input",staticClass:"x4-textarea x4-scrollable",domProps:{"value":_vm.avalue},on:{"input":_vm.input,"focus":_vm.focus,"blur":_vm.blur}}):_vm._e()]),(_vm.isSelect)?_c('template',{slot:"menu"},[(_vm.focused)?_c('div',{ref:"backdrop",staticClass:"x4-backdrop",on:{"click":function($event){$event.stopPropagation();return _vm.blur($event)},"wheel":_vm.backdropMouseWheel}}):_vm._e(),_c('DropDown',{ref:"menu",staticClass:"x4-menu x4-scrollable",attrs:{"fixed":true,"opened":_vm.focused},nativeOn:{"wheel":function($event){return _vm.menuMouseWheel($event)}}},_vm._l((_vm.menuOptions),function(option,index){return _c('div',{ref:(option === _vm.avalue ? 'option_active' : 'opt_' + option),refInFor:true,staticClass:"x4-option",class:{ 'x4-active': option === _vm.avalue },domProps:{"innerHTML":_vm._s(_vm.menuHash[option])},on:{"click":function($event){$event.stopPropagation();_vm.change({ value: option })}}})}))],1):_vm._e(),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-input\n  display: inline-block\n  position: relative\n  vertical-align: top\n\n  .x4-icon\n    cursor: pointer\n\n  .x4-dd-icon\n    cursor: pointer\n\n  &.x4-focused .x4-dd-icon\n    transform: rotate(180deg)\n\n  .x4-input\n    height: auto\n    overflow-x: hidden\n\n  .x4-label, .x4-select, .x4-menu .x4-option\n    overflow-x: hidden\n    text-overflow: ellipsis\n    white-space: nowrap\n\n  .x4-backdrop\n    cursor: default\n\n  .x4-menu .x4-option\n    position: relative\n")])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Input/Input.vue?vue&type=template&id=78b15bf9&lang=pug&

// CONCATENATED MODULE: ./common/bootstrap/__.js
/* harmony default export */ var _ = (function (value) {
  var wp = window.wp;
  return wp && wp.i18n ? wp.i18n.__(value, 'x4-crypto-tables') : value;
});
// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./common/components/ui/Input/themes/themes.js

/* harmony default export */ var themes = ({
  themes: map["a" /* default */].components({
    material: __webpack_require__(106)
  }),
  subthemes: {
    material: map["a" /* default */].components({
      filled: __webpack_require__(107),
      outlined: __webpack_require__(108),
      standard: __webpack_require__(109)
    })
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/Input.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  props: ['type', 'value', 'options', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7),
    DropDown: __webpack_require__(16)
  }),
  data: function () {
    return {
      focused: false,
      dirty: this.value !== null && this.value !== '',
      avalue: this.value,
      keyPhrase: '',
      keyLastTime: new Date().getTime()
    };
  },
  mounted: function () {
    this.$parent.$refs.input = this.$refs.input;
    window.addEventListener('keypress', this.keypress);
  },
  updated: function () {
    this.$parent.$refs.input = this.$refs.input;
  },
  destroyed: function () {
    window.removeEventListener('keypress', this.keypress);
  },
  watch: {
    value: function (value) {
      this.avalue = value;
      this.dirty = value !== null && this.value !== '';
    }
  },
  computed: map["a" /* default */].variables({
    visible: function () {
      return this.options && this.options.visible !== undefined ? this.options.visible : true;
    },
    icon: function () {
      return this.options && this.options.icon ? this.options.icon : null;
    },
    label: function () {
      return this.options && this.options.label ? _(this.options.label) : '';
    },
    theme: function (_ref) {
      var state = _ref.state;
      var value = !this.options || !this.options.theme ? this.$root.theme || state.theme : this.options.theme;
      return !themes.themes[value] ? 'material' : value;
    },
    subtheme: function (_ref2) {
      var state = _ref2.state;
      var value = !this.options || !this.options.subtheme ? this.$root.subtheme || state.subtheme : this.options.subtheme;
      return !themes.subthemes[this.theme][value] ? 'filled' : value;
    },
    colors: function (_ref3) {
      var state = _ref3.state;
      var colors = this.$root.colors || state.colors;
      return this.options && this.options.colors ? Object.assign({}, colors, this.options.colors) : colors;
    },
    themeComponent: function () {
      return themes.themes[this.theme];
    },
    subthemeComponent: function () {
      return themes.subthemes[this.theme][this.subtheme];
    },
    atype: function () {
      return this.type || 'text';
    },
    isSelect: function () {
      return this.atype === 'select';
    },
    isTextarea: function () {
      return this.atype === 'textarea';
    },
    amin: function () {
      return this.options && this.options.min !== undefined ? this.options.min : null;
    },
    amax: function () {
      return this.options && this.options.max !== undefined ? this.options.max : null;
    },
    astep: function () {
      return this.options && this.options.step !== undefined ? this.options.step : null;
    },
    baseClass: function () {
      var result = {};
      result['x4-ui-input'] = true;
      result['x4-type-' + this.atype] = true;
      result['x4-theme-' + this.theme] = true;
      result['x4-subtheme-' + this.subtheme] = true;
      result['x4-no-label'] = !this.label;
      result['x4-no-icon'] = !this.icon;
      result['x4-dirty'] = this.dirty;
      result['x4-focused'] = this.focused;
      result['x4-transition'] = true;
      result['x4-clearfix'] = true;
      return result;
    },
    aitems: function (_ref4) {
      var getters = _ref4.getters;
      return getters['helpers/items/src']({
        src: this.options.items
      });
    },
    menuHash: function (_ref5) {
      var getters = _ref5.getters;
      return getters['helpers/items/menu/hash']({
        items: this.aitems,
        itemValue: this.options.itemValue,
        itemTitle: this.options.itemTitle,
        itemTemplate: this.options.itemTemplate,
        hasNull: this.options.hasNull
      });
    },
    menuOptions: function (_ref6) {
      var getters = _ref6.getters;
      return getters['helpers/items/menu/options']({
        items: this.aitems,
        itemValue: this.options.itemValue,
        hasNull: this.options.hasNull
      });
    },
    atitle: function () {
      return this.menuHash[this.avalue];
    }
  }),
  methods: map["a" /* default */].variables({
    focus: function () {
      var _this = this;

      this.focused = true;
      this.$nextTick(function () {
        if (_this.$refs.menu && _this.$refs.option_active && _this.$refs.option_active.length > 0) {
          if (_this.$refs.option_active[0].offsetTop >= 6 * _this.$refs.option_active[0].offsetHeight) {
            _this.$refs.menu.$el.scrollTop = _this.$refs.option_active[0].offsetTop - _this.$refs.option_active[0].offsetHeight;
          }
        }
      });
    },
    blur: function () {
      this.focused = false;
    },
    forceFocus: function () {
      if (this.isSelect) {
        return this.focus();
      }

      this.$refs.input.focus();
    },
    input: function () {
      this.avalue = this.$refs.input.value;
      this.dirty = !!this.$refs.input.value;
      this.$emit('change', {
        value: this.$refs.input.value
      });
    },
    mouseup: function () {
      var _this2 = this;

      var value = this.$refs.input.value;
      this.$nextTick(function () {
        if (value !== _this2.$refs.input.value) {
          _this2.$refs.input.blur();

          _this2.avalue = '';
          _this2.dirty = false;

          if (window.isEdge) {
            _this2.focused = false;

            _this2.$emit('change', {
              value: ''
            });
          }
        }
      });
    },
    change: function (context, _ref7) {
      var value = _ref7.value;
      this.blur();
      this.avalue = value;
      this.dirty = !!value;
      this.$emit('change', {
        value: value
      });
    },
    keypress: function (context, event) {
      if (!this.focused || !event.key || !this.$refs.menu) {
        return;
      }

      if (new Date().getTime() - this.keyLastTime < 1000) {
        this.keyPhrase += event.key;
      } else {
        this.keyPhrase = event.key;
      }

      this.keyLastTime = new Date().getTime();
      var regexp1 = new RegExp('^' + this.keyPhrase, 'i');
      var regexp2 = new RegExp(this.keyPhrase, 'i');

      for (var value in this.menuHash) {
        if (this.menuHash[value].match(regexp1)) {
          if (this.$refs['opt_' + value]) {
            this.$refs.menu.$el.scrollTop = this.$refs['opt_' + value][0].offsetTop;
          }

          return;
        }
      }

      for (var _value in this.menuHash) {
        if (this.menuHash[_value].match(regexp2)) {
          if (this.$refs['opt_' + _value]) {
            this.$refs.menu.$el.scrollTop = this.$refs['opt_' + _value][0].offsetTop;
          }

          return;
        }
      }
    },
    backdropMouseWheel: function (context, event) {
      var _this3 = this;

      this.$refs.backdrop.style.display = 'none';
      setTimeout(function () {
        _this3.$refs.backdrop.style.removeProperty('display');
      });
    },
    menuMouseWheel: function (_ref8, event) {
      var getters = _ref8.getters;
      getters['helpers/wheelPrevent']({
        el: this.$refs.menu.$el,
        event: event
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/ui/Input/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var Input_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Input/Input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Input_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Input.vue"
/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Switchbox/Switchbox.vue?vue&type=template&id=d01e7e04&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c(_vm.themeComponent,{tag:"div",class:_vm.baseClass,attrs:{"is2":_vm.subthemeComponent,"colors":_vm.colors,"scale":_vm.scale},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.change($event)}}},[(_vm.label)?_c('div',{staticClass:"x4-label",attrs:{"slot":"label"},slot:"label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-switchbox\n  display: inline-block\n  position: relative\n  vertical-align: top\n\n  .x4-label\n    overflow-x: hidden\n    text-overflow: ellipsis\n    white-space: nowrap  \n")])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Switchbox/Switchbox.vue?vue&type=template&id=d01e7e04&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./common/components/ui/Switchbox/themes/themes.js

/* harmony default export */ var themes = ({
  themes: map["a" /* default */].components({
    material: __webpack_require__(120)
  }),
  subthemes: {
    material: map["a" /* default */].components({
      default: __webpack_require__(118)
    })
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Switchbox/Switchbox.vue?vue&type=script&lang=js&
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
//
//
//
//


/* harmony default export */ var Switchboxvue_type_script_lang_js_ = ({
  props: ['value', 'options', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2)
  }),
  data: function () {
    return {
      mvalue: this.value
    };
  },
  watch: {
    value: function (value) {
      this.mvalue = value;
    }
  },
  computed: {
    visible: function () {
      return this.options && this.options.visible !== undefined ? this.options.visible : true;
    },
    label: function () {
      return this.options && this.options.label !== undefined ? this.options.label : '';
    },
    theme: function (_ref) {
      var state = _ref.state;
      var value = !this.options || !this.options.theme ? this.$root.theme || state.theme : this.options.theme;
      return !themes.themes[value] ? 'material' : value;
    },
    subtheme: function (_ref2) {
      var state = _ref2.state;
      var value = this.options && this.options.subtheme ? this.options.subtheme : 'default';
      return !themes.subthemes[this.theme][value] ? 'default' : value;
    },
    colors: function (_ref3) {
      var state = _ref3.state;
      var colors = this.$root.colors || state.colors;
      return this.options && this.options.colors ? Object.assign({}, colors, this.options.colors) : colors;
    },
    themeComponent: function () {
      return themes.themes[this.theme];
    },
    subthemeComponent: function () {
      return themes.subthemes[this.theme][this.subtheme];
    },
    baseClass: function () {
      var result = {};
      result['x4-ui-switchbox'] = true;
      result['x4-theme-' + this.theme] = true;
      result['x4-subtheme-' + this.subtheme] = true;
      result['x4-active'] = this.mvalue;
      result['x4-clearfix'] = true;
      return result;
    }
  },
  methods: {
    change: function () {
      this.mvalue = !this.mvalue;
      this.$emit('change', {
        value: this.mvalue
      });
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Switchbox/Switchbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var Switchbox_Switchboxvue_type_script_lang_js_ = (Switchboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Switchbox/Switchbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Switchbox_Switchboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Switchbox.vue"
/* harmony default export */ var Switchbox = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/base/BBGroup/BBGroup.vue?vue&type=template&id=1b0b96d4&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{class:_vm.baseClass},[_c('div',{staticClass:"x4-header"},[_c('div',{staticClass:"x4-title"},[_vm._v(_vm._s(_vm.title))])]),_c('div',{staticClass:"x4-content"},[_c('div',{staticClass:"x4-inside"},[_vm._t("default")],2)]),_c('Style',[_vm._v(".x4-bb-group\n  display: flex\n  flex-direction: column\n  flex-shrink: 0\n\n  > .x4-header\n    align-items: center\n    background-color: $color(primary, .03)\n    border-bottom: 1px solid $color(primary, .06)\n    display: flex\n    flex-basis: 48px\n\n    .x4-title\n      color: $color(accent)\n      flex-grow: 1\n      font-size: 16px\n      font-weight: 500\n      margin: 0 16px\n      overflow-x: hidden\n      text-overflow: ellipsis\n      text-transform: uppercase\n      white-space: nowrap\n\n  > .x4-content\n    display: flex\n    flex-direction: column\n\n    > .x4-inside\n      display: flex\n      flex-direction: column\n      flex-shrink: 0\n\n  &.x4-fill > .x4-content\n    background-color: $color(primary, .06)\n    border-bottom: 1px solid $color(primary, .06)\n\n    > .x4-inside\n      font-size: 14px\n      padding: 16px 16px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/base/BBGroup/BBGroup.vue?vue&type=template&id=1b0b96d4&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/base/BBGroup/BBGroup.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BBGroupvue_type_script_lang_js_ = ({
  props: ['fill', 'title'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  }),
  computed: map["a" /* default */].variables({
    baseClass: function () {
      return {
        'x4-bb-group': true,
        'x4-fill': !!this.fill
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/base/BBGroup/BBGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var BBGroup_BBGroupvue_type_script_lang_js_ = (BBGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/base/BBGroup/BBGroup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BBGroup_BBGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BBGroup.vue"
/* harmony default export */ var BBGroup = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BONumberFactor/BONumberFactor.vue?vue&type=template&id=f2a06728&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_vm._v("Numerical prefix:")]),_c('BORadioButtons',{attrs:{"path":_vm.path,"value":_vm.value,"options":_vm.options}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BONumberFactor/BONumberFactor.vue?vue&type=template&id=f2a06728&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BONumberFactor/BONumberFactor.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BONumberFactorvue_type_script_lang_js_ = ({
  props: ['path', 'value'],
  components: map["a" /* default */].components({
    BORadioButtons: __webpack_require__(17)
  }),
  computed: map["a" /* default */].variables({
    options: function () {
      return {
        items: [{
          value: '',
          title: 'none'
        }, {
          value: 'K',
          title: 'K (kilo)'
        }, {
          value: 'M',
          title: 'M (mega)'
        }, {
          value: 'G',
          title: 'G (giga)'
        }, {
          value: 'auto',
          title: 'auto'
        }],
        itemValue: 'value',
        itemTitle: 'title'
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BONumberFactor/BONumberFactor.vue?vue&type=script&lang=js&
 /* harmony default export */ var BONumberFactor_BONumberFactorvue_type_script_lang_js_ = (BONumberFactorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BONumberFactor/BONumberFactor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BONumberFactor_BONumberFactorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BONumberFactor.vue"
/* harmony default export */ var BONumberFactor = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BONumberSeparator/BONumberSeparator.vue?vue&type=template&id=b0dad5ec&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BOInput',{attrs:{"type":"text","path":_vm.path,"value":_vm.value,"options":_vm.options}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BONumberSeparator/BONumberSeparator.vue?vue&type=template&id=b0dad5ec&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BONumberSeparator/BONumberSeparator.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BONumberSeparatorvue_type_script_lang_js_ = ({
  props: ['path', 'value'],
  components: map["a" /* default */].components({
    BOInput: __webpack_require__(4)
  }),
  computed: map["a" /* default */].variables({
    options: function () {
      return {
        icon: 'space_bar',
        label: 'Thousands separator'
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BONumberSeparator/BONumberSeparator.vue?vue&type=script&lang=js&
 /* harmony default export */ var BONumberSeparator_BONumberSeparatorvue_type_script_lang_js_ = (BONumberSeparatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BONumberSeparator/BONumberSeparator.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BONumberSeparator_BONumberSeparatorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BONumberSeparator.vue"
/* harmony default export */ var BONumberSeparator = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BONumberPrecision/BONumberPrecision.vue?vue&type=template&id=0ce86aaa&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BOSwitchbox',{attrs:{"path":_vm.path,"value":_vm.value1,"options":_vm.options1},on:{"change":_vm.change}}),_c('BOInput',{staticClass:"x4-margin-semi-top",attrs:{"type":"number","path":_vm.path,"value":_vm.value2,"options":_vm.options2},on:{"change":_vm.change}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BONumberPrecision/BONumberPrecision.vue?vue&type=template&id=0ce86aaa&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BONumberPrecision/BONumberPrecision.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BONumberPrecisionvue_type_script_lang_js_ = ({
  props: ['path', 'value'],
  components: map["a" /* default */].components({
    BOSwitchbox: __webpack_require__(10),
    BOInput: __webpack_require__(4)
  }),
  computed: map["a" /* default */].variables({
    value1: function () {
      return this.value === 'auto';
    },
    value2: function () {
      return this.value !== 'auto' ? this.value : 0;
    },
    options1: function () {
      return {
        label: 'Auto precision'
      };
    },
    options2: function () {
      return {
        icon: 'keyboard_tab',
        label: 'Decimal precision',
        min: 0
      };
    }
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;

      if (value === true) {
        value = 'auto';
      }

      if (value === false) {
        value = 0;
      }

      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BONumberPrecision/BONumberPrecision.vue?vue&type=script&lang=js&
 /* harmony default export */ var BONumberPrecision_BONumberPrecisionvue_type_script_lang_js_ = (BONumberPrecisionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BONumberPrecision/BONumberPrecision.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BONumberPrecision_BONumberPrecisionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BONumberPrecision.vue"
/* harmony default export */ var BONumberPrecision = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOItemsStrategy/BOItemsStrategy.vue?vue&type=template&id=33c7f63a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"x4-margin-semi-bottom"},[_vm._v("Retrieving strategy:")]),_c('BORadioButtons',{attrs:{"path":_vm.path,"value":_vm.value1,"options":_vm.options1}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOItemsStrategy/BOItemsStrategy.vue?vue&type=template&id=33c7f63a&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOItemsStrategy/BOItemsStrategy.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOItemsStrategyvue_type_script_lang_js_ = ({
  props: ['path', 'value'],
  components: map["a" /* default */].components({
    BORadioButtons: __webpack_require__(17)
  }),
  computed: map["a" /* default */].variables({
    value1: function () {
      return this.value || 'include_all';
    },
    options1: function () {
      return {
        items: [{
          value: 'include_all',
          title: 'show ALL items except:'
        }, {
          value: 'exclude_all',
          title: 'show ONLY these items:'
        }],
        itemValue: 'value',
        itemTitle: 'title'
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOItemsStrategy/BOItemsStrategy.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOItemsStrategy_BOItemsStrategyvue_type_script_lang_js_ = (BOItemsStrategyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOItemsStrategy/BOItemsStrategy.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOItemsStrategy_BOItemsStrategyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOItemsStrategy.vue"
/* harmony default export */ var BOItemsStrategy = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOIcon/BOIcon.vue?vue&type=template&id=c65b0f9c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BOSwitchbox',{attrs:{"value":_vm.value1,"options":_vm.options1},on:{"change":_vm.change}}),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"text","value":_vm.value2,"options":_vm.options2},on:{"change":_vm.change}}),_vm._m(0)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-hint x4-margin-semi-top"},[_vm._v("Click here to see a list of "),_c('a',{attrs:{"target":"_blank","href":"https://material.io/tools/icons/?style=baseline"}},[_vm._v("available icons")])])}]


// CONCATENATED MODULE: ./common/components/bui/options/BOIcon/BOIcon.vue?vue&type=template&id=c65b0f9c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOIcon/BOIcon.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOIconvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'options'],
  components: map["a" /* default */].components({
    BOSwitchbox: __webpack_require__(10),
    BOInput: __webpack_require__(4)
  }),
  computed: map["a" /* default */].variables({
    value1: function () {
      return !!this.value;
    },
    value2: function () {
      return this.value || '';
    },
    options1: function () {
      var options = {
        label: 'Show icon'
      };
      return options;
    },
    options2: function () {
      var options = {
        icon: 'info',
        label: 'Icon code'
      };
      return Object.assign(options, this.options);
    }
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;
      value = value === true ? this.options.default : value;
      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOIcon/BOIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOIcon_BOIconvue_type_script_lang_js_ = (BOIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOIcon/BOIcon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOIcon_BOIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOIcon.vue"
/* harmony default export */ var BOIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInputsList/BOInputsList.vue?vue&type=template&id=123343c6&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-bo-items-list"},[_c('SortableList',{attrs:{"type":_vm.type,"items":_vm.items,"options":_vm.options,"addremove":_vm.addremove},on:{"change":_vm.change}}),(_vm.addremove !== false)?_c('div',{staticClass:"x4-clearfix"},[_c('Button',{staticClass:"x4-add-more x4-float-right x4-margin-top",attrs:{"scale":.75,"options":_vm.options2},on:{"click":_vm.add}})],1):_vm._e(),_c('Style',[_vm._v(".x4-bo-items-list\n  \n  .x4-add-more\n    margin-right: 14px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOInputsList/BOInputsList.vue?vue&type=template&id=123343c6&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInputsList/BOInputsList.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var BOInputsListvue_type_script_lang_js_ = ({
  props: ['type', 'path', 'value', 'options', 'addremove'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Button: __webpack_require__(14),
    SortableList: __webpack_require__(116)
  }),
  data: function () {
    var value = this.$store.getters['helpers/items/src']({
      src: this.value
    });
    return {
      items: this.parseValue({
        value: value
      })
    };
  },
  watch: {
    avalue: function (value) {
      if (value !== this.prevValue) {
        this.items = this.parseValue({
          value: value
        });
      }
    }
  },
  computed: map["a" /* default */].variables({
    avalue: function (_ref) {
      var getters = _ref.getters;
      return getters['helpers/items/src']({
        src: this.value
      });
    },
    options2: function () {
      return {
        subtheme: 'outlined',
        label: 'Add more',
        icon: 'add'
      };
    }
  }),
  methods: map["a" /* default */].variables({
    add: function () {
      this.items.push([{
        value: null,
        title: ''
      }, Math.random()]);
    },
    parseValue: function (context, _ref2) {
      var value = _ref2.value;
      value = value || [];
      var items = value.map(function (item) {
        return [Object.assign({}, item), Math.random()];
      });
      return items.length === 0 ? [[{
        value: null,
        title: ''
      }, Math.random()]] : items;
    },
    change: function (_ref3, _ref4) {
      var dispatch = _ref3.dispatch;
      var op = _ref4.op,
          items = _ref4.items,
          index = _ref4.index,
          name = _ref4.name,
          value = _ref4.value;

      switch (op) {
        case 'replace':
          this.items = items;
          break;

        case 'splice':
          this.items.splice(index, 1);
          break;

        case 'set':
          this.items[index][0][name] = value;
          break;
      }

      var result = this.items.map(function (item) {
        return item[0];
      }).filter(function (item) {
        return !!item;
      });
      this.prevValue = result;
      dispatch('builder/option/change', {
        path: this.path,
        value: result
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOInputsList/BOInputsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOInputsList_BOInputsListvue_type_script_lang_js_ = (BOInputsListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOInputsList/BOInputsList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOInputsList_BOInputsListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOInputsList.vue"
/* harmony default export */ var BOInputsList = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/RadioButtons/RadioButtons.vue?vue&type=template&id=8215bcce&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c(_vm.themeComponent,{tag:"div",class:_vm.baseClass,attrs:{"is2":_vm.subthemeComponent,"value":_vm.mvalue,"menuOptions":_vm.menuOptions,"colors":_vm.colors,"scale":_vm.scale},on:{"change":_vm.change},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var option = ref.option;
return _c('div',{staticClass:"x4-label"},[_vm._v(_vm._s(_vm.menuHash[option]))])}}])},[_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-radio-buttons\n  display: inline-block\n  position: relative\n  vertical-align: top\n\n  .x4-label\n    overflow-x: hidden\n    text-overflow: ellipsis\n    white-space: nowrap\n")])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/RadioButtons/RadioButtons.vue?vue&type=template&id=8215bcce&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./common/components/ui/RadioButtons/themes/themes.js

/* harmony default export */ var themes = ({
  themes: map["a" /* default */].components({
    material: __webpack_require__(110)
  }),
  subthemes: {
    material: map["a" /* default */].components({
      default: __webpack_require__(111)
    })
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/RadioButtons/RadioButtons.vue?vue&type=script&lang=js&
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
//
//
//


/* harmony default export */ var RadioButtonsvue_type_script_lang_js_ = ({
  props: ['value', 'options', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2)
  }),
  data: function () {
    return {
      mvalue: this.value
    };
  },
  watch: {
    value: function (value) {
      this.mvalue = value;
    }
  },
  computed: map["a" /* default */].variables({
    visible: function () {
      return this.options && this.options.visible !== undefined ? this.options.visible : true;
    },
    theme: function (_ref) {
      var state = _ref.state;
      var value = !this.options || !this.options.theme ? this.$root.theme || state.theme : this.options.theme;
      return !themes.themes[value] ? 'material' : value;
    },
    subtheme: function (_ref2) {
      var state = _ref2.state;
      var value = this.options && this.options.subtheme ? this.options.subtheme : 'default';
      return !themes.subthemes[this.theme][value] ? 'default' : value;
    },
    colors: function (_ref3) {
      var state = _ref3.state;
      var colors = this.$root.colors || state.colors;
      return this.options && this.options.colors ? Object.assign({}, colors, this.options.colors) : colors;
    },
    themeComponent: function () {
      return themes.themes[this.theme];
    },
    subthemeComponent: function () {
      return themes.subthemes[this.theme][this.subtheme];
    },
    baseClass: function () {
      var result = {};
      result['x4-ui-radio-buttons'] = true;
      result['x4-theme-' + this.theme] = true;
      result['x4-subtheme-' + this.subtheme] = true;
      return result;
    },
    aitems: function (_ref4) {
      var getters = _ref4.getters;
      return getters['helpers/items/src']({
        src: this.options.items
      });
    },
    menuHash: function (_ref5) {
      var getters = _ref5.getters;
      return getters['helpers/items/menu/hash']({
        items: this.aitems,
        itemValue: this.options.itemValue,
        itemTitle: this.options.itemTitle
      });
    },
    menuOptions: function (_ref6) {
      var getters = _ref6.getters;
      return getters['helpers/items/menu/options']({
        items: this.aitems,
        itemValue: this.options.itemValue
      });
    }
  }),
  methods: {
    change: function (value) {
      this.mvalue = value;
      this.$emit('change', {
        value: value
      });
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/RadioButtons/RadioButtons.vue?vue&type=script&lang=js&
 /* harmony default export */ var RadioButtons_RadioButtonsvue_type_script_lang_js_ = (RadioButtonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/RadioButtons/RadioButtons.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  RadioButtons_RadioButtonsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "RadioButtons.vue"
/* harmony default export */ var RadioButtons = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSSelect/BSSelect.vue?vue&type=template&id=fd3b3f0c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[(_vm.vschema)?_c('BBOption',{attrs:{"title":"Default value"}},[_c('BOActions',{attrs:{"path":_vm.vschema.path}}),_c('BOInput',{attrs:{"type":"select","value":_vm.vvalue,"options":_vm.vschema.options,"path":_vm.vschema.path}})],1):_vm._e(),(_vm.schema.valueOptions && _vm.schema.valueOptions.patterns)?_c('BBOption',{attrs:{"title":"Value template"}},[_c('BOActions',{attrs:{"path":_vm.path + '.itemTemplate'}}),_c('BOTemplate',{attrs:{"value":_vm.values.itemTemplate,"options":_vm.schema.valueOptions,"path":_vm.path + '.itemTemplate'}})],1):_vm._e(),(_vm.isRawItems)?_c('BBOption',{attrs:{"title":"Items list"}},[_c('BOActions',{attrs:{"path":_vm.schema.itemsOptions.path}}),_c('BOInputsList',{attrs:{"type":_vm.schema.itemsOptions.type,"value":_vm.values.items,"options":_vm.schema.itemsOptions,"path":_vm.schema.itemsOptions.path}})],1):_vm._e(),(!_vm.isRawItems)?_c('BBOption',{attrs:{"title":"Items list"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.strategy', _vm.path + '.except']}}),_c('BOItemsStrategy',{attrs:{"value":_vm.values.strategy,"path":_vm.path + '.strategy'}}),_c('BOInputList',{staticClass:"x4-margin-top",attrs:{"type":"select","value":_vm.values.except,"options":_vm.schema.exceptOptions,"path":_vm.path + '.except'}})],1):_vm._e(),(!_vm.isRawItems)?_c('BBOption',{attrs:{"title":"Top items"}},[_c('BOActions',{attrs:{"path":_vm.path + '.top'}}),_c('BOInputList',{attrs:{"type":"select","value":_vm.values.top,"options":_vm.schema.topOptions,"path":_vm.path + '.top'}})],1):_vm._e(),_c('BBOption',{attrs:{"title":"Label"}},[_c('BOActions',{attrs:{"path":_vm.path + '.label'}}),_c('BOLabel',{attrs:{"value":_vm.values.label,"options":_vm.schema.labelOptions,"path":_vm.path + '.label'}})],1),_c('BBOption',{attrs:{"title":"Icon"}},[_c('BOActions',{attrs:{"path":_vm.path + '.icon'}}),_c('BOIcon',{attrs:{"value":_vm.values.icon,"options":_vm.schema.iconOptions,"path":_vm.path + '.icon'}})],1),_c('BBOption',{attrs:{"title":"Theme"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.theme', _vm.path + '.subtheme']}}),_c('BOTheme',{attrs:{"path":_vm.path,"theme":_vm.themeValue,"subtheme":_vm.subthemeValue,"themes":_vm.themePresets,"decline":_vm.declineTheme}})],1),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSSelect/BSSelect.vue?vue&type=template&id=fd3b3f0c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSSelect/BSSelect.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSSelectvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4),
    BOInputsList: __webpack_require__(29),
    BOInputList: __webpack_require__(13),
    BOItemsStrategy: __webpack_require__(27),
    BOTemplate: __webpack_require__(15),
    BOLabel: __webpack_require__(20),
    BOIcon: __webpack_require__(28),
    BOTheme: __webpack_require__(11),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    isRawItems: function () {
      return !!this.schema.itemsOptions;
    },
    themeValue: function (_ref) {
      var state = _ref.state;
      return this.values.theme || state.theme;
    },
    subthemeValue: function (_ref2) {
      var state = _ref2.state;
      return this.values.subtheme || state.subtheme;
    },
    colorsValue: function (_ref3) {
      var state = _ref3.state;
      return Object.assign({}, state.colors, this.values.colors);
    },
    themePresets: function (_ref4) {
      var getters = _ref4.getters;
      return getters['builder/presets/themes']({
        changeName: this.schema.name,
        allowedThemes: ['material'],
        allowedSubthemes: {
          material: ['filled', 'outlined', 'standard']
        }
      });
    },
    colorPresets: function (_ref5) {
      var getters = _ref5.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary', 'inverted', 'accent']
      });
    },
    declineTheme: function (_ref6) {
      var state = _ref6.state;
      return function (_ref7) {
        var theme = _ref7.theme,
            subtheme = _ref7.subtheme;
        return theme === state.theme && subtheme === state.subtheme;
      };
    },
    declineColor: function (_ref8) {
      var state = _ref8.state;
      return function (_ref9) {
        var name = _ref9.name,
            value = _ref9.value;
        return value === state.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSSelect/BSSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSSelect_BSSelectvue_type_script_lang_js_ = (BSSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSSelect/BSSelect.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSSelect_BSSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSSelect.vue"
/* harmony default export */ var BSSelect = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/ShowOptions/ShowOptions.vue?vue&type=template&id=54bf31ec&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{class:_vm.baseClass},[_c('div',{staticClass:"x4-header",on:{"click":_vm.toggleShowOptions}},[_c('Icon',{staticClass:"x4-icon x4-transition",attrs:{"icon":"arrow_right"}}),_c('div',[_vm._v("Show additional options")])],1),_c('DropDown',{staticClass:"x4-options",attrs:{"opened":_vm.showOptions}},[_vm._t("default")],2),_c('Style',[_vm._v(".x4-show-options\n  display: flex\n  flex-direction: column\n\n  .x4-header\n    align-items: center\n    cursor: pointer\n    display: flex\n    font-size: 16px\n\n  &.x4-active .x4-header .x4-icon\n    transform: rotate(90deg)\n\n  .x4-options\n    display: flex\n    flex-direction: column\n\n    > .x4-inside\n      display: flex\n      flex-direction: column\n      padding-top: 16px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/ShowOptions/ShowOptions.vue?vue&type=template&id=54bf31ec&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/ShowOptions/ShowOptions.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var ShowOptionsvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7),
    DropDown: __webpack_require__(16)
  }),
  data: function () {
    return {
      showOptions: false
    };
  },
  computed: map["a" /* default */].variables({
    baseClass: function () {
      return {
        'x4-show-options': true,
        'x4-active': this.showOptions
      };
    }
  }),
  methods: map["a" /* default */].variables({
    toggleShowOptions: function () {
      this.showOptions = !this.showOptions;
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/ShowOptions/ShowOptions.vue?vue&type=script&lang=js&
 /* harmony default export */ var ShowOptions_ShowOptionsvue_type_script_lang_js_ = (ShowOptionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/ShowOptions/ShowOptions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ShowOptions_ShowOptionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ShowOptions.vue"
/* harmony default export */ var ShowOptions = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/CopyButton/CopyButton.vue?vue&type=template&id=f33b3caa&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Button',{staticClass:"x4-copy-button",attrs:{"scale":.75,"options":_vm.options},on:{"click":_vm.click}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/CopyButton/CopyButton.vue?vue&type=template&id=f33b3caa&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/CopyButton/CopyButton.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CopyButtonvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    Button: __webpack_require__(14)
  }),
  computed: map["a" /* default */].variables({
    options: function () {
      return {
        icon: 'save',
        label: 'Copy',
        flylabel: 'Copied!'
      };
    }
  }),
  methods: map["a" /* default */].variables({
    click: function () {
      window.getSelection().selectAllChildren(this.$parent.$refs.code);
      document.execCommand('copy');
      this.flyforce();
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/CopyButton/CopyButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var CopyButton_CopyButtonvue_type_script_lang_js_ = (CopyButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/CopyButton/CopyButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CopyButton_CopyButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CopyButton.vue"
/* harmony default export */ var CopyButton = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOCheckbox/BOCheckbox.vue?vue&type=template&id=5081cd70&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Checkbox',{attrs:{"scale":".75","value":_vm.value,"options":_vm.options},on:{"change":_vm.change}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOCheckbox/BOCheckbox.vue?vue&type=template&id=5081cd70&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOCheckbox/BOCheckbox.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOCheckboxvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'options'],
  components: map["a" /* default */].components({
    Checkbox: __webpack_require__(35)
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value,
          option = _ref2.option,
          optionValue = _ref2.optionValue;

      if (this.$listeners && this.$listeners.change) {
        return this.$emit('change', {
          value: value
        });
      }

      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOCheckbox/BOCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOCheckbox_BOCheckboxvue_type_script_lang_js_ = (BOCheckboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOCheckbox/BOCheckbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOCheckbox_BOCheckboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOCheckbox.vue"
/* harmony default export */ var BOCheckbox = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Checkbox/Checkbox.vue?vue&type=template&id=8d7d3e3a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Checkboxes',{attrs:{"value":_vm.value1,"options":_vm.options1,"scale":_vm.scale},on:{"change":_vm.change}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Checkbox/Checkbox.vue?vue&type=template&id=8d7d3e3a&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Checkbox/Checkbox.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Checkboxvue_type_script_lang_js_ = ({
  props: ['value', 'options', 'scale'],
  components: map["a" /* default */].components({
    Checkboxes: __webpack_require__(42)
  }),
  computed: map["a" /* default */].variables({
    value1: function () {
      return {
        single: this.value
      };
    },
    options1: function () {
      return {
        items: [{
          value: 'single',
          title: this.options.title || ''
        }],
        itemValue: 'value',
        itemTitle: 'title'
      };
    }
  }),
  methods: map["a" /* default */].variables({
    change: function (context, _ref) {
      var option = _ref.option,
          value = _ref.value,
          optionValue = _ref.optionValue;
      this.$emit('change', {
        value: optionValue
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/ui/Checkbox/Checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkbox_Checkboxvue_type_script_lang_js_ = (Checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Checkbox/Checkbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkbox_Checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Checkbox.vue"
/* harmony default export */ var Checkbox = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Ripple/Ripple.vue?vue&type=template&id=44eb4c46&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c('DIV',{directives:[{name:"show",rawName:"v-show",value:(_vm.showRipple),expression:"showRipple"}],class:_vm.baseClass},[_c('transition-group',{staticClass:"x4-inside",attrs:{"tag":"div","name":"x4"},on:{"enter":_vm.rippleEnter,"after-leave":_vm.rippleLeave}},_vm._l((_vm.ripples),function(ripple){return _c('Core',{key:ripple.id,attrs:{"id":ripple.id,"color":_vm.color || _vm.options.color,"speed":_vm.speed || _vm.options.speed,"opacity":_vm.opacity || _vm.options.opacity,"transition":_vm.transition || _vm.options.transition,"styles":ripple.styles},on:{"end":_vm.handleRippleEnd}})})),(!_vm.nostyle)?_c('Style',[_vm._v(".x4-ui-ripple\n  height: 100%\n  left: 0\n  pointer-events: none\n  position: absolute\n  top: 0\n  width: 100%\n\n  .x4-inside\n    display: block\n    height: 100%\n    overflow: hidden\n    position: relative\n    width: 100%\n\n    .x4-core\n      border-radius: 50%\n      display: block\n      position: absolute\n\n      &.x4-leave-to\n        opacity: 0!important\n")]):_vm._e()],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Ripple/Ripple.vue?vue&type=template&id=44eb4c46&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Ripple/Ripple.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//

/* harmony default export */ var Ripplevue_type_script_lang_js_ = ({
  props: ['color', 'opacity', 'speed', 'transition', 'theme', 'nostyle'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Core: __webpack_require__(102)
  }),
  data: function () {
    return {
      id: 0,
      ripples: [],
      rippleCount: 0,
      mouseuped: true,
      keepLastRipple: false
    };
  },
  mounted: function () {
    this.$el.parentNode.addEventListener('mousedown', this.mousedown);
    this.$el.parentNode.addEventListener('mouseup', this.mouseup);
  },
  beforeDestroy: function () {
    this.clearRipples();
  },
  computed: map["a" /* default */].variables({
    visible: function () {
      return this.theme === 'material';
    },
    baseClass: function () {
      return {
        'x4-ui-ripple': true
      };
    },
    options: function (_ref) {
      var state = _ref.state;
      return {
        color: 'rgba(255,255,255,1)',
        transition: 'ease',
        opacity: .32,
        speed: 1
      };
    },
    showRipple: function () {
      return this.rippleCount > 0;
    }
  }),
  methods: {
    mouseup: function (event) {
      this.mouseuped = true;

      if (this.keepLastRipple) {
        this.clearRipples();
      }
    },
    mousedown: function (event) {
      this.mouseuped = false;

      var _this$$el$parentNode$ = this.$el.parentNode.getBoundingClientRect(),
          insideY = _this$$el$parentNode$.top,
          insideX = _this$$el$parentNode$.left;

      var layerX = event.clientX,
          layerY = event.clientY;
      var positionX = layerX - insideX;
      var positionY = layerY - insideY;

      var _this$getRippleSize = this.getRippleSize(positionX, positionY),
          size = _this$getRippleSize.size,
          left = _this$getRippleSize.left,
          top = _this$getRippleSize.top;

      this.ripples.push({
        id: this.id += 1,
        styles: {
          size: size,
          left: left,
          top: top
        }
      });
    },
    handleRippleEnd: function (id) {
      var targetIndex = -1;
      this.ripples.forEach(function (ripple, index) {
        if (ripple.id === id) {
          targetIndex = index;
        }
      });

      if (targetIndex > -1) {
        if (!this.mouseuped && targetIndex === this.ripples.length - 1) {
          this.keepLastRipple = true;
        } else {
          this.ripples.splice(targetIndex, 1);
        }
      }
    },
    getRippleSize: function (positionX, positionY) {
      var width = this.$el.parentNode.clientWidth;
      var height = this.$el.parentNode.clientHeight;
      var coordinates = [[0, 0], [width, 0], [0, height], [width, height]].map(function (coordinate) {
        return Math.sqrt(Math.pow(coordinate[0] - positionX, 2) + Math.pow(coordinate[1] - positionY, 2));
      });
      var maxCoordinate = Math.max.apply({}, coordinates);
      var size = maxCoordinate * 2;
      var left = positionX - size / 2;
      var top = positionY - size / 2;
      return {
        size: size,
        left: left,
        top: top
      };
    },
    clearRipples: function () {
      this.ripples = [];
    },
    rippleEnter: function () {
      this.rippleCount += 1;
    },
    rippleLeave: function () {
      this.rippleCount -= 1;
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Ripple/Ripple.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ripple_Ripplevue_type_script_lang_js_ = (Ripplevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Ripple/Ripple.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Ripple_Ripplevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Ripple.vue"
/* harmony default export */ var Ripple = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOSort/BOSort.vue?vue&type=template&id=245e997c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-bo-sort"},[_c('BOInput',{attrs:{"type":"select","value":_vm.value1,"options":_vm.options1},on:{"change":_vm.change1}}),_c('div',{staticClass:"x4-margin-top"},[_vm._v("Sort direction:")]),_c('BORadioButtons',{staticClass:"x4-margin-semi-top",attrs:{"value":_vm.value2,"options":_vm.options2},on:{"change":_vm.change2}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOSort/BOSort.vue?vue&type=template&id=245e997c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOSort/BOSort.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BOSortvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'options'],
  components: map["a" /* default */].components({
    BOInput: __webpack_require__(4),
    BORadioButtons: __webpack_require__(17)
  }),
  computed: map["a" /* default */].variables({
    value1: function () {
      return this.value.split(':')[0];
    },
    value2: function () {
      return this.value.split(':')[1];
    },
    options1: function () {
      var options = {
        icon: 'sort_by_alpha',
        label: 'Sort field'
      };
      return Object.assign(options, this.options);
    },
    options2: function () {
      return {
        items: [{
          value: 'asc',
          title: '(asc)ending'
        }, {
          value: 'desc',
          title: '(desc)ending'
        }],
        itemValue: 'value',
        itemTitle: 'title'
      };
    }
  }),
  methods: map["a" /* default */].variables({
    change1: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;
      dispatch('builder/option/change', {
        path: this.path,
        value: value + ':' + this.value2
      });
    },
    change2: function (_ref3, _ref4) {
      var dispatch = _ref3.dispatch;
      var value = _ref4.value;
      dispatch('builder/option/change', {
        path: this.path,
        value: this.value1 + ':' + value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOSort/BOSort.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOSort_BOSortvue_type_script_lang_js_ = (BOSortvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOSort/BOSort.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOSort_BOSortvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOSort.vue"
/* harmony default export */ var BOSort = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_bootstrap_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _common_bootstrap_polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_bootstrap_polyfills__WEBPACK_IMPORTED_MODULE_0__);

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
var x4plugin = window[globName];
x4builder.schema = {
  "coinTable": {
    "themes": [{
      "name": "material",
      "subthemes": [{
        "name": "filled",
        "title": "Material<br/>Filled"
      }, {
        "name": "outlined",
        "title": "Material<br/>Outlined"
      }, {
        "name": "standard",
        "title": "Material<br/>Standard"
      }]
    }],
    "layouts": [{
      "name": "full-featured",
      "sublayouts": [{
        "name": "1",
        "title": "Full Featured<br/>Widget #1"
      }]
    }],
    "colors": [{
      "name": "primary",
      "title": "Primary<br/>Color"
    }, {
      "name": "inverted",
      "title": "Inverted<br/>Color"
    }, {
      "name": "accent",
      "title": "Accent<br/>Color"
    }, {
      "name": "flashGreen",
      "title": "Green Flash<br/>Color"
    }, {
      "name": "flashRed",
      "title": "Red Flash<br/>Color"
    }, {
      "name": "badgeGreenText",
      "title": "Green Badge<br/>Text Color"
    }, {
      "name": "badgeGreenBack",
      "title": "Green Badge<br/>Back Color"
    }, {
      "name": "badgeRedText",
      "title": "Red Badge<br/>Text Color"
    }, {
      "name": "badgeRedBack",
      "title": "Red Badge<br/>Back Color"
    }, {
      "name": "coin1",
      "title": "Chart<br/>Color"
    }, {
      "name": "crosshair",
      "title": "Crosshair<br/>Color"
    }],
    "controls": {
      "coinTable": {
        "value": "sort",
        "path": "controls.coinTable",
        "main": {
          "icon": "grid_on",
          "name": "coinTable",
          "title": "Table block",
          "coins": {
            "exceptOptions": {
              "items": "getters.entities/coins/all",
              "itemValue": "id",
              "itemTemplate": "[rank]. [name] ([short])",
              "icon": "copyright",
              "label": "Coin name"
            },
            "topOptions": {
              "items": "state.entities.coins2",
              "itemValue": "id",
              "itemTemplate": "[rank]. [name] ([short])",
              "icon": "copyright",
              "label": "Coin name"
            }
          },
          "hideOrderOptions": {
            "items": [],
            "itemValue": "value",
            "itemTitle": "title",
            "icon": "sort_by_alpha",
            "label": "Column name"
          }
        },
        "columns": {
          "icon": "view_week",
          "title": "Table columns",
          "orderOptions": {
            "items": [],
            "itemValue": "value",
            "itemTitle": "title",
            "icon": "sort_by_alpha",
            "label": "Table column"
          },
          "alignOptions": {
            "items": [{
              "value": "left",
              "title": "to the left"
            }, {
              "value": "right",
              "title": "to the right"
            }, {
              "value": "center",
              "title": "center"
            }],
            "itemValue": "value",
            "itemTitle": "title"
          },
          "sortOptions": {
            "items": [{
              "value": "asc",
              "title": "(asc)ending"
            }, {
              "value": "desc",
              "title": "(desc)ending"
            }],
            "itemValue": "value",
            "itemTitle": "title"
          },
          "rank": {
            "title": "Rank"
          },
          "name": {
            "title": "Name",
            "patterns": [{
              "name": "[icon]",
              "desc": "coin icon"
            }, {
              "name": "[name]",
              "desc": "coin full name"
            }, {
              "name": "[short]",
              "desc": "coin abbreviation"
            }]
          },
          "mktcap": {
            "title": "Market Cap",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }, {
              "name": "[symbol]",
              "desc": "currency symbol"
            }, {
              "name": "[short]",
              "desc": "currency abbreviation (only if the currency symbol does not exist)"
            }]
          },
          "price": {
            "title": "Price",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }, {
              "name": "[symbol]",
              "desc": "currency symbol"
            }, {
              "name": "[short]",
              "desc": "currency abbreviation (only if the currency symbol does not exist)"
            }]
          },
          "vwap": {
            "title": "VWAP",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }, {
              "name": "[symbol]",
              "desc": "currency symbol"
            }, {
              "name": "[short]",
              "desc": "currency abbreviation (only if the currency symbol does not exist)"
            }]
          },
          "supply": {
            "title": "Supply",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }]
          },
          "volume": {
            "title": "Volume",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }, {
              "name": "[symbol]",
              "desc": "currency symbol"
            }, {
              "name": "[short]",
              "desc": "currency abbreviation (only if the currency symbol does not exist)"
            }]
          },
          "change24h": {
            "title": "%24h",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }]
          },
          "actions": {
            "title": "Actions"
          }
        },
        "actions": {
          "icon": "queue",
          "title": "Table actions",
          "orderOptions": {
            "items": [],
            "itemValue": "value",
            "itemTitle": "title",
            "icon": "sort_by_alpha",
            "label": "Button name"
          },
          "buy": {
            "name": "buy",
            "path": "controls.coinTable.actions.buy",
            "icon": null,
            "title": "Buy button",
            "iconOptions": {
              "default": "shopping_cart"
            },
            "labelOptions": {
              "default": "Buy",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "tooltipOptions": {
              "default": "Buy Coins",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "urlOptions": {
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            }
          },
          "sell": {
            "name": "sell",
            "path": "controls.coinTable.actions.sell",
            "icon": null,
            "title": "Sell button",
            "iconOptions": {
              "default": "local_mall"
            },
            "labelOptions": {
              "default": "Sell",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "tooltipOptions": {
              "default": "Sell Coins",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "urlOptions": {
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            }
          },
          "more": {
            "name": "more",
            "path": "controls.coinTable.actions.more",
            "icon": null,
            "title": "Read more button",
            "iconOptions": {
              "default": "launch"
            },
            "labelOptions": {
              "default": "Read More",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "tooltipOptions": {
              "default": "Read More",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "urlOptions": {
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            }
          },
          "website": {
            "name": "website",
            "path": "controls.coinTable.actions.website",
            "icon": null,
            "title": "Website button",
            "iconOptions": {
              "default": "public"
            },
            "labelOptions": {
              "default": "Website",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "tooltipOptions": {
              "default": "Open Coin Website",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "urlOptions": {
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            }
          },
          "explorer": {
            "name": "explorer",
            "path": "controls.coinTable.actions.explorer",
            "icon": null,
            "title": "Explorer button",
            "iconOptions": {
              "default": "equalizer"
            },
            "labelOptions": {
              "default": "Explorer",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "tooltipOptions": {
              "default": "Open Coin Explorer",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "urlOptions": {
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            }
          }
        }
      },
      "fiatSelect": {
        "value": "fiat",
        "name": "fiatSelect",
        "path": "controls.fiatSelect",
        "icon": "monetization_on",
        "title": "Fiat select",
        "iconOptions": {
          "default": "monetization_on"
        },
        "labelOptions": {
          "default": "Fiat currency"
        },
        "exceptOptions": {
          "items": "getters.entities/fiats/all",
          "itemValue": "id",
          "itemTitle": "short",
          "icon": "monetization_on",
          "label": "Fiat currency"
        },
        "topOptions": {
          "items": "getters.entities/fiats",
          "itemValue": "id",
          "itemTitle": "short",
          "icon": "monetization_on",
          "label": "Fiat currency"
        },
        "valueOptions": {
          "patterns": [{
            "name": "[short]",
            "desc": "currency abbreviation"
          }, {
            "name": "[symbol]",
            "desc": "currency symbol"
          }]
        }
      },
      "perPageSelect": {
        "value": "perPage",
        "name": "perPageSelect",
        "path": "controls.perPageSelect",
        "icon": "layers",
        "title": "Per Page select",
        "iconOptions": {
          "default": "layers"
        },
        "labelOptions": {
          "default": "Coins per page"
        },
        "itemsOptions": {
          "path": "selections.perPage",
          "items": "state.selections.perPage",
          "itemValue": "value",
          "itemTitle": "title",
          "icon": "layers",
          "label": "Coins per page"
        }
      },
      "searchInput": {
        "value": "search",
        "name": "searchInput",
        "path": "controls.searchInput",
        "icon": "search",
        "title": "Search input",
        "iconOptions": {
          "default": "search"
        },
        "labelOptions": {
          "default": "Search for coins"
        }
      },
      "coinTabs": {
        "value": "coinTab",
        "name": "coinTabs",
        "path": "controls.coinTabs",
        "icon": "tab",
        "title": "Popup Coin tabs",
        "itemsOptions": {
          "path": "selections.coinTab",
          "items": "state.selections.coinTab",
          "itemValue": "value",
          "itemTitle": "title",
          "icon": "tab",
          "label": "Coin tab"
        }
      },
      "coinColumn": {
        "path": "controls.coinColumn",
        "name": "coinColumn",
        "icon": "crop_portrait",
        "title": "Coin column",
        "rows": {
          "orderOptions": {
            "items": [],
            "itemValue": "value",
            "itemTitle": "title",
            "icon": "sort_by_alpha",
            "label": "Row name"
          },
          "rank": {
            "title": "Rank"
          },
          "trade": {
            "title": "Trade buttons",
            "buy": {
              "name": "buy",
              "title": "Buy button",
              "iconOptions": {
                "default": "shopping_cart"
              },
              "labelOptions": {
                "default": "Buy",
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              },
              "tooltipOptions": {
                "default": "Buy Coins",
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              },
              "urlOptions": {
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              }
            },
            "sell": {
              "name": "sell",
              "title": "Sell button",
              "iconOptions": {
                "default": "local_mall"
              },
              "labelOptions": {
                "default": "Sell",
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              },
              "tooltipOptions": {
                "default": "Sell Coins",
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              },
              "urlOptions": {
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              }
            }
          },
          "name": {
            "title": "Name",
            "patterns": [{
              "name": "[icon]",
              "desc": "coin icon"
            }, {
              "name": "[name]",
              "desc": "coin full name"
            }, {
              "name": "[short]",
              "desc": "coin abbreviation"
            }]
          },
          "links": {
            "title": "Coin buttons",
            "website": {
              "name": "website",
              "title": "Website button",
              "iconOptions": {
                "default": "public"
              },
              "labelOptions": {
                "default": "Website",
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              },
              "tooltipOptions": {
                "default": "Open Coin Website",
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              },
              "urlOptions": {
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              }
            },
            "explorer": {
              "name": "explorer",
              "title": "Explorer button",
              "iconOptions": {
                "default": "equalizer"
              },
              "labelOptions": {
                "default": "Explorer",
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              },
              "tooltipOptions": {
                "default": "Open Coin Explorer",
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              },
              "urlOptions": {
                "patterns": [{
                  "name": "[id]",
                  "desc": "coin ID (literal)"
                }, {
                  "name": "[coin]",
                  "desc": "coin abbreviation"
                }, {
                  "name": "[coin_lc]",
                  "desc": "coin abbreviation (lower case)"
                }, {
                  "name": "[fiat]",
                  "desc": "fiat abbreviation"
                }, {
                  "name": "[fiat_lc]",
                  "desc": "fiat abbreviation (lower case)"
                }]
              }
            }
          },
          "mktcap": {
            "title": "Market Cap",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }, {
              "name": "[symbol]",
              "desc": "currency symbol"
            }, {
              "name": "[short]",
              "desc": "currency abbreviation (only if the currency symbol does not exist)"
            }]
          },
          "price": {
            "title": "Price",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }, {
              "name": "[symbol]",
              "desc": "currency symbol"
            }, {
              "name": "[short]",
              "desc": "currency abbreviation (only if the currency symbol does not exist)"
            }]
          },
          "vwap": {
            "title": "VWAP",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }, {
              "name": "[symbol]",
              "desc": "currency symbol"
            }, {
              "name": "[short]",
              "desc": "currency abbreviation (only if the currency symbol does not exist)"
            }]
          },
          "supply": {
            "title": "Supply",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }]
          },
          "volume": {
            "title": "Volume",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }, {
              "name": "[symbol]",
              "desc": "currency symbol"
            }, {
              "name": "[short]",
              "desc": "currency abbreviation (only if the currency symbol does not exist)"
            }]
          },
          "change24h": {
            "title": "24h Change",
            "patterns": [{
              "name": "[value]",
              "desc": "numeric value"
            }]
          },
          "more": {
            "name": "more",
            "title": "Read More",
            "iconOptions": {
              "default": "launch"
            },
            "labelOptions": {
              "default": "Read More",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "tooltipOptions": {
              "default": "Read More",
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            },
            "urlOptions": {
              "patterns": [{
                "name": "[id]",
                "desc": "coin ID (literal)"
              }, {
                "name": "[coin]",
                "desc": "coin abbreviation"
              }, {
                "name": "[coin_lc]",
                "desc": "coin abbreviation (lower case)"
              }, {
                "name": "[fiat]",
                "desc": "fiat abbreviation"
              }, {
                "name": "[fiat_lc]",
                "desc": "fiat abbreviation (lower case)"
              }]
            }
          }
        }
      },
      "lineChart": {
        "path": "controls.lineChart",
        "name": "lineChart",
        "icon": "show_chart",
        "title": "Chart block",
        "heightOptions": {
          "icon": "swap_vert",
          "label": "Chart height",
          "min": 0,
          "step": 4
        },
        "thicknessOptions": {
          "icon": "line_weight",
          "label": "Thickness",
          "min": 1,
          "max": 10,
          "step": 1
        },
        "smoothnessOptions": {
          "icon": "line_weight",
          "label": "Smoothness",
          "min": 1,
          "max": 20,
          "step": 1
        },
        "formatOptions": {
          "label": "Price template",
          "patterns": [{
            "name": "[value]",
            "desc": "numeric value"
          }, {
            "name": "[symbol]",
            "desc": "currency symbol"
          }, {
            "name": "[short]",
            "desc": "currency abbreviation (only if the currency symbol does not exist)"
          }]
        },
        "legendOptions": {
          "label": "Legend template",
          "patterns": [{
            "name": "[coin]",
            "desc": "coin abbreviation"
          }, {
            "name": "[fiat]",
            "desc": "fiat abbreviation"
          }]
        },
        "watermarkOptions": {
          "patterns": [{
            "name": "[fiat]",
            "desc": "fiat abbreviation"
          }, {
            "name": "[coin1]",
            "desc": "coin1 abbreviation"
          }, {
            "name": "[coin2]",
            "desc": "coin2 abbreviation"
          }, {
            "name": "[coin3]",
            "desc": "coin3 abbreviation"
          }, {
            "name": "[coin4]",
            "desc": "coin4 abbreviation"
          }]
        },
        "colorsOptions": {
          "presets": ["primary", "coin1", "coin2", "coin3", "coin4", "crosshair"]
        }
      },
      "periodSelect": {
        "value": "period",
        "name": "periodSelect",
        "path": "controls.periodSelect",
        "icon": "access_time",
        "title": "Period select",
        "itemsOptions": {
          "path": "selections.period",
          "items": "state.selections.period",
          "itemValue": "value",
          "itemTitle": "title",
          "icon": "access_time",
          "label": "Period of time"
        }
      },
      "pagerBlock": {
        "value": "page",
        "name": "pagerBlock",
        "path": "controls.pagerBlock",
        "icon": "style",
        "title": "Pager block",
        "labelOptions": {
          "default": "Showing [from]-[to] of [total] coins",
          "patterns": [{
            "name": "[total]",
            "desc": "total number of coins"
          }, {
            "name": "[from]",
            "desc": "from number on the current page"
          }, {
            "name": "[to]",
            "desc": "to number on the current page"
          }]
        }
      },
      "loader": {
        "name": "loader",
        "path": "controls.loader",
        "icon": "sync",
        "title": "Initial loader"
      }
    },
    "values": {
      "sort": {
        "name": "sort",
        "path": {
          "mutation": "SORT_CHANGE",
          "value": "values.sort",
          "var": "sort"
        },
        "icon": "sort_by_alpha",
        "title": "Sort column",
        "options": {
          "items": [{
            "value": "rank",
            "title": "Rank"
          }, {
            "value": "name",
            "title": "Name"
          }, {
            "value": "mktcap",
            "title": "Market Cap"
          }, {
            "value": "price",
            "title": "Price"
          }, {
            "value": "vwap",
            "title": "VWAP"
          }, {
            "value": "supply",
            "title": "Supply"
          }, {
            "value": "volume",
            "title": "Volume"
          }, {
            "value": "change24h",
            "title": "%24h"
          }],
          "itemValue": "value",
          "itemTitle": "title",
          "icon": "sort_by_alpha",
          "label": "Sort column"
        }
      },
      "fiat": {
        "name": "fiat",
        "type": "select",
        "path": {
          "mutation": "FIAT_CHANGE",
          "value": "values.fiat",
          "var": "fiat"
        },
        "icon": "monetization_on",
        "title": "Fiat currency",
        "options": {
          "items": "getters.controls/fiatSelect",
          "itemValue": "id",
          "itemTitle": "short",
          "icon": "monetization_on",
          "label": "Fiat currency"
        }
      },
      "perPage": {
        "name": "perPage",
        "type": "select",
        "path": {
          "mutation": "PER_PAGE_CHANGE",
          "value": "values.perPage",
          "var": "perPage"
        },
        "icon": "layers",
        "title": "Coins per page",
        "options": {
          "items": "state.selections.perPage",
          "itemValue": "value",
          "itemTitle": "title",
          "icon": "layers",
          "label": "Coins per page"
        }
      },
      "search": {
        "name": "search",
        "type": "text",
        "path": {
          "mutation": "SEARCH_CHANGE",
          "value": "values.search",
          "var": "search"
        },
        "icon": "search",
        "title": "Search value",
        "options": {
          "icon": "search",
          "label": "Search value"
        }
      },
      "coinTab": {
        "name": "coinTab",
        "type": "select",
        "path": {
          "mutation": "COIN_TAB_CHANGE",
          "value": "defaults.coinTab",
          "var": "coinTab"
        },
        "icon": "tab",
        "title": "Popup Coin tab",
        "options": {
          "items": "state.selections.coinTab",
          "itemValue": "value",
          "itemTitle": "title",
          "icon": "tab",
          "label": "Coin tab"
        }
      },
      "period": {
        "name": "period",
        "type": "select",
        "path": {
          "mutation": "PERIOD_CHANGE",
          "value": "defaults.period",
          "var": "period"
        },
        "icon": "access_time",
        "title": "Chart Period",
        "options": {
          "items": "state.selections.period",
          "itemValue": "value",
          "itemTitle": "title",
          "icon": "access_time",
          "label": "Period of time"
        }
      },
      "page": {
        "name": "page",
        "type": "number",
        "path": {
          "mutation": "PAGE_CHANGE",
          "value": "values.page",
          "var": "page"
        },
        "icon": "style",
        "title": "Page number",
        "options": {
          "icon": "style",
          "label": "Page number"
        }
      }
    }
  }
};

x4builder.create = function (_ref) {
  var slug = _ref.slug,
      parent = _ref.parent;
  var Vue = window.Vue;
  var store = x4plugin.widgets[slug].store;
  x4builder.widgets = x4builder.widgets || {};
  x4builder.widgets[slug] = x4wp.builders.current = {
    globName: globName,
    store: store
  };
  var element = document.createElement('div');
  parent = parent || document.body;
  parent.appendChild(element);

  var App = __webpack_require__(50).default;

  var app = x4builder.widgets[slug].app = new Vue({
    store: store,
    el: element,
    render: function (h) {
      return h(App);
    },
    data: function () {
      return {
        theme: 'material',
        subtheme: 'filled'
      };
    },
    computed: {
      colors: function () {
        return store.state.builder.colors;
      }
    }
  });
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

Object.assign = function (a) {
  for (var i = 1; i < arguments.length; i++) {
    var b = arguments[i];

    for (var c in b) {
      a[c] = b[c];
    }
  }

  return a;
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOLayout/BOLayout.vue?vue&type=template&id=6b8d1937&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-bo-layout x4-clearfix"},[_vm._l((_vm.layouts),function(layout0){return _vm._l((layout0.sublayouts),function(sublayout0){return _c('div',{staticClass:"x4-layout-item x4-float-left",class:{ 'x4-active': _vm.layout === layout0.name && _vm.sublayout === sublayout0.name },on:{"click":function($event){_vm.change({ layout: layout0.name, sublayout: sublayout0.name })}}},[_c(_vm.components[layout0.name],{tag:"div",staticClass:"x4-margin-top x4-margin-semi-bottom"}),_c('div',{staticClass:"x4-title x4-margin-bottom",domProps:{"innerHTML":_vm._s(sublayout0.title)}})])})}),_c('Style',[_vm._v(".x4-bo-layout\n\n  .x4-layout-item\n    cursor: pointer\n    width: 33.33%\n\n    &:hover\n      background-color: $color(primary, .052!)\n\n    &.x4-active\n      background-color: $color(primary, .08!)\n\n    .x4-image\n      font-size: 0\n      line-height: 0\n      margin-left: 12px\n      margin-right: 12px\n      text-align: center\n\n    .x4-title\n      color: $color(primary)\n      font-size: 10px\n      height: 24px\n      line-height: 12px\n      overflow: hidden\n      text-align: center\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOLayout/BOLayout.vue?vue&type=template&id=6b8d1937&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./common/components/bui/options/BOLayout/layouts/layouts.js

/* harmony default export */ var layouts = (map["a" /* default */].components({
  'full-featured': __webpack_require__(105)
}));
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOLayout/BOLayout.vue?vue&type=script&lang=js&
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
//


/* harmony default export */ var BOLayoutvue_type_script_lang_js_ = ({
  props: ['path', 'layout', 'sublayout', 'layouts'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  }),
  computed: map["a" /* default */].variables({
    components: function () {
      return layouts;
    }
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var layout = _ref2.layout,
          sublayout = _ref2.sublayout;
      dispatch('builder/option/change', {
        path: this.path + '.layout',
        value: layout
      });
      dispatch('builder/option/change', {
        path: this.path + '.sublayout',
        value: sublayout
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOLayout/BOLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOLayout_BOLayoutvue_type_script_lang_js_ = (BOLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOLayout/BOLayout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOLayout_BOLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOLayout.vue"
/* harmony default export */ var BOLayout = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Checkboxes/Checkboxes.vue?vue&type=template&id=7823dc7c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c(_vm.themeComponent,{tag:"div",class:_vm.baseClass,attrs:{"is2":_vm.subthemeComponent,"value":_vm.mvalue,"menuOptions":_vm.menuOptions,"colors":_vm.colors,"scale":_vm.scale},on:{"change":_vm.change},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var option = ref.option;
return _c('div',{staticClass:"x4-label"},[_vm._v(_vm._s(_vm.menuHash[option]))])}}])},[_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-checkboxes\n  display: inline-block\n  position: relative\n  vertical-align: top\n\n  .x4-label\n    overflow-x: hidden\n    text-overflow: ellipsis\n    white-space: nowrap\n")])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Checkboxes/Checkboxes.vue?vue&type=template&id=7823dc7c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./common/components/ui/Checkboxes/themes/themes.js

/* harmony default export */ var themes = ({
  themes: map["a" /* default */].components({
    material: __webpack_require__(119)
  }),
  subthemes: {
    material: map["a" /* default */].components({
      default: __webpack_require__(117)
    })
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Checkboxes/Checkboxes.vue?vue&type=script&lang=js&
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
//
//
//


/* harmony default export */ var Checkboxesvue_type_script_lang_js_ = ({
  props: ['value', 'options', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2)
  }),
  data: function () {
    var mvalue = {};

    if (Array.isArray(this.value)) {
      this.value.forEach(function (value) {
        return mvalue[value] = true;
      });
    } else {
      mvalue = Object.assign({}, this.value);
    }

    return {
      mvalue: mvalue
    };
  },
  watch: {
    value: function (value) {
      var _this = this;

      if (this.mvalue !== value) {
        this.mvalue = {};

        if (Array.isArray(value)) {
          value.forEach(function (val) {
            return _this.mvalue[val] = true;
          });
        } else {
          this.mvalue = Object.assign({}, value);
        }
      }
    }
  },
  computed: map["a" /* default */].variables({
    visible: function () {
      return this.options && this.options.visible !== undefined ? this.options.visible : true;
    },
    theme: function (_ref) {
      var state = _ref.state;
      var value = !this.options || !this.options.theme ? this.$root.theme || state.theme : this.options.theme;
      return !themes.themes[value] ? 'material' : value;
    },
    subtheme: function (_ref2) {
      var state = _ref2.state;
      var value = this.options && this.options.subtheme ? this.options.subtheme : 'default';
      return !themes.subthemes[this.theme][value] ? 'default' : value;
    },
    colors: function (_ref3) {
      var state = _ref3.state;
      var colors = this.$root.colors || state.colors;
      return this.options && this.options.colors ? Object.assign({}, colors, this.options.colors) : colors;
    },
    themeComponent: function () {
      return themes.themes[this.theme];
    },
    subthemeComponent: function () {
      return themes.subthemes[this.theme][this.subtheme];
    },
    aitems: function (_ref4) {
      var getters = _ref4.getters;
      return getters['helpers/items/src']({
        src: this.options.items
      });
    },
    menuHash: function (_ref5) {
      var getters = _ref5.getters;
      return getters['helpers/items/menu/hash']({
        items: this.aitems,
        itemValue: this.options.itemValue,
        itemTitle: this.options.itemTitle
      });
    },
    menuOptions: function (_ref6) {
      var getters = _ref6.getters;
      return getters['helpers/items/menu/options']({
        items: this.aitems,
        itemValue: this.options.itemValue
      });
    },
    baseClass: function () {
      var result = {};
      result['x4-ui-checkboxes'] = true;
      result['x4-theme-' + this.theme] = true;
      result['x4-subtheme-' + this.subtheme] = true;
      return result;
    }
  }),
  methods: {
    change: function (option) {
      var _this2 = this;

      var Vue = window.Vue;
      var value = [];
      var optionValue = !this.mvalue[option];
      Vue.set(this.mvalue, option, optionValue);
      this.menuOptions.forEach(function (opt) {
        if (_this2.mvalue[opt]) {
          value.push(opt);
        }
      });
      this.$emit('change', {
        value: value,
        option: option,
        optionValue: optionValue
      });
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Checkboxes/Checkboxes.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkboxes_Checkboxesvue_type_script_lang_js_ = (Checkboxesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Checkboxes/Checkboxes.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkboxes_Checkboxesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Checkboxes.vue"
/* harmony default export */ var Checkboxes = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOColor/BOColor.vue?vue&type=template&id=5dff9030&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-bo-color"},[_c('div',{staticClass:"x4-controls x4-clearfix"},[_c('BOInput',{staticClass:"x4-hue x4-float-right",attrs:{"type":"select","value":_vm.hue,"options":_vm.options3},on:{"change":_vm.change3}}),_c('BOInput',{staticClass:"x4-opacity x4-float-right",attrs:{"type":"number","value":_vm.opacity,"options":_vm.options2},on:{"change":_vm.change2}}),_c('BOInput',{staticClass:"x4-hex",attrs:{"type":"text","value":_vm.hex,"options":_vm.options1},on:{"change":_vm.change1}})],1),_c('div',{staticClass:"x4-preview x4-margin-top",style:({ 'background-color': _vm.value }),attrs:{"title":"This is a preview"}}),_c('div',{staticClass:"x4-colors x4-margin-top x4-clearfix"},_vm._l((_vm.colors),function(color){return _c('div',{staticClass:"x4-color-item x4-float-left",class:{ 'x4-active': _vm.hex === color.hex },style:({ 'background-color': color.value }),attrs:{"title":color.title},on:{"click":function($event){_vm.change4({ value: color.value })}}})})),_c('Style',[_vm._v(".x4-bo-color\n\n  .x4-preview\n    height: 18px\n\n  .x4-hex\n    overflow: hidden\n\n  .x4-opacity\n    width: 74px\n\n  .x4-hue\n    width: 54px\n\n  .x4-colors\n    margin-left: 3px\n\n  .x4-color-item\n    cursor: pointer\n    height: 18px\n    position: relative\n    width: 18px\n\n    &:hover\n      transform: scale(1.2)\n      z-index: 2\n\n    &.x4-active\n      outline: 2px solid $color(primary)\n      z-index: 1\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOColor/BOColor.vue?vue&type=template&id=5dff9030&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./common/components/bui/options/BOColor/colors.js
/* harmony default export */ var colors = ({
  red: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#F44336',
    600: '#E53935',
    700: '#D32F2F',
    800: '#C62828',
    900: '#B71C1C',
    A100: '#FF8A80',
    A200: '#FF5252',
    A400: '#FF1744',
    A700: '#D50000'
  },
  pink: {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',
    A100: '#FF80AB',
    A200: '#FF4081',
    A400: '#F50057',
    A700: '#C51162'
  },
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
    A100: '#EA80FC',
    A200: '#E040FB',
    A400: '#D500F9',
    A700: '#AA00FF'
  },
  deep_purple: {
    50: '#EDE7F6',
    100: '#D1C4E9',
    200: '#B39DDB',
    300: '#9575CD',
    400: '#7E57C2',
    500: '#673AB7',
    600: '#5E35B1',
    700: '#512DA8',
    800: '#4527A0',
    900: '#311B92',
    A100: '#B388FF',
    A200: '#7C4DFF',
    A400: '#651FFF',
    A700: '#6200EA'
  },
  indigo: {
    50: '#E8EAF6',
    100: '#C5CAE9',
    200: '#9FA8DA',
    300: '#7986CB',
    400: '#5C6BC0',
    500: '#3F51B5',
    600: '#3949AB',
    700: '#303F9F',
    800: '#283593',
    900: '#1A237E',
    A100: '#8C9EFF',
    A200: '#536DFE',
    A400: '#3D5AFE',
    A700: '#304FFE'
  },
  blue: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
    A100: '#82B1FF',
    A200: '#448AFF',
    A400: '#2979FF',
    A700: '#2962FF'
  },
  light_blue: {
    50: '#E1F5FE',
    100: '#B3E5FC',
    200: '#81D4FA',
    300: '#4FC3F7',
    400: '#29B6F6',
    500: '#03A9F4',
    600: '#039BE5',
    700: '#0288D1',
    800: '#0277BD',
    900: '#01579B',
    A100: '#80D8FF',
    A200: '#40C4FF',
    A400: '#00B0FF',
    A700: '#0091EA'
  },
  cyan: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00BCD4',
    600: '#00ACC1',
    700: '#0097A7',
    800: '#00838F',
    900: '#006064',
    A100: '#84FFFF',
    A200: '#18FFFF',
    A400: '#00E5FF',
    A700: '#00B8D4'
  },
  teal: {
    50: '#E0F2F1',
    100: '#B2DFDB',
    200: '#80CBC4',
    300: '#4DB6AC',
    400: '#26A69A',
    500: '#009688',
    600: '#00897B',
    700: '#00796B',
    800: '#00695C',
    900: '#004D40',
    A100: '#A7FFEB',
    A200: '#64FFDA',
    A400: '#1DE9B6',
    A700: '#00BFA5'
  },
  green: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50',
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
    A100: '#B9F6CA',
    A200: '#69F0AE',
    A400: '#00E676',
    A700: '#00C853'
  },
  light_green: {
    50: '#F1F8E9',
    100: '#DCEDC8',
    200: '#C5E1A5',
    300: '#AED581',
    400: '#9CCC65',
    500: '#8BC34A',
    600: '#7CB342',
    700: '#689F38',
    800: '#558B2F',
    900: '#33691E',
    A100: '#CCFF90',
    A200: '#B2FF59',
    A400: '#76FF03',
    A700: '#64DD17'
  },
  lime: {
    50: '#F9FBE7',
    100: '#F0F4C3',
    200: '#E6EE9C',
    300: '#DCE775',
    400: '#D4E157',
    500: '#CDDC39',
    600: '#C0CA33',
    700: '#AFB42B',
    800: '#9E9D24',
    900: '#827717',
    A100: '#F4FF81',
    A200: '#EEFF41',
    A400: '#C6FF00',
    A700: '#AEEA00'
  },
  yellow: {
    50: '#FFFDE7',
    100: '#FFF9C4',
    200: '#FFF59D',
    300: '#FFF176',
    400: '#FFEE58',
    500: '#FFEB3B',
    600: '#FDD835',
    700: '#FBC02D',
    800: '#F9A825',
    900: '#F57F17',
    A100: '#FFFF8D',
    A200: '#FFFF00',
    A400: '#FFEA00',
    A700: '#FFD600'
  },
  amber: {
    50: '#FFF8E1',
    100: '#FFECB3',
    200: '#FFE082',
    300: '#FFD54F',
    400: '#FFCA28',
    500: '#FFC107',
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00',
    A100: '#FFE57F',
    A200: '#FFD740',
    A400: '#FFC400',
    A700: '#FFAB00'
  },
  orange: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
    A100: '#FFD180',
    A200: '#FFAB40',
    A400: '#FF9100',
    A700: '#FF6D00'
  },
  deep_orange: {
    50: '#FBE9E7',
    100: '#FFCCBC',
    200: '#FFAB91',
    300: '#FF8A65',
    400: '#FF7043',
    500: '#FF5722',
    600: '#F4511E',
    700: '#E64A19',
    800: '#D84315',
    900: '#BF360C',
    A100: '#FF9E80',
    A200: '#FF6E40',
    A400: '#FF3D00',
    A700: '#DD2C00'
  },
  brown: {
    50: '#EFEBE9',
    100: '#D7CCC8',
    200: '#BCAAA4',
    300: '#A1887F',
    400: '#8D6E63',
    500: '#795548',
    600: '#6D4C41',
    700: '#5D4037',
    800: '#4E342E',
    900: '#3E2723'
  },
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  },
  blue_gray: {
    50: '#ECEFF1',
    100: '#CFD8DC',
    200: '#B0BEC5',
    300: '#90A4AE',
    400: '#78909C',
    500: '#607D8B',
    600: '#546E7A',
    700: '#455A64',
    800: '#37474F',
    900: '#263238'
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOColor/BOColor.vue?vue&type=script&lang=js&
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


/* harmony default export */ var BOColorvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'decline'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    BOInput: __webpack_require__(4)
  }),
  data: function () {
    var hue = '500';
    var hex = this.$store.getters['helpers/colors/rgba2hex']({
      rgba: this.value
    }).toUpperCase();

    for (var name in colors) {
      for (var value in colors[name]) {
        if (hex === colors[name][value]) {
          hue = value;
          break;
        }
      }
    }

    return {
      hue: hue
    };
  },
  computed: map["a" /* default */].variables({
    hex: function (_ref) {
      var getters = _ref.getters;
      return getters['helpers/colors/rgba2hex']({
        rgba: this.value
      });
    },
    opacity: function (_ref2) {
      var getters = _ref2.getters;
      return parseInt(getters['helpers/colors/rgba2opacity']({
        rgba: this.value
      }) * 100);
    },
    options1: function () {
      return {
        label: 'HEX value'
      };
    },
    options2: function () {
      return {
        min: 0,
        max: 100,
        label: 'Opacity %'
      };
    },
    options3: function () {
      return {
        label: 'Hue',
        items: Object.keys(colors.red),
        itemValue: '_value',
        itemTitle: '_value'
      };
    },
    colors: function (_ref3) {
      var getters = _ref3.getters;
      var result = [];

      for (var name in colors) {
        if (colors[name][this.hue]) {
          result.push({
            hex: colors[name][this.hue].toLowerCase(),
            value: getters['helpers/colors/hex2rgba']({
              hex: colors[name][this.hue]
            }),
            title: name.split('_').map(function (item) {
              return item[0].toUpperCase() + item.slice(1);
            }).join(' ')
          });
        }
      }

      result.push({
        value: 'rgba(0,0,0,1)',
        hex: '#000',
        title: 'Black'
      });
      result.push({
        value: 'rgba(255,255,255,1)',
        hex: '#fff',
        title: 'White'
      });
      result.push({
        value: 'rgba(1,1,1,0)',
        hex: '#010101',
        title: 'Transparent'
      });
      return result;
    }
  }),
  methods: map["a" /* default */].variables({
    change1: function (_ref4, _ref5) {
      var getters = _ref4.getters,
          dispatch = _ref4.dispatch;
      var value = _ref5.value;

      if (!value.match(/^#[0-9a-f]+$/i) || value.length !== 7 && value.length !== 4) {
        return;
      }

      value = getters['helpers/colors/hex2rgba']({
        hex: value,
        opacity: this.opacity / 100
      });

      if (this.decline && this.decline({
        name: this.path.split('.').pop(),
        value: value
      })) {
        value = undefined;
      }

      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    },
    change2: function (_ref6, _ref7) {
      var getters = _ref6.getters,
          dispatch = _ref6.dispatch;
      var value = _ref7.value;
      value = getters['helpers/colors/hex2rgba']({
        hex: this.hex,
        opacity: value / 100
      });

      if (this.decline && this.decline({
        name: this.path.split('.').pop(),
        value: value
      })) {
        value = undefined;
      }

      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    },
    change3: function (context, _ref8) {
      var value = _ref8.value;
      this.hue = value;
    },
    change4: function (_ref9, _ref10) {
      var getters = _ref9.getters,
          dispatch = _ref9.dispatch;
      var value = _ref10.value;

      if (this.decline && this.decline({
        name: this.path.split('.').pop(),
        value: value
      })) {
        value = undefined;
      }

      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOColor/BOColor.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOColor_BOColorvue_type_script_lang_js_ = (BOColorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOColor/BOColor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOColor_BOColorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOColor.vue"
/* harmony default export */ var BOColor = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/CloseButton/CloseButton.vue?vue&type=template&id=b1b234ee&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-close-button"},[_c('Icon',{staticClass:"x4-transition",attrs:{"icon":"close","title":"Close"},nativeOn:{"click":function($event){return _vm.click($event)}}}),_c('Style',[_vm._v(".x4-close-button\n  font-size: 0\n  position: absolute\n  right: 16px\n  top: 16px\n\n  .x4-ui-icon\n    cursor: pointer\n    font-size: 48px\n\n    &:hover\n      transform: scale(1.2)\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/CloseButton/CloseButton.vue?vue&type=template&id=b1b234ee&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/CloseButton/CloseButton.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CloseButtonvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7)
  }),
  methods: map["a" /* default */].variables({
    click: function (_ref) {
      var dispatch = _ref.dispatch;
      dispatch('builder/instructions/hide');
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/CloseButton/CloseButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var CloseButton_CloseButtonvue_type_script_lang_js_ = (CloseButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/CloseButton/CloseButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CloseButton_CloseButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CloseButton.vue"
/* harmony default export */ var CloseButton = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/DoneButton/DoneButton.vue?vue&type=template&id=65cd5cae&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-done-button"},[_c('Button',{attrs:{"scale":1.5,"options":{ subtheme: 'outlined', icon: 'done', label: 'Done' }},on:{"click":_vm.click}}),_c('Style',[_vm._v(".x4-done-button\n  display: flex\n  justify-content: center\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/DoneButton/DoneButton.vue?vue&type=template&id=65cd5cae&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/DoneButton/DoneButton.vue?vue&type=script&lang=js&
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

/* harmony default export */ var DoneButtonvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Button: __webpack_require__(14)
  }),
  methods: map["a" /* default */].variables({
    click: function (_ref) {
      var dispatch = _ref.dispatch;
      dispatch('builder/instructions/hide');
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/DoneButton/DoneButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var DoneButton_DoneButtonvue_type_script_lang_js_ = (DoneButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/DoneButton/DoneButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  DoneButton_DoneButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "DoneButton.vue"
/* harmony default export */ var DoneButton = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/StepsJS/StepsJS.vue?vue&type=template&id=7d7cdb7d&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-steps"},[_c('Step1',{attrs:{"selector":_vm.selector}}),_c('Step2',{attrs:{"selector":_vm.selector},on:{"selChange":_vm.selChange}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/StepsJS.vue?vue&type=template&id=7d7cdb7d&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/StepsJS/StepsJS.vue?vue&type=script&lang=js&
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

/* harmony default export */ var StepsJSvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    Step1: __webpack_require__(71),
    Step2: __webpack_require__(48)
  }),
  data: function () {
    return {
      selector: this.$store.state.selector
    };
  },
  methods: map["a" /* default */].variables({
    selChange: function (context, _ref) {
      var value = _ref.value;
      this.selector = value;
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/StepsJS.vue?vue&type=script&lang=js&
 /* harmony default export */ var StepsJS_StepsJSvue_type_script_lang_js_ = (StepsJSvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/StepsJS.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  StepsJS_StepsJSvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "StepsJS.vue"
/* harmony default export */ var StepsJS = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/base/BSTheme/BSTheme.vue?vue&type=template&id=196186b4&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"fill":true,"icon":"palette","title":"Theme"}},[_c('BOActions',{attrs:{"path":['theme', 'subtheme']}}),_c('BOTheme',{attrs:{"path":"","theme":_vm.theme,"subtheme":_vm.subtheme,"themes":_vm.themes}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/base/BSTheme/BSTheme.vue?vue&type=template&id=196186b4&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/base/BSTheme/BSTheme.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSThemevue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BOActions: __webpack_require__(5),
    BOTheme: __webpack_require__(11)
  }),
  computed: map["a" /* default */].variables({
    theme: function (_ref) {
      var state = _ref.state;
      return state.theme;
    },
    subtheme: function (_ref2) {
      var state = _ref2.state;
      return state.subtheme;
    },
    themes: function (_ref3) {
      var state = _ref3.state,
          getters = _ref3.getters;
      var themes = x4builder.schema[state.type].themes;
      var allowedThemes = themes.map(function (theme) {
        return theme.name;
      });
      var allowedSubthemes = {};
      themes.forEach(function (theme) {
        allowedSubthemes[theme.name] = theme.subthemes.map(function (subtheme) {
          return subtheme.name;
        });
      });
      return getters['builder/presets/themes']({
        changeName: true,
        allowedThemes: allowedThemes,
        allowedSubthemes: allowedSubthemes
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/base/BSTheme/BSTheme.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSTheme_BSThemevue_type_script_lang_js_ = (BSThemevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/base/BSTheme/BSTheme.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSTheme_BSThemevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSTheme.vue"
/* harmony default export */ var BSTheme = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/StepsJS/Step2/Step2.vue?vue&type=template&id=16c5c558&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-step"},[_c('div',{staticClass:"x4-title x4-margin-bottom"},[_vm._v("Step #2: Insert widget")]),_vm._m(0),_c('code',{staticClass:"x4-code x4-margin-bottom"},[_c('CopyButton'),_c('span',{ref:"code",staticClass:"x4-inside"},[_vm._v("<"),_c('span',{staticClass:"x4-red"},[_vm._v("div")]),_vm._v(" "),_c('span',{staticClass:"x4-green"},[_vm._v(_vm._s(_vm.selType))]),_vm._v("="),_c('span',{staticClass:"x4-yellow"},[_vm._v("\""+_vm._s(_vm.selValue)+"\"")]),_vm._v("></"),_c('span',{staticClass:"x4-red"},[_vm._v("div")]),_vm._v("><"),_c('span',{staticClass:"x4-red"},[_vm._v("script")]),_vm._v(">window.X4CryptoTables=window.X4CryptoTables||[];window.X4CryptoTables.push("+_vm._s(_vm.initCode)+");</"),_c('span',{staticClass:"x4-red"},[_vm._v("script")]),_vm._v(">")])],1),_c('ShowOptions',[_c('Input',{attrs:{"value":_vm.selector,"options":{ icon: 'public', label: 'CSS selector of the widget' }},on:{"change":_vm.selChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-text x4-margin-bottom"},[_vm._v("Put the following code snippet inside the "),_c('code',[_vm._v("<"),_c('span',{staticClass:"x4-red"},[_vm._v("body")]),_vm._v(">")]),_vm._v(" tag somewhere you want to insert the widget on your html page:")])}]


// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/Step2/Step2.vue?vue&type=template&id=16c5c558&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/StepsJS/Step2/Step2.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Step2vue_type_script_lang_js_ = ({
  props: ['selector'],
  components: map["a" /* default */].components({
    Input: __webpack_require__(21),
    RadioButtons: __webpack_require__(30),
    CopyButton: __webpack_require__(33),
    ShowOptions: __webpack_require__(32)
  }),
  computed: map["a" /* default */].variables({
    initCode: function (_ref) {
      var state = _ref.state;
      var init = Object.assign({}, state.builder.instructions.init, {
        selector: this.selector
      });
      return JSON.stringify(init);
    },
    selType: function () {
      var result = '';

      if (this.selector.substr(0, 1) === '#') {
        result = 'id';
      }

      if (this.selector.substr(0, 1) === '.') {
        result = 'class';
      }

      return result;
    },
    selValue: function () {
      return this.selector.replace(/^#|\./, '');
    }
  }),
  methods: map["a" /* default */].variables({
    selChange: function (context, _ref2) {
      var value = _ref2.value;
      this.$emit('selChange', {
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/Step2/Step2.vue?vue&type=script&lang=js&
 /* harmony default export */ var Step2_Step2vue_type_script_lang_js_ = (Step2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/Step2/Step2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Step2_Step2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Step2.vue"
/* harmony default export */ var Step2 = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/coinTab/components/builder/CoinTab.vue?vue&type=template&id=2cf34ba8&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSInput',{attrs:{"value":_vm.value,"schema":_vm.schema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/values/crypto/coinTab/components/builder/CoinTab.vue?vue&type=template&id=2cf34ba8&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/coinTab/components/builder/CoinTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CoinTabvue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BSInput: __webpack_require__(12)
  })
});
// CONCATENATED MODULE: ./common/src/assets/values/crypto/coinTab/components/builder/CoinTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_CoinTabvue_type_script_lang_js_ = (CoinTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/values/crypto/coinTab/components/builder/CoinTab.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_CoinTabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CoinTab.vue"
/* harmony default export */ var CoinTab = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/AppBuilder.vue?vue&type=template&id=f2323cf8&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{class:_vm.baseClass},[_c('Customizer'),_c('Instructions'),_c('Style',[_vm._v(".x4-app\n  box-sizing: border-box\n  color: $color(primary)\n  display: flex\n  flex-direction: column\n  position: relative\n  text-align: left\n  text-rendering: optimizeLegibility\n  user-select: none\n  -moz-osx-font-smoothing: grayscale\n  -webkit-font-smoothing: antialiased\n\n  *\n    box-sizing: border-box\n    -webkit-tap-highlight-color: transparent\n\n  a\n    color: $color(primary)\n\n  img\n    margin: 0\n\n  input, textarea\n    color: $color(primary)\n\n  .x4-transition\n    transition: .3s cubic-bezier(.4,0,.2,1)\n\n  .x4-clearfix:after\n    clear: both\n    content: ''\n    display: table\n.x4-builder\n  font-family: 'Roboto',sans-serif\n  font-size: $scale(14px)\n  font-weight: 400\n  line-height: 1.5\n  position: relative\n  z-index: 1000000\n\n  .x4-clearfix:after\n    clear: both\n    content: ''\n    display: table\n\n  .x4-float-left\n    float: left\n\n  .x4-float-right\n    float: right\n\n  .x4-clear-both\n    clear: both\n\n  .x4-margin-top\n    margin-top: 8px\n\n  .x4-margin-semi-top\n    margin-top: 4px\n\n  .x4-margin-bottom\n    margin-bottom: 8px\n\n  .x4-margin-semi-bottom\n    margin-bottom: 4px\n\n  .x4-margin-both\n    margin-top: 8px\n    margin-bottom: 8px\n\n  .x4-margin-semi-both\n    margin-top: 4px\n    margin-bottom: 4px\n\n  .x4-margin-none\n    margin-top: 0\n\n  .x4-scrollable\n    overflow-y: auto\n\n    &::-webkit-scrollbar\n      height: 4px\n      width: 4px\n\n    &::-webkit-scrollbar-button\n      display: none\n      height: 0\n      width: 0\n\n    &::-webkit-scrollbar-corner\n      background-color: transparent\n\n    &::-webkit-scrollbar-thumb\n      background-clip: padding-box\n      background-color: $color(primary, .16)\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/AppBuilder.vue?vue&type=template&id=f2323cf8&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/AppBuilder.vue?vue&type=script&lang=js&
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

/* harmony default export */ var AppBuildervue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Customizer: __webpack_require__(87),
    Instructions: __webpack_require__(80)
  }),
  computed: map["a" /* default */].variables({
    baseClass: function (_ref) {
      var state = _ref.state;
      return {
        'x4-app': true,
        'x4-builder': true
      };
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/AppBuilder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppBuildervue_type_script_lang_js_ = (AppBuildervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/AppBuilder.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppBuildervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "AppBuilder.vue"
/* harmony default export */ var AppBuilder = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/search/components/builder/Search.vue?vue&type=template&id=c6cff748&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSInput',{attrs:{"value":_vm.value,"schema":_vm.schema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/values/crypto/search/components/builder/Search.vue?vue&type=template&id=c6cff748&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/search/components/builder/Search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Searchvue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BSInput: __webpack_require__(12)
  })
});
// CONCATENATED MODULE: ./common/src/assets/values/crypto/search/components/builder/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/values/crypto/search/components/builder/Search.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Search.vue"
/* harmony default export */ var Search = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/perPage/components/builder/PerPage.vue?vue&type=template&id=09e030a8&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSInput',{attrs:{"value":_vm.value,"schema":_vm.schema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/values/crypto/perPage/components/builder/PerPage.vue?vue&type=template&id=09e030a8&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/perPage/components/builder/PerPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PerPagevue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BSInput: __webpack_require__(12)
  })
});
// CONCATENATED MODULE: ./common/src/assets/values/crypto/perPage/components/builder/PerPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_PerPagevue_type_script_lang_js_ = (PerPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/values/crypto/perPage/components/builder/PerPage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_PerPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "PerPage.vue"
/* harmony default export */ var PerPage = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/fiat/components/builder/Fiat.vue?vue&type=template&id=197c8540&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSInput',{attrs:{"value":_vm.value,"schema":_vm.schema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/values/crypto/fiat/components/builder/Fiat.vue?vue&type=template&id=197c8540&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/fiat/components/builder/Fiat.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Fiatvue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BSInput: __webpack_require__(12)
  })
});
// CONCATENATED MODULE: ./common/src/assets/values/crypto/fiat/components/builder/Fiat.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_Fiatvue_type_script_lang_js_ = (Fiatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/values/crypto/fiat/components/builder/Fiat.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_Fiatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Fiat.vue"
/* harmony default export */ var Fiat = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/sort/components/builder/Sort.vue?vue&type=template&id=327c11ca&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSSort',{attrs:{"value":_vm.value,"schema":_vm.schema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/values/crypto/sort/components/builder/Sort.vue?vue&type=template&id=327c11ca&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/sort/components/builder/Sort.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Sortvue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BSSort: __webpack_require__(88)
  })
});
// CONCATENATED MODULE: ./common/src/assets/values/crypto/sort/components/builder/Sort.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_Sortvue_type_script_lang_js_ = (Sortvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/values/crypto/sort/components/builder/Sort.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_Sortvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Sort.vue"
/* harmony default export */ var Sort = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Values/Value.vue?vue&type=template&id=13f2bf6c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"div",attrs:{"value":_vm.value,"schema":_vm.schema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Values/Value.vue?vue&type=template&id=13f2bf6c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Values/Value.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var x4plugin = window['X4CryptoTables'];
var x4builder = x4wp.builders['X4CryptoTables'];
/* harmony default export */ var Valuevue_type_script_lang_js_ = ({
  props: ['name', 'component'],
  computed: map["a" /* default */].variables({
    schema: function (_ref) {
      var state = _ref.state;
      return x4builder.schema[state.type].values[this.name];
    },
    value: function (_ref2) {
      var state = _ref2.state,
          getters = _ref2.getters;
      var path = this.schema.path instanceof Object ? this.schema.path.value : this.schema.path;

      if (x4plugin.multiValues[state.type][this.name]) {
        path = path.replace(/values\./, 'defaults.');
      }

      return getters['helpers/items/src']({
        src: 'state.' + path
      });
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Values/Value.vue?vue&type=script&lang=js&
 /* harmony default export */ var Values_Valuevue_type_script_lang_js_ = (Valuevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Values/Value.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Values_Valuevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Value.vue"
/* harmony default export */ var Value = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/page/components/builder/Page.vue?vue&type=template&id=26a80fce&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSInput',{attrs:{"value":_vm.value,"schema":_vm.schema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/values/crypto/page/components/builder/Page.vue?vue&type=template&id=26a80fce&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/page/components/builder/Page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Pagevue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BSInput: __webpack_require__(12)
  })
});
// CONCATENATED MODULE: ./common/src/assets/values/crypto/page/components/builder/Page.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_Pagevue_type_script_lang_js_ = (Pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/values/crypto/page/components/builder/Page.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_Pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Page.vue"
/* harmony default export */ var Page = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/ResetInitial/ResetInitial.vue?vue&type=template&id=5d8d1ed3&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Icon',{staticClass:"x4-transition",attrs:{"icon":"cancel","title":"Cancel changes"},nativeOn:{"click":function($event){return _vm.click($event)}}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/ResetInitial/ResetInitial.vue?vue&type=template&id=5d8d1ed3&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/ResetInitial/ResetInitial.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ResetInitialvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    Icon: __webpack_require__(7)
  }),
  methods: map["a" /* default */].variables({
    click: function (_ref) {
      var dispatch = _ref.dispatch;
      dispatch('builder/reset/initial');
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/ResetInitial/ResetInitial.vue?vue&type=script&lang=js&
 /* harmony default export */ var ResetInitial_ResetInitialvue_type_script_lang_js_ = (ResetInitialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/ResetInitial/ResetInitial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ResetInitial_ResetInitialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ResetInitial.vue"
/* harmony default export */ var ResetInitial = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/ResetDefault/ResetDefault.vue?vue&type=template&id=fbdffc78&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Icon',{staticClass:"x4-transition",attrs:{"icon":"refresh","title":"Reset to default value"},nativeOn:{"click":function($event){return _vm.click($event)}}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/ResetDefault/ResetDefault.vue?vue&type=template&id=fbdffc78&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/ResetDefault/ResetDefault.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ResetDefaultvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    Icon: __webpack_require__(7)
  }),
  methods: map["a" /* default */].variables({
    click: function (_ref) {
      var dispatch = _ref.dispatch;
      dispatch('builder/reset/default');
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/ResetDefault/ResetDefault.vue?vue&type=script&lang=js&
 /* harmony default export */ var ResetDefault_ResetDefaultvue_type_script_lang_js_ = (ResetDefaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/ResetDefault/ResetDefault.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ResetDefault_ResetDefaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ResetDefault.vue"
/* harmony default export */ var ResetDefault = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/InvertButton/InvertButton.vue?vue&type=template&id=34f4a608&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Icon',{staticClass:"x4-transition",attrs:{"icon":"invert_colors","title":"Invert colors"},nativeOn:{"click":function($event){return _vm.click($event)}}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/InvertButton/InvertButton.vue?vue&type=template&id=34f4a608&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/InvertButton/InvertButton.vue?vue&type=script&lang=js&
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

/* harmony default export */ var InvertButtonvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    Icon: __webpack_require__(7)
  }),
  methods: map["a" /* default */].variables({
    click: function (_ref) {
      var dispatch = _ref.dispatch;
      dispatch('builder/colors/invert');
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/InvertButton/InvertButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var InvertButton_InvertButtonvue_type_script_lang_js_ = (InvertButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/InvertButton/InvertButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  InvertButton_InvertButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "InvertButton.vue"
/* harmony default export */ var InvertButton = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/RightButton/RightButton.vue?vue&type=template&id=7da5bd58&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Icon',{staticClass:"x4-transition",attrs:{"icon":_vm.icon,"title":_vm.title},nativeOn:{"click":function($event){return _vm.click($event)}}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/RightButton/RightButton.vue?vue&type=template&id=7da5bd58&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/RightButton/RightButton.vue?vue&type=script&lang=js&
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

/* harmony default export */ var RightButtonvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    Icon: __webpack_require__(7)
  }),
  computed: map["a" /* default */].variables({
    icon: function (_ref) {
      var state = _ref.state;
      return state.builder.position === 'left' ? 'last_page' : 'first_page';
    },
    title: function (_ref2) {
      var state = _ref2.state;
      return state.builder.position === 'left' ? 'Move right' : 'Move left';
    }
  }),
  methods: map["a" /* default */].variables({
    click: function (_ref3) {
      var dispatch = _ref3.dispatch;
      dispatch('builder/position/change');
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/RightButton/RightButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var RightButton_RightButtonvue_type_script_lang_js_ = (RightButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/RightButton/RightButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  RightButton_RightButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "RightButton.vue"
/* harmony default export */ var RightButton = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/base/loader/components/builder/Loader.vue?vue&type=template&id=58564a7e&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSLoader',{attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/base/loader/components/builder/Loader.vue?vue&type=template&id=58564a7e&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/base/loader/components/builder/Loader.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Loadervue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BSLoader: __webpack_require__(78)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/base/loader/components/builder/Loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/base/loader/components/builder/Loader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_Loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Loader.vue"
/* harmony default export */ var Loader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/pagerBlock/components/builder/PagerBlock.vue?vue&type=template&id=355224ba&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSPager',{attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/pagerBlock/components/builder/PagerBlock.vue?vue&type=template&id=355224ba&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/pagerBlock/components/builder/PagerBlock.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PagerBlockvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BSPager: __webpack_require__(91)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/pagerBlock/components/builder/PagerBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_PagerBlockvue_type_script_lang_js_ = (PagerBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/pagerBlock/components/builder/PagerBlock.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_PagerBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "PagerBlock.vue"
/* harmony default export */ var PagerBlock = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/periodSelect/components/builder/PeriodSelect.vue?vue&type=template&id=0d8b75ca&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSRadios',{attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/periodSelect/components/builder/PeriodSelect.vue?vue&type=template&id=0d8b75ca&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/periodSelect/components/builder/PeriodSelect.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PeriodSelectvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BSRadios: __webpack_require__(89)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/periodSelect/components/builder/PeriodSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_PeriodSelectvue_type_script_lang_js_ = (PeriodSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/periodSelect/components/builder/PeriodSelect.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_PeriodSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "PeriodSelect.vue"
/* harmony default export */ var PeriodSelect = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/base/BSLayout/BSLayout.vue?vue&type=template&id=677921d3&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{staticClass:"x4-bs-layout",attrs:{"fill":true,"icon":"view_compact","title":"Layout"}},[_c('BOActions',{attrs:{"path":['layout', 'sublayout', 'margins']}}),_c('BOLayout',{attrs:{"path":"","layout":_vm.layout,"sublayout":_vm.sublayout,"layouts":_vm.layouts}}),_c('div',[_vm._v(" ")]),_c('BOCheckbox',{staticClass:"x4-margin-bottom",attrs:{"path":"margins.fixed","value":_vm.margins.fixed,"options":{ title: 'Set fixed width' }}}),(_vm.margins.fixed)?_c('div',{staticClass:"x4-margin-bottom"},[_c('BOInput',{attrs:{"type":"number","value":_vm.margins.width,"options":{ icon: 'swap_horiz', label: 'Max width', min: 0, step: 4 },"path":"margins.width"}})],1):_vm._e(),_c('div',{staticClass:"x4-margin-bottom x4-clearfix"},[_c('BOInput',{staticClass:"x4-input-margin x4-float-left",attrs:{"type":"number","value":_vm.margins.left,"options":{ icon: 'first_page', label: 'Left margin', step: 4 },"path":"margins.left"}}),_c('BOInput',{staticClass:"x4-input-margin x4-float-right",attrs:{"type":"number","value":_vm.margins.right,"options":{ icon: 'last_page', label: 'Right margin', step: 4 },"path":"margins.right"}})],1),_c('div',{staticClass:"x4-clearfix"},[_c('BOInput',{staticClass:"x4-input-margin x4-float-left",attrs:{"type":"number","value":_vm.margins.top,"options":{ icon: 'vertical_align_top', label: 'Top margin', step: 4 },"path":"margins.top"}}),_c('BOInput',{staticClass:"x4-input-margin x4-float-right",attrs:{"type":"number","value":_vm.margins.bottom,"options":{ icon: 'vertical_align_bottom', label: 'Bottom margin', step: 4 },"path":"margins.bottom"}})],1),_c('Style',[_vm._v(".x4-bs-layout\n\n  .x4-input-margin\n    width: 48%\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/base/BSLayout/BSLayout.vue?vue&type=template&id=677921d3&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/base/BSLayout/BSLayout.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSLayoutvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    Style: __webpack_require__(2),
    BBSection: __webpack_require__(6),
    BOActions: __webpack_require__(5),
    BOLayout: __webpack_require__(41),
    BOCheckbox: __webpack_require__(34),
    BOInput: __webpack_require__(4)
  }),
  computed: map["a" /* default */].variables({
    layout: function (_ref) {
      var state = _ref.state;
      return state.layout;
    },
    sublayout: function (_ref2) {
      var state = _ref2.state;
      return state.sublayout;
    },
    layouts: function (_ref3) {
      var state = _ref3.state;
      return x4builder.schema[state.type].layouts;
    },
    margins: function (_ref4) {
      var state = _ref4.state;
      return state.margins;
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/base/BSLayout/BSLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSLayout_BSLayoutvue_type_script_lang_js_ = (BSLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/base/BSLayout/BSLayout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSLayout_BSLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSLayout.vue"
/* harmony default export */ var BSLayout = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/lineChart/components/builder/LineChart.vue?vue&type=template&id=3b647c46&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BBOption',{attrs:{"title":"Base options"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.height', _vm.path + '.line']}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.line.colorize,"options":{ label: 'Colorize chart' },"path":_vm.path + '.line.colorize'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.line.fill,"options":{ label: 'Fill background' },"path":_vm.path + '.line.fill'}}),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"number","value":_vm.values.height,"options":_vm.schema.heightOptions,"path":_vm.path + '.height'}}),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"number","value":_vm.values.line.thickness,"options":_vm.schema.thicknessOptions,"path":_vm.path + '.line.thickness'}}),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"number","value":_vm.values.line.smoothness,"options":_vm.schema.smoothnessOptions,"path":_vm.path + '.line.smoothness'}})],1),_c('BBOption',{attrs:{"title":"Price format"}},[_c('BOActions',{attrs:{"path":_vm.path + '.format'}}),_c('BOTemplate',{attrs:{"value":_vm.values.format.template,"options":_vm.schema.formatOptions,"path":_vm.path + '.format.template'}}),_c('BONumberPrecision',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.precision',"value":_vm.values.format.precision}}),_c('BONumberSeparator',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.separator',"value":_vm.values.format.separator}}),_c('BONumberFactor',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.factor',"value":_vm.values.format.factor}})],1),_c('BBOption',{attrs:{"title":"Legend"}},[_c('BOActions',{attrs:{"path":_vm.path + '.legend'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.legend.visible,"options":{ label: 'Show legend' },"path":_vm.path + '.legend.visible'}}),_c('BOTemplate',{staticClass:"x4-margin-top",attrs:{"value":_vm.values.legend.template,"options":_vm.schema.legendOptions,"path":_vm.path + '.legend.template'}})],1),_c('BBOption',{attrs:{"title":"Scales"}},[_c('BOActions',{attrs:{"path":_vm.path + '.scales'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.scales.visible,"options":{ label: 'Show scales' },"path":_vm.path + '.scales.visible'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.scales.horizontal,"options":{ label: 'Show horizontal' },"path":_vm.path + '.scales.horizontal'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.scales.vertical,"options":{ label: 'Show vertical' },"path":_vm.path + '.scales.vertical'}})],1),_c('BBOption',{attrs:{"title":"Tooltip"}},[_c('BOActions',{attrs:{"path":_vm.path + '.tooltip'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.tooltip.visible,"options":{ label: 'Show tooltip' },"path":_vm.path + '.tooltip.visible'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.tooltip.date,"options":{ label: 'Show date & time' },"path":_vm.path + '.tooltip.date'}})],1),_c('BBOption',{attrs:{"title":"Crosshair"}},[_c('BOActions',{attrs:{"path":_vm.path + '.crosshair'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.crosshair.visible,"options":{ label: 'Show crosshair' },"path":_vm.path + '.crosshair.visible'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.crosshair.horizontal,"options":{ label: 'Show horizontal' },"path":_vm.path + '.crosshair.horizontal'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.crosshair.vertical,"options":{ label: 'Show vertical' },"path":_vm.path + '.crosshair.vertical'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.crosshair.dotted,"options":{ label: 'Dotted line' },"path":_vm.path + '.crosshair.dotted'}})],1),_c('BBOption',{attrs:{"title":"Watermark"}},[_c('BOActions',{attrs:{"path":_vm.path + '.watermark'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.watermark.visible,"options":{ label: 'Show watermark' },"path":_vm.path + '.watermark.visible'}}),_c('BOTemplate',{staticClass:"x4-margin-top",attrs:{"value":_vm.values.watermark.template,"options":_vm.schema.watermarkOptions,"path":_vm.path + '.watermark.template'}})],1),_c('BBOption',{attrs:{"title":"Loader"}},[_c('BOActions',{attrs:{"path":_vm.path + '.loader'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.loader.visible,"options":{ label: 'Show loader' },"path":_vm.path + '.loader.visible'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.loader.colorize,"options":{ label: 'Colorize loader' },"path":_vm.path + '.loader.colorize'}})],1),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/lineChart/components/builder/LineChart.vue?vue&type=template&id=3b647c46&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/lineChart/components/builder/LineChart.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//

/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4),
    BOSwitchbox: __webpack_require__(10),
    BOTemplate: __webpack_require__(15),
    BONumberPrecision: __webpack_require__(26),
    BONumberSeparator: __webpack_require__(25),
    BONumberFactor: __webpack_require__(24),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    colorsValue: function (_ref) {
      var state = _ref.state;
      return Object.assign({}, state.colors, this.values.colors);
    },
    colorPresets: function (_ref2) {
      var getters = _ref2.getters;
      return getters['builder/presets/colors']({
        allowedColors: this.schema.colorsOptions.presets
      });
    },
    declineColor: function (_ref3) {
      var state = _ref3.state;
      return function (_ref4) {
        var name = _ref4.name,
            value = _ref4.value;
        return value === state.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/lineChart/components/builder/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/lineChart/components/builder/LineChart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "LineChart.vue"
/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinColumn/components/builder/CoinColumn.vue?vue&type=template&id=72ee3f06&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BBOption',{attrs:{"title":"Rows order"}},[_c('BOActions',{attrs:{"path":_vm.path + '.rowsOrder'}}),_c('BOInputList',{attrs:{"type":"select","addremove":false,"value":_vm.values.rowsOrder,"options":_vm.rowsOrderOptions,"path":_vm.path + '.rowsOrder'}})],1),_vm._l((_vm.values.rowsOrder),function(name){return [(['rank', 'name', 'mktcap', 'price', 'vwap', 'supply', 'volume', 'change24h'].indexOf(name) !== -1)?_c('Format',{attrs:{"path":_vm.path + '.rows.' + name,"values":_vm.values.rows[name],"defaults":_vm.defaults.rows[name],"schema":_vm.schema.rows[name]}}):(['trade', 'links'].indexOf(name) !== -1)?_vm._l((_vm.values.rows[name].items),function(name2){return [_c('Button',{attrs:{"path":_vm.path + '.rows.' + name + '.' + name2,"values":_vm.values.rows[name][name2],"values0":_vm.values,"defaults":_vm.defaults.rows[name][name2],"schema":_vm.schema.rows[name][name2]}})]}):(['more'].indexOf(name) !== -1)?_c('Button',{attrs:{"path":_vm.path + '.rows.' + name,"values":_vm.values.rows[name],"values0":_vm.values,"defaults":_vm.defaults.rows[name],"schema":_vm.schema.rows[name]}}):_vm._e()]}),_c('BBOption',{attrs:{"title":"Theme"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.theme', _vm.path + '.subtheme']}}),_c('BOTheme',{attrs:{"path":_vm.path,"theme":_vm.themeValue,"subtheme":_vm.subthemeValue,"themes":_vm.themePresets,"decline":_vm.declineTheme}})],1),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/CoinColumn.vue?vue&type=template&id=72ee3f06&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinColumn/components/builder/CoinColumn.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CoinColumnvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInputList: __webpack_require__(13),
    BSButtn: __webpack_require__(18),
    BOTheme: __webpack_require__(11),
    BOColors: __webpack_require__(9),
    Format: __webpack_require__(81),
    Button: __webpack_require__(82)
  }),
  computed: map["a" /* default */].variables({
    themeValue: function (_ref) {
      var state = _ref.state;
      return this.values.theme || state.theme;
    },
    subthemeValue: function (_ref2) {
      var state = _ref2.state;
      return this.values.subtheme || state.subtheme;
    },
    colorsValue: function (_ref3) {
      var state = _ref3.state;
      return Object.assign({}, state.colors, this.values.colors);
    },
    rowsOrderOptions: function () {
      var _this = this;

      return Object.assign({}, this.schema.rows.orderOptions, {
        items: this.values.rowsOrder.filter(function (name) {
          return _this.values.rows[name].items ? _this.values.rows[name].items.reduce(function (res, name2) {
            return res || _this.values.rows[name][name2].visible;
          }, false) : _this.values.rows[name].visible;
        }).map(function (name) {
          return {
            value: name,
            title: _this.schema.rows[name].title
          };
        })
      });
    },
    themePresets: function (_ref4) {
      var getters = _ref4.getters;
      return getters['builder/presets/themes']({
        changeName: this.schema.name,
        allowedThemes: ['material'],
        allowedSubthemes: {
          material: ['filled', 'outlined', 'standard']
        }
      });
    },
    colorPresets: function (_ref5) {
      var getters = _ref5.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary', 'inverted', 'accent', 'badgeGreenText', 'badgeGreenBack', 'badgeRedText', 'badgeRedBack']
      });
    },
    declineTheme: function (_ref6) {
      var state = _ref6.state;
      return function (_ref7) {
        var theme = _ref7.theme,
            subtheme = _ref7.subtheme;
        return theme === state.theme && subtheme === state.subtheme;
      };
    },
    declineColor: function (_ref8) {
      var state = _ref8.state;
      return function (_ref9) {
        var name = _ref9.name,
            value = _ref9.value;
        return value === state.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/CoinColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_CoinColumnvue_type_script_lang_js_ = (CoinColumnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/CoinColumn.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_CoinColumnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CoinColumn.vue"
/* harmony default export */ var CoinColumn = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTabs/components/builder/CoinTabs.vue?vue&type=template&id=ad673cd8&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSTabs',{attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTabs/components/builder/CoinTabs.vue?vue&type=template&id=ad673cd8&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTabs/components/builder/CoinTabs.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CoinTabsvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BSTabs: __webpack_require__(86)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTabs/components/builder/CoinTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_CoinTabsvue_type_script_lang_js_ = (CoinTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTabs/components/builder/CoinTabs.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_CoinTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CoinTabs.vue"
/* harmony default export */ var CoinTabs = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/searchInput/components/builder/SearchInput.vue?vue&type=template&id=60d62b89&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSText',{attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/searchInput/components/builder/SearchInput.vue?vue&type=template&id=60d62b89&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/searchInput/components/builder/SearchInput.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SearchInputvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BSText: __webpack_require__(79)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/searchInput/components/builder/SearchInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_SearchInputvue_type_script_lang_js_ = (SearchInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/searchInput/components/builder/SearchInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_SearchInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "SearchInput.vue"
/* harmony default export */ var SearchInput = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/perPageSelect/components/builder/PerPageSelect.vue?vue&type=template&id=7b013490&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSSelect',{attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/perPageSelect/components/builder/PerPageSelect.vue?vue&type=template&id=7b013490&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/perPageSelect/components/builder/PerPageSelect.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PerPageSelectvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BSSelect: __webpack_require__(31)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/perPageSelect/components/builder/PerPageSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_PerPageSelectvue_type_script_lang_js_ = (PerPageSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/perPageSelect/components/builder/PerPageSelect.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_PerPageSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "PerPageSelect.vue"
/* harmony default export */ var PerPageSelect = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/fiatSelect/components/builder/FiatSelect.vue?vue&type=template&id=aad40950&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSSelect',{attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/fiatSelect/components/builder/FiatSelect.vue?vue&type=template&id=aad40950&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/fiatSelect/components/builder/FiatSelect.vue?vue&type=script&lang=js&
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

/* harmony default export */ var FiatSelectvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BSSelect: __webpack_require__(31)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/fiatSelect/components/builder/FiatSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_FiatSelectvue_type_script_lang_js_ = (FiatSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/fiatSelect/components/builder/FiatSelect.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_FiatSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "FiatSelect.vue"
/* harmony default export */ var FiatSelect = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/StepsJS/Step1/Step1.vue?vue&type=template&id=4397c5ee&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-step"},[_c('div',{staticClass:"x4-title x4-margin-bottom"},[_vm._v("Step #1: Load plugin")]),_vm._m(0),_c('div',{staticClass:"x4-hint x4-margin-bottom"},[_vm._v("(preferably before other styles and scripts, because it loads asynchronously)")]),_c('code',{staticClass:"x4-code x4-margin-bottom"},[_c('CopyButton'),_c('span',{ref:"code",staticClass:"x4-inside"},[_vm._v("<"),_c('span',{staticClass:"x4-red"},[_vm._v("script")]),_vm._v(" "),_c('span',{staticClass:"x4-green"},[_vm._v("src")]),_vm._v("="),_c('span',{staticClass:"x4-yellow"},[_vm._v("\""+_vm._s(_vm.url)+"\"")]),_vm._v(" "),_c('span',{staticClass:"x4-green"},[_vm._v("data-entry")]),_vm._v("="),_c('span',{staticClass:"x4-yellow"},[_vm._v("\"x4-crypto-tables\"")]),(_vm.builder.enabled)?[_vm._v(" "),_c('span',{staticClass:"x4-green"},[_vm._v("data-vc-enabled")])]:_vm._e(),(_vm.builder.enabled && _vm.builder.right)?[_vm._v(" "),_c('span',{staticClass:"x4-green"},[_vm._v("data-vc-right")])]:_vm._e(),(_vm.builder.enabled && _vm.builder.invert)?[_vm._v(" "),_c('span',{staticClass:"x4-green"},[_vm._v("data-vc-invert")])]:_vm._e(),_vm._v(" "),_c('span',{staticClass:"x4-green"},[_vm._v("async")]),_vm._v("></"),_c('span',{staticClass:"x4-red"},[_vm._v("script")]),_vm._v(">")],2)],1),_c('ShowOptions',[_c('Input',{staticClass:"x4-margin-bottom",attrs:{"value":_vm.url,"options":{ icon: 'public', label: 'Absolute or relative URL of the "x4-crypto-tables.js" file' }},on:{"change":_vm.urlChange}}),_c('Checkbox',{attrs:{"value":_vm.builder.enabled,"options":{ title: 'enable the Visual Customizer on the page' }},on:{"change":_vm.builderEnabledChange}}),_c('Checkbox',{attrs:{"value":_vm.builder.right,"options":{ title: 'move the Visual Customizer to the right' }},on:{"change":_vm.builderRightChange}}),_c('Checkbox',{attrs:{"value":_vm.builder.invert,"options":{ title: 'invert the Visual Customizer colors' }},on:{"change":_vm.builderInvertChange}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-text"},[_vm._v("Put the following line of code inside the "),_c('code',[_vm._v("<"),_c('span',{staticClass:"x4-red"},[_vm._v("head")]),_vm._v(">")]),_vm._v(" tag of your html page:")])}]


// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/Step1/Step1.vue?vue&type=template&id=4397c5ee&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/StepsJS/Step1/Step1.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Step1vue_type_script_lang_js_ = ({
  props: ['selector'],
  components: map["a" /* default */].components({
    Input: __webpack_require__(21),
    Checkbox: __webpack_require__(35),
    CopyButton: __webpack_require__(33),
    ShowOptions: __webpack_require__(32)
  }),
  data: function () {
    var script = document.querySelector('script[data-entry="x4-crypto-tables"]');
    return {
      builder: {
        enabled: true,
        right: false,
        invert: false
      },
      url: script.getAttribute('src')
    };
  },
  methods: map["a" /* default */].variables({
    urlChange: function (context, _ref) {
      var value = _ref.value;
      this.url = value;
    },
    builderEnabledChange: function (context, _ref2) {
      var value = _ref2.value;
      this.builder.enabled = value;

      if (!value) {
        for (var key in this.builder) {
          this.builder[key] = false;
        }
      }
    },
    builderRightChange: function (context, _ref3) {
      var value = _ref3.value;
      this.builder.right = value;

      if (value && !this.builder.enabled) {
        this.builder.enabled = true;
      }
    },
    builderInvertChange: function (context, _ref4) {
      var value = _ref4.value;
      this.builder.invert = value;

      if (value && !this.builder.enabled) {
        this.builder.enabled = true;
      }
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/Step1/Step1.vue?vue&type=script&lang=js&
 /* harmony default export */ var Step1_Step1vue_type_script_lang_js_ = (Step1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/StepsJS/Step1/Step1.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Step1_Step1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Step1.vue"
/* harmony default export */ var Step1 = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/CoinTable.vue?vue&type=template&id=239d4792&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('MainSection',{attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema.main,"schema0":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}}),_c('ColumnsSection',{attrs:{"path":_vm.path + '.columns',"path0":_vm.path,"values":_vm.values.columns,"values0":_vm.values,"defaults":_vm.defaults.columns,"defaults0":_vm.defaults,"schema":_vm.schema.columns,"schema0":_vm.schema}}),_c('ActionsSection',{attrs:{"path":_vm.path + '.actions',"path0":_vm.path,"values":_vm.values.actions,"values0":_vm.values,"defaults":_vm.defaults.actions,"defaults0":_vm.defaults,"schema":_vm.schema.actions}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/CoinTable.vue?vue&type=template&id=239d4792&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/CoinTable.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4plugin = window[globName];
var x4builder = x4wp.builders[globName];
/* harmony default export */ var CoinTablevue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    MainSection: __webpack_require__(83),
    ColumnsSection: __webpack_require__(90),
    ActionsSection: __webpack_require__(84)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/CoinTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_CoinTablevue_type_script_lang_js_ = (CoinTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/CoinTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_CoinTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CoinTable.vue"
/* harmony default export */ var CoinTable = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Controls/Control.vue?vue&type=template&id=71e687fd&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"div",attrs:{"path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema,"vvalue":_vm.vvalue,"vschema":_vm.vschema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Controls/Control.vue?vue&type=template&id=71e687fd&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Controls/Control.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var x4plugin = window['X4CryptoTables'];
var x4builder = x4wp.builders['X4CryptoTables'];
/* harmony default export */ var Controlvue_type_script_lang_js_ = ({
  props: ['name', 'component'],
  computed: map["a" /* default */].variables({
    schema: function (_ref) {
      var state = _ref.state;
      return x4builder.schema[state.type].controls[this.name];
    },
    defaults: function (_ref2) {
      var state = _ref2.state;
      return x4plugin.defaults[state.type].controls[this.name];
    },
    path: function () {
      return this.schema.path;
    },
    values: function (_ref3) {
      var getters = _ref3.getters;
      return getters['helpers/items/src']({
        src: 'state.' + this.path
      });
    },
    vschema: function (_ref4) {
      var state = _ref4.state;
      return this.schema.value ? x4builder.schema[state.type].values[this.schema.value] : null;
    },
    vvalue: function (_ref5) {
      var state = _ref5.state,
          getters = _ref5.getters;
      var path = this.vschema ? this.vschema.path instanceof Object ? this.vschema.path.value : this.vschema.path : null;

      if (this.vschema && x4plugin.multiValues[state.type][this.schema.value]) {
        path = path.replace(/values\./, 'defaults.');
      }

      return this.vschema ? getters['helpers/items/src']({
        src: 'state.' + path
      }) : null;
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Controls/Control.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_Controlvue_type_script_lang_js_ = (Controlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Controls/Control.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Controls_Controlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Control.vue"
/* harmony default export */ var Control = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/SaveButton/SaveButton.vue?vue&type=template&id=ad63174e&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-save-button"},[_c('Button',{attrs:{"scale":.75,"options":_vm.options},on:{"click":_vm.click}}),_c('Style',[_vm._v(".x4-save-button\n  display: flex\n  margin: 12px 0 0 16px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/SaveButton/SaveButton.vue?vue&type=template&id=ad63174e&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/SaveButton/SaveButton.vue?vue&type=script&lang=js&
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

var globName = 'X4CryptoTables';
var x4plugin = window[globName];
/* harmony default export */ var SaveButtonvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Button: __webpack_require__(14)
  }),
  data: function () {
    return {
      loading: false,
      flylabel: true
    };
  },
  computed: map["a" /* default */].variables({
    options: function () {
      return {
        subtheme: 'outlined',
        icon: 'save',
        label: 'Save Changes',
        loading: this.loading,
        flylabel: 'Widget Saved',
        flytiny: true,
        flydown: true
      };
    }
  }),
  methods: map["a" /* default */].variables({
    click: function (_ref) {
      var _this = this;

      var getters = _ref.getters,
          dispatch = _ref.dispatch;
      var ajax_url = window.X4WP_ajax_url;
      var init = getters['builder/calc/init']();

      if (false) {}

      dispatch('builder/instructions/show', {
        init: init
      });
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/SaveButton/SaveButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var SaveButton_SaveButtonvue_type_script_lang_js_ = (SaveButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/SaveButton/SaveButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SaveButton_SaveButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "SaveButton.vue"
/* harmony default export */ var SaveButton = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/base/BSColors/BSColors.vue?vue&type=template&id=824daf90&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"fill":true,"icon":"colorize","title":"Colors"}},[_c('BOActions',{attrs:{"path":"colors"}}),_c('BOColors',{attrs:{"path":"colors","value":_vm.value,"colors":_vm.colors}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/base/BSColors/BSColors.vue?vue&type=template&id=824daf90&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/base/BSColors/BSColors.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSColorsvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BOActions: __webpack_require__(5),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    value: function (_ref) {
      var state = _ref.state;
      return state.colors;
    },
    colors: function (_ref2) {
      var state = _ref2.state,
          getters = _ref2.getters;
      var colors = x4builder.schema[state.type].colors;
      var allowedColors = colors.map(function (color) {
        return color.name;
      });
      return getters['builder/presets/colors']({
        allowedColors: allowedColors
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/base/BSColors/BSColors.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSColors_BSColorsvue_type_script_lang_js_ = (BSColorsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/base/BSColors/BSColors.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSColors_BSColorsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSColors.vue"
/* harmony default export */ var BSColors = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/CloseButton/CloseButton.vue?vue&type=template&id=6dcfe9e6&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-close-button"},[_c('Icon',{staticClass:"x4-transition",attrs:{"icon":"close","title":"Close"},nativeOn:{"click":function($event){return _vm.click($event)}}}),_c('Style',[_vm._v(".x4-close-button\n  font-size: 0\n  position: absolute\n  right: 4px\n  top: 4px\n\n  > .x4-ui-icon\n    cursor: pointer\n    font-size: 20px\n\n    &:hover\n      transform: scale(1.2)\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/CloseButton/CloseButton.vue?vue&type=template&id=6dcfe9e6&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/CloseButton/CloseButton.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CloseButtonvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7)
  }),
  methods: map["a" /* default */].variables({
    click: function (_ref) {
      var dispatch = _ref.dispatch;
      dispatch('builder/close');
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/CloseButton/CloseButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var CloseButton_CloseButtonvue_type_script_lang_js_ = (CloseButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/CloseButton/CloseButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CloseButton_CloseButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CloseButton.vue"
/* harmony default export */ var CloseButton = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/period/components/builder/Period.vue?vue&type=template&id=09b855aa&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSInput',{attrs:{"value":_vm.value,"schema":_vm.schema}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/values/crypto/period/components/builder/Period.vue?vue&type=template&id=09b855aa&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/values/crypto/period/components/builder/Period.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Periodvue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BSInput: __webpack_require__(12)
  })
});
// CONCATENATED MODULE: ./common/src/assets/values/crypto/period/components/builder/Period.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_Periodvue_type_script_lang_js_ = (Periodvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/values/crypto/period/components/builder/Period.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_Periodvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Period.vue"
/* harmony default export */ var Period = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSLoader/BSLoader.vue?vue&type=template&id=cf20ad8e&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"fill":true,"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BOActions',{attrs:{"path":[_vm.path + '.colorize', _vm.path + '.size']}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.colorize,"options":{ label: 'colorize loader' },"path":_vm.path + '.colorize'}}),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"number","value":_vm.values.size,"options":{ icon: 'first_page', label: 'Size', min: 0, step: 4 },"path":_vm.path + '.size'}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSLoader/BSLoader.vue?vue&type=template&id=cf20ad8e&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSLoader/BSLoader.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var BSLoadervue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOSwitchbox: __webpack_require__(10),
    BOInput: __webpack_require__(4)
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSLoader/BSLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSLoader_BSLoadervue_type_script_lang_js_ = (BSLoadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSLoader/BSLoader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSLoader_BSLoadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSLoader.vue"
/* harmony default export */ var BSLoader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSText/BSText.vue?vue&type=template&id=2e668625&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[(_vm.vschema)?_c('BBOption',{attrs:{"title":"Default value"}},[_c('BOActions',{attrs:{"path":_vm.vschema.path}}),_c('BOInput',{attrs:{"value":_vm.vvalue,"options":_vm.vschema.options,"path":_vm.vschema.path}})],1):_vm._e(),_c('BBOption',{attrs:{"title":"Label"}},[_c('BOActions',{attrs:{"path":_vm.path + '.label'}}),_c('BOLabel',{attrs:{"value":_vm.values.label,"options":_vm.schema.labelOptions,"path":_vm.path + '.label'}})],1),_c('BBOption',{attrs:{"title":"Icon"}},[_c('BOActions',{attrs:{"path":_vm.path + '.icon'}}),_c('BOIcon',{attrs:{"value":_vm.values.icon,"options":_vm.schema.iconOptions,"path":_vm.path + '.icon'}})],1),_c('BBOption',{attrs:{"title":"Theme"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.theme', _vm.path + '.subtheme']}}),_c('BOTheme',{attrs:{"path":_vm.path,"theme":_vm.themeValue,"subtheme":_vm.subthemeValue,"themes":_vm.themePresets,"decline":_vm.declineTheme}})],1),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSText/BSText.vue?vue&type=template&id=2e668625&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSText/BSText.vue?vue&type=script&lang=js&
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
//
//

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSTextvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4),
    BOLabel: __webpack_require__(20),
    BOIcon: __webpack_require__(28),
    BOTheme: __webpack_require__(11),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    themeValue: function (_ref) {
      var state = _ref.state;
      return this.values.theme || state.theme;
    },
    subthemeValue: function (_ref2) {
      var state = _ref2.state;
      return this.values.subtheme || state.subtheme;
    },
    colorsValue: function (_ref3) {
      var state = _ref3.state;
      return Object.assign({}, state.colors, this.values.colors);
    },
    themePresets: function (_ref4) {
      var getters = _ref4.getters;
      return getters['builder/presets/themes']({
        changeName: this.schema.name,
        allowedThemes: ['material'],
        allowedSubthemes: {
          material: ['filled', 'outlined', 'standard']
        }
      });
    },
    colorPresets: function (_ref5) {
      var getters = _ref5.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary', 'accent']
      });
    },
    declineTheme: function (_ref6) {
      var state = _ref6.state;
      return function (_ref7) {
        var theme = _ref7.theme,
            subtheme = _ref7.subtheme;
        return theme === state.theme && subtheme === state.subtheme;
      };
    },
    declineColor: function (_ref8) {
      var state = _ref8.state;
      return function (_ref9) {
        var name = _ref9.name,
            value = _ref9.value;
        return value === state.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSText/BSText.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSText_BSTextvue_type_script_lang_js_ = (BSTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSText/BSText.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSText_BSTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSText.vue"
/* harmony default export */ var BSText = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/Instructions.vue?vue&type=template&id=0314dd4f&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"x4"}},[(_vm.visible)?_c('DIV',{class:_vm.baseClass},[_c('div',{ref:"inside",staticClass:"x4-inside x4-scrollable x4-transition",on:{"wheel":_vm.wheelPrevent}},[_c('CloseButton'),_c('div',{staticClass:"x4-content"},[_c(_vm.stepsComponent,{tag:"div"}),_c('DoneButton')],1)],1),_c('Style',[_vm._v(".x4-instructions\n  bottom: 20px\n  left: 20px\n  position: fixed\n  right: 20px\n  top: 20px\n  user-select: text\n  z-index: 1000000\n\n  > .x4-inside\n    background-color: $color(inverted)\n    bottom: 0\n    display: flex\n    flex-direction: column\n    left: 0\n    overflow-x: hidden\n    position: absolute\n    top: 0\n    width: 100%\n\n    > .x4-content\n      display: flex\n      flex-direction: column\n      flex-shrink: 0\n      padding: 48px 48px\n\n  &.x4-pos-right > .x4-inside\n    left: auto\n    right: 0\n\n  &.x4-enter, &.x4-leave-to\n    > .x4-inside\n      left: 280px\n      opacity: 0\n      padding: 0\n      width: 0\n\n  &.x4-pos-right.x4-enter, &.x4-pos-right.x4-leave-to\n    > .x4-inside\n      left: auto\n      right: 280px\n\n  .x4-margin-bottom\n    margin-bottom: 16px!important\n\n  .x4-step\n    display: flex\n    flex-direction: column\n    margin-bottom: 96px\n\n  .x4-title\n    font-size: 28px\n    text-transform: uppercase\n\n  .x4-text\n    color: $color(primary, .64)\n    font-size: 18px\n\n  .x4-hint\n    color: $color(primary, .64)\n    font-size: 12px\n\n  code\n    background-color: $color(primary, .04)\n    border-radius: 4px\n    padding: 2px 4px 4px\n\n    .x4-red\n      color: #F92472\n\n    .x4-green\n      color: #A6E22B\n\n    .x4-yellow\n      color: #E7DB74\n\n    .x4-blue\n      color: #67D8EF\n\n    .x4-purple\n      color: #AC80FF\n\n  .x4-code\n    background-color: $color(primary, .08)\n    padding: 16px 16px\n\n    .x4-inside\n     user-select: all\n\n  .x4-copy-button\n    float: right\n\n  .x4-checkbox\n    margin: 4px 0\n\n  .x4-radio-button\n    margin: 4px 0\n\n  .x4-ui-input\n    margin-top: 8px\n    max-width: 640px\n")])],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/Instructions.vue?vue&type=template&id=0314dd4f&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Instructions/Instructions.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var Instructionsvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    CloseButton: __webpack_require__(44),
    DoneButton: __webpack_require__(45)
  }),
  computed: map["a" /* default */].variables({
    baseClass: function (_ref) {
      var state = _ref.state;
      return {
        'x4-instructions': true,
        'x4-pos-right': state.builder.position === 'right',
        'x4-def-scroll': window.isIE || window.isEdge || window.isFirefox,
        'x4-transition': true
      };
    },
    visible: function (_ref2) {
      var state = _ref2.state;
      return state.builder.instructions.visible;
    },
    stepsComponent: function () {
      if (true) return __webpack_require__(46).default;
      if (false) {}
      return null;
    }
  }),
  methods: map["a" /* default */].variables({
    wheelPrevent: function (_ref3, event) {
      var getters = _ref3.getters;
      getters['helpers/wheelPrevent']({
        el: this.$refs.inside,
        event: event
      });
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/Instructions.vue?vue&type=script&lang=js&
 /* harmony default export */ var Instructions_Instructionsvue_type_script_lang_js_ = (Instructionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Instructions/Instructions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Instructions_Instructionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Instructions.vue"
/* harmony default export */ var Instructions = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinColumn/components/builder/Format.vue?vue&type=template&id=68fd0e16&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBOption',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BOActions',{attrs:{"path":_vm.path}}),(_vm.defaults.badge !== undefined)?_c('BOSwitchbox',{attrs:{"value":_vm.values.badge.visible,"options":{ label: 'Show badge' },"path":_vm.path + '.badge.visible'}}):_vm._e(),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"text","value":_vm.values.title,"options":{ icon: 'text_fields', label: 'Row title' },"path":_vm.path + '.title'}}),(_vm.values.format)?_c('div',[_vm._v(" ")]):_vm._e(),(_vm.schema.patterns)?_c('BOTemplate',{attrs:{"options":{ patterns: _vm.schema.patterns },"value":_vm.values.format.template,"path":_vm.path + '.format.template'}}):_vm._e(),(_vm.values.format && _vm.defaults.format.precision !== undefined)?_c('BONumberPrecision',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.precision',"value":_vm.values.format.precision}}):_vm._e(),(_vm.values.format && _vm.defaults.format.separator !== undefined)?_c('BONumberSeparator',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.separator',"value":_vm.values.format.separator}}):_vm._e(),(_vm.values.format && _vm.defaults.format.factor !== undefined)?_c('BONumberFactor',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.factor',"value":_vm.values.format.factor}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/Format.vue?vue&type=template&id=68fd0e16&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinColumn/components/builder/Format.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var Formatvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema'],
  components: map["a" /* default */].components({
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4),
    BORadioButtons: __webpack_require__(17),
    BOSwitchbox: __webpack_require__(10),
    BOTemplate: __webpack_require__(15),
    BONumberPrecision: __webpack_require__(26),
    BONumberSeparator: __webpack_require__(25),
    BONumberFactor: __webpack_require__(24)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/Format.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_Formatvue_type_script_lang_js_ = (Formatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/Format.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_Formatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Format.vue"
/* harmony default export */ var Format = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinColumn/components/builder/Button.vue?vue&type=template&id=49491bc7&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BSButton',{attrs:{"tag":"option","path":_vm.path,"values":_vm.values,"defaults":_vm.defaults,"schema":_vm.schema1}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/Button.vue?vue&type=template&id=49491bc7&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinColumn/components/builder/Button.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'values0', 'defaults', 'schema'],
  components: map["a" /* default */].components({
    BSButton: __webpack_require__(18)
  }),
  computed: map["a" /* default */].variables({
    schema1: function (_ref) {
      var state = _ref.state;
      var commonSchema = {
        theme: this.values0.theme,
        subtheme: this.values0.subtheme
      };
      return Object.assign(commonSchema, this.schema, {
        colors: Object.assign({}, this.values0.colors, this.schema.colors)
      });
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinColumn/components/builder/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  builder_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Button.vue"
/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/MainSection/MainSection.vue?vue&type=template&id=f42c5d56&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BBOption',{attrs:{"title":"Base options"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.background', _vm.path + '.grid', _vm.path + '.popup']}}),_c('div',{staticClass:"x4-margin-semi-bottom"},[_vm._v("Grid & Border:")]),_c('BOSwitchbox',{attrs:{"value":_vm.values.grid.border,"options":{ label: 'show table border' },"path":_vm.path + '.grid.border'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.grid.horizontal,"options":{ label: 'show horizontal grid' },"path":_vm.path + '.grid.horizontal'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.grid.vertical,"options":{ label: 'show vertical grid' },"path":_vm.path + '.grid.vertical'}}),_c('div',[_vm._v(" ")]),_c('div',{staticClass:"x4-margin-semi-bottom"},[_vm._v("Background:")]),_c('BOSwitchbox',{attrs:{"value":_vm.values.background.table,"options":{ label: 'show table background' },"path":_vm.path + '.background.table'}}),(_vm.values.background.table)?_c('BOSwitchbox',{attrs:{"value":_vm.values.background.header,"options":{ label: 'show header background' },"path":_vm.path + '.background.header'}}):_vm._e(),_c('BOSwitchbox',{attrs:{"value":_vm.values.background.hover,"options":{ label: 'highlight on mouse hover' },"path":_vm.path + '.background.hover'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.background.sort,"options":{ label: 'highlight sorted column' },"path":_vm.path + '.background.sort'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.background.zebra,"options":{ label: 'show zebra background' },"path":_vm.path + '.background.zebra'}}),(_vm.values.background.zebra)?_c('BOSwitchbox',{attrs:{"value":_vm.values.background.even,"options":{ label: 'switch odd/even zebra' },"path":_vm.path + '.background.even'}}):_vm._e(),_c('div',[_vm._v(" ")]),_c('div',{staticClass:"x4-margin-semi-bottom"},[_vm._v("Coin Popup:")]),_c('BOSwitchbox',{attrs:{"value":_vm.values.popup.visible,"options":{ label: 'show popup dropdown' },"path":_vm.path + '.popup.visible'}})],1),_c('BBOption',{attrs:{"title":"Sort column"}},[_c('BOActions',{attrs:{"path":_vm.vschema.path}}),_c('BOSort',{attrs:{"value":_vm.vvalue,"options":_vm.vschema.options,"path":_vm.vschema.path}})],1),_c('BBOption',{attrs:{"title":"Coins list"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.strategy', _vm.path + '.except']}}),_c('BOItemsStrategy',{attrs:{"value":_vm.values.strategy,"path":_vm.path + '.strategy'}}),_c('BOInputList',{staticClass:"x4-margin-top",attrs:{"type":"select","value":_vm.values.except,"options":_vm.schema.coins.exceptOptions,"path":_vm.path + '.except'}})],1),_c('BBOption',{attrs:{"title":"Top coins"}},[_c('BOActions',{attrs:{"path":_vm.path + '.top'}}),_c('BOInputList',{attrs:{"type":"select","value":_vm.values.top,"options":_vm.schema.coins.topOptions,"path":_vm.path + '.top'}})],1),_c('BBOption',{attrs:{"title":"Flashes"}},[_c('BOActions',{attrs:{"path":_vm.path + '.flashes'}}),_c('BOSwitchbox',{attrs:{"value":_vm.values.flashes.visible,"options":{ label: 'Show flashes' },"path":_vm.path + '.flashes.visible'}}),_c('div',{staticClass:"x4-hint x4-margin-top x4-margin-bottom"},[_vm._v("Increase the coin price changing threshold to reduce the number of flashes:")]),_c('BOInput',{attrs:{"type":"number","value":_vm.values.flashes.threshold,"options":{ icon: 'fullscreen_exit', label: 'Threshold', min: 0, step: 0.0001 },"path":_vm.path + '.flashes.threshold'}})],1),_c('BBOption',{attrs:{"title":"Responsiveness"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.responsive', _vm.path + '.hideOrder']}}),_c('div',{staticClass:"x4-hint x4-margin-bottom"},[_vm._v("Descrease cell padding when the table width is less than the following value (px):")]),_c('BOInput',{attrs:{"type":"number","value":_vm.values.responsive.cellPaddingThreshold,"options":{ icon: 'fullscreen_exit', label: 'Threshold', min: 0, step: 4 },"path":_vm.path + '.responsive.cellPaddingThreshold'}}),_c('div',[_vm._v(" ")]),_c('div',{staticClass:"x4-hint x4-margin-bottom"},[_vm._v("Select the order in which the columns will disappear as the table width decreases to fit the available space:")]),_c('BOInputList',{attrs:{"type":"select","addremove":false,"value":_vm.values.hideOrder,"options":_vm.hideOrderOptions,"path":_vm.path + '.hideOrder'}})],1),_c('BBOption',{attrs:{"title":"Theme"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.theme', _vm.path + '.subtheme']}}),_c('BOTheme',{attrs:{"path":_vm.path,"theme":_vm.themeValue,"subtheme":_vm.subthemeValue,"themes":_vm.themePresets,"decline":_vm.declineTheme}})],1),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/MainSection/MainSection.vue?vue&type=template&id=f42c5d56&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/MainSection/MainSection.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var MainSectionvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'schema0', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOSort: __webpack_require__(37),
    BOInputList: __webpack_require__(13),
    BOItemsStrategy: __webpack_require__(27),
    BOSwitchbox: __webpack_require__(10),
    BOInput: __webpack_require__(4),
    BOTheme: __webpack_require__(11),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    themeValue: function (_ref) {
      var state = _ref.state;
      return this.values.theme || state.theme;
    },
    subthemeValue: function (_ref2) {
      var state = _ref2.state;
      return this.values.subtheme || state.subtheme;
    },
    colorsValue: function (_ref3) {
      var state = _ref3.state;
      return Object.assign({}, state.colors, this.values.colors);
    },
    hideOrderOptions: function (_ref4) {
      var _this = this;

      var state = _ref4.state;
      return Object.assign({}, this.schema.hideOrderOptions, {
        items: this.defaults.hideOrder.filter(function (name) {
          return _this.values.columns[name].visible;
        }).map(function (name) {
          return {
            value: name,
            title: _this.values.columns[name].title || _this.schema0.columns[name].title
          };
        })
      });
    },
    themePresets: function (_ref5) {
      var getters = _ref5.getters;
      return getters['builder/presets/themes']({
        changeName: this.schema.name,
        allowedThemes: ['material'],
        allowedSubthemes: {
          material: ['filled', 'outlined', 'standard']
        }
      });
    },
    colorPresets: function (_ref6) {
      var getters = _ref6.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary', 'inverted', 'accent', 'flashGreen', 'flashRed', 'badgeGreenText', 'badgeGreenBack', 'badgeRedText', 'badgeRedBack']
      });
    },
    declineTheme: function (_ref7) {
      var state = _ref7.state;
      return function (_ref8) {
        var theme = _ref8.theme,
            subtheme = _ref8.subtheme;
        return theme === state.theme && subtheme === state.subtheme;
      };
    },
    declineColor: function (_ref9) {
      var state = _ref9.state;
      return function (_ref10) {
        var name = _ref10.name,
            value = _ref10.value;
        return value === state.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/MainSection/MainSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var MainSection_MainSectionvue_type_script_lang_js_ = (MainSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/MainSection/MainSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MainSection_MainSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "MainSection.vue"
/* harmony default export */ var MainSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/ActionsSection/ActionsSection.vue?vue&type=template&id=f761866c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BBOption',{attrs:{"title":"Actions Order"}},[_c('BOActions',{attrs:{"path":_vm.path0 + '.actionsOrder'}}),_c('BOInputList',{attrs:{"type":"select","addremove":false,"value":_vm.values0.actionsOrder,"options":_vm.orderOptions,"path":_vm.path0 + '.actionsOrder'}})],1),_vm._l((_vm.values0.actionsOrder),function(name){return [_c('BSButton',{attrs:{"tag":"option","path":_vm.path + '.' + name,"values":_vm.values[name],"defaults":_vm.defaults[name],"schema":_vm.schema1[name],"nocolors":true}})]}),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ActionsSection/ActionsSection.vue?vue&type=template&id=f761866c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/ActionsSection/ActionsSection.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ActionsSectionvue_type_script_lang_js_ = ({
  props: ['path', 'path0', 'values', 'values0', 'defaults', 'defaults0', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInputList: __webpack_require__(13),
    BSButton: __webpack_require__(18),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    colors: function (_ref) {
      var state = _ref.state;
      return Object.assign({}, state.colors, this.values0.colors, this.schema.colors);
    },
    colorsValue: function () {
      return Object.assign({}, this.colors, this.values.colors);
    },
    orderOptions: function () {
      var _this = this;

      return Object.assign({}, this.schema.orderOptions, {
        items: this.defaults0.actionsOrder.filter(function (name) {
          return _this.values[name].visible;
        }).map(function (name) {
          return {
            value: name,
            title: _this.schema1[name].title
          };
        })
      });
    },
    schema1: function (_ref2) {
      var _this2 = this;

      var state = _ref2.state;
      var result = {};
      var commonSchema = {
        theme: this.values0.theme,
        subtheme: this.values0.subtheme
      };
      this.values0.actionsOrder.forEach(function (name) {
        result[name] = Object.assign({}, commonSchema, _this2.schema[name]);
      });
      return result;
    },
    colorPresets: function (_ref3) {
      var getters = _ref3.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary', 'inverted', 'accent']
      });
    },
    declineColor: function (_ref4) {
      var _this3 = this;

      var state = _ref4.state;
      return function (_ref5) {
        var name = _ref5.name,
            value = _ref5.value;
        return value === _this3.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ActionsSection/ActionsSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var ActionsSection_ActionsSectionvue_type_script_lang_js_ = (ActionsSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ActionsSection/ActionsSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ActionsSection_ActionsSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ActionsSection.vue"
/* harmony default export */ var ActionsSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Loader/Loader.vue?vue&type=template&id=66d5aa9e&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{class:_vm.baseClass},[_c('div',{staticClass:"x4-shape x4-shape1"}),_c('div',{staticClass:"x4-shape x4-shape2"}),_c('div',{staticClass:"x4-shape x4-shape3"}),_c('Style',[_vm._v(".x4-ui-loader\n  height: "+_vm._s(_vm.size)+"px\n  margin-left: auto\n  margin-right: auto\n  position: relative\n  width: "+_vm._s(_vm.size)+"px\n\n  .x4-shape\n    border-radius: 50%\n    box-sizing: border-box\n    height: 100%\n    position: absolute\n    width: 100%\n\n  .x4-shape1\n    animation: x4-ui-loader1 1.15s linear infinite\n    border-bottom: 3px solid $color(primary, .24)\n    left: 0\n    top: 0\n\n  .x4-shape2\n    animation: x4-ui-loader2 1.15s linear infinite\n    border-right: 3px solid $color(primary, .24)\n    right: 0\n    top: 0\n\n  .x4-shape3\n    animation: x4-ui-loader3 1.15s linear infinite\n    border-top: 3px solid $color(primary, .24)\n    right: 0\n    bottom: 0\n\n  &.x4-colorize\n    .x4-shape1, .x4-shape2, .x4-shape3\n      border-color: $color(accent)\n\n\n@keyframes x4-ui-loader1 {\n  0%\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)\n\n  100%\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg)\n}\n\n@keyframes x4-ui-loader2 {\n  0%\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)\n\n  100%\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg)\n}\n\n@keyframes x4-ui-loader3 {\n  0%\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)\n\n  100%\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg)\n}\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Loader/Loader.vue?vue&type=template&id=66d5aa9e&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Loader/Loader.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Loadervue_type_script_lang_js_ = ({
  props: ['colorize', 'size'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  }),
  computed: map["a" /* default */].variables({
    baseClass: function (_ref) {
      var state = _ref.state;
      return {
        'x4-ui-loader': true,
        'x4-colorize': !!this.colorize
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/ui/Loader/Loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Loader_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Loader/Loader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loader_Loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Loader.vue"
/* harmony default export */ var Loader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSTabs/BSTabs.vue?vue&type=template&id=ebfe679a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[(_vm.vschema)?_c('BBOption',{attrs:{"title":"Default value"}},[_c('BOActions',{attrs:{"path":_vm.vschema.path}}),_c('BOInput',{attrs:{"type":"select","value":_vm.vvalue,"options":_vm.vschema.options,"path":_vm.vschema.path}})],1):_vm._e(),_c('BBOption',{attrs:{"title":"Items list"}},[_c('BOActions',{attrs:{"path":_vm.schema.itemsOptions.path}}),_c('BOInputsList',{attrs:{"type":_vm.schema.itemsOptions.type,"value":_vm.values.items,"options":_vm.schema.itemsOptions,"path":_vm.schema.itemsOptions.path,"addremove":false}})],1),_c('BBOption',{attrs:{"title":"Theme"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.theme', _vm.path + '.subtheme']}}),_c('BOTheme',{attrs:{"path":_vm.path,"theme":_vm.themeValue,"subtheme":_vm.subthemeValue,"themes":_vm.themePresets,"decline":_vm.declineTheme}})],1),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSTabs/BSTabs.vue?vue&type=template&id=ebfe679a&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSTabs/BSTabs.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSTabsvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4),
    BOInputsList: __webpack_require__(29),
    BOTheme: __webpack_require__(11),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    themeValue: function (_ref) {
      var state = _ref.state;
      return this.values.theme || state.theme;
    },
    subthemeValue: function (_ref2) {
      var state = _ref2.state;
      return this.values.subtheme || state.subtheme;
    },
    colorsValue: function (_ref3) {
      var state = _ref3.state;
      return Object.assign({}, state.colors, this.values.colors);
    },
    themePresets: function (_ref4) {
      var getters = _ref4.getters;
      return getters['builder/presets/themes']({
        changeName: this.schema.name,
        allowedThemes: ['material'],
        allowedSubthemes: {
          material: ['filled', 'outlined', 'standard']
        }
      });
    },
    colorPresets: function (_ref5) {
      var getters = _ref5.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary', 'text', 'accent']
      });
    },
    declineTheme: function (_ref6) {
      var state = _ref6.state;
      return function (_ref7) {
        var theme = _ref7.theme,
            subtheme = _ref7.subtheme;
        return theme === state.theme && subtheme === state.subtheme;
      };
    },
    declineColor: function (_ref8) {
      var state = _ref8.state;
      return function (_ref9) {
        var name = _ref9.name,
            value = _ref9.value;
        return value === state.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSTabs/BSTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSTabs_BSTabsvue_type_script_lang_js_ = (BSTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSTabs/BSTabs.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSTabs_BSTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSTabs.vue"
/* harmony default export */ var BSTabs = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Customizer.vue?vue&type=template&id=ce2f7ff2&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"x4","appear":""}},[(_vm.visible)?_c('DIV',{class:_vm.baseClass},[_c('HeadTop'),_c('div',{ref:"inside",staticClass:"x4-inside x4-scrollable",on:{"wheel":_vm.wheelPrevent}},[_c('BaseOptions'),_c('Controls'),_c('Values')],1),_c('Style',[_vm._v(".x4-customizer\n  background-color: $color(inverted)\n  bottom: 20px\n  display: flex\n  flex-direction: column\n  left: 20px\n  position: fixed\n  top: 20px\n  width: 240px\n  z-index: 1000000\n\n  &.x4-wp-offset\n    top: 48px\n\n  &.x4-pos-right\n    left: auto\n    right: 20px\n\n  &.x4-enter, &.x4-leave-to\n    opacity: 0\n\n  > .x4-inside\n    bottom: 0\n    display: flex\n    flex-direction: column\n    left: 0\n    position: absolute\n    right: 0\n    top: 74px\n\n  &.x4-def-scroll\n    width: 264px\n\n    .x4-bo-color .x4-hue\n      width: 66px\n\n  .x4-bb-section > .x4-content\n\n    .x4-ui-input\n      display: block\n\n    .x4-ui-checkboxes\n      display: block\n\n      .x4-shape\n        margin-top: 1px\n\n      .x4-shape2\n        top: 4px\n\n    .x4-ui-radio-buttons\n      display: block\n\n      .x4-shape\n        margin-top: 1px\n\n      .x4-shape2\n        height: 7px\n        left: 4px\n        top: 4px\n        width: 7px\n\n    .x4-ui-switchbox\n      flex-basis: 20px\n\n      .x4-shape\n        margin-top: 2px\n\n      .x4-shape1\n        top: 2.5px\n\n      .x4-label\n        padding-top: 1px\n\n    .x4-bo-patterns .x4-code\n      user-select: all\n\n    .x4-hint\n      color: $color(primary, .54)\n      font-size: 10px\n\n      a\n        text-decoration: none\n")])],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Customizer.vue?vue&type=template&id=ce2f7ff2&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Customizer.vue?vue&type=script&lang=js&
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
//

var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var Customizervue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    HeadTop: __webpack_require__(100),
    BaseOptions: __webpack_require__(92),
    Controls: __webpack_require__(104),
    Values: __webpack_require__(97)
  }),
  computed: map["a" /* default */].variables({
    baseClass: function (_ref) {
      var state = _ref.state;
      return {
        'x4-customizer': true,
        'x4-wp-offset':  false && false,
        'x4-pos-right': state.builder.position === 'right',
        'x4-def-scroll': window.isIE || window.isEdge || window.isFirefox,
        'x4-transition': true
      };
    },
    visible: function (_ref2) {
      var state = _ref2.state;
      return state.builder.opened && !state.builder.instructions.visible;
    }
  }),
  methods: map["a" /* default */].variables({
    wheelPrevent: function (_ref3, event) {
      var getters = _ref3.getters;

      if (!window.x4gutenberg) {
        getters['helpers/wheelPrevent']({
          el: this.$refs.inside,
          event: event
        });
      }
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Customizer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Customizer_Customizervue_type_script_lang_js_ = (Customizervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Customizer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Customizer_Customizervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Customizer.vue"
/* harmony default export */ var Customizer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/values/BSSort/BSSort.vue?vue&type=template&id=15defb76&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"fill":true,"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BOActions',{attrs:{"path":_vm.schema.path}}),_c('BOSort',{attrs:{"value":_vm.value,"options":_vm.schema.options,"path":_vm.schema.path}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/values/BSSort/BSSort.vue?vue&type=template&id=15defb76&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/values/BSSort/BSSort.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BSSortvue_type_script_lang_js_ = ({
  props: ['value', 'schema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BOActions: __webpack_require__(5),
    BOSort: __webpack_require__(37)
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/values/BSSort/BSSort.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSSort_BSSortvue_type_script_lang_js_ = (BSSortvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/values/BSSort/BSSort.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSSort_BSSortvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSSort.vue"
/* harmony default export */ var BSSort = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSRadios/BSRadios.vue?vue&type=template&id=7830011f&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[(_vm.vschema)?_c('BBOption',{attrs:{"title":"Default value"}},[_c('BOActions',{attrs:{"path":_vm.vschema.path}}),_c('BOInput',{attrs:{"type":"select","value":_vm.vvalue,"options":_vm.vschema.options,"path":_vm.vschema.path}})],1):_vm._e(),(_vm.schema.valueOptions && _vm.schema.valueOptions.patterns)?_c('BBOption',{attrs:{"title":"Value template"}},[_c('BOActions',{attrs:{"path":_vm.path + '.itemTemplate'}}),_c('BOTemplate',{attrs:{"value":_vm.values.itemTemplate,"options":_vm.schema.valueOptions,"path":_vm.path + '.itemTemplate'}})],1):_vm._e(),(_vm.isRawItems)?_c('BBOption',{attrs:{"title":"Items list"}},[_c('BOActions',{attrs:{"path":_vm.schema.itemsOptions.path}}),_c('BOInputsList',{attrs:{"type":_vm.schema.itemsOptions.type,"value":_vm.values.items,"options":_vm.schema.itemsOptions,"path":_vm.schema.itemsOptions.path}})],1):_vm._e(),(!_vm.isRawItems)?_c('BBOption',{attrs:{"title":"Items list"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.strategy', _vm.path + '.except']}}),_c('BOItemsStrategy',{attrs:{"value":_vm.values.strategy,"path":_vm.path + '.strategy'}}),_c('BOInputList',{staticClass:"x4-margin-top",attrs:{"type":"select","value":_vm.values.except,"options":_vm.schema.exceptOptions,"path":_vm.path + '.except'}})],1):_vm._e(),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSRadios/BSRadios.vue?vue&type=template&id=7830011f&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSRadios/BSRadios.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSRadiosvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4),
    BOInputList: __webpack_require__(13),
    BOInputsList: __webpack_require__(29),
    BOItemsStrategy: __webpack_require__(27),
    BOTemplate: __webpack_require__(15),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    isRawItems: function () {
      return !!this.schema.itemsOptions;
    },
    colorsValue: function (_ref) {
      var state = _ref.state;
      return Object.assign({}, state.colors, this.values.colors);
    },
    colorPresets: function (_ref2) {
      var getters = _ref2.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary', 'accent']
      });
    },
    declineColor: function (_ref3) {
      var state = _ref3.state;
      return function (_ref4) {
        var name = _ref4.name,
            value = _ref4.value;
        return value === state.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSRadios/BSRadios.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSRadios_BSRadiosvue_type_script_lang_js_ = (BSRadiosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSRadios/BSRadios.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSRadios_BSRadiosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSRadios.vue"
/* harmony default export */ var BSRadios = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnsSection.vue?vue&type=template&id=60f83273&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BBOption',{attrs:{"title":"Columns order"}},[_c('BOActions',{attrs:{"path":_vm.path0 + '.showOrder'}}),_c('BOInputList',{attrs:{"type":"select","addremove":false,"value":_vm.values0.showOrder,"options":_vm.orderOptions,"path":_vm.path0 + '.showOrder'}})],1),_vm._l((_vm.values0.showOrder),function(name){return [_c('ColumnSection',{attrs:{"path":_vm.path + '.' + name,"values":_vm.values[name],"defaults":_vm.defaults[name],"schema":_vm.schema[name],"schema0":_vm.schema0,"name":name}})]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnsSection.vue?vue&type=template&id=60f83273&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnsSection.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ColumnsSectionvue_type_script_lang_js_ = ({
  props: ['path', 'path0', 'values', 'values0', 'defaults', 'defaults0', 'schema', 'schema0', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInputList: __webpack_require__(13),
    BSButton: __webpack_require__(18),
    ColumnSection: __webpack_require__(99)
  }),
  computed: map["a" /* default */].variables({
    orderOptions: function () {
      var _this = this;

      return Object.assign({}, this.schema.orderOptions, {
        items: this.defaults0.showOrder.filter(function (name) {
          return _this.values[name].visible;
        }).map(function (name) {
          return {
            value: name,
            title: _this.values[name].title || _this.schema[name].title
          };
        })
      });
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnsSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var ColumnsSection_ColumnsSectionvue_type_script_lang_js_ = (ColumnsSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnsSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ColumnsSection_ColumnsSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ColumnsSection.vue"
/* harmony default export */ var ColumnsSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSPager/BSPager.vue?vue&type=template&id=a74aeca4&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBSection',{attrs:{"path":_vm.path,"visibility":true,"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[(_vm.vschema)?_c('BBOption',{attrs:{"title":"Default value"}},[_c('BOActions',{attrs:{"path":_vm.vschema.path}}),_c('BOInput',{attrs:{"type":"number","value":_vm.vvalue,"options":_vm.vschema.options,"path":_vm.vschema.path}})],1):_vm._e(),(_vm.schema.labelOptions)?_c('BBOption',{attrs:{"title":"Label template"}},[_c('BOActions',{attrs:{"path":_vm.path + '.label'}}),_c('BOLabel',{attrs:{"value":_vm.values.label,"options":_vm.schema.labelOptions,"path":_vm.path + '.label'}})],1):_vm._e(),_c('BBOption',{attrs:{"title":"Theme"}},[_c('BOActions',{attrs:{"path":[_vm.path + '.theme', _vm.path + '.subtheme']}}),_c('BOTheme',{attrs:{"path":_vm.path,"theme":_vm.themeValue,"subtheme":_vm.subthemeValue,"themes":_vm.themePresets,"decline":_vm.declineTheme}})],1),_c('BBOption',{attrs:{"title":"Colors"}},[_c('BOActions',{attrs:{"path":_vm.path + '.colors'}}),_c('BOColors',{attrs:{"value":_vm.colorsValue,"colors":_vm.colorPresets,"path":_vm.path + '.colors',"decline":_vm.declineColor}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSPager/BSPager.vue?vue&type=template&id=a74aeca4&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/sections/controls/BSPager/BSPager.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var BSPagervue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],
  components: map["a" /* default */].components({
    BBSection: __webpack_require__(6),
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4),
    BOLabel: __webpack_require__(20),
    BOTheme: __webpack_require__(11),
    BOColors: __webpack_require__(9)
  }),
  computed: map["a" /* default */].variables({
    themeValue: function (_ref) {
      var state = _ref.state;
      return this.values.theme || state.theme;
    },
    subthemeValue: function (_ref2) {
      var state = _ref2.state;
      return this.values.subtheme || 'default';
    },
    colorsValue: function (_ref3) {
      var state = _ref3.state;
      return Object.assign({}, state.colors, this.values.colors);
    },
    themePresets: function (_ref4) {
      var getters = _ref4.getters;
      return [{
        name: 'material',
        subthemes: [{
          name: 'default',
          title: 'Material<br/>Default'
        }]
      }];
    },
    colorPresets: function (_ref5) {
      var getters = _ref5.getters;
      return getters['builder/presets/colors']({
        allowedColors: ['primary']
      });
    },
    declineTheme: function (_ref6) {
      var state = _ref6.state;
      return function (_ref7) {
        var theme = _ref7.theme,
            subtheme = _ref7.subtheme;
        return theme === state.theme && subtheme === 'default';
      };
    },
    declineColor: function (_ref8) {
      var state = _ref8.state;
      return function (_ref9) {
        var name = _ref9.name,
            value = _ref9.value;
        return value === state.colors[name];
      };
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSPager/BSPager.vue?vue&type=script&lang=js&
 /* harmony default export */ var BSPager_BSPagervue_type_script_lang_js_ = (BSPagervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/sections/controls/BSPager/BSPager.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BSPager_BSPagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BSPager.vue"
/* harmony default export */ var BSPager = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/BaseOptions/BaseOptions.vue?vue&type=template&id=04d635dd&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBGroup',{attrs:{"title":"Base options"}},[_c('BSTheme'),_c('BSLayout'),_c('BSColors')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/BaseOptions/BaseOptions.vue?vue&type=template&id=04d635dd&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/BaseOptions/BaseOptions.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BaseOptionsvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    BBGroup: __webpack_require__(23),
    BSTheme: __webpack_require__(47),
    BSLayout: __webpack_require__(64),
    BSColors: __webpack_require__(75)
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/BaseOptions/BaseOptions.vue?vue&type=script&lang=js&
 /* harmony default export */ var BaseOptions_BaseOptionsvue_type_script_lang_js_ = (BaseOptionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/BaseOptions/BaseOptions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BaseOptions_BaseOptionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BaseOptions.vue"
/* harmony default export */ var BaseOptions = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/themes/ButtonMaterial/ButtonOutlined/ButtonOutlined.vue?vue&type=template&id=75cfdd30&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3,"tag":_vm.tag}},[_vm._t("loader"),_vm._t("icon"),_vm._t("label"),_vm._t("border"),_vm._t("hover"),_vm._t("flylabel"),_vm._t("ripple"),_vm._t("default"),(!_vm.nostyle)?_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-button.x4-subtheme-outlined\n\n  .x4-border\n    border-color: $color(primary, .24)\n\n  &:hover .x4-border\n    border-color: $color(primary, .74)\n\n  &:hover .x4-hover\n    background-color: $color(primary, .08)\n\n  .x4-icon\n    color: $color(primary, .54)\n\n  .x4-label\n    color: $color(primary)\n\n  .x4-loader .x4-shape\n    border-color: $color(primary, .54)\n\n\n  &.x4-colorize\n\n    .x4-border\n      border-color: $color(accent)\n\n    &:hover .x4-border\n      border-color: $color(accent)\n\n    &:hover .x4-hover\n      background-color: $color(accent, .08)\n\n    .x4-icon\n      color: $color(accent)\n\n    .x4-label\n      color: $color(accent)\n\n    .x4-loader .x4-shape\n      border-color: $color(accent)\n")]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonOutlined/ButtonOutlined.vue?vue&type=template&id=75cfdd30&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/themes/ButtonMaterial/ButtonOutlined/ButtonOutlined.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var ButtonOutlinedvue_type_script_lang_js_ = ({
  props: ['options', 'colors', 'nostyle', 'scale', 'tag'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonOutlined/ButtonOutlined.vue?vue&type=script&lang=js&
 /* harmony default export */ var ButtonOutlined_ButtonOutlinedvue_type_script_lang_js_ = (ButtonOutlinedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonOutlined/ButtonOutlined.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ButtonOutlined_ButtonOutlinedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ButtonOutlined.vue"
/* harmony default export */ var ButtonOutlined = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/themes/ButtonMaterial/ButtonStandard/ButtonStandard.vue?vue&type=template&id=91f954ac&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3,"tag":_vm.tag}},[_vm._t("loader"),_vm._t("icon"),_vm._t("label"),_vm._t("hover"),_vm._t("flylabel"),_vm._t("ripple"),_vm._t("default"),(!_vm.nostyle)?_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-button.x4-subtheme-standard\n\n  &:hover\n    background-color: $color(primary, .08)\n\n  .x4-icon\n    color: $color(primary, .54)\n\n  .x4-label\n    color: $color(primary)\n\n  .x4-loader .x4-shape\n    border-color: $color(primary, .54)\n\n\n  &.x4-colorize\n\n    &:hover\n      background-color: $color(accent, .08)\n\n    .x4-icon\n      color: $color(accent)\n\n    .x4-label\n      color: $color(accent)\n\n    .x4-loader .x4-shape\n      border-color: $color(accent)\n")]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonStandard/ButtonStandard.vue?vue&type=template&id=91f954ac&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/themes/ButtonMaterial/ButtonStandard/ButtonStandard.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var ButtonStandardvue_type_script_lang_js_ = ({
  props: ['options', 'colors', 'nostyle', 'scale', 'tag'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonStandard/ButtonStandard.vue?vue&type=script&lang=js&
 /* harmony default export */ var ButtonStandard_ButtonStandardvue_type_script_lang_js_ = (ButtonStandardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonStandard/ButtonStandard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ButtonStandard_ButtonStandardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ButtonStandard.vue"
/* harmony default export */ var ButtonStandard = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/themes/ButtonMaterial/ButtonFilled/ButtonFilled.vue?vue&type=template&id=1e7e58e5&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3,"tag":_vm.tag}},[_vm._t("back"),_vm._t("loader"),_vm._t("icon"),_vm._t("label"),_vm._t("hover"),_vm._t("flylabel"),_vm._t("ripple"),_vm._t("default"),(!_vm.nostyle)?_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-button.x4-subtheme-filled\n  background-color: $color(primary, .04)\n\n  &:hover\n    background-color: $color(primary, .08)\n\n  .x4-icon\n    color: $color(primary, .54)\n\n  .x4-label\n    color: $color(primary)\n\n  .x4-loader .x4-shape\n    border-color: $color(primary, .54)\n\n\n  &.x4-colorize\n    background-color: $color(accent)\n\n    &:hover .x4-hover\n      background-color: $color(inverted, .32)\n\n    .x4-icon\n      color: $color(inverted)\n\n    .x4-label\n      color: $color(inverted)\n\n    .x4-loader .x4-shape\n      border-color: $color(inverted)\n")]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonFilled/ButtonFilled.vue?vue&type=template&id=1e7e58e5&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/themes/ButtonMaterial/ButtonFilled/ButtonFilled.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var ButtonFilledvue_type_script_lang_js_ = ({
  props: ['options', 'colors', 'nostyle', 'scale', 'tag'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Ripple: __webpack_require__(36)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonFilled/ButtonFilled.vue?vue&type=script&lang=js&
 /* harmony default export */ var ButtonFilled_ButtonFilledvue_type_script_lang_js_ = (ButtonFilledvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonFilled/ButtonFilled.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ButtonFilled_ButtonFilledvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ButtonFilled.vue"
/* harmony default export */ var ButtonFilled = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/themes/ButtonMaterial/ButtonMaterial.vue?vue&type=template&id=0935365a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.is2,{tag:"div",attrs:{"options":_vm.options,"colors":_vm.colors,"nostyle":_vm.nostyle,"scale":_vm.scale,"tag":_vm.tag}},[_vm._t("icon",null,{slot:"icon"}),_vm._t("label",null,{slot:"label"}),_vm._t("flylabel",null,{slot:"flylabel"}),_vm._t("loader",null,{slot:"loader"}),_vm._t("ripple",null,{slot:"ripple"}),_c('div',{staticClass:"x4-hover x4-transition",attrs:{"slot":"hover"},slot:"hover"}),_c('div',{staticClass:"x4-border x4-transition",attrs:{"slot":"border"},slot:"border"}),_vm._t("default"),(!_vm.nostyle)?_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-button.x4-theme-material\n  border-radius: $scale(2px)\n  font-family: 'Roboto',sans-serif\n  font-size: $scale(14px)\n  font-weight: 400\n  height: $scale(36px)\n  line-height: 1.5\n  text-decoration: none\n\n  .x4-icon\n    float: left\n    font-size: $scale(18px)\n    margin: $scale(9px) 0 0 $scale(12px)\n\n  &.x4-no-label .x4-icon\n    margin-right: $scale(12px)\n\n  .x4-label\n    font-size: $scale(16px)\n    font-weight: 500\n    padding: $scale(7px) $scale(16px) 0 $scale(8px)\n    overflow: hidden\n    text-transform: uppercase\n\n  &.x4-no-icon .x4-label\n    padding-left: $scale(16px)\n\n  .x4-hover\n    bottom: 0\n    left: 0\n    position: absolute\n    right: 0\n    top: 0\n\n  .x4-border\n    border: $scale(2px) solid transparent\n    bottom: 0\n    left: 0\n    position: absolute\n    right: 0\n    top: 0\n\n  .x4-flylabel\n    font-size: $scale(14px)\n    left: 0\n    position: absolute\n    right: 0\n    text-align: center\n    top: -28px\n\n    &.x4-flytiny\n      top: -18px\n\n    &.x4-enter, &.x4-leave-to\n      opacity: 0\n      top: 0\n\n    &.x4-flydown\n      bottom: -28px\n      top: auto\n\n      &.x4-flytiny\n        bottom: -18px\n\n      &.x4-enter, &.x4-leave-to\n        bottom: 0\n\n  &.x4-loading\n    .x4-icon, .x4-label\n      visibility: hidden\n\n  .x4-loader\n    height: $scale(28px)\n    left: 50%\n    position: absolute\n    top: 50%\n    transform: translate(-50%, -50%)\n    width: $scale(28px)\n")]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonMaterial.vue?vue&type=template&id=0935365a&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Button/themes/ButtonMaterial/ButtonMaterial.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//

/* harmony default export */ var ButtonMaterialvue_type_script_lang_js_ = ({
  props: ['is2', 'options', 'colors', 'nostyle', 'scale', 'tag'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonMaterial.vue?vue&type=script&lang=js&
 /* harmony default export */ var ButtonMaterial_ButtonMaterialvue_type_script_lang_js_ = (ButtonMaterialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Button/themes/ButtonMaterial/ButtonMaterial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ButtonMaterial_ButtonMaterialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ButtonMaterial.vue"
/* harmony default export */ var ButtonMaterial = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Values/Values.vue?vue&type=template&id=21ac7d3c&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBGroup',{attrs:{"title":"Values"}},[_vm._l((_vm.valOrder),function(name){return (_vm.components[name])?[_c('Value',{attrs:{"name":name,"component":_vm.components[name]}})]:_vm._e()})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Values/Values.vue?vue&type=template&id=21ac7d3c&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Values/Values.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Valuesvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    BBGroup: __webpack_require__(23),
    Value: __webpack_require__(55)
  }),
  computed: map["a" /* default */].variables({
    valOrder: function (_ref) {
      var state = _ref.state;
      return {
        "coinTable": {
          "name": "coinTable",
          "title": "Coin Table",
          "contrOrder": ["coinTable", "fiatSelect", "perPageSelect", "searchInput", "coinTabs", "coinColumn", "lineChart", "periodSelect", "pagerBlock", "loader"],
          "valOrder": ["sort", "fiat", "perPage", "search", "coinTab", "period", "page"],
          "multiValues": ["coinTab", "period"],
          "hiddenValues": [],
          "scripts": ["chartjs"],
          "requests": ["coincapRates", "coincapAssets", "coincapAssetsMeta"]
        }
      }[state.type].valOrder;
    },
    components: function (_ref2) {
      var state = _ref2.state;
      return {
        sort: __webpack_require__(54).default,
        fiat: __webpack_require__(53).default,
        perPage: __webpack_require__(52).default,
        search: __webpack_require__(51).default,
        coinTab: __webpack_require__(49).default,
        period: __webpack_require__(77).default,
        page: __webpack_require__(56).default
      };
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Values/Values.vue?vue&type=script&lang=js&
 /* harmony default export */ var Values_Valuesvue_type_script_lang_js_ = (Valuesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Values/Values.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Values_Valuesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Values.vue"
/* harmony default export */ var Values = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOUrl/BOUrl.vue?vue&type=template&id=aad15080&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BOSwitchbox',{attrs:{"path":_vm.pathBlank,"value":_vm.valueBlank,"options":_vm.options1}}),(_vm.value !== true)?_c('div',[_c('BOInput',{staticClass:"x4-margin-top",attrs:{"path":_vm.path,"value":_vm.value,"options":_vm.options2}}),(_vm.options2.patterns)?_c('BOPatterns',{attrs:{"patterns":_vm.options2.patterns}}):_vm._e()],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOUrl/BOUrl.vue?vue&type=template&id=aad15080&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOUrl/BOUrl.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var BOUrlvue_type_script_lang_js_ = ({
  props: ['path', 'pathBlank', 'value', 'valueBlank', 'options'],
  components: map["a" /* default */].components({
    BOSwitchbox: __webpack_require__(10),
    BOInput: __webpack_require__(4),
    BOPatterns: __webpack_require__(19)
  }),
  computed: map["a" /* default */].variables({
    options1: function () {
      return {
        label: 'Open in a new tab'
      };
    },
    options2: function () {
      var options = {
        icon: 'link',
        label: 'URL ' + (this.options && this.options.patterns ? 'template' : 'value')
      };
      return Object.assign(options, this.options);
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOUrl/BOUrl.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOUrl_BOUrlvue_type_script_lang_js_ = (BOUrlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOUrl/BOUrl.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOUrl_BOUrlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOUrl.vue"
/* harmony default export */ var BOUrl = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnSection.vue?vue&type=template&id=72258e30&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBOption',{attrs:{"path":_vm.path,"visibility":_vm.name !== 'name',"visible":_vm.values.visible,"icon":_vm.schema.icon,"title":_vm.schema.title}},[_c('BOActions',{attrs:{"path":_vm.path}}),(_vm.defaults.badge !== undefined)?_c('BOSwitchbox',{attrs:{"value":_vm.values.badge.visible,"options":{ label: 'Show badge' },"path":_vm.path + '.badge.visible'}}):_vm._e(),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"text","value":_vm.values.title,"options":{ icon: 'text_fields', label: 'Column title' },"path":_vm.path + '.title'}}),_c('div',{staticClass:"x4-margin-top"},[_vm._v("Alignment:")]),_c('BORadioButtons',{staticClass:"x4-margin-semi-top",attrs:{"value":_vm.values.align,"options":_vm.schema0.columns.alignOptions,"path":_vm.path + '.align'}}),(_vm.values.sort)?_c('div',[_c('div',{staticClass:"x4-margin-top"},[_vm._v("Sort Type:")]),_c('BORadioButtons',{staticClass:"x4-margin-semi-top",attrs:{"value":_vm.values.sort,"options":_vm.schema0.columns.sortOptions,"path":_vm.path + '.sort'}})],1):_vm._e(),(_vm.values.format)?_c('div',[_vm._v(" ")]):_vm._e(),(_vm.schema.patterns)?_c('BOTemplate',{attrs:{"options":{ patterns: _vm.schema.patterns },"value":_vm.values.format.template,"path":_vm.path + '.format.template'}}):_vm._e(),(_vm.values.format && _vm.defaults.format.precision !== undefined)?_c('BONumberPrecision',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.precision',"value":_vm.values.format.precision}}):_vm._e(),(_vm.values.format && _vm.defaults.format.separator !== undefined)?_c('BONumberSeparator',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.separator',"value":_vm.values.format.separator}}):_vm._e(),(_vm.values.format && _vm.defaults.format.factor !== undefined)?_c('BONumberFactor',{staticClass:"x4-margin-top",attrs:{"path":_vm.path + '.format.factor',"value":_vm.values.format.factor}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnSection.vue?vue&type=template&id=72258e30&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnSection.vue?vue&type=script&lang=js&
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

var x4wp = window.x4wp;
var globName = 'X4CryptoTables';
var x4builder = x4wp.builders[globName];
/* harmony default export */ var ColumnSectionvue_type_script_lang_js_ = ({
  props: ['path', 'values', 'defaults', 'schema', 'schema0', 'name'],
  components: map["a" /* default */].components({
    BBOption: __webpack_require__(8),
    BOActions: __webpack_require__(5),
    BOInput: __webpack_require__(4),
    BORadioButtons: __webpack_require__(17),
    BOSwitchbox: __webpack_require__(10),
    BOTemplate: __webpack_require__(15),
    BONumberPrecision: __webpack_require__(26),
    BONumberSeparator: __webpack_require__(25),
    BONumberFactor: __webpack_require__(24)
  })
});
// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var ColumnsSection_ColumnSectionvue_type_script_lang_js_ = (ColumnSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/controls/crypto/coinTable/components/builder/ColumnsSection/ColumnSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ColumnsSection_ColumnSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ColumnSection.vue"
/* harmony default export */ var ColumnSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/HeadTop.vue?vue&type=template&id=e5011e86&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-head-top"},[_c('CloseButton'),_c('SaveButton'),_c('div',{staticClass:"x4-buttons"},[_c('ResetInitial'),_c('ResetDefault'),_c('InvertButton'),_c('RightButton')],1),_c('Style',[_vm._v(".x4-head-top\n  border-bottom: 1px solid $color(primary, .24)\n  display: flex\n  flex-direction: column\n  flex-basis: 74px\n  position: relative\n\n  > .x4-buttons\n    display: flex\n    justify-content: flex-end\n    margin: 8px 6px 0 0\n\n    > .x4-ui-icon\n      color: $color(accent)\n      cursor: pointer\n      font-size: 18px\n\n      &:hover\n        transform: scale(1.2)\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/HeadTop.vue?vue&type=template&id=e5011e86&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/HeadTop/HeadTop.vue?vue&type=script&lang=js&
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

/* harmony default export */ var HeadTopvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    CloseButton: __webpack_require__(76),
    SaveButton: __webpack_require__(74),
    ResetInitial: __webpack_require__(57),
    ResetDefault: __webpack_require__(58),
    InvertButton: __webpack_require__(59),
    RightButton: __webpack_require__(60)
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/HeadTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var HeadTop_HeadTopvue_type_script_lang_js_ = (HeadTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/HeadTop/HeadTop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  HeadTop_HeadTopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "HeadTop.vue"
/* harmony default export */ var HeadTop = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInputList/SortableList/SortableList.vue?vue&type=template&id=efbc5e38&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{class:_vm.baseClass},[_vm._l((_vm.values),function(value,index){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.options1[index].hidden),expression:"!options1[index].hidden"}],key:value[1],staticClass:"x4-list-item",attrs:{"data-id":index}},[_c('Icon',{staticClass:"x4-move x4-float-left",attrs:{"icon":"unfold_more"}}),(_vm.addremove !== false)?_c('Icon',{staticClass:"x4-remove x4-float-right",attrs:{"icon":"clear"},nativeOn:{"click":function($event){_vm.remove({ index: index })}}}):_vm._e(),_c('BOInput',{staticClass:"x4-input-value",attrs:{"type":_vm.type,"value":value[0],"options":_vm.options1[index]},on:{"change":function($event){_vm.change.call(this, arguments[0], { index: index })}}})],1)}),_c('Style',[_vm._v(".x4-sortable-list\n  \n  .x4-sortable-ghost\n    opacity: 0\n\n  .x4-move\n    cursor: move\n    font-size: 24px\n    margin: 9px 4px 0 -8px\n    user-select: none\n\n  .x4-remove\n    cursor: pointer\n    font-size: 18px\n    margin: 12px -8px 0 4px\n\n  .x4-input-value\n    margin: 0 14px 0 20px\n\n  &.x4-no-remove .x4-input-value\n    margin-right: 0\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOInputList/SortableList/SortableList.vue?vue&type=template&id=efbc5e38&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInputList/SortableList/SortableList.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//

/* harmony default export */ var SortableListvue_type_script_lang_js_ = ({
  props: ['type', 'values', 'options', 'addremove'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7),
    BOInput: __webpack_require__(4)
  }),
  data: function () {
    return {
      needUpdate: Math.random()
    };
  },
  mounted: function () {
    var self = this;
    this.$store.getters['helpers/items/sortable']({
      $el: this.$el,
      options: {
        handle: '.x4-move',
        draggable: '.x4-list-item',
        onUpdate: function (event) {
          var values = this.toArray().map(function (index) {
            return self.values[index];
          });
          self.$emit('change', {
            op: 'replace',
            values: values
          });
        }
      }
    });
  },
  computed: map["a" /* default */].variables({
    baseClass: function () {
      return {
        'x4-sortable-list': true,
        'x4-no-remove': this.addremove === false
      };
    },
    options1: function (_ref) {
      var _this = this;

      var getters = _ref.getters;
      var except = this.values.map(function (value) {
        return value[0];
      });
      var result = {};

      if (this.needUpdate) {
        this.values.forEach(function (value, index) {
          var items = getters['helpers/items/src']({
            src: _this.options.items
          });
          var filteredItems = Array.isArray(items) ? [] : {};

          for (var key in items) {
            var itemValue = _this.options.itemValue !== '_key' ? _this.options.itemValue !== '_value' ? items[key][_this.options.itemValue] : items[key] : key;

            if (value[0] === itemValue || except.indexOf(itemValue) === -1) {
              filteredItems[key] = items[key];
            }
          }

          if (Array.isArray(filteredItems)) {
            filteredItems = filteredItems.filter(function (item) {
              return !!item;
            });
          }

          result[index] = Object.assign({}, _this.options);
          result[index].items = filteredItems;

          if (_this.addremove === false) {
            result[index].hidden = !Array.isArray(filteredItems) ? Object.keys(filteredItems).length === 0 : filteredItems.length === 0;
          }
        });
      }

      return result;
    }
  }),
  methods: map["a" /* default */].variables({
    change: function (context, _ref2, _ref3) {
      var value = _ref2.value;
      var index = _ref3.index;
      this.needUpdate = Math.random();
      this.$emit('change', {
        op: 'set',
        index: index,
        value: value
      });
    },
    remove: function (context, _ref4) {
      var index = _ref4.index;
      this.needUpdate = Math.random();
      this.$emit('change', {
        op: 'splice',
        index: index
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOInputList/SortableList/SortableList.vue?vue&type=script&lang=js&
 /* harmony default export */ var SortableList_SortableListvue_type_script_lang_js_ = (SortableListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOInputList/SortableList/SortableList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SortableList_SortableListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "SortableList.vue"
/* harmony default export */ var SortableList = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Ripple/Core.vue?vue&type=template&id=4fc35a6d&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-core",style:(_vm.computeCoreStyle)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Ripple/Core.vue?vue&type=template&id=4fc35a6d&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Ripple/Core.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Corevue_type_script_lang_js_ = ({
  props: ['id', 'color', 'opacity', 'speed', 'styles', 'transition'],
  data: function () {
    return {
      timers: {
        transform: null,
        rippleing: null
      },
      rippleing: false,
      baseSpeed: .5,
      coreStyle: {
        transform: 'scale(0)'
      }
    };
  },
  ready: function () {
    this.startRipple();
  },
  mounted: function () {
    this.startRipple();
  },
  beforeDestroy: function () {
    if (this.timers.transform) {
      clearTimeout(this.timers.transform);
      this.timers.transform = null;
    }

    if (this.timers.rippleing) {
      clearTimeout(this.timers.rippleing);
      this.timers.rippleing = null;
    }
  },
  computed: {
    computeSpeed: function () {
      return this.baseSpeed / this.speed;
    },
    computeCoreStyle: function () {
      return {
        'z-index': this.id,
        opacity: this.opacity,
        top: this.styles.top + 'px',
        left: this.styles.left + 'px',
        width: this.styles.size + 'px',
        height: this.styles.size + 'px',
        transform: this.coreStyle.transform,
        'background-color': this.color,
        'transition-duration': this.computeSpeed + 's, 0.4s',
        'transition-timing-function': this.transition + ', ease-out'
      };
    }
  },
  methods: {
    startRipple: function () {
      var _this = this;

      this.$nextTick(function () {
        _this.rippleing = true;
        _this.timers.transform = setTimeout(function () {
          _this.coreStyle.transform = 'scale(1)';
        }, 0);
        _this.timers.rippleing = setTimeout(function () {
          _this.rippleing = false;

          _this.$emit('end', _this.id);
        }, _this.computeSpeed * 1000);
      });
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Ripple/Core.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ripple_Corevue_type_script_lang_js_ = (Corevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Ripple/Core.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Ripple_Corevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Core.vue"
/* harmony default export */ var Core = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTooltip/BOTooltip.vue?vue&type=template&id=50a86c10&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BOSwitchbox',{attrs:{"path":_vm.path,"value":_vm.value1,"options":_vm.options1},on:{"change":_vm.change}}),_c('BOInput',{staticClass:"x4-margin-top",attrs:{"type":"text","path":_vm.path,"value":_vm.value2,"options":_vm.options2},on:{"change":_vm.change}}),(_vm.options2.patterns)?_c('BOPatterns',{attrs:{"patterns":_vm.options2.patterns}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOTooltip/BOTooltip.vue?vue&type=template&id=50a86c10&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTooltip/BOTooltip.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var BOTooltipvue_type_script_lang_js_ = ({
  props: ['path', 'value', 'options'],
  components: map["a" /* default */].components({
    BOSwitchbox: __webpack_require__(10),
    BOInput: __webpack_require__(4),
    BOPatterns: __webpack_require__(19)
  }),
  computed: map["a" /* default */].variables({
    value1: function () {
      return !!this.value;
    },
    value2: function () {
      return this.value || '';
    },
    options1: function () {
      return {
        label: 'Show tooltip'
      };
    },
    options2: function () {
      var options = {
        icon: 'text_fields',
        label: 'Tooltip ' + (this.options && this.options.patterns ? 'template' : 'value')
      };
      return Object.assign(options, this.options);
    }
  }),
  methods: map["a" /* default */].variables({
    change: function (_ref, _ref2) {
      var dispatch = _ref.dispatch;
      var value = _ref2.value;
      value = value === true ? this.options.default : value;
      dispatch('builder/option/change', {
        path: this.path,
        value: value
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOTooltip/BOTooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var BOTooltip_BOTooltipvue_type_script_lang_js_ = (BOTooltipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOTooltip/BOTooltip.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BOTooltip_BOTooltipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BOTooltip.vue"
/* harmony default export */ var BOTooltip = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Controls/Controls.vue?vue&type=template&id=719883f8&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BBGroup',{attrs:{"title":"Controls"}},[_vm._l((_vm.contrOrder),function(name){return (_vm.components[name])?[_c('Control',{attrs:{"name":name,"component":_vm.components[name]}})]:_vm._e()})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Controls/Controls.vue?vue&type=template&id=719883f8&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/src/assets/builder/components/Customizer/Controls/Controls.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Controlsvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    BBGroup: __webpack_require__(23),
    Control: __webpack_require__(73)
  }),
  computed: map["a" /* default */].variables({
    contrOrder: function (_ref) {
      var state = _ref.state;
      return {
        "coinTable": {
          "name": "coinTable",
          "title": "Coin Table",
          "contrOrder": ["coinTable", "fiatSelect", "perPageSelect", "searchInput", "coinTabs", "coinColumn", "lineChart", "periodSelect", "pagerBlock", "loader"],
          "valOrder": ["sort", "fiat", "perPage", "search", "coinTab", "period", "page"],
          "multiValues": ["coinTab", "period"],
          "hiddenValues": [],
          "scripts": ["chartjs"],
          "requests": ["coincapRates", "coincapAssets", "coincapAssetsMeta"]
        }
      }[state.type].contrOrder;
    },
    components: function (_ref2) {
      var state = _ref2.state;
      return {
        coinTable: __webpack_require__(72).default,
        fiatSelect: __webpack_require__(70).default,
        perPageSelect: __webpack_require__(69).default,
        searchInput: __webpack_require__(68).default,
        coinTabs: __webpack_require__(67).default,
        coinColumn: __webpack_require__(66).default,
        lineChart: __webpack_require__(65).default,
        periodSelect: __webpack_require__(63).default,
        pagerBlock: __webpack_require__(62).default,
        loader: __webpack_require__(61).default
      };
    }
  })
});
// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Controls/Controls.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_Controlsvue_type_script_lang_js_ = (Controlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/src/assets/builder/components/Customizer/Controls/Controls.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Controls_Controlsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Controls.vue"
/* harmony default export */ var Controls = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOLayout/layouts/full-featured/full-featured.vue?vue&type=template&id=54558a60&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-image"},[_c('Icon',{staticClass:"x4-icon",attrs:{"icon":"developer_board"}}),_c('Style',[_vm._v(".x4-image\n\n  .x4-icon\n    background-color: $color(primary, .16!)\n    border-radius: 50%\n    font-size: 28px\n    padding: 6px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOLayout/layouts/full-featured/full-featured.vue?vue&type=template&id=54558a60&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOLayout/layouts/full-featured/full-featured.vue?vue&type=script&lang=js&
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

/* harmony default export */ var full_featuredvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7)
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOLayout/layouts/full-featured/full-featured.vue?vue&type=script&lang=js&
 /* harmony default export */ var full_featured_full_featuredvue_type_script_lang_js_ = (full_featuredvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOLayout/layouts/full-featured/full-featured.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  full_featured_full_featuredvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "full-featured.vue"
/* harmony default export */ var full_featured = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/themes/InputMaterial/InputMaterial.vue?vue&type=template&id=79520554&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.is2,{tag:"div",attrs:{"options":_vm.options,"colors":_vm.colors,"scale":_vm.scale},on:{"focus":function($event){_vm.$emit('focus')}}},[_vm._t("icon",null,{slot:"icon"}),_vm._t("ddicon",null,{slot:"ddicon"}),_vm._t("label",null,{slot:"label"}),_vm._t("input",null,{slot:"input"}),_vm._t("menu",null,{slot:"menu"}),_c('div',{staticClass:"x4-lines",attrs:{"slot":"lines"},slot:"lines"},[_c('div',{staticClass:"x4-line1 x4-transition"}),_c('div',{staticClass:"x4-line2 x4-transition"})]),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-input.x4-theme-material\n  cursor: text\n  font-family: 'Roboto',sans-serif\n  font-size: $scale(14px)\n  font-weight: 400\n  height: $scale(56px)\n  line-height: 1.5\n\n  &.x4-type-textarea\n    height: $scale(104px)\n\n  &.x4-type-select\n    cursor: pointer\n\n  .x4-icon\n    float: left\n    color: $color(primary, .54)\n    font-size: $scale(24px)\n\n    &.x4-enter, &.x4-leave-to\n      opacity: 0\n\n  .x4-dd-icon\n    color: $color(primary, .54)\n    float: right\n    font-size: $scale(24px)\n\n  .x4-label\n    color: $color(primary, .54)\n    font-size: $scale(16px)\n    position: absolute\n\n  &.x4-focused .x4-label, &.x4-dirty .x4-label\n    font-size: $scale(12px)\n\n  &.x4-focused .x4-label\n    color: $color(accent)\n\n  .x4-input-wrapper\n    height: 100%\n    overflow: hidden\n    position: relative\n\n  &.x4-type-textarea .x4-input-wrapper\n    padding-bottom: $scale(6px)\n\n  &.x4-type-select .x4-input-wrapper\n    padding-right: 0\n\n  .x4-input, .x4-textarea\n    background-color: transparent\n    border: none\n    box-shadow: none\n    font-family: 'Roboto',sans-serif\n    outline: none\n    padding: 0\n    text-shadow: none\n    width: 100%\n\n  .x4-textarea\n    height: 100%\n    resize: none\n\n  .x4-input, .x4-textarea, .x4-select\n    color: $color(primary)\n    font-size: $scale(16px)\n    font-weight: 400\n    line-height: $scale(1.5)\n\n  .x4-lines\n    bottom: 0\n    left: 0\n    position: absolute\n    right: 0\n    z-index: 1\n\n    .x4-line1\n      background-color: $color(accent)\n      height: 2px\n      position: relative\n      transform: scaleX(0)\n      transform-origin: center center 0\n      z-index: 1\n\n    .x4-line2\n      background-color: $color(primary, .42)\n      height: 1px\n      margin-top: -1px\n\n  &:hover .x4-lines .x4-line2\n    background-color: $color(primary, .87)\n\n  &.x4-focused .x4-lines .x4-line1\n    transform: scaleX(1)\n\n  .x4-backdrop\n    bottom: 0\n    left: 0\n    position: fixed\n    right: 0\n    top: 0\n    z-index: 1000\n\n  .x4-menu\n    background-color: $color(inverted)\n    box-shadow: 0 5px 5px -3px $color(primary, .2), 0 8px 10px 1px $color(primary, .14), 0 3px 14px 2px $color(primary, .12)\n    left: 0\n    max-height: $scale(304px)\n    position: absolute\n    right: 0\n    top: 100%\n    z-index: 1001\n\n    &.x4-enter, &.x4-leave-to\n      max-height: 0\n\n    > .x4-inside\n      padding: $scale(8px) 0\n\n    .x4-option\n      color: $color(primary)\n      height: $scale(48px)\n      font-size: $scale(14px)\n      padding: $scale(14px) $scale(16px) 0\n\n      &:hover\n        background-color: $color(primary, .04)\n\n      &.x4-active\n        background-color: $color(primary, .06)\n\n  .x4-scrollable\n    overflow-y: auto\n\n    &::-webkit-scrollbar\n      height: 4px\n      width: 4px\n\n    &::-webkit-scrollbar-button\n      display: none\n      height: 0\n      width: 0\n\n    &::-webkit-scrollbar-corner\n      background-color: transparent\n\n    &::-webkit-scrollbar-thumb\n      background-clip: padding-box\n      background-color: $color(primary, .16)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputMaterial.vue?vue&type=template&id=79520554&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/themes/InputMaterial/InputMaterial.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//

/* harmony default export */ var InputMaterialvue_type_script_lang_js_ = ({
  props: ['is2', 'options', 'colors', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputMaterial.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputMaterial_InputMaterialvue_type_script_lang_js_ = (InputMaterialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputMaterial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  InputMaterial_InputMaterialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "InputMaterial.vue"
/* harmony default export */ var InputMaterial = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/themes/InputMaterial/InputFilled/InputFilled.vue?vue&type=template&id=5264e506&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3}},[_vm._t("lines"),_vm._t("icon"),_vm._t("ddicon"),_vm._t("label"),_vm._t("input"),_vm._t("menu"),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-input.x4-subtheme-filled\n  background-color: $color(primary, .04)\n  border-radius: $scale(4px) $scale(4px) 0 0\n\n  &:hover\n    background-color: $color(primary, .06)\n\n  &.x4-focused\n    background-color: $color(primary, .08)\n\n  .x4-icon\n    margin: $scale(16px) 0 0 $scale(15px)\n\n  .x4-dd-icon\n    margin: $scale(16px) $scale(4px) 0 0\n\n  .x4-label\n    left: $scale(48px)\n    right: $scale(16px)\n    top: $scale(17px)\n\n  &.x4-no-icon .x4-label\n    left: $scale(16px)\n\n  &.x4-focused .x4-label, &.x4-dirty .x4-label\n    right: $scale(8px)\n    top: $scale(7px)\n\n  .x4-input-wrapper\n    padding: $scale(26px) $scale(16px) 0 $scale(9px)\n\n  &.x4-no-icon .x4-input-wrapper\n    padding-left: $scale(16px)\n\n  &.x4-no-label .x4-input-wrapper\n    padding-top: $scale(17px)\n\n  &:hover .x4-back\n    background-color: $color(primary, .08)\n\n  &.x4-focused .x4-back\n    background-color: $color(primary, .04)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputFilled/InputFilled.vue?vue&type=template&id=5264e506&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/themes/InputMaterial/InputFilled/InputFilled.vue?vue&type=script&lang=js&
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

/* harmony default export */ var InputFilledvue_type_script_lang_js_ = ({
  props: ['options', 'colors', 'scale'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputFilled/InputFilled.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputFilled_InputFilledvue_type_script_lang_js_ = (InputFilledvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputFilled/InputFilled.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  InputFilled_InputFilledvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "InputFilled.vue"
/* harmony default export */ var InputFilled = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/themes/InputMaterial/InputOutlined/InputOutlined.vue?vue&type=template&id=0cecf008&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3}},[_c('div',{staticClass:"x4-borders"},[_c('div',{staticClass:"x4-border1 x4-transition"}),_c('div',{staticClass:"x4-border2 x4-transition"},[_c('div',{staticClass:"x4-shape1"}),_c('div',{staticClass:"x4-shape2"},[(!!_vm.options.label)?_c('div',{staticClass:"x4-plabel"},[_vm._v(_vm._s(_vm.options.label))]):_vm._e()]),_c('div',{staticClass:"x4-shape3"})])]),_vm._t("icon"),_vm._t("ddicon"),_vm._t("label"),_vm._t("input"),_vm._t("menu"),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-input.x4-subtheme-outlined\n\n  .x4-icon\n    margin: $scale(16px) 0 0 $scale(15px)\n\n  .x4-dd-icon\n    margin: $scale(16px) $scale(4px) 0 0\n\n  .x4-label\n    left: $scale(48px)\n    top: $scale(17px)\n\n  &.x4-no-icon .x4-label\n    left: $scale(16px)\n\n  &.x4-focused .x4-label, &.x4-dirty .x4-label\n    left: $scale(16px)\n    top: $scale(-9px)\n\n  .x4-input-wrapper\n    padding: $scale(17px) $scale(16px) 0 $scale(9px)\n\n  &.x4-no-icon .x4-input-wrapper\n    padding-left: $scale(16px)\n\n  .x4-borders\n    bottom: 0\n    left: 0\n    position: absolute\n    right: 0\n    top: 0\n\n    .x4-border1\n      border: 1px solid $color(primary, .24)\n      border-radius: $scale(4px)\n      bottom: 0\n      left: 0\n      opacity: 1\n      position: absolute\n      right: 0\n      top: 0\n\n    .x4-border2\n      bottom: 0\n      left: 0\n      opacity: 0\n      position: absolute\n      right: 0\n      top: 0\n\n      .x4-shape1\n        border: 1px solid $color(primary, .24)\n        border-right: none\n        border-radius: $scale(4px) 0 0 $scale(4px)\n        float: left\n        height: 100%\n        width: 10px\n\n      .x4-shape2\n        border-bottom: 1px solid $color(primary, .24)\n        float: left\n        height: 100%\n\n        .x4-plabel\n          font-size: $scale(12px)\n          margin: 0 $scale(6px)\n          overflow-x: hidden\n          text-overflow: ellipsis\n          visibility: hidden\n          white-space: nowrap\n\n      .x4-shape3\n        border: 1px solid $color(primary, .24)\n        border-left: none\n        border-radius: 0 $scale(4px) $scale(4px) 0\n        height: 100%\n        min-width: $scale(4px)\n        overflow: hidden\n\n  &:hover .x4-borders .x4-border1\n    border-color: $color(primary, .74)\n\n  &:hover .x4-borders .x4-border2\n    .x4-shape1, .x4-shape2, .x4-shape3\n      border-color: $color(primary, .74)\n\n  &.x4-focused .x4-borders .x4-border1, &.x4-dirty .x4-borders .x4-border1\n    opacity: 0\n\n  &.x4-focused .x4-borders .x4-border2, &.x4-dirty .x4-borders .x4-border2\n    opacity: 1\n\n  &.x4-focused .x4-borders .x4-border2\n    .x4-shape1, .x4-shape2, .x4-shape3\n      border-color: $color(accent)\n      border-width: 2px\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputOutlined/InputOutlined.vue?vue&type=template&id=0cecf008&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/themes/InputMaterial/InputOutlined/InputOutlined.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//

/* harmony default export */ var InputOutlinedvue_type_script_lang_js_ = ({
  props: ['options', 'colors', 'scale'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputOutlined/InputOutlined.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputOutlined_InputOutlinedvue_type_script_lang_js_ = (InputOutlinedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputOutlined/InputOutlined.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  InputOutlined_InputOutlinedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "InputOutlined.vue"
/* harmony default export */ var InputOutlined = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/themes/InputMaterial/InputStandard/InputStandard.vue?vue&type=template&id=c9aae934&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3}},[_vm._t("lines"),_vm._t("icon"),_vm._t("ddicon"),_vm._t("label"),_vm._t("input"),_vm._t("menu"),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-input.x4-subtheme-standard\n\n  .x4-icon\n    margin: $scale(16px) 0 0\n\n  .x4-dd-icon\n    margin: $scale(16px) $scale(4px) 0 0\n\n  .x4-label\n    left: $scale(33px)\n    right: 0\n    top: $scale(17px)\n\n  &.x4-no-icon .x4-label\n    left: 0\n\n  &.x4-focused .x4-label, &.x4-dirty .x4-label\n    top: $scale(7px)\n\n  .x4-input-wrapper\n    padding: $scale(26px) $scale(16px) 0 $scale(9px)\n\n  &.x4-no-icon .x4-input-wrapper\n    padding-left: 0\n\n  &.x4-no-label .x4-input-wrapper\n    padding-top: $scale(17px)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputStandard/InputStandard.vue?vue&type=template&id=c9aae934&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Input/themes/InputMaterial/InputStandard/InputStandard.vue?vue&type=script&lang=js&
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

/* harmony default export */ var InputStandardvue_type_script_lang_js_ = ({
  props: ['options', 'colors', 'scale'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputStandard/InputStandard.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputStandard_InputStandardvue_type_script_lang_js_ = (InputStandardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Input/themes/InputMaterial/InputStandard/InputStandard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  InputStandard_InputStandardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "InputStandard.vue"
/* harmony default export */ var InputStandard = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsMaterial.vue?vue&type=template&id=26693ea8&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.is2,{tag:"div",attrs:{"value":_vm.value,"menuOptions":_vm.menuOptions,"colors":_vm.colors,"scale":_vm.scale},on:{"change":_vm.change},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var option = ref.option;
return [_vm._t("label",null,{option:option})]}},{key:"shape",fn:function(ref){
var option = ref.option;
return _c('div',{staticClass:"x4-shape"},[_c('div',{staticClass:"x4-shape1 x4-transition"}),_c('div',{staticClass:"x4-shape2 x4-transition"})])}}])},[_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-radio-buttons.x4-theme-material\n  cursor: pointer\n  font-family: 'Roboto',sans-serif\n  font-size: $scale(14px)\n  font-weight: 400\n  line-height: 1.5\n\n  .x4-radio-button\n    position: relative\n\n    &.x4-active .x4-shape\n\n      .x4-shape1\n        border-color: $color(accent)\n\n      .x4-shape2\n        background-color: $color(accent)\n\n  .x4-label\n    color: $color(primary)\n    font-size: $scale(16px)\n    overflow: hidden\n\n  .x4-shape\n    border-radius: $scale(10px)\n    float: left\n    height: $scale(20px)\n    position: relative\n    width: $scale(20px)\n\n    .x4-shape1\n      border: $scale(2px) solid $color(primary, .54)\n      border-radius: $scale(10px)\n      bottom: 0\n      left: 0\n      position: absolute\n      right: 0\n      top: 0\n\n    .x4-shape2\n      border-radius: $scale(5px)\n      height: $scale(10px)\n      left: $scale(5px)\n      position: absolute\n      top: $scale(5px)\n      width: $scale(10px)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsMaterial.vue?vue&type=template&id=26693ea8&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsMaterial.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var RadioButtonsMaterialvue_type_script_lang_js_ = ({
  props: ['is2', 'value', 'menuOptions', 'colors', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2)
  }),
  methods: {
    change: function (option) {
      this.$emit('change', option);
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsMaterial.vue?vue&type=script&lang=js&
 /* harmony default export */ var RadioButtonsMaterial_RadioButtonsMaterialvue_type_script_lang_js_ = (RadioButtonsMaterialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsMaterial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  RadioButtonsMaterial_RadioButtonsMaterialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "RadioButtonsMaterial.vue"
/* harmony default export */ var RadioButtonsMaterial = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsDefault/RadioButtonsDefault.vue?vue&type=template&id=9670d040&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3}},[_vm._l((_vm.menuOptions),function(option){return _c('div',{staticClass:"x4-radio-button x4-clearfix",class:{ 'x4-active': option === _vm.value },on:{"click":function($event){_vm.change(option)}}},[_vm._t("shape",null,{option:option}),_vm._t("label",null,{option:option})],2)}),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-radio-buttons.x4-subtheme-default\n\n  .x4-shape\n    margin-top: $scale(2px)\n    margin-left: $scale(14px)\n\n  .x4-label\n    padding-left: $scale(14px)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsDefault/RadioButtonsDefault.vue?vue&type=template&id=9670d040&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsDefault/RadioButtonsDefault.vue?vue&type=script&lang=js&
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

/* harmony default export */ var RadioButtonsDefaultvue_type_script_lang_js_ = ({
  props: ['value', 'menuOptions', 'colors', 'scale'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  }),
  methods: {
    change: function (option) {
      this.$emit('change', option);
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsDefault/RadioButtonsDefault.vue?vue&type=script&lang=js&
 /* harmony default export */ var RadioButtonsDefault_RadioButtonsDefaultvue_type_script_lang_js_ = (RadioButtonsDefaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/RadioButtons/themes/RadioButtonsMaterial/RadioButtonsDefault/RadioButtonsDefault.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  RadioButtonsDefault_RadioButtonsDefaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "RadioButtonsDefault.vue"
/* harmony default export */ var RadioButtonsDefault = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/themes/material/standard/standard.vue?vue&type=template&id=7e8aaefe&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-image"},[_c('div',{staticClass:"x4-inside"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 192"}},[_c('path',{attrs:{"fill":"#bdbdbd","d":"M29 29h134v134H29z"}}),_vm._v(" "),_c('path',{attrs:{"fill":"#fff","d":"M163 29L96 163 29 29h134z"}})])]),_c('Style',[_vm._v(".x4-image\n  padding: 6px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/standard/standard.vue?vue&type=template&id=7e8aaefe&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/themes/material/standard/standard.vue?vue&type=script&lang=js&
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

/* harmony default export */ var standardvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/standard/standard.vue?vue&type=script&lang=js&
 /* harmony default export */ var standard_standardvue_type_script_lang_js_ = (standardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/standard/standard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  standard_standardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "standard.vue"
/* harmony default export */ var standard = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/themes/material/outlined/outlined.vue?vue&type=template&id=05d5db03&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-image"},[_c('div',{staticClass:"x4-inside"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 192"}},[_c('path',{attrs:{"fill":"#bdbdbd","d":"M29 29h134v134H29z"}}),_vm._v(" "),_c('path',{attrs:{"fill":"#fff","d":"M163 29L96 163 29 29h134z"}})])]),_c('Style',[_vm._v(".x4-image\n  border: 2px solid $color(primary, .16!)\n  border-radius: 50%\n  padding: 6px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/outlined/outlined.vue?vue&type=template&id=05d5db03&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/themes/material/outlined/outlined.vue?vue&type=script&lang=js&
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

/* harmony default export */ var outlinedvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/outlined/outlined.vue?vue&type=script&lang=js&
 /* harmony default export */ var outlined_outlinedvue_type_script_lang_js_ = (outlinedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/outlined/outlined.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  outlined_outlinedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "outlined.vue"
/* harmony default export */ var outlined = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/themes/material/default/default.vue?vue&type=template&id=9eea30ec&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"x4-image"},[_c('div',{staticClass:"x4-inside"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 192"}},[_c('path',{attrs:{"fill":"#bdbdbd","d":"M29 29h134v134H29z"}}),_vm._v(" "),_c('path',{attrs:{"fill":"#fff","d":"M163 29L96 163 29 29h134z"}})])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/default/default.vue?vue&type=template&id=9eea30ec&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/themes/material/default/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var defaultvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/default/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var default_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/default/default.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  default_defaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "default.vue"
/* harmony default export */ var default_default = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/themes/material/filled/filled.vue?vue&type=template&id=71755ac3&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{staticClass:"x4-image"},[_c('div',{staticClass:"x4-inside"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 192"}},[_c('path',{attrs:{"fill":"#bdbdbd","d":"M29 29h134v134H29z"}}),_vm._v(" "),_c('path',{attrs:{"fill":"#fff","d":"M163 29L96 163 29 29h134z"}})])]),_c('Style',[_vm._v(".x4-image\n  background-color: $color(primary, .16!)\n  border-radius: 50%\n  padding: 6px\n")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/filled/filled.vue?vue&type=template&id=71755ac3&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOTheme/themes/material/filled/filled.vue?vue&type=script&lang=js&
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

/* harmony default export */ var filledvue_type_script_lang_js_ = ({
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/filled/filled.vue?vue&type=script&lang=js&
 /* harmony default export */ var filled_filledvue_type_script_lang_js_ = (filledvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOTheme/themes/material/filled/filled.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  filled_filledvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "filled.vue"
/* harmony default export */ var filled = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInputsList/SortableList/SortableList.vue?vue&type=template&id=f4736f16&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{class:_vm.baseClass},[_vm._l((_vm.items),function(item,index){return _c('div',{key:item[1],staticClass:"x4-list-item",attrs:{"data-id":index}},[_c('Icon',{staticClass:"x4-move x4-float-left",attrs:{"icon":"unfold_more"}}),(_vm.addremove !== false)?_c('Icon',{staticClass:"x4-remove x4-float-right",attrs:{"icon":"clear"},nativeOn:{"click":function($event){_vm.remove({ index: index })}}}):_vm._e(),_c('div',{staticClass:"x4-input-group"},[(_vm.addremove !== false)?_c('BOInput',{attrs:{"type":_vm.type,"value":item[0].value,"options":_vm.options1},on:{"change":function($event){_vm.change1.call(this, arguments[0], { index: index })}}}):_vm._e(),_c('BOInput',{attrs:{"value":item[0].title,"options":_vm.options2},on:{"change":function($event){_vm.change2.call(this, arguments[0], { index: index })}}})],1)],1)}),_c('Style',[_vm._v(".x4-sortable-list\n  \n  .x4-sortable-ghost\n    opacity: 0\n\n  .x4-move\n    cursor: move\n    font-size: 24px\n    margin: 30px 4px 0 -8px\n    user-select: none\n\n  .x4-remove\n    cursor: pointer\n    font-size: 18px\n    margin: 33px -8px 0 4px\n\n  .x4-input-group\n    margin: 0 14px 8px 20px\n\n  &.x4-no-remove\n\n    .x4-move\n      margin-top: 9px\n\n    .x4-input-group\n      margin-right: 0\n      margin-bottom: 0\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/bui/options/BOInputsList/SortableList/SortableList.vue?vue&type=template&id=f4736f16&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/bui/options/BOInputsList/SortableList/SortableList.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SortableListvue_type_script_lang_js_ = ({
  props: ['type', 'items', 'options', 'addremove'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2),
    Icon: __webpack_require__(7),
    BOInput: __webpack_require__(4)
  }),
  mounted: function () {
    var self = this;
    this.$store.getters['helpers/items/sortable']({
      $el: this.$el,
      options: {
        handle: '.x4-move',
        draggable: '.x4-list-item',
        onUpdate: function (event) {
          var items = this.toArray().map(function (index) {
            return self.items[index];
          });
          self.$emit('change', {
            op: 'replace',
            items: items
          });
        }
      }
    });
  },
  computed: map["a" /* default */].variables({
    baseClass: function () {
      return {
        'x4-sortable-list': true,
        'x4-no-remove': this.addremove === false
      };
    },
    options1: function () {
      var options = {
        label: 'Item Value',
        icon: 'filter_center_focus'
      };
      return Object.assign(options, this.options);
    },
    options2: function () {
      return {
        label: 'Item Title',
        icon: 'title'
      };
    }
  }),
  methods: map["a" /* default */].variables({
    change1: function (context, _ref, _ref2) {
      var value = _ref.value;
      var index = _ref2.index;
      this.$emit('change', {
        op: 'set',
        index: index,
        name: 'value',
        value: value
      });
    },
    change2: function (context, _ref3, _ref4) {
      var value = _ref3.value;
      var index = _ref4.index;
      this.$emit('change', {
        op: 'set',
        index: index,
        name: 'title',
        value: value
      });
    },
    remove: function (context, _ref5) {
      var index = _ref5.index;
      this.$emit('change', {
        op: 'splice',
        index: index
      });
    }
  })
});
// CONCATENATED MODULE: ./common/components/bui/options/BOInputsList/SortableList/SortableList.vue?vue&type=script&lang=js&
 /* harmony default export */ var SortableList_SortableListvue_type_script_lang_js_ = (SortableListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/bui/options/BOInputsList/SortableList/SortableList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SortableList_SortableListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "SortableList.vue"
/* harmony default export */ var SortableList = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesDefault/CheckboxesDefault.vue?vue&type=template&id=378486e6&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3}},[_vm._l((_vm.menuOptions),function(option){return _c('div',{staticClass:"x4-checkbox x4-clearfix",class:{ 'x4-active': !!_vm.value[option] },on:{"click":function($event){_vm.change(option)}}},[_vm._t("shape",null,{option:option}),_vm._t("label",null,{option:option})],2)}),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-checkboxes.x4-subtheme-default\n\n  .x4-shape\n    margin-top: $scale(2px)\n    margin-left: $scale(14px)\n\n  .x4-label\n    padding-left: $scale(14px)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesDefault/CheckboxesDefault.vue?vue&type=template&id=378486e6&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesDefault/CheckboxesDefault.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var CheckboxesDefaultvue_type_script_lang_js_ = ({
  props: ['value', 'menuOptions', 'colors', 'scale'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  }),
  methods: {
    change: function (option) {
      this.$emit('change', option);
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesDefault/CheckboxesDefault.vue?vue&type=script&lang=js&
 /* harmony default export */ var CheckboxesDefault_CheckboxesDefaultvue_type_script_lang_js_ = (CheckboxesDefaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesDefault/CheckboxesDefault.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CheckboxesDefault_CheckboxesDefaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CheckboxesDefault.vue"
/* harmony default export */ var CheckboxesDefault = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxDefault/SwitchboxDefault.vue?vue&type=template&id=4dd64adc&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('DIV',{attrs:{"level":3}},[_vm._t("shape"),_vm._t("label"),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-switchbox.x4-subtheme-default\n\n  .x4-shape\n    margin-top: $scale(1px)\n    margin-left: $scale(7px)\n\n  .x4-label\n    padding-left: $scale(7px)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxDefault/SwitchboxDefault.vue?vue&type=template&id=4dd64adc&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxDefault/SwitchboxDefault.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SwitchboxDefaultvue_type_script_lang_js_ = ({
  props: ['colors', 'scale'],
  components: map["a" /* default */].components({
    DIV: __webpack_require__(3),
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxDefault/SwitchboxDefault.vue?vue&type=script&lang=js&
 /* harmony default export */ var SwitchboxDefault_SwitchboxDefaultvue_type_script_lang_js_ = (SwitchboxDefaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxDefault/SwitchboxDefault.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SwitchboxDefault_SwitchboxDefaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "SwitchboxDefault.vue"
/* harmony default export */ var SwitchboxDefault = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesMaterial.vue?vue&type=template&id=07772090&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.is2,{tag:"div",attrs:{"value":_vm.value,"menuOptions":_vm.menuOptions,"colors":_vm.colors,"scale":_vm.scale},on:{"change":_vm.change},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var option = ref.option;
return [_vm._t("label",null,{option:option})]}},{key:"shape",fn:function(ref){
var option = ref.option;
return _c('div',{staticClass:"x4-shape x4-transition"},[_c('div',{staticClass:"x4-shape1 x4-transition"}),_c('div',{staticClass:"x4-shape2 x4-transition"})])}}])},[_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-checkboxes.x4-theme-material\n  cursor: pointer\n\n  .x4-checkbox\n    position: relative\n\n    &.x4-active .x4-shape\n      background-color: $color(accent)\n\n      .x4-shape1\n        border-color: $color(accent)\n\n      .x4-shape2\n        opacity: 1\n\n  .x4-label\n    color: $color(primary)\n    font-size: $scale(16px)\n    overflow: hidden\n\n  .x4-shape\n    border-radius: $scale(2px)\n    float: left\n    height: $scale(20px)\n    position: relative\n    width: $scale(20px)\n\n    .x4-shape1\n      border: 2px solid $color(primary, .54)\n      border-radius: $scale(4px)\n      bottom: 0\n      left: 0\n      position: absolute\n      right: 0\n      top: 0\n\n    .x4-shape2\n      border-left: $scale(2px) solid $color(inverted)\n      border-bottom: $scale(2px) solid $color(inverted)\n      height: $scale(6px)\n      left: $scale(4px)\n      opacity: 0\n      position: absolute\n      top: $scale(6px)\n      transform: rotate(-45deg)\n      width: $scale(12px)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesMaterial.vue?vue&type=template&id=07772090&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesMaterial.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var CheckboxesMaterialvue_type_script_lang_js_ = ({
  props: ['is2', 'value', 'menuOptions', 'colors', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2)
  }),
  methods: {
    change: function (option) {
      this.$emit('change', option);
    }
  }
});
// CONCATENATED MODULE: ./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesMaterial.vue?vue&type=script&lang=js&
 /* harmony default export */ var CheckboxesMaterial_CheckboxesMaterialvue_type_script_lang_js_ = (CheckboxesMaterialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Checkboxes/themes/CheckboxesMaterial/CheckboxesMaterial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CheckboxesMaterial_CheckboxesMaterialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CheckboxesMaterial.vue"
/* harmony default export */ var CheckboxesMaterial = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--3-0!./node_modules/string-replace-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxMaterial.vue?vue&type=template&id=090c9938&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.is2,{tag:"div",attrs:{"colors":_vm.colors,"scale":_vm.scale}},[_vm._t("label",null,{slot:"label"}),_c('div',{staticClass:"x4-shape",attrs:{"slot":"shape"},slot:"shape"},[_c('div',{staticClass:"x4-shape1 x4-transition"}),_c('div',{staticClass:"x4-shape2 x4-transition"})]),_vm._t("default"),_c('Style',{attrs:{"colors":_vm.colors}},[_vm._v(".x4-ui-switchbox.x4-theme-material\n  cursor: pointer\n\n  .x4-label\n    color: $color(primary)\n    font-size: $scale(16px)\n    overflow: hidden\n\n  .x4-shape\n    float: left\n    height: $scale(20px)\n    position: relative\n    vertical-align: top\n    width: $scale(34px)\n\n    .x4-shape1\n      background-color: $color(primary, .32)\n      border-radius: $scale(7px)\n      height: $scale(14px)\n      left: 0\n      position: absolute\n      right: 0\n      top: $scale(3px)\n\n    .x4-shape2\n      background-color: $color(inverted)\n      border-radius: $scale(10px)\n      box-shadow: 0 3px 1px -2px $color(primary, .2), 0 2px 2px 0 $color(primary, .14), 0 1px 5px 0 $color(primary, .12)\n      height: $scale(20px)\n      left: 0\n      position: absolute\n      top: 0\n      width: $scale(20px)\n\n  &.x4-active .x4-shape .x4-shape1\n    background-color: $color(accent, 0.48)\n\n  &.x4-active .x4-shape .x4-shape2\n    background-color: $color(accent)\n    left: $scale(14px)\n")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxMaterial.vue?vue&type=template&id=090c9938&lang=pug&

// EXTERNAL MODULE: ./common/bootstrap/map.js
var map = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/string-replace-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--2-1!./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxMaterial.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SwitchboxMaterialvue_type_script_lang_js_ = ({
  props: ['is2', 'colors', 'scale'],
  components: map["a" /* default */].components({
    Style: __webpack_require__(2)
  })
});
// CONCATENATED MODULE: ./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxMaterial.vue?vue&type=script&lang=js&
 /* harmony default export */ var SwitchboxMaterial_SwitchboxMaterialvue_type_script_lang_js_ = (SwitchboxMaterialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./common/components/ui/Switchbox/themes/SwitchboxMaterial/SwitchboxMaterial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SwitchboxMaterial_SwitchboxMaterialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "SwitchboxMaterial.vue"
/* harmony default export */ var SwitchboxMaterial = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);