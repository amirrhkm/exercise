import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export async function readfile(filename: string) {
  let contLine = []
  const filePath = resolve('./inputFile', filename)
  const cont = await readFile(filePath, 'utf8')
  const line = cont.split('\r\n')
  return cont
}
