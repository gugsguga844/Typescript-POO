"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor() {
        this._id = 0;
        this._name = '';
        this._cnpj = '';
        this._totalExpenses = 0;
        this._totalRevenues = 0;
        this._acumLoss = 0;
        this._acumProfit = 0;
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
        this._name = name;
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
