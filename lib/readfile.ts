import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

/**
 * Asynchronous function to read a file and return its content as an array of strings.
 *
 * @param filename - The name of the file to read.
 * @returns A Promise that resolves to an array of strings, each representing a line from the file.
 */
export async function readfile(filename: string) {
  /**
   * An array to store the content of each line.
   * @type {string[]}
   */
  let contLine = []

  /**
   * The absolute file path resolved from the 'inputFile' directory and the provided filename.
   * @type {string}
   */
  const filePath = resolve('./inputFile', filename)

  /**
   * Read the entire file content as a string.
   * @type {string}
   */
  const cont = await readFile(filePath, 'utf8')

  /**
   * Split the file content into an array of strings, with each element representing a line.
   * @type {string[]}
   */
  const line = cont.split('\n')

  //return the array of lines
  return line
}
