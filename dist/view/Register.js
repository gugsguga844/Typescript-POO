"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const MicroCompanyController_1 = __importDefault(require("../control/MicroCompanyController"));
class Register {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
        this.microCompanyController = new MicroCompanyController_1.default();
    }
    registerCompany() {
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: ");
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));
        let microCompany = this.microCompanyController.addMicroCompany(name, cnpj, revenues, expenses);
        console.log(this.microCompanyController.listAllFoods());
        console.log("Total de Lucro: ", microCompany.getAcumProfit());
    }
    findCompanyByName() {
        const nomeBuscado = this.prompt("Qual o nome da empresa? ");
        const foundCompany = this.microCompanyController.findCompany(nomeBuscado);
        console.log(foundCompany);
    }
}
exports.default = Register;
