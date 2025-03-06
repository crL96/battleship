import "./style.css"

function renderBoard(board, UIboardNr) {
    const boardElement = document.querySelector(`#board${UIboardNr}`);
    boardElement.replaceChildren("");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const squareElement = document.createElement("div");
            squareElement.dataset.x = [j];
            squareElement.dataset.y = [i];
            if (board[j][i] === undefined) {
                squareElement.classList.add("unexplored");
            } else if (board[j][i] === "hit") {
                squareElement.classList.add("hit");
            } else if (board[j][i] === "miss") {
                squareElement.classList.add("miss");
            } else {
                squareElement.classList.add("ship");
            }
            boardElement.appendChild(squareElement);
        }
    }
}

function renderEndScreen(winner) {
    const dialog = document.querySelector("#endscreen");
    const winnerTextbox = document.querySelector("#winnerName");
    winnerTextbox.textContent = winner;
    dialog.showModal();
}

export {renderBoard, renderEndScreen};