"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
const MicroCompanyController_1 = __importDefault(require("./MicroCompanyController"));
const NormalCompanyController_1 = __importDefault(require("./NormalCompanyController"));
const Register_1 = __importDefault(require("../view/Register"));
class BasicController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
        this.microCompanyController = new MicroCompanyController_1.default();
        this.normalCompanyController = new NormalCompanyController_1.default();
        this.register = new Register_1.default(this.microCompanyController, this.normalCompanyController);
        this.mainScreen = new MainScreen_1.default(this.microCompanyController, this.normalCompanyController, this.register);
    }
    startSystem() {
        this.mainScreen.getFirstScreen();
    }
}
exports.default = BasicController;
