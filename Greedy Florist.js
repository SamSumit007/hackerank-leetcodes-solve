
// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
 let minimumCost = 0;
  let previousPurchases = 0;

  c.sort((x, y) => {
     return y - x;
  });

  for (let index = 1; index <= c.length; index++) {
    minimumCost += (1 + previousPurchases) * c[index - 1];

    if (index % k === 0) {
      previousPurchases++;
    }
  }

  return minimumCost;

}
