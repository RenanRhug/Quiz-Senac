import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/login.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  user = localStorage.getItem('currentUserName');
  darkMode = false;

  constructor(private router: Router, 
    private authService: AuthService,) { }

  logout(): void {
    if (this.user) {
      alert('Você saiu, ' + this.user);
      this.router.navigate(['/login']);
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserName');

      this.authService.storeToken('');
    }
  }

  ngOnInit() {}

 
}
