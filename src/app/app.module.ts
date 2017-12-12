import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from "@angular/router";
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {pathMatch: 'full', path:'', component: LugaresComponent},
  {pathMatch: 'full', path:'lugares', component: LugaresComponent},
  {pathMatch: 'full', path:'detalle/:id', component: DetalleComponent},
  {pathMatch: 'full', path:'contacto', component: ContactoComponent},
  {pathMatch: 'full', path:'crear', component: CrearComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyDLKlAogFqLhwZzvXrdC8mWAMBVRiRrMHU",
  authDomain: "homesquare-1512367488394.firebaseapp.com",
  databaseURL: "https://homesquare-1512367488394.firebaseio.com",
  storageBucket: "homesquare-1512367488394.appspot.com",
  messagingSenderId: "202691253549"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkeyQpOy2EWOz3nOIG5JfNXWEtMiMj3RE'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
