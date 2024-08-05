"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("./Company"));
/* matriz */
class MicroCompany extends Company_1.default {
    constructor(name, cnpj) {
        super(name, cnpj);
        this.profitLimit = 360000;
    }
}
exports.default = MicroCompany;
