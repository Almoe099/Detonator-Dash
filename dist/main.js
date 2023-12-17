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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n  }\n  createBoardArray() {\n    this.keyPosition = {\n      row: Math.floor(Math.random() * 8),\n      column: Math.floor(Math.random() * 8)\n    };\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        if (i === this.keyPosition.row && j === this.keyPosition.column) {\n          row.push(\"🗝️\");\n        } else {\n          const randomValue = Math.random();\n          const cellValue = randomValue <= 0.2 ? \"💣\" : \"💰\";\n          row.push(cellValue);\n        }\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        tile.setAttribute(\"id\", r + \"-\" + c);\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.nearKey(dataPosValue[0], dataPosValue[1])) {\n      e.target.classList.add(\"nearKeyTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"🗝️\") {\n      e.target.classList.add(\"keyTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      e.target.classList.add(\"coinTile\");\n    } else {\n      e.target.classList.add(\"bombTile\");\n      this.revealBoard();\n      alert(\"GAME OVER\");\n    }\n  }\n  revealBoard() {\n    for (let i = 0; i < 8; i++) {\n      for (let j = 0; j < 8; j++) {\n        let tile = document.getElementById(i + \"-\" + j);\n        if (this.nearKey(parseInt(i), parseInt(j))) {\n          tile.classList.add(\"nearKeyTile\");\n        } else {\n          switch (this.boardArray[i][j]) {\n            case \"💰\":\n              tile.classList.add(\"coinTile\");\n              break;\n            case \"🗝️\":\n              tile.classList.add(\"keyTile\");\n              break;\n            case \"💣\":\n              tile.classList.add(\"bombTile\");\n              break;\n          }\n        }\n      }\n    }\n  }\n  nearKey(x, y) {\n    const keyPosX = this.keyPosition.row;\n    const keyPosY = this.keyPosition.column;\n    const nearTiles = [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1], [x + 1, y - 1], [x + 1, y + 1], [x - 1, y + 1], [x - 1, y - 1]];\n    return nearTiles.some(tile => tile[0] === keyPosX && tile[1] === keyPosY);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLENBQ2Y7SUFFRCxPQUFPRyxTQUFTLENBQUNDLElBQUksQ0FBQzFCLElBQUksSUFBSUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLdUIsT0FBTyxJQUFJdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLd0IsT0FBTyxDQUFDO0VBQzNFO0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRvbmF0b3ItZGFzaC8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzP2JjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuICBjb25zdHJ1Y3Rvcihib2FyZENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5ib2FyZENvbnRhaW5lciA9IGJvYXJkQ29udGFpbmVyO1xyXG4gICAgdGhpcy5ib2FyZEFycmF5ID0gdGhpcy5jcmVhdGVCb2FyZEFycmF5KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZEFycmF5KCkge1xyXG4gICAgdGhpcy5rZXlQb3NpdGlvbiA9IHtcclxuICAgICAgcm93OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSxcclxuICAgICAgY29sdW1uOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IHRoaXMua2V5UG9zaXRpb24ucm93ICYmIGogPT09IHRoaXMua2V5UG9zaXRpb24uY29sdW1uKSB7XHJcbiAgICAgICAgICByb3cucHVzaChcIvCfl53vuI9cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgIGNvbnN0IGNlbGxWYWx1ZSA9IHJhbmRvbVZhbHVlIDw9IDAuMiA/IFwi8J+So1wiIDogXCLwn5KwXCI7XHJcbiAgICAgICAgICByb3cucHVzaChjZWxsVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhcnIucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA4OyByKyspIHtcclxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA4OyBjKyspIHtcclxuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0aWxlLmRhdGFzZXQucG9zWCA9IHI7XHJcbiAgICAgICAgdGlsZS5kYXRhc2V0LnBvc1kgPSBjO1xyXG4gICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgciArIFwiLVwiICsgYylcclxuICAgICAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgY29uc3QgZGF0YVBvc1ZhbHVlID0gW1xyXG4gICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBvc1gpLFxyXG4gICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBvc1kpLFxyXG4gICAgXTtcclxuXHJcbiAgICBpZiAodGhpcy5uZWFyS2V5KGRhdGFQb3NWYWx1ZVswXSwgZGF0YVBvc1ZhbHVlWzFdKSl7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJuZWFyS2V5VGlsZVwiKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZEFycmF5W2RhdGFQb3NWYWx1ZVswXV1bZGF0YVBvc1ZhbHVlWzFdXSA9PT0gXCLwn5ed77iPXCIpe1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwia2V5VGlsZVwiKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkQXJyYXlbZGF0YVBvc1ZhbHVlWzBdXVtkYXRhUG9zVmFsdWVbMV1dID09PSBcIvCfkrBcIil7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpXHJcbiAgICAgIHRoaXMucmV2ZWFsQm9hcmQoKVxyXG4gICAgICBhbGVydChcIkdBTUUgT1ZFUlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldmVhbEJvYXJkKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkgKyBcIi1cIiArIGopO1xyXG4gIFxyXG4gICAgICAgIGlmICh0aGlzLm5lYXJLZXkocGFyc2VJbnQoaSksIHBhcnNlSW50KGopKSkge1xyXG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwibmVhcktleVRpbGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN3aXRjaCAodGhpcy5ib2FyZEFycmF5W2ldW2pdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCLwn5KwXCI6XHJcbiAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiY29pblRpbGVcIik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCLwn5ed77iPXCI6XHJcbiAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwia2V5VGlsZVwiKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIvCfkqNcIjpcclxuICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib21iVGlsZVwiKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5lYXJLZXkoeCwgeSkge1xyXG4gICAgY29uc3Qga2V5UG9zWCA9IHRoaXMua2V5UG9zaXRpb24ucm93O1xyXG4gICAgY29uc3Qga2V5UG9zWSA9IHRoaXMua2V5UG9zaXRpb24uY29sdW1uO1xyXG4gIFxyXG4gICAgY29uc3QgbmVhclRpbGVzID0gW1xyXG4gICAgICBbeCAtIDEsIHldLFxyXG4gICAgICBbeCArIDEsIHldLFxyXG4gICAgICBbeCwgeSArIDFdLFxyXG4gICAgICBbeCwgeSAtIDFdLCBcclxuICAgICAgW3ggKyAxLCB5IC0gMV0sXHJcbiAgICAgIFt4ICsgMSwgeSArIDFdLFxyXG4gICAgICBbeCAtIDEsIHkgKyAxXSxcclxuICAgICAgW3ggLSAxLCB5IC0gMV0sXHJcbiAgICBdO1xyXG4gIFxyXG4gICAgcmV0dXJuIG5lYXJUaWxlcy5zb21lKHRpbGUgPT4gdGlsZVswXSA9PT0ga2V5UG9zWCAmJiB0aWxlWzFdID09PSBrZXlQb3NZKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImJvYXJkQ29udGFpbmVyIiwiYm9hcmRBcnJheSIsImNyZWF0ZUJvYXJkQXJyYXkiLCJrZXlQb3NpdGlvbiIsInJvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbHVtbiIsImFyciIsImkiLCJqIiwicHVzaCIsInJhbmRvbVZhbHVlIiwiY2VsbFZhbHVlIiwiY3JlYXRlQm9hcmQiLCJyIiwiYyIsInRpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwicG9zWCIsInBvc1kiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJlIiwiZGF0YVBvc1ZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJuZWFyS2V5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmV2ZWFsQm9hcmQiLCJhbGVydCIsImdldEVsZW1lbnRCeUlkIiwieCIsInkiLCJrZXlQb3NYIiwia2V5UG9zWSIsIm5lYXJUaWxlcyIsInNvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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