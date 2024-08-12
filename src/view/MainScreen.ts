import promptSync from "prompt-sync";
import { Company } from "../model/Company";
import MicroCompany from "../model/MicroCompany";
import MicroCompanyController from "../control/MicroCompanyController";
import Datacenter from "../db/Datacenter";
import Register from "./Register";

export default class MainScreen{

    private prompt = promptSync();

    public getFirstScreen(): void{
        let option: number = 0;
        let option2: number = 0;
        let register: Register = new Register();

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