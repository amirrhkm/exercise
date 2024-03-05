
// module.exports = {dir}
// const output = require('/calcSum');
// console.log(`Output: ${require('./calcSum')}`)

// var dir = require('./calcSum');

// dir.log('./inputFile/magic_num_1.txt')

// module.exports.log = function(sum) {
//     console.log(sum)
// }

// dir.log('./inputFile/magic_num_2.txt')

// module.exports.log = function(sum) {
//     console.log(sum)
// }

// dir.log('./inputFile/magic_num_3.txt')

// module.exports.log = function(sum) {
//     console.log(sum)
// }
import fs from 'fs';

export let dir = './inputFile/magic_num_1.txt';
import {dataDisplay} from './calcSumEs6.mjs'

(async () => {
    dataDisplay();
})();