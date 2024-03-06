import { describe, expect } from '@jest/globals'
import { compNum } from './compNum'

let testarr = ['19h8cn', '9o4hcn', '13nv93', '47v2b', '2398n6']
describe('compose magic number test', () => {
  test('test', () => {
    expect(compNum(testarr)).toStrictEqual([18, 94, 13, 42, 26])
  })
})
