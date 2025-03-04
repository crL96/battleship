import Gameboard from "./gameboard.js";

let gameboard = new Gameboard();

beforeEach(() => {
    gameboard = new Gameboard();
});

//placeShip
test("placed ship (vertical) should mark coordinates on board as object (ship)", () => {
    gameboard.placeShip(4, 1, 3, "vert");

    expect(gameboard.board[4][0]).toEqual(undefined);
    expect(gameboard.board[4][1]).toEqual({});
    expect(gameboard.board[4][2]).toEqual({});
    expect(gameboard.board[4][3]).toEqual({});
    expect(gameboard.board[4][4]).toEqual(undefined);
});

test("placed ship (horizontal) should mark coordinates on board as object (ship)", () => {
    gameboard.placeShip(2, 2, 3, "hori");

    expect(gameboard.board[1][2]).toEqual(undefined);
    expect(gameboard.board[2][2]).toEqual({});
    expect(gameboard.board[3][2]).toEqual({});
    expect(gameboard.board[4][2]).toEqual({});
    expect(gameboard.board[5][2]).toEqual(undefined);
});

test("if space is already occupied, return false", () => {
    gameboard.placeShip(0, 0, 3, "hori");

    expect(gameboard.placeShip(1, 0, 3, "hori")).toBe(false);
});

test("if coordinates are outside board, return false", () => {
    expect(gameboard.placeShip(9, 9, 3, "vert")).toBe(false);
});


//receiveAttack
test("receiveAttack, miss, slot update to miss", () => {
    gameboard.placeShip(0, 0, 3, "hori");
    gameboard.receiveAttack(7, 7);

    expect(gameboard.board[7][7]).toBe("miss");
});

test("receiveAttack, hit, run hit() and change slot to hit", () => {
    gameboard.placeShip(0, 0, 3, "hori");

    const testShip = gameboard.board[0][0];

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);

    expect(gameboard.board[0][0]).toBe("hit");
    expect(gameboard.board[1][0]).toBe("hit");
    expect(gameboard.board[2][0]).toBe("hit");
    expect(testShip.isSunk()).toBe(true);

});

test("receiveAttack, return false if already tried", () => {
    gameboard.placeShip(0, 0, 3, "hori");
    gameboard.receiveAttack(7, 7);

    expect(gameboard.receiveAttack(7, 7)).toBe(false);
});

//allSunk
test("allSunk, no ships are sunk", () => {
    gameboard.placeShip(0, 0, 2, "hori");
    gameboard.placeShip(4, 0, 2, "hori");

    expect(gameboard.allSunk()).toBe(false);
});

test("allSunk, one ship is sunk", () => {
    gameboard.placeShip(0, 0, 2, "hori");
    gameboard.placeShip(4, 0, 2, "hori");

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);

    expect(gameboard.allSunk()).toBe(false);
});

test("allSunk, all ships are sunk", () => {
    gameboard.placeShip(0, 0, 2, "hori");
    gameboard.placeShip(4, 0, 2, "hori");

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(4, 0);
    gameboard.receiveAttack(5, 0);
    
    expect(gameboard.allSunk()).toBe(true);
});
