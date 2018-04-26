'use strict';

const findBiggestProduct = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('input sohuld be an array');
  }

  let findBiggestProductSoFar = -1; 
  for (let rows = 0; rows < array.length; rows++) {
    for (let columns = 0; columns < array[rows].length; columns++) {
      const currentValue = array[rows][columns];
      if (rows - 1 >= 0) {
        const upValue = array[rows - 1][columns];
        findBiggestProductSoFar = Math.max(currentValue * upValue, findBiggestProductSoFar);
      }
      if (rows + 1 < array.length) {
        const downValue = array[rows + 1][columns];
        findBiggestProductSoFar = Math.max(currentValue * downValue, findBiggestProductSoFar);
      }
      if (columns - 1 >= 0) {
        const leftValue = array[rows][columns - 1];
        findBiggestProductSoFar = Math.max(currentValue * leftValue, findBiggestProductSoFar);
      }
      if (columns + 1 < array[rows].length) {
        const rightValue = array[rows][columns + 1];
        findBiggestProductSoFar = Math.max(currentValue * rightValue, findBiggestProductSoFar);
      }
    } // closing columns
  } // closing rows 
  if (findBiggestProductSoFar === -1) {
    throw new Error('The input array is not big enough');
  }
  return findBiggestProductSoFar;
};
console.log(findBiggestProduct([[1, 2], [2, 3]]));
