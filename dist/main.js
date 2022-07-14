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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    justify-content: center;\n    background-color:aqua;\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 300px 700px;\n    grid-template-rows: 100px 700px 100px;\n}\n\n.HeaderBox{\n    grid-area: 1/1/2/3;\n    background-color: red;\n}\n\n.NavigationBox{\n    background-color: azure;\n    grid-area: 2/1/3/2;\n}\n\n.DisplayBox{\n    background-color:antiquewhite ;\n    grid-area: 2/2/3/3;\n}\n\n.FooterBox{\n    background-color: blue;\n    grid-area: 3/1/4/3;\n}\n\n.hidden {\n    visibility: hidden;\n    display: none;\n}\n\n.createPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B","sourcesContent":["body {\n    justify-content: center;\n    background-color:aqua;\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 300px 700px;\n    grid-template-rows: 100px 700px 100px;\n}\n\n.HeaderBox{\n    grid-area: 1/1/2/3;\n    background-color: red;\n}\n\n.NavigationBox{\n    background-color: azure;\n    grid-area: 2/1/3/2;\n}\n\n.DisplayBox{\n    background-color:antiquewhite ;\n    grid-area: 2/2/3/3;\n}\n\n.FooterBox{\n    background-color: blue;\n    grid-area: 3/1/4/3;\n}\n\n.hidden {\n    visibility: hidden;\n    display: none;\n}\n\n.createPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "initializeButtons": () => (/* binding */ initializeButtons)
/* harmony export */ });
/* harmony import */ var _script_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/projects.js */ "./src/components/script/projects.js");


