import {Injectable} from '@angular/core';
import {Tarea} from '../model/tarea';

@Injectable({
  providedIn: 'root',
})
export class ServicioTareaService {
  public tareas: Tarea[];
  public tareasTerminadas: Tarea[];

  constructor() {
    this.tareas=[
      new Tarea('Comprar pan', false, false),
      new Tarea('Recoger moto', true, false),
      new Tarea('Hacer deberes', false, false),
    ];

    this.tareasTerminadas=[
      new Tarea('Recoger niños pan', false, true),
      new Tarea('Limpiar Ropa', true, true),
    ];
  }

  public addTarea(item: Tarea) {
    this.tareas=[...this.tareas, item];
  }

  public tareaRealizada(item: Tarea) {
    this.tareasTerminadas=[...this.tareasTerminadas, item];
  }

}
