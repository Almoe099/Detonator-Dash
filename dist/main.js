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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n  }\n  createBoardArray() {\n    const keyPosition = {\n      row: Math.floor(Math.random() * 8),\n      column: Math.floor(Math.random() * 8)\n    };\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        if (i === keyPosition.row && j === keyPosition.column) {\n          row.push(\"🗝️\");\n        } else {\n          const randomValue = Math.random();\n          const cellValue = randomValue <= 0.2 ? \"💣\" : \"💰\";\n          row.push(cellValue);\n        }\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    // console.log(e.target)\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      e.target.classList.add(\"coinTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"🗝️\") {\n      e.target.classList.add(\"keyTile\");\n    } else {\n      e.target.classList.add(\"bombTile\");\n      // this.revealBoard()\n      alert(\"GAME OVER\");\n    }\n  }\n}\n// revealBoard() {\n//   for (let i = 0; i < 8; i++) {\n//     for (let j = 0; j < 8; j++) {\n//       switch (this.boardArray[i][j]) {\n//         case \"💰\":\n//           tile.classList.add(\"coinTile\");\n//           break;\n//         case \"🗝️\":\n//           tile.classList.add(\"keyTile\");\n//           break;\n//         case \"💣\":\n//           tile.classList.add(\"bombTile\");\n//           break;\n//       }\n//     }\n//   }\n// }\n// getTileElement(row, col) {\n//   // Query the boardContainer for the li element with matching data-posX and data-posY\n//   return this.boardContainer.querySelector(`li[data-posX=\"${row}\"][data-posY=\"${col}\"]`);\n// }\n// console.log(\"hello\");\n// console.log(e)\n// console.log(e.target)\n\n////# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2hDLFVBQVUsQ0FBQzRCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUM7TUFDckVELENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDbkMsQ0FBQyxNQUFNO01BQ0xMLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDbEM7TUFDQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUNwQjtFQUNGO0FBR0Y7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRvbmF0b3ItZGFzaC8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzP2JjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuICBjb25zdHJ1Y3Rvcihib2FyZENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5ib2FyZENvbnRhaW5lciA9IGJvYXJkQ29udGFpbmVyO1xyXG4gICAgdGhpcy5ib2FyZEFycmF5ID0gdGhpcy5jcmVhdGVCb2FyZEFycmF5KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZEFycmF5KCkge1xyXG4gICAgY29uc3Qga2V5UG9zaXRpb24gPSB7XHJcbiAgICAgIHJvdzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCksXHJcbiAgICAgIGNvbHVtbjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCksXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIGlmIChpID09PSBrZXlQb3NpdGlvbi5yb3cgJiYgaiA9PT0ga2V5UG9zaXRpb24uY29sdW1uKSB7XHJcbiAgICAgICAgICByb3cucHVzaChcIvCfl53vuI9cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgIGNvbnN0IGNlbGxWYWx1ZSA9IHJhbmRvbVZhbHVlIDw9IDAuMiA/IFwi8J+So1wiIDogXCLwn5KwXCI7XHJcbiAgICAgICAgICByb3cucHVzaChjZWxsVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhcnIucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA4OyByKyspIHtcclxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA4OyBjKyspIHtcclxuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0aWxlLmRhdGFzZXQucG9zWCA9IHI7XHJcbiAgICAgICAgdGlsZS5kYXRhc2V0LnBvc1kgPSBjO1xyXG4gICAgICAgIHRoaXMuYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljayhlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgIGNvbnN0IGRhdGFQb3NWYWx1ZSA9IFtcclxuICAgICAgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wb3NYKSxcclxuICAgICAgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wb3NZKSxcclxuICAgIF07XHJcblxyXG4gICAgaWYgKHRoaXMuYm9hcmRBcnJheVtkYXRhUG9zVmFsdWVbMF1dW2RhdGFQb3NWYWx1ZVsxXV0gPT09IFwi8J+SsFwiKXtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImNvaW5UaWxlXCIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkQXJyYXlbZGF0YVBvc1ZhbHVlWzBdXVtkYXRhUG9zVmFsdWVbMV1dID09PSBcIvCfl53vuI9cIil7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJrZXlUaWxlXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYm9tYlRpbGVcIilcclxuICAgICAgLy8gdGhpcy5yZXZlYWxCb2FyZCgpXHJcbiAgICAgIGFsZXJ0KFwiR0FNRSBPVkVSXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiAgLy8gcmV2ZWFsQm9hcmQoKSB7XHJcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gIC8vICAgICAgIHN3aXRjaCAodGhpcy5ib2FyZEFycmF5W2ldW2pdKSB7XHJcbiAgLy8gICAgICAgICBjYXNlIFwi8J+SsFwiOlxyXG4gIC8vICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKTtcclxuICAvLyAgICAgICAgICAgYnJlYWs7XHJcbiAgLy8gICAgICAgICBjYXNlIFwi8J+Xne+4j1wiOlxyXG4gIC8vICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJrZXlUaWxlXCIpO1xyXG4gIC8vICAgICAgICAgICBicmVhaztcclxuICAvLyAgICAgICAgIGNhc2UgXCLwn5KjXCI6XHJcbiAgLy8gICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpO1xyXG4gIC8vICAgICAgICAgICBicmVhaztcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gZ2V0VGlsZUVsZW1lbnQocm93LCBjb2wpIHtcclxuICAvLyAgIC8vIFF1ZXJ5IHRoZSBib2FyZENvbnRhaW5lciBmb3IgdGhlIGxpIGVsZW1lbnQgd2l0aCBtYXRjaGluZyBkYXRhLXBvc1ggYW5kIGRhdGEtcG9zWVxyXG4gIC8vICAgcmV0dXJuIHRoaXMuYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihgbGlbZGF0YS1wb3NYPVwiJHtyb3d9XCJdW2RhdGEtcG9zWT1cIiR7Y29sfVwiXWApO1xyXG4gIC8vIH1cclxuICAvLyBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGUpXHJcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcblxyXG4gIC8vIFxyXG4iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImJvYXJkQ29udGFpbmVyIiwiYm9hcmRBcnJheSIsImNyZWF0ZUJvYXJkQXJyYXkiLCJrZXlQb3NpdGlvbiIsInJvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbHVtbiIsImFyciIsImkiLCJqIiwicHVzaCIsInJhbmRvbVZhbHVlIiwiY2VsbFZhbHVlIiwiY3JlYXRlQm9hcmQiLCJyIiwiYyIsInRpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwicG9zWCIsInBvc1kiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJlIiwiZGF0YVBvc1ZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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