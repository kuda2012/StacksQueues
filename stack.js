/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.data = [];
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    val = new Node(val);
    this.data.unshift(val);
    this.size = this.data.length;
    if (this.size == 1) {
      this.first = val;
      this.last = val;
    } else {
      this.first = val;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size == 0) {
      throw Error();
    }
    let newFirstValue = this.data[1];
    let formerFirstValue = this.data.shift();
    this.size = this.data.length;
    if (this.size == 1) {
      this.first = newFirstValue;
      this.last = newFirstValue;
    } else {
      this.first = newFirstValue;
    }
    return formerFirstValue.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.data[0].val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size == 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
