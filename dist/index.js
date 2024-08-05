"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Datacenter_1 = __importDefault(require("./db/Datacenter"));
const MicroCompanyController_1 = __importDefault(require("./control/MicroCompanyController"));
let teclado = (0, prompt_sync_1.default)();
let option = 0;
const datacenter = new Datacenter_1.default();
const microCompanyController = new MicroCompanyController_1.default(datacenter); //instancia de datacenter sendo fornecida externamente
while (option !== 9) {
    console.log('+=============PERSONAGEM===========+');
    console.log('| 1. Cadastrar Empresa');
    console.log('+=============PERSONAGEM===========+');
    option = +teclado("escolha");
    switch (option) {
        case 1:
            const name = teclado("Digite o nome da empresa");
            const cnpj = teclado("Digite o cnpj da empresa");
            let microCompany = microCompanyController.addMicroCompany(name, cnpj);
            console.log(microCompany.getName());
            console.log(microCompanyController.listAllFoods());
            break;
        case 3:
        default:
            break;
    }
}
