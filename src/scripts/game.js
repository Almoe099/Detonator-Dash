import { Board } from "./board"

export default class Game {

    constructor(boardContainer){
        this.board = new Board(boardContainer)
        this.board.createBoard();

    }
    
}
