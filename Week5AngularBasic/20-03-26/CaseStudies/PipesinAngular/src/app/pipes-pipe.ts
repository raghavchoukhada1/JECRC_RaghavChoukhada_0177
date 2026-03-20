import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
  standalone: true
})
export class PipesPipe implements PipeTransform {
  transform(value:number):string {
    return `${value}`;
  }
}
