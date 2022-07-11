
function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

function luckBalance(k, contests) {
    // Write your code here
 contests.sort((x, y) => {
    return y[1] === x[1] ? y[0] - x[0] : y[1] - x[1];
  });

  let ans = 0;
  let lost = 0;

  contests.forEach(contest => {
    if (contest[1] === 0) {
      ans += contest[0];
    } else if (lost < k) {
      ans += contest[0];
      lost++;
    } else {
      ans -= contest[0];
    }
  });

  return ans;
}
