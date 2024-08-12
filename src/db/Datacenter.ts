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

    public findCompanyByName(nomeBuscado: string): MicroCompany | undefined {
        return this.microCompanies.find(company => company.getName() === nomeBuscado);
    }

}