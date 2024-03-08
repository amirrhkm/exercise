import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export async function readfile(filename: string) {
  let contLine: string[] = []
  const filePath = resolve('./inputFile', filename)
  const cont = await readFile(filePath, 'utf8')
  cont.split("\r\n").forEach(line => {
    contLine.push(line)
  })
  return contLine
}
