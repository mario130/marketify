import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/components/cart/cart.service';
import { IProduct } from 'src/app/shared/products';
import { AuthService, ICart } from '../register-login/auth.service';
import { User } from '../register-login/user.model';
import { ProductService } from './product.service';
declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodId: string;
  currentProduct: IProduct;
  user: User
  isAlreadyInCart = false

  constructor(private activeRoute: ActivatedRoute, private prodService: ProductService, private authService: AuthService, private cartS: CartService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.prodId = params.get('id')
    })
    // console.log(this.prodId);
    this.prodService.productsFetched.subscribe(
      (allProds: IProduct[]) => {
        this.currentProduct = allProds.find(prod => prod._id === this.prodId)
      }
      )
      this.prodService.fetchProds()
    this.authService.user.subscribe(newUser => this.user = newUser);

  }

  addToCart = (prod: IProduct) => {
    $('.toast').toast('show')
    this.cartS.addItemToCart(prod)
    console.log(this.cartS.cart);
    this.isAlreadyInCart = true
  }
  removeFromCart(){
    this.cartS.removeLastItem()
    this.isAlreadyInCart = false
  }
}
