import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from 'src/app/shared/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsFetched = new Subject();
  allProducts: IProduct[]

  private url = environment.apiUrl+'/api/products'

  constructor(private http:HttpClient) { }

  fetchProds(){
    this.http.get<{message: string, products: IProduct[]}>(this.url).subscribe(
      (resp)=> {
        this.allProducts = resp.products
        this.productsFetched.next(this.allProducts)
      }
    )
  }

  addProduct(newProd){
    this.http.post(this.url+'/create', newProd).subscribe(
      (response)=>{
        console.log(response);
        this.allProducts.push(newProd)
        this.productsFetched.next(this.allProducts)
      }
    )
  }

  deleteProduct(product){
    this.http.delete(`${this.url}/${product._id}/delete`).subscribe(
      (response)=>{
        console.log(response);
        this.allProducts = this.allProducts.filter(
          item => item !== product
        )
        this.productsFetched.next(this.allProducts)
      }
    )
  }

}
