import promptSync from "prompt-sync";
import Datacenter from "../db/Datacenter";
import MicroCompanyController from "../control/MicroCompanyController";
import NormalCompanyController from "../control/NormalCompanyController";

export default class Register {
    private prompt = promptSync();

    private microCompanyController: MicroCompanyController;
    private normalCompanyController: NormalCompanyController;
    
    constructor (microCompanyController: MicroCompanyController, normalCompanyController: NormalCompanyController) {
        this.microCompanyController = microCompanyController;
        this.normalCompanyController = normalCompanyController;
    }
    // get instance

    public registerCompany(): void{  
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: "); // talvez criar um metodo so pro prompt?
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));

        let microCompany = this.microCompanyController.addMicroCompany(name, cnpj, revenues, expenses);
        console.log(this.microCompanyController.listAllFoods());
        console.log("Total de Lucro: ", microCompany.getAcumProfit());
    }

    public registerNormalCompany(): void {
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: ");
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));

        let normalCompany = this.normalCompanyController.addNormalCompany(name, cnpj, revenues, expenses);
        console.log(this.normalCompanyController.listAllNormalCompanies());
        console.log("Total de Lucro: ", normalCompany.getAcumProfit());
    }

    public findCompanyByName(): void{
        const nomeBuscado = this.prompt("Qual o nome da empresa? ");
        const foundCompany = this.microCompanyController.findCompany(nomeBuscado);
        console.log(foundCompany);
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
}