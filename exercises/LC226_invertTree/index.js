function invertTree(root) {
  function nodeInvertor(node) {
    if (!node) return;

    let tempNode = node.right;
    node.right = node.left;
    node.left = tempNode;

    nodeInvertor(node.left);
    nodeInvertor(node.right);
  }

  nodeInvertor(root);
  return root;
}

module.exports = invertTree;
