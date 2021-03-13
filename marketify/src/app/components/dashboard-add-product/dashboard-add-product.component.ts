import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-add-product',
  templateUrl: './dashboard-add-product.component.html',
  styleUrls: ['./dashboard-add-product.component.scss']
})
export class DashboardAddProductComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  addProductForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    category:['',[Validators.required]],
    type:['',[Validators.required]],
    price:['',[Validators.required]],

    variations:this.fb.group({
      color:[''],
      imageUrl:[''],
    }),

    otherVariations: this.fb.array([]),

    description: this.fb.group({
      title: [''],
      body: ['']
    }),

    features: this.fb.group({
      title:[''] ,
      description:[''] ,
      imageUrl:['']
    }),

    otherFeatures: this.fb.array([])
  });

  get otherVariations(){
    return this.addProductForm.get('otherVariations') as FormArray;
  }
  get otherFeatures(){
    return this.addProductForm.get('otherFeatures') as FormArray;
  }
  addAnotherVariation(){
    this.otherVariations.push(this.fb.group({
      color: '',
      imageUrl: ''
    }))
  }
  addAnotherFeature(){
    this.otherFeatures.push(this.fb.group({
      title: '',
      description: '',
      imageUrl: '',
    }))
  }
  removeVariation(i){
    this.otherVariations.removeAt(i);
  }
  removeFeature(i){
    this.otherFeatures.removeAt(i);
  }
  saveProduct(){
    console.log(this.addProductForm.value);
  }
}
