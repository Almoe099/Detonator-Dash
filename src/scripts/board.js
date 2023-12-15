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
      // this.revealBoard()
      alert("GAME OVER");
    }
  }


}
  // revealBoard() {
  //   for (let i = 0; i < 8; i++) {
  //     for (let j = 0; j < 8; j++) {
  //       switch (this.boardArray[i][j]) {
  //         case "💰":
  //           tile.classList.add("coinTile");
  //           break;
  //         case "🗝️":
  //           tile.classList.add("keyTile");
  //           break;
  //         case "💣":
  //           tile.classList.add("bombTile");
  //           break;
  //       }
  //     }
  //   }
  // }
  // getTileElement(row, col) {
  //   // Query the boardContainer for the li element with matching data-posX and data-posY
  //   return this.boardContainer.querySelector(`li[data-posX="${row}"][data-posY="${col}"]`);
  // }
  // console.log("hello");
  // console.log(e)
  // console.log(e.target)

  // 
