const { binarySearch } = require('../challenges/arrayBinarySearch/array-binary-search');

describe('binary search', () => {
  const sortedArr1 = [4, 8, 15, 16, 23, 42];
  const sortedArr2 = [11, 22, 33, 44, 55, 66, 77];
  const sortedArr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111, 122, 133, 144, 155, 166];


  it('finds the value', () => {
    expect(binarySearch(sortedArr1, 15)).toBe(2);
    expect(binarySearch(sortedArr3, 155)).toBe(13);
    expect(binarySearch(sortedArr3, 11)).toBe(0);
    expect(binarySearch(sortedArr2, 55)).toBe(4);
  });

  it('does not find the value', () => {
    expect(binarySearch(sortedArr2, 90)).toBe(-1);
  });
});