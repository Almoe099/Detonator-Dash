export class Board {
  constructor(boardContainer) {
    this.boardContainer = boardContainer;
    this.boardArray = this.createBoardArray();
  }

  createBoardArray() {
    console.log("array")

    let arr = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        const randomValue = Math.random();
        const cellValue = randomValue <= 0.2 ? "b" : "y";
        row.push(cellValue);
        // console.log(row)
      }
      arr.push(row);
    }
    // console.log(arr[3][5])
    return arr;
  }

  createBoard() {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        let tile = document.createElement("li");
        // tile.dataset.pos = JSON.stringify([r, c]);
        tile.dataset.posX = r;
        tile.dataset.posY = c;
        // tile.dataset.pos = ([r, c]);
        this.boardContainer.appendChild(tile);
      }
    }
    // this.createBoardArray()
    this.boardContainer.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    console.log("hello");
    console.log(e)
    console.log(e.target)
    const dataPosValue = [parseInt(e.target.dataset.posX), parseInt(e.target.dataset.posY)];
    // console.log(dataPosValue.prototype);
    console.log((dataPosValue))
    // console.log(this.boardArray);

    // if(this.boardArray[])
    
    // console.log(this.arr)
    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === "y"){
      console.log("hellooooooo")
    }
  }
}
// grap coordinate and use it to see its value
// e.innerHTML =

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
