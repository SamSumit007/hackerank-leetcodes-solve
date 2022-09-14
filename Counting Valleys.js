

function countingValleys(steps, path) {
    let valleyCount = 0
    let seaLevel = 0
    let p = path.split('')
    p.forEach(step => {
        if(step === 'U') {
            seaLevel += 1
            if (seaLevel === 0){
                valleyCount += 1
            }
          
        } else {
            seaLevel -= 1
       
        }
    })
    return valleyCount
} 
