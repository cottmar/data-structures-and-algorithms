class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    // totals number of nodes in LL
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++; // eslint-disable-line
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }
}


module.exports = { Node, LinkedList };
