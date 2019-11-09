const { insertionSort } = require('../challenges/insertionSort/insertion-sort');


describe('insertion sort', () => {
  const arr = [2, 1, 4, 2, 1, 9, 8, 10, 6];

  it('sorts', () => {
    expect(insertionSort(arr)).toEqual([1, 1, 2, 2, 4, 6, 8, 9, 10]);
  });

});
