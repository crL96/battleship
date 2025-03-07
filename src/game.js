import Player from "./player.js";

let humanPlayer;
let computerPlayer;
let enemyBoardVisible;
newGame();

//Functions
function randomPlaceShip(length, player) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    //Set direction to 50/50 chance of hori or vert
    let direction = "hori";
    if (Math.random() >= 0.5) direction = "vert";
    //try to place ship, if placement invalid, try again
    if (player.gameboard.placeShip(x, y, length, direction) === false) {
        randomPlaceShip(length, player);
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
        return computerPlayer.name;
    } else return false;
}

function newGame() {
    humanPlayer = new Player("Human", "human");
    computerPlayer = new Player("Computer", "computer");
    enemyBoardVisible = [
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

    randomPlaceShip(5, computerPlayer);
    randomPlaceShip(4, computerPlayer);
    randomPlaceShip(3, computerPlayer);
    randomPlaceShip(3, computerPlayer);
    randomPlaceShip(2, computerPlayer);
}

export {
    humanPlayer,
    enemyBoardVisible,
    computerAttacks,
    humanAttacks,
    checkGameWon,
    newGame,
    randomPlaceShip,
};
