const key = 3;
// const array = [12, 33, 4, 51, 16, 29, 111, 1, 21, 17];
const array = [12, 9, 3, 7, 14, 11, 6, 2, 10, 5];

/*
  merge sortin has big const factor because of many manipulations
  every element copied twice during meging
  !!! requires to put all array into memory
  !!! many copying
*/

console.log('- merge sorting');
console.log(`INPUT: array: ${array}`);

const merge = (arr, from, mid, to) => {
  const left = arr.slice(from, mid + 1);
  const right = arr.slice(mid + 1, to + 1);
  // otherwise we have to check if in the one of the arrays
  // no more elements left. Infinity allow us to not worry about this
  // because it will be last element and always not taking into account
  // and we will exit from cycle by 'k' -> number of elements in total
  left.push(Infinity);
  right.push(Infinity);
  let i = 0;
  let j = 0;
  for (let k = from; k <= to; k++) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
  }
  return arr;
};

const mergeSort = (arr, from, to) => {
  if (from >= to) {
    return arr;
  }

  const mid = parseInt((from + to) / 2);
  mergeSort(arr, from, mid);
  mergeSort(arr, mid + 1, to);
  return merge(arr, from, mid, to);
};

const sort = (arr, from, to) => mergeSort(arr, 0, arr.length - 1);

console.log(`OUTPUT: ${sort(array)}`);