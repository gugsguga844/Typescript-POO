"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MicroCompany_1 = __importDefault(require("../model/MicroCompany"));
class MicroCompanyController {
    constructor(datacenter) {
        this.datacenter = datacenter;
    } // datacenter passado como parametro para o construtor
    addMicroCompany(name, cnpj) {
        let microCompany = new MicroCompany_1.default(name, cnpj);
        this.datacenter.addNewMicroCompany(microCompany);
        return microCompany;
    }
    getNewMicroCompany(name, cnpj) {
        return new MicroCompany_1.default(name, cnpj);
    }
    listAllFoods() {
        console.log(this.datacenter.microCompanies);
    }
}
exports.default = MicroCompanyController;
