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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n  }\n  createBoardArray() {\n    this.keyPosition = {\n      row: Math.floor(Math.random() * 8),\n      column: Math.floor(Math.random() * 8)\n    };\n    console.log(this.keyPosition);\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        if (i === this.keyPosition.row && j === this.keyPosition.column) {\n          row.push(\"🗝️\");\n        } else {\n          const randomValue = Math.random();\n          const cellValue = randomValue <= 0.2 ? \"💣\" : \"💰\";\n          row.push(cellValue);\n        }\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        tile.setAttribute(\"id\", r + \"-\" + c);\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    // console.log(e.target)\n    // console.log(this.keyPosition)\n    // console.log(this.nearKey(1, 2))\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.nearKey(dataPosValue[0], dataPosValue[1])) {\n      e.target.classList.add(\"nearKeyTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"🗝️\") {\n      e.target.classList.add(\"keyTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      e.target.classList.add(\"coinTile\");\n    } else {\n      e.target.classList.add(\"bombTile\");\n      this.revealBoard();\n      alert(\"GAME OVER\");\n    }\n  }\n  revealBoard() {\n    for (let i = 0; i < 8; i++) {\n      for (let j = 0; j < 8; j++) {\n        let tile = document.getElementById(i + \"-\" + j);\n        switch (this.boardArray[i][j]) {\n          case \"💎\":\n            tile.classList.add(\"nearKeyTile\");\n            break;\n          case \"💰\":\n            tile.classList.add(\"coinTile\");\n            break;\n          case \"🗝️\":\n            tile.classList.add(\"keyTile\");\n            break;\n          case \"💣\":\n            tile.classList.add(\"bombTile\");\n            break;\n        }\n      }\n    }\n  }\n  nearKey(x, y) {\n    const keyPosX = this.keyPosition.row;\n    const keyPosY = this.keyPosition.column;\n    const nearTiles = [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1], [x + 1, y - 1], [x + 1, y + 1], [x - 1, y + 1], [x - 1, y - 1]];\n    return nearTiles.some(tile => tile[0] === keyPosX && tile[1] === keyPosY);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsSUFBSSxDQUFDMUIsSUFBSSxJQUFJQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUt1QixPQUFPLElBQUl2QixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUt3QixPQUFPLENBQUM7RUFDM0U7QUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RldG9uYXRvci1kYXNoLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKGJvYXJkQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmJvYXJkQ29udGFpbmVyID0gYm9hcmRDb250YWluZXI7XHJcbiAgICB0aGlzLmJvYXJkQXJyYXkgPSB0aGlzLmNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkQXJyYXkoKSB7XHJcbiAgICB0aGlzLmtleVBvc2l0aW9uID0ge1xyXG4gICAgICByb3c6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLFxyXG4gICAgICBjb2x1bW46IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMua2V5UG9zaXRpb24pXHJcblxyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IHRoaXMua2V5UG9zaXRpb24ucm93ICYmIGogPT09IHRoaXMua2V5UG9zaXRpb24uY29sdW1uKSB7XHJcbiAgICAgICAgICByb3cucHVzaChcIvCfl53vuI9cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgIGNvbnN0IGNlbGxWYWx1ZSA9IHJhbmRvbVZhbHVlIDw9IDAuMiA/IFwi8J+So1wiIDogXCLwn5KwXCI7XHJcbiAgICAgICAgICByb3cucHVzaChjZWxsVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhcnIucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA4OyByKyspIHtcclxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA4OyBjKyspIHtcclxuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0aWxlLmRhdGFzZXQucG9zWCA9IHI7XHJcbiAgICAgICAgdGlsZS5kYXRhc2V0LnBvc1kgPSBjO1xyXG4gICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgciArIFwiLVwiICsgYylcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmtleVBvc2l0aW9uKVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5uZWFyS2V5KDEsIDIpKVxyXG4gICAgY29uc3QgZGF0YVBvc1ZhbHVlID0gW1xyXG4gICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBvc1gpLFxyXG4gICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBvc1kpLFxyXG4gICAgXTtcclxuXHJcbiAgICBpZiAodGhpcy5uZWFyS2V5KGRhdGFQb3NWYWx1ZVswXSwgZGF0YVBvc1ZhbHVlWzFdKSl7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJuZWFyS2V5VGlsZVwiKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZEFycmF5W2RhdGFQb3NWYWx1ZVswXV1bZGF0YVBvc1ZhbHVlWzFdXSA9PT0gXCLwn5ed77iPXCIpe1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwia2V5VGlsZVwiKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkQXJyYXlbZGF0YVBvc1ZhbHVlWzBdXVtkYXRhUG9zVmFsdWVbMV1dID09PSBcIvCfkrBcIil7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpXHJcbiAgICAgIHRoaXMucmV2ZWFsQm9hcmQoKVxyXG4gICAgICBhbGVydChcIkdBTUUgT1ZFUlwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV2ZWFsQm9hcmQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGkgKyBcIi1cIiArIGopXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmJvYXJkQXJyYXlbaV1bal0pIHtcclxuICAgICAgICAgIGNhc2UgXCLwn5KOXCI6XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcIm5lYXJLZXlUaWxlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCLwn5KwXCI6XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImNvaW5UaWxlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCLwn5ed77iPXCI6XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImtleVRpbGVcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIvCfkqNcIjpcclxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiYm9tYlRpbGVcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmVhcktleSh4LCB5KSB7XHJcbiAgICBjb25zdCBrZXlQb3NYID0gdGhpcy5rZXlQb3NpdGlvbi5yb3c7XHJcbiAgICBjb25zdCBrZXlQb3NZID0gdGhpcy5rZXlQb3NpdGlvbi5jb2x1bW47XHJcbiAgXHJcbiAgICBjb25zdCBuZWFyVGlsZXMgPSBbXHJcbiAgICAgIFt4IC0gMSwgeV0sXHJcbiAgICAgIFt4ICsgMSwgeV0sXHJcbiAgICAgIFt4LCB5ICsgMV0sXHJcbiAgICAgIFt4LCB5IC0gMV0sIFxyXG4gICAgICBbeCArIDEsIHkgLSAxXSxcclxuICAgICAgW3ggKyAxLCB5ICsgMV0sXHJcbiAgICAgIFt4IC0gMSwgeSArIDFdLFxyXG4gICAgICBbeCAtIDEsIHkgLSAxXSxcclxuICAgIF07XHJcbiAgXHJcbiAgICByZXR1cm4gbmVhclRpbGVzLnNvbWUodGlsZSA9PiB0aWxlWzBdID09PSBrZXlQb3NYICYmIHRpbGVbMV0gPT09IGtleVBvc1kpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJCb2FyZCIsImNvbnN0cnVjdG9yIiwiYm9hcmRDb250YWluZXIiLCJib2FyZEFycmF5IiwiY3JlYXRlQm9hcmRBcnJheSIsImtleVBvc2l0aW9uIiwicm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29sdW1uIiwiY29uc29sZSIsImxvZyIsImFyciIsImkiLCJqIiwicHVzaCIsInJhbmRvbVZhbHVlIiwiY2VsbFZhbHVlIiwiY3JlYXRlQm9hcmQiLCJyIiwiYyIsInRpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwicG9zWCIsInBvc1kiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJlIiwiZGF0YVBvc1ZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJuZWFyS2V5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmV2ZWFsQm9hcmQiLCJhbGVydCIsImdldEVsZW1lbnRCeUlkIiwieCIsInkiLCJrZXlQb3NYIiwia2V5UG9zWSIsIm5lYXJUaWxlcyIsInNvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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