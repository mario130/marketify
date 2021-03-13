import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from 'src/app/shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsFetched = new Subject();
  allProducts: IProduct[]

  private url = 'https://marketify-backend.herokuapp.com/api/'

  constructor(private http:HttpClient) { }

  fetchProds(){
    this.http.get<{message: string, products: IProduct[]}>(this.url+'products').subscribe(
      (resp)=> {
        this.allProducts = resp.products
        this.productsFetched.next(this.allProducts)
      }
    )
  }

}
