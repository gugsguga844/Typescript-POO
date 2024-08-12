import prompt from 'prompt-sync';

export abstract class Company {
    protected _id: number = 0;
    protected _name: string = '';
    protected _cnpj: string = '';
    protected _totalExpenses: number = 0;
    protected _totalRevenues: number = 0;
    protected _acumLoss: number = 0;
    protected _acumProfit: number = 0;

    constructor(name: string, cnpj: string, expenses: number, revenues: number){
        this.setName(name);
        this.setCnpj(cnpj);
        this.setTotalExpenses(expenses);
        this.setTotalRevenues(revenues); 
        this.setAcumLoss;
        this.setAcumProfit;
    }

    public getId(): number{
        return this._id;
    }
    public setId(id: number): void{
        this._id = id;
    }

    public getName(): string{
        return this._name;
    }
    public setName(name: string): void{
        if(name.length > 2) {
            this._name = name;
        } else {
            throw new Error("Erro");
        }
        
    }

    public getCnpj(): string{
        return this._cnpj;
        }
    public setCnpj(cnpj: string): void{
        this._cnpj = cnpj;
        }

    public getTotalExpenses(): number{
        return this._totalExpenses;
    }
    public setTotalExpenses(totalExpenses: number): void{
        this._totalExpenses = totalExpenses;
    }

    public getTotalRevenues(): number{
        return this._totalRevenues;
    }
    public setTotalRevenues(totalRevenues: number): void{
        this._totalRevenues = totalRevenues;
    }

    public getAcumLoss(): number{
        return this._acumLoss;
    }
    public setAcumLoss(acumLoss: number): void{
        this._acumLoss = acumLoss;
    }

    public getAcumProfit(): number{
        return this._acumProfit;
    }
    public setAcumProfit(acumProfit: number): void{
        this._acumProfit = acumProfit;
    }

    public abstract calculateProfitOrLoss(): void;
}

