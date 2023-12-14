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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const board = document.getElementById(\"board\");\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](board);\n});\n\n// import Board from \"./board.js\";\n// import { drawGrid, handleCanvasClick, handlePlayButtonClick, resetGame } from \"./view.js\";\n\n// document.addEventListener(\"DOMContentLoaded\", function () {\n//   const canvas = document.getElementById(\"gridCanvas\");\n//   const ctx = canvas.getContext(\"2d\");\n//   const playButton = document.getElementById(\"playButton\");\n//   const menu = document.getElementById(\"menu\");\n\n//   const gridSize = 8;\n//   const cellSize = canvas.width / gridSize;\n//   let grid = initializeGrid(gridSize);\n\n//   playButton.addEventListener(\"click\", () => handlePlayButtonClick(menu, canvas, grid, gridSize));\n//   canvas.addEventListener(\"click\", (event) => handleCanvasClick(event, canvas, grid, gridSize, cellSize, handleGameOver));\n// });\n\n// import { initializeGrid } from \"./scripts/board.js\";\n// import { initializeGame } from \"./scripts/game.js\";\n\n// document.addEventListener(\"DOMContentLoaded\", function () {\n//   const gridSize = 8;\n//   const cellSize = 50; // You might want to adjust this based on your design\n//   const grid = initializeGrid(gridSize);\n\n//   initializeGame(grid, gridSize, cellSize);\n// });\n\n// import View from \"./ttt-view\";\n// import Game from \"../ttt_node/game\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const game = new Game();\n//   const rootEl = document.querySelector(\".ttt\");\n//   new View(game, rootEl);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ0Y7QUFFbENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVoRCxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5QyxNQUFNQyxJQUFJLEdBQUcsSUFBSUwscURBQUksQ0FBQ0csS0FBSyxDQUFDO0FBR2hDLENBQUMsQ0FBQzs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0b25hdG9yLWRhc2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vc2NyaXB0cy9ib2FyZFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIilcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShib2FyZClcclxuXHJcblxyXG59KTtcclxuXHJcbi8vIGltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZC5qc1wiO1xyXG4vLyBpbXBvcnQgeyBkcmF3R3JpZCwgaGFuZGxlQ2FudmFzQ2xpY2ssIGhhbmRsZVBsYXlCdXR0b25DbGljaywgcmVzZXRHYW1lIH0gZnJvbSBcIi4vdmlldy5qc1wiO1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZENhbnZhc1wiKTtcclxuLy8gICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4vLyAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIik7XHJcbi8vICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuXHJcbi8vICAgY29uc3QgZ3JpZFNpemUgPSA4O1xyXG4vLyAgIGNvbnN0IGNlbGxTaXplID0gY2FudmFzLndpZHRoIC8gZ3JpZFNpemU7XHJcbi8vICAgbGV0IGdyaWQgPSBpbml0aWFsaXplR3JpZChncmlkU2l6ZSk7XHJcblxyXG4vLyAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZVBsYXlCdXR0b25DbGljayhtZW51LCBjYW52YXMsIGdyaWQsIGdyaWRTaXplKSk7XHJcbi8vICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IGhhbmRsZUNhbnZhc0NsaWNrKGV2ZW50LCBjYW52YXMsIGdyaWQsIGdyaWRTaXplLCBjZWxsU2l6ZSwgaGFuZGxlR2FtZU92ZXIpKTtcclxuLy8gfSk7XHJcblxyXG4vLyBpbXBvcnQgeyBpbml0aWFsaXplR3JpZCB9IGZyb20gXCIuL3NjcmlwdHMvYm9hcmQuanNcIjtcclxuLy8gaW1wb3J0IHsgaW5pdGlhbGl6ZUdhbWUgfSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICBjb25zdCBncmlkU2l6ZSA9IDg7XHJcbi8vICAgY29uc3QgY2VsbFNpemUgPSA1MDsgLy8gWW91IG1pZ2h0IHdhbnQgdG8gYWRqdXN0IHRoaXMgYmFzZWQgb24geW91ciBkZXNpZ25cclxuLy8gICBjb25zdCBncmlkID0gaW5pdGlhbGl6ZUdyaWQoZ3JpZFNpemUpO1xyXG5cclxuLy8gICBpbml0aWFsaXplR2FtZShncmlkLCBncmlkU2l6ZSwgY2VsbFNpemUpO1xyXG4vLyB9KTtcclxuXHJcblxyXG4vLyBpbXBvcnQgVmlldyBmcm9tIFwiLi90dHQtdmlld1wiO1xyXG4vLyBpbXBvcnQgR2FtZSBmcm9tIFwiLi4vdHR0X25vZGUvZ2FtZVwiO1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG4vLyAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHR0XCIpO1xyXG4vLyAgIG5ldyBWaWV3KGdhbWUsIHJvb3RFbCk7XHJcbi8vIH0pOyJdLCJuYW1lcyI6WyJCb2FyZCIsIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2FyZCIsImdldEVsZW1lbnRCeUlkIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor() {}\n  createBoard() {\n    const div = document.createElement(\"div\");\n    for (let r = 0; r < 8; r++) {\n      let row = [];\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.pos = JSON.stringify([r, c]);\n        div.appendChild(tile);\n      }\n    }\n    document.getElementById('board').appendChild(div);\n  }\n}\n\n//   createBoard() {\n//     return Array.from({ length: 8 }, () =>\n//       Array.from({ length: 8 }, () => ({\n//         color: \"white\",\n//         isBomb: Math.random() < 0.2, // 20% chance of being a bomb\n//         isClicked: false,\n//       }))\n//     );\n//   }\n\n//   isBomb(cell) {\n//     return cell && cell.isBomb;\n//   }\n\n// }\n// export function initializeGrid(size) {\n//     return Array.from({ length: size }, () =>\n//       Array.from({ length: size }, () => ({\n//         color: \"white\",\n//         isBomb: Math.random() < 0.2, // 20% chance of being a bomb\n//         isClicked: false,\n//       }))\n//     );\n//   }\n\n//   export function isBomb(cell) {\n//     return cell && cell.isBomb;\n//   }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsS0FBSyxDQUFDO0VBQ2pCQyxXQUFXQSxDQUFBLEVBQUcsQ0FBQztFQUVmQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixNQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFDO01BQ3RCLElBQUlDLEdBQUcsR0FBRyxFQUFFO01BQ1osS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBQztRQUN0QixJQUFJQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN2Q0ksSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQ1AsQ0FBQyxFQUFFRSxDQUFDLENBQUMsQ0FBQztRQUN6Q0wsR0FBRyxDQUFDVyxXQUFXLENBQUNMLElBQUksQ0FBQztNQUN6QjtJQUNKO0lBQ0FMLFFBQVEsQ0FBQ1csY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDRCxXQUFXLENBQUNYLEdBQUcsQ0FBQztFQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0b25hdG9yLWRhc2gvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcz9iY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjcmVhdGVCb2FyZCgpIHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICBmb3IobGV0IHIgPSAwOyByIDwgODsgcisrKXtcclxuICAgICAgICAgIGxldCByb3cgPSBbXVxyXG4gICAgICAgICAgZm9yKGxldCBjID0gMDsgYyA8IDg7IGMrKyl7XHJcbiAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICAgICAgICAgICAgICB0aWxlLmRhdGFzZXQucG9zID0gSlNPTi5zdHJpbmdpZnkoW3IsIGNdKVxyXG4gICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aWxlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpLmFwcGVuZENoaWxkKGRpdilcclxufVxyXG59XHJcblxyXG4vLyAgIGNyZWF0ZUJvYXJkKCkge1xyXG4vLyAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IDggfSwgKCkgPT5cclxuLy8gICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogOCB9LCAoKSA9PiAoe1xyXG4vLyAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbi8vICAgICAgICAgaXNCb21iOiBNYXRoLnJhbmRvbSgpIDwgMC4yLCAvLyAyMCUgY2hhbmNlIG9mIGJlaW5nIGEgYm9tYlxyXG4vLyAgICAgICAgIGlzQ2xpY2tlZDogZmFsc2UsXHJcbi8vICAgICAgIH0pKVxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGlzQm9tYihjZWxsKSB7XHJcbi8vICAgICByZXR1cm4gY2VsbCAmJiBjZWxsLmlzQm9tYjtcclxuLy8gICB9XHJcblxyXG4gIFxyXG4vLyB9XHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplR3JpZChzaXplKSB7XHJcbi8vICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZSB9LCAoKSA9PlxyXG4vLyAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaXplIH0sICgpID0+ICh7XHJcbi8vICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuLy8gICAgICAgICBpc0JvbWI6IE1hdGgucmFuZG9tKCkgPCAwLjIsIC8vIDIwJSBjaGFuY2Ugb2YgYmVpbmcgYSBib21iXHJcbi8vICAgICAgICAgaXNDbGlja2VkOiBmYWxzZSxcclxuLy8gICAgICAgfSkpXHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICBleHBvcnQgZnVuY3Rpb24gaXNCb21iKGNlbGwpIHtcclxuLy8gICAgIHJldHVybiBjZWxsICYmIGNlbGwuaXNCb21iO1xyXG4vLyAgIH0iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUJvYXJkIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiciIsInJvdyIsImMiLCJ0aWxlIiwiZGF0YXNldCIsInBvcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcHBlbmRDaGlsZCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n\nclass Game {\n  constructor(boardContainer) {\n    this.boardContainer = new _board__WEBPACK_IMPORTED_MODULE_0__.Board();\n    this.boardContainer.createBoard();\n  }\n\n  // startGame(){\n  //     this.board.createBoard()\n  // }\n}\n\n// import { drawGrid, handleCanvasClick, handlePlayButtonClick, handleGameOver, resetGame } from \"./view.js\";\n\n// export function initializeGame(grid, gridSize, cellSize) {\n//   const canvas = document.getElementById(\"gridCanvas\");\n//   const ctx = canvas.getContext(\"2d\");\n//   const playButton = document.getElementById(\"playButton\");\n//   const menu = document.getElementById(\"menu\");\n\n//   playButton.addEventListener(\"click\", () => handlePlayButtonClick(menu, canvas, grid, gridSize));\n//   canvas.addEventListener(\"click\", (event) => handleCanvasClick(event, canvas, grid, gridSize, cellSize, handleGameOver));\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRWhCLE1BQU1DLElBQUksQ0FBQztFQUV0QkMsV0FBV0EsQ0FBQ0MsY0FBYyxFQUFDO0lBQ3ZCLElBQUksQ0FBQ0EsY0FBYyxHQUFHLElBQUlILHlDQUFLLENBQUMsQ0FBQztJQUNqQyxJQUFJLENBQUNHLGNBQWMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7RUFFckM7O0VBRUE7RUFDQTtFQUNBO0FBRUo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRvbmF0b3ItZGFzaC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJvYXJkQ29udGFpbmVyKXtcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyID0gbmV3IEJvYXJkKClcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmNyZWF0ZUJvYXJkKCk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBzdGFydEdhbWUoKXtcclxuICAgIC8vICAgICB0aGlzLmJvYXJkLmNyZWF0ZUJvYXJkKClcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcbi8vIGltcG9ydCB7IGRyYXdHcmlkLCBoYW5kbGVDYW52YXNDbGljaywgaGFuZGxlUGxheUJ1dHRvbkNsaWNrLCBoYW5kbGVHYW1lT3ZlciwgcmVzZXRHYW1lIH0gZnJvbSBcIi4vdmlldy5qc1wiO1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVHYW1lKGdyaWQsIGdyaWRTaXplLCBjZWxsU2l6ZSkge1xyXG4vLyAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZENhbnZhc1wiKTtcclxuLy8gICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4vLyAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIik7XHJcbi8vICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuXHJcbi8vICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlUGxheUJ1dHRvbkNsaWNrKG1lbnUsIGNhbnZhcywgZ3JpZCwgZ3JpZFNpemUpKTtcclxuLy8gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gaGFuZGxlQ2FudmFzQ2xpY2soZXZlbnQsIGNhbnZhcywgZ3JpZCwgZ3JpZFNpemUsIGNlbGxTaXplLCBoYW5kbGVHYW1lT3ZlcikpO1xyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJCb2FyZCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImJvYXJkQ29udGFpbmVyIiwiY3JlYXRlQm9hcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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