import FizzBuzzTree from '../fizzBuzzTree';
import Node from '../../binary-tree/node';
import BinaryTree from '../../binary-tree/binary-tree';

describe('fizz buzz tree', () => {
  test('Should replace multiples of three with FIZZ', () => {
    const root = new Node(1, new Node(2), new Node (3));
    const tree1 = new BinaryTree(root);
    FizzBuzzTree(tree1);
    expect(tree1.root.right.value).toEqual('Fizz');
  });
  test('Should replace multipes of 5 with BUZZ', () => {
    const root = new Node(5, new Node(2), new Node(1));
    const tree1 = new BinaryTree(root);
    FizzBuzzTree(tree1);
    expect(tree1.root.value).toEqual('Buzz');
  });
  test('Should replace multiples of 3 & 5 with fizzbuzz', () => {
    const root = new Node(1, new Node(15), new Node(3));
    const tree1 = new BinaryTree(root);
    FizzBuzzTree(tree1);
    expect(tree1.root.left.value).toEqual('FizzBuzz');
  });
});
