import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }


  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: ''

  }

  ngOnInit(): void {
  }
  passwordMatched: boolean = true;

  submit(): void {
    if (this.form.password !== this.form.confirm_password) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password).then(
      (userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })


  }

}
