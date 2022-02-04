import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePass'
})
export class DatePassPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
