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
    setTimeout(() => this.home(), 3000);
  }
  
  home() {
    this.router.navigate(['/home']);
  }
    
}
