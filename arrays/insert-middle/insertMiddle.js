
const array = [1, 2, 3, 4, 5, 6];

const insertMiddle = (arr, newValue) => {
  const len = arr.length;
  const mid = Math.floor(len / 2);
  let temp = arr[mid];
  arr[mid] = newValue;

  for (let i = mid + 1; i <= len; i++) {
    let otherTemp = arr[i];
    arr[i] = temp;
    temp = otherTemp;
  }
  return arr;
}
console.log(insertMiddle(array, 'THE NEW MIDDLE'));
