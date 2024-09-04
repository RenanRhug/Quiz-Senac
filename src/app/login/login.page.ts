import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dataA: { id: string; password: string }[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadUserData();
  }

  forgotPassword() {
    this.router.navigate(['/forgot']);
  }

  anonimous() {
    this.router.navigate(['/home']);
  }

  create() {
    this.router.navigate(['/create']);
  }

  async login(nome: string): Promise<void> {
    alert('Seja bem-vindo ' + nome + '!');
    this.router.navigate(['/home']);
  }

  async logon(event: Event): Promise<void> {
    event.preventDefault();

    const id = (document.getElementById('id') as HTMLInputElement)?.value;
    const password = (document.getElementById('password') as HTMLInputElement)?.value;

    if (!id || !password) {
      alert('Por favor, insira um ID e uma senha.');
      return;
    }

    localStorage.setItem('currentUser', id);

    for (const user of this.dataA) {
      if (id === user.id && password === user.password) {
        await this.login(id);
        return;
      }
    }

    alert('Seu login e/ou senha não estão corretos.\nTente novamente.');
  }

  logout(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      alert('Você saiu, ' + currentUser);
      this.router.navigate(['/home']);
      localStorage.removeItem('currentUser');
    }
  }

  private loadUserData(): void {
    this.http.get<{ users: { id: string; password: string }[] }>('assets/login.json')
      .subscribe(
        data => {
          this.dataA = data.users;
        },
        error => {
          console.error('Error loading user data:', error);
        }
      );
  }
}
