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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n  }\n  createBoardArray() {\n    const keyPosition = {\n      row: Math.floor(Math.random() * 8),\n      column: Math.floor(Math.random() * 8)\n    };\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        if (i === keyPosition.row && j === keyPosition.column) {\n          row.push(\"🗝️\");\n        } else {\n          const randomValue = Math.random();\n          const cellValue = randomValue <= 0.2 ? \"💣\" : \"💰\";\n          row.push(cellValue);\n        }\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        tile.setAttribute(\"id\", r + \"-\" + c);\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    // console.log(e.target)\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      e.target.classList.add(\"coinTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"🗝️\") {\n      e.target.classList.add(\"keyTile\");\n    } else {\n      e.target.classList.add(\"bombTile\");\n      this.revealBoard();\n      alert(\"GAME OVER\");\n    }\n  }\n  revealBoard() {\n    for (let i = 0; i < 8; i++) {\n      for (let j = 0; j < 8; j++) {\n        let tile = document.getElementById(i + \"-\" + j);\n        switch (this.boardArray[i][j]) {\n          case \"💰\":\n            tile.classList.add(\"coinTile\");\n            break;\n          case \"🗝️\":\n            tile.classList.add(\"keyTile\");\n            break;\n          case \"💣\":\n            tile.classList.add(\"bombTile\");\n            break;\n        }\n      }\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUI7UUFDSjtNQUNGO0lBQ0Y7RUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0b25hdG9yLWRhc2gvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcz9iY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IoYm9hcmRDb250YWluZXIpIHtcclxuICAgIHRoaXMuYm9hcmRDb250YWluZXIgPSBib2FyZENvbnRhaW5lcjtcclxuICAgIHRoaXMuYm9hcmRBcnJheSA9IHRoaXMuY3JlYXRlQm9hcmRBcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRBcnJheSgpIHtcclxuICAgIGNvbnN0IGtleVBvc2l0aW9uID0ge1xyXG4gICAgICByb3c6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLFxyXG4gICAgICBjb2x1bW46IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICBpZiAoaSA9PT0ga2V5UG9zaXRpb24ucm93ICYmIGogPT09IGtleVBvc2l0aW9uLmNvbHVtbikge1xyXG4gICAgICAgICAgcm93LnB1c2goXCLwn5ed77iPXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByYW5kb21WYWx1ZSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSByYW5kb21WYWx1ZSA8PSAwLjIgPyBcIvCfkqNcIiA6IFwi8J+SsFwiO1xyXG4gICAgICAgICAgcm93LnB1c2goY2VsbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXJyLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZCgpIHtcclxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgODsgcisrKSB7XHJcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgODsgYysrKSB7XHJcbiAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgdGlsZS5kYXRhc2V0LnBvc1ggPSByO1xyXG4gICAgICAgIHRpbGUuZGF0YXNldC5wb3NZID0gYztcclxuICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZShcImlkXCIsIHIgKyBcIi1cIiArIGMpXHJcbiAgICAgICAgdGhpcy5ib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5ib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgY29uc3QgZGF0YVBvc1ZhbHVlID0gW1xyXG4gICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBvc1gpLFxyXG4gICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBvc1kpLFxyXG4gICAgXTtcclxuXHJcbiAgICBpZiAodGhpcy5ib2FyZEFycmF5W2RhdGFQb3NWYWx1ZVswXV1bZGF0YVBvc1ZhbHVlWzFdXSA9PT0gXCLwn5KwXCIpe1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiY29pblRpbGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRBcnJheVtkYXRhUG9zVmFsdWVbMF1dW2RhdGFQb3NWYWx1ZVsxXV0gPT09IFwi8J+Xne+4j1wiKXtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImtleVRpbGVcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJib21iVGlsZVwiKVxyXG4gICAgICB0aGlzLnJldmVhbEJvYXJkKClcclxuICAgICAgYWxlcnQoXCJHQU1FIE9WRVJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldmVhbEJvYXJkKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBpICsgXCItXCIgKyBqKVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5ib2FyZEFycmF5W2ldW2pdKSB7XHJcbiAgICAgICAgICBjYXNlIFwi8J+SsFwiOlxyXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwi8J+Xne+4j1wiOlxyXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJrZXlUaWxlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCLwn5KjXCI6XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJvYXJkIiwiY29uc3RydWN0b3IiLCJib2FyZENvbnRhaW5lciIsImJvYXJkQXJyYXkiLCJjcmVhdGVCb2FyZEFycmF5Iiwia2V5UG9zaXRpb24iLCJyb3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb2x1bW4iLCJhcnIiLCJpIiwiaiIsInB1c2giLCJyYW5kb21WYWx1ZSIsImNlbGxWYWx1ZSIsImNyZWF0ZUJvYXJkIiwiciIsImMiLCJ0aWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsInBvc1giLCJwb3NZIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZSIsImRhdGFQb3NWYWx1ZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmV2ZWFsQm9hcmQiLCJhbGVydCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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