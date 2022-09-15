import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';

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

  }

}
