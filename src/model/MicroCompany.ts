import Company from "./Company";

/* matriz */

export default class MicroCompany extends Company{
    private profitLimit: number = 360000;
    
    constructor(name: string, cnpj: string) {
        super(name, cnpj)
    }

    
}