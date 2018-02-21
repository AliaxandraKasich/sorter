class Sorter {
  constructor() {
   this.arr = [];
   this.comparator = (a,b) => a-b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    var tempArr = [];
    for(var i=0; i<this.arr.length;i++){
      tempArr.push(this.arr[i]);
    }
    return tempArr;
  }

  sort(indices) {
    var tempArr = [];
    for(var i=0; i<indices.length;i++){
      tempArr.push(this.arr[indices[i]]);
    }
    tempArr.sort(this.comparator);
    for(var i=0; i<indices.length;i++){
      this.arr.splice(indices[i],1,tempArr[i]);
    }
    
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;