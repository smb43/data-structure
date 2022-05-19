class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length; // Arrays in JS returns the Array's length when "push" is used.
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
  // remove the last element at the "Array"
  pop() {
    const lastItem = this.data[this.length - 1];
    this.removeItemAtPosition(this.length - 1);
    return lastItem;
  }
}

const myArray = new MyArray();
