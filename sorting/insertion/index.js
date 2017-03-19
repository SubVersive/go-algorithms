const key = 3;
const array = [12, 33, 4, 51, 16, 29, 111, 1, 21, 17];

console.log('- insertion sorting');
console.log(`INPUT: array: ${array}`);

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let pos = i - 1;
    const val = arr[i];
    while (arr[pos] > val && pos >= 0) {
      arr[pos + 1] = arr[pos];
      pos--;
    }
    arr[pos + 1] = val;
  }
  return arr;
}

console.log(`OUTPUT: ${insertionSort(array)}`);