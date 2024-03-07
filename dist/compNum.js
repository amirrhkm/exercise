'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.compNum = void 0
function compNum(lineCont) {
  let combined = ''
  const lineNum = []
  for (let i of lineCont) {
    let num = []
    let count = 0
    for (let j of i) {
      if (j >= '0' && j <= '9') {
        num[count] = j
        count++
      }
      combined = num[0] + num[num.length - 1]
    }
    lineNum.push(Number(combined))
  }
  return lineNum
}
exports.compNum = compNum
//# sourceMappingURL=compNum.js.map
