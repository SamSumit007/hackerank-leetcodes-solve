
/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
     let i = 0
  let map = {}

  for (; i < arr.length; i += 1) {
    const el = arr[i]
    map[el] = map[el] ? map[el] += 1 : 1
  }

  i = arr[0]
  const max = arr[arr.length - 1]

  let beautifulCount = 0

  while (i <= max) {
    const j = i + d
    const k = j + d

    if (map[i] && map[j] && map[k]) {
      beautifulCount += Math.max(map[i], map[j], map[k])
    }

    i += 1
  }

  return beautifulCount

}
