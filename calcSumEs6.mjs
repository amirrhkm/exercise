import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';

var combined;
var sum = 0;

function dataDisplay() {
    try {
        const filePath = resolve('./inputFile/magic_num_3.txt');
        const contents = readFile(filePath,'utf8');
        contents.split(/\n/).forEach(line =>  {
            let count = 0
            let digit = []
            for(const single of line) {
                if(single >= '0' && single <= '9') {
                    digit[count] = single
                    count++
                }
            }
        combined = digit[0] + digit[digit.length-1]
        sum = sum + Number(combined)
        console.log(sum)
        });
    } catch (err) {
        console.error(err.message);
    }
}
dataDisplay();