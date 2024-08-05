import MicroCompany from "../model/MicroCompany";
import NormalCompany from "../model/NormalCompany";

export default class Datacenter{
    public microCompanies: MicroCompany[] = [];
    public normalCompanies: NormalCompany[] = [];

    public addNewMicroCompany(microCompany: MicroCompany): void {
        this.microCompanies.push(microCompany);
    }
}