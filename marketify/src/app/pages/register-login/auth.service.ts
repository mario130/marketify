import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/products';
import { environment } from 'src/environments/environment';
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

  constructor(private http: HttpClient) {
    this.autoRelog()
  }

  // user = new Subject<User>()
  user = new BehaviorSubject<User>(null)
  currentUser


  registerUser(fName: string, lName: string, email: string, pw: string){
    return this.http.post<IAuthResponse>(environment.apiUrl+'/auth/register', {
      firstName: fName,
      lastName: lName,
      email: email,
      password: pw
    }).pipe(tap(userData => {
      // console.log(userData)
      const user = new User(userData.user.email, userData.user._id, userData.user.token, userData.user.purchases)
      this.user.next(user)
      localStorage.setItem('marketify-user', JSON.stringify(user))
    }))
  }

  loginUser(email: string, pw: string){
    return this.http.post<IAuthResponse>(environment.apiUrl+'/auth/login', {
      email: email,
      password: pw
    }).pipe(tap(userData => {
      // console.log(userData);
      const user = new User(userData.user.email, userData.user._id, userData.user.token, userData.user.purchases)
      this.user.next(user)
      localStorage.setItem('marketify-user', JSON.stringify(user))
    }))
  }

  autoRelog(){
    this.currentUser = JSON.parse(localStorage.getItem('marketify-user'))
    if (!this.currentUser) return

    this.user.next(this.currentUser)
  }

  updatePurchasesForLoggedInUser(newPurchases){
    this.currentUser.purchases = newPurchases
    this.user.next(this.currentUser)
    localStorage.setItem('marketify-user', JSON.stringify(this.currentUser))
  }

  logout(){
    this.user.next(null)
    localStorage.removeItem('marketify-user')
  }
}
