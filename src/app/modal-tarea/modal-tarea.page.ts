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

  constructor(public modalCtrl: ModalController, public formBuilder: FormBuilder) {
    this.formulario=formBuilder.group({
      descripcion: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      importante: ['']
    });
  }

  ngOnInit() {
  }

  public cerrar() {
    this.modalCtrl.dismiss({});
  }

  public enviar(value) {
    this.modalCtrl.dismiss({data: value});
  }

}
