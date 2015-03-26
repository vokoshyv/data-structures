var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeVar = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue : function(value){
    // var temp;
    this.sizeVar++;
    for (var key in this.storage){
      // temp = this.storage[key+1]
      this.storage[this.sizeVar-(Number(key)+1)] = this.storage[this.sizeVar-(Number(key)+2)];
    }
    this.storage[0] = value;
  },

  dequeue : function(){
    if (this.sizeVar > 0){
      var result = this.storage[this.sizeVar-1];
      delete this.storage[this.sizeVar-1];
      this.sizeVar--;
      return result;
    }
  },

  size : function(){
    return this.sizeVar;
  }
};



