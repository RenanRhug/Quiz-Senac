import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Quiz } from './quiz.page';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizService } from '../service/quiz.service'; // Certifique-se de que o caminho está correto
import { HttpClientModule } from '@angular/common/http'; // Certifique-se de importar

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizRoutingModule,
    HttpClientModule // Adicione esta linha se necessário
  ],
  declarations: [Quiz],
  providers: [QuizService] // Se não estiver globalmente disponível
})
export class QuizPageModule {}
