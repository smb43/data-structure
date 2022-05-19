class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getItemAtPosition(index) {
    return this.data[index];
  }
  // Add Item To The End
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length; // Arrays in JS returns the Array's length when "push" is used.
  }
  // Add Item To The Beginning
  unShift(item) {
    for(let i = this.length; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }
  // Shift item's index
  shiftItem(index) {
    for (let i = index; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
  removeItemAtPosition(index) {
    const item = this.data[index];
    this.shiftItem(index);
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  // Remove Last Item
  pop() {
    const lastItem = this.data[this.length - 1];
    this.removeItemAtPosition(this.length - 1);
    return lastItem;
  }
  // Remove First Item
  shift() {
    const firstItem = this.data[0];
    this.removeItemAtPosition(0);
    return firstItem;
  }
}

const myArray = new MyArray();
