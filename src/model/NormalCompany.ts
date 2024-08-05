import Company from "./Company";

/* filial */

export default class NormalCompany extends Company{
    private contributionTax: number = 0;

    constructor(name: string, cnpj: string) {
        super(name, cnpj)
    }

}