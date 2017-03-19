const key = 3;
const array = [12, 33, 4, 51, 16, 29, 111, 1, 21, 17];

console.log('- insertion sorting');
console.log(`INPUT: array: ${array}`);

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      continue;
    }

    let pos = i;
    const val = arr[i];
    while (arr[pos - 1] > val && pos >= 0) {
      arr[pos] = arr[pos - 1];
      pos--;
    }
    arr[pos] = val;
  }
  return arr;
}

console.log(`OUTPUT: ${insertionSort(array)}`);