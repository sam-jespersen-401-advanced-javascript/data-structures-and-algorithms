function insertShiftArray(arr, val) {
  for(let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr;
}

module.exports = {
  insertShiftArray
};