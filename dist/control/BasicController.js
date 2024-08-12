"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class BasicController {
    constructor() {
        this.mainScreen = new MainScreen_1.default();
    }
    startSystem() {
        this.mainScreen.getFirstScreen();
    }
}
exports.default = BasicController;
