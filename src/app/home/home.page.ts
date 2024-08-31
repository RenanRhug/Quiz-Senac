import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}
  anonimous(){
    this.router.navigate(['/anonimous']);
  }
  quiz(){
    this.router.navigate(['/quiz']);
  }
  login(){
    this.router.navigate(['/login'])
  }
}


