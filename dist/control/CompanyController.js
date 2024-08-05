"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const Company_1 = __importDefault(require("../model/Company"));
class CompanyController {
    constructor() {
        this.company = null;
        this.init();
    }
    init() {
        const form = document.getElementById('registerForm');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleSubmit();
        });
    }
    handleSubmit() {
        const name = document.getElementById('name').value;
        const industry = document.getElementById('industry').value;
        this.company = new Company_1.default(name, industry);
        console.log('Company registered:', this.company);
    }
}
exports.CompanyController = CompanyController;
