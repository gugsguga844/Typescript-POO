import NormalCompany from "../model/NormalCompany";

const normalCompany: NormalCompany = new NormalCompany("Gustavo", "5165165", 1000, 11000);

test("teste de lucro", () => {
    normalCompany.calculateProfitOrLoss();
    expect(normalCompany.getAcumProfit()).toBe(9000);
});