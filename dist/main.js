/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n    width: 2em;\n    height: 2em;\n}\n\n::-webkit-scrollbar-button {\n    background: #ccc\n}\n::-webkit-scrollbar-track-piece {\n    background: #888\n}\n/* ::-webkit-scrollbar-thumb {\n    background: #eee\n}​ */\n\nbody {\n    justify-content: center;\n    background-color: #676F54;\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 300px 700px;\n    grid-template-rows: 100px 700px 30px;\n    overflow:scroll;\n}\n\n.HeaderBox{\n    grid-area: 1/1/2/3;\n    background-color: #79B4A9;\n    display: flex;\n    align-items:center;\n    justify-content: center;\n}\n.navigationBarTasks{\n    height: 5em;\n}\n.NavigationBox{\n    background-color: #9CC69B;\n    grid-area: 2/1/3/2;\n    display: grid;\n    padding: 5px;\n    overflow:scroll;\n    scrollbar-width: 12em;\n    align-items: center;\n    justify-content: center;\n}\n\n.projectBox{\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.projectBox > p {\n    font-size: 1.5em\n}\n\n.projects {\n    width: 95%;\n    padding: 5px;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n}\n\n.navigationTask {\n    display: grid;\n    height: 100%;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    grid-template-columns: 4fr 4fr 4fr;\n    grid-template-rows: 4fr 1fr;\n}\n\n.navigationTask > p {\n    grid-area: 1/1/2/3;\n    font-size: 1.2em;\n    padding: 0;\n    margin: 0;\n}\n\n.navigationTask > .checkbox {\n    height: 45%\n}\n\n.checked {\n    text-decoration: line-through;\n}\n.checkbox:checked {\n    box-shadow: 0 0 0 3px rgb(204, 191, 11);\n}\n#btnsContainer {\n    position: sticky;\n    margin: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#DisplayBox{\n    background-color:#D7F2BA ;\n    grid-area: 2/2/3/3;\n    padding: 10px;\n    overflow:scroll;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 10%, 50%, 40%\n}\n\n#dailyDisplay {\n    display:grid;\n    grid-template-columns: repeat(1, 1fr);\n    margin-bottom: 40px;\n}\n\n.DailyTasks {\n    display: grid;\n    grid-template-columns: 1fr;\n    border: solid;\n    align-items:stretch;\n    justify-content: space-evenly\n}\n\n.dailyTaskTopContainer {\n    display: grid;\n    grid-template-columns: 50% 25% 25%;\n    margin: 2px;\n}\n\n.dailyTaskBottomContainer {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    margin: 2px;\n    grid-template-columns: 60% 20% 20%;\n    grid-template-rows: 100%;\n}\n\n.FooterBox{\n    background-color: #79B4A9;\n    grid-area: 3/1/4/3;\n}\n\n.hidden {\n    visibility: hidden;\n    display: none;\n}\n\n.createPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}\n\n.createTaskPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}\n\n#editPage {\n    z-index: 1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: beige;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI;AACJ;AACA;IACI;AACJ;AACA;;IAEI;;AAEJ;IACI,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI;AACJ;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,SAAS;AACb;;AAEA;IACI;AACJ;;AAEA;IACI,6BAA6B;AACjC;AACA;IACI,uCAAuC;AAC3C;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,aAAa;IACb,2BAA2B;IAC3B;AACJ;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,eAAe;IACf,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,eAAe;IACf,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["::-webkit-scrollbar {\n    width: 2em;\n    height: 2em;\n}\n\n::-webkit-scrollbar-button {\n    background: #ccc\n}\n::-webkit-scrollbar-track-piece {\n    background: #888\n}\n/* ::-webkit-scrollbar-thumb {\n    background: #eee\n}​ */\n\nbody {\n    justify-content: center;\n    background-color: #676F54;\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 300px 700px;\n    grid-template-rows: 100px 700px 30px;\n    overflow:scroll;\n}\n\n.HeaderBox{\n    grid-area: 1/1/2/3;\n    background-color: #79B4A9;\n    display: flex;\n    align-items:center;\n    justify-content: center;\n}\n.navigationBarTasks{\n    height: 5em;\n}\n.NavigationBox{\n    background-color: #9CC69B;\n    grid-area: 2/1/3/2;\n    display: grid;\n    padding: 5px;\n    overflow:scroll;\n    scrollbar-width: 12em;\n    align-items: center;\n    justify-content: center;\n}\n\n.projectBox{\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.projectBox > p {\n    font-size: 1.5em\n}\n\n.projects {\n    width: 95%;\n    padding: 5px;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n}\n\n.navigationTask {\n    display: grid;\n    height: 100%;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    grid-template-columns: 4fr 4fr 4fr;\n    grid-template-rows: 4fr 1fr;\n}\n\n.navigationTask > p {\n    grid-area: 1/1/2/3;\n    font-size: 1.2em;\n    padding: 0;\n    margin: 0;\n}\n\n.navigationTask > .checkbox {\n    height: 45%\n}\n\n.checked {\n    text-decoration: line-through;\n}\n.checkbox:checked {\n    box-shadow: 0 0 0 3px rgb(204, 191, 11);\n}\n#btnsContainer {\n    position: sticky;\n    margin: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#DisplayBox{\n    background-color:#D7F2BA ;\n    grid-area: 2/2/3/3;\n    padding: 10px;\n    overflow:scroll;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 10%, 50%, 40%\n}\n\n#dailyDisplay {\n    display:grid;\n    grid-template-columns: repeat(1, 1fr);\n    margin-bottom: 40px;\n}\n\n.DailyTasks {\n    display: grid;\n    grid-template-columns: 1fr;\n    border: solid;\n    align-items:stretch;\n    justify-content: space-evenly\n}\n\n.dailyTaskTopContainer {\n    display: grid;\n    grid-template-columns: 50% 25% 25%;\n    margin: 2px;\n}\n\n.dailyTaskBottomContainer {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    margin: 2px;\n    grid-template-columns: 60% 20% 20%;\n    grid-template-rows: 100%;\n}\n\n.FooterBox{\n    background-color: #79B4A9;\n    grid-area: 3/1/4/3;\n}\n\n.hidden {\n    visibility: hidden;\n    display: none;\n}\n\n.createPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}\n\n.createTaskPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}\n\n#editPage {\n    z-index: 1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: beige;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/crud.js":
/*!********************************!*\
  !*** ./src/components/crud.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "createTaskPage": () => (/* binding */ createTaskPage),
/* harmony export */   "initializeButtons": () => (/* binding */ initializeButtons),
/* harmony export */   "initializeCheckbox": () => (/* binding */ initializeCheckbox)
/* harmony export */ });
/* harmony import */ var _script_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/projects.js */ "./src/components/script/projects.js");
/* harmony import */ var _script_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/tasks.js */ "./src/components/script/tasks.js");



