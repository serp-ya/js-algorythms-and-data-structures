/** 
* That implementation was created with Eric's Traub course
* "Learning Data Structures in JavaScript from Scratch"
* on udemy.com
*/

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (this.value >= value) {
    if (!this.left) {
      return this.left = new BST(value);
    }
    this.left.insert(value);

  } else {
    if (!this.right) {
      return this.right = new BST(value);
    }
    this.right.insert(value);
  }
};

BST.prototype.contains = function (searchValue) {
  if (this.value === searchValue) {
    return true;
  }

  if (this.value > searchValue) {
    return this.left ? this.left.contains(searchValue) : false;
  } else {
    return this.right ? this.right.contains(searchValue) : false;
  }
}

BST.prototype.getMinValue = function () {
  return this.left ? this.left.getMinValue() : this.value;
};

BST.prototype.getMaxValue = function () {
  return this.right ? this.right.getMaxValue() : this.value;
}

BST.prototype.depthFirstTraversal = function (callback, order = 'in-order') {
  if (order === 'pre-order') {
    callback(this.value);
  }
  if (this.left) {
    this.left.depthFirstTraversal(callback, order);
  }
  if (order === 'in-order') {
    callback(this.value);
  }
  if (this.right) {
    this.right.depthFirstTraversal(callback, order);
  }
  if (order === 'post-order') {
    callback(this.value);
  }
};

BST.prototype.breadthFirstTraversal = function (callback) {
  var nodes = [this];

  while (nodes.length) {
    var currentNode = nodes.shift();
    callback(currentNode);

    if (currentNode.left) {
      nodes.push(currentNode.left);
    }
    if (currentNode.right) {
      nodes.push(currentNode.right);
    }
  }
};
