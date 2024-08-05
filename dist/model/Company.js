"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor(name, cnpj) {
        this._id = 0;
        this._name = '';
        this._cnpj = '';
        this._totalExpenses = 0;
        this._totalRevenues = 0;
        this._acumLoss = 0;
        this._acumProfit = 0;
        this.setName(name);
        this.setCnpj(cnpj);
    }
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        if (name.length > 5) {
            this._name = name;
        }
        else {
            throw new Error("Erro");
        }
    }
    getCnpj() {
        return this._cnpj;
    }
    setCnpj(cnpj) {
        this._cnpj = cnpj;
    }
    getTotalExpenses() {
        return this._totalExpenses;
    }
    setTotalExpenses(totalExpenses) {
        this._totalExpenses = totalExpenses;
    }
    getTotalRevenues() {
        return this._totalRevenues;
    }
    setTotalRevenues(totalRevenues) {
        this._totalRevenues = totalRevenues;
    }
    getAcumLoss() {
        return this._acumLoss;
    }
    setAcumLoss(acumLoss) {
        this._acumLoss = acumLoss;
    }
    getAcumProfit() {
        return this._acumProfit;
    }
    setAcumProfit(acumProfit) {
        this._acumProfit = acumProfit;
    }
}
exports.default = Company;
