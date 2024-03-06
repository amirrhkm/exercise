import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToDir, path} from './mainTsc'

export async function run() {
    try {
        for (const i in path) {
            let combined = "";
            let sum = 0;
            const filePath = resolve(pathToDir, path[i]);
            const contents = await readFile(filePath,'utf8');
            contents.split(/\n/).forEach(line =>  {
                combined = conNum(line);
                sum = calcSum(sum,Number(combined));
            });
            console.log(`${path[i]} : ${sum}`)
        }
    } catch (err) {
        return console.error(err.message);
    }
}

function calcSum(sum: number, num: number) {
    return sum + num
}

function conNum(line: string) {
    let digit = []
    let count = 0
    for(const single of line) {
        if(single >= '0' && single <= '9') {
            digit[count] = single
            count++
        }
    }
    return digit[0] + digit[digit.length-1]
}