"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("./Company"));
/* matriz */
class MainOffice extends Company_1.default {
    constructor() {
        super(...arguments);
        this._cnpjMatriz = 0;
    }
    getCnpjMatriz() {
        return this._cnpjMatriz;
    }
    setCnpjMatriz(cnpjMatriz) {
        this._cnpjMatriz = cnpjMatriz;
    }
}
exports.default = MainOffice;
