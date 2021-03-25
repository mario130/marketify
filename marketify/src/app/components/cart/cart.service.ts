import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart } from 'src/app/pages/register-login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  isShown = false
  isShownObs = new BehaviorSubject<boolean>(false);

  cart: ICart[] = []
  cartObs = new BehaviorSubject<ICart[]>(null)

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
}
