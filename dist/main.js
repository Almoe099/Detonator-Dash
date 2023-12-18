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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n  }\n  createBoardArray() {\n    this.keyPosition = {\n      row: Math.floor(Math.random() * 8),\n      column: Math.floor(Math.random() * 8)\n    };\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        if (i === this.keyPosition.row && j === this.keyPosition.column) {\n          row.push(\"🗝️\");\n        } else {\n          const randomValue = Math.random();\n          const cellValue = randomValue <= 0.2 ? \"💣\" : \"💰\";\n          row.push(cellValue);\n        }\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        tile.setAttribute(\"id\", r + \"-\" + c);\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      if (this.nearKey(dataPosValue[0], dataPosValue[1])) {\n        e.target.classList.add(\"nearKeyTile\");\n      } else {\n        e.target.classList.add(\"coinTile\");\n      }\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"🗝️\") {\n      e.target.classList.add(\"keyTile\");\n    } else {\n      e.target.classList.add(\"bombTile\");\n      this.revealBoard();\n      alert(\"GAME OVER\");\n    }\n  }\n  revealBoard() {\n    for (let i = 0; i < 8; i++) {\n      for (let j = 0; j < 8; j++) {\n        let tile = document.getElementById(i + \"-\" + j);\n        switch (this.boardArray[i][j]) {\n          case \"💰\":\n            if (this.nearKey(parseInt(i), parseInt(j))) {\n              tile.classList.add(\"nearKeyTile\");\n            } else {\n              tile.classList.add(\"coinTile\");\n            }\n            break;\n          case \"🗝️\":\n            tile.classList.add(\"keyTile\");\n            break;\n          case \"💣\":\n            tile.classList.add(\"bombTile\");\n            break;\n        }\n      }\n    }\n  }\n  nearKey(x, y) {\n    const keyPosX = this.keyPosition.row;\n    const keyPosY = this.keyPosition.column;\n    const nearTiles = [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1], [x + 1, y - 1], [x + 1, y + 1], [x - 1, y + 1], [x - 1, y - 1]];\n    return nearTiles.some(tile => tile[0] === keyPosX && tile[1] === keyPosY);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNmO0lBRUQsT0FBT0csU0FBUyxDQUFDQyxJQUFJLENBQUUxQixJQUFJLElBQUtBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBS3VCLE9BQU8sSUFBSXZCLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBS3dCLE9BQU8sQ0FBQztFQUM3RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0b25hdG9yLWRhc2gvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcz9iY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgY29uc3RydWN0b3IoYm9hcmRDb250YWluZXIpIHtcclxuICAgIHRoaXMuYm9hcmRDb250YWluZXIgPSBib2FyZENvbnRhaW5lcjtcclxuICAgIHRoaXMuYm9hcmRBcnJheSA9IHRoaXMuY3JlYXRlQm9hcmRBcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmRBcnJheSgpIHtcclxuICAgIHRoaXMua2V5UG9zaXRpb24gPSB7XHJcbiAgICAgIHJvdzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCksXHJcbiAgICAgIGNvbHVtbjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCksXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICAgIGlmIChpID09PSB0aGlzLmtleVBvc2l0aW9uLnJvdyAmJiBqID09PSB0aGlzLmtleVBvc2l0aW9uLmNvbHVtbikge1xyXG4gICAgICAgICAgcm93LnB1c2goXCLwn5ed77iPXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByYW5kb21WYWx1ZSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSByYW5kb21WYWx1ZSA8PSAwLjIgPyBcIvCfkqNcIiA6IFwi8J+SsFwiO1xyXG4gICAgICAgICAgcm93LnB1c2goY2VsbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXJyLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb2FyZCgpIHtcclxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgODsgcisrKSB7XHJcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgODsgYysrKSB7XHJcbiAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgdGlsZS5kYXRhc2V0LnBvc1ggPSByO1xyXG4gICAgICAgIHRpbGUuZGF0YXNldC5wb3NZID0gYztcclxuICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZShcImlkXCIsIHIgKyBcIi1cIiArIGMpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljayhlKSB7XHJcbiAgICBjb25zdCBkYXRhUG9zVmFsdWUgPSBbXHJcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucG9zWCksXHJcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucG9zWSksXHJcbiAgICBdO1xyXG5cclxuICAgIGlmICh0aGlzLmJvYXJkQXJyYXlbZGF0YVBvc1ZhbHVlWzBdXVtkYXRhUG9zVmFsdWVbMV1dID09PSBcIvCfkrBcIikge1xyXG4gICAgICBpZiAodGhpcy5uZWFyS2V5KGRhdGFQb3NWYWx1ZVswXSwgZGF0YVBvc1ZhbHVlWzFdKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJuZWFyS2V5VGlsZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiY29pblRpbGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZEFycmF5W2RhdGFQb3NWYWx1ZVswXV1bZGF0YVBvc1ZhbHVlWzFdXSA9PT0gXCLwn5ed77iPXCIpIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImtleVRpbGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYm9tYlRpbGVcIik7XHJcbiAgICAgIHRoaXMucmV2ZWFsQm9hcmQoKTtcclxuICAgICAgYWxlcnQoXCJHQU1FIE9WRVJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXZlYWxCb2FyZCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpICsgXCItXCIgKyBqKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYm9hcmRBcnJheVtpXVtqXSkge1xyXG4gICAgICAgICAgY2FzZSBcIvCfkrBcIjpcclxuICAgICAgICAgICAgaWYgKHRoaXMubmVhcktleShwYXJzZUludChpKSwgcGFyc2VJbnQoaikpKSB7XHJcbiAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwibmVhcktleVRpbGVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiY29pblRpbGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwi8J+Xne+4j1wiOlxyXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJrZXlUaWxlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCLwn5KjXCI6XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5lYXJLZXkoeCwgeSkge1xyXG4gICAgY29uc3Qga2V5UG9zWCA9IHRoaXMua2V5UG9zaXRpb24ucm93O1xyXG4gICAgY29uc3Qga2V5UG9zWSA9IHRoaXMua2V5UG9zaXRpb24uY29sdW1uO1xyXG5cclxuICAgIGNvbnN0IG5lYXJUaWxlcyA9IFtcclxuICAgICAgW3ggLSAxLCB5XSxcclxuICAgICAgW3ggKyAxLCB5XSxcclxuICAgICAgW3gsIHkgKyAxXSxcclxuICAgICAgW3gsIHkgLSAxXSxcclxuICAgICAgW3ggKyAxLCB5IC0gMV0sXHJcbiAgICAgIFt4ICsgMSwgeSArIDFdLFxyXG4gICAgICBbeCAtIDEsIHkgKyAxXSxcclxuICAgICAgW3ggLSAxLCB5IC0gMV0sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiBuZWFyVGlsZXMuc29tZSgodGlsZSkgPT4gdGlsZVswXSA9PT0ga2V5UG9zWCAmJiB0aWxlWzFdID09PSBrZXlQb3NZKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJvYXJkIiwiY29uc3RydWN0b3IiLCJib2FyZENvbnRhaW5lciIsImJvYXJkQXJyYXkiLCJjcmVhdGVCb2FyZEFycmF5Iiwia2V5UG9zaXRpb24iLCJyb3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb2x1bW4iLCJhcnIiLCJpIiwiaiIsInB1c2giLCJyYW5kb21WYWx1ZSIsImNlbGxWYWx1ZSIsImNyZWF0ZUJvYXJkIiwiciIsImMiLCJ0aWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsInBvc1giLCJwb3NZIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZSIsImRhdGFQb3NWYWx1ZSIsInBhcnNlSW50IiwidGFyZ2V0IiwibmVhcktleSIsImNsYXNzTGlzdCIsImFkZCIsInJldmVhbEJvYXJkIiwiYWxlcnQiLCJnZXRFbGVtZW50QnlJZCIsIngiLCJ5Iiwia2V5UG9zWCIsImtleVBvc1kiLCJuZWFyVGlsZXMiLCJzb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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