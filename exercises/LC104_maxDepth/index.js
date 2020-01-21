function maxDepth(root) {
  let maxDepthCount = 0;

  function dive(node, currentDepth) {
    if (!node) {
      maxDepthCount = Math.max(currentDepth - 1, maxDepthCount);
      return;
    }

    dive(node.left, currentDepth + 1);
    dive(node.right, currentDepth + 1);
  }

  dive(root, 1);

  return maxDepthCount;
}

module.exports = maxDepth;
