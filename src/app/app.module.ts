import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkeyQpOy2EWOz3nOIG5JfNXWEtMiMj3RE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
