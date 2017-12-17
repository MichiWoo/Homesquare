import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style } from '@angular/animations';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    animations: [
        trigger('contenedorAnimable', [
            state('inicial', style({
                opacity: 0,
                backgroundColor: 'green',
                transform: 'rotate3d(0,0,0,0 deg)'
            })),
            state('final', style({
                opacity: 1,
                backgroundColor: 'yellow',
                transform: 'rotate3d(5,10,20,30 deg)'
            }))
        ])
    ]
})
export class LugaresComponent {
    title = 'HomeSquare';
    state = 'inicial';

    lat:number = 20.9573458;
    lng:number = -97.4084174;
    lugares = null;
    constructor(private lugaresService: LugaresService){
        lugaresService.getLugares()
            .subscribe(lugares =>{
                this.lugares = lugares;
                var me = this;
                me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });
            }, error => {
                console.log(error);
                alert(`Tenemos algunos problemas, disculpe las molestias. Error ${error.statusText}`);
            });
    }
}
