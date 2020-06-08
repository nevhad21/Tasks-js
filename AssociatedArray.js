
function AssociatedArray() {
  this.source = {};

  this.hash = function (value) {
    return value + Math.floor(Math.random() + Date.now()).toString();
  }

  this.add = function (value) {
    const hash = this.hash(value);
    this.source[hash] = value;
  }

  this.push = function (value) {
    const hash = this.hash(value);
    this.source[hash] = value;
    return {[hash]: value};
  }

  this.del = function (key) {
     delete this.source[key];
  }

  this.remove = function (key) {
    const value = this.source[key] ;
     const  el  = {[key]: value};
     delete this.source[key];
     return el;
  }

  this.find = function (value) {
    for (let i in this.source) {
      if (value === this.source[i]) {
        return {[i]: value};
      } else {
        return null;
      }
    }
}

  this.delByVal = function (value) {
    for (let i in this.source) {
      if (value === this.source[i]) {
        delete this.source[i]
      }
    }
  }

  this.log = function (value) {
    console.log(this.source);
  }
}

const hashedArr = new AssociatedArray();

hashedArr.add('foo');
hashedArr.add('baz');
const bar = hashedArr.push('bar');
console.log(bar);

const deleted = hashedArr.del("bar");
console.log(deleted);

hashedArr.log();
console.log(hashedArr);
