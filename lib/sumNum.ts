export function sumNum(lineNum:number[]) {
    let sum = lineNum.reduce((a,b)=> a+b)
    return sum
}