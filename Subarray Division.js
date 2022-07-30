*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
  let matches = 0;
    for(let i = 0; i < s.length; i++) {
        let sCheck_M_Spaces = s.slice(i, m + i);
        let sumOf_M_Spaces = sCheck_M_Spaces.reduce((total, cur) => total + cur);
        console.log(i, ' =>', sCheck_M_Spaces, "total ", sumOf_M_Spaces);
        if(sumOf_M_Spaces === d){
            matches++;
        }
    };
    console.log(matches);
    return matches;
}
