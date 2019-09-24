# Linked List
Implement a singly linked list

## Challenge
Write classes for LinkedList and Node to allow for the creation, traversal, and output of nodes in a linked list.

## Approach & Efficiency
Using while loops to traverse the list.

## API

`new LinkedList()` creates an empty linked list

`LinkedList` methods:

### append(string)
* takes a `string` as an argument
* creates a new `Node` at the beginning of the list with a `value` of the `string` passed in

### includes(string)
* takes a `string` as an argument
* returns a `boolean` indicating whether the `string` was found in the values of the list of `Nodes`

### toString()
* returns the values of all nodes in the list concatenated into a string, e.g. `'value1 value2 value3'`

### insert(string)
* takes a `string` as an argument
* creates a new `Node` at the end of the list with a `value` of the `string` passed in

### insertBefore(string, string)
* takes two `strings` as arguments
* finds the `Node` with the `value` equaling the first `string` and creates a new `Node` before it in the list with the `value` equaling to the second `string`

### insertAfter(string, string)
* takes two `strings` as arguments
* finds the `Node` with the `value` equaling the first `string` and creates a new `Node` after it in the list with the `value` equaling to the second `string`