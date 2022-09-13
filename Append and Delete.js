Input Format

The first line contains a string , the initial string.
The second line contains a string , the desired final string.
The third line contains an integer , the number of operations.

Constraints

 and  consist of lowercase English letters, .
Sample Input 0

hackerhappy
hackerrank
9
Sample Output 0

Yes
Explanation 0

We perform  delete operations to reduce string  to hacker. Next, we perform  append operations (i.e., r, a, n, and k), to get hackerrank. Because we were able to convert  to  by performing exactly  operations, we return Yes.

Sample Input 1

aba
aba
7
Sample Output 1

Yes
Explanation 1

We perform  delete operations to reduce string  to the empty string. Recall that though the string will be empty after  deletions, we can still perform a delete operation on an empty string to get the empty string. Next, we perform  append operations (i.e., a, b, and a). Because we were able to convert  to  by performing exactly  operations, we return Yes.

Sample Input 2

ashley
ash
2
Sample Output 2

No
Explanation 2

To convert ashley to ash a minimum of  steps are needed. Hence we print No as answer.





function appendAndDelete(s, t, k) {
    // Write your code here
  let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == t[i]) {
            count++
        } else {
            break
        }
    }
    if (parseInt(s.length - count) + parseInt(t.length - count) <= k) {
        if (parseInt(s.length) + parseInt(t.length) <= k) {
            return "Yes"
        }
        else if ((k - (parseInt(s.length - count) + parseInt(t.length - count))) % 2 == 0) {
            return "Yes"
        } else {
            return "No"
        }
    } else {
        return "No"
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}



