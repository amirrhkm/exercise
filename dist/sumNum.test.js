"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const sumNum_1 = require("./sumNum");
let testarr = [1, 2, 3, 4, 5];
(0, globals_1.describe)('sum function test', () => {
    test('test', () => {
        (0, globals_1.expect)((0, sumNum_1.sumNum)(testarr)).toBe(15);
    });
});
//# sourceMappingURL=sumNum.test.js.map