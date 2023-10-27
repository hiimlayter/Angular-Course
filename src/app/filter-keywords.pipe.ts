import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterKeywords'
})
export class FilterKeywordsPipe implements PipeTransform {

  transform(value: string): string {
    return value.replaceAll("Mr.","").replaceAll("Mrs.","").replace("V","");
  }

}
