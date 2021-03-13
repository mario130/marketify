import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/shared/products';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-dashboard-add-product',
  templateUrl: './dashboard-add-product.component.html',
  styleUrls: ['./dashboard-add-product.component.scss']
})
export class DashboardAddProductComponent implements OnInit {

  allProducts: IProduct[]

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.fetchProds()
    this.productService.productsFetched.subscribe(
      (allProds: IProduct[]) => {
        this.allProducts = allProds
      }
    )
  }


  addProductForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    category:['',[Validators.required]],
    type:['',[Validators.required]],
    price:['',[Validators.required]],

    variations:this.fb.array([]),

    description: this.fb.group({
      title: [''],
      body: ['']
    }),

    features: this.fb.array([]),
  });

  get variations(){
    return this.addProductForm.get('variations') as FormArray;
  }
  get features(){
    return this.addProductForm.get('features') as FormArray;
  }
  addAnotherVariation(){
    this.variations.push(this.fb.group({
      color: '',
      imageUrl: ''
    }))
  }
  addAnotherFeature(){
    this.features.push(this.fb.group({
      title: '',
      description: '',
      imageUrl: '',
    }))
  }
  removeVariation(i){
    this.variations.removeAt(i);
  }
  removeFeature(i){
    this.features.removeAt(i);
  }
  saveProduct(){
    console.log(this.addProductForm.value);
  }
}
