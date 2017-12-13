import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  showPassword = "password";

  save2(form){
    console.log(form);
  }

  showPass(){

    if (this.showPassword === 'text'){
      this.showPassword = 'password'
    } else{
      this.showPassword = 'text'
    }
  }
}
