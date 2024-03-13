// add whatever parameters you deem necessary
function pivotIndex(nums) {
  let sum = nums.reduce((s, n) => s + n, 0)
  let left = 0
  let right = sum - nums[0]
  let p = 0
  while (p < nums.length) {
    if (left === right) return p
    left += nums[p]
    p++
    right -= p < nums.length ? nums[p] : right
    
  }
  return -1
}
