import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {

  @Input() pro

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToItem(id:string){
    // this.router.navigate(['/id', {test: 'ab'}])
    this.router.navigate(['/product',{id: id}]);
  }
}
