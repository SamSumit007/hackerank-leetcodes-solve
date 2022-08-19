/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
    // Write your code here
  let count = 0
    let pageCount = 0
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= arr[i]; j++) {
            if (k == 1 || j % k == 1) {
                pageCount++;
            }
            if (j == pageCount) {
                count++;
            }
        }
    }
    return count;
}
