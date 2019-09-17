const { reverseArray } = require('../challenges/arrayReverse/array-reverse');

describe('reverseArray', () => {

  const test1 = [1, 2, 3, 4, 5];
  const test1Reverse = test1.reverse();

  it('reverses an array', () => {
    expect(reverseArray(test1)).toEqual(test1Reverse);
  });
});