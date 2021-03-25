import { Component, OnInit } from '@angular/core';
import { AuthService, ICart } from 'src/app/pages/register-login/auth.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  isShown;
  cart: ICart[];

  constructor(private cartS: CartService, private authS: AuthService) { }

  ngOnInit(): void {
    this.cartS.isShownObs.subscribe(newState => this.isShown = newState)
    this.authS.cartObs.subscribe(newCart => this.cart = newCart)
  }

}
