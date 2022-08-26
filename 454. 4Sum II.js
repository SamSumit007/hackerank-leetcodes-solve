Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let obj = {}
  let count = 0
  for (let num of nums1) {
    for (let num1 of nums2) {
      let sum = num + num1
      obj[sum] = (obj[sum] || 0) + 1
    }
  }

  for (let num of nums3) {
    for (let num1 of nums4) {
      let sum = num + num1
      count += (obj[0 - sum] || 0)
    }
  }
  return count
};
