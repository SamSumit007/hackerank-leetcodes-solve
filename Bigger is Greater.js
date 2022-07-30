
/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
    var remainChar = [];    
    remainChar.push(w[w.length-1]);
        
    for(var i=w.length-2; i>=0; i--){   //starts from second last and shift left if no result.
        remainChar.push(w[i]);
        
        //Check if any character after w[i] is just larger than w[i].
        var stagingChar;                
        for(var j=i+1; j<w.length; j++){
            if(w[i]<w[j] && (w[j]<stagingChar || stagingChar == undefined)){
                stagingChar=w[j];
            }
        }
            
        if(stagingChar != undefined){
          
           var  result=w.substring(0, i)+stagingChar+remainChar.sort().join('').replace(stagingChar, '');
            return result;
        }
    }
    return "no answer";
    
}
