const diff = require("./subtract")

test('subtracts 3 - 2 to equal 1', () => {
    expect(diff(3, 2)).toBe(1);
  });