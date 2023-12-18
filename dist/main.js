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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor(boardContainer) {\n    this.boardContainer = boardContainer;\n    this.boardArray = this.createBoardArray();\n    this.vaultCount = 1;\n    this.score = 0;\n    // this.KeyScore = 50\n    // this.diamondScore = 25\n    // this.cashScore = 10\n    this.bombRate = 0.2;\n  }\n  createBoardArray() {\n    if (this.bombRate === undefined) {\n      this.bombRate = 0.2;\n    }\n    console.log(this.bombRate);\n    this.keyPosition = {\n      row: Math.floor(Math.random() * 8),\n      column: Math.floor(Math.random() * 8)\n    };\n    let arr = [];\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        if (i === this.keyPosition.row && j === this.keyPosition.column) {\n          row.push(\"🗝️\");\n        } else {\n          const randomValue = Math.random();\n          const cellValue = randomValue <= this.bombRate ? \"💣\" : \"💰\";\n          row.push(cellValue);\n        }\n      }\n      arr.push(row);\n    }\n    return arr;\n  }\n  createBoard() {\n    for (let r = 0; r < 8; r++) {\n      for (let c = 0; c < 8; c++) {\n        let tile = document.createElement(\"li\");\n        tile.dataset.posX = r;\n        tile.dataset.posY = c;\n        tile.setAttribute(\"id\", r + \"-\" + c);\n        this.boardContainer.appendChild(tile);\n      }\n    }\n    this.updateScoreDisplay();\n    this.updateVaultCount();\n    this.boardContainer.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick(e) {\n    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];\n    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"💰\") {\n      if (this.nearKey(dataPosValue[0], dataPosValue[1])) {\n        e.target.classList.add(\"nearKeyTile\");\n        this.score += 25;\n      } else {\n        e.target.classList.add(\"coinTile\");\n        this.score += 10;\n      }\n    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === \"🗝️\") {\n      e.target.classList.add(\"keyTile\");\n      this.score += 50;\n      this.KeyFound();\n      this.vaultCount += 1;\n      // this.updateVaultCount()\n    } else {\n      e.target.classList.add(\"bombTile\");\n      this.revealBoard();\n      // alert(`GAME OVER , Your Score: $${this.score}`);\n      // console.log(\"Removing event listener\");\n      // this.boardContainer.removeEventListener('click', this.handleClick.bind(this));\n      return;\n    }\n    this.updateScoreDisplay();\n    // this.updateVaultCount()\n  }\n  revealBoard() {\n    for (let i = 0; i < 8; i++) {\n      for (let j = 0; j < 8; j++) {\n        let tile = document.getElementById(i + \"-\" + j);\n        switch (this.boardArray[i][j]) {\n          case \"💰\":\n            if (this.nearKey(parseInt(i), parseInt(j))) {\n              tile.classList.add(\"nearKeyTile\");\n            } else {\n              tile.classList.add(\"coinTile\");\n            }\n            break;\n          case \"🗝️\":\n            tile.classList.add(\"keyTile\");\n            break;\n          case \"💣\":\n            tile.classList.add(\"bombTile\");\n            break;\n        }\n      }\n    }\n  }\n  nearKey(x, y) {\n    const keyPosX = this.keyPosition.row;\n    const keyPosY = this.keyPosition.column;\n    const nearTiles = [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1], [x + 1, y - 1], [x + 1, y + 1], [x - 1, y + 1], [x - 1, y - 1]];\n    return nearTiles.some(tile => tile[0] === keyPosX && tile[1] === keyPosY);\n  }\n  updateScoreDisplay() {\n    const score = document.getElementById(\"score\");\n    score.innerHTML = \"$\" + this.score;\n    console.log(\"Score: $\" + this.score);\n  }\n  updateVaultCount() {\n    const vault = document.getElementById(\"vaultCount\");\n    vault.innerHTML = this.vaultCount;\n  }\n  KeyFound() {\n    this.bombRate += 0.01;\n    setTimeout(() => {\n      this.boardArray = this.createBoardArray();\n      this.boardContainer.innerHTML = '';\n      this.createBoard();\n      this.updateScoreDisplay();\n      // this.updateVaultCount()\n    }, 1000);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztJQUNqQixNQUFNcUIsS0FBSyxHQUFHN0IsUUFBUSxDQUFDcUIsY0FBYyxDQUFDLFlBQVksQ0FBQztJQUNuRFEsS0FBSyxDQUFDRCxTQUFTLEdBQUcsSUFBSSxDQUFDbEQsVUFBVTtFQUNuQztFQUVBeUMsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDdkMsUUFBUSxJQUFJLElBQUk7SUFDckJrRCxVQUFVLENBQUMsTUFBTTtNQUNmLElBQUksQ0FBQ3RELFVBQVUsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7TUFDekMsSUFBSSxDQUFDRixjQUFjLENBQUNxRCxTQUFTLEdBQUcsRUFBRTtNQUNsQyxJQUFJLENBQUNoQyxXQUFXLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNXLGtCQUFrQixDQUFDLENBQUM7TUFDekI7SUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1Y7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RldG9uYXRvci1kYXNoLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKGJvYXJkQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmJvYXJkQ29udGFpbmVyID0gYm9hcmRDb250YWluZXI7XHJcbiAgICB0aGlzLmJvYXJkQXJyYXkgPSB0aGlzLmNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICAgIHRoaXMudmF1bHRDb3VudCA9IDFcclxuICAgIHRoaXMuc2NvcmUgPSAwXHJcbiAgICAvLyB0aGlzLktleVNjb3JlID0gNTBcclxuICAgIC8vIHRoaXMuZGlhbW9uZFNjb3JlID0gMjVcclxuICAgIC8vIHRoaXMuY2FzaFNjb3JlID0gMTBcclxuICAgIHRoaXMuYm9tYlJhdGUgPSAwLjJcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkQXJyYXkoKSB7XHJcbiAgICBpZiAodGhpcy5ib21iUmF0ZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy5ib21iUmF0ZSA9IDAuMlxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5ib21iUmF0ZSlcclxuXHJcbiAgICB0aGlzLmtleVBvc2l0aW9uID0ge1xyXG4gICAgICByb3c6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLFxyXG4gICAgICBjb2x1bW46IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICBpZiAoaSA9PT0gdGhpcy5rZXlQb3NpdGlvbi5yb3cgJiYgaiA9PT0gdGhpcy5rZXlQb3NpdGlvbi5jb2x1bW4pIHtcclxuICAgICAgICAgIHJvdy5wdXNoKFwi8J+Xne+4j1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgY29uc3QgY2VsbFZhbHVlID0gcmFuZG9tVmFsdWUgPD0gdGhpcy5ib21iUmF0ZSA/IFwi8J+So1wiIDogXCLwn5KwXCI7XHJcbiAgICAgICAgICByb3cucHVzaChjZWxsVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhcnIucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA4OyByKyspIHtcclxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA4OyBjKyspIHtcclxuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0aWxlLmRhdGFzZXQucG9zWCA9IHI7XHJcbiAgICAgICAgdGlsZS5kYXRhc2V0LnBvc1kgPSBjO1xyXG4gICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgciArIFwiLVwiICsgYyk7XHJcbiAgICAgICAgdGhpcy5ib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVTY29yZURpc3BsYXkoKTtcclxuICAgIHRoaXMudXBkYXRlVmF1bHRDb3VudCgpXHJcbiAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgY29uc3QgZGF0YVBvc1ZhbHVlID0gW1xyXG4gICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBvc1gpLFxyXG4gICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnBvc1kpLFxyXG4gICAgXTtcclxuXHJcbiAgICBpZiAodGhpcy5ib2FyZEFycmF5W2RhdGFQb3NWYWx1ZVswXV1bZGF0YVBvc1ZhbHVlWzFdXSA9PT0gXCLwn5KwXCIpIHtcclxuICAgICAgaWYgKHRoaXMubmVhcktleShkYXRhUG9zVmFsdWVbMF0sIGRhdGFQb3NWYWx1ZVsxXSkpIHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibmVhcktleVRpbGVcIik7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAyNVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKTtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDEwXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZEFycmF5W2RhdGFQb3NWYWx1ZVswXV1bZGF0YVBvc1ZhbHVlWzFdXSA9PT0gXCLwn5ed77iPXCIpIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImtleVRpbGVcIik7XHJcbiAgICAgIHRoaXMuc2NvcmUgKz0gNTBcclxuICAgICAgdGhpcy5LZXlGb3VuZCgpO1xyXG4gICAgICB0aGlzLnZhdWx0Q291bnQgKz0gMVxyXG4gICAgICAvLyB0aGlzLnVwZGF0ZVZhdWx0Q291bnQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJvbWJUaWxlXCIpO1xyXG4gICAgICB0aGlzLnJldmVhbEJvYXJkKCk7XHJcbiAgICAgIC8vIGFsZXJ0KGBHQU1FIE9WRVIgLCBZb3VyIFNjb3JlOiAkJHt0aGlzLnNjb3JlfWApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlJlbW92aW5nIGV2ZW50IGxpc3RlbmVyXCIpO1xyXG4gICAgICAvLyB0aGlzLmJvYXJkQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVTY29yZURpc3BsYXkoKVxyXG4gICAgLy8gdGhpcy51cGRhdGVWYXVsdENvdW50KClcclxuICB9XHJcblxyXG4gIHJldmVhbEJvYXJkKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkgKyBcIi1cIiArIGopO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5ib2FyZEFycmF5W2ldW2pdKSB7XHJcbiAgICAgICAgICBjYXNlIFwi8J+SsFwiOlxyXG4gICAgICAgICAgICBpZiAodGhpcy5uZWFyS2V5KHBhcnNlSW50KGkpLCBwYXJzZUludChqKSkpIHtcclxuICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJuZWFyS2V5VGlsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJjb2luVGlsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCLwn5ed77iPXCI6XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImtleVRpbGVcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIvCfkqNcIjpcclxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiYm9tYlRpbGVcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmVhcktleSh4LCB5KSB7XHJcbiAgICBjb25zdCBrZXlQb3NYID0gdGhpcy5rZXlQb3NpdGlvbi5yb3c7XHJcbiAgICBjb25zdCBrZXlQb3NZID0gdGhpcy5rZXlQb3NpdGlvbi5jb2x1bW47XHJcblxyXG4gICAgY29uc3QgbmVhclRpbGVzID0gW1xyXG4gICAgICBbeCAtIDEsIHldLFxyXG4gICAgICBbeCArIDEsIHldLFxyXG4gICAgICBbeCwgeSArIDFdLFxyXG4gICAgICBbeCwgeSAtIDFdLFxyXG4gICAgICBbeCArIDEsIHkgLSAxXSxcclxuICAgICAgW3ggKyAxLCB5ICsgMV0sXHJcbiAgICAgIFt4IC0gMSwgeSArIDFdLFxyXG4gICAgICBbeCAtIDEsIHkgLSAxXSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIG5lYXJUaWxlcy5zb21lKCh0aWxlKSA9PiB0aWxlWzBdID09PSBrZXlQb3NYICYmIHRpbGVbMV0gPT09IGtleVBvc1kpO1xyXG4gIH1cclxuXHJcblxyXG4gIHVwZGF0ZVNjb3JlRGlzcGxheSgpIHtcclxuICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKVxyXG4gICAgc2NvcmUuaW5uZXJIVE1MID0gXCIkXCIgKyB0aGlzLnNjb3JlXHJcbiAgICBjb25zb2xlLmxvZyhcIlNjb3JlOiAkXCIgKyB0aGlzLnNjb3JlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZhdWx0Q291bnQoKSB7XHJcbiAgICBjb25zdCB2YXVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmF1bHRDb3VudFwiKVxyXG4gICAgdmF1bHQuaW5uZXJIVE1MID0gdGhpcy52YXVsdENvdW50XHJcbiAgfVxyXG5cclxuICBLZXlGb3VuZCgpIHtcclxuICAgIHRoaXMuYm9tYlJhdGUgKz0gMC4wMVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYm9hcmRBcnJheSA9IHRoaXMuY3JlYXRlQm9hcmRBcnJheSgpO1xyXG4gICAgICB0aGlzLmJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB0aGlzLmNyZWF0ZUJvYXJkKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU2NvcmVEaXNwbGF5KCk7XHJcbiAgICAgIC8vIHRoaXMudXBkYXRlVmF1bHRDb3VudCgpXHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImJvYXJkQ29udGFpbmVyIiwiYm9hcmRBcnJheSIsImNyZWF0ZUJvYXJkQXJyYXkiLCJ2YXVsdENvdW50Iiwic2NvcmUiLCJib21iUmF0ZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJrZXlQb3NpdGlvbiIsInJvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbHVtbiIsImFyciIsImkiLCJqIiwicHVzaCIsInJhbmRvbVZhbHVlIiwiY2VsbFZhbHVlIiwiY3JlYXRlQm9hcmQiLCJyIiwiYyIsInRpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwicG9zWCIsInBvc1kiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInVwZGF0ZVNjb3JlRGlzcGxheSIsInVwZGF0ZVZhdWx0Q291bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZSIsImRhdGFQb3NWYWx1ZSIsInBhcnNlSW50IiwidGFyZ2V0IiwibmVhcktleSIsImNsYXNzTGlzdCIsImFkZCIsIktleUZvdW5kIiwicmV2ZWFsQm9hcmQiLCJnZXRFbGVtZW50QnlJZCIsIngiLCJ5Iiwia2V5UG9zWCIsImtleVBvc1kiLCJuZWFyVGlsZXMiLCJzb21lIiwiaW5uZXJIVE1MIiwidmF1bHQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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