
/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
   let result = [];
    for(let i = p; i <= q; i++) {
        const squareString = (i * i).toString();
        const num1 = squareString.substring(0, squareString.length/2);
        const num2 = squareString.substring(squareString.length/2, squareString.length);
          
        if (Number(num1) + Number(num2) === i) {
            result = result.concat(i)
        }
    }
    if (result.length === 0) {
        console.log('INVALID RANGE')
    } else {
        console.log(...result);
    }

}
