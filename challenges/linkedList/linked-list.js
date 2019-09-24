class LinkedList {

  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    this.size++;
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
    this.size++;
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
    this.size++;

    if(val === this.head.value) {
      let newNode = new Node(newVal, this.head);
      this.head = newNode;
    } else {
      let foundNode = this.head;
      while(foundNode.next.value !== val) {
        foundNode = foundNode.next;
      }

      let newNode = new Node(newVal, foundNode.next);
      foundNode.next = newNode;
    }
  }

  insertAfter(val, newVal) {
    this.size++;

    let foundNode = this.head;
    while(foundNode.value !== val) {
      foundNode = foundNode.next;
    }

    let newNode = new Node(newVal, foundNode.next ? foundNode.next : null);
    foundNode.next = newNode;
  }

  kthFromEnd(k) {
    const index = this.size - k;
    if(index < 0) {
      throw new Error('list too short');
    }
    if(index === 0) {
      return this.head.value;
    }

    let currentNode = this.head;
    let round = 1;
    while(round < index) {
      currentNode = currentNode.next;
      round++;
    }
    return currentNode.value;
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