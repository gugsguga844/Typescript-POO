"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MicroCompany_1 = __importDefault(require("../model/MicroCompany"));
const microCompany = new MicroCompany_1.default("Gustavo", "5165165", 1000, 10000);
test("teste de lucro", () => {
    microCompany.calculateProfitOrLoss();
    expect(microCompany.getAcumProfit()).toBe(9000);
});
