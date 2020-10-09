import {Component, OnInit, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
//import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-tarea',
  templateUrl: './modal-tarea.page.html',
  styleUrls: ['./modal-tarea.page.scss'],
})
export class ModalTareaPage implements OnInit {

  formulario;

  constructor(public modalCtrl: ModalController) {
    //this.formulario=formbuilder.group({descripcion: ['', Validators.compose([Validators.maxLength(40)])]});
  }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss({

    });
  }

}