var projectList = (0,_script_projects_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();
var taskList = (0,_script_tasks_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)();

function createPage() {
    const createNewProject = document.createElement("div")
    createNewProject.classList.add("createPage","hidden")
    document.body.appendChild(createNewProject);
        const formContainer = document.createElement("div")
        formContainer.classList.add("formContainer");
        createNewProject.appendChild(formContainer);
            const form = document.createElement("div")

            formContainer.appendChild(form)

            var closeFormBtn = document.createElement("button");
            closeFormBtn.setAttribute("id","closeWindowBtn");
            closeFormBtn.innerHTML="Exit"
            formContainer.appendChild(closeFormBtn)
            closeFormBtn.addEventListener("click", () => {
                createNewProject.classList.add("hidden");
            })
            
            var projectName = document.createElement("input");
            projectName.setAttribute("type","text");
            projectName.setAttribute("name","projectName");
            projectName.setAttribute("id","projectName");
            projectName.setAttribute("placeholder","Please enter the project name");
            form.appendChild(projectName)

            var submitbtn = document.createElement("button");
            submitbtn.innerHTML = "Add"
            submitbtn.setAttribute("type","submit");
            form.appendChild(submitbtn);

            submitbtn.addEventListener("click", () => {
                var name = document.getElementById("projectName").value;
                const newProject = (0,_script_projects_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);
                projectList.push(newProject)
                localStorage.setItem("ProjectList",JSON.stringify(projectList));
                window.location.reload();
                createNewProject.classList.add("hidden");
            })
}

function createTaskPage() {
    const createNewTask = document.createElement("div")
    createNewTask.classList.add("createTaskPage","hidden")
    document.body.appendChild(createNewTask);
        const formContainer = document.createElement("div")
        formContainer.classList.add("formContainer");
        createNewTask.appendChild(formContainer);
            const form = document.createElement("div")

            formContainer.appendChild(form)

            var closeFormBtn = document.createElement("button");
            closeFormBtn.setAttribute("id","closeWindowBtn");
            closeFormBtn.innerHTML="Exit"
            formContainer.appendChild(closeFormBtn)
            closeFormBtn.addEventListener("click", () => {
                createNewTask.classList.add("hidden");
            })
            var taskName = document.createElement("input");
            taskName.setAttribute("type","text");
            taskName.setAttribute("name","taskName");
            taskName.setAttribute("id","taskName");
            taskName.setAttribute("placeholder","Please enter the task name");
            form.appendChild(taskName)

            var taskPriority = document.createElement("select");
            const priorityOptions = ["high","medium","low"];
            for (var i = 0; i < priorityOptions.length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value",priorityOptions[i]);
                option.text = priorityOptions[i];
                taskPriority.appendChild(option)
            }
            taskPriority.setAttribute("type","text");
            taskPriority.setAttribute("name","taskPriority");
            taskPriority.setAttribute("id","taskPriority");
            taskPriority.setAttribute("placeholder","Please enter the task priority");
            form.appendChild(taskPriority)

            var taskDescription = document.createElement("input");
            taskDescription.setAttribute("type","text");
            taskDescription.setAttribute("name","taskDescription");
            taskDescription.setAttribute("id","taskDescription");
            taskDescription.setAttribute("placeholder","Please enter the task description")
            form.appendChild(taskDescription)

            var taskDueDate = document.createElement("input");
            taskDueDate.setAttribute("type","date");
            taskDueDate.setAttribute("name","taskDueDate");
            taskDueDate.setAttribute("id","taskDueDate");
            taskDueDate.setAttribute("placeholder","Please enter the task due date")
            form.appendChild(taskDueDate)

            var projectName = document.createElement("select");

            for (var i = 0; i < projectList.length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value",projectList[i].projectName);
                option.text = projectList[i].projectName;
                projectName.appendChild(option);
            }
            // projectName.setAttribute("type","text");
            // projectName.setAttribute("name","projectName");
            projectName.setAttribute("id","selectProjectName");
            // projectName.setAttribute("placeholder","Please enter the project this should fall under")
            form.appendChild(projectName)

            var submitbtn = document.createElement("button");
            submitbtn.setAttribute("type","submit");
            form.appendChild(submitbtn);

            submitbtn.addEventListener("click", () => {
                var title = document.getElementById("taskName").value;
                var description = document.getElementById("taskDescription").value;
                var dueDate = document.getElementById("taskDueDate").value
                var priority = document.getElementById("taskPriority").value
                var select = document.getElementById("selectProjectName").value;
                const newProject = (0,_script_tasks_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(title, description, dueDate, priority, select);
                taskList.push(newProject)
                localStorage.setItem("TaskList",JSON.stringify(taskList));
                window.location.reload();
                createNewTask.classList.add("hidden");
            })
}

function createEditPage(selectedTask) {
    var editTask = document.createElement("div")
    editTask.setAttribute("id","editPage")
    document.body.appendChild(editTask);
        const formContainer = document.createElement("div")
        formContainer.classList.add("formContainer");
        editTask.appendChild(formContainer);
            const form = document.createElement("div")

            formContainer.appendChild(form)

            var closeFormBtn = document.createElement("button");
            closeFormBtn.setAttribute("id","closeWindowBtn");
            closeFormBtn.innerHTML="Exit"
            formContainer.appendChild(closeFormBtn)
            closeFormBtn.addEventListener("click", () => {
                editTask.classList.add("hidden");
            })
            var taskName = document.createElement("input");
            taskName.setAttribute("type","text");
            taskName.setAttribute("name","taskName");
            taskName.setAttribute("id","taskName");
            taskName.value = selectedTask.taskTitle;
            form.appendChild(taskName)

            var taskPriority = document.createElement("select");
            const priorityOptions = ["high","medium","low"];
            for (var i = 0; i < priorityOptions.length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value",priorityOptions[i]);
                option.text = priorityOptions[i];
                taskPriority.appendChild(option)
            }
            taskPriority.setAttribute("type","text");
            taskPriority.setAttribute("name","taskPriority");
            taskPriority.setAttribute("id","taskPriority");
            taskPriority.value = selectedTask.taskPriority;
            form.appendChild(taskPriority)

            var editTaskDescription = document.createElement("input");
            editTaskDescription.setAttribute("type","text");
            editTaskDescription.setAttribute("name","taskDescription");
            editTaskDescription.setAttribute("id","taskDescription");
            editTaskDescription.value = selectedTask.taskDescription;
            form.appendChild(editTaskDescription)

            var taskDueDate = document.createElement("input");
            taskDueDate.setAttribute("type","date");
            taskDueDate.setAttribute("name","taskDueDate");
            taskDueDate.setAttribute("id","taskDueDate");
            taskDueDate.value = selectedTask.taskDueDate;
            form.appendChild(taskDueDate)

            var projectName = document.createElement("select");

            for (var i = 0; i < projectList.length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value",projectList[i].projectName);
                option.text = projectList[i].projectName;
                projectName.appendChild(option);
            }

            projectName.setAttribute("id","selectProjectName");
            projectName.value = selectedTask.projectName;
            form.appendChild(projectName)
console.log(taskList);
            var submitbtn = document.createElement("button");
            submitbtn.setAttribute("type","submit");
            form.appendChild(submitbtn);
            console.log(taskList)
            console.log(selectedTask)
            var taskListIndex = taskList.findIndex((task => task.taskTitle == selectedTask.taskTitle))
            console.log(taskListIndex)
            submitbtn.addEventListener("click", () => {
                var title = taskName.value;
                var description = editTaskDescription.value;
                var dueDate = taskDueDate.value
                var priority = taskPriority.value
                var select = projectName.value;
                Object.assign(taskList[taskListIndex] , {taskTitle: title, taskDescription: description, taskDueDate: dueDate, taskPriority: priority, projectName: select})
                localStorage.setItem("TaskList",JSON.stringify(taskList));
                window.location.reload();
                editTask.classList.add("hidden");
            })
}

function newProjectBtn() {
    const newProjectBtn = document.querySelectorAll(".NewProjectBtn")
    newProjectBtn.forEach(x => 
        x.addEventListener("click", newProject)
    )
}

function newProject() {
    const createPage = document.getElementsByClassName("createPage")
    createPage[0].classList.remove("hidden");
}

function deleteProjectBtn() {
    const dltbtn = document.querySelectorAll(".deleteProject")
    dltbtn.forEach(x => 
    x.addEventListener("click", deleteProject)
    )
}

function deleteProject() {
    prompt("Deleting this project will also remove tasks assigned to this project. Are you happy to proceed?")
    console.log(this.previousSibling.childNodes[0].nodeValue)
    const projectForDeletion = this.previousSibling.childNodes[0].nodeValue;
    projectList.forEach(x => {
        if (x.projectName == projectForDeletion) {
            projectList.splice(projectList.indexOf(x),1);
            localStorage.setItem("ProjectList",JSON.stringify(projectList));
            window.location.reload();
        }
    })
}

function newTaskBtn() {
    const newProjectBtn = document.querySelectorAll(".NewTaskBtn")
    newProjectBtn.forEach(x => 
        x.addEventListener("click", newTask)
    )
}

function newTask() {
    const createTaskPage = document.getElementsByClassName("createTaskPage")
    createTaskPage[0].classList.remove("hidden");
}

function deleteTaskBtn() {
    const dltbtn = document.querySelectorAll(".deleteTask")
    dltbtn.forEach(x => 
    x.addEventListener("click", deleteTask)
    )
}

function deleteTask() {
    prompt("Do you wish to permanently remove this task?")
    const taskForDeletion = this.parentNode.attributes[1].nodeValue;
    taskList.forEach(x => {
        if (x.taskTitle == taskForDeletion) {
            console.log("go?")
            taskList.splice(taskList.indexOf(x),1);
            localStorage.setItem("TaskList",JSON.stringify(taskList));
            window.location.reload();
        }
    })
}

function editButton() {
    const editBtn = document.querySelectorAll(".editTask");
    editBtn.forEach(x => x.addEventListener("click",editTask))
}

function editTask() {
    var fetchTask = this.parentNode.attributes[1].nodeValue;
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].taskTitle == fetchTask) {
            var selectedTask = taskList[i]
        }
    }
    createEditPage(selectedTask)
}



function viewButton() {
    const viewBtn = document.querySelectorAll(".viewTask");
    viewBtn.forEach(x => x.addEventListener("click",viewTask))
}

