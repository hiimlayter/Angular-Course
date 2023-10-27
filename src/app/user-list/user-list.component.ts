import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { HttpUsersService } from '../http-users.service';
import { StartsWithPipe } from '../starts-with.pipe';
import { ContainsPipe } from '../contains.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  showType = 'Lista';
  isErrorOccured = false;
  filtered_users: User[] = [];
  errorMessage : string = "";

  @ViewChild('input_text_start') input_text_start: any; 
  @ViewChild('input_text_contains') input_text_contains: any; 

  constructor(private httpUsersService: HttpUsersService) {}

  ngOnInit(): void {
    this.httpUsersService.getUsers().subscribe({
      next: data => {
      this.users = data;
      this.filtered_users = this.users;
    },
    error: _ => {
      this.isErrorOccured = true;
    },
    complete: () => {
      
    }});
  }

  changeShowType() {
    switch (this.showType) {
      case 'Lista':
        this.showType = 'Kafle';
        break;
      case 'Kafle':
        this.showType = 'Lista';
        break;
    }
  }

  applyFilterContains(searched : string){
    this.filtered_users = new ContainsPipe().transform(this.users,searched);
    this.input_text_start.nativeElement.value = "";
  }

  applyFilterStartsWith(searched : string){
    this.filtered_users = new StartsWithPipe().transform(this.users,searched);
    this.input_text_contains.nativeElement.value = "";
    console.log(this.users);
  }

  removeUser(idUser : number){
    this.httpUsersService.deleteUser(idUser).subscribe({
      next: data => {
        if(idUser === 3){
          this.errorMessage = "Could not remove user with id "+ idUser;
        }
        this.users = this.users.filter(x => x.id != idUser);
    this.filtered_users = this.filtered_users.filter(x => x.id != idUser);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
