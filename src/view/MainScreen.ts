import promptSync from "prompt-sync";
import { Company } from "../model/Company";
import MicroCompany from "../model/MicroCompany";
import MicroCompanyController from "../control/MicroCompanyController";
import Datacenter from "../db/Datacenter";
import Register from "./Register";
import NormalCompanyController from "../control/NormalCompanyController";

export default class MainScreen{

    private microCompanyController: MicroCompanyController;
    private normalCompanyController: NormalCompanyController;
    private prompt = promptSync();
    private register: Register;

    constructor (microCompanyController: MicroCompanyController, normalCompanyController: NormalCompanyController, register: Register) {
        this.microCompanyController = microCompanyController;
        this.normalCompanyController = normalCompanyController;
        this.register = register;
    }

    public getFirstScreen(): void{
        let option: number = 0;
        let option2: number = 0;

        const microCompanyController = new MicroCompanyController();

        enum companyType{
            MICRO = 1,
            NORMAL = 2
        }

        while (option !== 9) {
            console.log('+ ======== Controle de Empresas ======== +');
            console.log('|                                        |');
            console.log('| 1. Cadastrar Empresa                   |');
            console.log('| 2. Editar Empresa                      |');
            console.log('| 3. Consultar Micro-Empresa             |');
            console.log('| 4. Consultar Empresa Normal            |');
            console.log('| 5. Atribuir Investimento               |');
            console.log('| 6. Listar Empresas                     |');
            console.log('|                                        |');
            console.log('| 9. Sair                                |');
            console.log('|                                        |');
            console.log('+ ====================================== +');

            option = parseInt(this.prompt("O que deseja fazer? "));

            switch (option) {
                case 1:
                    const selectOption = parseInt(this.prompt("Cadastrar Empresa:\n1. MicroEmpresa\n2. Empresa Normal\nQue tipo de empresa deseja cadastrar?\n"));

                    switch (selectOption) {
                        case companyType.MICRO:
                            this.register.registerMicroCompany();
                        break;
                        case companyType.NORMAL:
                            this.register.registerNormalCompany();
                        break;
                    }
                break;
                case 2:
                    this.register.alterCompany();
                break;
                case 3: 
                    this.register.findMicroCompany();
                default:
                break;
                case 4:
                    this.register.findCompanyByName();
                break;
                case 5:
                    this.register.addInvestor();
                break;
                case 6:
                    this.microCompanyController.listAllMicroCompanies();
                    this.normalCompanyController.listAllNormalCompanies();
                break;
                case 7:
                break;
            }
        }
    }
}