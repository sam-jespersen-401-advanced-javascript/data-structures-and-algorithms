function reverseArray(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    result[result.length] = arr[i];
  }
  return result;
}

module.exports = {
  reverseArray
};