"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("./Company");
/* filial */
class NormalCompany extends Company_1.Company {
    constructor(name, cnpj, expenses, revenues) {
        super(name, cnpj, expenses, revenues);
        this.contributionTax = 0.9;
        this.calculateProfitOrLoss();
    }
    calculateProfitOrLoss() {
        const revenues = this.getTotalRevenues();
        const expenses = this.getTotalExpenses();
        let totalProfit = revenues - expenses;
        if (totalProfit > 0) {
            totalProfit *= this.contributionTax;
            this.setAcumProfit(totalProfit);
        }
        else {
            this.setAcumLoss(Math.abs(totalProfit));
        }
    }
    receiveInvestment(amount) {
        this._totalRevenues += amount;
    }
}
exports.default = NormalCompany;
