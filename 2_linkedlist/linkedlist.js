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

module.exports = linkedlist;