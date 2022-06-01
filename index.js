class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value, currentNode = this.root) {
    const newNode = new Node(value);
    if (!currentNode) {
      this.root = newNode;
      return this;
    } else {
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  search(value, currentNode = this.root) {
    if (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        return this.search(value, currentNode.left);
      }
      if (value > currentNode.value) {
        return this.search(value, currentNode.right);
      }
    }
    return `the value: ${value} doesn't exist`;
  }
}

const myTree = new BinarySearchTree();
