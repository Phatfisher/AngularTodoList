import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Test';

  constructor(){
    this.changeName('Testing!');
  }

  changeName(title:string){
    this.title = title;
  }
}


