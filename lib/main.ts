import fs from 'fs';
export const pathToDir = './inputFile'
export const path = fs.readdirSync(pathToDir);
// import {run} from './calcSumTsc'
import {readfile} from './readfile'
import { compNum } from './compNum';
import { sumNum } from './sumNum';
// run()

async function run() {
    const lineCont = await readfile("magic_num_3.txt")
    const lineNum = compNum(lineCont)
    const sum = sumNum(lineNum)
    
    console.log(lineCont)
    console.log(lineNum)
    console.log(sum)
}

run()