/** 
* That implementation was created with Eric's Traub course
* "Learning Data Structures in JavaScript from Scratch"
* on udemy.com
*/

function LinkedList() {
  this.head = null;
  this.tail = null;
};

function ListNode(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
};

LinkedList.prototype.addToHead = function (value) {
  var newNode = new ListNode(value, null, this.head);
  
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }

  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  var newNode = new ListNode(value, this.tail, null);
  
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }

  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return null;
  }

  var removeNode = this.head;
  this.head = removeNode.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  return removeNode.value;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) {
    return null;
  }

  var removeNode = this.tail;
  this.tail = removeNode.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  return removeNode.value;
};