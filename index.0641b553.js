// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _renderDOM = require("./utils/renderDOM");
var _renderDOMDefault = parcelHelpers.interopDefault(_renderDOM);
var _header = require("./components/header/Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _section = require("./components/section/Section");
var _sectionDefault = parcelHelpers.interopDefault(_section);
var _columnTodo = require("./components/columns/ColumnTodo");
var _columnTodoDefault = parcelHelpers.interopDefault(_columnTodo);
var _columnInProgress = require("./components/columns/ColumnInProgress");
var _columnInProgressDefault = parcelHelpers.interopDefault(_columnInProgress);
var _columnDone = require("./components/columns/ColumnDone");
var _columnDoneDefault = parcelHelpers.interopDefault(_columnDone);
var _resetScss = require("./styles/reset.scss");
var _globalScss = require("./styles/global.scss");
var _buttonsScss = require("./styles/buttons.scss");
(0, _renderDOMDefault.default)((0, _headerDefault.default), (0, _sectionDefault.default)((0, _columnTodoDefault.default), (0, _columnInProgressDefault.default), (0, _columnDoneDefault.default)));

},{"./utils/renderDOM":"g6kCL","./components/header/Header":"3oj0W","./components/section/Section":"4h2wa","./components/columns/ColumnTodo":"6FSVF","./components/columns/ColumnInProgress":"4cASD","./components/columns/ColumnDone":"3zBzm","./styles/reset.scss":"lvzZ5","./styles/global.scss":"f11eJ","./styles/buttons.scss":"337Pj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6kCL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const rootElement = document.getElementById("root");
const renderDOM = (...components)=>{
    components.forEach((component)=>{
        rootElement.append(typeof component === "function" ? component() : component);
    });
};
exports.default = renderDOM;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3oj0W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createTags = require("../../utils/createTags");
var _getRef = require("../../utils/getRef");
var _getRefDefault = parcelHelpers.interopDefault(_getRef);
var _time = require("../../variables/time");
var _headerModuleScss = require("./Header.module.scss");
var _headerModuleScssDefault = parcelHelpers.interopDefault(_headerModuleScss);
const Header = ()=>{
    const ref = (0, _getRefDefault.default)(null);
    let timeIndicator = false;
    setInterval(()=>{
        const currentDatetime = new Date();
        const hours = ("0" + currentDatetime.getHours()).slice(-2);
        const minutes = ("0" + currentDatetime.getMinutes()).slice(-2);
        timeIndicator = !timeIndicator;
        const separator = timeIndicator ? (0, _time.TIME_CHAR) : " ";
        ref.current.innerText = `${hours}${separator}${minutes}`;
    }, 1000);
    return (0, _createTags.header)({
        class: (0, _headerModuleScssDefault.default).container
    }, (0, _createTags.a)({
        href: "/"
    }, (0, _createTags.div)({
        class: (0, _headerModuleScssDefault.default).logo
    })), (0, _createTags.time)({
        ref,
        class: (0, _headerModuleScssDefault.default).time
    }, "--:--"));
};
exports.default = Header;

},{"../../utils/createTags":"jPQe9","../../utils/getRef":"5tnsX","../../variables/time":"4WZIl","./Header.module.scss":"6E920","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPQe9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "header", ()=>header);
parcelHelpers.export(exports, "a", ()=>a);
parcelHelpers.export(exports, "div", ()=>div);
parcelHelpers.export(exports, "time", ()=>time);
parcelHelpers.export(exports, "button", ()=>button);
parcelHelpers.export(exports, "img", ()=>img);
parcelHelpers.export(exports, "section", ()=>section);
parcelHelpers.export(exports, "h2", ()=>h2);
parcelHelpers.export(exports, "label", ()=>label);
parcelHelpers.export(exports, "input", ()=>input);
parcelHelpers.export(exports, "select", ()=>select);
parcelHelpers.export(exports, "option", ()=>option);
parcelHelpers.export(exports, "textarea", ()=>textarea);
parcelHelpers.export(exports, "span", ()=>span);
var _events = require("../variables/events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
const handleTag = (selector, attrs = {}, children = [])=>{
    for (const [key, value] of Object.entries(attrs)){
        const checkEventProperty = (0, _eventsDefault.default).hasOwnProperty(key);
        if (checkEventProperty) (0, _eventsDefault.default)[key](selector, value);
        if (!checkEventProperty && value) selector.setAttribute(key, value);
    }
    children.forEach((child)=>selector.append(typeof child === "function" ? child() : child));
    return selector;
};
const newTag = (tag)=>document.createElement(tag);
const header = (attrs, ...children)=>handleTag(newTag("header"), attrs, children);
const a = (attrs, ...children)=>handleTag(newTag("a"), attrs, children);
const div = (attrs, ...children)=>handleTag(newTag("div"), attrs, children);
const time = (attrs, ...children)=>handleTag(newTag("time"), attrs, children);
const button = (attrs, ...children)=>handleTag(newTag("button"), attrs, children);
const img = (attrs)=>handleTag(newTag("img"), attrs);
const section = (attrs, ...children)=>handleTag(newTag("section"), attrs, children);
const h2 = (attrs, ...children)=>handleTag(newTag("h2"), attrs, children);
const label = (attrs, ...children)=>handleTag(newTag("label"), attrs, children);
const input = (attrs)=>handleTag(newTag("input"), attrs);
const select = (attrs, ...children)=>handleTag(newTag("select"), attrs, children);
const option = (attrs, ...children)=>handleTag(newTag("option"), attrs, children);
const textarea = (attrs, ...children)=>handleTag(newTag("textarea"), attrs, children);
const span = (attrs, ...children)=>handleTag(newTag("span"), attrs, children);

},{"../variables/events":"80uD1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80uD1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootTreeElements = require("../threeElements/rootTreeElements");
const events = {
    ref (selector, value) {
        value(selector);
    },
    key (selector, value) {
        (0, _rootTreeElements.treeElements).set(value, selector);
    },
    onClick (selector, value) {
        selector.addEventListener("click", (e)=>value(e, selector));
    },
    onChange (selector, value) {
        selector.addEventListener("input", (e)=>{
            selector.setAttribute("value", e.target.value);
            value(e, selector);
        });
    }
};
exports.default = events;

},{"../threeElements/rootTreeElements":"80Ahw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80Ahw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "treeElements", ()=>treeElements);
var _createTreeElements = require("./CreateTreeElements");
var _createTreeElementsDefault = parcelHelpers.interopDefault(_createTreeElements);
const treeElements = new (0, _createTreeElementsDefault.default)();

},{"./CreateTreeElements":"f9Mob","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9Mob":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class CreateTreeElements {
    #selectors = {};
    set(id, selector) {
        this.#selectors[id] = selector;
    }
    get(id) {
        return id ? this.#selectors[id] : this.#selectors;
    }
    remove(id) {
        if (id) {
            this.#selectors[id].remove();
            delete this.#selectors[id];
        }
        if (!id) {
            for (const selector of Object.values(this.#selectors))selector.remove();
            this.#selectors = {};
        }
    }
}
exports.default = CreateTreeElements;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tnsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getRef = (initialState = null)=>{
    const ref = (selector)=>ref.current = selector || initialState;
    return ref;
};
exports.default = getRef;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WZIl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TIME_CHAR", ()=>TIME_CHAR);
const TIME_CHAR = ":";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6E920":[function(require,module,exports) {
module.exports["time"] = `EdGWLG_time`;
module.exports["container"] = `EdGWLG_container`;
module.exports["logo"] = `EdGWLG_logo`;

},{}],"4h2wa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createTags = require("../../utils/createTags");
var _sectionModuleScss = require("./Section.module.scss");
var _sectionModuleScssDefault = parcelHelpers.interopDefault(_sectionModuleScss);
const Section = (...components)=>{
    return (0, _createTags.section)({
        class: (0, _sectionModuleScssDefault.default).container
    }, ...components);
};
exports.default = Section;

},{"../../utils/createTags":"jPQe9","./Section.module.scss":"gloVA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gloVA":[function(require,module,exports) {
module.exports["container"] = `iltFnG_container`;

},{}],"6FSVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderDOM = require("../../utils/renderDOM");
var _renderDOMDefault = parcelHelpers.interopDefault(_renderDOM);
var _createTags = require("../../utils/createTags");
var _card = require("../card/Card");
var _cardDefault = parcelHelpers.interopDefault(_card);
var _dialog = require("../dialog/Dialog");
var _dialogDefault = parcelHelpers.interopDefault(_dialog);
var _getRef = require("../../utils/getRef");
var _getRefDefault = parcelHelpers.interopDefault(_getRef);
var _equalObjects = require("../../utils/equalObjects");
var _equalObjectsDefault = parcelHelpers.interopDefault(_equalObjects);
var _rootObserver = require("../../observer/rootObserver");
var _rootTreeElements = require("../../threeElements/rootTreeElements");
var _columnsModuleScss = require("./Columns.module.scss");
var _columnsModuleScssDefault = parcelHelpers.interopDefault(_columnsModuleScss);
var _plusSvg = require("../../assets/img/plus.svg");
var _plusSvgDefault = parcelHelpers.interopDefault(_plusSvg);
const ColumnTodo = ()=>{
    const todosRef = (0, _getRefDefault.default)(null);
    const counterRef = (0, _getRefDefault.default)(null);
    (0, _rootObserver.todoListObserver).subscribe((prevState, state, type)=>{
        if (type !== "update") {
            counterRef.current.innerText = state.length;
            const newTodos = state.filter((todo)=>!prevState.find((prev)=>prev.id === todo.id)).map((todo)=>(0, _cardDefault.default)(todo));
            todosRef.current.append(...newTodos);
        }
        if (type === "update") {
            const todo = state.find((todo, i)=>!(0, _equalObjectsDefault.default)(prevState[i], todo));
            if (todo) {
                const oldNode = (0, _rootTreeElements.treeElements).get(todo.id);
                todosRef.current.replaceChild((0, _cardDefault.default)(todo), oldNode);
            }
        }
    });
    const handleNewTodo = ()=>{
        (0, _renderDOMDefault.default)((0, _dialogDefault.default));
    };
    return (0, _createTags.div)({
        class: (0, _columnsModuleScssDefault.default).container
    }, (0, _createTags.div)({
        class: (0, _columnsModuleScssDefault.default).header
    }, (0, _createTags.h2)({
        class: (0, _columnsModuleScssDefault.default).title
    }, "Todo list"), (0, _createTags.div)({
        ref: counterRef,
        class: (0, _columnsModuleScssDefault.default).counter
    }, 0)), (0, _createTags.div)({
        ref: todosRef,
        class: (0, _columnsModuleScssDefault.default).items
    }), (0, _createTags.button)({
        type: "button",
        class: [
            (0, _columnsModuleScssDefault.default).addTodoBtn,
            "_ripple"
        ].join(" "),
        onClick: handleNewTodo
    }, (0, _createTags.img)({
        src: (0, _plusSvgDefault.default),
        alt: "new todo"
    }), "New todo"));
};
exports.default = ColumnTodo;

},{"../../utils/renderDOM":"g6kCL","../../utils/createTags":"jPQe9","../card/Card":"1YEIV","../dialog/Dialog":"dUV5r","../../utils/getRef":"5tnsX","../../utils/equalObjects":"eOUmm","../../observer/rootObserver":"3wtmd","../../threeElements/rootTreeElements":"80Ahw","./Columns.module.scss":"gUDV6","../../assets/img/plus.svg":"03J9H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YEIV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderDOM = require("../../utils/renderDOM");
var _renderDOMDefault = parcelHelpers.interopDefault(_renderDOM);
var _createTags = require("../../utils/createTags");
var _dialog = require("../dialog/Dialog");
var _dialogDefault = parcelHelpers.interopDefault(_dialog);
var _warningPopUp = require("../warningPopUp/warningPopUp");
var _warningPopUpDefault = parcelHelpers.interopDefault(_warningPopUp);
var _api = require("../../api/api");
var _apiDefault = parcelHelpers.interopDefault(_api);
var _rootObserver = require("../../observer/rootObserver");
var _cardModuleScss = require("./Card.module.scss");
var _cardModuleScssDefault = parcelHelpers.interopDefault(_cardModuleScss);
var _prevSvg = require("../../assets/img/prev.svg");
var _prevSvgDefault = parcelHelpers.interopDefault(_prevSvg);
var _nextSvg = require("../../assets/img/next.svg");
var _nextSvgDefault = parcelHelpers.interopDefault(_nextSvg);
var _removeSvg = require("../../assets/img/remove.svg");
var _removeSvgDefault = parcelHelpers.interopDefault(_removeSvg);
const Card = (props)=>{
    const { id , title , username , date , progress  } = props || {};
    const handleShowInfo = ()=>{
        (0, _renderDOMDefault.default)((0, _dialogDefault.default)(props));
    };
    const handlePrev = ()=>{
        props.progress = "wait";
        (0, _rootObserver.inProgressObserver).remove(id);
        (0, _rootObserver.todoListObserver).state = props;
        (0, _apiDefault.default).put(`todos/${id}`, props);
    };
    const handleNext = ()=>{
        if (progress === "wait") {
            if ((0, _rootObserver.inProgressObserver).state.length >= 6) {
                (0, _renderDOMDefault.default)((0, _warningPopUpDefault.default)("You cannot add more tnan 6 tasks to complete!", "default"));
                return;
            }
            props.progress = "work";
            (0, _rootObserver.todoListObserver).remove(id);
            (0, _rootObserver.inProgressObserver).state = props;
        }
        if (progress === "work") {
            props.progress = "done";
            (0, _rootObserver.inProgressObserver).remove(id);
            (0, _rootObserver.doneObserver).state = props;
        }
        (0, _apiDefault.default).put(`todos/${id}`, props);
    };
    const handleRemove = ()=>{
        if (progress === "wait") (0, _rootObserver.todoListObserver).remove(id);
        if (progress === "work") (0, _rootObserver.inProgressObserver).remove(id);
        if (progress === "done") (0, _rootObserver.doneObserver).remove(id);
        (0, _apiDefault.default).delete(`todos/${id}`);
    };
    let buttonsGroup;
    if (progress === "wait") buttonsGroup = [
        (0, _createTags.button)({
            type: "button",
            class: (0, _cardModuleScssDefault.default).btn,
            onClick: handleNext
        }, (0, _createTags.img)({
            src: (0, _nextSvgDefault.default),
            alt: "Next this"
        })),
        (0, _createTags.button)({
            type: "button",
            class: (0, _cardModuleScssDefault.default).btn,
            onClick: handleRemove
        }, (0, _createTags.img)({
            src: (0, _removeSvgDefault.default),
            alt: "Remove this"
        }))
    ];
    if (progress === "work") buttonsGroup = [
        (0, _createTags.button)({
            type: "button",
            class: (0, _cardModuleScssDefault.default).btn,
            onClick: handlePrev
        }, (0, _createTags.img)({
            src: (0, _prevSvgDefault.default),
            alt: "Prev this"
        })),
        (0, _createTags.button)({
            type: "button",
            class: (0, _cardModuleScssDefault.default).btn,
            onClick: handleNext
        }, (0, _createTags.img)({
            src: (0, _nextSvgDefault.default),
            alt: "Next this"
        })), 
    ];
    if (progress === "done") buttonsGroup = [
        (0, _createTags.button)({
            type: "button",
            class: (0, _cardModuleScssDefault.default).btn,
            onClick: handleRemove
        }, (0, _createTags.img)({
            src: (0, _removeSvgDefault.default),
            alt: "Remove this"
        }))
    ];
    return (0, _createTags.div)({
        key: id,
        class: (0, _cardModuleScssDefault.default).container
    }, (0, _createTags.div)({
        class: (0, _cardModuleScssDefault.default).header,
        onClick: handleShowInfo
    }, (0, _createTags.div)({
        class: (0, _cardModuleScssDefault.default).title
    }, title)), (0, _createTags.div)({
        class: (0, _cardModuleScssDefault.default).info
    }, (0, _createTags.div)({
        class: (0, _cardModuleScssDefault.default).wrapper
    }, (0, _createTags.div)({}, (0, _createTags.div)({}, `${username && !username.startsWith("username") ? username : "No contributor"}`), (0, _createTags.div)({
        class: (0, _cardModuleScssDefault.default).data
    }, date)), (0, _createTags.div)({
        class: (0, _cardModuleScssDefault.default).group
    }, ...buttonsGroup))));
};
exports.default = Card;

},{"../../utils/renderDOM":"g6kCL","../../utils/createTags":"jPQe9","../dialog/Dialog":"dUV5r","../warningPopUp/warningPopUp":"5Ub9y","../../api/api":"1nO8u","../../observer/rootObserver":"3wtmd","./Card.module.scss":"gIB0q","../../assets/img/prev.svg":"fPcmD","../../assets/img/next.svg":"7NqLo","../../assets/img/remove.svg":"72nJU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUV5r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("../../api/api");
var _apiDefault = parcelHelpers.interopDefault(_api);
var _rootStore = require("../../store/rootStore");
var _rootObserver = require("../../observer/rootObserver");
var _getDate = require("../../utils/getDate");
var _getDateDefault = parcelHelpers.interopDefault(_getDate);
var _createTags = require("../../utils/createTags");
var _getRef = require("../../utils/getRef");
var _getRefDefault = parcelHelpers.interopDefault(_getRef);
var _dialogModuleScss = require("./Dialog.module.scss");
var _dialogModuleScssDefault = parcelHelpers.interopDefault(_dialogModuleScss);
var _removeGraySvg = require("../../assets/img/remove-gray.svg");
var _removeGraySvgDefault = parcelHelpers.interopDefault(_removeGraySvg);
var _titleSvg = require("../../assets/img/title.svg");
var _titleSvgDefault = parcelHelpers.interopDefault(_titleSvg);
var _descriptionAddSvg = require("../../assets/img/description-add.svg");
var _descriptionAddSvgDefault = parcelHelpers.interopDefault(_descriptionAddSvg);
var _userSvg = require("../../assets/img/user.svg");
var _userSvgDefault = parcelHelpers.interopDefault(_userSvg);
const warning = (selector)=>{
    selector.focus();
    selector.classList.add((0, _dialogModuleScssDefault.default).warning);
    setTimeout(()=>selector.classList.remove((0, _dialogModuleScssDefault.default).warning), 200);
};
const Dialog = (params)=>{
    const { title ="" , description ="" , userId , id , progress  } = params || {};
    const containerRef = (0, _getRefDefault.default)(null);
    const dialogRef = (0, _getRefDefault.default)(null);
    const titleRef = (0, _getRefDefault.default)(null);
    const descriptionRef = (0, _getRefDefault.default)(null);
    const selectUserRef = (0, _getRefDefault.default)(null);
    (0, _rootObserver.usersObserver).subscribe((_, state, type)=>{
        if (type !== "init") return;
        selectUserRef.current.append(...state.map((user)=>(0, _createTags.option)({
                value: user.id,
                selected: user.id === userId
            }, user.username)));
    });
    if (id) (0, _rootStore.newTodoStore).state = params;
    const handleTitleChange = (e)=>{
        (0, _rootStore.newTodoStore).state = {
            ...(0, _rootStore.newTodoStore).state,
            title: e.target.value
        };
    };
    const handleDescriptionChange = (e)=>{
        (0, _rootStore.newTodoStore).state = {
            ...(0, _rootStore.newTodoStore).state,
            description: e.target.value
        };
    };
    const handleUserChange = (e)=>{
        const { username  } = (0, _rootObserver.usersObserver).state.find((user)=>user.id === e.target.value) || {};
        (0, _rootStore.newTodoStore).state = {
            ...(0, _rootStore.newTodoStore).state,
            userId: e.target.value,
            username: username ? username : "username"
        };
    };
    const handleClose = ()=>{
        containerRef.current.remove();
        (0, _rootStore.newTodoStore).clear();
    };
    const handleConfirm = ()=>{
        if (!(0, _rootStore.newTodoStore).state.title) {
            warning(titleRef.current);
            return;
        }
        if (!(0, _rootStore.newTodoStore).state.description) {
            warning(descriptionRef.current);
            return;
        }
        if (id) {
            if (progress === "wait") (0, _rootObserver.todoListObserver).update((0, _rootStore.newTodoStore).state);
            if (progress === "work") (0, _rootObserver.inProgressObserver).update((0, _rootStore.newTodoStore).state);
            if (progress === "done") (0, _rootObserver.doneObserver).update((0, _rootStore.newTodoStore).state);
            (0, _apiDefault.default).put(`todos/${id}`, (0, _rootStore.newTodoStore).state);
        }
        if (!id) {
            (0, _rootStore.newTodoStore).state = {
                ...(0, _rootStore.newTodoStore).state,
                date: (0, _getDateDefault.default)(),
                progress: "wait"
            };
            (0, _apiDefault.default).post("todos", (0, _rootStore.newTodoStore).state).then(({ status , data  })=>{
                if (status !== 201) return console.error("Unsuccessful request");
                (0, _rootObserver.todoListObserver).state = data;
            });
        }
        handleClose();
    };
    return (0, _createTags.div)({
        ref: containerRef,
        class: (0, _dialogModuleScssDefault.default).container
    }, (0, _createTags.div)({
        ref: dialogRef,
        class: (0, _dialogModuleScssDefault.default).dialog
    }, (0, _createTags.button)({
        class: (0, _dialogModuleScssDefault.default).close,
        onClick: handleClose
    }, (0, _createTags.img)({
        src: (0, _removeGraySvgDefault.default),
        alt: "Close dialog"
    })), (0, _createTags.label)({}, (0, _createTags.span)({
        class: (0, _dialogModuleScssDefault.default).title
    }, (0, _createTags.img)({
        src: (0, _titleSvgDefault.default),
        alt: "title"
    }), "Title"), (0, _createTags.input)({
        ref: titleRef,
        type: "text",
        value: title,
        placeholder: "Enter title...",
        class: (0, _dialogModuleScssDefault.default).titleInput,
        onChange: handleTitleChange
    })), (0, _createTags.label)({}, (0, _createTags.span)({
        class: (0, _dialogModuleScssDefault.default).description
    }, (0, _createTags.img)({
        src: (0, _descriptionAddSvgDefault.default),
        alt: "title"
    }), "Description"), (0, _createTags.textarea)({
        ref: descriptionRef,
        type: "text",
        placeholder: "Enter description...",
        class: (0, _dialogModuleScssDefault.default).descriptionTextarea,
        onChange: handleDescriptionChange
    }, description)), (0, _createTags.div)({}, (0, _createTags.div)({
        class: (0, _dialogModuleScssDefault.default).responsible
    }, (0, _createTags.img)({
        src: (0, _userSvgDefault.default),
        alt: "title"
    }), "Contributor"), (0, _createTags.select)({
        ref: selectUserRef,
        class: (0, _dialogModuleScssDefault.default).users,
        onChange: handleUserChange
    }, (0, _createTags.option)({
        value: "0"
    }, "Select user"), ...(0, _rootObserver.usersObserver).state.map((user)=>(0, _createTags.option)({
            value: user.id,
            selected: user.id === userId
        }, user.username)))), (0, _createTags.div)({
        class: (0, _dialogModuleScssDefault.default).groupButtons
    }, (0, _createTags.button)({
        type: "button",
        class: "cancel-button _ripple",
        onClick: handleClose
    }, "Cancel"), (0, _createTags.button)({
        type: "button",
        class: "confirm-button _ripple",
        onClick: handleConfirm
    }, !id ? "New todo" : "Save"))));
};
exports.default = Dialog;

},{"../../api/api":"1nO8u","../../store/rootStore":"k6v00","../../observer/rootObserver":"3wtmd","../../utils/getDate":"k8mST","../../utils/createTags":"jPQe9","../../utils/getRef":"5tnsX","./Dialog.module.scss":"bpcQ6","../../assets/img/remove-gray.svg":"74ji7","../../assets/img/title.svg":"kfsQ3","../../assets/img/description-add.svg":"fj2rA","../../assets/img/user.svg":"8VtNy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nO8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const URL_API = "https://634008aad1fcddf69caf8231.mockapi.io/";
const headers = {
    "Content-Type": "application/json;charset=utf-8"
};
class Api {
    async get(endpoint) {
        const res = await fetch(URL_API + endpoint);
        return await res.json();
    }
    async post(endpoint, body, options) {
        const res = await fetch(URL_API + endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
            ...options
        });
        const data = await res.json();
        return {
            status: res.status,
            data
        };
    }
    async put(endpoint, body, options) {
        const res = await fetch(URL_API + endpoint, {
            method: "PUT",
            headers,
            body: JSON.stringify(body),
            ...options
        });
        const data = await res.json();
        return {
            status: res.status,
            data
        };
    }
    async delete(endpoint) {
        const res = await fetch(URL_API + endpoint, {
            method: "DELETE"
        });
        const data = await res.json();
        return {
            status: res.status,
            data
        };
    }
}
exports.default = new Api();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k6v00":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newTodoStore", ()=>newTodoStore);
var _store = require("./Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
const newTodoStore = new (0, _storeDefault.default)({});

},{"./Store":"7jgPv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jgPv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Store {
    #initialState = null;
    #state = null;
    constructor(initialState){
        this.#initialState = initialState;
        this.#state = this.#initialState;
    }
    get state() {
        return this.#state;
    }
    set state(state) {
        this.#state = state;
    }
    clear() {
        this.#state = this.#initialState;
    }
}
exports.default = Store;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3wtmd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "usersObserver", ()=>usersObserver);
parcelHelpers.export(exports, "todoListObserver", ()=>todoListObserver);
parcelHelpers.export(exports, "inProgressObserver", ()=>inProgressObserver);
parcelHelpers.export(exports, "doneObserver", ()=>doneObserver);
var _observable = require("./Observable");
var _observableDefault = parcelHelpers.interopDefault(_observable);
var _initObserver = require("./initObserver");
const usersObserver = new (0, _observableDefault.default)([]);
const todoListObserver = new (0, _observableDefault.default)([]);
const inProgressObserver = new (0, _observableDefault.default)([]);
const doneObserver = new (0, _observableDefault.default)([]);

},{"./Observable":"7qjuC","./initObserver":"8da7B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7qjuC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootTreeElements = require("../threeElements/rootTreeElements");
class Observable {
    #observers = [];
    #prevState = null;
    #state = null;
    #initialState = null;
    constructor(initialState){
        this.#initialState = initialState;
        this.#state = initialState;
        this.#prevState = initialState;
    }
    init(state) {
        this.#state = [
            ...this.#state,
            ...state
        ];
        this.#action("init");
    }
    set state(state) {
        this.#state = [
            ...this.#state,
            state
        ];
        this.#action("set");
    }
    get state() {
        return this.#state;
    }
    update(state) {
        const index = this.#state.findIndex((todo)=>todo.id === state.id);
        this.#prevState = [
            ...this.#state
        ];
        this.#state[index] = state;
        this.#action("update");
    }
     #action(type) {
        this.broadcast(type);
        this.#prevState = this.#state;
    }
    remove(removeId) {
        if (removeId) {
            this.#state = this.#state.filter((todo)=>todo.id !== removeId);
            (0, _rootTreeElements.treeElements).remove(removeId);
        }
        if (!removeId) {
            this.#state.forEach((todo)=>{
                (0, _rootTreeElements.treeElements).remove(todo.id);
            });
            this.#state = this.#initialState;
            this.#prevState = this.#initialState;
        }
        this.#action("remove");
    }
    subscribe(observer) {
        this.#observers.push(observer);
    }
    unsubscribe(newObserver) {
        this.#observers = this.#observers.filter((observer)=>observer !== newObserver);
    }
    broadcast(type) {
        this.#observers.forEach((observer)=>observer(this.#prevState, this.#state, type));
    }
}
exports.default = Observable;

},{"../threeElements/rootTreeElements":"80Ahw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8da7B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _api = require("../api/api");
var _apiDefault = parcelHelpers.interopDefault(_api);
var _rootObserver = require("./rootObserver");
(0, _apiDefault.default).get("users").then((r)=>{
    (0, _rootObserver.usersObserver).init(r);
});
(0, _apiDefault.default).get("todos").then((r)=>{
    const wait = [];
    const work = [];
    const done = [];
    r.forEach((todo)=>{
        if (todo.progress === "wait") wait.push(todo);
        if (todo.progress === "work") work.push(todo);
        if (todo.progress === "done") done.push(todo);
    });
    (0, _rootObserver.todoListObserver).init(wait);
    (0, _rootObserver.inProgressObserver).init(work);
    (0, _rootObserver.doneObserver).init(done);
});

},{"../api/api":"1nO8u","./rootObserver":"3wtmd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8mST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _date = require("../variables/date");
const getDate = ()=>{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const number = date.getDate();
    const dayOfWeek = date.getDay();
    return `${(0, _date.daysOfWeek)[dayOfWeek]}, ${number} ${(0, _date.months)[month]}, ${year}`;
};
exports.default = getDate;

},{"../variables/date":"eNvL9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNvL9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "months", ()=>months);
parcelHelpers.export(exports, "daysOfWeek", ()=>daysOfWeek);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday", 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpcQ6":[function(require,module,exports) {
module.exports["titleInput"] = `_7kvKSW_titleInput`;
module.exports["title"] = `_7kvKSW_title`;
module.exports["descriptionTextarea"] = `_7kvKSW_descriptionTextarea`;
module.exports["description"] = `_7kvKSW_description`;
module.exports["dialog"] = `_7kvKSW_dialog`;
module.exports["responsible"] = `_7kvKSW_responsible`;
module.exports["container"] = `_7kvKSW_container`;
module.exports["bounce"] = `_7kvKSW_bounce`;
module.exports["bounce"];
module.exports["close"] = `_7kvKSW_close`;
module.exports["groupButtons"] = `_7kvKSW_groupButtons`;
module.exports["warning"] = `_7kvKSW_warning`;
module.exports["users"] = `_7kvKSW_users`;

},{}],"74ji7":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "remove-gray.b093d16e.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"kfsQ3":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "title.0646e448.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fj2rA":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "description-add.5799ff9a.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8VtNy":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "user.239c9742.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5Ub9y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("../../api/api");
var _apiDefault = parcelHelpers.interopDefault(_api);
var _rootObserver = require("../../observer/rootObserver");
var _createTags = require("../../utils/createTags");
var _getRef = require("../../utils/getRef");
var _getRefDefault = parcelHelpers.interopDefault(_getRef);
var _warningPopUPModuleScss = require("./warningPopUP.module.scss");
var _warningPopUPModuleScssDefault = parcelHelpers.interopDefault(_warningPopUPModuleScss);
var _removeGraySvg = require("../../assets/img/remove-gray.svg");
var _removeGraySvgDefault = parcelHelpers.interopDefault(_removeGraySvg);
const WarningPopUp = (textMessage, state)=>{
    const containerRef = (0, _getRefDefault.default)(null);
    const dialogRef = (0, _getRefDefault.default)(null);
    const titleRef = (0, _getRefDefault.default)(null);
    let CancelBtn = "";
    const handleClose = ()=>{
        containerRef.current.remove();
    };
    if (state !== "default") CancelBtn = (0, _createTags.button)({
        type: "button",
        class: "cancel-button _ripple",
        onClick: handleClose
    }, "Cancel");
    const handleConfirm = ()=>{
        containerRef.current.remove();
        const doneTaskPromises = (0, _rootObserver.doneObserver).state.map((doneTask)=>{
            return (0, _apiDefault.default).delete("todos/" + doneTask.id);
        });
        (0, _rootObserver.doneObserver).remove();
        Promise.all(doneTaskPromises).then((results)=>{
            const badRequests = results.filter((result)=>result.status !== 200);
            badRequests.forEach((todo)=>(0, _rootObserver.doneObserver).state = todo);
        });
    };
    return (0, _createTags.div)({
        ref: containerRef,
        class: (0, _warningPopUPModuleScssDefault.default).container
    }, (0, _createTags.div)({
        ref: dialogRef,
        class: (0, _warningPopUPModuleScssDefault.default).dialog
    }, (0, _createTags.button)({
        class: (0, _warningPopUPModuleScssDefault.default).close,
        onClick: handleClose
    }, (0, _createTags.img)({
        src: (0, _removeGraySvgDefault.default),
        alt: "Close dialog"
    })), (0, _createTags.label)({}, (0, _createTags.span)({
        class: (0, _warningPopUPModuleScssDefault.default).title
    }, "Warning"), (0, _createTags.label)({
        ref: titleRef,
        class: (0, _warningPopUPModuleScssDefault.default).explanation
    }, textMessage)), (0, _createTags.div)({
        class: (0, _warningPopUPModuleScssDefault.default).groupButtons
    }, CancelBtn, (0, _createTags.button)({
        type: "button",
        class: "confirm-button _ripple",
        onClick: handleConfirm
    }, "Confirm"))));
};
exports.default = WarningPopUp;

},{"../../api/api":"1nO8u","../../observer/rootObserver":"3wtmd","../../utils/createTags":"jPQe9","../../utils/getRef":"5tnsX","./warningPopUP.module.scss":"gaX6q","../../assets/img/remove-gray.svg":"74ji7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gaX6q":[function(require,module,exports) {
module.exports["container"] = `ZmahRq_container`;
module.exports["responsible"] = `ZmahRq_responsible`;
module.exports["explanation"] = `ZmahRq_explanation`;
module.exports["close"] = `ZmahRq_close`;
module.exports["groupButtons"] = `ZmahRq_groupButtons`;
module.exports["title"] = `ZmahRq_title`;
module.exports["dialog"] = `ZmahRq_dialog`;

},{}],"gIB0q":[function(require,module,exports) {
module.exports["data"] = `hoqS_a_data`;
module.exports["btn"] = `hoqS_a_btn`;
module.exports["info"] = `hoqS_a_info`;
module.exports["wrapper"] = `hoqS_a_wrapper`;
module.exports["group"] = `hoqS_a_group`;
module.exports["container"] = `hoqS_a_container`;
module.exports["header"] = `hoqS_a_header`;
module.exports["title"] = `hoqS_a_title`;

},{}],"fPcmD":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "prev.5fa253f2.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7NqLo":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "next.2f58f420.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"72nJU":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "remove.b515103d.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eOUmm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const equalObjects = (obj1, obj2)=>{
    if (obj1 === obj2) return true;
    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);
    if (keysObj1.length !== keysObj2.length) return false;
    for(let key in obj1){
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) return false;
    }
    return true;
};
exports.default = equalObjects;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gUDV6":[function(require,module,exports) {
module.exports["container"] = `YT74FG_container`;
module.exports["title"] = `YT74FG_title`;
module.exports["header"] = `YT74FG_header`;
module.exports["counter"] = `YT74FG_counter`;
module.exports["items"] = `YT74FG_items`;
module.exports["addTodoBtn"] = `YT74FG_addTodoBtn`;

},{}],"03J9H":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "plus.ef84878f.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4cASD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createTags = require("../../utils/createTags");
var _getRef = require("../../utils/getRef");
var _getRefDefault = parcelHelpers.interopDefault(_getRef);
var _equalObjects = require("../../utils/equalObjects");
var _equalObjectsDefault = parcelHelpers.interopDefault(_equalObjects);
var _card = require("../card/Card");
var _cardDefault = parcelHelpers.interopDefault(_card);
var _rootObserver = require("../../observer/rootObserver");
var _rootTreeElements = require("../../threeElements/rootTreeElements");
var _columnsModuleScss = require("./Columns.module.scss");
var _columnsModuleScssDefault = parcelHelpers.interopDefault(_columnsModuleScss);
const ColumnInProgress = ()=>{
    const todosRef = (0, _getRefDefault.default)(null);
    const counterRef = (0, _getRefDefault.default)(null);
    (0, _rootObserver.inProgressObserver).subscribe((prevState, state, type)=>{
        if (type !== "update") {
            counterRef.current.innerText = state.length;
            const newTodos = state.filter((todo)=>!prevState.find((prev)=>prev.id === todo.id)).map((todo)=>(0, _cardDefault.default)(todo));
            todosRef.current.append(...newTodos);
        }
        if (type === "update") {
            const todo = state.find((todo, i)=>!(0, _equalObjectsDefault.default)(prevState[i], todo));
            if (todo) {
                const oldNode = (0, _rootTreeElements.treeElements).get(todo.id);
                todosRef.current.replaceChild((0, _cardDefault.default)(todo), oldNode);
            }
        }
    });
    return (0, _createTags.div)({
        class: (0, _columnsModuleScssDefault.default).container
    }, (0, _createTags.div)({
        class: (0, _columnsModuleScssDefault.default).header
    }, (0, _createTags.h2)({
        class: (0, _columnsModuleScssDefault.default).title
    }, "In progress"), (0, _createTags.div)({
        ref: counterRef,
        class: (0, _columnsModuleScssDefault.default).counter
    }, 0)), (0, _createTags.div)({
        ref: todosRef,
        class: (0, _columnsModuleScssDefault.default).items
    }));
};
exports.default = ColumnInProgress;

},{"../../utils/createTags":"jPQe9","../../utils/getRef":"5tnsX","../../utils/equalObjects":"eOUmm","../card/Card":"1YEIV","../../observer/rootObserver":"3wtmd","../../threeElements/rootTreeElements":"80Ahw","./Columns.module.scss":"gUDV6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zBzm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createTags = require("../../utils/createTags");
var _getRef = require("../../utils/getRef");
var _getRefDefault = parcelHelpers.interopDefault(_getRef);
var _equalObjects = require("../../utils/equalObjects");
var _equalObjectsDefault = parcelHelpers.interopDefault(_equalObjects);
var _renderDOM = require("../../utils/renderDOM");
var _renderDOMDefault = parcelHelpers.interopDefault(_renderDOM);
var _warningPopUp = require("../warningPopUp/warningPopUp");
var _warningPopUpDefault = parcelHelpers.interopDefault(_warningPopUp);
var _card = require("../card/Card");
var _cardDefault = parcelHelpers.interopDefault(_card);
var _rootObserver = require("../../observer/rootObserver");
var _rootTreeElements = require("../../threeElements/rootTreeElements");
var _columnsModuleScss = require("./Columns.module.scss");
var _columnsModuleScssDefault = parcelHelpers.interopDefault(_columnsModuleScss);
var _removeAllSvg = require("../../assets/img/remove-all.svg");
var _removeAllSvgDefault = parcelHelpers.interopDefault(_removeAllSvg);
const ColumnDone = ()=>{
    const todosRef = (0, _getRefDefault.default)(null);
    const counterRef = (0, _getRefDefault.default)(null);
    (0, _rootObserver.doneObserver).subscribe((prevState, state, type)=>{
        if (type !== "update") {
            counterRef.current.innerText = state.length;
            const newTodos = state.filter((todo)=>!prevState.find((prev)=>prev.id === todo.id)).map((todo)=>(0, _cardDefault.default)(todo));
            todosRef.current.append(...newTodos);
        }
        if (type === "update") {
            const todo = state.find((todo, i)=>!(0, _equalObjectsDefault.default)(prevState[i], todo));
            if (todo) {
                const oldNode = (0, _rootTreeElements.treeElements).get(todo.id);
                todosRef.current.replaceChild((0, _cardDefault.default)(todo), oldNode);
            }
        }
    });
    const handleRemoveAll = ()=>{
        (0, _renderDOMDefault.default)((0, _warningPopUpDefault.default)("Are you sure you want to remove all items?", "forRemove"));
    };
    return (0, _createTags.div)({
        class: (0, _columnsModuleScssDefault.default).container
    }, (0, _createTags.div)({
        class: (0, _columnsModuleScssDefault.default).header
    }, (0, _createTags.h2)({
        class: (0, _columnsModuleScssDefault.default).title
    }, "Done"), (0, _createTags.div)({
        ref: counterRef,
        class: (0, _columnsModuleScssDefault.default).counter
    }, 0)), (0, _createTags.div)({
        ref: todosRef,
        class: (0, _columnsModuleScssDefault.default).items
    }), (0, _createTags.button)({
        type: "button",
        class: [
            (0, _columnsModuleScssDefault.default).addTodoBtn,
            "_ripple"
        ].join(" "),
        onClick: handleRemoveAll
    }, (0, _createTags.img)({
        src: (0, _removeAllSvgDefault.default),
        alt: "new todo"
    }), "Remove all"));
};
exports.default = ColumnDone;

},{"../../utils/createTags":"jPQe9","../../utils/getRef":"5tnsX","../../utils/equalObjects":"eOUmm","../../utils/renderDOM":"g6kCL","../warningPopUp/warningPopUp":"5Ub9y","../card/Card":"1YEIV","../../observer/rootObserver":"3wtmd","../../threeElements/rootTreeElements":"80Ahw","./Columns.module.scss":"gUDV6","../../assets/img/remove-all.svg":"1cDDw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cDDw":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lPpKD") + "remove-all.f1509abc.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lvzZ5":[function() {},{}],"f11eJ":[function() {},{}],"337Pj":[function() {},{}]},["7Aums","bNKaB"], "bNKaB", "parcelRequirea26f")

//# sourceMappingURL=index.0641b553.js.map
