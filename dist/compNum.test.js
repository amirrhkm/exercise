'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const globals_1 = require('@jest/globals')
const compNum_1 = require('./compNum')
let testarr = ['19h8cn', '9o4hcn', '13nv93', '47v2b', '2398n6']
;(0, globals_1.describe)('compose magic number test', () => {
  test('test', () => {
    ;(0, globals_1.expect)((0, compNum_1.compNum)(testarr)).toStrictEqual([
      18, 94, 13, 42, 26,
    ])
  })
})
//# sourceMappingURL=compNum.test.js.map
