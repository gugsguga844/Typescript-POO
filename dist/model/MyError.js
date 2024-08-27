"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyError extends Error {
    constructor(error) {
        super("Lucro de " + error + "acima do permitido");
    }
}
exports.default = MyError;
