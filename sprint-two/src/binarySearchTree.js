var BinarySearchTree = function(value){
  var binaryTree = Object.create(BinarySearchTree.prototype);

  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};



BinarySearchTree.prototype = {};


BinarySearchTree.prototype.insert = function(value){
//time complexity: O(log(n));

  var newNode = BinarySearchTree(value);

  var recurseSearch = function(node){


    if (value > node.value && node.right === null){
      node.right = newNode;
    }
    else if (value < node.value && node.left === null){
      node.left = newNode;
    }

    else if (value > node.value){
      recurseSearch(node.right);
    }
    else if (value < node.value){
      recurseSearch(node.left);
    }

  };

    recurseSearch(this);



};

BinarySearchTree.prototype.contains = function(value){
//time complexity: O(log(n));
  var foundIt = false;

  var recurseSearch = function(node){

    if(node === null){
      //foundIt = false;
      return;
    }

    else if (node.value === value){
      foundIt = true;
    }
    else if (value > node.value){
      recurseSearch(node.right);
    }
    else if (value < node.value){
      recurseSearch(node.left);
    }

  };


  recurseSearch(this);

  return foundIt;
};



BinarySearchTree.prototype.depthFirstLog = function(func){
//time complexity: O(log(n));

  var recurseFuncApply = function(node){

    func(node.value);
    if(node.left){
      recurseFuncApply(node.left);
    }

    if(node.right){
      recurseFuncApply(node.right);
    }

  };


  recurseFuncApply(this);


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
