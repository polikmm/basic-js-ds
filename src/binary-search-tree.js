const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    const node = new Node(data);
    if (this.base === null) {
      this.base = node;
    } else {
      return insertNode(this.base, node);
    }
    function insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          return insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          return insertNode(node.right, newNode);
        }
      }
    }
  }

  has(data) {
    return search(this.base, data);
    function search(root, node) {
      if (root === null) return false;
      if (root.data === node) return true;

      if (node < root.data) {
        return search(root.left, node);
      } else {
        return search(root.right, node);
      }
    }
  }

  find(data) {
    return search(this.base, data);
    function search(root, node) {
      if (root === null) return null;
      if (root.data === node) return root;

      if (node < root.data) {
        return search(root.left, node);
      } else {
        return search(root.right, node);
      }
    }
  }

  remove(data) {
    this.base = removeNode(this.base, data);
    function removeNode(root, val) {
      if (root === null) return null;
      if (val < root.data) {
        root.left = removeNode(root.left, val);
      } else if (val > root.data) {
        root.right = removeNode(root.right, val);
      } else {
        if (root.left === null && root.right === null) {
          root = null;
        } else if (root.right === null) {
          root = root.left;
        } else if (root.left === null) {
          root = root.right;
        } else {
          const min = getMin(root.right);
          root.data = min.data;
          root.right = removeNode(root.right, min.data);
        }
      }
      return root;
    }
    function getMin(node) {
      if (node.left === null) {
        return node;
      } else {
        return getMin(node.left);
      }
    }
  }

  min() {
    return getMin(this.base);
    function getMin(root) {
      if (root.left === null) return root.data;
      return getMin(root.left);
    }
  }

  max() {
    return getMax(this.base);
    function getMax(root) {
      if (root.right === null) return root.data;
      return getMax(root.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};