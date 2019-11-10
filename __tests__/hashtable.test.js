const { Hashtable } = require('../challenges/hashtable/hashtable');


describe('hash table', () => {
  const hashTable = new Hashtable('abc');

  it('hashes a value', () => {

    expect(hashTable.hash('abc')).toBeGreaterThanOrEqual(0);
    expect(hashTable.hash('bca')).toBeGreaterThanOrEqual(0);
    expect(hashTable.hash('cab')).toBeGreaterThanOrEqual(0);
    expect(hashTable.hash('test string')).toBeGreaterThanOrEqual(0);
    expect(hashTable.hash('ffffomg')).toBeGreaterThanOrEqual(0);
    expect(hashTable.hash('fffomgf')).toBeGreaterThanOrEqual(0);
    expect(hashTable.hash('1')).toBeGreaterThanOrEqual(0);
  });

  it('adds values to the table', () => {

    hashTable.add('f', 'oo');
    hashTable.add('f', 'un');
    hashTable.add('b', 'ar');
    hashTable.add('ab', 'at');
    hashTable.add('ab', 'an');


    const fIndex = hashTable.hash('f');
    const bIndex = hashTable.hash('b');


    expect(hashTable.table[bIndex]).toContainEqual(['b', 'ar'], ['ab', 'an']);
    expect(hashTable.table[fIndex]).toContainEqual(['f', 'un']);


  });

  it('gets a value', () => {

    hashTable.add('hello', 'sir');
    hashTable.add('help', 'me');

    expect(hashTable.get('hello')).toBe('sir');
    expect(hashTable.get('help')).toBe('me');
    expect(hashTable.get('ohello')).toBeNull();

  });

  it('finds a key', () => {

    hashTable.add('yes', 'maam');
    hashTable.add('help', 'me');

    expect(hashTable.contains('yes')).toBeTruthy();
    expect(hashTable.contains('help')).toBeTruthy();
    expect(hashTable.get('ohello')).toBeFalsy();
    expect(hashTable.contains('no')).toBeFalsy();
  });


});