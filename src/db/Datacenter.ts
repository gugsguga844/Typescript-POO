import Branch from "../model/Branch";
import MainOffice from "../model/MainOffice";

export default class Datacenter{
    public mainOffices: MainOffice[] = [];
    public branches: Branch[] = [];

    public addNewMainOffice(main: MainOffice): void {
        this.mainOffices.push(main);
    }
}