import Datacenter from "../db/Datacenter";
import MainOffice from "../model/MainOffice";

export default class MainOfficeController{

    private datacenter: Datacenter = new Datacenter(); 

    public getNewMain(): MainOffice{
        return new MainOffice();
    }

    public registerNewMain(main: MainOffice){
       this.datacenter.addNewMainOffice(main);
    }

}