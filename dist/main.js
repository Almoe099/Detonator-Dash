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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n  }\n  createBoardArray() {\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        const randomValue = Math.random();\n        const cellValue = randomValue <= 0.2 ? \"💣\" : \"💰\";\n        row.push(cellValue);\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    // console.log(\"hello\");\n    // console.log(e)\n    // console.log(e.target)\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      e.target.classList.add('clicked');\n    }\n  }\n}\n// grap coordinate and use it to see its value\n// e.innerHTML =\n\n// create a 2d array of [0,0] to [7,7]\n// populate it with random elements like b = bomb or \"\"\n//\n// [ [“B”, “”, “B”, “”, “”, “”],\n// [“B”, “”, “”, “”, “B”, “”],\n// [“”, “”, “”, “”, “”, “”],\n// [“”, “”, “”, “”, “”, “”],\n// [ [“B”, “”, “B”, “”, “B”, “”],\n// [“”, “”, “”, “”, “”, “”]]\n// google a 2d array//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsS0FBSyxDQUFDO0VBQ2pCQyxXQUFXQSxDQUFDQyxjQUFjLEVBQUU7SUFDMUIsSUFBSSxDQUFDQSxjQUFjLEdBQUdBLGNBQWM7SUFDcEMsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQzNDO0VBRUFBLGdCQUFnQkEsQ0FBQSxFQUFHO0lBRWpCLElBQUlDLEdBQUcsR0FBRyxFQUFFO0lBQ1osS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUMxQixNQUFNQyxHQUFHLEdBQUcsRUFBRTtNQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsTUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE1BQU1DLFNBQVMsR0FBR0gsV0FBVyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSTtRQUNsREYsR0FBRyxDQUFDTSxJQUFJLENBQUNELFNBQVMsQ0FBQztNQUNyQjtNQUNBUCxHQUFHLENBQUNRLElBQUksQ0FBQ04sR0FBRyxDQUFDO0lBQ2Y7SUFDQSxPQUFPRixHQUFHO0VBQ1o7RUFFQVMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUMxQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3ZDRixJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsSUFBSSxHQUFHTixDQUFDO1FBQ3JCRSxJQUFJLENBQUNHLE9BQU8sQ0FBQ0UsSUFBSSxHQUFHTixDQUFDO1FBQ3JCLElBQUksQ0FBQ2QsY0FBYyxDQUFDcUIsV0FBVyxDQUFDTixJQUFJLENBQUM7TUFDdkM7SUFDRjtJQUNBLElBQUksQ0FBQ2YsY0FBYyxDQUFDc0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUU7RUFFQUQsV0FBV0EsQ0FBQ0UsQ0FBQyxFQUFFO0lBQ2I7SUFDQTtJQUNBO0lBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQUNDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNWLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVRLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNWLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFFdkYsSUFBSSxJQUFJLENBQUNuQixVQUFVLENBQUN5QixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFDO01BQzdERCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRW5DO0VBQ0Y7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRvbmF0b3ItZGFzaC8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzP2JjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuICBjb25zdHJ1Y3Rvcihib2FyZENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5ib2FyZENvbnRhaW5lciA9IGJvYXJkQ29udGFpbmVyO1xyXG4gICAgdGhpcy5ib2FyZEFycmF5ID0gdGhpcy5jcmVhdGVCb2FyZEFycmF5KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZEFycmF5KCkge1xyXG5cclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSByYW5kb21WYWx1ZSA8PSAwLjIgPyBcIvCfkqNcIiA6IFwi8J+SsFwiO1xyXG4gICAgICAgIHJvdy5wdXNoKGNlbGxWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgYXJyLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZCgpIHtcclxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgODsgcisrKSB7XHJcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgODsgYysrKSB7XHJcbiAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7IFxyXG4gICAgICAgIHRpbGUuZGF0YXNldC5wb3NYID0gcjtcclxuICAgICAgICB0aWxlLmRhdGFzZXQucG9zWSA9IGM7XHJcbiAgICAgICAgdGhpcy5ib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5ib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxyXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICBjb25zdCBkYXRhUG9zVmFsdWUgPSBbcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wb3NYKSwgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wb3NZKV07XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmJvYXJkQXJyYXlbZGF0YVBvc1ZhbHVlWzBdXVtkYXRhUG9zVmFsdWVbMV1dID09PSBcIvCfkrBcIil7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gZ3JhcCBjb29yZGluYXRlIGFuZCB1c2UgaXQgdG8gc2VlIGl0cyB2YWx1ZVxyXG4vLyBlLmlubmVySFRNTCA9XHJcblxyXG4vLyBjcmVhdGUgYSAyZCBhcnJheSBvZiBbMCwwXSB0byBbNyw3XVxyXG4vLyBwb3B1bGF0ZSBpdCB3aXRoIHJhbmRvbSBlbGVtZW50cyBsaWtlIGIgPSBib21iIG9yIFwiXCJcclxuLy9cclxuLy8gWyBb4oCcQuKAnSwg4oCc4oCdLCDigJxC4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdXSxcclxuLy8gW+KAnELigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnELigJ0sIOKAnOKAnV0sXHJcbi8vIFvigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdXSxcclxuLy8gW+KAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ1dLFxyXG4vLyBbIFvigJxC4oCdLCDigJzigJ0sIOKAnELigJ0sIOKAnOKAnSwg4oCcQuKAnSwg4oCc4oCdXSxcclxuLy8gW+KAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ1dXVxyXG4vLyBnb29nbGUgYSAyZCBhcnJheVxyXG4iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImJvYXJkQ29udGFpbmVyIiwiYm9hcmRBcnJheSIsImNyZWF0ZUJvYXJkQXJyYXkiLCJhcnIiLCJpIiwicm93IiwiaiIsInJhbmRvbVZhbHVlIiwiTWF0aCIsInJhbmRvbSIsImNlbGxWYWx1ZSIsInB1c2giLCJjcmVhdGVCb2FyZCIsInIiLCJjIiwidGlsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJwb3NYIiwicG9zWSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImUiLCJkYXRhUG9zVmFsdWUiLCJwYXJzZUludCIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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