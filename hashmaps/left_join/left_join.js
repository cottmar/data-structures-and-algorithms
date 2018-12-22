'use strict';

const codeLeftJoin = module.exports = {};

codeLeftJoin.leftjoins = (hashmap1, hashmap2) => {
  const returnObj = {};
  const keyArr = Array.from(hashmap1.keys());

  for (let i = 0; i < keyArr.length; i++) {
    const newKey = keyArr[i];
    const leftVal = hashmap1.get(newKey);
    let rightVal = hashmap2.get(newKey);
    
    if (rightVal === undefined) {
      rightVal = null;
    }
    returnObj[newKey] = [leftVal, rightVal];
  }
  return returnObj;
};

