/*
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY cases
 take width as an extra variable in the functions
 */

function serviceLane(n, cases, width) {
    // Write your code here
  if (!width) return [];
    let result = [];
    for (let i=0; i < cases.length; i++) {
        let currentMin = Infinity;
        for (let j=(cases[i][0]); j <= (cases[i][1]); j++) {
            currentMin = width[j] < currentMin ? width[j] : currentMin;
        }
        if (currentMin !== Infinity) {
                result.push(currentMin);
        } 
    }
    return result;

}
