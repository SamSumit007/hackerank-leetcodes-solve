 Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 

const equalizeArray = (arr) => {
    let maxSameNumberAmount = 0;
    arr.sort((a, b) => a - b);
    console.log(arr);
        
    for(let i = 0; i < arr.length; i++) {
        let numCounter = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
        console.log(i, '->', numCounter);
        if(maxSameNumberAmount < numCounter) {
            maxSameNumberAmount = numCounter
        } else {
            continue;
        }
        i = arr.lastIndexOf(arr[i]);
    }
    
    console.log(arr.length - maxSameNumberAmount);
    return arr.length - maxSameNumberAmount;
}
