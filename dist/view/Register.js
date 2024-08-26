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
    registerMicroCompany() {
        try {
            const name = this.prompt("Nome: ");
            const cnpj = this.prompt("CNPJ: "); // talvez criar um metodo so pro prompt?
            const revenues = parseInt(this.prompt("Despesas: "));
            const expenses = parseInt(this.prompt("Receitas: "));
            let microCompany = this.microCompanyController.addMicroCompany(name, cnpj, revenues, expenses);
            console.log(this.microCompanyController.listAllMicroCompanies());
            if (microCompany.getAcumProfit() >= 0) {
                console.log("Lucro auferido no período: ", microCompany.getAcumProfit());
            }
            else {
                console.log("Prejuízo auferido no período: ", microCompany.getAcumLoss());
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Erro ao cadastrar empresa:", error.message);
            }
            else {
                console.error("Erro desconhecido:", error);
            }
        }
    }
    registerNormalCompany() {
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: ");
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));
        let normalCompany = this.normalCompanyController.addNormalCompany(name, cnpj, revenues, expenses);
        console.log(this.normalCompanyController.listAllNormalCompanies());
        if (normalCompany.getAcumProfit() >= 0) {
            console.log("Total de Lucro: ", normalCompany.getAcumProfit());
        }
        else {
            console.log("Prejuízo auferido no período: ", normalCompany.getAcumLoss());
        }
    }
    findMicroCompany() {
        const nameOrCnpj = parseInt(this.prompt("Deseja buscar pelo nome ou pelo CNPJ?\n1. Nome\n2. CNPJ:\n"));
        switch (nameOrCnpj) {
            case 1:
                const name = this.prompt("Digite o nome da empresa: ");
                const foundByName = this.microCompanyController.findCompany(name);
                if (foundByName) {
                    console.log(foundByName);
                }
                else {
                    console.log("Empresa não encontrada.");
                }
                break;
            case 2:
                const cnpj = this.prompt("Digite o CNPJ da empresa: ");
                const foundByCnpj = this.microCompanyController.findCompany(cnpj, true);
                if (foundByCnpj) {
                    console.log(foundByCnpj);
                }
                else {
                    console.log("Empresa não encontrada.");
                }
                break;
        }
    }
    findCompanyByName() {
        const nomeBuscado = this.prompt("Qual o nome da empresa? ");
        const foundNormalCompany = this.normalCompanyController.findCompany(nomeBuscado);
        if (foundNormalCompany) {
            console.log(foundNormalCompany);
        }
        else {
            throw new Error("Empresa não encontrada");
        }
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
    addInvestor() {
        const thisCompany = this.prompt("Qual empresa deseja atribuir investidor? ");
        const companyToChange = this.normalCompanyController.findCompany(thisCompany);
        if (companyToChange) {
            const investorName = this.prompt("Nome do investidor: ");
            const investorNetWorth = parseFloat(this.prompt("Qual o patrimônio do investidor? "));
            let newInvestor = this.normalCompanyController.createInvestor(investorName, investorNetWorth);
            const amountToInvest = parseFloat(this.prompt("Quanto deseja investir: "));
            if (amountToInvest > newInvestor.netWorth) {
                console.log("O investidor não tem patrimônio suficiente.");
            }
            else {
                newInvestor.invest(companyToChange, amountToInvest); // Faz o investimento
            }
        }
        else {
            console.log("Empresa não encontrada.");
        }
    }
    deleteCompany() {
        const thisCompany = this.prompt("Qual empresa deseja atribuir investidor? ");
        const companyToChange = this.normalCompanyController.findCompany(thisCompany);
        if (companyToChange) {
            const investorName = this.prompt("Nome do investidor: ");
            const investorNetWorth = parseFloat(this.prompt("Qual o patrimônio do investidor? "));
            let newInvestor = this.normalCompanyController.createInvestor(investorName, investorNetWorth);
            const amountToInvest = parseFloat(this.prompt("Quanto deseja investir: "));
            if (amountToInvest > newInvestor.netWorth) {
                console.log("O investidor não tem patrimônio suficiente.");
            }
            else {
                newInvestor.invest(companyToChange, amountToInvest); // Faz o investimento
            }
        }
        else {
            console.log("Empresa não encontrada.");
        }
    }
}
exports.default = Register;
