import {Component, OnInit, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal-tarea',
  templateUrl: './modal-tarea.page.html',
  styleUrls: ['./modal-tarea.page.scss'],
})

export class ModalTareaPage implements OnInit {

  private formulario: FormGroup;
  tareaProp;

  constructor(public modalCtrl: ModalController, public formBuilder: FormBuilder) {
    this.formulario=formBuilder.group({
      descripcion: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      importante: [false]
    });
  }

  ngOnInit() {
    // Recogemos los datos de la tarea desde home.page modificarTarea()
    this.formulario.controls.descripcion.setValue(this.tareaProp.descripcion);
    this.formulario.controls.importante.setValue(this.tareaProp.importante);
    this.formulario.controls.realizada.setValue(this.tareaProp.realizada);
    this.formulario.controls.id.setValue(this.tareaProp.id);
  }

  // cerramos el modal
  public cerrar() {
    console.log(this.formulario.controls.descripcion.value);
    this.modalCtrl.dismiss({});
  }

  // cerramos el modal y enviamos los datos
  public enviar(value) {
    this.modalCtrl.dismiss({data: value});
  }


}
