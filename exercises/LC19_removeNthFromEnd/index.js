function removeNthFromEnd(head, n) {
  let dummyHead = { next: head };
  let show = dummyHead;
  let fast = dummyHead;

  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    show = show.next;
    fast = fast.next;
  }

  show.next = show.next.next;

  return dummyHead.next;
}

module.exports = removeNthFromEnd;
