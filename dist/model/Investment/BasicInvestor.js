"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicInvestor {
    constructor(name, netWorth) {
        this.investorName = name;
        this.netWorth = netWorth;
    }
    invest(normalCompany, amount) {
        normalCompany.receiveInvestment(amount);
    }
}
exports.default = BasicInvestor;
