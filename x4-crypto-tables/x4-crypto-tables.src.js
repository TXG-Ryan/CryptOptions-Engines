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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  var userAgent = window.navigator.userAgent;
  window.isEdge = userAgent.indexOf('Edge/') !== -1;
  window.isIE11 = userAgent.indexOf('Trident/') !== -1;
  window.isIE = userAgent.indexOf('MSIE ') !== -1 || window.isIE11;
  window.isFirefox = userAgent.indexOf('Firefox') !== -1;
  var globName = 'X4CryptoTables';
  var x4wp = window.x4wp = window.x4wp || {
    styles: {},
    scripts: {},
    requests: {},
    plugins: {},
    builders: {}
  };
  var script = document.querySelector('script[data-entry="x4-crypto-tables' + ( false ? undefined : '') + '"]');

  if (!script) {
    return;
  }

  var x4plugin = window[globName] = window[globName] || [];
  x4wp.plugins[globName] = x4plugin;

  if (script.dataset.vcEnabled !== undefined) {
    x4wp.builders[globName] = x4wp.builders[globName] || {};
  }

  x4plugin.version = '2.1.4';
  var ignored = script.dataset.ignore ? script.dataset.ignore.split(',') : [];
  var required = {
    styles: {
      "loader": {
        "src": "./common/src/assets/loader/loader.js",
        "dst": "./x4-crypto-tables/x4-crypto-tables.js",
        "styles": [["roboto", "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"], ["material-icons", "https://fonts.googleapis.com/icon?family=Material+Icons"]],
        "scripts": [["ie:es6promise", "https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min.js"], ["vue", "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.runtime.min.js"], ["vuex", "https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js"], ["b:dr:sortable", "https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.6.0/Sortable.min.js"], ["chartjs", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"], "/widget.js", "b:dr:/builder.js"],
        "requests": [["coincapRates", {
          "method": "GET",
          "url": "https://api.coincap.io/v2/rates?limit=2000"
        }], ["coincapAssets", {
          "method": "GET",
          "url": "https://api.coincap.io/v2/assets?limit=2000"
        }], ["coincapAssetsMeta", {
          "method": "POST",
          "url": "https://graphql.coincap.io",
          "body": {
            "query": "query{assets(first:2000,sort:rank,direction:ASC){edges{node{id,website,explorer}}}}"
          }
        }]]
      },
      "main": {
        "src": "./common/src/assets/main/main.js",
        "dst": "./x4-crypto-tables/assets/widget.js",
        "css": {
          "dst": "./x4-crypto-tables/assets/widget.css"
        }
      },
      "builder": {
        "src": "./common/src/assets/builder/builder.js",
        "dst": "./x4-crypto-tables/assets/builder.js"
      },
      "website": {
        "src": "./common/website/assets/website.js",
        "dst": "./website/assets/website.js",
        "html": {
          "src": "./common/website/website.jade",
          "dst": "./website/website.html"
        }
      },
      "documentation": {
        "src": "./common/documentation/assets/documentation.js",
        "dst": "./documentation/assets/documentation.js",
        "html": {
          "src": "./common/documentation/documentation.jade",
          "dst": "./documentation/documentation.html"
        }
      },
      "changelog": {
        "src": "./common/changelog/changelog.js",
        "dst": "./changelog/changelog.js",
        "html": {
          "src": "./common/changelog/changelog.jade",
          "dst": "./changelog/changelog.html"
        }
      },
      "examples": {
        "src": "./common/examples/assets/examples.js",
        "dst": "./examples/assets/examples.js",
        "html": {
          "src": "./common/examples/examples.jade",
          "dst": "./examples/examples.html"
        }
      }
    }['loader'].styles,
    scripts: {
      "loader": {
        "src": "./common/src/assets/loader/loader.js",
        "dst": "./x4-crypto-tables/x4-crypto-tables.js",
        "styles": [["roboto", "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"], ["material-icons", "https://fonts.googleapis.com/icon?family=Material+Icons"]],
        "scripts": [["ie:es6promise", "https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min.js"], ["vue", "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.runtime.min.js"], ["vuex", "https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js"], ["b:dr:sortable", "https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.6.0/Sortable.min.js"], ["chartjs", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"], "/widget.js", "b:dr:/builder.js"],
        "requests": [["coincapRates", {
          "method": "GET",
          "url": "https://api.coincap.io/v2/rates?limit=2000"
        }], ["coincapAssets", {
          "method": "GET",
          "url": "https://api.coincap.io/v2/assets?limit=2000"
        }], ["coincapAssetsMeta", {
          "method": "POST",
          "url": "https://graphql.coincap.io",
          "body": {
            "query": "query{assets(first:2000,sort:rank,direction:ASC){edges{node{id,website,explorer}}}}"
          }
        }]]
      },
      "main": {
        "src": "./common/src/assets/main/main.js",
        "dst": "./x4-crypto-tables/assets/widget.js",
        "css": {
          "dst": "./x4-crypto-tables/assets/widget.css"
        }
      },
      "builder": {
        "src": "./common/src/assets/builder/builder.js",
        "dst": "./x4-crypto-tables/assets/builder.js"
      },
      "website": {
        "src": "./common/website/assets/website.js",
        "dst": "./website/assets/website.js",
        "html": {
          "src": "./common/website/website.jade",
          "dst": "./website/website.html"
        }
      },
      "documentation": {
        "src": "./common/documentation/assets/documentation.js",
        "dst": "./documentation/assets/documentation.js",
        "html": {
          "src": "./common/documentation/documentation.jade",
          "dst": "./documentation/documentation.html"
        }
      },
      "changelog": {
        "src": "./common/changelog/changelog.js",
        "dst": "./changelog/changelog.js",
        "html": {
          "src": "./common/changelog/changelog.jade",
          "dst": "./changelog/changelog.html"
        }
      },
      "examples": {
        "src": "./common/examples/assets/examples.js",
        "dst": "./examples/assets/examples.js",
        "html": {
          "src": "./common/examples/examples.jade",
          "dst": "./examples/examples.html"
        }
      }
    }['loader'].scripts,
    requests: {
      "loader": {
        "src": "./common/src/assets/loader/loader.js",
        "dst": "./x4-crypto-tables/x4-crypto-tables.js",
        "styles": [["roboto", "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"], ["material-icons", "https://fonts.googleapis.com/icon?family=Material+Icons"]],
        "scripts": [["ie:es6promise", "https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min.js"], ["vue", "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.runtime.min.js"], ["vuex", "https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js"], ["b:dr:sortable", "https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.6.0/Sortable.min.js"], ["chartjs", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"], "/widget.js", "b:dr:/builder.js"],
        "requests": [["coincapRates", {
          "method": "GET",
          "url": "https://api.coincap.io/v2/rates?limit=2000"
        }], ["coincapAssets", {
          "method": "GET",
          "url": "https://api.coincap.io/v2/assets?limit=2000"
        }], ["coincapAssetsMeta", {
          "method": "POST",
          "url": "https://graphql.coincap.io",
          "body": {
            "query": "query{assets(first:2000,sort:rank,direction:ASC){edges{node{id,website,explorer}}}}"
          }
        }]]
      },
      "main": {
        "src": "./common/src/assets/main/main.js",
        "dst": "./x4-crypto-tables/assets/widget.js",
        "css": {
          "dst": "./x4-crypto-tables/assets/widget.css"
        }
      },
      "builder": {
        "src": "./common/src/assets/builder/builder.js",
        "dst": "./x4-crypto-tables/assets/builder.js"
      },
      "website": {
        "src": "./common/website/assets/website.js",
        "dst": "./website/assets/website.js",
        "html": {
          "src": "./common/website/website.jade",
          "dst": "./website/website.html"
        }
      },
      "documentation": {
        "src": "./common/documentation/assets/documentation.js",
        "dst": "./documentation/assets/documentation.js",
        "html": {
          "src": "./common/documentation/documentation.jade",
          "dst": "./documentation/documentation.html"
        }
      },
      "changelog": {
        "src": "./common/changelog/changelog.js",
        "dst": "./changelog/changelog.js",
        "html": {
          "src": "./common/changelog/changelog.jade",
          "dst": "./changelog/changelog.html"
        }
      },
      "examples": {
        "src": "./common/examples/assets/examples.js",
        "dst": "./examples/assets/examples.js",
        "html": {
          "src": "./common/examples/examples.jade",
          "dst": "./examples/examples.html"
        }
      }
    }['loader'].requests
  };
  var connect = {
    styles: [],
    scripts: [],
    requests: [],
    handlers: {
      styles: function (style) {
        var $style = document.createElement('link');
        $style.setAttribute('rel', 'stylesheet');

        if (style.name) {
          $style.setAttribute('data-name', style.name);
        }

        $style.setAttribute('href', style.value);
        document.head.appendChild($style);
      },
      scripts: function (script) {
        var $script = document.createElement('script');
        $script.setAttribute('type', 'text/javascript');

        if (script.name) {
          $script.setAttribute('data-name', script.name);
        }

        $script.setAttribute('src', script.value);
        $script.async = true;
        document.head.appendChild($script);
      },
      requests: function (request) {
        var _request$value = request.value,
            url = _request$value.url,
            method = _request$value.method,
            headers = _request$value.headers,
            body = _request$value.body;
        var name = request.name;
        method = method ? method.toUpperCase() : 'GET';
        headers = headers || {};
        body = body || {};

        if (method === 'GET' || method === 'POST') {
          var xmlHttp = new XMLHttpRequest();
          x4wp.requests[name] = {
            xmlHttp: xmlHttp,
            callbacks: [],
            ready: false,
            parsed: false,
            lastTime: new Date().getTime()
          };
          xmlHttp.open(method, url, true);

          for (var aname in headers) {
            xmlHttp.setRequestHeader(aname, headers[aname]);
          }

          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
              x4wp.requests[name].ready = true;
              var callbacks = x4wp.requests[name].callbacks;
              x4wp.requests[name].callbacks = [];
              callbacks.forEach(function (callback) {
                return callback(xmlHttp);
              });
            }
          };

          if (method === 'POST') {
            xmlHttp.setRequestHeader('Content-Type', 'application/json');
            xmlHttp.send(JSON.stringify(body));
          } else {
            xmlHttp.send();
          }
        }
        /*
              if (method === 'WS') {
                let socket = new WebSocket(url)
        
                x4wp.requests[name] = {
                  callbacks: [],
                  socket,
                }
        
                socket.onmessage = event => {
                  x4wp.requests[name].callbacks.forEach(callback => callback({ resp: event.data }))
                }
              }
        */

      }
    }
  };

  var _loop = function (atype) {
    if (!required[atype]) {
      return "continue";
    }

    required[atype].forEach(function (item) {
      var mods,
          name,
          value = null;

      if (Array.isArray(item)) {
        mods = item[0].split(':');
        name = mods.pop();
        value = item[1];
      } else {
        mods = item.split(':');
        value = mods.pop();
        name = '';

        if (true) {
          value = '/assets' + value;
        }

        value = script.getAttribute('src').replace(/\/[^/?]+(\?.+)?$/, value + '$1');
      }

      if (ignored.indexOf(name) !== -1) {
        return;
      }

      if (mods.indexOf('ie') !== -1 && !window.isIE) {
        return;
      }

      if (mods.indexOf('b') !== -1 && script.dataset.vcEnabled === undefined) {
        return;
      }

      if (name) {
        if (x4wp[atype][name]) {
          return;
        }

        x4wp[atype][name] = value;
      }

      var values = !Array.isArray(value) ? [value] : value;
      values.forEach(function (value) {
        connect[atype].push({
          mods: mods,
          name: name,
          value: value
        });
      });
    });
  };

  for (var atype in required) {
    var _ret = _loop(atype);

    if (_ret === "continue") continue;
  }

  var _loop2 = function (atype) {
    connect[atype].forEach(function (entity) {
      if (entity.mods.indexOf('dr') !== -1 && document.readyState !== 'interactive' && document.readyState !== 'complete') {
        document.addEventListener('DOMContentLoaded', function () {
          connect.handlers[atype](entity);
        });
      } else {
        connect.handlers[atype](entity);
      }
    });
  };

  for (var atype in required) {
    _loop2(atype);
  }
})();

if (false) { var interval; }

/***/ })
/******/ ]);