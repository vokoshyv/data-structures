var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  // this.children[0] = {};
//   this.children[0].value = value;
//   this.children[0].children = [];
//
 var newChild = Node(value);
//get newChild into this.children.
//get lower level children into intermediate children
  this.children.push(newChild);


};

treeMethods.contains = function(target){

};


var Node = function(value){
  var node = {};

  node.value = value;
  node.children = [];

  _.extend(node, treeMethods);

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
