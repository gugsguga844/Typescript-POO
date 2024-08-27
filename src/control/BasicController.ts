import Datacenter from "../db/Datacenter";
import MainScreen from "../view/MainScreen";
import MicroCompanyController from "./MicroCompanyController";
import NormalCompanyController from "./NormalCompanyController";
import Register from "../view/Register";

export default class BasicController {

    private datacenter: Datacenter;
    private microCompanyController: MicroCompanyController;
    private normalCompanyController: NormalCompanyController;
    private register: Register;
    private mainScreen: MainScreen;

    constructor() {
        this.datacenter = new Datacenter();
        this.microCompanyController = new MicroCompanyController();
        this.normalCompanyController = new NormalCompanyController();
        this.register = new Register(this.microCompanyController, this.normalCompanyController);
        this.mainScreen = new MainScreen(this.microCompanyController, this.normalCompanyController, this.register);
    }

    public startSystem(): void {
        this.mainScreen.getFirstScreen();
    }
}