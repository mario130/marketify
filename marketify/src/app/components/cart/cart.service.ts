import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ICart } from 'src/app/pages/register-login/auth.service';
import { environment } from 'src/environments/environment';

interface IPurchaseResponse {
  status: string,
  purchases: ICart[]
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  isShown = false
  isShownObs = new BehaviorSubject<boolean>(false);

  cart: ICart[] = []
  cartObs = new BehaviorSubject<ICart[]>(null);

  toggleCart(){
    this.isShown = !this.isShown
    this.isShownObs.next(this.isShown)
  }

  addItemToCart(item){
    this.cart.push({
      name: item.name,
      price: item.price
    })
    this.cartObs.next(this.cart)
  }
  removeLastItem(){
    this.cart.pop()
    this.cartObs.next(this.cart)
  }

  purchase(email: string){
    console.log('purchasing..');
    console.log(this.cart);
    this.http.post<IPurchaseResponse>(environment.apiUrl+'/api/users/purchase', {
      itemsToPurchase: this.cart,
      email
    }).subscribe(resp => {
      console.log(resp);
      this.cart = []
      this.cartObs.next(this.cart)
    })
  }
}
