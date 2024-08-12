"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const MicroCompanyController_1 = __importDefault(require("../control/MicroCompanyController"));
const Register_1 = __importDefault(require("./Register"));
class MainScreen {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    getFirstScreen() {
        let option = 0;
        let option2 = 0;
        let register = new Register_1.default();
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
            console.log('| 3. Consultar Empresa                   |');
            console.log('| 4. Excluir Empresa                     |');
            console.log('| 5. Cadastrar Empresa                   |');
            console.log('| 6. Cadastrar Empresa                   |');
            console.log('| 7. Cadastrar Empresa                   |');
            console.log('| 8. Cadastrar Empresa                   |');
            console.log('| 9. Sair                                |');
            console.log('|                                        |');
            console.log('+ ====================================== +');
            option = parseInt(this.prompt("O que deseja fazer? "));
            switch (option) {
                case 1:
                    const selectOption = parseInt(this.prompt("Cadastrar Empresa:\n1. MicroEmpresa\n2. Empresa Normal\nQue tipo de empresa deseja cadastrar?\n"));
                    switch (selectOption) {
                        case companyType.MICRO:
                            register.registerCompany();
                            break;
                        case companyType.NORMAL:
                            break;
                    }
                    break;
                case 2:
                    register.alterCompany();
                    break;
                case 3:
                    register.findCompanyByName();
                default:
                    break;
            }
        }
    }
}
exports.default = MainScreen;
