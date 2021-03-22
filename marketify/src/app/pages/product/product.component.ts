import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from 'src/app/shared/products';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodId: string;
  currentProduct: IProduct;

  constructor(private activeRoute: ActivatedRoute, private prodService: ProductService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.prodId = params.get('id')
    })
    console.log(this.prodId);
    this.prodService.productsFetched.subscribe(
      (allProds: IProduct[]) => {
        this.currentProduct = allProds.find(prod => prod._id === this.prodId)
      }
      )
      this.prodService.fetchProds()
  }

}
