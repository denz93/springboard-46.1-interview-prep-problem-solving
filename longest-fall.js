// add whatever parameters you deem necessary
function longestFall(nums) {
  let longest = 0
  let lo = 0
  let hi = 0

  while (hi < nums.length) {
    if (lo === hi) {
      hi++
      continue
    }
    if (nums[hi] < nums[hi-1]) {
      hi++
    } else {
      longest = Math.max(longest, hi - lo)
      lo = hi
      hi++
    }
  }
  longest = Math.max(longest, hi - lo)
  return longest
}
