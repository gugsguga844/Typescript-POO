"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NormalCompany_1 = __importDefault(require("../model/NormalCompany"));
const normalCompany = new NormalCompany_1.default("Gustavo", "5165165", 1000, 11000);
test("teste de lucro", () => {
    normalCompany.calculateProfitOrLoss();
    expect(normalCompany.getAcumProfit()).toBe(9000);
});
