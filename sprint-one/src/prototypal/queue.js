var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.sizeVar = 0;

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.sizeVar] = value;
    this.sizeVar++;
  },

  dequeue: function(){
    if (this.sizeVar > 0){
      var result = this.storage[0];
      delete this.storage[0];
      this.sizeVar--;
      for (var key in this.storage){
        this.storage[key-1] = this.storage[key];
      }
      delete this.storage[this.sizeVar];
      return result;
    }
  },

  size: function(){
    return this.sizeVar;
  }

};


