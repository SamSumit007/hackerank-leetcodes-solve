
/*
 * Complete the 'organizingcontainer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(container) {
    // Write your code here
  const containerCounts = new Array(container.length).fill(0);
    const ballTypes = new Array(container.length).fill(0);
    
    for(let i = 0; i < container.length; i++) {
        const cont = container[i];
        
        for(let j = 0; j < container.length; j++) {
            const ballCount = cont[j];
            containerCounts[i] +=ballCount;
            ballTypes[j] +=ballCount;
        }
    }
    containerCounts.sort();
    ballTypes.sort();
    console.log({containerCounts, ballTypes});
    for(let i = 0; i < container.length; i++) {
        if(containerCounts[i] !== ballTypes[i]) {
            return "Impossible";
        }
    }
    
    return "Possible";
}
