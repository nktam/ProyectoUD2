import {Injectable} from '@angular/core';
import {Tarea} from '../model/tarea';

@Injectable({
  providedIn: 'root',
})
export class ServicioTareaService {
  public tareas: Tarea[];

  constructor() {
    this.tareas=[
      new Tarea('Comprar pan', true, false),
      new Tarea('Recoger moto', true, false),
      new Tarea('Hacer deberes', false, false),
      new Tarea('Comprar moto', true, true),
      new Tarea('Deporte', false, true),
    ];
  }

  public addTarea(tarea: Tarea) {
    if(tarea.importante) {
      this.tareas=[tarea, ...this.tareas];
    } else {
      this.tareas=[...this.tareas, tarea];
    }
  }

  // para buscar la posición de la tarea en el array  
  public buscarTarea(tarea: Tarea) {
    for(let i=0; i<this.tareas.length; i++) {
      if(this.tareas[i].id===tarea.id) {
        return i;
      }
    }
  }

  public eliminarTarea(pos) {
    this.tareas=[...this.tareas.slice(0, pos), ...this.tareas.slice(pos+1)];
  }

}
