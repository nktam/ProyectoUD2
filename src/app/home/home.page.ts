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

  async modificarTarea(item) {
    const modal=await this.modalCtrl.create({
      component: ModalTareaPage,
      componentProps: {
        descripcionProp: item.descripcion,
        importanteProp: item.importante,
        realizadaProp: item.realizada,
        idProp: item.id
      }
    });
    await modal.present();
    let {data}=await modal.onWillDismiss();
    if(data) {
      const pos=this.servicio.buscarTarea(item);
      this.servicio.eliminarTarea(pos);
      this.servicio.addTarea(new Tarea(data.data.descripcion, data.data.importante, item.realizada, item.id));
    }
  }

  public tareaRealizada(tarea) {
    const pos=this.servicio.buscarTarea(tarea);
    this.servicio.eliminarTarea(pos);
    this.servicio.addTarea(new Tarea(tarea.descripcion, tarea.importante, true, tarea.id));
  }

  public tareaSinRealizar(tarea) {
    const pos=this.servicio.buscarTarea(tarea);
    this.servicio.eliminarTarea(pos);
    this.servicio.addTarea(new Tarea(tarea.descripcion, tarea.importante, false, tarea.id));
  }

  public borrarTarea(tarea) {
    const pos=this.servicio.buscarTarea(tarea);
    this.servicio.eliminarTarea(pos);
  }



}

