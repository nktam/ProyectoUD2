import { Component } from '@angular/core';
import { ServicioTareaService } from '../servicios/servicio-tarea.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public servicio: ServicioTareaService) {}
}
