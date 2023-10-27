import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {

  transform(value: User[], searched : string): User[] {
    return value.filter(x => this.StartsWith(x.fullName, searched));
  }

  StartsWith(value : string, searched : string) {
    return value.toLowerCase().startsWith(searched.toLowerCase());
  }
}
