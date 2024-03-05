
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
import { readdir } from 'node:fs/promises';
import {dataDisplay} from './calcSumEs6.mjs'
export const pathToDir = './inputFile'
export const path = await readdir(pathToDir);
console.log(path)
await dataDisplay();



// fs.readdir(pathToDir, (error, files) => {
//     for(let i = 0; i < files.length; i++) {
//         console.log(files[i])
//     }
// })
