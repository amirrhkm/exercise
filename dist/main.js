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
const readfile_1 = require("./readfile");
const compNum_1 = require("./compNum");
const sumNum_1 = require("./sumNum");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const lineCont = yield (0, readfile_1.readfile)('testnum.txt');
        const lineNum = (0, compNum_1.compNum)(lineCont);
        const sum = (0, sumNum_1.sumNum)(lineNum);
        console.log(lineCont);
        console.log(lineNum);
        console.log(sum);
    });
}
run();
//# sourceMappingURL=main.js.map