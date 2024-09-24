import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/login.service';
import { ThemeService } from '../../services/theme.service';

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

  SwitchMenuColors() {
    this.themeService.mode = !this.themeService.mode;
  
    const toggleElement = document.getElementById('theme-toggle') as HTMLIonToggleElement;
    const toggleValue = toggleElement.checked; 
  
    const elements = document.getElementsByClassName('menuContent');
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).style.setProperty('color', toggleValue ? 'black' : 'white');
    }
  }
}
