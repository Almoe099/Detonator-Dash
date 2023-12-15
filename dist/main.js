/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const board = document.getElementById(\"board\");\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](board);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ0Y7QUFFbENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVoRCxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5QyxNQUFNQyxJQUFJLEdBQUcsSUFBSUwscURBQUksQ0FBQ0csS0FBSyxDQUFDO0FBR2hDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldG9uYXRvci1kYXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpXHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoYm9hcmQpXHJcblxyXG5cclxufSk7Il0sIm5hbWVzIjpbIkJvYXJkIiwiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvYXJkIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    // this.boardArray = createBoardArray()\n  }\n  createBoardArray() {\n    const my2DArray = [];\n    const rows = 8;\n    const columns = 8;\n    for (let i = 0; i < rows; i++) {\n      my2DArray[i] = [];\n      for (let j = 0; j < columns; j++) {\n        my2DArray[i][j] = j;\n      }\n    }\n    console.log(my2DArray);\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.pos = JSON.stringify([r, c]);\n        this.boardContainer.appendChild(tile);\n        // tile.innerHTML = \"\"\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick);\n\n    // this.createBoardArray()\n  }\n  handleClick(e) {\n    // e.innerHTML =\n    console.log(\"hello\");\n    // grap coordinate and use it to see its value\n  }\n}\n\n// create a 2d array of [0,0] to [7,7]\n// populate it with random elements like b = bomb or \"\"\n//\n// [ [“B”, “”, “B”, “”, “”, “”],\n// [“B”, “”, “”, “”, “B”, “”],\n// [“”, “”, “”, “”, “”, “”],\n// [“”, “”, “”, “”, “”, “”],\n// [ [“B”, “”, “B”, “”, “B”, “”],\n// [“”, “”, “”, “”, “”, “”]]\n// google a 2d array//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsS0FBSyxDQUFDO0VBQ2pCQyxXQUFXQSxDQUFDQyxjQUFjLEVBQUU7SUFDMUIsSUFBSSxDQUFDQSxjQUFjLEdBQUdBLGNBQWM7SUFDcEM7RUFDRjtFQUVBQyxnQkFBZ0JBLENBQUEsRUFBRztJQUVqQixNQUFNQyxTQUFTLEdBQUcsRUFBRTtJQUNwQixNQUFNQyxJQUFJLEdBQUcsQ0FBQztJQUNkLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0lBQ2pCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixJQUFJLEVBQUVFLENBQUMsRUFBRSxFQUFFO01BQzdCSCxTQUFTLENBQUNHLENBQUMsQ0FBQyxHQUFHLEVBQUU7TUFDakIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLE9BQU8sRUFBRUUsQ0FBQyxFQUFFLEVBQUU7UUFDaENKLFNBQVMsQ0FBQ0csQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFHQSxDQUFDO01BQ3JCO0lBQ0Y7SUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLFNBQVMsQ0FBQztFQUN4QjtFQUVBTyxXQUFXQSxDQUFBLEVBQUc7SUFDWixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzFCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDdkNGLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUNSLENBQUMsRUFBRUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDWCxjQUFjLENBQUNtQixXQUFXLENBQUNQLElBQUksQ0FBQztRQUNyQztNQUNGO0lBQ0Y7SUFDQSxJQUFJLENBQUNaLGNBQWMsQ0FBQ29CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLFdBQVcsQ0FBQzs7SUFFL0Q7RUFDRjtFQUVBQSxXQUFXQSxDQUFDQyxDQUFDLEVBQUU7SUFDYjtJQUNBZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEI7RUFDRjtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0b25hdG9yLWRhc2gvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcz9iY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IoYm9hcmRDb250YWluZXIpIHtcclxuICAgIHRoaXMuYm9hcmRDb250YWluZXIgPSBib2FyZENvbnRhaW5lcjtcclxuICAgIC8vIHRoaXMuYm9hcmRBcnJheSA9IGNyZWF0ZUJvYXJkQXJyYXkoKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRBcnJheSgpIHtcclxuXHJcbiAgICBjb25zdCBteTJEQXJyYXkgPSBbXTtcclxuICAgIGNvbnN0IHJvd3MgPSA4O1xyXG4gICAgY29uc3QgY29sdW1ucyA9IDg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICBteTJEQXJyYXlbaV0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBteTJEQXJyYXlbaV1bal0gPSBqO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhteTJEQXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmQoKSB7XHJcbiAgICBmb3IgKGxldCByID0gMDsgciA8IDg7IHIrKykge1xyXG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDg7IGMrKykge1xyXG4gICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHRpbGUuZGF0YXNldC5wb3MgPSBKU09OLnN0cmluZ2lmeShbciwgY10pO1xyXG4gICAgICAgIHRoaXMuYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XHJcbiAgICAgICAgLy8gdGlsZS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG5cclxuICAgIC8vIHRoaXMuY3JlYXRlQm9hcmRBcnJheSgpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljayhlKSB7XHJcbiAgICAvLyBlLmlubmVySFRNTCA9XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gICAgLy8gZ3JhcCBjb29yZGluYXRlIGFuZCB1c2UgaXQgdG8gc2VlIGl0cyB2YWx1ZVxyXG4gIH1cclxufVxyXG5cclxuLy8gY3JlYXRlIGEgMmQgYXJyYXkgb2YgWzAsMF0gdG8gWzcsN11cclxuLy8gcG9wdWxhdGUgaXQgd2l0aCByYW5kb20gZWxlbWVudHMgbGlrZSBiID0gYm9tYiBvciBcIlwiXHJcbi8vXHJcbi8vIFsgW+KAnELigJ0sIOKAnOKAnSwg4oCcQuKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnV0sXHJcbi8vIFvigJxC4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJxC4oCdLCDigJzigJ1dLFxyXG4vLyBb4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnV0sXHJcbi8vIFvigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdXSxcclxuLy8gWyBb4oCcQuKAnSwg4oCc4oCdLCDigJxC4oCdLCDigJzigJ0sIOKAnELigJ0sIOKAnOKAnV0sXHJcbi8vIFvigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdXV1cclxuLy8gZ29vZ2xlIGEgMmQgYXJyYXlcclxuIl0sIm5hbWVzIjpbIkJvYXJkIiwiY29uc3RydWN0b3IiLCJib2FyZENvbnRhaW5lciIsImNyZWF0ZUJvYXJkQXJyYXkiLCJteTJEQXJyYXkiLCJyb3dzIiwiY29sdW1ucyIsImkiLCJqIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUJvYXJkIiwiciIsImMiLCJ0aWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsInBvcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n\nclass Game {\n  constructor(boardContainer) {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__.Board(boardContainer);\n    this.board.createBoard();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRWhCLE1BQU1DLElBQUksQ0FBQztFQUV0QkMsV0FBV0EsQ0FBQ0MsY0FBYyxFQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlKLHlDQUFLLENBQUNHLGNBQWMsQ0FBQztJQUN0QyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLENBQUM7RUFFNUI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2RldG9uYXRvci1kYXNoLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYm9hcmRDb250YWluZXIpe1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoYm9hcmRDb250YWluZXIpXHJcbiAgICAgICAgdGhpcy5ib2FyZC5jcmVhdGVCb2FyZCgpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJCb2FyZCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImJvYXJkQ29udGFpbmVyIiwiYm9hcmQiLCJjcmVhdGVCb2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRvbmF0b3ItZGFzaC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;