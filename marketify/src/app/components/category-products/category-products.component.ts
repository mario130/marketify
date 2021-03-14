import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {

  @Input() pro

  constructor() { }

  ngOnInit(): void {
  }

}
