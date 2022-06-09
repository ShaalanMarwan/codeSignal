

Given a binary tree t, return its right view. To understand what the right view of the tree means, imagine yourself standing on the right side of the tree: The right view will be all the vertices that you can see. For example, imagine the following tree:
```

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
 /
6               <---

```
In this case, you can see vertices 1, 3, 4, and 6.

Given binary tree t, return the values of the vertices in the right view, ordered from top to bottom.

Example

For

t = {
    "value": 5,
    "left": {
        "value": 3,
        "left": null,
        "right": {
            "value": -1,
            "left": {
                "value": 8,
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": null,
        "right": {
            "value": 10,
            "left": null,
            "right": null
        }
    }   
}
the output should be solution(t) = [5, 4, 10, 8].

Here is a tree from example:

   5
 /   \
3     4
 \     \
  -1    10
 /
8
Input/Output

[execution time limit] 5 seconds (ts)

[input] tree.integer t

A binary tree of integers.

Guaranteed constraints:
0 ≤ tree size ≤ 5 · 104,
-1000 ≤ node value ≤ 1000.

[output] array.integer

The values of the vertices in the right view, ordered from the top of the tree to the bottom.