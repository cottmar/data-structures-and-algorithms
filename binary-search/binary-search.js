'use strict';

const search = module.exports = {};

function binarySearch(sortedArr, searchKey) {
  for (let i = 0; i < sortedArr.length; i++) {
    if (searchKey === sortedArr[i]) {
      return i;
    }
  }
  return -1;
}

binarySearch([1, 5, 7, 8], 8);
binarySearch([2, 4, 6, 8], 10);
