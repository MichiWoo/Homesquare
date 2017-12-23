import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    animations: [
        trigger('contenedorAnimable', [
            state('inicial', style({
                opacity: 0
            })),
            state('final', style({
                opacity: 1
            })),
            transition('inicial => final', animate(2000)),
            transition('final => inicial', animate(1000))
        ])
    ]
})
export class LugaresComponent {
    title = 'HomeSquare';
    state = 'inicial';

    lat:number = 20.9573458;
    lng:number = -97.4084174;
    lugares = null;
    animar(){
        this.state = (this.state === 'final') ? 'inicial' : 'final';
    }
    animacionInicia(e){
        console.log('iniciado');
        console.log(e);
    }
    animacionTermina(e){
        console.log('terminado');
        console.log(e);
    }
    constructor(private lugaresService: LugaresService){
        lugaresService.getLugares()
            .valueChanges()
            .subscribe(lugares =>{
                this.lugares = lugares;
                var me = this;
                me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });
                this.state = 'final';
            }, error => {
                console.log(error);
                alert(`Tenemos algunos problemas, disculpe las molestias. Error ${error.statusText}`);
            });
    }
}
