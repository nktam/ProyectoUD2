import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTareaPageRoutingModule } from './modal-tarea-routing.module';

import { ModalTareaPage } from './modal-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTareaPageRoutingModule
  ],
  declarations: [ModalTareaPage]
})
export class ModalTareaPageModule {}
