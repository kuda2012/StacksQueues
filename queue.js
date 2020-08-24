/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.data = [];
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    val = new Node(val);
    this.data.push(val);
    this.size = this.data.length;
    if (this.size == 1) {
      this.first = val;
      this.last = val;
    } else {
      this.last = val;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size == 0) {
      throw Error();
    } else if (this.size > 1) {
      this.first = this.data[1];
    } else if (this.size == 1) {
      this.last = this.data[1];
      this.first = this.data[1];
    }
    let formerFirstElement = this.data.shift();
    this.size = this.data.length;
    if (this.size == 0) {
      this.first == null;
      this.last = null;
    }
    return formerFirstElement.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.data[0].val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size == 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
