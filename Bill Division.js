*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    var sum =0;
    var n = bill.length;
    for(var i = 0; i <n; i++){
       if(i != k){
            sum+= bill[i];
        }   
    }
    if((sum/2) === b){
        console.log("Bon Appetit");
        return "Bon Appetit";
    }else{
        console.log(Math.abs(b - (sum/2)));
        return Math.abs(b - (sum/2));
    }
    }
