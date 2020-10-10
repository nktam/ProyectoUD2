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
    if(data) {
      this.servicio.addTarea(new Tarea(data.data.descripcion, data.data.importante));
    }
    console.log(data.data);
  }

  public addTareaTerminada(id, descripcion, importante) {
    const pos=this.servicio.buscarTarea(id);
    this.servicio.eliminarTarea(pos);
    this.servicio.addTareaTerminada(new Tarea(descripcion, importante, true, id));
  }

  public devolverTarea(id, descripcion, importante) {
    const pos=this.servicio.buscarTareaTerminada(id);
    this.servicio.eliminarTareaTerminada(pos);
    this.servicio.addTarea(new Tarea(descripcion, importante, true, id));
  }

  public borrarTarea(id) {
    const pos=this.servicio.buscarTarea(id);
    this.servicio.eliminarTarea(pos);
  }

  public borrarTareaTerminada(id) {
    const pos=this.servicio.buscarTareaTerminada(id);
    this.servicio.eliminarTareaTerminada(pos);
  }


}

