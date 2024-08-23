import NormalCompany from "../NormalCompany";

export interface Investor {
    investorName: string;
    netWorth: number;
    invest(normalCompany: NormalCompany, amount: number): void;
}