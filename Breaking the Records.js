
/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
     var hs = 0;
    var ls = 0;
    var highest_value = scores[0];
    var lowest_value = scores[0];
    scores.forEach(function (current_value) {
        if (current_value > highest_value) {
            highest_value = current_value;
            hs++;
        }
        if (lowest_value > current_value) {
            lowest_value = current_value;
            ls++;
        }
    });
    return [hs, ls];

}
