const { mergeSort } = require('../challenges/mergeSort/merge-sort');


describe('merge sort', () => {
  const arr = [2, 1, 4, 2, 1, 9, 8, 10, 6];

  it('sorts', () => {
    expect(mergeSort(arr)).toEqual([1, 1, 2, 2, 4, 6, 8, 9, 10]);
  });

});
