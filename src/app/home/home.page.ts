import {Component} from '@angular/core';
import {ServicioTareaService} from '../servicios/servicio-tarea.service';
import {ModalController} from '@ionic/angular';
import {ModalTareaPage} from '../modal-tarea/modal-tarea.page';
import {Tarea} from '../model/tarea';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public servicio: ServicioTareaService, public modalCtrl: ModalController) {}

  async addTarea() {
    const modal=await this.modalCtrl.create({
      component: ModalTareaPage
    });

    await modal.present();
    let {data}=await modal.onWillDismiss();
    console.log(data);
    if(data) {
      this.servicio.addTarea(new Tarea(data.data.descripcion, data.data.importante));
    }

  }



}

