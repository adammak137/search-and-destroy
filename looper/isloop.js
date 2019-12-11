'use strict';

//Complete this algo
const isLoop = (linkedlist) => {

  let pointer1 = linkedlist.head
  let pointer2 = linkedlist.head.next

  while (pointer2) {
    pointer2 = pointer2.next.next
    pointer1 = pointer1.next
    if (pointer2 === pointer1) {
      return true
    }
  }
  return false
}
/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
