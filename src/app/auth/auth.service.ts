import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { LoginForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  constructor(private router: Router) { }

  passwordMatched: boolean = true;

  isLoading: boolean = false;


  login(form: LoginForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password).then(
      (userCredentials) => {
        this.isAuthenticated = true;
        this.router.navigate([''])
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

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuthenticated = false;

    }).catch((error) => {

    })


  }

}