function viewTask() {
    const viewPage = document.getElementById("DisplayBox");
    var fetchTask = this.parentNode.attributes[1].nodeValue;
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].taskTitle == fetchTask) {
            var task = taskList[i]
        }
    }
    // viewPage.innerHTML = "";
    // ///
    // // const box = document.getElementById("dailyDisplay");
    // const taskTile = document.createElement("div");
    // const titleElement = document.createElement("p");
    // titleElement.innerHTML = selectedTask.taskTitle;
    // const descriptionElement = document.createElement("p");
    // descriptionElement.innerHTML = selectedTask.taskDescription;
    // const dueDateElement = document.createElement("p");
    // dueDateElement.innerHTML = selectedTask.taskDueDate;
    // const projectElement = document.createElement("p");
    // projectElement.innerHTML = selectedTask.projectName;
    // const priorityElement = document.createElement("p");
    // priorityElement.innerHTML = selectedTask.taskPriority;
    // taskTile.classList.add("class", selectedTask.taskPriority)

    // taskTile.appendChild(titleElement)
    // taskTile.appendChild(descriptionElement)
    // taskTile.appendChild(dueDateElement)
    // taskTile.appendChild(projectElement)
    // taskTile.appendChild(priorityElement)
    // viewPage.appendChild(taskTile)
    ///
    viewPage.innerHTML = "";

    const box = document.getElementById("weeklyDisplay");

    const taskTile = document.createElement("div");
    taskTile.classList.add("DailyTasks");

    const titleElement = document.createElement("p");
    titleElement.classList.add("taskTileTitle")
    titleElement.innerHTML = task.taskTitle;

    const projectElement = document.createElement("p");
    projectElement.classList.add("taskTileProject");
    projectElement.innerHTML = task.projectName;

    const priorityElement = document.createElement("p");
    priorityElement.classList.add("taskTilePriority");
    priorityElement.innerHTML = task.taskPriority + " priority";

    const dueDateElement = document.createElement("p");
    dueDateElement.classList.add("taskTileDueDate")
    dueDateElement.innerHTML = task.taskDueDate;

    const topContainer = document.createElement("div");
    topContainer.classList.add("dailyTaskTopContainer")
    topContainer.appendChild(titleElement);
    topContainer.appendChild(projectElement);
    topContainer.appendChild(priorityElement);
    

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("taskTileDescription")
    descriptionElement.innerHTML = task.taskDescription;

    var checkbox = document.createElement("INPUT");
    checkbox.classList.add("checkbox","taskTileCheckbox")
    checkbox.setAttribute("type","checkbox");

    const bottomContainer = document.createElement("div");
    bottomContainer.classList.add("dailyTaskBottomContainer")
    bottomContainer.appendChild(descriptionElement);
    bottomContainer.appendChild(dueDateElement);
    bottomContainer.appendChild(checkbox);
    
    taskTile.appendChild(topContainer)
    taskTile.appendChild(bottomContainer)
    viewPage.appendChild(taskTile)
}

function initializeCheckbox() {
    var checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(x =>
        x.addEventListener("click", changestatus)
    )
}

function changestatus() {
    var changeTaskStatus = this.parentNode.attributes[1].nodeValue;
    taskList.forEach(x => {
        if (x.taskTitle == changeTaskStatus) {
            if (x.status == "notcompleted") {
                console.log(x)
                console.log(x.status)
                x.status = "completed"
                console.log(taskList);
                this.previousSibling.classList.add("checked")
                localStorage.setItem("TaskList",JSON.stringify(taskList));
            } else if (x.status == "completed") {
                console.log(x)
                console.log(x.status)
                x.status = "notcompleted"
                console.log(taskList);
                this.previousSibling.classList.remove("checked")
                localStorage.setItem("TaskList",JSON.stringify(taskList));
            }
        }
    })
}
function initializeButtons() {
    newProjectBtn()
    deleteProjectBtn()
    newTaskBtn()
    deleteTaskBtn()
    editButton()
    viewButton()
}



/***/ }),

/***/ "./src/components/display.js":
/*!***********************************!*\
  !*** ./src/components/display.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/tasks.js */ "./src/components/script/tasks.js");


var taskList = (0,_script_tasks_js__WEBPACK_IMPORTED_MODULE_0__.getTasks)();


function createDisplay() {
    const displayBox = document.createElement('div');
    displayBox.setAttribute("id","DisplayBox");
    document.body.appendChild(displayBox);
    getTodaysDate();
    displayTodayTasks();
    displayWeeklyTasks();
    checkForDailyTasks();
    checkForWeeklyTasks();
}

function displayTodayTasks() {
    var displayTasks = document.createElement('div');
    var today = getTodaysDate();
    console.log(today)
    displayTasks.innerHTML = (`The date is ${today}. Here are today's tasks!`);
    displayTasks.setAttribute("id","dailyDisplay")
    const box = document.getElementById("DisplayBox");
    box.appendChild(displayTasks);
}

function getTodaysDate() {
    let today = new Date().toISOString().slice(0,10);
    return today
}

function displayWeeklyTasks() {
    var displayWeeklyTasks = document.createElement("div");
    var tomorrowDate = new Date(new Date().getTime()+(1*24*60*60*1000)).toISOString().slice(0,10);
    var nextWeek = new Date(new Date().getTime()+(7*24*60*60*1000)).toISOString().slice(0,10);
    displayWeeklyTasks.innerHTML = (`Tasks for the week starting from ${tomorrowDate} until ${nextWeek}`);
    displayWeeklyTasks.setAttribute("id","weeklyDisplay")
    const box = document.getElementById("DisplayBox");
    box.appendChild(displayWeeklyTasks)
}

function renderDailyTask(task) {
    const box = document.getElementById("dailyDisplay");

    const taskTile = document.createElement("div");
    taskTile.classList.add("DailyTasks");

    const titleElement = document.createElement("p");
    titleElement.classList.add("taskTileTitle")
    titleElement.innerHTML = task.taskTitle;

    const projectElement = document.createElement("p");
    projectElement.classList.add("taskTileProject");
    projectElement.innerHTML = task.projectName;

    const priorityElement = document.createElement("p");
    priorityElement.classList.add("taskTilePriority");
    priorityElement.innerHTML = task.taskPriority + " priority";

    const topContainer = document.createElement("div");
    topContainer.classList.add("dailyTaskTopContainer")
    topContainer.appendChild(titleElement);
    topContainer.appendChild(projectElement);
    topContainer.appendChild(priorityElement);
    

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("taskTileDescription")
    descriptionElement.innerHTML = task.taskDescription;

    var checkbox = document.createElement("INPUT");
    checkbox.classList.add("checkbox","taskTileCheckbox")
    checkbox.setAttribute("type","checkbox");

    const bottomContainer = document.createElement("div");
    bottomContainer.classList.add("dailyTaskBottomContainer")
    bottomContainer.appendChild(descriptionElement);
    bottomContainer.appendChild(checkbox);
    
    taskTile.appendChild(topContainer)
    taskTile.appendChild(bottomContainer)
    box.appendChild(taskTile)
}

function renderWeeklyTask(task) {
    // const box = document.getElementById("weeklyDisplay");
    // const taskTile = document.createElement("div");
    // const titleElement = document.createElement("p");
    // titleElement.innerHTML = task.taskTitle;

    // const descriptionElement = document.createElement("p");
    // descriptionElement.innerHTML = task.taskDescription;

    // const dueDateElement = document.createElement("p");
    // dueDateElement.innerHTML = task.taskDueDate;

    // const projectElement = document.createElement("p");
    // projectElement.innerHTML = task.projectName;

    // const priorityElement = document.createElement("p");
    // priorityElement.innerHTML = task.taskPriority;
    // taskTile.classList.add("WeeklyTasks");

    // taskTile.appendChild(titleElement)
    // taskTile.appendChild(descriptionElement)
    // taskTile.appendChild(dueDateElement)
    // taskTile.appendChild(projectElement)
    // taskTile.appendChild(priorityElement)
    // box.appendChild(taskTile)
    ///
    const box = document.getElementById("weeklyDisplay");

    const taskTile = document.createElement("div");
    taskTile.classList.add("DailyTasks");

    const titleElement = document.createElement("p");
    titleElement.classList.add("taskTileTitle")
    titleElement.innerHTML = task.taskTitle;

    const projectElement = document.createElement("p");
    projectElement.classList.add("taskTileProject");
    projectElement.innerHTML = task.projectName;

    const priorityElement = document.createElement("p");
    priorityElement.classList.add("taskTilePriority");
    priorityElement.innerHTML = task.taskPriority + " priority";

    const dueDateElement = document.createElement("p");
    dueDateElement.classList.add("taskTileDueDate")
    dueDateElement.innerHTML = task.taskDueDate;

    const topContainer = document.createElement("div");
    topContainer.classList.add("dailyTaskTopContainer")
    topContainer.appendChild(titleElement);
    topContainer.appendChild(projectElement);
    topContainer.appendChild(priorityElement);
    

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("taskTileDescription")
    descriptionElement.innerHTML = task.taskDescription;

    var checkbox = document.createElement("INPUT");
    checkbox.classList.add("checkbox","taskTileCheckbox")
    checkbox.setAttribute("type","checkbox");

    const bottomContainer = document.createElement("div");
    bottomContainer.classList.add("dailyTaskBottomContainer")
    bottomContainer.appendChild(descriptionElement);
    bottomContainer.appendChild(dueDateElement);
    bottomContainer.appendChild(checkbox);
    
    taskTile.appendChild(topContainer)
    taskTile.appendChild(bottomContainer)
    box.appendChild(taskTile)
    ///
}

function checkForDailyTasks() {
    var date = getTodaysDate();
    var taskList = (0,_script_tasks_js__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].taskDueDate == date) {
            renderDailyTask(taskList[i]);            
        } else {
        }
    } 
}

function checkForWeeklyTasks() {
    var date = getTodaysDate();
    var arrayOfWeek = [];
    var weeklyTasks = [];
    for (var i = 1; i < 7; i++) {
        var day = new Date(new Date().getTime()+(i*24*60*60*1000)).toISOString().slice(0,10);
        arrayOfWeek.push(day);
    }
    for (var i = 0; i < arrayOfWeek.length; i++) {
        var date = arrayOfWeek[i]
        for (var z = 0; z < taskList.length; z++) {
             if (taskList[z].taskDueDate == date) {
                weeklyTasks.push(taskList[z]);
             }
        }
    }
    weeklyTasks.forEach(task => renderWeeklyTask(task));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplay);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createFooter() {
    const Footer = document.createElement('div');
    Footer.innerHTML = ("Created by Blazej Wartalski");
    Footer.classList.add("FooterBox");
    document.body.appendChild(Footer);   
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
    const header = document.createElement('div');
    header.innerHTML =  ("To-Do List");
    header.classList.add("HeaderBox");
    document.body.appendChild(header);
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/projects.js */ "./src/components/script/projects.js");
/* harmony import */ var _script_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/tasks.js */ "./src/components/script/tasks.js");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud.js */ "./src/components/crud.js");




