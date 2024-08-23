"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const BasicInvestor_1 = __importDefault(require("../model/Investment/BasicInvestor"));
const NormalCompany_1 = __importDefault(require("../model/NormalCompany"));
class NormalCompanyController {
    constructor() {
        this.datacenter = new Datacenter_1.default(); // datacenter passado como parametro para o construtor
    }
    addNormalCompany(name, cnpj, expenses, revenues) {
        let normalCompany = new NormalCompany_1.default(name, cnpj, expenses, revenues);
        this.datacenter.addNewNormalCompany(normalCompany);
        return normalCompany;
    }
    getNewNormalCompany(name, cnpj, expenses, revenues) {
        return new NormalCompany_1.default(name, cnpj, expenses, revenues);
    }
    listAllNormalCompanies() {
        console.log(this.datacenter.normalCompanies);
    }
    findCompany(nomeBuscado) {
        return this.datacenter.findNormalCompanyByName(nomeBuscado);
    }
    createInvestor(name, netWorth) {
        return new BasicInvestor_1.default(name, netWorth);
    }
}
exports.default = NormalCompanyController;
