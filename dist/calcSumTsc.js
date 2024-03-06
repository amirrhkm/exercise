"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const mainTsc_1 = require("./mainTsc");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (const i in mainTsc_1.path) {
                let combined = "";
                let sum = 0;
                const filePath = (0, node_path_1.resolve)(mainTsc_1.pathToDir, mainTsc_1.path[i]);
                const contents = yield (0, promises_1.readFile)(filePath, 'utf8');
                contents.split(/\n/).forEach(line => {
                    combined = conNum(line);
                    sum = calcSum(sum, Number(combined));
                });
                console.log(`${mainTsc_1.path[i]} : ${sum}`);
            }
        }
        catch (err) {
            return console.error(err.message);
        }
    });
}
exports.run = run;
function calcSum(sum, num) {
    return sum + num;
}
function conNum(line) {
    let digit = [];
    let count = 0;
    for (const single of line) {
        if (single >= '0' && single <= '9') {
            digit[count] = single;
            count++;
        }
    }
    return digit[0] + digit[digit.length - 1];
}
//# sourceMappingURL=calcSumTsc.js.map