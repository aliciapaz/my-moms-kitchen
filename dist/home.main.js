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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"background\": () => (/* binding */ background),\n/* harmony export */   \"board\": () => (/* binding */ board),\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_cocina_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cocina.jpg */ \"./src/images/cocina.jpg\");\n/* harmony import */ var _images_chalkboard_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chalkboard.jpg */ \"./src/images/chalkboard.jpg\");\n\n\n\nconst background = () => {\n  const element = document.createElement('div');\n  const cover = document.createElement('div');\n\n  element.className = 'home-image';\n  cover.className = 'cover';\n\n  const myKitchen = new Image();\n  myKitchen.src = _images_cocina_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  element.appendChild(myKitchen);\n  element.appendChild(cover);\n  const ribbonCont = document.createElement('div');\n  const ribbon = document.createElement('h1');\n  const header = document.createElement('strong');\n  ribbonCont.className = 'ribbon-container';\n  ribbon.className = 'ribbon';\n  header.className = 'ribbon-content';\n  header.innerHTML = 'La cocina de Fabiola';\n  ribbon.appendChild(header);\n  ribbonCont.appendChild(ribbon);\n  element.appendChild(ribbonCont);\n  return element;\n};\n\nconst board = () => {\n  const container = document.createElement('div');\n  const myBoard = new Image();\n  myBoard.src = _images_chalkboard_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  container.className = 'board-container';\n  container.appendChild(myBoard);\n\n  return container;\n};\n\nconst home = () => {\n  const element = document.createElement('div');\n  const content = document.createElement('div');\n  content.className = 'content';\n  element.className = 'flex-container';\n\n  const text = document.createElement('h1');\n  text.innerHTML = 'Mis platos favoritos hechos por mi mamá';\n\n  content.appendChild(text);\n  element.appendChild(content);\n\n  return element;\n};\n\n\n\n//# sourceURL=webpack://my-moms-kitchen/./src/home.js?");

/***/ }),

/***/ "./src/images/chalkboard.jpg":
/*!***********************************!*\
  !*** ./src/images/chalkboard.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"708423f31807a1e932e5.jpg\";\n\n//# sourceURL=webpack://my-moms-kitchen/./src/images/chalkboard.jpg?");

/***/ }),

/***/ "./src/images/cocina.jpg":
/*!*******************************!*\
  !*** ./src/images/cocina.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5be82348be8b2cf6d699.jpg\";\n\n//# sourceURL=webpack://my-moms-kitchen/./src/images/cocina.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;