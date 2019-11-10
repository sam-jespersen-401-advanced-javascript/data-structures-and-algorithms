class Hashtable {

  constructor() {
    this.table = Array();
  }

  add(key, value) {
    const index = this.hash(key);

    if(!this.table[index]) {
      this.table[index] = [];
    }

    const bucket = this.table[index];
    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }


  get(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    if(this.contains(key) === false) return null;

    for(let i of bucket) {
      if(i[0] === key) return i[1];
    }
  }

  contains(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    if(!bucket) return false;

    for(let i of bucket) {
      if(i[0] === key) return true;
    }

    return false;

  }

  hash(val) {

    let hash = '';
    val.split('').forEach(char => {
      hash += char.charCodeAt(0).toString();
    });

    return hash % 100;

  }

}

module.exports = {
  Hashtable
};