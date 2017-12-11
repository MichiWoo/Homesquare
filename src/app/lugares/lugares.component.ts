import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html'
})
export class LugaresComponent {
    title = 'PlatziSquare';

    lat:number = 20.9573458;
    lng:number = -97.4084174;
    lugares = null;
    constructor(private lugaresService: LugaresService){
        this.lugares = lugaresService.getLugares();
    }
}
