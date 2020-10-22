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

    // 1 Cargo las tareas del storage para emepzar a trabajar enseguida
    this.storage.getObject("tareas").then((data) => {
      if(data) {
        this.tareas=<Tarea[]><unknown>data;
      }
    })

    // 2 cargo las tareas del servidor esta son las de fiar machacan al storage
    this.http.getList().subscribe(
      (datos) => {
        //this.tareas=datos; esto revisar
        this.storage.setObject("tareas", datos); // guardo las tareas en el storage
        this.tareas=datos.map((tarea) => Tarea.fromJson(tarea)); // actualiza tareas
      },
      (error) => console.log(error)
    );

  }

  public addTarea(tarea: Tarea) {

    // 1 creo la tarea en el servidor para recibir id
    this.http.createItem(tarea).subscribe(
      (data) => {
        this.tareas=[data, ...this.tareas]; // actualizo tareas
        this.storage.setObject("tareas", this.tareas); // guardo tareas en storage
      },
      (error) => {console.log(error)}
    );


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
    this.tareas[pos]={descripcion, importante, realizada, id}; // modifico la tarea
    this.storage.setObject("tareas", this.tareas); // guardo en storage
    this.http.updateItem(id, this.tareas[pos]).subscribe( // modificola tarea en el servidor
      (data) => {
        this.tareas=[...this.tareas]; // actualizo tareas para recargar la lista
      },
      (error) => {console.log(error)}
    );

  }

  public eliminarTarea(tarea) {
    const pos=this.buscarTarea(tarea);
    this.http.deleteItem(tarea.id).subscribe( // elimito tarea del servidor
      (data) => {
        this.tareas=[...this.tareas.slice(0, pos), ...this.tareas.slice(pos+1)]; // si se elimina correctamente la elimino de tareas
        this.storage.setObject("tareas", this.tareas); // guardo tareas en el storage
      },
      (error) => {console.log(error)}
    );
  }


}
