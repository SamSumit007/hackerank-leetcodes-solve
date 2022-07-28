/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

const repeatedString = (s, n) => {
    let totalAs = 0;  
    let repeatingSLength = s.length;  
    let repeatingCount = Math.floor(n / repeatingSLength);  //number of times full repeating string, s, occurs 
    let aCount = 0; 
    
    // count number of "a" in the string to be repeated
    for(let i = 0; i < repeatingSLength; i++) {
        if(s[i] === "a") {
            aCount++;
        }
    }
    
    totalAs = totalAs + (aCount * repeatingCount);
    
    // account for part of string that doesnt fit full repeatingString, s
    if(n % repeatingSLength !== 0) {
        let leftOvers = n % repeatingSLength;
        for(let i = 0; i < leftOvers; i++) {
            if(s[i] === "a") {
                totalAs = totalAs + 1;
            }
        }
    };
    
    console.log(totalAs);
    return totalAs;
}
