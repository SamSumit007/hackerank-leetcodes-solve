Constraints



Sample Input

2
12
1012
Sample Output

2
3
Explanation

The number  is broken into two digits,  and . When  is divided by either of those two digits, the remainder is  so they are both divisors.

The number  is broken into four digits, , , , and .  is evenly divisible by its digits , , and , but it is not divisible by  as division by zero is undefined.



function findDigits(n) {
    // Write your code here
      let totalDivisible = 0;
    let digits = n.toString().split('');
    let realDigits = digits.map(Number);
      for(let i = 0; i < realDigits.length; i++) {
        if(n % realDigits[i] === 0) {
            totalDivisible++;
        }
    }
    
    return totalDivisible;

}
