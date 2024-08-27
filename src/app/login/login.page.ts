import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {}

  login(){
    this.router.navigate(['/home'])
  }

  forgotPassword() {
    this.router.navigate(['/forgot']);
  } 

  anonimous(){
    this.router.navigate(['/home']);
  }
  create(){
    this.router.navigate(['/create']);
  }

}
