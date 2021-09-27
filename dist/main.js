/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: inherit;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n}\\n\\n#todolist-placeholder {\\n  border: 1px solid black;\\n  width: 30%;\\n  display: flex;\\n  flex-direction: column;\\n  margin: 20px auto;\\n}\\n\\n.todo-heading {\\n  border-bottom: 1px solid black;\\n  padding: 20px;\\n}\\n\\n#add-input {\\n  font-size: 20px;\\n  height: 50px;\\n  padding: 20px;\\n}\\n\\n#add-input::placeholder {\\n  font-size: 15px;\\n  font-style: italic;\\n}\\n\\n#add-input:focus {\\n  outline: none;\\n}\\n\\n.todoitem {\\n  list-style: none;\\n  padding: 20px;\\n  position: relative;\\n  border-bottom: 1px solid gray;\\n  display: flex;\\n}\\n\\n.input-checkbox {\\n  margin-right: 10px;\\n}\\n\\n.button {\\n  width: 100%;\\n  padding: 15px;\\n}\\n\\n.line-through {\\n  text-decoration: line-through;\\n}\\n\\n.description {\\n  display: block;\\n  overflow: hidden;\\n  width: 100%;\\n}\\n\\n.input-description {\\n  font-size: 15px;\\n  height: 10px;\\n  padding: 10px 0;\\n  border: 0;\\n  outline: 0;\\n  -webkit-appearance: none;\\n}\\n\\n.input-description-bg {\\n  background-color: bisque;\\n}\\n\\n.delete-icon {\\n  position: absolute;\\n  right: 20px;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-edit-remove.js":
/*!********************************!*\
  !*** ./src/add-edit-remove.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"addDeleteIcon\": () => (/* binding */ addDeleteIcon),\n/* harmony export */   \"removeAllCompletedTasks\": () => (/* binding */ removeAllCompletedTasks)\n/* harmony export */ });\n/* harmony import */ var _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myLocalStorage.js */ \"./src/myLocalStorage.js\");\n/* eslint-disable no-use-before-define */\n\n\n\nconst addDeleteIcon = (span) => {\n  const parentLi = span.parentNode;\n  const deleteSpanIcon = document.createElement('span');\n\n  deleteSpanIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon');\n\n  if (parentLi) {\n    parentLi.appendChild(deleteSpanIcon);\n  }\n\n  deleteSpanIcon.addEventListener('click', () => {\n    removeTask(parentLi);\n  });\n};\n\nconst removeDeleteIcon = (deleteIcon) => {\n  const parentLi = deleteIcon.parentNode;\n  if (parentLi) {\n    parentLi.removeChild(deleteIcon);\n  }\n};\n\nconst changeInputToSpan = (inputDescription, hasTheLineThroughClass) => {\n  const parentLi = inputDescription.parentNode;\n  const removeIcon = inputDescription.nextElementSibling;\n  const span = document.createElement('span');\n  span.classList.add('description');\n\n  if (removeIcon) {\n    removeDeleteIcon(removeIcon);\n  }\n\n  inputDescription.insertAdjacentElement('beforebegin', span);\n  span.innerHTML = inputDescription.value;\n\n  if (hasTheLineThroughClass) {\n    span.classList.add('line-through');\n  }\n\n  if (parentLi) {\n    parentLi.removeChild(inputDescription);\n\n    if (parentLi.classList.contains('input-description-bg')) {\n      parentLi.classList.remove('input-description-bg');\n    }\n  }\n\n  const allSpan = document.querySelectorAll('.description');\n\n  allSpan.forEach((span) => {\n    span.addEventListener('click', () => {\n      addDeleteIcon(span);\n      editTask(span);\n    });\n  });\n};\n\nconst addTask = (todosTasks, value) => {\n  const newTask = {};\n  newTask.description = value;\n  newTask.completed = false;\n  newTask.index = todosTasks.length + 1;\n\n  return newTask;\n};\n\nconst removeTask = (parentLi) => {\n  const taskFromLi = _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.todosTasks.find((task) => task.index === +parentLi.id);\n\n  const newTodos = _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.todosTasks.filter((task) => task.index !== taskFromLi.index);\n\n  const [deletedTodo] = _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.todosTasks.filter((task) => task.index === taskFromLi.index);\n\n  newTodos.forEach((todo) => {\n    if (todo.index > deletedTodo.index) {\n      todo.index -= 1;\n    }\n  });\n\n  (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.changeTodosTasks)(newTodos);\n\n  const ul = parentLi.parentNode;\n\n  ul.removeChild(parentLi);\n\n  (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n};\n\nconst removeAllCompletedTasks = () => {\n  const newTodos = _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.todosTasks.filter((task) => !task.completed);\n  const allDeletedTodos = _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.todosTasks.filter((task) => task.completed);\n  const allLi = document.querySelectorAll('.todoitem');\n  const ul = document.querySelector('ul');\n\n  const liToDelete = [];\n\n  allLi.forEach((li) => {\n    allDeletedTodos.forEach((deleted) => {\n      if (deleted.index === +li.id) {\n        liToDelete.push(li);\n      }\n    });\n  });\n\n  newTodos.forEach((todo, index) => {\n    todo.index = index + 1;\n  });\n\n  (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.changeTodosTasks)(newTodos);\n\n  if (!allLi) {\n    const ulParent = ul.parentNode;\n    ulParent.removeChild(ul);\n  }\n\n  if (liToDelete) {\n    liToDelete.forEach((li) => {\n      ul.removeChild(li);\n    });\n  }\n\n  (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n};\n\nconst editTask = (span) => {\n  const parentLi = span.parentNode;\n  const deleteIcon = document.querySelector('.delete-icon');\n  const hasTheLineThroughClass = span.classList.contains('line-through');\n\n  let taskFromLi;\n\n  if (parentLi) {\n    taskFromLi = _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.todosTasks.find((task) => task.index === +parentLi.id);\n  }\n\n  const inputElement = document.createElement('input');\n  inputElement.type = 'text';\n  inputElement.classList.add('input-description');\n\n  span.insertAdjacentElement('beforebegin', inputElement);\n\n  inputElement.value = span.innerHTML;\n  inputElement.focus();\n  inputElement.setSelectionRange(0, 0);\n\n  if (parentLi) {\n    parentLi.removeChild(span);\n    parentLi.classList.add('input-description-bg');\n    inputElement.classList.add('input-description-bg');\n  }\n\n  if (inputElement) {\n    inputElement.addEventListener('blur', () => {\n      document.addEventListener('click', () => {\n        if (inputElement.value !== '') {\n          taskFromLi.description = inputElement.value;\n          (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n          changeInputToSpan(inputElement, hasTheLineThroughClass);\n        }\n      });\n    });\n\n    inputElement.addEventListener('keyup', (event) => {\n      if (event.code === 'Enter') {\n        if (inputElement.value !== '') {\n          inputElement.blur();\n          taskFromLi.description = inputElement.value;\n          (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n          removeDeleteIcon(deleteIcon);\n          changeInputToSpan(inputElement, hasTheLineThroughClass);\n        }\n      }\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/add-edit-remove.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _statusUpdate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusUpdate.js */ \"./src/statusUpdate.js\");\n/* harmony import */ var _add_edit_remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-remove.js */ \"./src/add-edit-remove.js\");\n/* harmony import */ var _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myLocalStorage.js */ \"./src/myLocalStorage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst createAllLiElement = (todosTasks) => {\n  const placeholder = document.getElementById('todolist-placeholder');\n  const ul = document.createElement('ul');\n  const button = document.createElement('button');\n  const liArray = [];\n\n  todosTasks.forEach((task) => {\n    const li = document.createElement('li');\n    const input = document.createElement('input');\n    const span = document.createElement('span');\n\n    span.innerHTML = task.description;\n    li.id = task.index;\n    li.classList.add('todoitem');\n    span.classList.add('description');\n\n    input.type = 'checkbox';\n    input.classList.add('input-checkbox');\n\n    if (task.completed) span.classList.add('line-through');\n\n    li.appendChild(input);\n    li.appendChild(span);\n\n    liArray.push(li);\n  });\n\n  button.classList.add('button');\n  button.innerHTML = 'Clear all completed';\n\n  button.addEventListener('click', () => {\n    (0,_add_edit_remove_js__WEBPACK_IMPORTED_MODULE_1__.removeAllCompletedTasks)();\n  });\n\n  const sortedLi = liArray.sort((a, b) => a.id - b.id);\n\n  sortedLi.forEach((li) => {\n    ul.appendChild(li);\n  });\n\n  placeholder.appendChild(ul);\n  placeholder.appendChild(button);\n};\n\nconst deleteUlFromDOM = () => {\n  const placeholder = document.getElementById('todolist-placeholder');\n  const ul = document.querySelector('ul');\n  const button = document.querySelector('.button');\n  placeholder.removeChild(ul);\n  placeholder.removeChild(button);\n};\n\nconst checkingBoxesAndLine = () => {\n  const checkboxes = document.querySelectorAll('.input-checkbox');\n  const allLi = document.querySelectorAll('.todoitem');\n\n  checkboxes.forEach((checkbox) => {\n    checkbox.addEventListener('change', function checkboxHandler() {\n      (0,_statusUpdate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.todosTasks, this);\n\n      (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)();\n    });\n  });\n\n  (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)();\n\n  if (_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.todosTasks.length > 0) {\n    _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.todosTasks.forEach((task) => {\n      if (task.completed) {\n        const liLineThrough = Array.from(allLi).find((li) => +li.id === task.index);\n        liLineThrough.children[1].classList.add('line-through');\n      }\n    });\n\n    checkboxes.forEach((checkbox) => {\n      if (checkbox.nextElementSibling.classList.contains('line-through')) {\n        checkbox.checked = true;\n      }\n    });\n  }\n\n  (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)();\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const addInput = document.getElementById('add-input');\n  createAllLiElement(_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.todosTasks);\n\n  addInput.addEventListener('keyup', (event) => {\n    if (event.code === 'Enter') {\n      if (addInput.value) {\n        const newTask = (0,_add_edit_remove_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.todosTasks, addInput.value);\n        _myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.todosTasks.push(newTask);\n\n        (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)();\n        deleteUlFromDOM();\n        createAllLiElement(_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.todosTasks);\n        checkingBoxesAndLine();\n        addInput.value = '';\n\n        const allSpan = document.querySelectorAll('.description');\n\n        allSpan.forEach((span) => {\n          span.addEventListener('click', () => {\n            (0,_add_edit_remove_js__WEBPACK_IMPORTED_MODULE_1__.addDeleteIcon)(span);\n            (0,_add_edit_remove_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(span);\n          });\n        });\n      }\n    }\n  });\n\n  (0,_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)();\n  deleteUlFromDOM();\n  createAllLiElement(_myLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.todosTasks);\n\n  const allSpan = document.querySelectorAll('.description');\n\n  allSpan.forEach((span) => {\n    span.addEventListener('click', () => {\n      (0,_add_edit_remove_js__WEBPACK_IMPORTED_MODULE_1__.addDeleteIcon)(span);\n\n      (0,_add_edit_remove_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(span);\n    });\n  });\n\n  checkingBoxesAndLine();\n});\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/myLocalStorage.js":
