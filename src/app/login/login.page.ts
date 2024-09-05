import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/login.service'; // Importe o AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router, private authService: AuthService) {}

  forgotPassword() {
    this.router.navigate(['/forgot']);
  }

  anonimous() {
    this.router.navigate(['/home']);
  }

  create() {
    this.router.navigate(['/create']);
  }

  async login(email: string): Promise<void> {
    alert('Seja bem-vindo ' + email + '!');
    this.router.navigate(['/home']);
  }

  async logon(event: Event): Promise<void> {
    event.preventDefault();

    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const password = (document.getElementById('password') as HTMLInputElement)?.value;

    if (!email || !password) {
      alert('Por favor, insira um email e uma senha.');
      return;
    }

    try {
      const response = await this.authService.login(email, password).toPromise();
      localStorage.setItem('currentUser', email);
      await this.login(email);
    } catch (error) {
      alert('Seu login e/ou senha não estão corretos.\nTente novamente.');
    }
  }

  logout(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      alert('Você saiu, ' + currentUser);
      this.router.navigate(['/home']);
      localStorage.removeItem('currentUser');
    }
  }
}
