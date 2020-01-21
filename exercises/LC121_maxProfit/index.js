var maxProfit = function(prices) {
  let lowest = prices[0];
  let hightest = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowest[0]) {
      lowest = prices[i];
    }
    if (prices[i] > hightest[0]) {
      hightest = prices[i];
    }
  }

  return [lowest, hightest];
};

module.exports = maxProfit;
