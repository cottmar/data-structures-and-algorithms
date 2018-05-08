'use strict';

const fizzBizzTree = (binaryTree) => {
  const preOrderTraversal = (rootNode) => {
    if (rootNode === null) {
      return undefined;
    }

    if (rootNode.value % 3 === 0) {
      rootNode.value = 'Fizz';
    }
    if (rootNode.value % 5 === 0) {
      rootNode.value = 'Buzz';
    }
    if (rootNode.value === 'Fizz' && rootNode.value === 'Buzz') {
      rootNode.value = 'FizzBuzz';
    }
    console.log(`Visiting a node with value ${rootNode.value}`);
    preOrderTraversal(rootNode.left);
    preOrderTraversal(rootNode.right);
    return binaryTree;
  };
  preOrderTraversal(binaryTree.root);
};

export default fizzBizzTree;
