import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {HomePageRoutingModule} from './home-routing.module';
import {OrdenarPipe} from '../pipes/ordenar.pipe';
import {OrdenarRealizadasPipe} from '../pipes/ordenar-realizadas.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, OrdenarPipe, OrdenarRealizadasPipe],
})
export class HomePageModule {}

