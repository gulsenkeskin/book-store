import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isLoading: boolean = false;


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
    this.authService.register(this.form);

  }

}
