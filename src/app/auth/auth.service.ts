import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  constructor() { }

  passwordMatched: boolean = true;

  isLoading: boolean = false;


  login(form: LoginForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password).then(
      (userCredentials) => {
        this.isAuthenticated = true;
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isAuthenticated = false;

    }).finally(() => (this.isLoading = false))
  }

  register(form: LoginForm) {
    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }
    this.isLoading = true;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password).then(
      (userCredentials) => {
        this.isAuthenticated = true;
        const user = userCredentials.user;
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isAuthenticated = false;

    }).finally(() => this.isLoading = false)


  }

}
