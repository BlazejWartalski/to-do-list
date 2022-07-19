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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    justify-content: center;\n    background-color:aqua;\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 300px 700px;\n    grid-template-rows: 100px 700px 100px;\n}\n\n.HeaderBox{\n    grid-area: 1/1/2/3;\n    background-color: red;\n}\n\n.NavigationBox{\n    background-color: azure;\n    grid-area: 2/1/3/2;\n}\n\n.DisplayBox{\n    background-color:antiquewhite ;\n    grid-area: 2/2/3/3;\n}\n\n.FooterBox{\n    background-color: blue;\n    grid-area: 3/1/4/3;\n}\n\n.hidden {\n    visibility: hidden;\n    display: none;\n}\n\n.createPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}\n\n.createTaskPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,eAAe;IACf,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B","sourcesContent":["body {\n    justify-content: center;\n    background-color:aqua;\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 300px 700px;\n    grid-template-rows: 100px 700px 100px;\n}\n\n.HeaderBox{\n    grid-area: 1/1/2/3;\n    background-color: red;\n}\n\n.NavigationBox{\n    background-color: azure;\n    grid-area: 2/1/3/2;\n}\n\n.DisplayBox{\n    background-color:antiquewhite ;\n    grid-area: 2/2/3/3;\n}\n\n.FooterBox{\n    background-color: blue;\n    grid-area: 3/1/4/3;\n}\n\n.hidden {\n    visibility: hidden;\n    display: none;\n}\n\n.createPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}\n\n.createTaskPage {\n    z-index:1;\n    position: fixed;\n    width: 500px;\n    height: 400px;\n    background-color: darkcyan;\n}"],"sourceRoot":""}]);
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
            console.log(projectName[0]);
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
                var description = document.getElementById("taskPriority").value;
                var dueDate = document.getElementById("taskDueDate").value
                var priority = document.getElementById("taskPriority").value
                var select = document.getElementById("selectProjectName").value;
                console.log(select.value)
                const newProject = (0,_script_tasks_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(title, description, dueDate, priority, select);
                taskList.push(newProject)
                console.log(newProject)
                localStorage.setItem("TaskList",JSON.stringify(taskList));
                window.location.reload();
                createNewTask.classList.add("hidden");
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
    const projectForDeletion = this.parentNode.attributes[0].nodeValue;
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
    const taskForDeletion = this.parentNode.attributes[0].nodeValue;
    console.log(taskForDeletion , taskList)
    taskList.forEach(x => {
        if (x.taskTitle == taskForDeletion) {
            taskList.splice(taskList.indexOf(x),1);
            localStorage.setItem("TaskList",JSON.stringify(taskList));
            window.location.reload();
        }
    })
}

function initializeCheckbox() {
    var checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(x =>
        x.addEventListener("click", changestatus)
    )
}

function changestatus() {
    console.log(taskList)
    var changeTaskStatus = this.parentNode.attributes[0].nodeValue;
    taskList.forEach(x => {
        if (x.taskTitle == changeTaskStatus) {
            console.log(x.status)
            if (x.status == "notcompleted") {
                x.status = "completed"
                this.previousSibling.classList.add("checked")
            } else if (x.status == "completed") {
                x.status = "notcompleted"
                this.previousSibling.classList.remove("checked")
            }
        }
    })
}
function initializeButtons() {
    newProjectBtn()
    deleteProjectBtn()
    newTaskBtn()
    deleteTaskBtn()
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
console.log(taskList);

for(var i = 0; i < taskList.length; i++) {
    console.log(taskList[i])    
}

function createDisplay() {
    const displayBox = document.createElement('div');
    displayBox.innerHTML = ("TASKS");
    displayBox.classList.add("DisplayBox");
    document.body.appendChild(displayBox);
    getTodaysDate();
    displayTodayTasks();
    displayWeeklyTasks();
    checkForDailyTasks();
    checkForWeeklyTasks();
}

function displayTodayTasks() {
    var displayTasks = document.createElement('div');
    displayTasks.innerHTML = ("Today's tasks!");
    displayTasks.classList.add("DisplayTasks");
    const box = document.getElementsByClassName("DisplayBox");
    box[0].appendChild(displayTasks);
}

function getTodaysDate() {
    let today = new Date().toISOString().slice(0,10);
    console.log(today);
    return today
}

function displayWeeklyTasks() {
    var displayWeeklyTasks = document.createElement("div");
    var todayDate = getTodaysDate();
    var nextWeek = new Date(new Date().getTime()+(7*24*60*60*1000)).toISOString().slice(0,10);
    console.log(nextWeek);
    displayWeeklyTasks.innerHTML = (`This week's tasks ${todayDate} until ${nextWeek}`);
    displayWeeklyTasks.classList.add("WeeklyTasks");
    const box = document.getElementsByClassName("DisplayBox");
    box[0].appendChild(displayWeeklyTasks)
}

function checkForDailyTasks() {
    var date = getTodaysDate();
    console.log(date);
    var taskList = (0,_script_tasks_js__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
    console.log(taskList);
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].taskDueDate == date) {
            console.log("we got a task today!")            
        } else {
        }
    } 
}

