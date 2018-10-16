'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
};

kthFromEnd(k) {
  let currentNode = this.head;
  
  if (!currentNode) {
    return new Error('Error');
  }

  let count = 0;
  let length = 0;

  while (currentNode.next) {
    length += 1; 
    currentNode = currentNode.next;
  }

  const position = length - k;
  currentNode = this.head; // resets to zero
  while (currentNode.next) {
    count += 1;
    currentNode = currentNode.next;
    if (count === position) {
      return currentNode;
    }
  }
  return null;
};
