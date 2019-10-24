const { Set } = require('../challenges/set/Set');

describe('Set', () => {

  const set = new Set([1, 2]);
  const set2 = new Set([3, 4, 5]);

  it('add() adds to set items when item does not exist', () => {

    set.add(3);
    set.add(1);

    expect(set.items).toEqual([1, 2, 3]);

  });

  it('remove() removes from set items when item does exist', () => {

    set.remove(1);
    set.remove(4);

    expect(set.items).toEqual([2, 3]);

  });

  it('has() locates and element in the item list', () => {

    expect(set.has(1)).toBe(false);
    expect(set.has(2)).toBe(true);

  });

  it('intersection() returns the shared items between two sets', () => {

    expect(set.intersection(set2)).toEqual([3]);

  });

  it('union() returns the all unique items between two sets', () => {

    expect(set.union(set2)).toEqual([2, 3, 4, 5]);

  });

  it('difference() returns the all unique items not shared between two sets', () => {

    expect(set.difference(set2)).toEqual([2, 4, 5]);

  });

  it('static methods', () => {

    expect(Set.intersection(set, set2)).toEqual([3]);
    expect(Set.union(set, set2)).toEqual([2, 3, 4, 5]);
    expect(Set.difference(set, set2)).toEqual([2, 4, 5]);
    
  });


});