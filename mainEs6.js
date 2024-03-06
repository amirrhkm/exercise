import {readdir} from 'node:fs/promises';
export const pathToDir = './inputFile'
export const path = await readdir(pathToDir);

import {dataDisplay} from '../calcSumEs6.js'
await dataDisplay();
