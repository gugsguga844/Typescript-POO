import NormalCompany from "../NormalCompany";
import { Investor } from "./Investor";

export default class BasicInvestor implements Investor {
    public investorName: string;
    public netWorth: number;
    
    constructor (name: string, netWorth: number){
        this.investorName = name;
        this.netWorth = netWorth
    }

    public invest(normalCompany: NormalCompany, amount: number): void {
        normalCompany.receiveInvestment(amount);
    }
}