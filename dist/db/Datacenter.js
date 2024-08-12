"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Datacenter {
    constructor() {
        this.microCompanies = [];
        this.normalCompanies = [];
        this.nextId = 1;
    }
    addNewMicroCompany(microCompany) {
        microCompany.setId(this.nextId); // Atribui o próximo ID
        this.nextId++;
        this.microCompanies.push(microCompany);
    }
    findCompanyByName(nomeBuscado) {
        return this.microCompanies.find(company => company.getName() === nomeBuscado);
    }
}
exports.default = Datacenter;
