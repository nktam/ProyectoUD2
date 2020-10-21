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
        this.tareas=datos.map((tarea) => Tarea.fromJson(tarea));
        //this.tareas=datos;
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
    this.http.createItem(tarea).subscribe(
      (data) => {
        console.log(data);
        this.tareas=[data, ...this.tareas];
      },
      (error) => {console.log(error)}
    );

    //this.storage.setObject("tareas", this.tareas);
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
    this.http.updateItem(id, this.tareas[pos]).subscribe(
      (data) => {
        console.log(data);
        this.tareas=[...this.tareas];
      },
      (error) => {console.log(error)}
    );
    //this.storage.setObject("tareas", this.tareas);
  }

  public eliminarTarea(tarea) {
    const pos=this.buscarTarea(tarea);
    this.http.deleteItem(tarea.id).subscribe(
      (data) => {
        console.log(tarea);
        this.tareas=[...this.tareas.slice(0, pos), ...this.tareas.slice(pos+1)];
      },
      (error) => {console.log(error)}
    );
    //this.storage.setObject("tareas", this.tareas);
  }


}
