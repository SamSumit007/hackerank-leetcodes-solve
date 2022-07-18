A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.


var shipWithinDays = function(weights, days) {
    let left = -Infinity, right = 0;
  for (var weight of weights) {
    left = Math.max(left, weight);
    right += weight;
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let groups = 1, sum = 0;
    for (var weight of weights) {
      sum += weight;
      if (sum > mid) {
        groups++;
        sum = weight;
      }
    }
  
    if (groups <= days) right = mid;
    else left = mid + 1;
  }
  return left;
};
