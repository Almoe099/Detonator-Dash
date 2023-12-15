export class Board {
  constructor(boardContainer) {
    this.boardContainer = boardContainer;
    // this.boardArray = createBoardArray()
  }

  createBoardArray() {

    const my2DArray = [];
    const rows = 8;
    const columns = 8;
    for (let i = 0; i < rows; i++) {
      my2DArray[i] = [];
      for (let j = 0; j < columns; j++) {
        my2DArray[i][j] = j;
      }
    }
    console.log(my2DArray);
  }

  createBoard() {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        let tile = document.createElement("li");
        tile.dataset.pos = JSON.stringify([r, c]);
        this.boardContainer.appendChild(tile);
        // tile.innerHTML = ""
      }
    }
    this.boardContainer.addEventListener("click", this.handleClick);

    // this.createBoardArray()
  }

  handleClick(e) {
    // e.innerHTML =
    console.log("hello");
    // grap coordinate and use it to see its value
  }
}

// create a 2d array of [0,0] to [7,7]
// populate it with random elements like b = bomb or ""
//
// [ [“B”, “”, “B”, “”, “”, “”],
// [“B”, “”, “”, “”, “B”, “”],
// [“”, “”, “”, “”, “”, “”],
// [“”, “”, “”, “”, “”, “”],
// [ [“B”, “”, “B”, “”, “B”, “”],
// [“”, “”, “”, “”, “”, “”]]
// google a 2d array
