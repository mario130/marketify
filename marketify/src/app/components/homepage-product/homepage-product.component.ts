import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-product',
  templateUrl: './homepage-product.component.html',
  styleUrls: ['./homepage-product.component.scss']
})
export class HomepageProductComponent implements OnInit {

  @Input() component;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToComponent(category){
    this.router.navigate(['/category',{category:category}]);
  }

}
