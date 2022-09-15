
function sherlockAndAnagrams(s) {
    // Write your code here
    let anagrams = 0;
for (let x = 1; x < s.length + 1; x++) {
    const stringMap = {};

    for (let y = 0; y < s.length - x + 1; y++) {
        const string = s.substring(y, y + x).split('').sort().join('');
        stringMap[string] = (stringMap[string] || 0) + 1;
    }

    Object.values(stringMap).forEach((value) => {
        anagrams += value * (value - 1)/2;
    });
    console.log(stringMap);
}

return anagrams;

}
