
function twoStrings(s1, s2) {
    // Write your code here
 let l1, l2
  
  if(s1.length < s2.length){
    l1 = s1
    l2 = s2
  }else{
    l1 = s2
    l2 = s1
  }
  
  for(let i = 0; i < l1.length; i++){
    if(l2.indexOf(l1[i]) !== -1){
      return "YES"
    }
  }
  
  return "NO"
}
