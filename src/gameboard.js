import Ship from "./ship.js";

export default class Gameboard {
    #ships;

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
            new Array(10),];
        this.#ships = [];
    }

    placeShip(x, y, length, orientation) {
        if (orientation === "vert") {
            //Check if slots are occupied or outside board
            for (let i = y; i < length + y; i++) {
                if (this.board[x][i] != undefined || x > 9 || i > 9)
                    return false;
            }
            // Add ship if free
            const newShip = new Ship(length);
            this.#ships.push(newShip);
            for (let i = y; i < length + y; i++) {
                this.board[x][i] = newShip;
            }
        } else {
            for (let i = x; i < length + x; i++) {
                if (this.board[i][y] != undefined || i > 9 || y > 9)
                    return false;
            }

            const newShip = new Ship(length);
            this.#ships.push(newShip);
            for (let i = x; i < length + x; i++) {
                this.board[i][y] = newShip;
            }
        }
    }
    
    receiveAttack(x, y) {
        //Check if slot is empty
        if (this.board[x][y] === undefined) {
            this.board[x][y] = "miss";
        }

        //Check if slot has ship object
        else if (this.board[x][y] instanceof Ship) {
            this.board[x][y].hit();
            this.board[x][y] = "hit";
        }

        //if spot has already been tried
        else return false;
    }
}
