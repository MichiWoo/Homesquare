import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar:any = {};
    id:any = null;

    results$: Observable<any>;
    private searchField: FormControl;

    constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private http: Http){
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        if (this.id != 'new') {
            this.lugaresService.getLugar(this.id)
                .valueChanges().subscribe(lugar =>{
                    this.lugar = lugar;
                });
        }
        const URL = 'http://maps.google.com/maps/api/geocode/json';
        this.searchField = new FormControl();
        this.results$ = this.searchField.valueChanges
            .debounceTime(500)
            .switchMap(query => this.http.get(`${URL}?address=${query}`))
            .map(response => response.json())
            .map(response => response.results);
    }

    guardarLugar(){
        var direccion =`${this.lugar.calle},${this.lugar.ciudad},${this.lugar.pais}`;
        this.lugaresService.obtenerGeoData(direccion)
            .subscribe((result) => {
                this.lugar.lat = result.json().results[0].geometry.location.lat;
                this.lugar.lng = result.json().results[0].geometry.location.lng;

                if (this.id != 'new') {
                    this.lugaresService.editarLugar(this.lugar);
                    alert('Negocio Editado correctamente.');
                } else {
                    this.lugar.id = Date.now();
                    this.lugaresService.guardarLugar(this.lugar);
                    alert('Negocio guardado con éxito.');
                }

                this.lugar = {};
            });

    }
}