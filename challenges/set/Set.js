class Set {
  constructor(items) {
    this.items = items;
  }

  add(item) {
    if(this.items.indexOf(item) === -1) this.items.push(item);
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if(index !== -1) this.items.splice(index, 1);
  }

  has(item) {
    return this.items.indexOf(item) === -1 ? false : true;
  }

  intersection(set) {

    return Set.intersection(this, set);
  }

  union(set) {

    return Set.union(this, set);
  }

  difference(set) {

    return Set.difference(this, set);
  }


  static intersection(set1, set2) {

    return set1.items.reduce((acc, val) => {
      if(set2.has(val)) acc.push(val);
      return acc;
    }, []);
  }

  static union(set1, set2) {

    let arr = set1.items.concat(set2.items);

    return arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });
  }

  static difference(set1, set2) {

    let union = set1.union(set2);
    let inter = set1.intersection(set2);

    return union.reduce((acc, val) => {
      if(inter.indexOf(val) === -1) acc.push(val);
      return acc;
    }, []);
  }
}

module.exports = {
  Set
};