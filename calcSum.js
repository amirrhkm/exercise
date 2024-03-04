const fs = require('fs');
let sum = 0
let combined = 0

module.exports.log = function(dir) {
  const { open } = require('node:fs/promises');
  (async () => {
    const file = await open(dir);

    for await (const line of file.readLines()) {
      //console.log(`\n${line}`)
      count = 0
      digit = []
      //console.log('\nnumbers in line :-')
      for(let i = 0; i < line.length; i++) {
          let single = line.charAt(i)
          if(single >= '0' && single <= '9') {
              digit[count] = single
              //console.log(digit[count])
              count++
          }
      }
      combined = digit[0] + digit[digit.length-1]
      //console.log(`the number in this line is ${combined}`)
      sum = sum + Number(combined)
      //console.log(`The total sum for all lines is ${sum}`)
      //console.log('-------------------------------------')
    }
    var total = require('./main')
    total.log(sum)
  })();
}