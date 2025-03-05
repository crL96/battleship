import Player from "./player.js";

const humanPlayer = new Player("Carl", "human");
const computerPlayer = new Player("Computer", "computer");

const enemyBoardVisible = [
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
];

humanPlayer.gameboard.placeShip(8, 0, 5, "vert");
humanPlayer.gameboard.placeShip(0, 2, 4, "hori");
humanPlayer.gameboard.placeShip(0, 4, 3, "hori");
humanPlayer.gameboard.placeShip(0, 6, 3, "hori");
humanPlayer.gameboard.placeShip(0, 8, 2, "hori");

placeComputerShip(5);
placeComputerShip(4);
placeComputerShip(3);
placeComputerShip(3);
placeComputerShip(2);


//Functions
function placeComputerShip(length) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    //Set direction to 50/50 chance of hori or vert
    let direction = "hori";
    if (Math.random() >= 0.5) direction = "vert";
    //try to place ship, if placement invalid, try again
    if (computerPlayer.gameboard.placeShip(x, y, length, direction) === false) {
        placeComputerShip(length);
    }
}

function computerAttacks() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    //if coordinates has already been tried, retry
    if (humanPlayer.gameboard.receiveAttack(x, y) === false) {
        computerAttacks();
        return;
    }
}

function humanAttacks(x, y) {
    //calls receiveAttack and checks if slot has already been tried
    if (computerPlayer.gameboard.receiveAttack(x, y) === false) return false;
    
    enemyBoardVisible[x][y] = computerPlayer.gameboard.board[x][y];
}

function checkGameWon() {
    if (computerPlayer.gameboard.allSunk() === true) {
        return humanPlayer.name;
    } else if (humanPlayer.gameboard.allSunk() === true) {
        return computerPlayer.nane;
    } else return false;
}

export { humanPlayer, enemyBoardVisible, computerAttacks, humanAttacks, checkGameWon };
