import Company from "./Company";

/* matriz */

export default class MainOffice extends Company{
    private _cnpjMatriz: number = 0;

    public getCnpjMatriz(): number{
        return this._cnpjMatriz;
    }
    public setCnpjMatriz(cnpjMatriz: number): void{
        this._cnpjMatriz = cnpjMatriz;
    }
}