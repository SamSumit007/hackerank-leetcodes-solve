
function minimumBribes(q) {
    // Write your code here
 let bribe = 0;
   
  for (let i = q.length-1; i >=0; i--) {
  
    if( q[i] - (i+1) > 2){
     
      console.log("Too chaotic");
      return;
    }

   
    for (let j = Math.max(0, q[i] - 2); j < i; j++){
     
      if (q[j] > q[i]){
        bribe++;
    
      } 
    }
          
  } 

  console.log(bribe);
}
