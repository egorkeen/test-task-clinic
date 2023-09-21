// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/utils/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleButton = exports.textInput = exports.sliderLine = exports.slideWidth = exports.showPopupButton = exports.prevButton = exports.popup = exports.pagesElement = exports.nextButton = exports.navigation = exports.modalForm = exports.emailInput = exports.closePopupButton = void 0;
var navigation = document.querySelector('.navigation');
exports.navigation = navigation;
var toggleButton = document.getElementById('header__toggle');
exports.toggleButton = toggleButton;
var sliderLine = document.querySelector('.services__slider-line');
exports.sliderLine = sliderLine;
var slideWidth = document.querySelector('.slide').offsetWidth;
exports.slideWidth = slideWidth;
var nextButton = document.querySelector('.services__button_next');
exports.nextButton = nextButton;
var prevButton = document.querySelector('.services__button_prev');
exports.prevButton = prevButton;
var pagesElement = document.querySelector('.services__pages');
exports.pagesElement = pagesElement;
var showPopupButton = document.getElementById('show-popup');
exports.showPopupButton = showPopupButton;
var popup = document.getElementById('popup');
exports.popup = popup;
var closePopupButton = document.getElementById('close-popup');
exports.closePopupButton = closePopupButton;
var modalForm = document.forms['modal-form'];
exports.modalForm = modalForm;
var textInput = document.getElementById('message');
exports.textInput = textInput;
var emailInput = document.getElementById('email');
exports.emailInput = emailInput;
},{}],"scripts/utils/Api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(url, headers) {
    _classCallCheck(this, Api);
    this._url = url;
    this._headers = headers;
  }

  // проверить статус запроса
  _createClass(Api, [{
    key: "_checkStatus",
    value: function _checkStatus(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject("".concat(res.status, " ").concat(res.statusText));
      }
      ;
    }
  }, {
    key: "sendMessage",
    value:
    // пример написания запроса к серверу
    function sendMessage(userEmail, message) {
      return fetch(this._url + '/messages', {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          userEmail: userEmail,
          message: message
        })
      }).then(this._checkStatus);
    }
  }]);
  return Api;
}();
;

// здесь мы создаем api с адресом сервера
var api = new Api('https://your-backend.ru');
var _default = api;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _constants = require("./scripts/utils/constants");
var _Api = _interopRequireDefault(require("./scripts/utils/Api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var offset = 0;
var currentPage = 1;
function updatePageIndicator() {
  _constants.pagesElement.textContent = currentPage;
}

// закрытие попапа
function closePopup() {
  _constants.popup.classList.remove('popup_active');
}

// закрытие попапа по кнопке esc
function handleEscClose(event) {
  if (event.key === 'Escape') {
    closePopup();
  }
  ;
}
;

// закрытие попапа по клику вне формы
_constants.popup.addEventListener('mousedown', function (event) {
  if (event.target === _constants.popup) {
    closePopup();
  }
  ;
});

// добавляем слушатель к кнопке открытия модальной формы
_constants.showPopupButton.addEventListener('click', function () {
  // очищаем поле с сообщением перед открытием
  document.addEventListener('keydown', handleEscClose);
  _constants.textInput.value = '';
  _constants.popup.classList.add('popup_active');
});

// следим за закрытием попапа
_constants.closePopupButton.addEventListener('click', function () {
  document.removeEventListener('keydown', handleEscClose);
  closePopup();
});

// здесь можно описать запрос к api с отправкой сообщения
_constants.modalForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var userEmail = _constants.emailInput.value;
  var message = _constants.textInput.value;
  // делаем запрос к серверу
  _Api.default.sendMessage(userEmail, message).then(function () {
    // в случае успеха закрываем попап
    _constants.popup.classList.remove('popup_active');
  }).catch(function (err) {
    // отлавливаем ошибку
    console.log(err);
  });
});

// переключаем слайд
_constants.nextButton.addEventListener('click', function () {
  offset = offset + _constants.slideWidth;
  if (offset > _constants.slideWidth * 3) {
    offset = 0;
    currentPage = 1;
  } else {
    currentPage++;
  }
  _constants.sliderLine.style.left = -offset + 'px';
  updatePageIndicator();
});
_constants.prevButton.addEventListener('click', function () {
  offset = offset - _constants.slideWidth;
  if (offset < 0) {
    offset = _constants.slideWidth * 3;
    currentPage = 4;
  } else {
    currentPage--;
  }
  _constants.sliderLine.style.left = -offset + 'px';
  updatePageIndicator();
});
_constants.toggleButton.addEventListener('click', function () {
  _constants.navigation.classList.toggle('navigation_visible');
});
updatePageIndicator();
},{"./scripts/utils/constants":"scripts/utils/constants.js","./scripts/utils/Api":"scripts/utils/Api.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53392" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map