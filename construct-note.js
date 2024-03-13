// add whatever parameters you deem necessary
function constructNote(message, letters) {
  let letterMap = new Map();
  for (let letter of letters) {
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter) + 1);
    } else {
      letterMap.set(letter, 1);
    }
  }
  for (let char of message) {
    if (!letterMap.has(char)) return false
    letterMap.set(char, letterMap.get(char) - 1);
    if (letterMap.get(char) < 0) return false
  }
  return true
}
