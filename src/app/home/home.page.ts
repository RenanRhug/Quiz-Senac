import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menuType: string = 'overlay';
  constructor(private router: Router, private themeService: ThemeService) {}
  anonimous() {
    this.router.navigate(['/anonimous']);
  }
  quiz(typeTest: string) {
    this.router.navigate(['/quiz'], { queryParams: { type: typeTest } });
  }
  login() {
    this.router.navigate(['/login']);
  }
  SwitchTheme(){
    this.themeService.mode = !this.themeService.mode;
  }
}
