'use strict';

const findBiggestProductSoFar = require('../largest-product/largest-product'); 

describe('Sum of the Largest Product of the 2d array', () => {
  test('Should return 6', () => {
    expect(findBiggestProductSoFar([1, 2], [2, 3])).toEqual(6);
  });
});
