"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("./Company");
/* filial */
class NormalCompany extends Company_1.Company {
    constructor(name, cnpj, expenses, revenues) {
        super(name, cnpj, expenses, revenues);
        this.contributionTax = 0;
    }
    calculateProfitOrLoss() {
    }
}
exports.default = NormalCompany;
