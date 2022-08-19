*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    var firstdigit =['','one','two','three','four',
'five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
'seventeen','eighteen','nineteen'];
    var seconddigit = ['', '', 'twenty','thirty','forty','fifty', 'sixty'];
    var minuteInWord = '';
    if(m > 1 && m <= 29 ){
        minuteInWord = seconddigit[m.toString()[0]] + ' ' + firstdigit[m.toString()[1]] +' minutes'
    }else if(m >= 31 && m <= 59){
        var rest = 60 - m ;
        if(rest <= 19){
              minuteInWord = firstdigit[rest] + ' minutes'
        }else{
        minuteInWord = seconddigit[rest.toString()[0]] +' '+ firstdigit[rest.toString()[1]] + ' minutes'
        }
    }
    
    var time = '';
    if(m == 0){
        time = `${firstdigit[h]} o' clock`
    }
    else if(m == 15){
        time = `quarter past ${firstdigit[h]}`  
    }else if(m == 45){
        time = `quarter to ${firstdigit[h+1]}`
    }else if(m == 30){
        time = `half past ${firstdigit[h]}`  
    }else if(m == 1){
        time = `one minute past ${firstdigit[h]}`
    }else if(m <= 19){
        time = `${firstdigit[m]} past ${firstdigit[h]}`
    }else if(m > 1 && m <= 29){
        time = `${minuteInWord} past ${firstdigit[h]}`  
    }else if(m >= 31 && m <= 59){
        time = `${minuteInWord} to ${firstdigit[h+1]}`  
    }
    return time

}
