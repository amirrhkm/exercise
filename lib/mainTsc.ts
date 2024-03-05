import {readdir} from 'node:fs/promises';
export const pathToDir = './inputFile'
export const path = readdir(pathToDir);

import {dataDisplay} from './calcSumTsc'
dataDisplay();
