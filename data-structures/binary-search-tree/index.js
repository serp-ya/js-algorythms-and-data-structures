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
