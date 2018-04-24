'use strict';

const Node = require;

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(value) {
    const node = new Node(value);
    
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  
  insertBefore(value, newValue) {
    const node = new Node(newValue);
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }
  
  insertBehind(value, newValue) {
    const node = new Node(newValue);
    
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
};
