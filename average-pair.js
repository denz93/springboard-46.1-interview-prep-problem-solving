// add whatever parameters you deem necessary
function averagePair(nums, target) {
  const numMap = new Map();
  for (let num of nums) {
    if (numMap.has(num)) {
      numMap.set(num, numMap.get(num) + 1);
    } else {
      numMap.set(num, 1);
    }
  }
  for (let num of nums) {
    const other = target * 2 - num;
    if (numMap.has(other)) {
      if (other != num || numMap.get(other) >= 2) return true 
    }
  }
  return false
}
