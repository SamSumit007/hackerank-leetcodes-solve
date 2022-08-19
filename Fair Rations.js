*
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B) {
    // Write your code here
     let temp = B, loaves = 0, i;
        for(i = 0; i < temp.length - 1; i++) {
            if(temp[i] % 2 != 0) {
                temp[i]++;
                temp[i + 1]++;
                loaves++;
            }
        }
        if(temp[i] % 2 === 0) return loaves * 2
        
        temp = []; 
        loaves = 0;
        i = 0;
        
        for(i = temp.length - 1; i > 0; i--) {
            if(temp[i] % 2 != 0) {
                temp[i]++;
                temp[i - 1]++;
            }
        }
        if(temp[i] % 2 === 0) return loaves * 2;        
        return 'NO';

}
