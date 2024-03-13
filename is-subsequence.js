// add whatever parameters you deem necessary
function isSubsequence(s1, s2) {
  let i = 0
  let j = 0
  while (i < s1.length && j < s2.length) {
    if (s1[i] === s2[j]) {
      i++
    }
    j++
  }
  return i === s1.length
}
