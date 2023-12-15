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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n  }\n  createBoardArray() {\n    const keyPosition = {\n      row: Math.floor(Math.random() * 8),\n      column: Math.floor(Math.random() * 8)\n    };\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        if (i === keyPosition.row && j === keyPosition.column) {\n          row.push(\"🗝️\");\n        } else {\n          const randomValue = Math.random();\n          const cellValue = randomValue <= 0.2 ? \"💣\" : \"💰\";\n          row.push(cellValue);\n        }\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    // console.log(\"hello\");\n    // console.log(e)\n    // console.log(e.target)\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      e.target.classList.add(\"coinTile\");\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"🗝️\") {\n      e.target.classList.add(\"keyTile\");\n    } else {\n      e.target.classList.add(\"bombTile\");\n      alert(\"GAME OVER\");\n    }\n\n    // if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n    //   e.target.classList.add(\"coinTile\");\n    // } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n    //   else{\n    //   e.target.classList.add(\"bombTile\");\n    //   alert(\"GAME OVER\");\n    // }}\n  }\n}\n// grap coordinate and use it to see its value\n// e.innerHTML =\n\n// create a 2d array of [0,0] to [7,7]\n// populate it with random elements like b = bomb or \"\"\n//\n// [ [“B”, “”, “B”, “”, “”, “”],\n// [“B”, “”, “”, “”, “B”, “”],\n// [“”, “”, “”, “”, “”, “”],\n// [“”, “”, “”, “”, “”, “”],\n// [ [“B”, “”, “B”, “”, “B”, “”],\n// [“”, “”, “”, “”, “”, “”]]\n// google a 2d array\n// 🗝️\n// if (num > 0) {\n//   console.log(\"Positive number\");\n// } else if (num < 0) {\n//   console.log(\"Negative number\");\n// } else {\n//   console.log(\"Zero\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUNwQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNoQyxVQUFVLENBQUM0QixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFDO01BQ3JFRCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUMsTUFBTTtNQUNMTCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQ2xDQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3BCOztJQUlBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldG9uYXRvci1kYXNoLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKGJvYXJkQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmJvYXJkQ29udGFpbmVyID0gYm9hcmRDb250YWluZXI7XHJcbiAgICB0aGlzLmJvYXJkQXJyYXkgPSB0aGlzLmNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkQXJyYXkoKSB7XHJcbiAgICBjb25zdCBrZXlQb3NpdGlvbiA9IHtcclxuICAgICAgcm93OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSxcclxuICAgICAgY29sdW1uOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IGtleVBvc2l0aW9uLnJvdyAmJiBqID09PSBrZXlQb3NpdGlvbi5jb2x1bW4pIHtcclxuICAgICAgICAgIHJvdy5wdXNoKFwi8J+Xne+4j1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgY29uc3QgY2VsbFZhbHVlID0gcmFuZG9tVmFsdWUgPD0gMC4yID8gXCLwn5KjXCIgOiBcIvCfkrBcIjtcclxuICAgICAgICAgIHJvdy5wdXNoKGNlbGxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGFyci5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmQoKSB7XHJcbiAgICBmb3IgKGxldCByID0gMDsgciA8IDg7IHIrKykge1xyXG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDg7IGMrKykge1xyXG4gICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHRpbGUuZGF0YXNldC5wb3NYID0gcjtcclxuICAgICAgICB0aWxlLmRhdGFzZXQucG9zWSA9IGM7XHJcbiAgICAgICAgdGhpcy5ib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5ib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxyXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICBjb25zdCBkYXRhUG9zVmFsdWUgPSBbXHJcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucG9zWCksXHJcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucG9zWSksXHJcbiAgICBdO1xyXG5cclxuICAgIGlmICh0aGlzLmJvYXJkQXJyYXlbZGF0YVBvc1ZhbHVlWzBdXVtkYXRhUG9zVmFsdWVbMV1dID09PSBcIvCfkrBcIil7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZEFycmF5W2RhdGFQb3NWYWx1ZVswXV1bZGF0YVBvc1ZhbHVlWzFdXSA9PT0gXCLwn5ed77iPXCIpe1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwia2V5VGlsZVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpXHJcbiAgICAgIGFsZXJ0KFwiR0FNRSBPVkVSXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gaWYgKHRoaXMuYm9hcmRBcnJheVtkYXRhUG9zVmFsdWVbMF1dW2RhdGFQb3NWYWx1ZVsxXV0gPT09IFwi8J+SsFwiKSB7XHJcbiAgICAvLyAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKTtcclxuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5ib2FyZEFycmF5W2RhdGFQb3NWYWx1ZVswXV1bZGF0YVBvc1ZhbHVlWzFdXSA9PT0gXCLwn5KwXCIpIHtcclxuICAgIC8vICAgZWxzZXtcclxuICAgIC8vICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpO1xyXG4gICAgLy8gICBhbGVydChcIkdBTUUgT1ZFUlwiKTtcclxuICAgIC8vIH19XHJcbiAgfVxyXG59XHJcbi8vIGdyYXAgY29vcmRpbmF0ZSBhbmQgdXNlIGl0IHRvIHNlZSBpdHMgdmFsdWVcclxuLy8gZS5pbm5lckhUTUwgPVxyXG5cclxuLy8gY3JlYXRlIGEgMmQgYXJyYXkgb2YgWzAsMF0gdG8gWzcsN11cclxuLy8gcG9wdWxhdGUgaXQgd2l0aCByYW5kb20gZWxlbWVudHMgbGlrZSBiID0gYm9tYiBvciBcIlwiXHJcbi8vXHJcbi8vIFsgW+KAnELigJ0sIOKAnOKAnSwg4oCcQuKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnV0sXHJcbi8vIFvigJxC4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJxC4oCdLCDigJzigJ1dLFxyXG4vLyBb4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnV0sXHJcbi8vIFvigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdXSxcclxuLy8gWyBb4oCcQuKAnSwg4oCc4oCdLCDigJxC4oCdLCDigJzigJ0sIOKAnELigJ0sIOKAnOKAnV0sXHJcbi8vIFvigJzigJ0sIOKAnOKAnSwg4oCc4oCdLCDigJzigJ0sIOKAnOKAnSwg4oCc4oCdXV1cclxuLy8gZ29vZ2xlIGEgMmQgYXJyYXlcclxuLy8g8J+Xne+4j1xyXG4vLyBpZiAobnVtID4gMCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiUG9zaXRpdmUgbnVtYmVyXCIpO1xyXG4vLyB9IGVsc2UgaWYgKG51bSA8IDApIHtcclxuLy8gICBjb25zb2xlLmxvZyhcIk5lZ2F0aXZlIG51bWJlclwiKTtcclxuLy8gfSBlbHNlIHtcclxuLy8gICBjb25zb2xlLmxvZyhcIlplcm9cIik7XHJcbiJdLCJuYW1lcyI6WyJCb2FyZCIsImNvbnN0cnVjdG9yIiwiYm9hcmRDb250YWluZXIiLCJib2FyZEFycmF5IiwiY3JlYXRlQm9hcmRBcnJheSIsImtleVBvc2l0aW9uIiwicm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29sdW1uIiwiYXJyIiwiaSIsImoiLCJwdXNoIiwicmFuZG9tVmFsdWUiLCJjZWxsVmFsdWUiLCJjcmVhdGVCb2FyZCIsInIiLCJjIiwidGlsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJwb3NYIiwicG9zWSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImUiLCJkYXRhUG9zVmFsdWUiLCJwYXJzZUludCIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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