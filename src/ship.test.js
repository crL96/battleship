const Ship = require("./index.js");

let testShip = new Ship(3);

beforeEach(() => {
    testShip = new Ship(3);
  });


test("2 hits on length 3 should not be sunk", () => {
    testShip.hit();
    testShip.hit();

    expect(testShip.isSunk()).toBe(false);
});

test("3 hits on length 3 should be sunk", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();

    expect(testShip.isSunk()).toBe(true);
});