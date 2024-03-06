"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.pathToDir = void 0;
const fs_1 = __importDefault(require("fs"));
exports.pathToDir = './inputFile';
exports.path = fs_1.default.readdirSync(exports.pathToDir);
const calcSumTsc_1 = require("./calcSumTsc");
(0, calcSumTsc_1.run)();
//# sourceMappingURL=mainTsc.js.map