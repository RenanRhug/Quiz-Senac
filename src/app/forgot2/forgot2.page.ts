import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot2',
  templateUrl: './forgot2.page.html',
  styleUrls: ['./forgot2.page.scss'],
})
export class Forgot2Page implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  forgot2(){
    this.router.navigate(['/forgot2']);
  }
}
