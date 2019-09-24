const { LinkedList } = require('../challenges/linkedList/linked-list');

describe('linked lists', () => {

  it('new linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeFalsy();
  });

  it('append node into list', () => {
    const linkedList = new LinkedList();
    linkedList.append('val1');
    expect(linkedList.head.value).toBe('val1');
    expect(linkedList.head.next).toBeFalsy;

    linkedList.append('val2');
    expect(linkedList.head.value).toBe('val1');
    expect(linkedList.head.next.value).toBe('val2');

    linkedList.append('val3');
    linkedList.append('val4');
    expect(linkedList.head.next.next.next.value).toBe('val4');


  });

  it('searches for a string in all node values', () => {
    const linkedList = new LinkedList();
    linkedList.append('val1');
    linkedList.append('val2');
    linkedList.append('val3');
    linkedList.append('val4');
    expect(linkedList.includes('val1')).toBe(true);
    expect(linkedList.includes('val4')).toBe(true);
    expect(linkedList.includes('val5')).toBe(false);
  });

  it('return all values in all nodes', () => {
    const linkedList = new LinkedList();
    linkedList.append('val1');
    linkedList.append('val2');
    linkedList.append('val3');
    linkedList.append('val4');
    expect(linkedList.toString()).toBe('val1 val2 val3 val4');
  });

  it('insert node into list', () => {
    const linkedList = new LinkedList();
    linkedList.append('val1');
    linkedList.append('val2');
    linkedList.append('val3');
    linkedList.insert('val4');
    expect(linkedList.head.value).toBe('val4');
  });

  it('insert new val before given value', () => {
    const linkedList = new LinkedList();
    linkedList.append('val1');
    linkedList.append('val2');
    linkedList.append('val3');
    linkedList.append('val4');
    linkedList.insertBefore('val4', 'val3.5');
    expect(linkedList.head.next.next.next.value).toBe('val3.5');

    linkedList.insertBefore('val1', 'val0');
    expect(linkedList.head.value).toBe('val0');

  });

  it('insert new val after given value', () => {
    const linkedList = new LinkedList();
    linkedList.append('val1');
    linkedList.append('val2');
    linkedList.append('val3');
    linkedList.append('val4');
    linkedList.insertAfter('val4', 'val5');
    expect(linkedList.head.next.next.next.next.value).toBe('val5');

    linkedList.insertAfter('val1', 'val1.5');
    expect(linkedList.head.next.value).toBe('val1.5');
  });

  const linkedList = new LinkedList();
  linkedList.append('val1');

  expect(linkedList.kthFromEnd(0)).toBe('val1');

  linkedList.append('val2');
  linkedList.append('val3');
  linkedList.append('val4');
  linkedList.append('val5');
  linkedList.append('val6');
  linkedList.append('val7');
  linkedList.append('val8');

  it('kth from the end', () => {
    expect(linkedList.kthFromEnd(1)).toBe('val7');
    expect(linkedList.kthFromEnd(3)).toBe('val5');
    expect(linkedList.kthFromEnd(8)).toBe('val1');
    expect(linkedList.kthFromEnd(0)).toBe('val8');


    expect(() => {
      linkedList.kthFromEnd(9);
    }).toThrow('list too short');



  });

});

