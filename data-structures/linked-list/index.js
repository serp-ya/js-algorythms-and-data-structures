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