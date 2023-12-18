export class Board {
  constructor(boardContainer) {
    this.boardContainer = boardContainer;
    this.boardArray = this.createBoardArray();
    this.vaultCount = 1;
    this.score = 0;
    this.KeyScore = 50
    this.diamondScore = 25
    this.cashScore = 10
    this.bombRate = 0.2;
    this.handleClick = this.handleClick.bind(this)
  }

  createBoardArray() {
    if (this.bombRate === undefined) {
      this.bombRate = 0.2;
    }

    this.keyPosition = {
      row: Math.floor(Math.random() * 8),
      column: Math.floor(Math.random() * 8),
    };

    let arr = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        if (i === this.keyPosition.row && j === this.keyPosition.column) {
          row.push("🗝️");
        } else {
          const randomValue = Math.random();
          const cellValue = randomValue <= this.bombRate ? "💣" : "💰";
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
        tile.setAttribute("id", r + "-" + c);
        this.boardContainer.appendChild(tile);
      }
    }
    this.updateScoreDisplay();
    this.updateVaultCount();
    this.boardContainer.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    const dataPosValue = [
      parseInt(e.target.dataset.posX),
      parseInt(e.target.dataset.posY),
    ];

    if (e.target.classList.contains("diamondTile")) {
      return;
    }

    if (e.target.classList.contains("cashTile")) {
      return;
    }

    if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === "💰") {
      if (this.nearKey(dataPosValue[0], dataPosValue[1])) {
        e.target.classList.add("diamondTile");
        this.score += this.diamondScore;
      } else {
        e.target.classList.add("cashTile");
        this.score += this.cashScore;
      }
    } else if (this.boardArray[dataPosValue[0]][dataPosValue[1]] === "🗝️") {
      e.target.classList.add("keyTile");
      this.score += this.KeyScore;
      this.KeyFound();
      this.vaultCount += 1;
    } else {
      e.target.classList.add("bombTile");
      this.revealBoard();
      alert(`GAME OVER , Your Score: $${this.score}`);
      this.boardContainer.removeEventListener('click', this.handleClick);
      return;
    }
    this.updateScoreDisplay();
  }

  revealBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let tile = document.getElementById(i + "-" + j);
        switch (this.boardArray[i][j]) {
          case "💰":
            if (this.nearKey(parseInt(i), parseInt(j))) {
              tile.classList.add("diamondTile");
            } else {
              tile.classList.add("cashTile");
            }
            break;
          case "🗝️":
            tile.classList.add("keyTile");
            break;
          case "💣":
            tile.classList.add("bombTile");
            break;
        }
      }
    }
  }

  nearKey(x, y) {
    const keyPosX = this.keyPosition.row;
    const keyPosY = this.keyPosition.column;

    const nearTiles = [
      [x - 1, y],
      [x + 1, y],
      [x, y + 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x + 1, y + 1],
      [x - 1, y + 1],
      [x - 1, y - 1],
    ];

    return nearTiles.some((tile) => tile[0] === keyPosX && tile[1] === keyPosY);
  }

  updateScoreDisplay() {
    const score = document.getElementById("score");
    score.innerHTML = "Current Score $" + this.score;
    console.log("Score: $" + this.score);
  }

  updateVaultCount() {
    const vault = document.getElementById("vaultCount");
    vault.innerHTML = "Vault Number " + this.vaultCount;
  }

  KeyFound() {
    this.bombRate *= 1.1;
    this.KeyScore *= 2
    this.diamondScore *= 2
    this.cashScore *= 2
    setTimeout(() => {
      this.boardArray = this.createBoardArray();
      this.boardContainer.innerHTML = "";
      this.createBoard();
      this.updateScoreDisplay();
    }, 1000);
  }
}