var projectList = (0,_script_projects_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();

function createPage() {
    const createNewTask = document.createElement("div")
    createNewTask.classList.add("createPage","hidden")
    document.body.appendChild(createNewTask);
        const formContainer = document.createElement("div")
        formContainer.classList.add("formContainer");
        createNewTask.appendChild(formContainer);
            const form = document.createElement("div")

            formContainer.appendChild(form)
            
            var projectName = document.createElement("input");
            projectName.setAttribute("type","text");
            projectName.setAttribute("name","projectName");
            projectName.setAttribute("id","projectName");
            projectName.setAttribute("placeholder","Please enter the project name");
            form.appendChild(projectName)

            var projectPriority = document.createElement("input");
            projectPriority.setAttribute("type","text");
            projectPriority.setAttribute("name","projectPriority");
            projectPriority.setAttribute("id","projectPriority");
            projectPriority.setAttribute("placeholder","Please enter the project priority");
            form.appendChild(projectPriority)

            var submitbtn = document.createElement("button");
            submitbtn.setAttribute("type","submit");
            form.appendChild(submitbtn);

            submitbtn.addEventListener("click", () => {
                var name = document.getElementById("projectName").value;
                var priority = document.getElementById("projectPriority").value;
                const newProject = (0,_script_projects_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name, priority);
                console.log("magia");
                localStorage.setItem("ProjectList",JSON.stringify(projectList));
                createNewTask.classList.add("hidden");
            })
}

function newProjectBtn() {
    const newProjectBtn = document.querySelectorAll("NewProjectBtn")
    newProjectBtn.forEach(x => 
        x.addEventListener("click", newProject)
    )
}

function newProject() {
    const createPage = document.getElementsByClassName("createPage")
    console.log(createPage)
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
    const projectForDeletion = this.parentNode.attributes[0].nodeValue;
    console.log(projectForDeletion)
    console.log(typeof projectList);
    projectList.forEach(x => {
        console.log(x.projectName)
        if (x.projectName == projectForDeletion) {
            console.log("yeet this shit")
            projectList.splice(projectList.indexOf(x),1);
            console.log(projectList);
        }
    })
}

function initializeButtons() {
    newProjectBtn()
    deleteProjectBtn()
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
function createDisplay() {
    const displayBox = document.createElement('div');
    displayBox.innerHTML = ("TASKS");
    displayBox.classList.add("DisplayBox");
    document.body.appendChild(displayBox);
    displayContent();
    getTodaysDate();
}

function displayContent() {
    var displayTasks = document.createElement('div');
    displayTasks.innerHTML = ("Today's tasks!");
    displayTasks.classList.add("DisplayTasks");
    const box = document.getElementsByClassName("DisplayBox");
    box[0].appendChild(displayTasks);
}

function getTodaysDate() {
    let today = new Date().toISOString().slice(0,10);
    var todaysDate = document.createElement('div');
    todaysDate.innerHTML = (today);
    todaysDate.classList.add("date");
    const box = document.getElementsByClassName("DisplayBox");
    box[0].appendChild(todaysDate);
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

function createSideNav() {
    const sideNav = document.createElement('div');
    sideNav.innerHTML = ("List of projects");
    sideNav.classList.add("NavigationBox")
    document.body.appendChild(sideNav);
}

function assignTasksToProjects() {
    _script_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(tasksToProjects);
}

function createProjectBox() {
    console.log(projectList);
    projectList.forEach(renderProjectList);
}

function tasksToProjects(task) {
    console.log("liczymy")
    console.log(projectList);
    console.log(projectList.length);

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].projectName == task.projectName) {
            projectList[i].taskList.push(task)
            console.log(projectList[i].taskList)
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
    console.log(i)
    ul.setAttribute('class',i.projectName)
    const box = document.getElementsByClassName("NavigationBox");
    box[0].appendChild(ul);
    ul.innerHTML=i.projectName + " " + i.projectPriority + " priority";
    createButton("deleteBtn","delete",ul, "deleteProject")
    if (i.taskList.length > 0) {
        console.log("hewwo")
        console.log(i.taskList)
        i.taskList.forEach(item=>buildTaskList(item))
    }
}

function buildTaskList(item) {
    var li = document.createElement("LI");
    // li.setAttribute('class',task)
    const ul = document.getElementsByClassName(item.projectName);
    li.innerHTML=item.taskTitle + " " + item.taskPriority + " priority";
    createButton("deleteBtn","delete",li);
    createButton("editBtn","edit",li);
    createButton("viewBtn","view",li);
    ul[0].appendChild(li);
}

function createSettingButtons() {
    const box = document.getElementsByClassName("NavigationBox");
    createButton("nightModeBtn", "Switch to Night Mode", box[0],"nightmode");
    createButton("newProjectBtn", "Add a new project", box[0],"NewProjectBtn");
    createButton("newTaskBtn", "Add a new task", box[0],"NewTaskBtn");
}
function initializeSideNav() {
    createSideNav();
    assignTasksToProjects();
    createProjectBox();
    createSettingButtons();
    (0,_crud_js__WEBPACK_IMPORTED_MODULE_2__.initializeButtons)();
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
// var arrayOfProjects = [];

//getProjects checks the local storage for 'ProjectList' from which it returns the projectList.
//if it has 0 entries or is null, it creates the initial project titled All Projects.
function getProjects() {
    var projectList = JSON.parse(localStorage.getItem('ProjectList'))
    console.log(projectList);
    if (projectList == null || projectList.length == 0) {
        projectList = createProject("All projects","Normal")
        localStorage.setItem('ProjectList',JSON.stringify(projectList));
        return projectList
    } else {
        console.log(projectList)
        return projectList
    }
}

const createProject = (name, prio) => {
    console.log("creating")
    console.log(arrayOfProjects)
    const project = {};
        project.projectName = name;
        project.projectPriority = prio;
        project.taskList = []
        console.log(project);
        console.log(arrayOfProjects);
        arrayOfProjects.push(project);
        console.log(arrayOfProjects);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createTask(taskTitle, taskDescription, taskDueDate, taskPriority, projectName) {
    return {
        taskTitle : taskTitle,
        taskDescription : taskDescription,
        taskDueDate : taskDueDate,
        taskPriority: taskPriority,
        projectName : projectName
    }
}

let tasksList = [
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "All projects"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "All projects"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "Second Project"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "Third Project"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "Fourth Project"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "Fourth Project"},
]
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksList);

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
(0,_components_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_components_navigation_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_display_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

//Add functionality to buttons
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDhCQUE4Qiw0QkFBNEIsbUJBQW1CLG9CQUFvQix5Q0FBeUMsNENBQTRDLEdBQUcsZUFBZSx5QkFBeUIsNEJBQTRCLEdBQUcsbUJBQW1CLDhCQUE4Qix5QkFBeUIsR0FBRyxnQkFBZ0IscUNBQXFDLHlCQUF5QixHQUFHLGVBQWUsNkJBQTZCLHlCQUF5QixHQUFHLGFBQWEseUJBQXlCLG9CQUFvQixHQUFHLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG1CQUFtQixvQkFBb0IsaUNBQWlDLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksZ0NBQWdDLDhCQUE4Qiw0QkFBNEIsbUJBQW1CLG9CQUFvQix5Q0FBeUMsNENBQTRDLEdBQUcsZUFBZSx5QkFBeUIsNEJBQTRCLEdBQUcsbUJBQW1CLDhCQUE4Qix5QkFBeUIsR0FBRyxnQkFBZ0IscUNBQXFDLHlCQUF5QixHQUFHLGVBQWUsNkJBQTZCLHlCQUF5QixHQUFHLGFBQWEseUJBQXlCLG9CQUFvQixHQUFHLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG1CQUFtQixvQkFBb0IsaUNBQWlDLEdBQUcsbUJBQW1CO0FBQ2wwRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmtFOztBQUVsRSxrQkFBa0IsZ0VBQVc7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrRUFBYTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUMxQjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ1AzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQc0M7QUFDeEI7QUFDaUI7O0FBRTFELGtCQUFrQixnRUFBVzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnRUFBaUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBaUI7QUFDckI7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQ3BGaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLGtJQUFrSTtBQUN2SSxLQUFLLGtJQUFrSTtBQUN2SSxLQUFLLG9JQUFvSTtBQUN6SSxLQUFLLG1JQUFtSTtBQUN4SSxLQUFLLG9JQUFvSTtBQUN6SSxLQUFLLG9JQUFvSTtBQUN6STtBQUNBLGlFQUFlLFNBQVM7Ozs7OztVQ25CeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQ0E7QUFDUztBQUNQO0FBQ2lCO0FBQy9DOztBQUVyQiwrREFBVTtBQUNWLGlFQUFZO0FBQ1oscUVBQWlCO0FBQ2pCLGlFQUFZO0FBQ1osa0VBQWE7O0FBRWIsOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcnVkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2NyaXB0L3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zY3JpcHQvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphcXVhO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggNzAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNzAwcHggMTAwcHg7XFxufVxcblxcbi5IZWFkZXJCb3h7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uTmF2aWdhdGlvbkJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG59XFxuXFxuLkRpc3BsYXlCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6YW50aXF1ZXdoaXRlIDtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbn1cXG5cXG4uRm9vdGVyQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzM7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGVQYWdlIHtcXG4gICAgei1pbmRleDoxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCA3MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA3MDBweCAxMDBweDtcXG59XFxuXFxuLkhlYWRlckJveHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5OYXZpZ2F0aW9uQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbn1cXG5cXG4uRGlzcGxheUJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphbnRpcXVld2hpdGUgO1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxufVxcblxcbi5Gb290ZXJCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZVBhZ2Uge1xcbiAgICB6LWluZGV4OjE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRQcm9qZWN0cywgY3JlYXRlUHJvamVjdCAgfSBmcm9tIFwiLi9zY3JpcHQvcHJvamVjdHMuanNcIlxuXG52YXIgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0cygpO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICAgIGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY3JlYXRlTmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlUGFnZVwiLFwiaGlkZGVuXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOZXdUYXNrKTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgY3JlYXRlTmV3VGFzay5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInByb2plY3ROYW1lXCIpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIixcInByb2plY3ROYW1lXCIpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixcIlBsZWFzZSBlbnRlciB0aGUgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcblxuICAgICAgICAgICAgdmFyIHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInByb2plY3RQcmlvcml0eVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicHJvamVjdFByaW9yaXR5XCIpO1xuICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJQbGVhc2UgZW50ZXIgdGhlIHByb2plY3QgcHJpb3JpdHlcIik7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSlcblxuICAgICAgICAgICAgdmFyIHN1Ym1pdGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBzdWJtaXRidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwic3VibWl0XCIpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRidG4pO1xuXG4gICAgICAgICAgICBzdWJtaXRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0UHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmFtZSwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWFnaWFcIik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0TGlzdFwiLEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICAgICAgY3JlYXRlTmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfSlcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdEJ0bigpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIk5ld1Byb2plY3RCdG5cIilcbiAgICBuZXdQcm9qZWN0QnRuLmZvckVhY2goeCA9PiBcbiAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdClcbiAgICApXG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgY3JlYXRlUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjcmVhdGVQYWdlXCIpXG4gICAgY29uc29sZS5sb2coY3JlYXRlUGFnZSlcbiAgICBjcmVhdGVQYWdlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RCdG4oKSB7XG4gICAgY29uc3QgZGx0YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVQcm9qZWN0XCIpXG4gICAgZGx0YnRuLmZvckVhY2goeCA9PiBcbiAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KVxuICAgIClcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBwcm9tcHQoXCJEZWxldGluZyB0aGlzIHByb2plY3Qgd2lsbCBhbHNvIHJlbW92ZSB0YXNrcyBhc3NpZ25lZCB0byB0aGlzIHByb2plY3QuIEFyZSB5b3UgaGFwcHkgdG8gcHJvY2VlZD9cIilcbiAgICBjb25zdCBwcm9qZWN0Rm9yRGVsZXRpb24gPSB0aGlzLnBhcmVudE5vZGUuYXR0cmlidXRlc1swXS5ub2RlVmFsdWU7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvckRlbGV0aW9uKVxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBwcm9qZWN0TGlzdCk7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coeC5wcm9qZWN0TmFtZSlcbiAgICAgICAgaWYgKHgucHJvamVjdE5hbWUgPT0gcHJvamVjdEZvckRlbGV0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllZXQgdGhpcyBzaGl0XCIpXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdExpc3QuaW5kZXhPZih4KSwxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIG5ld1Byb2plY3RCdG4oKVxuICAgIGRlbGV0ZVByb2plY3RCdG4oKVxufVxuXG5leHBvcnQgeyBjcmVhdGVQYWdlLCBpbml0aWFsaXplQnV0dG9ucyB9OyIsImZ1bmN0aW9uIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgY29uc3QgZGlzcGxheUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc3BsYXlCb3guaW5uZXJIVE1MID0gKFwiVEFTS1NcIik7XG4gICAgZGlzcGxheUJveC5jbGFzc0xpc3QuYWRkKFwiRGlzcGxheUJveFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpc3BsYXlCb3gpO1xuICAgIGRpc3BsYXlDb250ZW50KCk7XG4gICAgZ2V0VG9kYXlzRGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q29udGVudCgpIHtcbiAgICB2YXIgZGlzcGxheVRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzcGxheVRhc2tzLmlubmVySFRNTCA9IChcIlRvZGF5J3MgdGFza3MhXCIpO1xuICAgIGRpc3BsYXlUYXNrcy5jbGFzc0xpc3QuYWRkKFwiRGlzcGxheVRhc2tzXCIpO1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJEaXNwbGF5Qm94XCIpO1xuICAgIGJveFswXS5hcHBlbmRDaGlsZChkaXNwbGF5VGFza3MpO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RheXNEYXRlKCkge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgICB2YXIgdG9kYXlzRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5c0RhdGUuaW5uZXJIVE1MID0gKHRvZGF5KTtcbiAgICB0b2RheXNEYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJEaXNwbGF5Qm94XCIpO1xuICAgIGJveFswXS5hcHBlbmRDaGlsZCh0b2RheXNEYXRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlzcGxheTsiLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgRm9vdGVyLmlubmVySFRNTCA9IChcIkNyZWF0ZWQgYnkgQmxhemVqIFdhcnRhbHNraVwiKTtcbiAgICBGb290ZXIuY2xhc3NMaXN0LmFkZChcIkZvb3RlckJveFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEZvb3Rlcik7ICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICAoXCJUby1EbyBMaXN0XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiSGVhZGVyQm94XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7IiwiaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL3NjcmlwdC9wcm9qZWN0cy5qcydcbmltcG9ydCB0YXNrc0xpc3QgZnJvbSAnLi9zY3JpcHQvdGFza3MuanMnXG5pbXBvcnQgeyBjcmVhdGVQYWdlLCBpbml0aWFsaXplQnV0dG9ucyB9IGZyb20gJy4vY3J1ZC5qcyc7XG5cbnZhciBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RzKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVOYXYoKSB7XG4gICAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVOYXYuaW5uZXJIVE1MID0gKFwiTGlzdCBvZiBwcm9qZWN0c1wiKTtcbiAgICBzaWRlTmF2LmNsYXNzTGlzdC5hZGQoXCJOYXZpZ2F0aW9uQm94XCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWRlTmF2KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduVGFza3NUb1Byb2plY3RzKCkge1xuICAgIHRhc2tzTGlzdC5mb3JFYWNoKHRhc2tzVG9Qcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCb3goKSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2gocmVuZGVyUHJvamVjdExpc3QpO1xufVxuXG5mdW5jdGlvbiB0YXNrc1RvUHJvamVjdHModGFzaykge1xuICAgIGNvbnNvbGUubG9nKFwibGljenlteVwiKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWUgPT0gdGFzay5wcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdExpc3RbaV0udGFza0xpc3QucHVzaCh0YXNrKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3RbaV0udGFza0xpc3QpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ0bk5hbWUsIGJ0blRleHQsIG1hc3RlciwgY2xhc3NuYW1lKSB7XG4gICAgdmFyIGJ0bk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bk5hbWUuaW5uZXJIVE1MID0gKGJ0blRleHQpO1xuICAgIG1hc3Rlci5hcHBlbmRDaGlsZChidG5OYW1lKTtcbiAgICBpZiAoY2xhc3NuYW1lICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBidG5OYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsY2xhc3NuYW1lKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QoaSkge1xuICAgIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zb2xlLmxvZyhpKVxuICAgIHVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLGkucHJvamVjdE5hbWUpXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIk5hdmlnYXRpb25Cb3hcIik7XG4gICAgYm94WzBdLmFwcGVuZENoaWxkKHVsKTtcbiAgICB1bC5pbm5lckhUTUw9aS5wcm9qZWN0TmFtZSArIFwiIFwiICsgaS5wcm9qZWN0UHJpb3JpdHkgKyBcIiBwcmlvcml0eVwiO1xuICAgIGNyZWF0ZUJ1dHRvbihcImRlbGV0ZUJ0blwiLFwiZGVsZXRlXCIsdWwsIFwiZGVsZXRlUHJvamVjdFwiKVxuICAgIGlmIChpLnRhc2tMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXd3b1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhpLnRhc2tMaXN0KVxuICAgICAgICBpLnRhc2tMaXN0LmZvckVhY2goaXRlbT0+YnVpbGRUYXNrTGlzdChpdGVtKSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVGFza0xpc3QoaXRlbSkge1xuICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMSVwiKTtcbiAgICAvLyBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyx0YXNrKVxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpdGVtLnByb2plY3ROYW1lKTtcbiAgICBsaS5pbm5lckhUTUw9aXRlbS50YXNrVGl0bGUgKyBcIiBcIiArIGl0ZW0udGFza1ByaW9yaXR5ICsgXCIgcHJpb3JpdHlcIjtcbiAgICBjcmVhdGVCdXR0b24oXCJkZWxldGVCdG5cIixcImRlbGV0ZVwiLGxpKTtcbiAgICBjcmVhdGVCdXR0b24oXCJlZGl0QnRuXCIsXCJlZGl0XCIsbGkpO1xuICAgIGNyZWF0ZUJ1dHRvbihcInZpZXdCdG5cIixcInZpZXdcIixsaSk7XG4gICAgdWxbMF0uYXBwZW5kQ2hpbGQobGkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZXR0aW5nQnV0dG9ucygpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiTmF2aWdhdGlvbkJveFwiKTtcbiAgICBjcmVhdGVCdXR0b24oXCJuaWdodE1vZGVCdG5cIiwgXCJTd2l0Y2ggdG8gTmlnaHQgTW9kZVwiLCBib3hbMF0sXCJuaWdodG1vZGVcIik7XG4gICAgY3JlYXRlQnV0dG9uKFwibmV3UHJvamVjdEJ0blwiLCBcIkFkZCBhIG5ldyBwcm9qZWN0XCIsIGJveFswXSxcIk5ld1Byb2plY3RCdG5cIik7XG4gICAgY3JlYXRlQnV0dG9uKFwibmV3VGFza0J0blwiLCBcIkFkZCBhIG5ldyB0YXNrXCIsIGJveFswXSxcIk5ld1Rhc2tCdG5cIik7XG59XG5mdW5jdGlvbiBpbml0aWFsaXplU2lkZU5hdigpIHtcbiAgICBjcmVhdGVTaWRlTmF2KCk7XG4gICAgYXNzaWduVGFza3NUb1Byb2plY3RzKCk7XG4gICAgY3JlYXRlUHJvamVjdEJveCgpO1xuICAgIGNyZWF0ZVNldHRpbmdCdXR0b25zKCk7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaWRlTmF2IDsiLCIvLyB2YXIgYXJyYXlPZlByb2plY3RzID0gW107XG5cbi8vZ2V0UHJvamVjdHMgY2hlY2tzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciAnUHJvamVjdExpc3QnIGZyb20gd2hpY2ggaXQgcmV0dXJucyB0aGUgcHJvamVjdExpc3QuXG4vL2lmIGl0IGhhcyAwIGVudHJpZXMgb3IgaXMgbnVsbCwgaXQgY3JlYXRlcyB0aGUgaW5pdGlhbCBwcm9qZWN0IHRpdGxlZCBBbGwgUHJvamVjdHMuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICB2YXIgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0TGlzdCcpKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICBpZiAocHJvamVjdExpc3QgPT0gbnVsbCB8fCBwcm9qZWN0TGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICBwcm9qZWN0TGlzdCA9IGNyZWF0ZVByb2plY3QoXCJBbGwgcHJvamVjdHNcIixcIk5vcm1hbFwiKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUHJvamVjdExpc3QnLEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KVxuICAgICAgICByZXR1cm4gcHJvamVjdExpc3RcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgcHJpbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmdcIilcbiAgICBjb25zb2xlLmxvZyhhcnJheU9mUHJvamVjdHMpXG4gICAgY29uc3QgcHJvamVjdCA9IHt9O1xuICAgICAgICBwcm9qZWN0LnByb2plY3ROYW1lID0gbmFtZTtcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0UHJpb3JpdHkgPSBwcmlvO1xuICAgICAgICBwcm9qZWN0LnRhc2tMaXN0ID0gW11cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZQcm9qZWN0cyk7XG4gICAgICAgIGFycmF5T2ZQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mUHJvamVjdHMpO1xuICAgIHJldHVybiBwcm9qZWN0XG59XG5cbmV4cG9ydCB7IGdldFByb2plY3RzLCBjcmVhdGVQcm9qZWN0IH07IiwiXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCBwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tUaXRsZSA6IHRhc2tUaXRsZSxcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uIDogdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICB0YXNrRHVlRGF0ZSA6IHRhc2tEdWVEYXRlLFxuICAgICAgICB0YXNrUHJpb3JpdHk6IHRhc2tQcmlvcml0eSxcbiAgICAgICAgcHJvamVjdE5hbWUgOiBwcm9qZWN0TmFtZVxuICAgIH1cbn1cblxubGV0IHRhc2tzTGlzdCA9IFtcbiAgICB7dGFza1RpdGxlIDogXCJUYXNrMVwiLCB0YXNrRGVzY3JpcHRpb246IFwib3dvVGFzazEyM1wiLCB0YXNrRHVlRGF0ZSA6IFwiMjAvMDkvMjAyMlwiLCB0YXNrUHJpb3JpdHk6IFwiSGlnaFwiLCBwcm9qZWN0TmFtZTogXCJBbGwgcHJvamVjdHNcIn0sXG4gICAge3Rhc2tUaXRsZSA6IFwiVGFzazFcIiwgdGFza0Rlc2NyaXB0aW9uOiBcIm93b1Rhc2sxMjNcIiwgdGFza0R1ZURhdGUgOiBcIjIwLzA5LzIwMjJcIiwgdGFza1ByaW9yaXR5OiBcIkhpZ2hcIiwgcHJvamVjdE5hbWU6IFwiQWxsIHByb2plY3RzXCJ9LFxuICAgIHt0YXNrVGl0bGUgOiBcIlRhc2sxXCIsIHRhc2tEZXNjcmlwdGlvbjogXCJvd29UYXNrMTIzXCIsIHRhc2tEdWVEYXRlIDogXCIyMC8wOS8yMDIyXCIsIHRhc2tQcmlvcml0eTogXCJIaWdoXCIsIHByb2plY3ROYW1lOiBcIlNlY29uZCBQcm9qZWN0XCJ9LFxuICAgIHt0YXNrVGl0bGUgOiBcIlRhc2sxXCIsIHRhc2tEZXNjcmlwdGlvbjogXCJvd29UYXNrMTIzXCIsIHRhc2tEdWVEYXRlIDogXCIyMC8wOS8yMDIyXCIsIHRhc2tQcmlvcml0eTogXCJIaWdoXCIsIHByb2plY3ROYW1lOiBcIlRoaXJkIFByb2plY3RcIn0sXG4gICAge3Rhc2tUaXRsZSA6IFwiVGFzazFcIiwgdGFza0Rlc2NyaXB0aW9uOiBcIm93b1Rhc2sxMjNcIiwgdGFza0R1ZURhdGUgOiBcIjIwLzA5LzIwMjJcIiwgdGFza1ByaW9yaXR5OiBcIkhpZ2hcIiwgcHJvamVjdE5hbWU6IFwiRm91cnRoIFByb2plY3RcIn0sXG4gICAge3Rhc2tUaXRsZSA6IFwiVGFzazFcIiwgdGFza0Rlc2NyaXB0aW9uOiBcIm93b1Rhc2sxMjNcIiwgdGFza0R1ZURhdGUgOiBcIjIwLzA5LzIwMjJcIiwgdGFza1ByaW9yaXR5OiBcIkhpZ2hcIiwgcHJvamVjdE5hbWU6IFwiRm91cnRoIFByb2plY3RcIn0sXG5dXG5leHBvcnQgZGVmYXVsdCB0YXNrc0xpc3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzJ1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyLmpzJ1xuaW1wb3J0IGluaXRpYWxpemVTaWRlTmF2IGZyb20gJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzJ1xuaW1wb3J0IGNyZWF0ZURpc3BsYXkgZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXkuanMnXG5pbXBvcnQgeyBjcmVhdGVQYWdlLCBpbml0aWFsaXplQnV0dG9ucyB9IGZyb20gJy4vY29tcG9uZW50cy9jcnVkLmpzJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNyZWF0ZVBhZ2UoKTtcbmNyZWF0ZUhlYWRlcigpO1xuaW5pdGlhbGl6ZVNpZGVOYXYoKTtcbmNyZWF0ZUZvb3RlcigpO1xuY3JlYXRlRGlzcGxheSgpO1xuXG4vL0FkZCBmdW5jdGlvbmFsaXR5IHRvIGJ1dHRvbnMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=