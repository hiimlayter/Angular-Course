import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(value: User[], searched : string): User[] {
    return value.filter(x => this.Contains(x.fullName, searched));
  }

  Contains(value : string, searched : string) {
    return value.toLowerCase().includes(searched.toLowerCase());
  }
}
