import { Board } from "./board"

export default class Game {

    constructor(boardContainer){
        this.boardContainer = new Board()
        this.boardContainer.createBoard();

    }
    
    // startGame(){
    //     this.board.createBoard()
    // }

}

// import { drawGrid, handleCanvasClick, handlePlayButtonClick, handleGameOver, resetGame } from "./view.js";

// export function initializeGame(grid, gridSize, cellSize) {
//   const canvas = document.getElementById("gridCanvas");
//   const ctx = canvas.getContext("2d");
//   const playButton = document.getElementById("playButton");
//   const menu = document.getElementById("menu");

//   playButton.addEventListener("click", () => handlePlayButtonClick(menu, canvas, grid, gridSize));
//   canvas.addEventListener("click", (event) => handleCanvasClick(event, canvas, grid, gridSize, cellSize, handleGameOver));
// }
