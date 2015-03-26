var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeVar = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.sizeVar] = value;
  this.sizeVar++;


};

Stack.prototype.pop = function(){
  if(this.sizeVar > 0){
    var result = this.storage[this.sizeVar -1];
    delete this.storage[this.sizeVar - 1];
    this.sizeVar--;
    return result;
  }

};

Stack.prototype.size = function(){
  return this.sizeVar;

};


