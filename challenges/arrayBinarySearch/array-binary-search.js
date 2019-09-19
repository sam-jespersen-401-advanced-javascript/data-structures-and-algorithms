function binarySearch(arr, key) {

  let start = 0;
  let end = arr.length;

  while((end - start) > 0) {
    const middlePoint = Math.floor((start + end + 1) / 2);
    if(arr[middlePoint] === key) return middlePoint;
    if(arr[middlePoint - 1] === key) return middlePoint - 1;

    if(key > arr[middlePoint]) {
      start = middlePoint + 1;
    } else {
      end = middlePoint - 2;
    }
  }
  return -1;
}

module.exports = {
  binarySearch
};