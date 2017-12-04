import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homesquare';
  lugares:any = [
    {nombre: 'Florería la Gardenia'},
    {nombre: 'Donas la Pasadita'},
    {nombre: 'Veterinaria Huellitas Felices'},
    {nombre: 'Florería la Gardenia'},
    {nombre: 'Donas la Pasadita'},
    {nombre: 'Veterinaria Huellitas Felices'}
  ];

  constructor(){

  }
}
