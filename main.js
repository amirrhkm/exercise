
// module.exports = {dir}
// const output = require('/calcSum');
// console.log(`Output: ${require('./calcSum')}`)

var dir = require('./calcSum');

dir.log('./inputFile/magic_number.txt')

module.exports.log = function(sum) {
    console.log(sum)
}