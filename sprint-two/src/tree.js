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
//Time complexity: O(1)

  var newChild = Node(value);
  this.children.push(newChild);


};

treeMethods.contains = function(target){
//Time complexity: O(n)

  var check = false;

  var search = function(node){
    if(node.value === target){
      check = true;
    }

    for(var i = 0; i< node.children.length; i++){
      search(node.children[i]);
    }


  };

  search(this);
  return check;

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
 *
 * See method comments
 */
