'use strict';

function countUniqueValues(arr) {
  let current = 1,
    count = 1;

  if (arr.length === 0) return 0;

  while (current < arr.length) {
    if (arr[current - 1] !== arr[current]) {
      count += 1;
    }
    current++;
  }
  console.log(count);
  return count;
}

countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2]);
