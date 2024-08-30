import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  sucesso() {
    alert("sucesso");
    setTimeout(() => this.login(), 3000);
  }

  login() {
    this.router.navigate(['/login']);
  }
    
}
