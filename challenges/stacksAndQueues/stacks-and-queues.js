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

module.exports = {
  Stack
};