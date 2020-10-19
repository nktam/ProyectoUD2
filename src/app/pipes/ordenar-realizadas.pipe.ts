import {Pipe, PipeTransform} from '@angular/core';
import {Tarea} from '../model/tarea'

@Pipe({
  name: 'ordenarRealizadas'
})
export class OrdenarRealizadasPipe implements PipeTransform {

  transform(lista: Tarea[]) {
    return lista.filter(tarea => tarea.realizada).sort((a, b) => (b.importante&&!a.importante)? 1:-1);
  }

}
