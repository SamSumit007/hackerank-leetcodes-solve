
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
  const appleDistance = [s-a, t-a];
    const orangeDistance = [s-b, t-b];
    const applesInTheHouse = apples.filter(item => appleDistance[0] <= item && item <= appleDistance[1] );
    const orangesInTheHouse = oranges.filter(item => orangeDistance[0] <= item && item <= orangeDistance[1]);
    console.log(applesInTheHouse.length);
    console.log(orangesInTheHouse.length);
}
