import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ModalTareaPageRoutingModule} from './modal-tarea-routing.module';
import {ModalTareaPage} from './modal-tarea.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ModalTareaPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ModalTareaPage]
})
export class ModalTareaPageModule {}

