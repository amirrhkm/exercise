import { readdir } from 'node:fs/promises';
import {dataDisplay} from './calcSumEs6.mjs'
export const pathToDir = './inputFile'
export const path = await readdir(pathToDir);
await dataDisplay();
