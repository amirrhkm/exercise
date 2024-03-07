'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
const globals_1 = require('@jest/globals')
const readfile_1 = require('./readfile')
const mockans = ['abc', 'def', 'hij', 'klm']
const mockfile = 'D:/nodejs.magicnum/inputFile/testnum.txt'
;(0, globals_1.describe)('readfile function test', () => {
  test('test', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      ;(0, globals_1.expect)(yield (0, readfile_1.readfile)(mockfile)).toBe(
        mockans,
      )
    }))
})
//# sourceMappingURL=readfile.test.js.map
