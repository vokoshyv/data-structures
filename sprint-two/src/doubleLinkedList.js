var DoubleLinkedList = function(){
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
      newNode.previous = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;

    }

  };


  list.removeHead = function(){
  //Time complexity: constant

    if(list.head){
      var result = list.head;
      list.head = list.head.next;
      if(list.head){
        list.head.previous = null;
      }
      return result.value;
    }

  };

  list.addToHead = function(value){

    var newNode = Node(value);
    if(!list.tail){
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.next = list.head;
      list.head.previous = newNode;
      list.head = newNode;

    }


  };

  list.removeTail = function(){

    if(list.tail){
      var result = list.tail;
      list.tail = list.tail.previous;
      list.tail.next = null;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
