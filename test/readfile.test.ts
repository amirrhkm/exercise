import { describe, expect } from '@jest/globals'
import { readfile } from '../lib/readfile'

const mockans = ['abc', 'def', 'ghi', 'jkl']
const mockfile = './testnum.txt'
describe('readfile function test', () => {
  test('test', async () => {
    expect(await readfile(mockfile)).toStrictEqual(mockans)
  })
})
