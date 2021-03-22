import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router) {}
  ngOnInit(): void {}

  isMobileNavOpen: boolean = false;

  onOpenCloseNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  goToComponent(category){
    this.router.navigate(['/category',{category:category}]);
  }
  goHome(){
    this.router.navigate(['/homepage']);
  }
}
