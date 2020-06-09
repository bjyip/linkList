var LinkList = require('./linkList').LinkList
var linkList = new LinkList();
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5])

var reverseList = function(head) {
  if (!head) {
      return head;
  }
  var curr = head, prev = null, tempNext = null;
  while (curr) {
      tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
  }
  return prev;
};
reverseList(linkList.head)