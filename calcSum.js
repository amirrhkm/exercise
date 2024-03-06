const fs = require('fs')

module.exports.log = function (dir) {
  var sum = 0
  var combined = 0
  const { open } = require('node:fs/promises')
  ;(async () => {
    const file = await open(dir)

    for await (const line of file.readLines()) {
      //console.log(`\n${line}`)
      let count = 0
      let digit = []
      //console.log('\nnumbers in line :-')
      for (const single of line) {
        if (single >= '0' && single <= '9') {
          digit[count] = single
          //console.log(digit[count])
          count++
        }
      }
      combined = digit[0] + digit[digit.length - 1]
      //console.log(`the number in this line is ${combined}`)
      sum = sum + Number(combined)
      //console.log(`The total sum for all lines is ${sum}`)
      //console.log('-------------------------------------')
    }
    var total = require('./main')
    total.log(sum)
  })()
}
