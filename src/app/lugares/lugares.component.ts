import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html'
})
export class LugaresComponent {
    title = 'HomeSquare';

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
