"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicController_1 = __importDefault(require("./control/BasicController"));
let startController = new BasicController_1.default();
startController.startSystem();
