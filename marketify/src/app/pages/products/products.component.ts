import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productCategory;
  constructor(private activeCategory:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeCategory.paramMap.subscribe((params: ParamMap) => {
      this.productCategory = params.get('category')
    })
  }

}
