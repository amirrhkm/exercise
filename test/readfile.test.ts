import { describe, expect } from '@jest/globals'
import { readfile } from '../lib/readfile'

const mockans = ['abc', 'def', 'hij', 'klm']
const mockfile = './testnum.txt'
describe('readfile function test', () => {
  test('test', async () => {
    //expect(await readfile(mockfile)).toStrictEqual(mockans)
    const fileCont = await readfile(mockfile)
    console.log(fileCont)
    expect(fileCont).toStrictEqual(mockans)
  })
})
