import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homesquare';
  lugares:any = [
    {cercania: 1, distancia: 1, active: true, nombre: 'Florería la Gardenia'},
    {cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la Pasadita'},
    {cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
    {cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll'},
    {cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia'},
    {cercania: 3, distancia: 120, active: false, nombre: 'Zapatería el Clavo'}
  ];
  lat:number = 20.9570718;
  lng:number = -97.4085713;
  constructor(){

  }
}
