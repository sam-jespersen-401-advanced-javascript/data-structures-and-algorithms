class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class AnimalShelter {
  constructor() {
    this.front = null;
  }

  enqueue(animal) {
    const newNode = new Node(animal);
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

  dequeue(pref) {

    if(pref && pref !== 'cat' && pref !== 'dog') {
      return null;
    }
    if(this.front.value === pref || !pref) {
      const front = this.front;
      this.front = front.next;
      return front.value;
    }

    if(pref && this.front.value !== pref) {

      let currentNode = this.front;
      let nextNode = currentNode.next;

      while(nextNode.value !== pref) {
        currentNode = nextNode;
        nextNode = nextNode.next;
      }

      const returnNode = nextNode;
      currentNode.next = nextNode.next;

      return returnNode.value;

    }


  }


}

module.exports = {
  AnimalShelter
};