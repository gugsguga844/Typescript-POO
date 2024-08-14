import { Company } from "./Company";

/* filial */

export default class NormalCompany extends Company{
    private contributionTax: number = 1.1;

    constructor(name: string, cnpj: string, expenses: number, revenues: number) {
        super(name, cnpj, expenses, revenues)
    }

    public calculateProfitOrLoss(): void {
        const revenues = this.getTotalRevenues();
        const expenses = this.getTotalExpenses();
        const totalProfit = revenues - expenses;

        if (totalProfit > 0) {
            totalProfit * this.contributionTax;
            this.setAcumProfit(totalProfit);
        } else {
            this.setAcumLoss(Math.abs(totalProfit))
        }
    }
}