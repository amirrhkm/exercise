import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToDir, path } from './mainEs6.js'

export async function dataDisplay() {
  try {
    for (const i in path) {
      let combined = 0
      let sum = 0
      const filePath = resolve(`${pathToDir}/${path[i]}`)
      const contents = await readFile(filePath, 'utf8')
      contents.split(/\n/).forEach(line => {
        let count = 0
        let digit = []
        for (const single of line) {
          if (single >= '0' && single <= '9') {
            digit[count] = single
            count++
          }
        }
        combined = digit[0] + digit[digit.length - 1]
        sum = sum + Number(combined)
      })
      console.log(`${path[i]} : ${sum}`)
    }
  } catch (err) {
    console.error(err.message)
  }
}
