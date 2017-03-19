const key = 3;
const array = [1, 3, 4, 5, 6, 9, 11, 15, 17, 21];

console.log('- binary search in sorted array');
console.log(`INPUT: array: ${array}`);

const binarySearch = (arr, key) => {
  let from = 0;
  let to = arr.length - 1;
  while(from <= to) {
    const mid = parseInt((to + from) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    if (arr[mid] > key) {
      to = mid - 1;
    } else {
      from = mid + 1;
    }
  }

  return 'NOT FOUND';
}

console.log(`CASE 1: ${binarySearch(array, 1)}`);
console.log(`CASE 3: ${binarySearch(array, 3)}`);
console.log(`CASE 21: ${binarySearch(array, 21)}`);
console.log(`CASE 100: ${binarySearch(array, 100)}`);
console.log(`CASE -2: ${binarySearch(array, -2)}`);