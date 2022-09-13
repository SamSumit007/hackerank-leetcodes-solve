Constraints



Sample Input

2
3 9
17 24
Sample Output

2
0
Explanation

Test Case #00: In range ,  and  are the two square integers.
Test Case #01: In range , there are no square integers.


function squares(a, b) {
    // Write your code here
  let perfectSquares = 0;
  let firstNum = Math.ceil(Math.sqrt(a));
  let lastNum = Math.floor(Math.sqrt(b));

  for (let i = firstNum; i <= lastNum; i++) {
    if (i * i >= a && i * i <= b) {
      perfectSquares += 1;
    }
  }

  return perfectSquares;
}
