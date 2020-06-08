function Node(element) {
  this.element = element;
  this.next = null;
}

var LinkList = function() {
    this.head = null;
    this.length = 0;
  
}

LinkList.prototype.append = function(element) {
  var node = new Node(element);
  if (this.head === null) {
    this.head = node;
  } else {
    var current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
}
module.exports = {
  LinkList: LinkList
}
