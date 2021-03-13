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
    this.http.get(this.url+'products').subscribe(
      (resp)=> {
        this.allProducts = resp
        this.productsFetched.next(this.allProducts)
        resp.allProds.forEach((categ, i) => { // Get categories dynamically
          this.CategoryList.push({
            id: i+1,
            name: categ.categ
          })
        })
      }
    )
  }

}
