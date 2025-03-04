import Gameboard from "./gameboard.js";

let gameboard = new Gameboard();

beforeEach(() => {
    gameboard = new Gameboard();
});

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
