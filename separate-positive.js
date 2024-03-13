// add whatever parameters you deem necessary
function separatePositive(nums) {
  let l = 0
  let r = nums.length - 1
  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  while (l < r) {
    while (nums[l] > 0) l++;
    while (nums[r] < 0) r--;
    if (l >= r) break;
    swap(l, r)
  }
  return nums
}
