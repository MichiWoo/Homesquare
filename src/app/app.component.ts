import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homesquare';
  a = 3;
  b = 5;
  listo = false;

  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }
}
