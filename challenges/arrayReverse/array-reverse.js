function reverseArray(arr) {
  let result = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    result[result.length] = arr[i];
  }
  return result;
}

module.exports = {
  reverseArray
};