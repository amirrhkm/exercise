import {describe, expect} from "@jest/globals"
import {sumNum} from "./sumNum";

let testarr = [1,2,3,4,5]
describe("sum function test", () => {
    test('test', () => {
        expect(sumNum(testarr)).toBe(15);
    })
})