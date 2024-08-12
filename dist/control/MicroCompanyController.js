"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const MicroCompany_1 = __importDefault(require("../model/MicroCompany"));
class MicroCompanyController {
    constructor() {
        this.datacenter = new Datacenter_1.default(); // datacenter passado como parametro para o construtor
    }
    addMicroCompany(name, cnpj, expenses, revenues) {
        let microCompany = new MicroCompany_1.default(name, cnpj, expenses, revenues);
        this.datacenter.addNewMicroCompany(microCompany);
        return microCompany;
    }
    getNewMicroCompany(name, cnpj, expenses, revenues) {
        return new MicroCompany_1.default(name, cnpj, expenses, revenues);
    }
    listAllFoods() {
        console.log(this.datacenter.microCompanies);
    }
    findCompany(nomeBuscado) {
        return this.datacenter.findCompanyByName(nomeBuscado);
    }
}
exports.default = MicroCompanyController;
