import promptSync from "prompt-sync";
import Datacenter from "../db/Datacenter";
import MicroCompanyController from "../control/MicroCompanyController";

export default class Register {
    private prompt = promptSync();
    microCompanyController = new MicroCompanyController();

    public registerCompany(): void{  
        const name = this.prompt("Nome: ");
        const cnpj = this.prompt("CNPJ: ");
        const revenues = parseInt(this.prompt("Despesas: "));
        const expenses = parseInt(this.prompt("Receitas: "));

        let microCompany = this.microCompanyController.addMicroCompany(name, cnpj, revenues, expenses);
        console.log(this.microCompanyController.listAllFoods());
        console.log("Total de Lucro: ", microCompany.getAcumProfit());
    }

    public findCompanyByName(): void{
        const nomeBuscado = this.prompt("Qual o nome da empresa? ");
        const foundCompany = this.microCompanyController.findCompany(nomeBuscado);
        console.log(foundCompany);
    }

    public alterCompany(): void {
        const thisCompamy = this.prompt("Qual empresa deseja alterar? ");
        const companyToChange = this.microCompanyController.findCompany(thisCompamy);

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