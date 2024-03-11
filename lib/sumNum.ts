/**
 * Calculate the sum of numbers in an array.
 *
 * @param lineNum - An array of numbers to calculate the sum.
 * @returns The sum of the numbers in the array.
 */

export function sumNum(lineNum: number[]) {
  /**
   * The sum of the numbers in the array.
   * @type {number}
   */
  let sum = lineNum.reduce((a, b) => a + b)

  // Return the calculated sum.
  return sum
}
