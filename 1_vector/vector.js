function vector() {
  this.data = [];
}

vector.prototype.insert = function (value) {
  this.data[this.data.length] = value;
}

vector.prototype.delete = function (position) {
  this.data.splice(position, 1);
}

vector.prototype.size = function () {
  return this.data.length;
}

vector.prototype.isEmpty = function () {
  return this.data.length === 0;
}

vector.prototype.valueAt = function (position) {
  return this.data[position];
}

vector.prototype.push = function (value) {
  this.data.push(value);
}

vector.prototype.prepend = function (value) {
  this.data.unshift(value);
}

vector.prototype.pop = function () {
  return this.data.pop();
}

vector.prototype.remove = function (value) {
  function exact(val) {
    return val === value;
  }

  var index = this.data.findIndex(exact);
  this.data.splice(index, 1);
}

vector.prototype.find = function (value) {
  function exact (val) {
    return val === value;
  }

  return this.data.findIndex(exact);
}

vector.prototype.print = function () {
  for(var i = 0; i < this.data.length; i++) {
    console.log(this.data[i]);
  }
}
