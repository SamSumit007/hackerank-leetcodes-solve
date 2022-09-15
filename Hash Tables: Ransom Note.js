process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}



function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    let tracker = {};
    for (let i = 0; i < magazine.length; i++) {
        if (!tracker[magazine[i]]) {
            tracker[magazine[i]] = 0;
        }
        tracker[magazine[i]]++;
    }
    for (let i = 0; i < ransom.length; i++) {
        if (tracker[ransom[i]]) {
            tracker[ransom[i]]--;
        } else {
            console.log('No');
            return;
        }
    }
    console.log('Yes');
}
