import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/register-login/auth.service';
import { User } from 'src/app/pages/register-login/user.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router, private authService: AuthService, private cartS: CartService) {}

  isMobileNavOpen: boolean = false;
  user: User

  ngOnInit(): void {
    this.authService.user.subscribe(newUser => this.user = newUser)
  }


  onOpenCloseNav() {
    this.closeCart()
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  goToComponent(category){
    this.closeCart()
    this.isMobileNavOpen = false
    this.router.navigate(['/category',{category:category}]);
  }
  goHome(){
    this.closeCart()
    this.router.navigate(['/homepage']);
  }

  login(){
    this.closeCart()
    this.router.navigate(['/login']);
  }

  logout(){
    this.closeCart()
    this.authService.logout()
  }

  toggleCart(){
    this.cartS.toggleCart()
  }

  closeCart(){
    if (this.cartS.isShown === true){
      this.cartS.toggleCart()
    }
  }
}
