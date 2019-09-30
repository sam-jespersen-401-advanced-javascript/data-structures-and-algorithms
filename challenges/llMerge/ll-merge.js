const { LinkedList } = require('../linkedList/linked-list');

function mergeList(list1, list2) {
  const newList = new LinkedList();
  newList.append(list1.head.value);
  newList.append(list2.head.value);
  let list1Node = list1.head;
  let list2Node = list2.head;

  let num;
  list1.size > list2.size ? num = list1Node : num = list2Node;

  while(num.next) {
    if(list1Node.next) {
      newList.append(list1Node.next.value);
      list1Node = list1Node.next;
    }
    if(list2Node.next) {
      newList.append(list2Node.next.value);
      list2Node = list2Node.next;
    }
    list1.size > list2.size ? num = list1Node : num = list2Node;
  }
  
  return newList.toString();
}


module.exports = {
  mergeList
};