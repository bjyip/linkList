var LinkList = require('./linkList').LinkList
var linkList = new LinkList();
var linkList = new LinkList();
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)

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