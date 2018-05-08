'use strict';


const preOrderTraversal = (rootNode) => {
  if (rootNode === null) {
    return undefined;
  } 
  // Here, I am in root. 
  console.log(`Visiting a node with value ${rootNode.value}`);
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return undefined;
};


// Time: O(n) -- n is number of nodes
// Space: O(H) -- H is height of tree

export default { preOrderTraversal };
