"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("./Company");
/* matriz */
class MicroCompany extends Company_1.Company {
    constructor(name, cnpj, expenses, revenues) {
        super(name, cnpj, expenses, revenues);
        this.profitLimit = 36000;
        this.calculateProfitOrLoss();
    }
    calculateProfitOrLoss() {
        const revenues = this.getTotalRevenues();
        const expenses = this.getTotalExpenses();
        const totalProfit = revenues - expenses;
        if (totalProfit > this.profitLimit) {
            throw new Error("erro");
        }
        else if (totalProfit > 0) {
            this.setAcumProfit(totalProfit);
        }
        else {
            this.setAcumLoss(Math.abs(totalProfit));
        }
    }
}
exports.default = MicroCompany;
