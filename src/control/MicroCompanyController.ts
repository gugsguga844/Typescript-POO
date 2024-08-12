import Datacenter from "../db/Datacenter";
import MicroCompany from "../model/MicroCompany";

export default class MicroCompanyController{
    private datacenter: Datacenter = new Datacenter(); // datacenter passado como parametro para o construtor

    public addMicroCompany(name: string, cnpj: string, expenses: number, revenues: number): MicroCompany {
        let microCompany = new MicroCompany(name, cnpj, expenses, revenues);
        this.datacenter.addNewMicroCompany(microCompany);
        return microCompany;
    }

    public getNewMicroCompany(name: string, cnpj: string, expenses: number, revenues: number): MicroCompany{
        return new MicroCompany(name, cnpj, expenses, revenues);
    }

    public listAllFoods(): void{
        console.log(this.datacenter.microCompanies);
    }

    public findCompany(nomeBuscado: string): MicroCompany | undefined {
        return this.datacenter.findCompanyByName(nomeBuscado);
    }
}