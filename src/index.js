import Board from "./scripts/board";
import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {

    const board = document.getElementById("board")
    const game = new Game(board)

    
    const open = document.getElementById("open");
    const modalContainer = document.getElementById("modalContainer");
    const close = document.getElementById("close");
    
    open.addEventListener("click", () => {
        modalContainer.classList.add("show")
    })
    close.addEventListener("click", () => {
        modalContainer.classList.remove("show")
    })
    
});