class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {

    const newNode = new Node(value);
    if(this.top) newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    const newTop = this.top.next;
    const oldTop = this.top;
    this.top = newTop;
    return oldTop.value;
  }


  peek() {
    return this.top.value;
  }

}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(!this.front) {
      this.front = newNode;
    } else {

      let currentNode = this.front;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  dequeue() {
    const front = this.front;
    this.front = front.next;
    return front.value;
  }

  peek() {
    return this.front.value;
  }

}

module.exports = {
  Stack,
  Queue

};