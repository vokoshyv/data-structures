var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //Time complexity: O(1)
  this.storage[item] = item;

};

setPrototype.contains = function(item){
  //Time complexity: O(1)
  return (this.storage[item])? true: false;

};

setPrototype.remove = function(item){
  //Time complexity: O(1)
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 *See comments in methods
 */
