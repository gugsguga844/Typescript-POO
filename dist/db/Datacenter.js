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
    addNewNormalCompany(normalCompany) {
        normalCompany.setId(this.nextId); // Atribui o próximo ID
        this.nextId++;
        this.normalCompanies.push(normalCompany);
    }
    findMicroCompany(identifier, isCnpj = false) {
        if (isCnpj) {
            return this.microCompanies.find(company => company.getCnpj() === identifier);
        }
        else {
            return this.microCompanies.find(company => company.getName() === identifier);
        }
    }
    findNormalCompanyByName(nomeBuscado) {
        return this.normalCompanies.find(company => company.getName() === nomeBuscado);
    }
}
exports.default = Datacenter;
