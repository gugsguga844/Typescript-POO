"use strict";
/* "use strict";

import prompt from 'prompt-sync';
import Company from './model/Company';

export default class Personagem {
    constructor(
        public nome: string,
        public numero: number
    ) {}
}

let teclado = prompt();
let option: number = 0;
while (option !== 9) {
    console.log('+=============PERSONAGEM===========+');
    console.log('| 1. Cadastrar Empresa');
    console.log('+=============PERSONAGEM===========+');

    option = +teclado("escolha")

    switch (option) {
        case 1:
            const name = teclado("Digite o nome da empresa:");
            const cnpj = teclado("Digite o CNPJ da empresa:");
            const totalExpenses = parseFloat(teclado("Digite o total de despesas:"));
            const totalRevenues = parseFloat(teclado("Digite o total de receitas:"));
            const acumLoss = parseFloat(teclado("Digite o total de prejuízos acumulados:"));
            const acumProfit = parseFloat(teclado("Digite o total de lucros acumulados:"));

            let empresa: Company = new Company(name, cnpj, totalExpenses, totalRevenues, acumLoss, acumProfit)

            console.log(empresa.getName())
        break;
        case 3:
            
        default:
        break;
    }
} */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(mainOfficeController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.mainOfficeController = mainOfficeController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt("Escolha:\n1 - Cadastro Comida\n2 - Listar\n3 - Sair");
            switch (choice) {
                case "1":
                    //aqui pedimos uma instancia de FoodProduct para o controller
                    let mainOffice = this.mainOfficeController.getNewMain();
                    this.registerMain(mainOffice);
                    break;
                case "2":
                    //console.clear();
                    console.log("digitou 2");
                    break;
                case "3":
                    showScreen = true;
                    break;
                default:
                    //console.clear();
                    console.log("Invalid answer!");
            }
        }
    }
    registerMain(mainOffice) {
        let name = this.prompt("Digite o nome do produto alimenticio");
        mainOffice.setName(name);
        //aqui requisito para o controller o registro da comida no BD
        this.mainOfficeController.registerNewMain(mainOffice);
    }
}
exports.default = PrimaryScreen;
