import {Component} from '@angular/core';
import {Tarea} from '../model/tarea';
import {ServicioTareaService} from '../servicios/servicio-tarea.service';
import {ModalController} from '@ionic/angular';
import {ModalTareaPage} from '../modal-tarea/modal-tarea.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public servicio: ServicioTareaService, public modalCtrl: ModalController) {}

  public async addTarea() {
    const modal=await this.modalCtrl.create({
      component: ModalTareaPage
    });
    await modal.present();
    //this.servicio.addTarea(new Tarea('Tomar cerveza', true, false));
  }



}
