import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/login.service'; 
import { UserService } from '../service/user.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  isLoading: boolean = false;

  constructor(private router: Router, 
    private authService: AuthService,
    private userService: UserService) {}

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
    this.isLoading = true;

    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const password = (document.getElementById('password') as HTMLInputElement)?.value;

    if (!email || !password) {
      alert('Por favor, insira um email e uma senha.');
      return;
    }

    try {
      const response = await this.authService.login(email, password).toPromise();
      const token = response.token;
      if (token) {
        this.authService.storeToken(token);
        const name = this.getUserFromToken(token);
        localStorage.setItem('currentUser', email);
        localStorage.setItem('currentUserName', name);
        await this.login(name);
      }  else {
        console.error('Token não encontrado na resposta');
      }
    } catch (error) {
      alert('Seu login e/ou senha não estão corretos.\nTente novamente.');
    } finally {
      this.isLoading = false; 
    }
  }

  getUserFromToken(token: string) {
    if (!token) {
      return null;
    }
  
    try {
      const decodedToken: any = jwtDecode(token);
      console.error('user', decodedToken.user);
      return decodedToken.user; 
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }
}
