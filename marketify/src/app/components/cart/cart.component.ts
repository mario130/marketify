import { Component, OnInit } from '@angular/core';
import { AuthService, ICart } from 'src/app/pages/register-login/auth.service';
import { User } from 'src/app/pages/register-login/user.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  isShown: boolean;
  cart: ICart[];
  user: User;
  pastPurchases: ICart[];

  constructor(private cartS: CartService, private authS: AuthService) { }

  ngOnInit(): void {
    this.cartS.isShownObs.subscribe(newState => this.isShown = newState)
    this.cartS.cartObs.subscribe(newCart => this.cart = newCart)
    this.authS.user.subscribe(newUser => {
      this.user = newUser
      this.pastPurchases = this.user?.purchases
    })
  }

  purchase(){
    console.log(this.cart);
    this.pastPurchases = this.pastPurchases.concat(this.cart)
    this.cartS.purchase(this.user.email)
    this.authS.updatePurchasesForLoggedInUser(this.pastPurchases)
  }
}
