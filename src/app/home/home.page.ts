import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service'
import { QuizService } from '../services/quiz.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  menuType: string = 'overlay';
  subjects: any[] = [];

  constructor(
    private router: Router, 
    private themeService: ThemeService,
    private quizService: QuizService,
    ) {}

  ngOnInit() {
    this.fetchTestTypes();
  }
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
  fetchTestTypes(): void {
    this.quizService.getTestTypes().subscribe(
      (data: any[]) => {
        this.subjects = data.map(subject => ({
          materia: subject.materia,
          nomeMateria: subject.nome_materia 
        }));
      }
  )}
}
