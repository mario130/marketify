import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';

interface IAuthResponse {
  user?:{
    _id: string,
    email: string,
    token: string,
    purchases: [{name: string, price: number}]
  }
}
export interface ICart {
  name: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // user = new Subject<User>()
  user = new BehaviorSubject<User>(null)


  registerUser(fName: string, lName: string, email: string, pw: string){
    // return this.http.post<IAuthResponse>('https://marketify-backend.herokuapp.com/auth/register', {
      return this.http.post<IAuthResponse>('http://localhost:4001/auth/register', {
      firstName: fName,
      lastName: lName,
      email: email,
      password: pw
    }).pipe(tap(userData => {
      // console.log(userData)
      const user = new User(userData.user.email, userData.user._id, userData.user.token, userData.user.purchases)
      this.user.next(user)
    }))
  }

  loginUser(email: string, pw: string){
    // return this.http.post<IAuthResponse>('https://marketify-backend.herokuapp.com/auth/login', {
    return this.http.post<IAuthResponse>('http://localhost:4001/auth/login', {
      email: email,
      password: pw
    }).pipe(tap(userData => {
      // console.log(userData);
      const user = new User(userData.user.email, userData.user._id, userData.user.token, userData.user.purchases)
      this.user.next(user)
    }))
  }

  logout(){
    this.user.next(null)
  }
}
