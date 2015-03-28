var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
//Time Complexity: Constant Time O(1);
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(!this._storage[i]){
     this._storage[i] = [];
  }

  var notAlreadyThere = true;


  _.each(this._storage[i], function(tuple, bucketIndex, bucket){
      if(tuple[0] === k){
        bucket[bucketIndex][1] = v;
        notAlreadyThere = false;
      }

  });

  if(notAlreadyThere){
    this._storage[i].push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k){
//Time Complexity: Constant Time O(1);
  var i = getIndexBelowMaxForKey(k, this._limit);

  var returnVal =null;
  _.each(this._storage[i], function(tuple, bucketIndex, bucket){
      if(tuple[0] === k){
        returnVal = bucket[bucketIndex][1];
      }

  });

   return returnVal;

};

HashTable.prototype.remove = function(k){
//Time Complexity: Constant Time O(1);
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucketLength = this._storage[i].length;
  var lastTuple = this._storage[i][bucketLength -1];


  _.each(this._storage[i], function(tuple, bucketIndex, bucket){
      if(tuple[0] === k){
        bucket[bucketIndex][0] = lastTuple[0];
        bucket[bucketIndex][1] = lastTuple[1];
        bucket.splice(bucketLength-1, 1);
      }

  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * See method comments above;
 */
