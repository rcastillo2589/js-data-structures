function linkedlist () {
    this.head = null;
    this.length = 0;
}

linkedlist.prototype.print = function () {
    var current;
    current = this.head;

    while(current !== null) {
        process.stdout.write(`${current.data},`);
        current = current.next;
    }
    process.stdout.write('\n');
}

linkedlist.prototype.size = function () {
    return this.length;
}

linkedlist.prototype.isEmpty = function () {
    return this.length === 0;
}

linkedlist.prototype.valueAt = function (position) {
    var current = null;
    var count = 0;

    if(this.head == null && position > 0) {
        return null;
    } else if(position > this.length) {
        return null;
    } else {
        current = this.head;

        while(current !== null) {
            if(count === position) {
                return current.data;
            }

            current = current.next;
            count++;
        }

        return null;
    }
}

linkedlist.prototype.pushFront = function (value) {
    var current;
    var newNode = {
        data: value,
        next: null
    };

    if(this.head === null) {
        this.head = newNode;
        this.length++;
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
}

linkedlist.prototype.popFront = function () {
    var value = null;

    if(this.head === null) {
        return null;
    } else {
        value = this.head.data;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}

linkedlist.prototype.pushBack = function (value) {
    var current;
    var newNode = {
        data: value,
        next: null
    };

    if(this.head === null) {
        this.head = newNode;
        this.length++;
    } else {
        current = this.head;

        while(current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
        this.length++;
    }
}

linkedlist.prototype.popBack = function () {
    var value;
    var current = null;
    var previous = null;

    if(this.head == null) {
        return null;
    } else {
        current = this.head;

        while(current.next !== null) {
            previous = current;
            current = current.next;
        }

        value = current.data;
        previous.next = null;
        this.length--;
        return value;
    }
}

linkedlist.prototype.front = function () {
    if(this.head === null) {
        return null;
    } else {
        return this.head.data;
    }
}

linkedlist.prototype.back = function () {
    var value;
    var current = null;

    if (this.head == null) {
        return null;
    } else {
        current = this.head;

        while(current.next !== null) {
            current = current.next;
        }

        value = current.data;
        return value;
    }
}

linkedlist.prototype.insert = function (position, value) {
    var current = null;
    var previous = null;
    var count = 0;
    var newNode = {
        data: value,
        next: null
    };

    if(this.head === null && position !== 0) {
        return;
    } else if(position > this.length) {
        return;
    } else if(position === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    } else {
        current = this.head;

        while(current !== null) {
            if(count === position) {
                previous.next = newNode;
                newNode.next = current;
                this.length++;
                return;
            }
            previous = current;
            current = current.next;
            count++;
        }
        return null;
    }
}

linkedlist.prototype.erase = function (position) {
    var current = null;
    var previous = null;
    var count = 0;

    if(this.head === null) {
        return;
    } else if(position > this.length) {
        return;
    } else if(position === 0) {
        this.head = this.head.next;
        this.length--;
    } else {
        current = this.head;

        while(current.next !== null) {
            if(count === position) {
                previous.next = current.next;
                this.length--;
                return;
            }
            previous = current;
            current = current.next;
            count++;
        }
    }
}

linkedlist.prototype.valueFromEnd = function (count) {
    var fromFront = (this.length - count) - 1;
    var current = null;
    var increment = 0;

    if(this.head === null) {
        return null;
    } else {
        current = this.head;

        while(current !== null) {
            if(fromFront === increment) {
                return current.data;
            }
            current = current.next;
            increment++;
        }
    }
}

linkedlist.prototype.reverse = function () {
    var previous = null;
    var current = null;
    var front = null;

    if(this.head === null) {
        return;
    } else {
        current = this.head;
        front = this.head.next;

        while(front !== null) {
            current.next = previous;

            previous = current;
            current = front;
            front = front.next;
        }
        current.next = previous;
        this.head = current;
    }
}

linkedlist.prototype.remove = function (value) {
    var current = null;
    var previous = null;

    if(this.head === null) {
        return;
    } else {
        current = this.head;

        while(current.next !== null) {
            if(current.data === value) {
                previous.next = current.next;
                this.length--;
                return;
            }
            previous = current;
            current = current.next;
        }
    }
}

module.exports = linkedlist;