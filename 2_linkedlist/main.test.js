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

ll.insert(0, "five");
ll.insert(2, "six");
ll.insert(4, "seven");
console.log("Insert 5(0),6(2),7(4)");
ll.print();

ll.erase(3);
ll.erase(0);
ll.erase(2);

console.log("Erase at 3,0,2");
ll.print();
console.log("Size: " + ll.size());
console.log("2 From end: " + ll.valueFromEnd(2));
console.log("1 From end: " + ll.valueFromEnd(1));

ll.insert(0, "eight");
ll.insert(2, "nine");
ll.insert(4, "ten");
ll.pushBack("eleven");
ll.pushBack("twelve");
ll.print();
ll.reverse();
ll.print();

ll.remove("ten");
ll.remove("zero");
console.log("remove 10,0");
ll.print();