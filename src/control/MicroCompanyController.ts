import Datacenter from "../db/Datacenter";
import MicroCompany from "../model/MicroCompany";
import NormalCompany from "../model/NormalCompany";

export default class MicroCompanyController{
    private datacenter: Datacenter = new Datacenter(); 

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

    public findCompany(nomeBuscado: string): MicroCompany | NormalCompany | undefined {
        return this.datacenter.findCompanyByName(nomeBuscado);
    }
}