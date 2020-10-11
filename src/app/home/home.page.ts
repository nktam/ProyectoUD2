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

  // Abrimos modal-tarea y speramos a que se cierre (onWillDismiss) para recoger los datos.
  async nuevaTarea() {
    const modal=await this.modalCtrl.create({
      component: ModalTareaPage
    });
    await modal.present();
    let {data}=await modal.onWillDismiss();
    if(data) {
      this.servicio.addTarea(new Tarea(data.data.descripcion, data.data.importante));
    }
  }

  // Abrimos modal-tarea y envimos los Props con la tarea. Esperamos a que se cierre (onWillDismiss) para recoger los datos.
  async modificarTarea(tarea: Tarea) {
    const modal=await this.modalCtrl.create({
      component: ModalTareaPage,
      componentProps: {
        tareaProp: tarea
      }
    });
    await modal.present();
    let {data}=await modal.onWillDismiss();
    if(data) {
      const pos=this.servicio.buscarTarea(tarea);
      this.servicio.eliminarTarea(pos);
      this.servicio.addTarea(new Tarea(data.data.descripcion, data.data.importante, tarea.realizada, tarea.id));
    }
  }

  // Marcamos la tarea cómo realizada
  public tareaRealizada(tarea: Tarea) {
    const pos=this.servicio.buscarTarea(tarea);
    this.servicio.eliminarTarea(pos);
    this.servicio.addTarea(new Tarea(tarea.descripcion, tarea.importante, true, tarea.id));
  }

  // Dejamos la tarea cómo no realizada
  public tareaSinRealizar(tarea: Tarea) {
    const pos=this.servicio.buscarTarea(tarea);
    this.servicio.eliminarTarea(pos);
    this.servicio.addTarea(new Tarea(tarea.descripcion, tarea.importante, false, tarea.id));
  }

  public borrarTarea(tarea: Tarea) {
    const pos=this.servicio.buscarTarea(tarea);
    this.servicio.eliminarTarea(pos);
  }

  // Buscamos si hay tareas finalizadas
  public buscarTareasRealizadas() {
    for(let i=0; i<this.servicio.tareas.length; i++) {
      if(this.servicio.tareas[i].realizada) {
        return true;
      }
    }
    return false;
  }

}

