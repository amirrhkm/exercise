import { describe, expect } from '@jest/globals'
import { readfile } from './readfile'

const mockans = ['abc', 'def', 'hij', 'klm']
const mockfile = 'D:/onboard__/inputFile/testnum.txt'
describe('readfile function test', () => {
  test('test', async () => {
    expect(await readfile(mockfile)).toStrictEqual(mockans)
  })
})
