const product = require("./multiply");

test('multiplies 3 * 2 to equal 6', () => {
    expect(product(3, 2)).toBe(6);
  });