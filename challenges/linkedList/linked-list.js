class LinkedList {

  constructor() {
    this.head = null;
  }

  append(val) {
    let newNode = new Node(val, null);
    if(!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;

    }
  }

  insert(val) {
    let newNode = new Node(val, this.head);
    this.head = newNode;
  }

  includes(val) {
    let currentNode = this.head;
    let done = false;
    while(!done) {
      if(currentNode.value === val) return true;
      currentNode.next ? currentNode = currentNode.next : done = true;
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

  insertBefore(val, newVal) {
    let foundNode = this.head;
    while(foundNode.next.value !== val) {
      foundNode = foundNode.next;
    }
    let newNode = new Node(newVal, foundNode.next);
    foundNode.next = newNode;
  }

  insertAfter(val, newVal) {
    let foundNode = this.head;
    while(foundNode.value !== val) {
      foundNode = foundNode.next;
    }

    let next;
    foundNode.next ? next = foundNode.next : next = null;

    let newNode = new Node(newVal, next);
    foundNode.next = newNode;
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