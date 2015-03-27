

var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
//time complexity: O(1);
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
//time complexity: O(n);
  return (this.nodes.indexOf(node) > -1);
};

Graph.prototype.removeNode = function(node){
//time complexity: O(n);
  var holder = this.nodes.indexOf(node);
  this.nodes[holder] = undefined;

  _.each(this.edges, function(element, elementIndex, collection){
    if (_.contains(element, node)){
      collection[elementIndex] = undefined;
    }
  });

};

Graph.prototype.hasEdge = function(fromNode, toNode){
//time complexity: O(n);
  var check = false;
  _.each(this.edges, function(element){
    if (_.contains(element, fromNode) && _.contains(element, toNode)){
      check = true;
    }
  });
  return check;
};

Graph.prototype.addEdge = function(fromNode, toNode){
//time complexity: O(1);
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
//time complexity: O(n);
  var edgeIndex;
  _.each(this.edges, function(element, elementIndex){
    if (_.contains(element, fromNode) && _.contains(element, toNode)){
      edgeIndex = elementIndex;
    }
  });
  this.edges[edgeIndex] = undefined;
};

Graph.prototype.forEachNode = function(cb){
//time complexity: O(n);
  _.each(this.nodes, function(element){
    cb(element);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * See method comments
 */



