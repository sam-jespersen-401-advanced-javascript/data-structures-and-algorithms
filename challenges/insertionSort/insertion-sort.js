const insertionSort = (arr) => {
  for(let i = 1; i < arr.length; i++) {

    let j = i - 1;
    let value = arr[i];

    while(j >= 0 && value < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;

  }
  console.log(arr);
  return arr;
};

module.exports = {
  insertionSort
};