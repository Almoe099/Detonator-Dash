import Board from "./scripts/board";
import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {

    const board = document.getElementById("board")
    const game = new Game(board)


});

// import Board from "./board.js";
// import { drawGrid, handleCanvasClick, handlePlayButtonClick, resetGame } from "./view.js";

// document.addEventListener("DOMContentLoaded", function () {
//   const canvas = document.getElementById("gridCanvas");
//   const ctx = canvas.getContext("2d");
//   const playButton = document.getElementById("playButton");
//   const menu = document.getElementById("menu");

//   const gridSize = 8;
//   const cellSize = canvas.width / gridSize;
//   let grid = initializeGrid(gridSize);

//   playButton.addEventListener("click", () => handlePlayButtonClick(menu, canvas, grid, gridSize));
//   canvas.addEventListener("click", (event) => handleCanvasClick(event, canvas, grid, gridSize, cellSize, handleGameOver));
// });

// import { initializeGrid } from "./scripts/board.js";
// import { initializeGame } from "./scripts/game.js";

// document.addEventListener("DOMContentLoaded", function () {
//   const gridSize = 8;
//   const cellSize = 50; // You might want to adjust this based on your design
//   const grid = initializeGrid(gridSize);

//   initializeGame(grid, gridSize, cellSize);
// });


// import View from "./ttt-view";
// import Game from "../ttt_node/game";

// document.addEventListener("DOMContentLoaded", () => {
//   const game = new Game();
//   const rootEl = document.querySelector(".ttt");
//   new View(game, rootEl);
// });