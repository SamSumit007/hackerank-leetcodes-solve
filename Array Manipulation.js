
function arrayManipulation(n, queries) {
    // Write your code here
let values = new Array(n + 2).fill(0, 0, n + 2);

  for (let i = 0; i < queries.length; i++) {
    let variableArray = queries[i];
    let a = variableArray[0];
    let b = variableArray[1];
    let k = variableArray[2];
    values[a] = values[a] += k;
    values[b + 1] -= k;
  }

  let max = 0;
  let sum = 0;

  for (let j = 0; j < values.length; j++) {
    sum += values[j];
    max = Math.max(sum, max);
  }
  return max;
}

