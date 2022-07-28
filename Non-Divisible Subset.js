





function nonDivisibleSubset(k, s) {
    // Write your code here
  if(k === 1) {
        return 1;
    }
    let maxSubsetLength = 0;
    
    if(s.find((value) => value % k === 0) != undefined) {
        maxSubsetLength++;
    } 
    if(k % 2 === 0){
        maxSubsetLength = s.find((value) => value % k === k / 2) != undefined ? maxSubsetLength + 1 : maxSubsetLength;
    } 
    for(let i = 1; i < k / 2; i++) {
        maxSubsetLength += Math.max(
            s.filter((value) => value % k === i).length,
            s.filter((value) => value % k === k - i).length
        );
    }
    console.log(maxSubsetLength);
    return maxSubsetLength;
}
