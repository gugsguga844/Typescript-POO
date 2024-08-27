"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jspdf_1 = __importDefault(require("jspdf"));
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const MicroCompany_1 = __importDefault(require("../model/MicroCompany"));
class MicroCompanyController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    addMicroCompany(name, cnpj, expenses, revenues) {
        let microCompany = new MicroCompany_1.default(name, cnpj, expenses, revenues);
        this.datacenter.addNewMicroCompany(microCompany);
        return microCompany;
    }
    getNewMicroCompany(name, cnpj, expenses, revenues) {
        return new MicroCompany_1.default(name, cnpj, expenses, revenues);
    }
    listAllMicroCompanies() {
        console.log(this.datacenter.microCompanies);
    }
    findCompany(identifier, isCnpj = false) {
        return this.datacenter.findMicroCompany(identifier, isCnpj);
    }
    generatePdf() {
        const doc = new jspdf_1.default();
        let y = 10;
        doc.setFontSize(18);
        doc.text("Relatório de Empresas", 10, y);
        y += 10;
        doc.setFontSize(14);
        doc.text("Micro Companies:", 10, y);
        y += 10;
        this.datacenter.microCompanies.forEach((company) => {
            doc.setFontSize(12);
            doc.text(`Nome: ${company.getName()}`, 10, y);
            doc.text(`CNPJ: ${company.getCnpj()}`, 10, y + 10);
            doc.text(`Receitas: ${company.getTotalRevenues()}`, 10, y + 20);
            doc.text(`Despesas: ${company.getTotalExpenses()}`, 10, y + 30);
            doc.text(`Lucro Acumulado: ${company.getAcumProfit()}`, 10, y + 40);
            doc.text(`Prejuízo Acumulado: ${company.getAcumLoss()}`, 10, y + 50);
            y += 60;
        });
        doc.setFontSize(14);
        doc.text("Normal Companies:", 10, y);
        y += 10;
        this.datacenter.normalCompanies.forEach((company) => {
            doc.setFontSize(12);
            doc.text(`Nome: ${company.getName()}`, 10, y);
            doc.text(`CNPJ: ${company.getCnpj()}`, 10, y + 10);
            doc.text(`Receitas: ${company.getTotalRevenues()}`, 10, y + 20);
            doc.text(`Despesas: ${company.getTotalExpenses()}`, 10, y + 30);
            doc.text(`Lucro Acumulado: ${company.getAcumProfit()}`, 10, y + 40);
            doc.text(`Prejuízo Acumulado: ${company.getAcumLoss()}`, 10, y + 50);
            y += 60;
        });
        doc.save("Relatorio_Empresas.pdf");
    }
}
exports.default = MicroCompanyController;
