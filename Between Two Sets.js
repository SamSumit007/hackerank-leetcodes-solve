
/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
   var numbers = 0;
    var _loop_1 = function (i) {
        if ((a.every(function (element) { if (i % element === 0) {
            return true;
        } })) && (b.every(function (element) { if (element % i === 0)
            return true; }))) {
            numbers++;
        }
    };
    for (var i = 0; i <= 100; i++) {
        _loop_1(i);
    }
    return numbers;
}
