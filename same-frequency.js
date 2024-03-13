// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const num2map = (numStr) => {
    const numMap = new Map();
    for (let num of numStr) {
      if (numMap.has(num)) {
        numMap.set(num, numMap.get(num) + 1);
      } else {
        numMap.set(num, 1);
      }
    }
    return numMap
  }
  const map1 = num2map(num1.toString())
  const map2 = num2map(num2.toString())
  for (let key of map1.keys()) {
    if (!map2.has(key) || map1.get(key) !== map2.get(key)) {
      return false
    }
  }
  return true
}
