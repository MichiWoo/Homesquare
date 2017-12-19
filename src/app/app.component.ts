import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  loggedUser = null;
  constructor(private autorizacionService: AutorizacionService){
    this.autorizacionService.isLogged()
      .subscribe((result)=>{
        if (result && result.uid){
          this.loggedIn = true;
          setTimeout(()=>{
            this.loggedUser = this.autorizacionService.getUser().currentUser.email;
          });
        } else {
          this.loggedIn = false;
        }
      }, (error)=> {
        this.loggedIn = false;
      })
  }
  logout(){
    this.autorizacionService.logout();
  }
}
