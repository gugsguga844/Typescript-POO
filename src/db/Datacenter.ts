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

    public findMicroCompany(identifier: string, isCnpj: boolean = false): MicroCompany | undefined {
        if (isCnpj) {
            return this.microCompanies.find(company => company.getCnpj() === identifier);
        } else {
            return this.microCompanies.find(company => company.getName() === identifier);
        }
    }

    public findNormalCompanyByName(nomeBuscado: string): NormalCompany | MicroCompany | undefined {
        return this.normalCompanies.find(company => company.getName() === nomeBuscado);
    }

}