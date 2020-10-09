import {Injectable} from '@angular/core';
import {Tarea} from '../model/tarea';

@Injectable({
  providedIn: 'root',
})
export class ServicioTareaService {
  public tareas: Tarea[];

  constructor() {
    this.tareas=[
      new Tarea('Comprar pan', false, false),
      new Tarea('Recoger moto', true, false),
      new Tarea('Hacer deberes', false, false),
    ];
  }

  public addTarea(item: Tarea) {
    this.tareas=[...this.tareas, item];
  }

}
