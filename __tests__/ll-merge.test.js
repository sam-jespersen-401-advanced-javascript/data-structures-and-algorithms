const { LinkedList } = require('../challenges/linkedList/linked-list');
const { mergeList } = require('../challenges/llMerge/ll-merge');

describe('merges two lists', () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();

  ll1.append('a');
  ll2.append('b');
  ll1.append('c');
  ll2.append('d');
  ll1.append('e');
  ll2.append('f');
  ll1.append('g');
  ll2.append('h');
  ll1.append('i');
  ll2.append('j');
  ll1.append('k');
  ll2.append('l');
  ll2.append('m');

  it('returns zipped list', () => {
    const newList = mergeList(ll1, ll2);
    expect(newList.split(' ')[0]).toBe('a');
    expect(newList).toContain('a b c d e f g h i j k l m');
  });

});