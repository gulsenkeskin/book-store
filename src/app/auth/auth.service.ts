import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  constructor() { }


  isLoading: boolean = false;


  login(form: LoginForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password).then(
      (userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        alert("Login Successful");
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    }).finally(() => (this.isLoading = false))
  }

  register(form: LoginForm) {
    this.isLoading = true;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password).then(
      (userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    }).finally(() => this.isLoading = false)


  }

}
