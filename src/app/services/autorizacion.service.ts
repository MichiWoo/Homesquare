import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth/auth";
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable()

export class AutorizacionService{
  constructor(private angularFireAuth: AngularFireAuth, private router:Router) {
    this.isLogged();
  }

  public facebookLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result)=>{
        console.log('Usuario logueado con facebook');
        this.router.navigate(['lugares']);
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    .then((response)=>{
      console.log('Usuario Loggueado con exito');
      console.log(response);
      this.router.navigate(['lugares']);
    })
    .catch((error)=>{
      console.log('Hubo un error');
      console.log(error);
    })
  }

  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response)=>{
        console.log('Usuario Registrado con exito');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch((error)=>{
        console.log('Hubo un error');
        console.log(error);
      })
  }

  public isLogged(){
    return this.angularFireAuth.authState;
  }
}