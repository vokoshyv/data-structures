var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstOut = 0;
  this.firstIn = 0;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.firstIn] = value;
  this.firstIn++;

};

Queue.prototype.dequeue = function(){
  if((this.firstIn - this.firstOut) > 0){
    var result = this.storage[this.firstOut];
    this.firstOut++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.firstIn - this.firstOut;

};


