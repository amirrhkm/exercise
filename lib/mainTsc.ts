import fs from 'fs';
export const pathToDir = './inputFile'
export const path = fs.readdirSync(pathToDir);
import {run} from './calcSumTsc'
run()