/*!*******************************!*\
  !*** ./src/myLocalStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"todosTasks\": () => (/* binding */ todosTasks),\n/* harmony export */   \"changeTodosTasks\": () => (/* binding */ changeTodosTasks)\n/* harmony export */ });\n/* eslint-disable import/no-mutable-exports */\n\nlet todosTasks = [];\n\nconst setLocalStorage = () => {\n  localStorage.setItem('todos', JSON.stringify(todosTasks));\n};\n\nconst getLocalStorage = () => {\n  const data = JSON.parse(localStorage.getItem('todos'));\n\n  if (!data) return;\n\n  todosTasks = data;\n};\n\nconst changeTodosTasks = (newTodos) => {\n  todosTasks = newTodos;\n};\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/myLocalStorage.js?");

/***/ }),

/***/ "./src/statusUpdate.js":
/*!*****************************!*\
  !*** ./src/statusUpdate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeStatus = (todosTasks, checkbox) => {\n  const checkedTask = todosTasks.find((task) => task.index === +checkbox.parentNode.id);\n\n  if (checkedTask) {\n    checkedTask.completed = !checkedTask.completed;\n  }\n\n  checkbox.nextElementSibling.classList.toggle('line-through');\n\n  localStorage.removeItem('todos');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeStatus);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/statusUpdate.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;