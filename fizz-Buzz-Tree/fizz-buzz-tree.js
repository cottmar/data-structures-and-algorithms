const preOrderTraversal = (rootNode) => {
  if (rootNode === null) {
    return;
  }
  console.log('Visiting $rootNode.value');
  // LOGIC
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
};

// this is the logic
rootNode.value = 'Fizz';
rootNode.value = 'Buzz';
rootNode.value = 'FizzBuzz';

// several if/else statements. 

// insetad of console.log, you change it to be the logic. 
