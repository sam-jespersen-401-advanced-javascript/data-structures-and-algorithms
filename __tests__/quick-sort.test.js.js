const { quickSort } = require('../challenges/quickSort/quick-sort');


describe('quick sort', () => {
  const arr = [2, 1, 4, 2, 1, 9, 8, 10, 6];

  it('sorts', () => {
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([1, 1, 2, 2, 4, 6, 8, 9, 10]);
  });

});
