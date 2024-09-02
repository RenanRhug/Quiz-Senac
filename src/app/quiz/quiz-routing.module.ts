import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz } from './quiz.page';

const routes: Routes = [
  {
    path: '',
    component: Quiz,
  },
  {
    path: 'reset',
    loadChildren: () => import('../reset/reset.module').then( m => m.ResetPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {}
