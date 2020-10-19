import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Tarea} from '../model/tarea'

@Pipe({
  name: 'ordenar'
})

export class OrdenarPipe implements PipeTransform {

  transform(lista: Tarea[]) {
    return lista.filter(tarea => !tarea.realizada).sort((a, b) => (b.importante&&!a.importante)? 1:-1);
  }

}
