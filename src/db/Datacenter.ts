import MicroCompany from "../model/MicroCompany";
import NormalCompany from "../model/NormalCompany";

export default class Datacenter{
    public microCompanies: MicroCompany[] = [];
    public normalCompanies: NormalCompany[] = [];
    private nextId: number = 1;

    public addNewMicroCompany(microCompany: MicroCompany): void {
        microCompany.setId(this.nextId); // Atribui o próximo ID
        this.nextId++;
        this.microCompanies.push(microCompany);
    }

    public addNewNormalCompany(normalCompany: NormalCompany): void {
        normalCompany.setId(this.nextId); // Atribui o próximo ID
        this.nextId++;
        this.normalCompanies.push(normalCompany);
    }

    public findMicroCompanyByName(nomeBuscado: string): MicroCompany | NormalCompany | undefined {
        return this.microCompanies.find(company => company.getName() === nomeBuscado);
    }

    public findNormalCompanyByName(nomeBuscado: string): MicroCompany | NormalCompany | undefined {
        return this.microCompanies.find(company => company.getName() === nomeBuscado);
    }

}