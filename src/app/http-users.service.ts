import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpUsersService {
  constructor(private httpClient: HttpClient) {}

  usersList : User[] = [];

  getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient
      .get<any[]>(url)
      .pipe(
        map((data) =>
          data.map(
            (item) =>
              new User(item.id, item.name, item.email, item.phone, item.website,true)
          )
        )
      );
  }

  deleteUser(id : number){
    let url = "https://jsonplaceholder.typicode.com/users/"
    return this.httpClient.delete(url+id);
  }

  addUser(user : User){
    let url = "https://jsonplaceholder.typicode.com/users/"
    return this.httpClient.post<any>(url, user);
  }
}
