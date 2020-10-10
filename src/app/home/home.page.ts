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

  public addTareaTerminada(id, descripcion, importante) {

    // para buscar la posición en el array
    let pos=-1;
    for(let i=0;i<this.servicio.tareas.length;i++) {
      if(this.servicio.tareas[i].id===id) {
        pos=i;
      }
    }

    //eliminamos de tareas 
    this.servicio.tareas=[...this.servicio.tareas.slice(0, pos), ...this.servicio.tareas.slice(pos+1)];

    // la metemos en tareas realizadas
    this.servicio.tareaRealizada(new Tarea(descripcion, importante, true, id));
  }



}

