 */

function rotLeft(a, d) {
    // Write your code here
  for(let i=0;i<d;i++){
       
        var rotateNum =a.shift();
        a.push(rotateNum);
      //  console.log(a)
    }
    return a;
}
