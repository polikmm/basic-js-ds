const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const filtred = createArrayFromLinkedList(l).filter((el) => el !== k);
  return filtred.reverse().reduce((list, el) => {
    if (list) {
      const node = new ListNode(el);
      node.next = list;
      return node;
    }
    return new ListNode(el);
  }, null);

  function createArrayFromLinkedList(list, arr = []) {
    arr.push(list.value);
    if (list.next) return createArrayFromLinkedList(list.next, arr);
    if (!list.next) return arr;
  }
}

module.exports = {
  removeKFromList
};
