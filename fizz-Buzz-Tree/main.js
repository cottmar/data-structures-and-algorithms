import BinaryTree from '../fizz-Buzz-Tree/binary-tree';
import Node from '../fizz-Buzz-Tree/node';
import { preOrderTraversal } from '../fizz-Buzz-Tree/traversals';

const one = new Node(1);
const two = new Node(10);
const three = new Node(5);
const four = new Node(15);
const five = new Node(13);
const six = new Node(11);
const seven = new Node(12);
const eight = new Node(18);
const nine = new Node(20);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

console.log('Pre-Order');
preOrderTraversal(tree.root);
