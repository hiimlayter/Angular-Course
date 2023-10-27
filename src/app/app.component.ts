import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Kurs';
  isBtnDisabled = false

  onBtnClick(){
    this.title = "Test";
    this.isBtnDisabled = true;
  }
}
