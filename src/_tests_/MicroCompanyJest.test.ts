import MicroCompany from "../model/MicroCompany";

const microCompany: MicroCompany = new MicroCompany("Gustavo", "5165165", 1000, 10000);

test("teste de lucro", () => {
    microCompany.calculateProfitOrLoss();
    expect(microCompany.getAcumProfit()).toBe(9000);
});