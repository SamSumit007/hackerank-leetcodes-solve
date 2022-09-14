

function hourglassSum(arr) {
    // Write your code here
  let count = -63;

  for(let i = 0; i <= 3; i++){
    for(let j = 0; j <= 3; j++){
      let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] 
      + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

      if(sum > count){
        count = sum
      }
    }
  }
  return count;
}
