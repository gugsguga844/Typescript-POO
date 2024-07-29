export default class Associate {
    private id: number = 0;
    private associateName: string = "";
    private shares: number = 0;

    public getAssociateId(): number{
        return this.id;
    }
    
    public setAssociateId(associateId:number){
        this.id = associateId;
    }

    public getAssociateName(): string{
        return this.associateName;
    }

    public setAssociateName(associateName: string){
        this.associateName = associateName;
    }

    public getShares(): number{
        return this.shares;
    }
    public setShares(shares: number){
        this.shares = shares;
    }
}