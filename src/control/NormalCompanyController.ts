import Datacenter from "../db/Datacenter";
import BasicInvestor from "../model/Investment/BasicInvestor";
import MicroCompany from "../model/MicroCompany";
import NormalCompany from "../model/NormalCompany";

export default class NormalCompanyController{
    private datacenter: Datacenter = new Datacenter(); // datacenter passado como parametro para o construtor

    public addNormalCompany(name: string, cnpj: string, expenses: number, revenues: number): NormalCompany {
        let normalCompany = new NormalCompany(name, cnpj, expenses, revenues);
        this.datacenter.addNewNormalCompany(normalCompany);
        return normalCompany;
    }

    public getNewNormalCompany(name: string, cnpj: string, expenses: number, revenues: number): NormalCompany {
        return new NormalCompany(name, cnpj, expenses, revenues);
    }

    public listAllNormalCompanies(): void{
        console.log(this.datacenter.normalCompanies);
    }

    public findCompany(nomeBuscado: string): NormalCompany | MicroCompany | undefined {
        return this.datacenter.findNormalCompanyByName(nomeBuscado);
    }

    public createInvestor(name: string, netWorth: number): BasicInvestor{
        return new BasicInvestor(name, netWorth)
    }
}