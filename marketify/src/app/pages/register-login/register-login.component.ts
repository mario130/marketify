import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  user: User

  constructor(private authService: AuthService, private location: Location) { }

  errorMsgRegister: string;
  errorMsgLogin: string;

  ngOnInit(): void {
    this.authService.user.subscribe(newUser => this.user = newUser)
  }

  registerUser(registerForm: NgForm){

    const fName = registerForm.value.fName
    const lName = registerForm.value.lName
    const email = registerForm.value.email
    const pw = registerForm.value.pw

    this.authService.registerUser(
      fName,
      lName,
      email,
      pw
    ).subscribe(resp => {
      console.log(resp)
      registerForm.reset()
      this.location.back()
    }, err => {
      console.log(err);
      this.errorMsgRegister = err.error?.text
    })
  }

  loginUser(loginForm: NgForm){
    const email = loginForm.value.emailLogin
    const password = loginForm.value.pwLogin

    this.authService.loginUser(email, password).subscribe(res => {
      console.log(res);
      loginForm.reset()
      this.location.back()
    }, err => {
      console.log(err);
      this.errorMsgLogin = err.error?.error
    })
  }
}
