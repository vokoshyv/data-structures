var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //

  var someInstance =  {};

  someInstance.storage = {};
  someInstance.sizeVar = 0;

  _.extend(someInstance, stackMethods);



  return someInstance;

};



var stackMethods = {

   push: function(value){
    this.storage[this.sizeVar] = value;
    this.sizeVar++;

   },



   pop: function(){
    if(this.sizeVar > 0){
      var result = this.storage[this.sizeVar -1];
      delete this.storage[this.sizeVar -1];
      this.sizeVar--;
      return result;
    }

   },


   size: function(){
    return this.sizeVar;
   }
};


