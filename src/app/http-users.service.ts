import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpUsersService {
  constructor(private httpClient: HttpClient) {}

  url : string = 'https://jsonplaceholder.typicode.com/users';
  private localUsers: User[] = [];

  getUsers() {
    return this.httpClient
      .get<any[]>(this.url)
      .pipe(
        map((data) =>
          data.map(
            (item) =>
              new User(item.id, item.name, item.email, item.phone, item.website,true)
          )
        )
      ).pipe(map(users =>{
        return [...users,...this.localUsers];
      }));
  }

  getUser(id : number){
    let getUserUrl = `${this.url}/${id}`;

    return this.httpClient.get<any>(getUserUrl)
    .pipe(map(item =>
      new User(item.id, item.name, item.email, item.phone,
        item.website, item.id % 2 === 0)));
  }

  deleteUser(id : number){
    return this.httpClient.delete(this.url+id);
  }

  addUser(user : User){
    var result = this.httpClient.post<any>(this.url, user);
    result.subscribe({
      next: data => {
        this.localUsers.push(user);
      },
      error: data => {},
    });
    console.log(this.localUsers);
    return result;
  }

  putUser(user : User){
    const mappedUser = {
      "name": user.fullName,
      "email": user.email,
      "id": user.id,
      "phone": user.phone,
      "website": user.website
    }

    let updateUrl = `${this.url}/${user.id}`;
    return this.httpClient.put<User>(updateUrl, mappedUser);
  }
}
