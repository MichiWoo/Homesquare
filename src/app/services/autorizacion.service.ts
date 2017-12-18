import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth/auth";

@Injectable()

export class AutorizacionService{
  constructor(private angularFireAuth: AngularFireAuth) {

  }
  public login = (email, password) => {
    console.log('Método de login')
  }

  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response)=>{
        console.log('Usuario Registrado con exito');
        console.log(response);
      })
      .catch((error)=>{
        console.log('Hubo un error');
        console.log(error);
      })
  }
}