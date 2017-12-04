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
  firstName = '';
  lastName = '';

  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }

  hacerAlgo(){
    alert('Haciendo algo')
  }
}
