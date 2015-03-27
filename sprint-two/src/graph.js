

var Graph = function(){
//need place to store our nodes
//need place to store connection between nodes
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  return (this.nodes.indexOf(node) > -1);
};

Graph.prototype.removeNode = function(node){
  var holder = this.nodes.indexOf(node);
  this.nodes[holder] = undefined;
  //will need to remove edges later
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //return _.contains(this.edges, [fromNode, toNode]) || _.contains(this.edges, [toNode, fromNode]);
  var check = false;
  _.each(this.edges, function(element){
    if (_.contains(element, fromNode) && _.contains(element, toNode)){
      check = true;
    }
  });
  return check;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(element){
    cb(element);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



