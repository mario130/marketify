import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IAuthResponse {
  _id?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(fName: string, lName: string, email: string, pw: string){
    return this.http.post<IAuthResponse>('https://marketify-backend.herokuapp.com/auth/register', {
      firstName: fName,
      lastName: lName,
      email: email,
      password: pw
    })
  }

  loginUser(email: string, pw: string){
    return this.http.post<IAuthResponse>('https://marketify-backend.herokuapp.com/auth/login', {
    // return this.http.post<IAuthResponse>('http://localhost:4001/auth/login', {
      email: email,
      password: pw
    })
  }
}
