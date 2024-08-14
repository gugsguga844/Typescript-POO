"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("./Company");
/* filial */
class NormalCompany extends Company_1.Company {
    constructor(name, cnpj, expenses, revenues) {
        super(name, cnpj, expenses, revenues);
        this.contributionTax = 1.1;
    }
    calculateProfitOrLoss() {
        const revenues = this.getTotalRevenues();
        const expenses = this.getTotalExpenses();
        const totalProfit = revenues - expenses;
        if (totalProfit > 0) {
            totalProfit * this.contributionTax;
            this.setAcumProfit(totalProfit);
        }
        else {
            this.setAcumLoss(Math.abs(totalProfit));
        }
    }
}
exports.default = NormalCompany;
