import Ship from "./ship.js";

export default class Gameboard {
    constructor() {
        this.board = [
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
    }

    placeShip(x, y, length, orientation) {
        const newShip = new Ship(length);

        if (orientation === "vert") {
            //Check if slots are occupied or outside board
            for (let i = y; i < length + y; i++) {
                if (this.board[x][i] != undefined || x > 9 || i > 9)
                    return false;
            }
            // Add ship if free
            for (let i = y; i < length + y; i++) {
                this.board[x][i] = newShip;
            }
        } else {
            for (let i = x; i < length + x; i++) {
                if (this.board[i][y] != undefined || i > 9 || y > 9)
                    return false;
            }

            for (let i = x; i < length + x; i++) {
                this.board[i][y] = newShip;
            }
        }
    }
}
