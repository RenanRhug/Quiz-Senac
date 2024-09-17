import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/login.service';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  user = localStorage.getItem('currentUserName');
  darkMode = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout(): void {
    if (this.user) {
      alert('Você saiu, ' + this.user);
      this.router.navigate(['/login']);
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserName');

      this.authService.storeToken('');
    }
  }
  SwitchTheme() {
    this.themeService.mode = !this.themeService.mode;
  }
  SwitchMenuColors() {
    // desafio do dia hein... faz essa gambiarra aqui em 2 linhas (sem ajuda)
    const elements = document.getElementsByClassName('menuContent');
    if (this.themeService.mode) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        element.style.setProperty('color', 'black');
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        element.style.setProperty('color', 'white');
      }
    }
  }
}
