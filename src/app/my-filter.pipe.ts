import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: string): string {
    return value.replaceAll('_',"");
  }

}
