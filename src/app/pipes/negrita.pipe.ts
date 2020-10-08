import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negrita',
})
export class NegritaPipe implements PipeTransform {
  transform(value: string) {
    return `<b>${value}</b>`;
  }
}
