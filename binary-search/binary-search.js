function binarySearch(sortedArr, searchKey) {
  for (let i = 0; i < sortedArr.length; i++) {
    if (searchKey === sortedArr[i]) {
      return i;
    }
  }
  return -1;
}

binarySearch([1, 5, 7, 8], 8);
