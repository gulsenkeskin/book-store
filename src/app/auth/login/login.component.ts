import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  form: LoginForm = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  submit(): void {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password).then(
      (userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        alert("Login Successful");
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })

  }

}
