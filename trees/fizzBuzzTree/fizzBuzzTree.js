'use strict';

const FizzBuzzTree = (tree) => {
  const divBy3 = (number) => {
    return Number.isInteger(number / 3);
  };
  const divBy5 = (number) => {
    return Number.isInteger(number / 5);
  };

  const preOrderTrav = (node) => {
    if (!node) return undefined;
    if (divBy3(node.value) && divBy5(node.value)) node.value = 'FizzBuzz';
    else if (divBy3(node.value)) node.value = 'Fizz';
    else if (divBy5(node.value)) node.value = 'Buzz';
    preOrderTrav(node.left);
    preOrderTrav(node.right);
    return undefined;
  };
  preOrderTrav(tree.root);
  return tree;
};

export default FizzBuzzTree;
