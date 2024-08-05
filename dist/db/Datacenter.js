"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Datacenter {
    constructor() {
        this.microCompanies = [];
        this.normalCompanies = [];
    }
    addNewMicroCompany(microCompany) {
        this.microCompanies.push(microCompany);
    }
}
exports.default = Datacenter;
