## Stacks and Queues
Implement stacks(last-in-first-out) and queues(first-in-first-out).

## Challenge
Write classes for Stacks and Queues to allow for the creation, traversal, and output of nodes in each data structure.

## Approach and Efficiency
While loops when needed

## API

`new Stack()` creates an empty stack with a null top

`new Queue()` creates an empty queue with a null front

`Stack` methods:

### push(value)
* takes a `string` as an argument
* creates a new `Node` at the top of the stack with a `value` of the `string` passed in
* sets the `next` property of the `Node` below to the current top of the stack (i.e. the new `Node` just created)

### pop()
* returns the `value` of the top `Node` in the stack.
* moves the top of the stack down one level by setting the top of the stack to the `next` property of the previous top `Node`

### peek()
* returns the `value` property of the current top of the stack


`Queue` methods:

### enqueue(value)
* takes a `string` as an argument
* creates a new `Node` at the back of the queue with a `value` of the `string` passed in
* sets the `next` property of the `Node` occupying the previous back spot to the new node.

### dequeue()
* returns the `value` of the front `Node` in the queue.
* moves the front of the queue back one place by setting the front of the queue to the `next` property of the previous front `Node`

### peek()
* returns the `value` property of the current front of the queue