function checkForWeeklyTasks() {
    var date = getTodaysDate();
    var arrayOfWeek = [];
    for (var i = 0; i < 7; i++) {
        var day = new Date(new Date().getTime()+(i*24*60*60*1000)).toISOString().slice(0,10);
        arrayOfWeek.push(day);
    }
    for (var i = 0; i < arrayOfWeek.length; i++) {
        var date = arrayOfWeek[i]
        for (var z = 0; z < taskList.length; z++) {
             if (taskList[z].taskDueDate == date) {
                console.log(taskList[z])
                console.log("task due this week found!")
             }
        }
    }
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
    ul.setAttribute('class',i.projectName)
    const box = document.getElementsByClassName("NavigationBox");
    box[0].appendChild(ul);
    ul.innerHTML=i.projectName;
    createButton("deleteBtn","delete",ul, "deleteProject")
    if (i.taskList.length > 0) {
        i.taskList.forEach(item=>buildTaskList(item))
    }
}

function buildTaskList(item) {
    var li = document.createElement("LI");
    li.setAttribute('class',item.taskTitle)
    const ul = document.getElementsByClassName(item.projectName);
    var text = document.createElement("p");
    text.classList.add("taskName");
    text.innerText = item.taskTitle + " " + item.taskPriority + " priority";
    li.appendChild(text);
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("class","checkbox");
    li.appendChild(checkbox);
    createButton("deleteBtn","delete",li, "deleteTask");
    createButton("editBtn","edit",li, "editTask");
    createButton("viewBtn","view",li, "viewTask");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWlCO0FBQ3JCLElBQUksNERBQWtCO0FBQ3RCO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUN0RmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlEO0FBQ0E7QUFDUztBQUNQO0FBQ2lDO0FBQy9EOztBQUVyQiwrREFBVTtBQUNWLG1FQUFjO0FBQ2QsaUVBQVk7QUFDWixxRUFBaUI7QUFDakIsaUVBQVk7QUFDWixrRUFBYTs7QUFFYiw4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NydWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zY3JpcHQvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NjcmlwdC90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCA3MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA3MDBweCAxMDBweDtcXG59XFxuXFxuLkhlYWRlckJveHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5OYXZpZ2F0aW9uQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbn1cXG5cXG4uRGlzcGxheUJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphbnRpcXVld2hpdGUgO1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxufVxcblxcbi5Gb290ZXJCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZVBhZ2Uge1xcbiAgICB6LWluZGV4OjE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXG59XFxuXFxuLmNyZWF0ZVRhc2tQYWdlIHtcXG4gICAgei1pbmRleDoxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphcXVhO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggNzAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNzAwcHggMTAwcHg7XFxufVxcblxcbi5IZWFkZXJCb3h7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uTmF2aWdhdGlvbkJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG59XFxuXFxuLkRpc3BsYXlCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6YW50aXF1ZXdoaXRlIDtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbn1cXG5cXG4uRm9vdGVyQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzM7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGVQYWdlIHtcXG4gICAgei1pbmRleDoxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxufVxcblxcbi5jcmVhdGVUYXNrUGFnZSB7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldFByb2plY3RzLCBjcmVhdGVQcm9qZWN0ICB9IGZyb20gXCIuL3NjcmlwdC9wcm9qZWN0cy5qc1wiXG5pbXBvcnQge2dldFRhc2tzICwgY3JlYXRlVGFza30gZnJvbSBcIi4vc2NyaXB0L3Rhc2tzLmpzXCJcblxudmFyIHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdHMoKTtcbnZhciB0YXNrTGlzdCA9IGdldFRhc2tzKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7XG4gICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjcmVhdGVOZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVQYWdlXCIsXCJoaWRkZW5cIilcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Byb2plY3QpO1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgICAgICAgICB2YXIgY2xvc2VGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNsb3NlRm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY2xvc2VXaW5kb3dCdG5cIik7XG4gICAgICAgICAgICBjbG9zZUZvcm1CdG4uaW5uZXJIVE1MPVwiRXhpdFwiXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybUJ0bilcbiAgICAgICAgICAgIGNsb3NlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJQbGVhc2UgZW50ZXIgdGhlIHByb2plY3QgbmFtZVwiKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG5cbiAgICAgICAgICAgIHZhciBzdWJtaXRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgc3VibWl0YnRuLmlubmVySFRNTCA9IFwiQWRkXCJcbiAgICAgICAgICAgIHN1Ym1pdGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJzdWJtaXRcIik7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdGJ0bik7XG5cbiAgICAgICAgICAgIHN1Ym1pdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0TGlzdFwiLEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tQYWdlKCkge1xuICAgIGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY3JlYXRlTmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlVGFza1BhZ2VcIixcImhpZGRlblwiKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFzayk7XG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJcIik7XG4gICAgICAgIGNyZWF0ZU5ld1Rhc2suYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICAgICAgICAgIHZhciBjbG9zZUZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY2xvc2VGb3JtQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjbG9zZVdpbmRvd0J0blwiKTtcbiAgICAgICAgICAgIGNsb3NlRm9ybUJ0bi5pbm5lckhUTUw9XCJFeGl0XCJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VGb3JtQnRuKVxuICAgICAgICAgICAgY2xvc2VGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlTmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZhciB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgICAgICAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0YXNrTmFtZVwiKTtcbiAgICAgICAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0YXNrTmFtZVwiKTtcbiAgICAgICAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJQbGVhc2UgZW50ZXIgdGhlIHRhc2sgbmFtZVwiKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWUpXG5cbiAgICAgICAgICAgIHZhciB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gW1wiaGlnaFwiLFwibWVkaXVtXCIsXCJsb3dcIl07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXR5T3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLHByaW9yaXR5T3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBwcmlvcml0eU9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRhc2tQcmlvcml0eVwiKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGFza1ByaW9yaXR5XCIpO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJQbGVhc2UgZW50ZXIgdGhlIHRhc2sgcHJpb3JpdHlcIik7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSlcblxuICAgICAgICAgICAgdmFyIHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRhc2tEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJQbGVhc2UgZW50ZXIgdGhlIHRhc2sgZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKVxuXG4gICAgICAgICAgICB2YXIgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidGFza0R1ZURhdGVcIik7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGFza0R1ZURhdGVcIik7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiUGxlYXNlIGVudGVyIHRoZSB0YXNrIGR1ZSBkYXRlXCIpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKVxuXG4gICAgICAgICAgICB2YXIgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIscHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lWzBdKTtcbiAgICAgICAgICAgIC8vIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XG4gICAgICAgICAgICAvLyBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzZWxlY3RQcm9qZWN0TmFtZVwiKTtcbiAgICAgICAgICAgIC8vIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJQbGVhc2UgZW50ZXIgdGhlIHByb2plY3QgdGhpcyBzaG91bGQgZmFsbCB1bmRlclwiKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcblxuICAgICAgICAgICAgdmFyIHN1Ym1pdGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBzdWJtaXRidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwic3VibWl0XCIpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRidG4pO1xuXG4gICAgICAgICAgICBzdWJtaXRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKS52YWx1ZVxuICAgICAgICAgICAgICAgIHZhciBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0UHJvamVjdE5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0LnZhbHVlKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHNlbGVjdCk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QucHVzaChuZXdQcm9qZWN0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUYXNrTGlzdFwiLEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH0pXG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RCdG4oKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuTmV3UHJvamVjdEJ0blwiKVxuICAgIG5ld1Byb2plY3RCdG4uZm9yRWFjaCh4ID0+IFxuICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0KVxuICAgIClcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcbiAgICBjb25zdCBjcmVhdGVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNyZWF0ZVBhZ2VcIilcbiAgICBjcmVhdGVQYWdlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RCdG4oKSB7XG4gICAgY29uc3QgZGx0YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVQcm9qZWN0XCIpXG4gICAgZGx0YnRuLmZvckVhY2goeCA9PiBcbiAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KVxuICAgIClcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBwcm9tcHQoXCJEZWxldGluZyB0aGlzIHByb2plY3Qgd2lsbCBhbHNvIHJlbW92ZSB0YXNrcyBhc3NpZ25lZCB0byB0aGlzIHByb2plY3QuIEFyZSB5b3UgaGFwcHkgdG8gcHJvY2VlZD9cIilcbiAgICBjb25zdCBwcm9qZWN0Rm9yRGVsZXRpb24gPSB0aGlzLnBhcmVudE5vZGUuYXR0cmlidXRlc1swXS5ub2RlVmFsdWU7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgaWYgKHgucHJvamVjdE5hbWUgPT0gcHJvamVjdEZvckRlbGV0aW9uKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdExpc3QuaW5kZXhPZih4KSwxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdExpc3RcIixKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbmV3VGFza0J0bigpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5OZXdUYXNrQnRuXCIpXG4gICAgbmV3UHJvamVjdEJ0bi5mb3JFYWNoKHggPT4gXG4gICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2spXG4gICAgKVxufVxuXG5mdW5jdGlvbiBuZXdUYXNrKCkge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNyZWF0ZVRhc2tQYWdlXCIpXG4gICAgY3JlYXRlVGFza1BhZ2VbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza0J0bigpIHtcbiAgICBjb25zdCBkbHRidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVRhc2tcIilcbiAgICBkbHRidG4uZm9yRWFjaCh4ID0+IFxuICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spXG4gICAgKVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKCkge1xuICAgIHByb21wdChcIkRvIHlvdSB3aXNoIHRvIHBlcm1hbmVudGx5IHJlbW92ZSB0aGlzIHRhc2s/XCIpXG4gICAgY29uc3QgdGFza0ZvckRlbGV0aW9uID0gdGhpcy5wYXJlbnROb2RlLmF0dHJpYnV0ZXNbMF0ubm9kZVZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHRhc2tGb3JEZWxldGlvbiAsIHRhc2tMaXN0KVxuICAgIHRhc2tMaXN0LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGlmICh4LnRhc2tUaXRsZSA9PSB0YXNrRm9yRGVsZXRpb24pIHtcbiAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHgpLDEpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUYXNrTGlzdFwiLEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQ2hlY2tib3goKSB7XG4gICAgdmFyIGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCh4ID0+XG4gICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZXN0YXR1cylcbiAgICApXG59XG5cbmZ1bmN0aW9uIGNoYW5nZXN0YXR1cygpIHtcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdClcbiAgICB2YXIgY2hhbmdlVGFza1N0YXR1cyA9IHRoaXMucGFyZW50Tm9kZS5hdHRyaWJ1dGVzWzBdLm5vZGVWYWx1ZTtcbiAgICB0YXNrTGlzdC5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZiAoeC50YXNrVGl0bGUgPT0gY2hhbmdlVGFza1N0YXR1cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coeC5zdGF0dXMpXG4gICAgICAgICAgICBpZiAoeC5zdGF0dXMgPT0gXCJub3Rjb21wbGV0ZWRcIikge1xuICAgICAgICAgICAgICAgIHguc3RhdHVzID0gXCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHguc3RhdHVzID09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgICAgICB4LnN0YXR1cyA9IFwibm90Y29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cbmZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIG5ld1Byb2plY3RCdG4oKVxuICAgIGRlbGV0ZVByb2plY3RCdG4oKVxuICAgIG5ld1Rhc2tCdG4oKVxuICAgIGRlbGV0ZVRhc2tCdG4oKVxufVxuXG5leHBvcnQgeyBjcmVhdGVQYWdlLCBjcmVhdGVUYXNrUGFnZSwgaW5pdGlhbGl6ZUJ1dHRvbnMsIGluaXRpYWxpemVDaGVja2JveCB9OyIsImltcG9ydCB7Z2V0VGFza3MgLCBjcmVhdGVUYXNrfSBmcm9tIFwiLi9zY3JpcHQvdGFza3MuanNcIlxuXG52YXIgdGFza0xpc3QgPSBnZXRUYXNrcygpO1xuY29uc29sZS5sb2codGFza0xpc3QpO1xuXG5mb3IodmFyIGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSkgICAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgY29uc3QgZGlzcGxheUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc3BsYXlCb3guaW5uZXJIVE1MID0gKFwiVEFTS1NcIik7XG4gICAgZGlzcGxheUJveC5jbGFzc0xpc3QuYWRkKFwiRGlzcGxheUJveFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpc3BsYXlCb3gpO1xuICAgIGdldFRvZGF5c0RhdGUoKTtcbiAgICBkaXNwbGF5VG9kYXlUYXNrcygpO1xuICAgIGRpc3BsYXlXZWVrbHlUYXNrcygpO1xuICAgIGNoZWNrRm9yRGFpbHlUYXNrcygpO1xuICAgIGNoZWNrRm9yV2Vla2x5VGFza3MoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gICAgdmFyIGRpc3BsYXlUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc3BsYXlUYXNrcy5pbm5lckhUTUwgPSAoXCJUb2RheSdzIHRhc2tzIVwiKTtcbiAgICBkaXNwbGF5VGFza3MuY2xhc3NMaXN0LmFkZChcIkRpc3BsYXlUYXNrc1wiKTtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRGlzcGxheUJveFwiKTtcbiAgICBib3hbMF0uYXBwZW5kQ2hpbGQoZGlzcGxheVRhc2tzKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICAgY29uc29sZS5sb2codG9kYXkpO1xuICAgIHJldHVybiB0b2RheVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2Vla2x5VGFza3MoKSB7XG4gICAgdmFyIGRpc3BsYXlXZWVrbHlUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFyIHRvZGF5RGF0ZSA9IGdldFRvZGF5c0RhdGUoKTtcbiAgICB2YXIgbmV4dFdlZWsgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSsoNyoyNCo2MCo2MCoxMDAwKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgICBjb25zb2xlLmxvZyhuZXh0V2Vlayk7XG4gICAgZGlzcGxheVdlZWtseVRhc2tzLmlubmVySFRNTCA9IChgVGhpcyB3ZWVrJ3MgdGFza3MgJHt0b2RheURhdGV9IHVudGlsICR7bmV4dFdlZWt9YCk7XG4gICAgZGlzcGxheVdlZWtseVRhc2tzLmNsYXNzTGlzdC5hZGQoXCJXZWVrbHlUYXNrc1wiKTtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRGlzcGxheUJveFwiKTtcbiAgICBib3hbMF0uYXBwZW5kQ2hpbGQoZGlzcGxheVdlZWtseVRhc2tzKVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvckRhaWx5VGFza3MoKSB7XG4gICAgdmFyIGRhdGUgPSBnZXRUb2RheXNEYXRlKCk7XG4gICAgY29uc29sZS5sb2coZGF0ZSk7XG4gICAgdmFyIHRhc2tMaXN0ID0gZ2V0VGFza3MoKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGFza0xpc3RbaV0udGFza0R1ZURhdGUgPT0gZGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZSBnb3QgYSB0YXNrIHRvZGF5IVwiKSAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JXZWVrbHlUYXNrcygpIHtcbiAgICB2YXIgZGF0ZSA9IGdldFRvZGF5c0RhdGUoKTtcbiAgICB2YXIgYXJyYXlPZldlZWsgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICB2YXIgZGF5ID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkrKGkqMjQqNjAqNjAqMTAwMCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICAgICAgIGFycmF5T2ZXZWVrLnB1c2goZGF5KTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mV2Vlay5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGF0ZSA9IGFycmF5T2ZXZWVrW2ldXG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgdGFza0xpc3QubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICBpZiAodGFza0xpc3Rbel0udGFza0R1ZURhdGUgPT0gZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W3pdKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFzayBkdWUgdGhpcyB3ZWVrIGZvdW5kIVwiKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlzcGxheTsiLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgRm9vdGVyLmlubmVySFRNTCA9IChcIkNyZWF0ZWQgYnkgQmxhemVqIFdhcnRhbHNraVwiKTtcbiAgICBGb290ZXIuY2xhc3NMaXN0LmFkZChcIkZvb3RlckJveFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEZvb3Rlcik7ICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICAoXCJUby1EbyBMaXN0XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiSGVhZGVyQm94XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7IiwiaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL3NjcmlwdC9wcm9qZWN0cy5qcydcbmltcG9ydCB7IGdldFRhc2tzICwgY3JlYXRlVGFzayB9IGZyb20gJy4vc2NyaXB0L3Rhc2tzLmpzJ1xuaW1wb3J0IHsgY3JlYXRlUGFnZSwgaW5pdGlhbGl6ZUJ1dHRvbnMsIGluaXRpYWxpemVDaGVja2JveCB9IGZyb20gJy4vY3J1ZC5qcyc7XG5cbnZhciBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RzKCk7XG5cbnZhciB0YXNrc0xpc3QgPSBnZXRUYXNrcygpO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlTmF2KCkge1xuICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlTmF2LmlubmVySFRNTCA9IChcIkxpc3Qgb2YgcHJvamVjdHNcIik7XG4gICAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKFwiTmF2aWdhdGlvbkJveFwiKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZU5hdik7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblRhc2tzVG9Qcm9qZWN0cygpIHtcbiAgICB0YXNrc0xpc3QuZm9yRWFjaCh0YXNrc1RvUHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Qm94KCkge1xuICAgIHByb2plY3RMaXN0LmZvckVhY2gocmVuZGVyUHJvamVjdExpc3QpO1xufVxuXG5mdW5jdGlvbiB0YXNrc1RvUHJvamVjdHModGFzaykge1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWUgPT0gdGFzay5wcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdExpc3RbaV0udGFza0xpc3QucHVzaCh0YXNrKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidG5OYW1lLCBidG5UZXh0LCBtYXN0ZXIsIGNsYXNzbmFtZSkge1xuICAgIHZhciBidG5OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG5OYW1lLmlubmVySFRNTCA9IChidG5UZXh0KTtcbiAgICBtYXN0ZXIuYXBwZW5kQ2hpbGQoYnRuTmFtZSk7XG4gICAgaWYgKGNsYXNzbmFtZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnRuTmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGNsYXNzbmFtZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0KGkpIHtcbiAgICB2YXIgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuc2V0QXR0cmlidXRlKCdjbGFzcycsaS5wcm9qZWN0TmFtZSlcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiTmF2aWdhdGlvbkJveFwiKTtcbiAgICBib3hbMF0uYXBwZW5kQ2hpbGQodWwpO1xuICAgIHVsLmlubmVySFRNTD1pLnByb2plY3ROYW1lO1xuICAgIGNyZWF0ZUJ1dHRvbihcImRlbGV0ZUJ0blwiLFwiZGVsZXRlXCIsdWwsIFwiZGVsZXRlUHJvamVjdFwiKVxuICAgIGlmIChpLnRhc2tMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaS50YXNrTGlzdC5mb3JFYWNoKGl0ZW09PmJ1aWxkVGFza0xpc3QoaXRlbSkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFRhc2tMaXN0KGl0ZW0pIHtcbiAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTElcIik7XG4gICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsaXRlbS50YXNrVGl0bGUpXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGl0ZW0ucHJvamVjdE5hbWUpO1xuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGFza05hbWVcIik7XG4gICAgdGV4dC5pbm5lclRleHQgPSBpdGVtLnRhc2tUaXRsZSArIFwiIFwiICsgaXRlbS50YXNrUHJpb3JpdHkgKyBcIiBwcmlvcml0eVwiO1xuICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiY2hlY2tib3hcIik7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNyZWF0ZUJ1dHRvbihcImRlbGV0ZUJ0blwiLFwiZGVsZXRlXCIsbGksIFwiZGVsZXRlVGFza1wiKTtcbiAgICBjcmVhdGVCdXR0b24oXCJlZGl0QnRuXCIsXCJlZGl0XCIsbGksIFwiZWRpdFRhc2tcIik7XG4gICAgY3JlYXRlQnV0dG9uKFwidmlld0J0blwiLFwidmlld1wiLGxpLCBcInZpZXdUYXNrXCIpO1xuICAgIHVsWzBdLmFwcGVuZENoaWxkKGxpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2V0dGluZ0J1dHRvbnMoKSB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIk5hdmlnYXRpb25Cb3hcIik7XG4gICAgY3JlYXRlQnV0dG9uKFwibmlnaHRNb2RlQnRuXCIsIFwiU3dpdGNoIHRvIE5pZ2h0IE1vZGVcIiwgYm94WzBdLFwibmlnaHRtb2RlXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbihcIm5ld1Byb2plY3RCdG5cIiwgXCJBZGQgYSBuZXcgcHJvamVjdFwiLCBib3hbMF0sXCJOZXdQcm9qZWN0QnRuXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbihcIm5ld1Rhc2tCdG5cIiwgXCJBZGQgYSBuZXcgdGFza1wiLCBib3hbMF0sXCJOZXdUYXNrQnRuXCIpO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNpZGVOYXYoKSB7XG4gICAgY3JlYXRlU2lkZU5hdigpO1xuICAgIGFzc2lnblRhc2tzVG9Qcm9qZWN0cygpO1xuICAgIGNyZWF0ZVByb2plY3RCb3goKTtcbiAgICBjcmVhdGVTZXR0aW5nQnV0dG9ucygpO1xuICAgIGluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgaW5pdGlhbGl6ZUNoZWNrYm94KCk7XG59XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplU2lkZU5hdiA7IiwiLy9nZXRQcm9qZWN0cyBjaGVja3MgdGhlIGxvY2FsIHN0b3JhZ2UgZm9yICdQcm9qZWN0TGlzdCcgZnJvbSB3aGljaCBpdCByZXR1cm5zIHRoZSBwcm9qZWN0TGlzdC5cbi8vaWYgaXQgaGFzIDAgZW50cmllcyBvciBpcyBudWxsLCBpdCBjcmVhdGVzIHRoZSBpbml0aWFsIHByb2plY3QgdGl0bGVkIEFsbCBQcm9qZWN0cy5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHZhciBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RMaXN0JykpXG4gICAgaWYgKHByb2plY3RMaXN0ID09IG51bGwgfHwgcHJvamVjdExpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoYWxvXCIpXG4gICAgICAgIHZhciBwcm9qZWN0TGlzdCA9IFtdO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUHJvamVjdExpc3QnLEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdFxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lLCBwcmlvKSA9PiB7XG4gICAgdmFyIHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdExpc3QnKSlcbiAgICBjb25zdCBwcm9qZWN0ID0ge307XG4gICAgICAgIHByb2plY3QucHJvamVjdE5hbWUgPSBuYW1lO1xuICAgICAgICBwcm9qZWN0LnByb2plY3RQcmlvcml0eSA9IHByaW87XG4gICAgICAgIHByb2plY3QudGFza0xpc3QgPSBbXVxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0XG59XG5cbmV4cG9ydCB7IGdldFByb2plY3RzLCBjcmVhdGVQcm9qZWN0IH07IiwiZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgdmFyIHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza0xpc3QnKSlcbiAgICBpZiAodGFza0xpc3QgPT0gbnVsbCB8fCB0YXNrTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICB0YXNrTGlzdCA9IFtdO1xuICAgICAgICByZXR1cm4gdGFza0xpc3RcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGFza0xpc3RcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza1RpdGxlIDogdGFza1RpdGxlLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb24gOiB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2tEdWVEYXRlIDogdGFza0R1ZURhdGUsXG4gICAgICAgIHRhc2tQcmlvcml0eTogdGFza1ByaW9yaXR5LFxuICAgICAgICBwcm9qZWN0TmFtZSA6IHByb2plY3ROYW1lLFxuICAgICAgICBzdGF0dXM6IFwibm90Y29tcGxldGVkXCJcbiAgICB9XG59XG5cbmV4cG9ydCB7Z2V0VGFza3MgLCBjcmVhdGVUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuanMnXG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIuanMnXG5pbXBvcnQgaW5pdGlhbGl6ZVNpZGVOYXYgZnJvbSAnLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMnXG5pbXBvcnQgY3JlYXRlRGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheS5qcydcbmltcG9ydCB7IGNyZWF0ZVBhZ2UsIGNyZWF0ZVRhc2tQYWdlLCBpbml0aWFsaXplQnV0dG9ucyB9IGZyb20gJy4vY29tcG9uZW50cy9jcnVkLmpzJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNyZWF0ZVBhZ2UoKTtcbmNyZWF0ZVRhc2tQYWdlKCk7XG5jcmVhdGVIZWFkZXIoKTtcbmluaXRpYWxpemVTaWRlTmF2KCk7XG5jcmVhdGVGb290ZXIoKTtcbmNyZWF0ZURpc3BsYXkoKTtcblxuLy9BZGQgZnVuY3Rpb25hbGl0eSB0byBidXR0b25zIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9