# Linked List
Implement a singly linked list

## Challenge
Write classes for LinkedList and Node to allow for the creation, traversal, and output of nodes in a linked list.

## Approach & Efficiency
Using while loops to traverse the list.

## API

`new LinkedList()` creates an empty linked list

`LinkedList` methods:

### insert(string)
* takes a `string` as an argument
* creates a new `Node` at the end of the list with a `value` of the `string` passed in

### includes(string)
* takes a `string` as an argument
* returns a `boolean` indicating whether the `string` was found in the values of the list of `Nodes`

### toString()
* returns the values of all nodes in the list concatenated into a string, e.g. `'value1 value2 value3'`
