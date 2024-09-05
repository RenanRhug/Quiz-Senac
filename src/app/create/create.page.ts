// create.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  create() {
    if (this.name && this.email && this.password) {
      this.userService.createUser({ name: this.name, email: this.email, password: this.password })
        .subscribe({
          next: () => {
            alert("Conta criada com sucesso");
            setTimeout(() => this.home(), 3000);
          },
          error: (err) => {
            console.error('Erro ao criar conta:', err);
            alert('Ocorreu um erro ao criar a conta.');
          }
        });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  home() {
    this.router.navigate(['/login']);
  }
}
