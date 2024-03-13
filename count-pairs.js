// add whatever parameters you deem necessary
function countPairs(nums, target) {
  const numMap = new Map();
  for (let num of nums) {
    numMap.set(num, true)
  }

  const visited = new Set()
  let count = 0
  for (let num of nums) {
    if (visited.has(num)) continue;
    const otherNum = target - num 

    if (numMap.has(otherNum) && num !== otherNum) {
      visited.add(num)
      visited.add(otherNum)
      count++
    }
  }
  return count
}
