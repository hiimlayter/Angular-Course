import { Component } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { HttpUsersService } from '../http-users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  validationMessage : string = "";
    user : User = new User(1,"","","","",false);
    websites : string[] = ['www.gmial.com', 'www.youtube.com', 'www.x.com'];

  constructor(private httpUsersService: HttpUsersService) {}

    submit(form: NgForm){
      this.validationMessage = "";

      if (form.invalid){
        this.validationMessage = "Nieprawidłowe dane";
      }
      else{
        this.httpUsersService.addUser(this.user).subscribe({
          next: data => {
            this.validationMessage = "Dodano nowego użytkownika"
            console.log(this.user)
          },
          error: error => {
            this.validationMessage = error
          }
        });
      }
    }
}
