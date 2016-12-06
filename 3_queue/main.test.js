var Queue = require('./queue.js');

var queue = new Queue();

console.log("IsEmpty: " + queue.isEmpty());
queue.enqueue("one");
queue.enqueue("two");
queue.enqueue("three");
queue.enqueue("four");
queue.enqueue("five");
queue.print("Enqueue 1-5");
console.log("IsEmpty: " + queue.isEmpty());

console.log("Dequeue: " + queue.dequeue());
console.log("Dequeue: " + queue.dequeue());
console.log("Dequeue: " + queue.dequeue());

queue.print("Dequeued");
