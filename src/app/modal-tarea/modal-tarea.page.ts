import {Component, OnInit, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal-tarea',
  templateUrl: './modal-tarea.page.html',
  styleUrls: ['./modal-tarea.page.scss'],
})
export class ModalTareaPage implements OnInit {

  formulario;

  constructor(public modalCtrl: ModalController, public formBuilder: FormBuilder) {
    this.formulario=formBuilder.group({descripcion: ['', Validators.compose([Validators.maxLength(40)])]});
  }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss({});
  }

}
