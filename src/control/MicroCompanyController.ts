import Datacenter from "../db/Datacenter";
import MicroCompany from "../model/MicroCompany";

export default class MicroCompanyController{
    private datacenter: Datacenter; 

    constructor(datacenter: Datacenter) {
        this.datacenter = datacenter;
    }// datacenter passado como parametro para o construtor

    public addMicroCompany(name: string, cnpj: string): MicroCompany {
        let microCompany = new MicroCompany(name, cnpj);
        this.datacenter.addNewMicroCompany(microCompany);
        return microCompany;
    }

    public getNewMicroCompany(name: string, cnpj: string): MicroCompany{
        return new MicroCompany(name, cnpj);
    }

    public listAllFoods(): void{
        console.log(this.datacenter.microCompanies);
    }
}