import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  user = localStorage.getItem('currentUserName');
  isDarkMode: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    this.initializeDarkPalette(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  initializeDarkPalette(isDark: boolean) {
    this.isDarkMode = isDark;
    this.SwitchMenuColors(isDark);
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

  SwitchMenuColors(isDark: boolean) {  
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
}
