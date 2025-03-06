import { renderBoard, renderEndScreen } from "./display.js";
import {
    humanPlayer,
    enemyBoardVisible,
    computerAttacks,
    humanAttacks,
    checkGameWon,
    newGame
} from "./game.js";

//Event listeners
const boardElement = document.querySelector("#board2");
boardElement.addEventListener("click", (e) => {
    const x = e.target.getAttribute("data-x");
    const y = e.target.getAttribute("data-y");
    if (x == undefined || y == undefined) return;

    //if human tries to attack same slot again, abort
    if (humanAttacks(x, y) === false) return;
    renderBoard(enemyBoardVisible, 2);

    let gameWon = checkGameWon();
    if (gameWon != false) {
        renderEndScreen(gameWon);
        return;
    }

    setTimeout(() => {
        computerAttacks();
        renderBoard(humanPlayer.gameboard.board, 1);
    
        gameWon = checkGameWon();
        if (gameWon != false) {
            renderEndScreen(gameWon);
        }

    }, 100);
});

const newGameBtn = document.querySelector("#newGameBtn");
newGameBtn.addEventListener("click", () => {
    newGame();
    renderBoard(enemyBoardVisible, 2);
    renderBoard(humanPlayer.gameboard.board, 1);
});

const playAgainBtn = document.querySelector("#playAgainBtn");
playAgainBtn.addEventListener("click", () => {
    const dialog = document.querySelector("#endscreen");
    newGame();
    renderBoard(enemyBoardVisible, 2);
    renderBoard(humanPlayer.gameboard.board, 1);
    dialog.close();
});