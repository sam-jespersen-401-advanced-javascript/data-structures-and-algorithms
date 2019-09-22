class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(val) {
    let newNode = new Node(val, null);
    if(!this.head) {
      this.head = newNode;
    } else {
      let lastNode = this.head;
      while(lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;

    }
  }

  includes(val) {
    let currentNode = this.head;
    let done = false;
    while(!done) {
      if(currentNode.value === val) {
        return true;
      }
      if(!currentNode.next) {
        done = true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  toString() {
    let res = '';
    let currentNode = this.head;
    while(currentNode.next) {
      res += `${currentNode.value} `;
      currentNode = currentNode.next;
    }
    res += `${currentNode.value}`;
    return res;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = {
  LinkedList,
  Node
};