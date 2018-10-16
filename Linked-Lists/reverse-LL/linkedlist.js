'use strict';

const reverseLL = (list) => {
  if (!list) throw new Error ('missing list');
  if (!list.head) throw new Error ('list cannot be empty');

  let prevNode = null;
  let currNode = list.head;
  let nextNode = null;

  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}

export default reverseLL;