var projectList = (0,_script_projects_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();

var tasksList = (0,_script_tasks_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)();

function createSideNav() {
    const sideNav = document.createElement('div');
    sideNav.innerHTML = ("List of projects");
    sideNav.classList.add("NavigationBox")
    document.body.appendChild(sideNav);
}

function assignTasksToProjects() {
    tasksList.forEach(tasksToProjects);
}

function createProjectBox() {
    projectList.forEach(renderProjectList);
}

function tasksToProjects(task) {

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].projectName == task.projectName) {
            projectList[i].taskList.push(task)
        }
    }

}

function createButton(btnName, btnText, master, classname) {
    var btnName = document.createElement("button");
    btnName.innerHTML = (btnText);
    master.appendChild(btnName);
    if (classname != undefined) {
        btnName.setAttribute("class",classname)
    }
}

function renderProjectList(i) {
    var ul = document.createElement("ul");
    ul.setAttribute('class','projects')
    ul.setAttribute('id',i.projectName)
    const box = document.getElementsByClassName("NavigationBox");
    box[0].appendChild(ul);
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("projectBox")
    var p = document.createElement("p");
    p.innerHTML = i.projectName;
    ul.appendChild(projectDiv);
    console.log(p)
    projectDiv.appendChild(p);
    createButton("deleteBtn","delete",projectDiv, "deleteProject")
    if (i.taskList.length > 0) {
        i.taskList.forEach(item=>buildTaskList(item))
    }
}

function buildTaskList(item) {
    var taskBox = document.createElement("div");
    taskBox.classList.add("navigationBarTasks")

    var li = document.createElement("LI");
    li.setAttribute('class',"navigationTask")
    li.setAttribute('id',item.taskTitle)
    const ul = document.getElementById(item.projectName);
    var text = document.createElement("p");
    text.classList.add("taskName");
    text.innerText = item.taskTitle;
    li.appendChild(text);
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("class","checkbox");
    if (item.status == "completed") {
        checkbox.setAttribute("checked", true)        
    }
    li.appendChild(checkbox);
    createButton("viewBtn","view",li, "viewTask");
    createButton("editBtn","edit",li, "editTask");
    createButton("deleteBtn","delete",li, "deleteTask");
    taskBox.appendChild(li);
    if (item.status == "completed") {
        text.classList.add("checked")        
    }
    console.log(item)
    ul.appendChild(taskBox);
}

function createSettingButtons() {
    const box = document.getElementsByClassName("NavigationBox");
    const btnsContainer = document.createElement("div");
    btnsContainer.setAttribute("id","btnsContainer")
    box[0].appendChild(btnsContainer);
    // createButton("nightModeBtn", "Switch to Night Mode", box[0],"nightmode");
    createButton("newProjectBtn", "Add a new project", btnsContainer,"NewProjectBtn");
    createButton("newTaskBtn", "Add a new task", btnsContainer,"NewTaskBtn");
}
function initializeSideNav() {
    createSideNav();
    assignTasksToProjects();
    createProjectBox();
    createSettingButtons();
    (0,_crud_js__WEBPACK_IMPORTED_MODULE_2__.initializeButtons)();
    (0,_crud_js__WEBPACK_IMPORTED_MODULE_2__.initializeCheckbox)();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSideNav);

/***/ }),

/***/ "./src/components/script/projects.js":
/*!*******************************************!*\
  !*** ./src/components/script/projects.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects)
/* harmony export */ });
//getProjects checks the local storage for 'ProjectList' from which it returns the projectList.
//if it has 0 entries or is null, it creates the initial project titled All Projects.
function getProjects() {
    var projectList = JSON.parse(localStorage.getItem('ProjectList'))
    if (projectList == null || projectList.length == 0) {
        console.log("halo")
        var projectList = [];
        localStorage.setItem('ProjectList',JSON.stringify(projectList));
        return projectList
    } else {
        return projectList
    }
}

const createProject = (name, prio) => {
    var projectList = JSON.parse(localStorage.getItem('ProjectList'))
    const project = {};
        project.projectName = name;
        project.projectPriority = prio;
        project.taskList = []
        projectList.push(project);
    return project
}



/***/ }),

/***/ "./src/components/script/tasks.js":
/*!****************************************!*\
  !*** ./src/components/script/tasks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "getTasks": () => (/* binding */ getTasks)
/* harmony export */ });
function getTasks() {
    var taskList = JSON.parse(localStorage.getItem('TaskList'))
    if (taskList == null || taskList.length == 0) {
        taskList = [];
        return taskList
    } else {
        return taskList
    }
}

function createTask(taskTitle, taskDescription, taskDueDate, taskPriority, projectName) {
    return {
        taskTitle : taskTitle,
        taskDescription : taskDescription,
        taskDueDate : taskDueDate,
        taskPriority: taskPriority,
        projectName : projectName,
        status: "notcompleted"
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.js */ "./src/components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer.js */ "./src/components/footer.js");
/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation.js */ "./src/components/navigation.js");
/* harmony import */ var _components_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/display.js */ "./src/components/display.js");
/* harmony import */ var _components_crud_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/crud.js */ "./src/components/crud.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







