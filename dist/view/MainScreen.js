"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const MicroCompanyController_1 = __importDefault(require("../control/MicroCompanyController"));
class MainScreen {
    constructor(microCompanyController, normalCompanyController, register) {
        this.prompt = (0, prompt_sync_1.default)();
        this.microCompanyController = microCompanyController;
        this.normalCompanyController = normalCompanyController;
        this.register = register;
    }
    getFirstScreen() {
        let option = 0;
        let option2 = 0;
        const microCompanyController = new MicroCompanyController_1.default();
        let companyType;
        (function (companyType) {
            companyType[companyType["MICRO"] = 1] = "MICRO";
            companyType[companyType["NORMAL"] = 2] = "NORMAL";
        })(companyType || (companyType = {}));
        while (option !== 9) {
            console.log('+ ======== Controle de Empresas ======== +');
            console.log('|                                        |');
            console.log('| 1. Cadastrar Empresa                   |');
            console.log('| 2. Editar Empresa                      |');
            console.log('| 3. Consultar Micro-Empresa             |');
            console.log('| 4. Consultar Empresa Normal            |');
            console.log('| 5. Atribuir Investimento               |');
            console.log('| 6. Listar Empresas                     |');
            console.log('| 7. Imprimir Empresas                   |');
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
                    this.microCompanyController.generatePdf();
                    break;
            }
        }
    }
}
exports.default = MainScreen;
