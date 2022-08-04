/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
      let tempStack = [temperatures.length - 1];
    let daysUntilWarmer = new Array(temperatures.length);
    daysUntilWarmer.fill(0);
    
    for(let day = temperatures.length - 2; day >= 0; day--) {
        while(tempStack.length > 0 && temperatures[day] >= temperatures[tempStack[tempStack.length - 1]])   {
            tempStack.pop();
        }
        
        if(tempStack.length > 0) {
            daysUntilWarmer[day] = tempStack[tempStack.length - 1] - day;
        }
        tempStack.push(day);
    }
    
    return daysUntilWarmer;
};




Time & Space Complexity
Time: O(n)
Space: O(n)
