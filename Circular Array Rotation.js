/**Complete the circularArrayRotation function in the editor below. It should return an array of integers representing the values at the specified indices.
circularArrayRotation has the following parameter(s):
a: an array of integers to rotate
k: an integer, the rotation count
queries: an array of integers, the indices to report */

function circularArrayRotation(a, k, queries) {
    let temp = 0
    let i = 0
    while (i < k) {
        temp = a[a.length - 1]
        a.pop()
        a.unshift(temp)
        i++
    }
    let arr = []
    for (let j = 0; j < queries.length; j++) {
        arr.push(a[queries[j]])
    }
    return arr
}
circularArrayRotation([1, 2, 3], 2, [0, 1, 2])
