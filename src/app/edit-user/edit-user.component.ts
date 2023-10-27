import { Component } from '@angular/core';
import { User } from '../user';
import { HttpUsersService } from '../http-users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  validationMessage : string = "";
  user : User = new User(1,"","","","",false);
  websites : string[] = ['www.gmial.com', 'www.youtube.com', 'www.x.com'];

  userAddError : boolean = false;
  userAddSuccess : boolean = false;

  disabledSubmit : boolean = false;
  
  constructor(private httpUsersService: HttpUsersService) {}

    submit(form: NgForm){
      this.disabledSubmit = true;
      this.validationMessage = "";

      if (form.invalid){
        this.validationMessage = "Nieprawidłowe dane";
      }
      else{
        this.httpUsersService.addUser(this.user).subscribe({
          next: data => {
            this.userAddSuccess = true;
            setTimeout(() => { this.userAddSuccess = false; }, 2000);
            console.log(this.user)
          },
          error: error => {
            this.userAddError = true;
            setTimeout(() => { this.userAddError = false; }, 2000);
          }
        });
      }
      this.disabledSubmit = false;
    }

    resetFlags(){
      this.userAddError = false;
      this.userAddSuccess = false;
    }
}
