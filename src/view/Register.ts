import promptSync from "prompt-sync";
import Datacenter from "../db/Datacenter";
import MicroCompanyController from "../control/MicroCompanyController";
import NormalCompanyController from "../control/NormalCompanyController";
import BasicInvestor from "../model/Investment/BasicInvestor";
import NormalCompany from "../model/NormalCompany";

export default class Register {
    private prompt = promptSync();

    private microCompanyController: MicroCompanyController;
    private normalCompanyController: NormalCompanyController;
    
    constructor (microCompanyController: MicroCompanyController, normalCompanyController: NormalCompanyController) {
        this.microCompanyController = microCompanyController;
        this.normalCompanyController = normalCompanyController;
    }
    // get instance

    public registerMicroCompany(): void{  
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: "); // talvez criar um metodo so pro prompt?
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));

        let microCompany = this.microCompanyController.addMicroCompany(name, cnpj, revenues, expenses);
        console.log(this.microCompanyController.listAllMicroCompanies());

        if (microCompany.getAcumProfit() >= 0) {
            console.log("Lucro auferido no período: ", microCompany.getAcumProfit());
        } else {
            console.log("Prejuízo auferido no período: ", microCompany.getAcumLoss());
        }
    }

    public registerNormalCompany(): void {
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: ");
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));

        let normalCompany = this.normalCompanyController.addNormalCompany(name, cnpj, revenues, expenses);
        console.log(this.normalCompanyController.listAllNormalCompanies());

        if (normalCompany.getAcumProfit() >= 0) {
            console.log("Total de Lucro: ", normalCompany.getAcumProfit());
        } else {
            console.log("Prejuízo auferido no período: ", normalCompany.getAcumLoss());
        }
    }

    public findCompanyByName(): void{
        const nomeBuscado = this.prompt("Qual o nome da empresa? ");
        const foundMicroCompany = this.microCompanyController.findCompany(nomeBuscado);
        const foundNormalCompany = this.normalCompanyController.findCompany(nomeBuscado);

        if (foundMicroCompany) {
            console.log(foundMicroCompany);
        } else if (foundNormalCompany) {
            console.log(foundNormalCompany);
        }
        
    }

    public alterCompany(): void {
        const thisCompany = this.prompt("Qual empresa deseja alterar? ");
        const companyToChange = this.microCompanyController.findCompany(thisCompany);

        if (companyToChange) {
            let choose: number = 0;
            choose = parseInt(this.prompt("O que deseja alterar? "));

            enum wichData {
                NAME = 1,
                CNPJ,
                REVENUES,
                EXPENSES,
            }

            switch (choose) {
                case wichData.NAME:
                    let newName: string = this.prompt("Novo nome: ");
                    companyToChange.setName(newName);
                break;
                case wichData.REVENUES:
                    let newRevenue: number = parseInt(this.prompt("Receita Atualizada: "));
                    companyToChange.setTotalRevenues(newRevenue)
                    companyToChange.calculateProfitOrLoss();
                break;
            }
        }
    }

    public addInvestor(): void {
        const thisCompany = this.prompt("Qual empresa deseja atribuir investidor? ");
        const companyToChange = this.normalCompanyController.findCompany(thisCompany);

        if (companyToChange) {
            const investorName = this.prompt("Nome do investidor: ");
            const investorNetWorth = parseFloat(this.prompt("Qual o patrimônio do investidor? "));
            let newInvestor = this.normalCompanyController.createInvestor(investorName, investorNetWorth);

            const amountToInvest = parseFloat(this.prompt("Quanto deseja investir: "));
            
            if (amountToInvest > newInvestor.netWorth) {
                console.log("O investidor não tem patrimônio suficiente.");
            } else {
                newInvestor.invest(companyToChange as NormalCompany, amountToInvest); // Faz o investimento
            }
        } else {
            console.log("Empresa não encontrada.");
        }
    }
}