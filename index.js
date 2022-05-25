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
}

let mySinglylinkedList = new MySinglyLinkedList(1);
