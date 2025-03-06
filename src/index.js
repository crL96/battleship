import { humanPlayer, enemyBoardVisible } from "./game.js";
import { renderBoard } from "./display.js";
import { link } from "./userInput.js";


renderBoard(humanPlayer.gameboard.board, 1);
renderBoard(enemyBoardVisible, 2);
