import { expect } from 'chai'
import 'babel-polyfill'

/*
Modify the contents of 'app/test9.js' and implement a function that counts the nodes in a binary tree
*/

import countNodes from '../app/test9.js';

class Node {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

describe('Binary tree', () => {
  it('can count a single node', () => {
    const root = new Node(null, null);
    expect(countNodes(root)).to.equal(1);
  });

  it('can count a node with one child on the left', () => {
    const root = new Node(new Node(null, null), null);
    expect(countNodes(root)).to.equal(2);
  })

  it('can count a node with one child on the right', () => {
    const root = new Node(null, new Node(null, null));
    expect(countNodes(root)).to.equal(2);
  })

  it('can count a node with a child on the left and right', () => {
    const root = new Node(new Node(null, null), new Node(null, null));
    expect(countNodes(root)).to.equal(3);
  })

  it('can count nodes on a bigger binary tree', () => {
    const root = new Node(
      new Node(new Node(null, new Node(null, null))),
      new Node(new Node(new Node(null, null), new Node(null, null)), new Node(null, null))
    );
    expect(countNodes(root)).to.equal(9);
  });
});
