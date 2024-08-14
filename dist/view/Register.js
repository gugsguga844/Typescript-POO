"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Register {
    constructor(microCompanyController, normalCompanyController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.microCompanyController = microCompanyController;
        this.normalCompanyController = normalCompanyController;
    }
    // get instance
    registerCompany() {
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: "); // talvez criar um metodo so pro prompt?
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));
        let microCompany = this.microCompanyController.addMicroCompany(name, cnpj, revenues, expenses);
        console.log(this.microCompanyController.listAllFoods());
        console.log("Total de Lucro: ", microCompany.getAcumProfit());
    }
    registerNormalCompany() {
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: ");
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));
        let normalCompany = this.normalCompanyController.addNormalCompany(name, cnpj, revenues, expenses);
        console.log(this.normalCompanyController.listAllNormalCompanies());
        console.log("Total de Lucro: ", normalCompany.getAcumProfit());
    }
    findCompanyByName() {
        const nomeBuscado = this.prompt("Qual o nome da empresa? ");
        const foundCompany = this.microCompanyController.findCompany(nomeBuscado);
        console.log(foundCompany);
    }
    alterCompany() {
        const thisCompany = this.prompt("Qual empresa deseja alterar? ");
        const companyToChange = this.microCompanyController.findCompany(thisCompany);
        if (companyToChange) {
            let choose = 0;
            choose = parseInt(this.prompt("O que deseja alterar? "));
            let wichData;
            (function (wichData) {
                wichData[wichData["NAME"] = 1] = "NAME";
                wichData[wichData["CNPJ"] = 2] = "CNPJ";
                wichData[wichData["REVENUES"] = 3] = "REVENUES";
                wichData[wichData["EXPENSES"] = 4] = "EXPENSES";
            })(wichData || (wichData = {}));
            switch (choose) {
                case wichData.NAME:
                    let newName = this.prompt("Novo nome: ");
                    companyToChange.setName(newName);
                    break;
                case wichData.REVENUES:
                    let newRevenue = parseInt(this.prompt("Receita Atualizada: "));
                    companyToChange.setTotalRevenues(newRevenue);
                    companyToChange.calculateProfitOrLoss();
                    break;
            }
        }
    }
}
exports.default = Register;
