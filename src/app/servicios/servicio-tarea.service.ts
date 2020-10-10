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
      new Tarea('Comprar pan', true, false),
      new Tarea('Recoger moto', true, false),
      new Tarea('Hacer deberes', false, false),
    ];

    this.tareasTerminadas=[
      new Tarea('Recoger niños pan', true, true),
      new Tarea('Limpiar Ropa', false, true),
    ];
  }

  public addTarea(item: Tarea) {
    if(item.importante) {
      this.tareas=[item, ...this.tareas];
    } else {
      this.tareas=[...this.tareas, item];
    }
  }

  public addTareaTerminada(item: Tarea) {
    if(item.importante) {
      this.tareasTerminadas=[item, ...this.tareasTerminadas];
    } else {
      this.tareasTerminadas=[...this.tareasTerminadas, item];
    }
  }

  // para buscar la posición en el array  
  public buscarTarea(id) {
    for(let i=0;i<this.tareas.length;i++) {
      if(this.tareas[i].id===id) {
        return i;
      }
    }
  }

  // para buscar la posición en el array  
  public buscarTareaTerminada(id) {
    for(let i=0;i<this.tareasTerminadas.length;i++) {
      if(this.tareasTerminadas[i].id===id) {
        return i;
      }
    }
  }

  public eliminarTarea(pos) {
    this.tareas=[...this.tareas.slice(0, pos), ...this.tareas.slice(pos+1)];
  }

  public eliminarTareaTerminada(pos) {
    this.tareasTerminadas=[...this.tareasTerminadas.slice(0, pos), ...this.tareasTerminadas.slice(pos+1)];
  }


}
