import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/login.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private router: Router, 
    private authService: AuthService,) { }

  logout(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      alert('Você saiu, ' + currentUser);
      this.router.navigate(['/login']);
      localStorage.removeItem('currentUser');
      this.authService.storeToken('');
    }
  }

  ngOnInit() {}

}
