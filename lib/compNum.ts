/**
 * Extract and combine numbers from each line of a string array.
 *
 * @param lineCont - An array of strings representing lines of text.
 * @returns An array of numbers, each obtained by combining the first and last digits from each line.
 */
export function compNum(lineCont: string[]) {
  /**
   * A string to store the combined digits from each line.
   * @type {string}
   */
  let combined = ''
  /**
   * An array to store the extracted numbers from each line.
   * @type {number[]}
   */
  const lineNum: any[] = []

  // Iterate through each line in the input array.
  for (let i of lineCont) {
    /**
     * An array to store the individual digits from the current line.
     * @type {string[]}
     */
    let num = []

    /**
     * Counter to keep track of the number of digits encountered.
     * @type {number}
     */
    let count = 0

    // Iterate through each character in the current line.
    for (let j of i) {
      // Check if the character is a digit.
      if (j >= '0' && j <= '9') {
        // Store the digit in the 'num' array.
        num[count] = j
        count++
      }

      // Combine the first and last digit to form a string.
      combined = num[0] + num[num.length - 1]
    }

     // Convert the combined string to a number and add it to the 'lineNum' array.
    lineNum.push(Number(combined))
  }

  // Return the array of extracted numbers.
  return lineNum
}
