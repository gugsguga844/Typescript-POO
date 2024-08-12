import Datacenter from "../db/Datacenter";
import MainScreen from "../view/MainScreen";
import MicroCompanyController from "./MicroCompanyController";

export default class BasicController{

    private mainScreen: MainScreen = new MainScreen();
    
    public startSystem():void {
       this.mainScreen.getFirstScreen();
    }

}