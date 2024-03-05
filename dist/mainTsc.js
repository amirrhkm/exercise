"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.pathToDir = void 0;
const promises_1 = require("node:fs/promises");
exports.pathToDir = './inputFile';
exports.path = (0, promises_1.readdir)(exports.pathToDir);
const calcSumTsc_1 = require("./calcSumTsc");
(0, calcSumTsc_1.dataDisplay)();
//# sourceMappingURL=mainTsc.js.map