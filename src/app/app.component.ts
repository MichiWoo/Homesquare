import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homesquare';
  lugares:any = [
    {active: true, nombre: 'Florería la Gardenia'},
    {active: true, nombre: 'Donas la Pasadita'},
    {active: true, nombre: 'Veterinaria Huellitas Felices'},
    {active: false, nombre: 'Sushi Sushiroll'},
    {active: true, nombre: 'Hotel la Gracia'},
    {active: false, nombre: 'Zapatería el Clavo'}
  ];
  lat:number = 20.9570718;
  lng:number = -97.4085713;
  constructor(){

  }
}
