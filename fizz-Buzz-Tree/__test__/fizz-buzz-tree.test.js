'use strict';

import Node from '../node';
import BinaryTree from '../binary-tree';
import { inOrderTraversal } from '../traversals';

describe('Testing preOrder, inOrder, and postOrder traversals', () => {
  test('Expect the binary tree to return a string in the correct order', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const fifteen = new Node(15);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;

    three.left = four;
    three.right = five;

    two.left = six;

    six.right = seven;

    seven.left = eight;
    seven.right = fifteen;

    expect(inOrderTraversal(tree.root)).toEqual('687921435'); 
  });
  test('If the Binary Tree is empty, return undefined.', () => {
    const emptyTree = new BinaryTree(null);
    expect(inOrderTraversal(emptyTree.root)).toBe(undefined);
  });
});
