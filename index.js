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
    const nextNode = new Node(value);
    this.tail.next = nextNode;
    this.tail = nextNode;
    this.length++;
  }
}

let mySinglylinkedList = new MySinglyLinkedList(1);
