class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  getNode(index) {
    let position = 0;
    let currentNode = this.head;
    while (position <= this.length) {
      if (position === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      position++;
    }
  }
  insert({ value, index }) {
    if (index >= this.length) {
      console.log(
        `the index is equal to or greater than the length. we'll use append method`
      );
      return this.append(value);
    }
    if (index < 1) {
      console.log(`the index is lower than 1. we'll use prepend method`);
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const prevNode = this.getNode(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }
  search(value) {
    let position = 0;
    let currentNode = this.head;
    while (position < this.length) {
      if (value === currentNode.value) {
        return currentNode;
      }
      currentNode = currentNode.next;
      position++;
    }
    return `Sorry, the value you're looking for does not exist`;
  }
  remove(value) {
    let position = 0;
    let currentNode = this.head;
    let prevNode;
    let nextNode;

    while (position < this.length) {

      if (value === currentNode.value) {
        prevNode = currentNode.prev;
        nextNode = currentNode.next;

        if (currentNode == this.head) {
          nextNode.prev = null;
          this.head = nextNode;
        } else if (currentNode == this.tail) {
          prevNode.next = null;
          this.tail = prevNode;
        } else {
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }
        this.length--;
        return this;
      }
      
      currentNode = currentNode.next;
      position++;
    }
    return `the index you want to remove does not exist`;
  }
}

const myDoublyLinkedList = new MyDoublyLinkedList(1);
