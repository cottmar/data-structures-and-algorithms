function insertShiftArray(array, value) {
  const findMiddle = Math.ceil(array.length / 2);
  const outputArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (i < findMiddle) {
      outputArray[i] = array[i];
    }
    if (i === findMiddle) {
      outputArray.push(value);
    }
    if (i > findMiddle) {
      outputArray[i] = array[i - 1];
    }
  }
  return outputArray;
}

insertShiftArray([1, 2, 7, 8], 5);
insertShiftArray([1, 2, 3, 7, 8], 6);