(0,_components_crud_js__WEBPACK_IMPORTED_MODULE_4__.createPage)();
(0,_components_crud_js__WEBPACK_IMPORTED_MODULE_4__.createTaskPage)();
(0,_components_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_components_navigation_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_display_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

//Add functionality to buttons
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQ0E7QUFDUztBQUNQO0FBQ2lDO0FBQy9EOztBQUVyQiwrREFBVTtBQUNWLG1FQUFjO0FBQ2QsaUVBQVk7QUFDWixxRUFBaUI7QUFDakIsaUVBQVk7QUFDWixrRUFBYTs7QUFFYiw4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NydWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zY3JpcHQvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NjcmlwdC90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6ICNjY2NcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XFxuICAgIGJhY2tncm91bmQ6ICM4ODhcXG59XFxuLyogOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWVcXG594oCLICovXFxuXFxuYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc2RjU0O1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggNzAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNzAwcHggMzBweDtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4uSGVhZGVyQm94e1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OUI0QTk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5uYXZpZ2F0aW9uQmFyVGFza3N7XFxuICAgIGhlaWdodDogNWVtO1xcbn1cXG4uTmF2aWdhdGlvbkJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlDQzY5QjtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiAxMmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RCb3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnByb2plY3RCb3ggPiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbVxcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvblRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgNGZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZnIgMWZyO1xcbn1cXG5cXG4ubmF2aWdhdGlvblRhc2sgPiBwIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5uYXZpZ2F0aW9uVGFzayA+IC5jaGVja2JveCB7XFxuICAgIGhlaWdodDogNDUlXFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5jaGVja2JveDpjaGVja2VkIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYigyMDQsIDE5MSwgMTEpO1xcbn1cXG4jYnRuc0NvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI0Rpc3BsYXlCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0Q3RjJCQSA7XFxuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlLCA1MCUsIDQwJVxcbn1cXG5cXG4jZGFpbHlEaXNwbGF5IHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uRGFpbHlUYXNrcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBhbGlnbi1pdGVtczpzdHJldGNoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVxcbn1cXG5cXG4uZGFpbHlUYXNrVG9wQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgMjUlIDI1JTtcXG4gICAgbWFyZ2luOiAycHg7XFxufVxcblxcbi5kYWlseVRhc2tCb3R0b21Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDIwJSAyMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcXG59XFxuXFxuLkZvb3RlckJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5QjRBOTtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3JlYXRlUGFnZSB7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcbn1cXG5cXG4uY3JlYXRlVGFza1BhZ2Uge1xcbiAgICB6LWluZGV4OjE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXG59XFxuXFxuI2VkaXRQYWdlIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTs7SUFFSTs7QUFFSjtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjY2NjXFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xcbiAgICBiYWNrZ3JvdW5kOiAjODg4XFxufVxcbi8qIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlXFxufeKAiyAqL1xcblxcbmJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3NkY1NDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDcwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDcwMHB4IDMwcHg7XFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXG59XFxuXFxuLkhlYWRlckJveHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzlCNEE5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubmF2aWdhdGlvbkJhclRhc2tze1xcbiAgICBoZWlnaHQ6IDVlbTtcXG59XFxuLk5hdmlnYXRpb25Cb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Q0M2OUI7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBvdmVyZmxvdzpzY3JvbGw7XFxuICAgIHNjcm9sbGJhci13aWR0aDogMTJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Qm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wcm9qZWN0Qm94ID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW1cXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb25UYXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDRmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDFmcjtcXG59XFxuXFxuLm5hdmlnYXRpb25UYXNrID4gcCB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2aWdhdGlvblRhc2sgPiAuY2hlY2tib3gge1xcbiAgICBoZWlnaHQ6IDQ1JVxcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4uY2hlY2tib3g6Y2hlY2tlZCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoMjA0LCAxOTEsIDExKTtcXG59XFxuI2J0bnNDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNEaXNwbGF5Qm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNEN0YyQkEgO1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSwgNTAlLCA0MCVcXG59XFxuXFxuI2RhaWx5RGlzcGxheSB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLkRhaWx5VGFza3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcXG59XFxuXFxuLmRhaWx5VGFza1RvcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDI1JSAyNSU7XFxuICAgIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4uZGFpbHlUYXNrQm90dG9tQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSAyMCUgMjAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XFxufVxcblxcbi5Gb290ZXJCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OUI0QTk7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZVBhZ2Uge1xcbiAgICB6LWluZGV4OjE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXG59XFxuXFxuLmNyZWF0ZVRhc2tQYWdlIHtcXG4gICAgei1pbmRleDoxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxufVxcblxcbiNlZGl0UGFnZSB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRQcm9qZWN0cywgY3JlYXRlUHJvamVjdCAgfSBmcm9tIFwiLi9zY3JpcHQvcHJvamVjdHMuanNcIlxuaW1wb3J0IHtnZXRUYXNrcyAsIGNyZWF0ZVRhc2t9IGZyb20gXCIuL3NjcmlwdC90YXNrcy5qc1wiXG5cbnZhciBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RzKCk7XG52YXIgdGFza0xpc3QgPSBnZXRUYXNrcygpO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY3JlYXRlTmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlUGFnZVwiLFwiaGlkZGVuXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgICAgICAgICAgdmFyIGNsb3NlRm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBjbG9zZUZvcm1CdG4uc2V0QXR0cmlidXRlKFwiaWRcIixcImNsb3NlV2luZG93QnRuXCIpO1xuICAgICAgICAgICAgY2xvc2VGb3JtQnRuLmlubmVySFRNTD1cIkV4aXRcIlxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUZvcm1CdG4pXG4gICAgICAgICAgICBjbG9zZUZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwicHJvamVjdE5hbWVcIik7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicHJvamVjdE5hbWVcIik7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiUGxlYXNlIGVudGVyIHRoZSBwcm9qZWN0IG5hbWVcIik7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuXG4gICAgICAgICAgICB2YXIgc3VibWl0YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHN1Ym1pdGJ0bi5pbm5lckhUTUwgPSBcIkFkZFwiXG4gICAgICAgICAgICBzdWJtaXRidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwic3VibWl0XCIpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRidG4pO1xuXG4gICAgICAgICAgICBzdWJtaXRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdExpc3RcIixKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrUGFnZSgpIHtcbiAgICBjb25zdCBjcmVhdGVOZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNyZWF0ZU5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImNyZWF0ZVRhc2tQYWdlXCIsXCJoaWRkZW5cIilcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Rhc2spO1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICBjcmVhdGVOZXdUYXNrLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgICAgICAgICB2YXIgY2xvc2VGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNsb3NlRm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY2xvc2VXaW5kb3dCdG5cIik7XG4gICAgICAgICAgICBjbG9zZUZvcm1CdG4uaW5uZXJIVE1MPVwiRXhpdFwiXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybUJ0bilcbiAgICAgICAgICAgIGNsb3NlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2YXIgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidGFza05hbWVcIik7XG4gICAgICAgICAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGFza05hbWVcIik7XG4gICAgICAgICAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiUGxlYXNlIGVudGVyIHRoZSB0YXNrIG5hbWVcIik7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKVxuXG4gICAgICAgICAgICB2YXIgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFtcImhpZ2hcIixcIm1lZGl1bVwiLFwibG93XCJdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmlvcml0eU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixwcmlvcml0eU9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHlPcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIixcInRhc2tQcmlvcml0eVwiKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiUGxlYXNlIGVudGVyIHRoZSB0YXNrIHByaW9yaXR5XCIpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpXG5cbiAgICAgICAgICAgIHZhciB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIixcInRhc2tEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiUGxlYXNlIGVudGVyIHRoZSB0YXNrIGRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbilcblxuICAgICAgICAgICAgdmFyIHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRhc2tEdWVEYXRlXCIpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRhc2tEdWVEYXRlXCIpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixcIlBsZWFzZSBlbnRlciB0aGUgdGFzayBkdWUgZGF0ZVwiKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSlcblxuICAgICAgICAgICAgdmFyIHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLHByb2plY3RMaXN0W2ldLnByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHByb2plY3RMaXN0W2ldLnByb2plY3ROYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgLy8gcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwicHJvamVjdE5hbWVcIik7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2VsZWN0UHJvamVjdE5hbWVcIik7XG4gICAgICAgICAgICAvLyBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiUGxlYXNlIGVudGVyIHRoZSBwcm9qZWN0IHRoaXMgc2hvdWxkIGZhbGwgdW5kZXJcIilcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG5cbiAgICAgICAgICAgIHZhciBzdWJtaXRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgc3VibWl0YnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInN1Ym1pdFwiKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0YnRuKTtcblxuICAgICAgICAgICAgc3VibWl0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIikudmFsdWVcbiAgICAgICAgICAgICAgICB2YXIgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tQcmlvcml0eVwiKS52YWx1ZVxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3ROYW1lXCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QucHVzaChuZXdQcm9qZWN0KVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVGFza0xpc3RcIixKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVOZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0UGFnZShzZWxlY3RlZFRhc2spIHtcbiAgICB2YXIgZWRpdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZWRpdFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIixcImVkaXRQYWdlXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0VGFzayk7XG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJcIik7XG4gICAgICAgIGVkaXRUYXNrLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgICAgICAgICB2YXIgY2xvc2VGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNsb3NlRm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY2xvc2VXaW5kb3dCdG5cIik7XG4gICAgICAgICAgICBjbG9zZUZvcm1CdG4uaW5uZXJIVE1MPVwiRXhpdFwiXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybUJ0bilcbiAgICAgICAgICAgIGNsb3NlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdmFyIHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICAgICAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRhc2tOYW1lXCIpO1xuICAgICAgICAgICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRhc2tOYW1lXCIpO1xuICAgICAgICAgICAgdGFza05hbWUudmFsdWUgPSBzZWxlY3RlZFRhc2sudGFza1RpdGxlO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZSlcblxuICAgICAgICAgICAgdmFyIHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXCJoaWdoXCIsXCJtZWRpdW1cIixcImxvd1wiXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpb3JpdHlPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIscHJpb3JpdHlPcHRpb25zW2ldKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5T3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidGFza1ByaW9yaXR5XCIpO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSBzZWxlY3RlZFRhc2sudGFza1ByaW9yaXR5O1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpXG5cbiAgICAgICAgICAgIHZhciBlZGl0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgZWRpdFRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgZWRpdFRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBlZGl0VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBlZGl0VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gc2VsZWN0ZWRUYXNrLnRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZWRpdFRhc2tEZXNjcmlwdGlvbilcblxuICAgICAgICAgICAgdmFyIHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRhc2tEdWVEYXRlXCIpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRhc2tEdWVEYXRlXCIpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUudmFsdWUgPSBzZWxlY3RlZFRhc2sudGFza0R1ZURhdGU7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKVxuXG4gICAgICAgICAgICB2YXIgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIscHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIixcInNlbGVjdFByb2plY3ROYW1lXCIpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSBzZWxlY3RlZFRhc2sucHJvamVjdE5hbWU7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuY29uc29sZS5sb2codGFza0xpc3QpO1xuICAgICAgICAgICAgdmFyIHN1Ym1pdGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBzdWJtaXRidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwic3VibWl0XCIpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRidG4pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRhc2spXG4gICAgICAgICAgICB2YXIgdGFza0xpc3RJbmRleCA9IHRhc2tMaXN0LmZpbmRJbmRleCgodGFzayA9PiB0YXNrLnRhc2tUaXRsZSA9PSBzZWxlY3RlZFRhc2sudGFza1RpdGxlKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0SW5kZXgpXG4gICAgICAgICAgICBzdWJtaXRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSB0YXNrTmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSBlZGl0VGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBkdWVEYXRlID0gdGFza0R1ZURhdGUudmFsdWVcbiAgICAgICAgICAgICAgICB2YXIgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkudmFsdWVcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ID0gcHJvamVjdE5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXNrTGlzdFt0YXNrTGlzdEluZGV4XSAsIHt0YXNrVGl0bGU6IHRpdGxlLCB0YXNrRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZTogZHVlRGF0ZSwgdGFza1ByaW9yaXR5OiBwcmlvcml0eSwgcHJvamVjdE5hbWU6IHNlbGVjdH0pXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUYXNrTGlzdFwiLEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIGVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0QnRuKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLk5ld1Byb2plY3RCdG5cIilcbiAgICBuZXdQcm9qZWN0QnRuLmZvckVhY2goeCA9PiBcbiAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdClcbiAgICApXG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgY3JlYXRlUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjcmVhdGVQYWdlXCIpXG4gICAgY3JlYXRlUGFnZVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0QnRuKCkge1xuICAgIGNvbnN0IGRsdGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlUHJvamVjdFwiKVxuICAgIGRsdGJ0bi5mb3JFYWNoKHggPT4gXG4gICAgeC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUHJvamVjdClcbiAgICApXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgcHJvbXB0KFwiRGVsZXRpbmcgdGhpcyBwcm9qZWN0IHdpbGwgYWxzbyByZW1vdmUgdGFza3MgYXNzaWduZWQgdG8gdGhpcyBwcm9qZWN0LiBBcmUgeW91IGhhcHB5IHRvIHByb2NlZWQ/XCIpXG4gICAgY29uc29sZS5sb2codGhpcy5wcmV2aW91c1NpYmxpbmcuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUpXG4gICAgY29uc3QgcHJvamVjdEZvckRlbGV0aW9uID0gdGhpcy5wcmV2aW91c1NpYmxpbmcuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgaWYgKHgucHJvamVjdE5hbWUgPT0gcHJvamVjdEZvckRlbGV0aW9uKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdExpc3QuaW5kZXhPZih4KSwxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdExpc3RcIixKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbmV3VGFza0J0bigpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5OZXdUYXNrQnRuXCIpXG4gICAgbmV3UHJvamVjdEJ0bi5mb3JFYWNoKHggPT4gXG4gICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2spXG4gICAgKVxufVxuXG5mdW5jdGlvbiBuZXdUYXNrKCkge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNyZWF0ZVRhc2tQYWdlXCIpXG4gICAgY3JlYXRlVGFza1BhZ2VbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza0J0bigpIHtcbiAgICBjb25zdCBkbHRidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVRhc2tcIilcbiAgICBkbHRidG4uZm9yRWFjaCh4ID0+IFxuICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spXG4gICAgKVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKCkge1xuICAgIHByb21wdChcIkRvIHlvdSB3aXNoIHRvIHBlcm1hbmVudGx5IHJlbW92ZSB0aGlzIHRhc2s/XCIpXG4gICAgY29uc3QgdGFza0ZvckRlbGV0aW9uID0gdGhpcy5wYXJlbnROb2RlLmF0dHJpYnV0ZXNbMV0ubm9kZVZhbHVlO1xuICAgIHRhc2tMaXN0LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGlmICh4LnRhc2tUaXRsZSA9PSB0YXNrRm9yRGVsZXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ28/XCIpXG4gICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih4KSwxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVGFza0xpc3RcIixKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdEJ1dHRvbigpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0VGFza1wiKTtcbiAgICBlZGl0QnRuLmZvckVhY2goeCA9PiB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGVkaXRUYXNrKSlcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soKSB7XG4gICAgdmFyIGZldGNoVGFzayA9IHRoaXMucGFyZW50Tm9kZS5hdHRyaWJ1dGVzWzFdLm5vZGVWYWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0YXNrTGlzdFtpXS50YXNrVGl0bGUgPT0gZmV0Y2hUYXNrKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRUYXNrID0gdGFza0xpc3RbaV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVFZGl0UGFnZShzZWxlY3RlZFRhc2spXG59XG5cblxuXG5mdW5jdGlvbiB2aWV3QnV0dG9uKCkge1xuICAgIGNvbnN0IHZpZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXdUYXNrXCIpO1xuICAgIHZpZXdCdG4uZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdmlld1Rhc2spKVxufVxuXG5mdW5jdGlvbiB2aWV3VGFzaygpIHtcbiAgICBjb25zdCB2aWV3UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGlzcGxheUJveFwiKTtcbiAgICB2YXIgZmV0Y2hUYXNrID0gdGhpcy5wYXJlbnROb2RlLmF0dHJpYnV0ZXNbMV0ubm9kZVZhbHVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhc2tMaXN0W2ldLnRhc2tUaXRsZSA9PSBmZXRjaFRhc2spIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza0xpc3RbaV1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB2aWV3UGFnZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIC8vIC8vL1xuICAgIC8vIC8vIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFpbHlEaXNwbGF5XCIpO1xuICAgIC8vIGNvbnN0IHRhc2tUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAvLyB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gc2VsZWN0ZWRUYXNrLnRhc2tUaXRsZTtcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAvLyBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gc2VsZWN0ZWRUYXNrLnRhc2tEZXNjcmlwdGlvbjtcbiAgICAvLyBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIGR1ZURhdGVFbGVtZW50LmlubmVySFRNTCA9IHNlbGVjdGVkVGFzay50YXNrRHVlRGF0ZTtcbiAgICAvLyBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IHNlbGVjdGVkVGFzay5wcm9qZWN0TmFtZTtcbiAgICAvLyBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAvLyBwcmlvcml0eUVsZW1lbnQuaW5uZXJIVE1MID0gc2VsZWN0ZWRUYXNrLnRhc2tQcmlvcml0eTtcbiAgICAvLyB0YXNrVGlsZS5jbGFzc0xpc3QuYWRkKFwiY2xhc3NcIiwgc2VsZWN0ZWRUYXNrLnRhc2tQcmlvcml0eSlcblxuICAgIC8vIHRhc2tUaWxlLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudClcbiAgICAvLyB0YXNrVGlsZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpXG4gICAgLy8gdGFza1RpbGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpXG4gICAgLy8gdGFza1RpbGUuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpXG4gICAgLy8gdGFza1RpbGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KVxuICAgIC8vIHZpZXdQYWdlLmFwcGVuZENoaWxkKHRhc2tUaWxlKVxuICAgIC8vL1xuICAgIHZpZXdQYWdlLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseURpc3BsYXlcIik7XG5cbiAgICBjb25zdCB0YXNrVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1RpbGUuY2xhc3NMaXN0LmFkZChcIkRhaWx5VGFza3NcIik7XG5cbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tUaWxlVGl0bGVcIilcbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gdGFzay50YXNrVGl0bGU7XG5cbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGlsZVByb2plY3RcIik7XG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gdGFzay5wcm9qZWN0TmFtZTtcblxuICAgIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1RpbGVQcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUVsZW1lbnQuaW5uZXJIVE1MID0gdGFzay50YXNrUHJpb3JpdHkgKyBcIiBwcmlvcml0eVwiO1xuXG4gICAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1RpbGVEdWVEYXRlXCIpXG4gICAgZHVlRGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGFzay50YXNrRHVlRGF0ZTtcblxuICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYWlseVRhc2tUb3BDb250YWluZXJcIilcbiAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQpO1xuICAgIFxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGlsZURlc2NyaXB0aW9uXCIpXG4gICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVySFRNTCA9IHRhc2sudGFza0Rlc2NyaXB0aW9uO1xuXG4gICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiLFwidGFza1RpbGVDaGVja2JveFwiKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImNoZWNrYm94XCIpO1xuXG4gICAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhaWx5VGFza0JvdHRvbUNvbnRhaW5lclwiKVxuICAgIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlRWxlbWVudCk7XG4gICAgYm90dG9tQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBcbiAgICB0YXNrVGlsZS5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpXG4gICAgdGFza1RpbGUuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGFpbmVyKVxuICAgIHZpZXdQYWdlLmFwcGVuZENoaWxkKHRhc2tUaWxlKVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQ2hlY2tib3goKSB7XG4gICAgdmFyIGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCh4ID0+XG4gICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZXN0YXR1cylcbiAgICApXG59XG5cbmZ1bmN0aW9uIGNoYW5nZXN0YXR1cygpIHtcbiAgICB2YXIgY2hhbmdlVGFza1N0YXR1cyA9IHRoaXMucGFyZW50Tm9kZS5hdHRyaWJ1dGVzWzFdLm5vZGVWYWx1ZTtcbiAgICB0YXNrTGlzdC5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZiAoeC50YXNrVGl0bGUgPT0gY2hhbmdlVGFza1N0YXR1cykge1xuICAgICAgICAgICAgaWYgKHguc3RhdHVzID09IFwibm90Y29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHguc3RhdHVzKVxuICAgICAgICAgICAgICAgIHguc3RhdHVzID0gXCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZy5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVGFza0xpc3RcIixKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh4LnN0YXR1cyA9PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4LnN0YXR1cylcbiAgICAgICAgICAgICAgICB4LnN0YXR1cyA9IFwibm90Y29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIilcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRhc2tMaXN0XCIsSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5mdW5jdGlvbiBpbml0aWFsaXplQnV0dG9ucygpIHtcbiAgICBuZXdQcm9qZWN0QnRuKClcbiAgICBkZWxldGVQcm9qZWN0QnRuKClcbiAgICBuZXdUYXNrQnRuKClcbiAgICBkZWxldGVUYXNrQnRuKClcbiAgICBlZGl0QnV0dG9uKClcbiAgICB2aWV3QnV0dG9uKClcbn1cblxuZXhwb3J0IHsgY3JlYXRlUGFnZSwgY3JlYXRlVGFza1BhZ2UsIGluaXRpYWxpemVCdXR0b25zLCBpbml0aWFsaXplQ2hlY2tib3ggfTsiLCJpbXBvcnQge2dldFRhc2tzICwgY3JlYXRlVGFza30gZnJvbSBcIi4vc2NyaXB0L3Rhc2tzLmpzXCJcblxudmFyIHRhc2tMaXN0ID0gZ2V0VGFza3MoKTtcblxuXG5mdW5jdGlvbiBjcmVhdGVEaXNwbGF5KCkge1xuICAgIGNvbnN0IGRpc3BsYXlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5Qm94LnNldEF0dHJpYnV0ZShcImlkXCIsXCJEaXNwbGF5Qm94XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheUJveCk7XG4gICAgZ2V0VG9kYXlzRGF0ZSgpO1xuICAgIGRpc3BsYXlUb2RheVRhc2tzKCk7XG4gICAgZGlzcGxheVdlZWtseVRhc2tzKCk7XG4gICAgY2hlY2tGb3JEYWlseVRhc2tzKCk7XG4gICAgY2hlY2tGb3JXZWVrbHlUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXlUYXNrcygpIHtcbiAgICB2YXIgZGlzcGxheVRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIHRvZGF5ID0gZ2V0VG9kYXlzRGF0ZSgpO1xuICAgIGNvbnNvbGUubG9nKHRvZGF5KVxuICAgIGRpc3BsYXlUYXNrcy5pbm5lckhUTUwgPSAoYFRoZSBkYXRlIGlzICR7dG9kYXl9LiBIZXJlIGFyZSB0b2RheSdzIHRhc2tzIWApO1xuICAgIGRpc3BsYXlUYXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGFpbHlEaXNwbGF5XCIpXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEaXNwbGF5Qm94XCIpO1xuICAgIGJveC5hcHBlbmRDaGlsZChkaXNwbGF5VGFza3MpO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RheXNEYXRlKCkge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgICByZXR1cm4gdG9kYXlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlZWtseVRhc2tzKCkge1xuICAgIHZhciBkaXNwbGF5V2Vla2x5VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZhciB0b21vcnJvd0RhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSsoMSoyNCo2MCo2MCoxMDAwKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgICB2YXIgbmV4dFdlZWsgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSsoNyoyNCo2MCo2MCoxMDAwKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgICBkaXNwbGF5V2Vla2x5VGFza3MuaW5uZXJIVE1MID0gKGBUYXNrcyBmb3IgdGhlIHdlZWsgc3RhcnRpbmcgZnJvbSAke3RvbW9ycm93RGF0ZX0gdW50aWwgJHtuZXh0V2Vla31gKTtcbiAgICBkaXNwbGF5V2Vla2x5VGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIixcIndlZWtseURpc3BsYXlcIilcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRpc3BsYXlCb3hcIik7XG4gICAgYm94LmFwcGVuZENoaWxkKGRpc3BsYXlXZWVrbHlUYXNrcylcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGFpbHlUYXNrKHRhc2spIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhaWx5RGlzcGxheVwiKTtcblxuICAgIGNvbnN0IHRhc2tUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGlsZS5jbGFzc0xpc3QuYWRkKFwiRGFpbHlUYXNrc1wiKTtcblxuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1RpbGVUaXRsZVwiKVxuICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSB0YXNrLnRhc2tUaXRsZTtcblxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tUaWxlUHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSB0YXNrLnByb2plY3ROYW1lO1xuXG4gICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb3JpdHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGlsZVByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5RWxlbWVudC5pbm5lckhUTUwgPSB0YXNrLnRhc2tQcmlvcml0eSArIFwiIHByaW9yaXR5XCI7XG5cbiAgICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGFpbHlUYXNrVG9wQ29udGFpbmVyXCIpXG4gICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KTtcbiAgICBcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1RpbGVEZXNjcmlwdGlvblwiKVxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB0YXNrLnRhc2tEZXNjcmlwdGlvbjtcblxuICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIixcInRhc2tUaWxlQ2hlY2tib3hcIilcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKTtcblxuICAgIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm90dG9tQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYWlseVRhc2tCb3R0b21Db250YWluZXJcIilcbiAgICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIFxuICAgIHRhc2tUaWxlLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcilcbiAgICB0YXNrVGlsZS5hcHBlbmRDaGlsZChib3R0b21Db250YWluZXIpXG4gICAgYm94LmFwcGVuZENoaWxkKHRhc2tUaWxlKVxufVxuXG5mdW5jdGlvbiByZW5kZXJXZWVrbHlUYXNrKHRhc2spIHtcbiAgICAvLyBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseURpc3BsYXlcIik7XG4gICAgLy8gY29uc3QgdGFza1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSB0YXNrLnRhc2tUaXRsZTtcblxuICAgIC8vIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB0YXNrLnRhc2tEZXNjcmlwdGlvbjtcblxuICAgIC8vIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgLy8gZHVlRGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGFzay50YXNrRHVlRGF0ZTtcblxuICAgIC8vIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgLy8gcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gdGFzay5wcm9qZWN0TmFtZTtcblxuICAgIC8vIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIHByaW9yaXR5RWxlbWVudC5pbm5lckhUTUwgPSB0YXNrLnRhc2tQcmlvcml0eTtcbiAgICAvLyB0YXNrVGlsZS5jbGFzc0xpc3QuYWRkKFwiV2Vla2x5VGFza3NcIik7XG5cbiAgICAvLyB0YXNrVGlsZS5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gICAgLy8gdGFza1RpbGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KVxuICAgIC8vIHRhc2tUaWxlLmFwcGVuZENoaWxkKGR1ZURhdGVFbGVtZW50KVxuICAgIC8vIHRhc2tUaWxlLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KVxuICAgIC8vIHRhc2tUaWxlLmFwcGVuZENoaWxkKHByaW9yaXR5RWxlbWVudClcbiAgICAvLyBib3guYXBwZW5kQ2hpbGQodGFza1RpbGUpXG4gICAgLy8vXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHlEaXNwbGF5XCIpO1xuXG4gICAgY29uc3QgdGFza1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tUaWxlLmNsYXNzTGlzdC5hZGQoXCJEYWlseVRhc2tzXCIpO1xuXG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGlsZVRpdGxlXCIpXG4gICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9IHRhc2sudGFza1RpdGxlO1xuXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1RpbGVQcm9qZWN0XCIpO1xuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IHRhc2sucHJvamVjdE5hbWU7XG5cbiAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvcml0eUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tUaWxlUHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlFbGVtZW50LmlubmVySFRNTCA9IHRhc2sudGFza1ByaW9yaXR5ICsgXCIgcHJpb3JpdHlcIjtcblxuICAgIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tUaWxlRHVlRGF0ZVwiKVxuICAgIGR1ZURhdGVFbGVtZW50LmlubmVySFRNTCA9IHRhc2sudGFza0R1ZURhdGU7XG5cbiAgICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGFpbHlUYXNrVG9wQ29udGFpbmVyXCIpXG4gICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KTtcbiAgICBcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1RpbGVEZXNjcmlwdGlvblwiKVxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSB0YXNrLnRhc2tEZXNjcmlwdGlvbjtcblxuICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIixcInRhc2tUaWxlQ2hlY2tib3hcIilcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKTtcblxuICAgIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm90dG9tQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYWlseVRhc2tCb3R0b21Db250YWluZXJcIilcbiAgICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpO1xuICAgIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgXG4gICAgdGFza1RpbGUuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKVxuICAgIHRhc2tUaWxlLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcbiAgICBib3guYXBwZW5kQ2hpbGQodGFza1RpbGUpXG4gICAgLy8vXG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yRGFpbHlUYXNrcygpIHtcbiAgICB2YXIgZGF0ZSA9IGdldFRvZGF5c0RhdGUoKTtcbiAgICB2YXIgdGFza0xpc3QgPSBnZXRUYXNrcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhc2tMaXN0W2ldLnRhc2tEdWVEYXRlID09IGRhdGUpIHtcbiAgICAgICAgICAgIHJlbmRlckRhaWx5VGFzayh0YXNrTGlzdFtpXSk7ICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5mdW5jdGlvbiBjaGVja0ZvcldlZWtseVRhc2tzKCkge1xuICAgIHZhciBkYXRlID0gZ2V0VG9kYXlzRGF0ZSgpO1xuICAgIHZhciBhcnJheU9mV2VlayA9IFtdO1xuICAgIHZhciB3ZWVrbHlUYXNrcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIHZhciBkYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSsoaSoyNCo2MCo2MCoxMDAwKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgICAgICAgYXJyYXlPZldlZWsucHVzaChkYXkpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZXZWVrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkYXRlID0gYXJyYXlPZldlZWtbaV1cbiAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB0YXNrTGlzdC5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgIGlmICh0YXNrTGlzdFt6XS50YXNrRHVlRGF0ZSA9PSBkYXRlKSB7XG4gICAgICAgICAgICAgICAgd2Vla2x5VGFza3MucHVzaCh0YXNrTGlzdFt6XSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHdlZWtseVRhc2tzLmZvckVhY2godGFzayA9PiByZW5kZXJXZWVrbHlUYXNrKHRhc2spKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlzcGxheTsiLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgRm9vdGVyLmlubmVySFRNTCA9IChcIkNyZWF0ZWQgYnkgQmxhemVqIFdhcnRhbHNraVwiKTtcbiAgICBGb290ZXIuY2xhc3NMaXN0LmFkZChcIkZvb3RlckJveFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEZvb3Rlcik7ICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICAoXCJUby1EbyBMaXN0XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiSGVhZGVyQm94XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7IiwiaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL3NjcmlwdC9wcm9qZWN0cy5qcydcbmltcG9ydCB7IGdldFRhc2tzICwgY3JlYXRlVGFzayB9IGZyb20gJy4vc2NyaXB0L3Rhc2tzLmpzJ1xuaW1wb3J0IHsgY3JlYXRlUGFnZSwgaW5pdGlhbGl6ZUJ1dHRvbnMsIGluaXRpYWxpemVDaGVja2JveCB9IGZyb20gJy4vY3J1ZC5qcyc7XG5cbnZhciBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RzKCk7XG5cbnZhciB0YXNrc0xpc3QgPSBnZXRUYXNrcygpO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlTmF2KCkge1xuICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlTmF2LmlubmVySFRNTCA9IChcIkxpc3Qgb2YgcHJvamVjdHNcIik7XG4gICAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKFwiTmF2aWdhdGlvbkJveFwiKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZU5hdik7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblRhc2tzVG9Qcm9qZWN0cygpIHtcbiAgICB0YXNrc0xpc3QuZm9yRWFjaCh0YXNrc1RvUHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Qm94KCkge1xuICAgIHByb2plY3RMaXN0LmZvckVhY2gocmVuZGVyUHJvamVjdExpc3QpO1xufVxuXG5mdW5jdGlvbiB0YXNrc1RvUHJvamVjdHModGFzaykge1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWUgPT0gdGFzay5wcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdExpc3RbaV0udGFza0xpc3QucHVzaCh0YXNrKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidG5OYW1lLCBidG5UZXh0LCBtYXN0ZXIsIGNsYXNzbmFtZSkge1xuICAgIHZhciBidG5OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG5OYW1lLmlubmVySFRNTCA9IChidG5UZXh0KTtcbiAgICBtYXN0ZXIuYXBwZW5kQ2hpbGQoYnRuTmFtZSk7XG4gICAgaWYgKGNsYXNzbmFtZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnRuTmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGNsYXNzbmFtZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0KGkpIHtcbiAgICB2YXIgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Byb2plY3RzJylcbiAgICB1bC5zZXRBdHRyaWJ1dGUoJ2lkJyxpLnByb2plY3ROYW1lKVxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJOYXZpZ2F0aW9uQm94XCIpO1xuICAgIGJveFswXS5hcHBlbmRDaGlsZCh1bCk7XG4gICAgdmFyIHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RCb3hcIilcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuaW5uZXJIVE1MID0gaS5wcm9qZWN0TmFtZTtcbiAgICB1bC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBjb25zb2xlLmxvZyhwKVxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgY3JlYXRlQnV0dG9uKFwiZGVsZXRlQnRuXCIsXCJkZWxldGVcIixwcm9qZWN0RGl2LCBcImRlbGV0ZVByb2plY3RcIilcbiAgICBpZiAoaS50YXNrTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGkudGFza0xpc3QuZm9yRWFjaChpdGVtPT5idWlsZFRhc2tMaXN0KGl0ZW0pKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRUYXNrTGlzdChpdGVtKSB7XG4gICAgdmFyIHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25CYXJUYXNrc1wiKVxuXG4gICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxJXCIpO1xuICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLFwibmF2aWdhdGlvblRhc2tcIilcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJyxpdGVtLnRhc2tUaXRsZSlcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0ucHJvamVjdE5hbWUpO1xuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGFza05hbWVcIik7XG4gICAgdGV4dC5pbm5lclRleHQgPSBpdGVtLnRhc2tUaXRsZTtcbiAgICBsaS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImNoZWNrYm94XCIpO1xuICAgIGlmIChpdGVtLnN0YXR1cyA9PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSkgICAgICAgIFxuICAgIH1cbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgY3JlYXRlQnV0dG9uKFwidmlld0J0blwiLFwidmlld1wiLGxpLCBcInZpZXdUYXNrXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbihcImVkaXRCdG5cIixcImVkaXRcIixsaSwgXCJlZGl0VGFza1wiKTtcbiAgICBjcmVhdGVCdXR0b24oXCJkZWxldGVCdG5cIixcImRlbGV0ZVwiLGxpLCBcImRlbGV0ZVRhc2tcIik7XG4gICAgdGFza0JveC5hcHBlbmRDaGlsZChsaSk7XG4gICAgaWYgKGl0ZW0uc3RhdHVzID09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKSAgICAgICAgXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgdWwuYXBwZW5kQ2hpbGQodGFza0JveCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdCdXR0b25zKCkge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJOYXZpZ2F0aW9uQm94XCIpO1xuICAgIGNvbnN0IGJ0bnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bnNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImJ0bnNDb250YWluZXJcIilcbiAgICBib3hbMF0uYXBwZW5kQ2hpbGQoYnRuc0NvbnRhaW5lcik7XG4gICAgLy8gY3JlYXRlQnV0dG9uKFwibmlnaHRNb2RlQnRuXCIsIFwiU3dpdGNoIHRvIE5pZ2h0IE1vZGVcIiwgYm94WzBdLFwibmlnaHRtb2RlXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbihcIm5ld1Byb2plY3RCdG5cIiwgXCJBZGQgYSBuZXcgcHJvamVjdFwiLCBidG5zQ29udGFpbmVyLFwiTmV3UHJvamVjdEJ0blwiKTtcbiAgICBjcmVhdGVCdXR0b24oXCJuZXdUYXNrQnRuXCIsIFwiQWRkIGEgbmV3IHRhc2tcIiwgYnRuc0NvbnRhaW5lcixcIk5ld1Rhc2tCdG5cIik7XG59XG5mdW5jdGlvbiBpbml0aWFsaXplU2lkZU5hdigpIHtcbiAgICBjcmVhdGVTaWRlTmF2KCk7XG4gICAgYXNzaWduVGFza3NUb1Byb2plY3RzKCk7XG4gICAgY3JlYXRlUHJvamVjdEJveCgpO1xuICAgIGNyZWF0ZVNldHRpbmdCdXR0b25zKCk7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbiAgICBpbml0aWFsaXplQ2hlY2tib3goKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaWRlTmF2IDsiLCIvL2dldFByb2plY3RzIGNoZWNrcyB0aGUgbG9jYWwgc3RvcmFnZSBmb3IgJ1Byb2plY3RMaXN0JyBmcm9tIHdoaWNoIGl0IHJldHVybnMgdGhlIHByb2plY3RMaXN0LlxuLy9pZiBpdCBoYXMgMCBlbnRyaWVzIG9yIGlzIG51bGwsIGl0IGNyZWF0ZXMgdGhlIGluaXRpYWwgcHJvamVjdCB0aXRsZWQgQWxsIFByb2plY3RzLlxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgdmFyIHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdExpc3QnKSlcbiAgICBpZiAocHJvamVjdExpc3QgPT0gbnVsbCB8fCBwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbG9cIilcbiAgICAgICAgdmFyIHByb2plY3RMaXN0ID0gW107XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9qZWN0TGlzdCcsSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIHByaW8pID0+IHtcbiAgICB2YXIgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0TGlzdCcpKVxuICAgIGNvbnN0IHByb2plY3QgPSB7fTtcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0TmFtZSA9IG5hbWU7XG4gICAgICAgIHByb2plY3QucHJvamVjdFByaW9yaXR5ID0gcHJpbztcbiAgICAgICAgcHJvamVjdC50YXNrTGlzdCA9IFtdXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cblxuZXhwb3J0IHsgZ2V0UHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfTsiLCJmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICB2YXIgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrTGlzdCcpKVxuICAgIGlmICh0YXNrTGlzdCA9PSBudWxsIHx8IHRhc2tMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRhc2tMaXN0ID0gW107XG4gICAgICAgIHJldHVybiB0YXNrTGlzdFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0YXNrTGlzdFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgcHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrVGl0bGUgOiB0YXNrVGl0bGUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbiA6IHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgdGFza0R1ZURhdGUgOiB0YXNrRHVlRGF0ZSxcbiAgICAgICAgdGFza1ByaW9yaXR5OiB0YXNrUHJpb3JpdHksXG4gICAgICAgIHByb2plY3ROYW1lIDogcHJvamVjdE5hbWUsXG4gICAgICAgIHN0YXR1czogXCJub3Rjb21wbGV0ZWRcIlxuICAgIH1cbn1cblxuZXhwb3J0IHtnZXRUYXNrcyAsIGNyZWF0ZVRhc2t9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci5qcydcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci5qcydcbmltcG9ydCBpbml0aWFsaXplU2lkZU5hdiBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcydcbmltcG9ydCBjcmVhdGVEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgY3JlYXRlUGFnZSwgY3JlYXRlVGFza1BhZ2UsIGluaXRpYWxpemVCdXR0b25zIH0gZnJvbSAnLi9jb21wb25lbnRzL2NydWQuanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY3JlYXRlUGFnZSgpO1xuY3JlYXRlVGFza1BhZ2UoKTtcbmNyZWF0ZUhlYWRlcigpO1xuaW5pdGlhbGl6ZVNpZGVOYXYoKTtcbmNyZWF0ZUZvb3RlcigpO1xuY3JlYXRlRGlzcGxheSgpO1xuXG4vL0FkZCBmdW5jdGlvbmFsaXR5IHRvIGJ1dHRvbnMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=