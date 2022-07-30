
/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
  const sqrt = Math.sqrt([...s].length);
  const ceil = Math.ceil(sqrt);

  return [...s].reduce((target, string, index) => {
    target[index % ceil] += string;

    return target;
  }, new Array(ceil).fill('')).join(' ');
}
