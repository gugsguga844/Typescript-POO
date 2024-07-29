"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const MainOffice_1 = __importDefault(require("../model/MainOffice"));
class MainOfficeController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    getNewMain() {
        return new MainOffice_1.default();
    }
    registerNewMain(main) {
        this.datacenter.addNewMainOffice(main);
    }
}
exports.default = MainOfficeController;
