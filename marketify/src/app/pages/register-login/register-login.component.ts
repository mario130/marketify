import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  errorMsgRegister: string;
  errorMsgLogin: string;

  ngOnInit(): void {
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
    }, err => {
      this.errorMsgRegister = err.error.text
    })
  }

  loginUser(loginForm: NgForm){
    const email = loginForm.value.emailLogin
    const password = loginForm.value.pwLogin

    this.authService.loginUser(email, password).subscribe(res => {
      console.log(res);
      // loginForm.reset()
    }, err => {
      console.log(err);
      this.errorMsgLogin = err.error?.error
    })
  }
}
