import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Quiz } from './quiz.page';

import { QuizRoutingModule } from './quiz-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizRoutingModule
  ],
  declarations: [Quiz]
})
export class QuizPageModule {}
