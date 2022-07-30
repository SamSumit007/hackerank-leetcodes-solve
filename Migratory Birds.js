*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
 const count = {};
  // {
  //     1: 1,
  //     2: 0,
  //     3: 1,
  //     4: 3,
  //     5: 1
  // }
  // Write your code here
  arr.forEach(a => {
      if(!count[a]) {
          count[a] = 1;
      }
      else {  
      count[a] += 1;
      }
  })
  let max = 0;
  let key1 = 0;
  for (const [key, value] of Object.entries(count)) {
      if(value > max) {
          max = value;
          key1 = key;
      }
  }
  return key1;
}
