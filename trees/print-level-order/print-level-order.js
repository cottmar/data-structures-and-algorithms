'use strict';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  _breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this.breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) { //eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      console.log(`visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }
}
