const { Stack } = require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor() {
    this.st1 = new Stack();
    this.st2 = new Stack();

  }

  enqueue(value) {

    this.st1.push(value);

  }

  dequeue() {

    while(this.st1.top.next) {
      const value = this.st1.pop();
      this.st2.push(value);
    }

    const returnValue = this.st1.pop();

    if(this.st2.top) {
      while(this.st2.top.next) {
        const value = this.st2.pop();
        this.st1.push(value);
      }

      this.st1.push(this.st2.pop());
    }

    return returnValue;
  }
}

module.exports = {
  PseudoQueue
};