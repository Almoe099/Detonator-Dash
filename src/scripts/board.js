export class Board {
  constructor() {}

  createBoard() {
      const div = document.createElement("div")
      for(let r = 0; r < 8; r++){
          let row = []
          for(let c = 0; c < 8; c++){
              let tile = document.createElement("li")
              tile.dataset.pos = JSON.stringify([r, c])
              div.appendChild(tile)
          }
      }
      document.getElementById('board').appendChild(div)
}
}

//   createBoard() {
//     return Array.from({ length: 8 }, () =>
//       Array.from({ length: 8 }, () => ({
//         color: "white",
//         isBomb: Math.random() < 0.2, // 20% chance of being a bomb
//         isClicked: false,
//       }))
//     );
//   }

//   isBomb(cell) {
//     return cell && cell.isBomb;
//   }

  
// }
// export function initializeGrid(size) {
//     return Array.from({ length: size }, () =>
//       Array.from({ length: size }, () => ({
//         color: "white",
//         isBomb: Math.random() < 0.2, // 20% chance of being a bomb
//         isClicked: false,
//       }))
//     );
//   }
  
//   export function isBomb(cell) {
//     return cell && cell.isBomb;
//   }