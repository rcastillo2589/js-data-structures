function Queue () {
  head = null;
  tail = null;
  length = 0;
}

Queue.prototype.enqueue = function (value) {
  var newValue = {
    data: value,
    next: null
  };

  if(this.tail == null) {
    this.tail = newValue;
    this.head = newValue;
    this.length++;
  } else {
    this.tail.next = newValue;
    this.tail = this.tail.next;
    this.length++;
  }
}

Queue.prototype.dequeue = function () {
  var value = null;

  if(this.tail == null) {
    return null;
  } else {
    value = this.head.data;
    this.head = this.head.next;
    return value;
  }
}

Queue.prototype.isEmpty = function () {
  return this.length === 0;
}

Queue.prototype.print = function (operation) {
  var current;
  current = this.head;

  process.stdout.write(operation + ': ');
  while(current !== null) {
      process.stdout.write(`${current.data},`);
      current = current.next;
  }
  process.stdout.write('\n');
}

module.exports = Queue;
