/** 
* That implementation was created with Eric's Traub course
* "Learning Data Structures in JavaScript from Scratch"
* on udemy.com
*/

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function ListNode(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}