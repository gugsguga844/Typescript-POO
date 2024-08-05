import Company from '../model/Company';

export class CompanyController {
  private company: Company | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    const form = document.getElementById('registerForm') as HTMLFormElement;
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  private handleSubmit(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const industry = (document.getElementById('industry') as HTMLInputElement).value;
    this.company = new Company(name, industry);
    console.log('Company registered:', this.company);
  }
}