"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const readfile_1 = require("./readfile");
const mockans = ['1', '2', '3', '4', '5'];
const mockfile = 'D:/nodejs.magicnum/inputFile/testnum.txt';
(0, globals_1.describe)('readfile function test', () => {
    test('test', () => {
        (0, globals_1.expect)((0, readfile_1.readfile)(mockfile)).toBe(mockans);
    });
});
//# sourceMappingURL=readfile.test.js.map