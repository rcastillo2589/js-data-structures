var linkedlist = require('./linkedlist.js');

var ll = new linkedlist();

console.log("IsEmpty: " + ll.isEmpty());
console.log("Size: " + ll.size());
ll.pushBack("one");
ll.pushBack("two");
console.log("Front: " + ll.front());
ll.pushBack("three");
ll.pushBack("four");

ll.print();
console.log("Size: " + ll.size());

console.log("Popped front: " + ll.popFront());
console.log("Popped frotn: " + ll.popFront());
ll.print();

console.log("ValueAt 0: " + ll.valueAt(0));
console.log("Back: " + ll.back());
console.log("ValueAt 3: " + ll.valueAt(3));

ll.pushFront("zero");
ll.pushFront("neg-one");
console.log("Front: " + ll.front());
ll.pushFront("neg-two");

ll.print();

console.log("Popped back: " + ll.popBack());
console.log("Popped back: " + ll.popBack());
console.log("Back: " + ll.back());
ll.print();