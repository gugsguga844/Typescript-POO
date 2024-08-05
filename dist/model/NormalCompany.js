"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("./Company"));
/* filial */
class NormalCompany extends Company_1.default {
    constructor(name, cnpj) {
        super(name, cnpj);
        this.contributionTax = 0;
    }
}
exports.default = NormalCompany;
