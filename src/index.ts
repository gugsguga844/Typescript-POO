"use strict";

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

            let empresa: Company = new Company()

            console.log(empresa.getName())
        break;
        case 3: 
            
        default:
        break;
    }
}

/* import promptSync from "prompt-sync";
import MainOfficeController from "./control/MainOfficeController";
import MainOffice from "./model/MainOffice";


export default class PrimaryScreen{

  private mainOfficeController: MainOfficeController;

  constructor(mainOfficeController: MainOfficeController){
    this.mainOfficeController = mainOfficeController;
  }
    private prompt = promptSync();

    public getFirstScreen():void {
        
       
          let showScreen: boolean = false;
          while (!showScreen) {
              // Get user input
              //console.clear();
              let choice = this.prompt("Escolha:\n1 - Cadastro Comida\n2 - Listar\n3 - Sair");
              
              switch (choice) {
                case "1":
                  //aqui pedimos uma instancia de FoodProduct para o controller
                  let mainOffice: MainOffice = this.mainOfficeController.getNewMain();
                  this.registerMain(mainOffice);
                  break;
        
                case "2":
                  //console.clear();
                  console.log("digitou 2")
                
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

    public registerMain(mainOffice: MainOffice): void{
      let name = this.prompt("Digite o nome do produto alimenticio");
      mainOffice.setName(name);
      //aqui requisito para o controller o registro da comida no BD
      this.mainOfficeController.registerNewMain(mainOffice);
    }

}

*/

