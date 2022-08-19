
/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(n, c, m) {
    // Write your code here
   let uneatenCount = Math.floor(n / c);;
    let eatenCount = uneatenCount;
    let wrapperCount = uneatenCount;
    
    uneatenCount = 0;
    
    while(wrapperCount >= m) {
        uneatenCount = Math.floor(wrapperCount / m);
        wrapperCount = wrapperCount % m;
        eatenCount +=uneatenCount;
        wrapperCount +=uneatenCount;
        uneatenCount = 0;
    }
    
    console.log(eatenCount);
    return eatenCount
}
