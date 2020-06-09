function Node(element) {
  this.element = element;
  this.next = null;
}

var LinkList = function() {
    this.head = null;
    this.length = 0;
  
}
// 增加一个节点
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
// 批量增加节点
LinkList.prototype.appendBatch = function(elements) {
  for (var i = 0; i < elements.length; i++) {
    var node = new Node(elements[i]);
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
}

module.exports = {
  LinkList: LinkList
}
