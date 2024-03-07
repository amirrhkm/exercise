import { readfile } from './readfile'
import { compNum } from './compNum'
import { sumNum } from './sumNum'

async function run() {
  const lineCont = await readfile('magic_num_2.txt')
  const lineNum = compNum(lineCont)
  const sum = sumNum(lineNum)

  console.log(lineCont)
  console.log(lineNum)
  console.log(sum)
}

run()
