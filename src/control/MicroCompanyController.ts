import jsPDF from "jspdf";
import Datacenter from "../db/Datacenter";
import MicroCompany from "../model/MicroCompany";
import NormalCompany from "../model/NormalCompany";

export default class MicroCompanyController{
    private datacenter: Datacenter = new Datacenter(); 

    public addMicroCompany(name: string, cnpj: string, expenses: number, revenues: number): MicroCompany {
        let microCompany = new MicroCompany(name, cnpj, expenses, revenues);
        this.datacenter.addNewMicroCompany(microCompany);
        return microCompany;
    }

    public getNewMicroCompany(name: string, cnpj: string, expenses: number, revenues: number): MicroCompany{
        return new MicroCompany(name, cnpj, expenses, revenues);
    }

    public listAllMicroCompanies(): void{
        console.log(this.datacenter.microCompanies);
    }

    public findCompany(identifier: string, isCnpj: boolean = false): MicroCompany | NormalCompany | undefined {
        return this.datacenter.findMicroCompany(identifier, isCnpj);
    }

    public generatePdf(): void {
        const doc = new jsPDF();
        let y = 10;

        doc.setFontSize(18);
        doc.text("Relatório de Empresas", 10, y);
        y += 10;

        doc.setFontSize(14);
        doc.text("Micro Companies:", 10, y);
        y += 10;

        this.datacenter.microCompanies.forEach((company) => {
            doc.setFontSize(12);
            doc.text(`Nome: ${company.getName()}`, 10, y);
            doc.text(`CNPJ: ${company.getCnpj()}`, 10, y + 10);
            doc.text(`Receitas: ${company.getTotalRevenues()}`, 10, y + 20);
            doc.text(`Despesas: ${company.getTotalExpenses()}`, 10, y + 30);
            doc.text(`Lucro Acumulado: ${company.getAcumProfit()}`, 10, y + 40);
            doc.text(`Prejuízo Acumulado: ${company.getAcumLoss()}`, 10, y + 50);
            y += 60;
        });

        doc.setFontSize(14);
        doc.text("Normal Companies:", 10, y);
        y += 10;

        this.datacenter.normalCompanies.forEach((company) => {
            doc.setFontSize(12);
            doc.text(`Nome: ${company.getName()}`, 10, y);
            doc.text(`CNPJ: ${company.getCnpj()}`, 10, y + 10);
            doc.text(`Receitas: ${company.getTotalRevenues()}`, 10, y + 20);
            doc.text(`Despesas: ${company.getTotalExpenses()}`, 10, y + 30);
            doc.text(`Lucro Acumulado: ${company.getAcumProfit()}`, 10, y + 40);
            doc.text(`Prejuízo Acumulado: ${company.getAcumLoss()}`, 10, y + 50);
            y += 60;
        });

        doc.save("Relatorio_Empresas.pdf");
    }
}