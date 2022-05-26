class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const lastNode = new Node(value);
    this.tail.next = lastNode;
    this.tail = lastNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const firstNode = new Node(value);
    firstNode.next = this.head;
    this.head = firstNode;
    this.length++;
    return this;
  }
  insert({ value, index }) {
    if (index >= this.length) {
      console.log(
        "the index is equal to or greater than the length of the linked list, so we'll use the append method"
      );
      return this.append(value);
    }
    if (index < 1) {
      console.log("the index is lower than 1, so we'll use the prepend method");
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const prevNode = this.getNode(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }
  getNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  search(value) {
    let index = 0;
    let currentNode = this.head;
    while (index < this.length) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
      index++;
    }
    return `the value: ${value} does not exist in this Linked List`;
  }
  remove(value) {
    let index = 0;
    let currentNode = this.head;
    while (index < this.length) {
      if (currentNode.value === value) {
        const prevNode = this.getNode(index - 1);
        const nodeToRemove = currentNode;
        prevNode.next = currentNode.next;
        this.length--;
        return nodeToRemove;
      }
      currentNode = currentNode.next;
      index++;
    }
    return `the value: ${value} does not exist in this Linked List`;
  }
}

let mySinglylinkedList = new MySinglyLinkedList(1);
