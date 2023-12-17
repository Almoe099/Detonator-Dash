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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n  }\n  createBoardArray() {\n    this.keyPosition = {\n      row: Math.floor(Math.random() * 8),\n      column: Math.floor(Math.random() * 8)\n    };\n    console.log(this.keyPosition);\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        if (i === this.keyPosition.row && j === this.keyPosition.column) {\n          row.push(\"🗝️\");\n        } else {\n          const randomValue = Math.random();\n          const cellValue = randomValue <= 0.2 ? \"💣\" : \"💰\";\n          row.push(cellValue);\n        }\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        tile.setAttribute(\"id\", r + \"-\" + c);\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    // console.log(e.target)\n    // console.log(this.keyPosition)\n    // console.log(this.nearKey(1, 2))\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.nearKey(dataPosValue[0], dataPosValue[1])) {\n      e.target.classList.add(\"nearKeyTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"🗝️\") {\n      e.target.classList.add(\"keyTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      e.target.classList.add(\"coinTile\");\n    } else {\n      e.target.classList.add(\"bombTile\");\n      this.revealBoard();\n      alert(\"GAME OVER\");\n    }\n  }\n  revealBoard() {\n    for (let i = 0; i < 8; i++) {\n      for (let j = 0; j < 8; j++) {\n        let tile = document.getElementById(i + \"-\" + j);\n        if (this.nearKey(parseInt(i), parseInt(j))) {\n          tile.classList.add(\"nearKeyTile\");\n        } else {\n          switch (this.boardArray[i][j]) {\n            case \"💰\":\n              tile.classList.add(\"coinTile\");\n              break;\n            case \"🗝️\":\n              tile.classList.add(\"keyTile\");\n              break;\n            case \"💣\":\n              tile.classList.add(\"bombTile\");\n              break;\n          }\n        }\n      }\n    }\n  }\n  nearKey(x, y) {\n    const keyPosX = this.keyPosition.row;\n    const keyPosY = this.keyPosition.column;\n    const nearTiles = [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1], [x + 1, y - 1], [x + 1, y + 1], [x - 1, y + 1], [x - 1, y - 1]];\n    return nearTiles.some(tile => tile[0] === keyPosX && tile[1] === keyPosY);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2QsQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNmO0lBRUQsT0FBT0csU0FBUyxDQUFDQyxJQUFJLENBQUMxQixJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBS3VCLE9BQU8sSUFBSXZCLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBS3dCLE9BQU8sQ0FBQztFQUMzRTtBQUdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0b25hdG9yLWRhc2gvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcz9iY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IoYm9hcmRDb250YWluZXIpIHtcclxuICAgIHRoaXMuYm9hcmRDb250YWluZXIgPSBib2FyZENvbnRhaW5lcjtcclxuICAgIHRoaXMuYm9hcmRBcnJheSA9IHRoaXMuY3JlYXRlQm9hcmRBcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRBcnJheSgpIHtcclxuICAgIHRoaXMua2V5UG9zaXRpb24gPSB7XHJcbiAgICAgIHJvdzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCksXHJcbiAgICAgIGNvbHVtbjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCksXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2codGhpcy5rZXlQb3NpdGlvbilcclxuXHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICBpZiAoaSA9PT0gdGhpcy5rZXlQb3NpdGlvbi5yb3cgJiYgaiA9PT0gdGhpcy5rZXlQb3NpdGlvbi5jb2x1bW4pIHtcclxuICAgICAgICAgIHJvdy5wdXNoKFwi8J+Xne+4j1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgY29uc3QgY2VsbFZhbHVlID0gcmFuZG9tVmFsdWUgPD0gMC4yID8gXCLwn5KjXCIgOiBcIvCfkrBcIjtcclxuICAgICAgICAgIHJvdy5wdXNoKGNlbGxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGFyci5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmQoKSB7XHJcbiAgICBmb3IgKGxldCByID0gMDsgciA8IDg7IHIrKykge1xyXG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDg7IGMrKykge1xyXG4gICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHRpbGUuZGF0YXNldC5wb3NYID0gcjtcclxuICAgICAgICB0aWxlLmRhdGFzZXQucG9zWSA9IGM7XHJcbiAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCByICsgXCItXCIgKyBjKVxyXG4gICAgICAgIHRoaXMuYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljayhlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMua2V5UG9zaXRpb24pXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5lYXJLZXkoMSwgMikpXHJcbiAgICBjb25zdCBkYXRhUG9zVmFsdWUgPSBbXHJcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucG9zWCksXHJcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucG9zWSksXHJcbiAgICBdO1xyXG5cclxuICAgIGlmICh0aGlzLm5lYXJLZXkoZGF0YVBvc1ZhbHVlWzBdLCBkYXRhUG9zVmFsdWVbMV0pKXtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIm5lYXJLZXlUaWxlXCIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkQXJyYXlbZGF0YVBvc1ZhbHVlWzBdXVtkYXRhUG9zVmFsdWVbMV1dID09PSBcIvCfl53vuI9cIil7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJrZXlUaWxlXCIpXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRBcnJheVtkYXRhUG9zVmFsdWVbMF1dW2RhdGFQb3NWYWx1ZVsxXV0gPT09IFwi8J+SsFwiKXtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImNvaW5UaWxlXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYm9tYlRpbGVcIilcclxuICAgICAgdGhpcy5yZXZlYWxCb2FyZCgpXHJcbiAgICAgIGFsZXJ0KFwiR0FNRSBPVkVSXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV2ZWFsQm9hcmQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSArIFwiLVwiICsgaik7XHJcbiAgXHJcbiAgICAgICAgaWYgKHRoaXMubmVhcktleShwYXJzZUludChpKSwgcGFyc2VJbnQoaikpKSB7XHJcbiAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJuZWFyS2V5VGlsZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoICh0aGlzLmJvYXJkQXJyYXlbaV1bal0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIvCfkrBcIjpcclxuICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIvCfl53vuI9cIjpcclxuICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJrZXlUaWxlXCIpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwi8J+So1wiOlxyXG4gICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmVhcktleSh4LCB5KSB7XHJcbiAgICBjb25zdCBrZXlQb3NYID0gdGhpcy5rZXlQb3NpdGlvbi5yb3c7XHJcbiAgICBjb25zdCBrZXlQb3NZID0gdGhpcy5rZXlQb3NpdGlvbi5jb2x1bW47XHJcbiAgXHJcbiAgICBjb25zdCBuZWFyVGlsZXMgPSBbXHJcbiAgICAgIFt4IC0gMSwgeV0sXHJcbiAgICAgIFt4ICsgMSwgeV0sXHJcbiAgICAgIFt4LCB5ICsgMV0sXHJcbiAgICAgIFt4LCB5IC0gMV0sIFxyXG4gICAgICBbeCArIDEsIHkgLSAxXSxcclxuICAgICAgW3ggKyAxLCB5ICsgMV0sXHJcbiAgICAgIFt4IC0gMSwgeSArIDFdLFxyXG4gICAgICBbeCAtIDEsIHkgLSAxXSxcclxuICAgIF07XHJcbiAgXHJcbiAgICByZXR1cm4gbmVhclRpbGVzLnNvbWUodGlsZSA9PiB0aWxlWzBdID09PSBrZXlQb3NYICYmIHRpbGVbMV0gPT09IGtleVBvc1kpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJCb2FyZCIsImNvbnN0cnVjdG9yIiwiYm9hcmRDb250YWluZXIiLCJib2FyZEFycmF5IiwiY3JlYXRlQm9hcmRBcnJheSIsImtleVBvc2l0aW9uIiwicm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29sdW1uIiwiY29uc29sZSIsImxvZyIsImFyciIsImkiLCJqIiwicHVzaCIsInJhbmRvbVZhbHVlIiwiY2VsbFZhbHVlIiwiY3JlYXRlQm9hcmQiLCJyIiwiYyIsInRpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwicG9zWCIsInBvc1kiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJlIiwiZGF0YVBvc1ZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJuZWFyS2V5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmV2ZWFsQm9hcmQiLCJhbGVydCIsImdldEVsZW1lbnRCeUlkIiwieCIsInkiLCJrZXlQb3NYIiwia2V5UG9zWSIsIm5lYXJUaWxlcyIsInNvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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