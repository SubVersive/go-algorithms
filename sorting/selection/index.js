const key = 3;
const array = [12, 33, 4, 51, 16, 29, 111, 1, 21, 17];

console.log('- selection sorting');
console.log(`INPUT: array: ${array}`);

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(`OUTPUT: ${selectionSort(array)}`);