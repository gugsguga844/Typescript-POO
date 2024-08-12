import { Company } from "./Company";

/* matriz */

export default class MicroCompany extends Company{
    private profitLimit: number = 36000;
    
    constructor(name: string, cnpj: string, expenses: number, revenues: number) {
        super(name, cnpj, expenses, revenues)
        this.calculateProfitOrLoss();
    }

    public calculateProfitOrLoss(): void {
        const revenues = this.getTotalRevenues();
        const expenses = this.getTotalExpenses();
        const totalProfit = revenues - expenses;

        if (totalProfit > this.profitLimit) {
            throw new Error ("erro");
        } else if (totalProfit > 0) {
            this.setAcumProfit(totalProfit);
        } else {
            this.setAcumLoss(Math.abs(totalProfit))
        }
    }
}