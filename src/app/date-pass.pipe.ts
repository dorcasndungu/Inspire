import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePass'
})
export class DatePassPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var daysPassed = dateDifferenceSeconds/secondsInDay;

    if (daysPassed >= 1 && todayWithNoTime > value){
      return daysPassed;
    }else{
      return 0;
    }

  }

}
