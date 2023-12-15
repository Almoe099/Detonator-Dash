export class Board {
  constructor(boardContainer) {
    this.boardContainer = boardContainer;
    this.boardArray = this.createBoardArray();
  }

  createBoardArray() {
    const keyPosition = {
      row: Math.floor(Math.random() * 8),
      column: Math.floor(Math.random() * 8),
    };

    let arr = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        if (i === keyPosition.row && j === keyPosition.column) {
          row.push("🗝️");
        } else {
          const randomValue = Math.random();
          const cellValue = randomValue <= 0.2 ? "💣" : "💰";
          row.push(cellValue);
        }
      }
      arr.push(row);
    }
    return arr;
  }

  createBoard() {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        let tile = document.createElement("li");
        tile.dataset.posX = r;
        tile.dataset.posY = c;
        this.boardContainer.appendChild(tile);
      }
    }
    this.boardContainer.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    // console.log("hello");
    // console.log(e)
    // console.log(e.target)
    const dataPosValue = [
      parseInt(e.target.dataset.posX),
      parseInt(e.target.dataset.posY),
    ];

    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === "💰"){
      e.target.classList.add("coinTile");
    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === "🗝️"){
      e.target.classList.add("keyTile")
    } else {
      e.target.classList.add("bombTile")
      alert("GAME OVER");
    }



    // if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === "💰") {
    //   e.target.classList.add("coinTile");
    // } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === "💰") {
    //   else{
    //   e.target.classList.add("bombTile");
    //   alert("GAME OVER");
    // }}
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
// 🗝️
// if (num > 0) {
//   console.log("Positive number");
// } else if (num < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Zero");
