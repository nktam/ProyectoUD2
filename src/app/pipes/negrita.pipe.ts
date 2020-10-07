import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negrita'
})
export class NegritaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
