import {Injectable} from '@angular/core';
import {Tarea} from '../model/tarea';
import {HttpService} from './http.service';
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root',
})
export class ServicioTareaService {
  public tareas: Tarea[];

  constructor(private storage: StorageService, private http: HttpService) {

    this.tareas=[];

    this.http.getList().subscribe(
      (datos) => {
        datos.map((tarea) => this.fromJson(tarea));
        this.tareas=datos;
      },

      (error) => console.log(error)
    );

    // this.tareas=[
    //   new Tarea('Comprar pan', true, false),
    //   new Tarea('Recoger moto', true, false),
    //   new Tarea('Comprar moto', true, true),
    //   new Tarea('Hacer deberes', false, false),
    //   new Tarea('Deporte', false, true),
    // ];


    // this.storage.getObject("tareas").then((data) => {
    //   if(data) {
    //     this.tareas=<Tarea[]><unknown>data;
    //   }
    // })

  }

  public addTarea(tarea: Tarea) {
    this.tareas=[tarea, ...this.tareas];
    this.storage.setObject("tareas", this.tareas);
  }

  // para buscar la posición de la tarea en el array  
  public buscarTarea(tarea: Tarea) {
    for(let i=0; i<this.tareas.length; i++) {
      if(this.tareas[i].id===tarea.id) {
        return i;
      }
    }
  }

  public modificarTarea(tarea, descripcion, importante, realizada, id) {
    const pos=this.buscarTarea(tarea);
    this.tareas[pos]={descripcion, importante, realizada, id};
    this.tareas=[...this.tareas];
    this.storage.setObject("tareas", this.tareas);
  }

  public eliminarTarea(tarea) {
    const pos=this.buscarTarea(tarea);
    this.tareas=[...this.tareas.slice(0, pos), ...this.tareas.slice(pos+1)];
    this.storage.setObject("tareas", this.tareas);
  }

  private fromJson(data: any) {
    // if(!data.descripcion||!data.importante||!data.realizada) {
    //   throw (new Error("Argumento inválido: la estructura no concuerda con el modelo"));
    // }
    // console.log(data.descripcion);
    // console.log(data.importante);
    // console.log(data.realizada);
    // console.log(data.id);
    return new Tarea(data.descripcion, data.importante, data.realizada, data.id);
  }

}
