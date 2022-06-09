//
// Binary trees are already defined with this interface:
class Tree<T> {
  value: T;
  left: Tree<T>;
  right: Tree<T>;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function solution(t: Tree<number>): number[] {
  if (!t) return [];
  const res: number[] = [];
  const queue: Tree<number>[] = [t];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (i === len - 1) res.push(node!.value);
      if (node!.left) queue.push(node!.left);
      if (node!.right) queue.push(node!.right);
    }
  }
  return res;
}
