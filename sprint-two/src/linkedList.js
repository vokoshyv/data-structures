var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToTail = function(value){
  //Time complexity: constant

    var newNode = Node(value);
    if(!list.head){
      list.head = newNode;
      list.tail = newNode;
    } else {

      list.tail.next = newNode;
      list.tail = newNode;
    }

  };


  list.removeHead = function(){
  //Time complexity: constant

    if(list.head){
      var result = list.head;
      list.head = list.head.next;
      return result.value;
    }

  };

  list.contains = function(target){
  //Time complexity: linear

    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value ===target){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
