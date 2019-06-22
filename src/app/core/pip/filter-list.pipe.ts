import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {


  transform(value: Array<any> , args?: string ): any {

    console.warn(args);

    const pattern = new RegExp(args.toString());
    if (!args) {
      return value;
    } else {
      return value.filter((item) => {
        return pattern.test(item.name) || pattern.test(item.symbol);
      });
    }
  }



}
