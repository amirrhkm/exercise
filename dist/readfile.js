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
exports.readfile = void 0
const promises_1 = require('node:fs/promises')
const node_path_1 = require('node:path')
function readfile(filename) {
  return __awaiter(this, void 0, void 0, function* () {
    let contLine = []
    const filePath = (0, node_path_1.resolve)('./inputFile', filename)
    const cont = yield (0, promises_1.readFile)(filePath, 'utf8')
    cont.split(/\r\n/).forEach(line => {
      contLine.push(line)
    })
    return contLine
  })
}
exports.readfile = readfile
//# sourceMappingURL=readfile.js.map
