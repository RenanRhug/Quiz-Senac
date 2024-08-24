import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnonimoPageRoutingModule } from './anonimo-routing.module';

import { AnonimoPage } from './anonimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnonimoPageRoutingModule
  ],
  declarations: [AnonimoPage]
})
export class AnonimoPageModule {}
