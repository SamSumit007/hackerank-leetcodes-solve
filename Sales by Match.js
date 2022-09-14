

function sockMerchant(n, ar) {
    // Write your code here
    var par = 0;
    ar.sort();
    for(let i = 0; i < n; i++) {
      if(ar[i] == ar[i+1]) {
        i++;
        par++;
      }
    }
    return par;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
