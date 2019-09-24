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
});

