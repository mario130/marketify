import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  productsComponents = [
  {img:'../../../assets/images/image-component-table.webp',name:'Tables'},
  {img:'../../../assets/images/component-credenzas.webp',name:'Credenzas'},
  {img:'../../../assets/images/component-shelves.webp',name:'Shelves'},
  {img:'../../../assets/images/component-rugs-3.webp',name:'Rugs'},
  {img:'../../../assets/images/component-accessories-2.webp',name:'Accessories'}
];
sofaList = [
  {name:'Range 3-pice',price:1925,color:['#a3a2a1','#474543','#3a4b66'],img:['../../../assets/images/products/range-3-piece.webp','../../../assets/images/products/range-3-piece-2.webp',
  '../../../assets/images/products/range-3-piece-3.webp']},
  {name:'Nomad Sofa Sectional',price:1395,color:['#fff','#8b3b35','#a3a2a1','#3a4b66','#484543'],img:['../../../assets/images/products/Nomad-Sofa-Sectional.webp','../../../assets/images/products/Nomad-Sofa-Sectional-2.webp','../../../assets/images/products/Nomad-Sofa-Sectional-3.webp','../../../assets/images/products/Nomad-Sofa-Sectional-4.webp','../../../assets/images/products/Nomad-Sofa-Sectional-5.webp']},
  {name:'Nomad Sofa Sectional',price:1395,color:['#fff','#8b3b35','#a3a2a1','#3a4b66','#484543'],img:['../../../assets/images/products/Nomad-Sofa-Sectional.webp','../../../assets/images/products/Nomad-Sofa-Sectional-2.webp','../../../assets/images/products/Nomad-Sofa-Sectional-3.webp','../../../assets/images/products/Nomad-Sofa-Sectional-4.webp','../../../assets/images/products/Nomad-Sofa-Sectional-5.webp']},
  {name:'Nomad Sofa Sectional',price:1395,color:['#fff','#8b3b35','#a3a2a1','#3a4b66','#484543'],img:['../../../assets/images/products/Nomad-Sofa-Sectional.webp','../../../assets/images/products/Nomad-Sofa-Sectional-2.webp','../../../assets/images/products/Nomad-Sofa-Sectional-3.webp','../../../assets/images/products/Nomad-Sofa-Sectional-4.webp','../../../assets/images/products/Nomad-Sofa-Sectional-5.webp']},
  {name:'Nomad Sofa Sectional',price:1395,color:['#fff','#8b3b35','#a3a2a1','#3a4b66','#484543'],img:['../../../assets/images/products/Nomad-Sofa-Sectional.webp','../../../assets/images/products/Nomad-Sofa-Sectional-2.webp','../../../assets/images/products/Nomad-Sofa-Sectional-3.webp','../../../assets/images/products/Nomad-Sofa-Sectional-4.webp','../../../assets/images/products/Nomad-Sofa-Sectional-5.webp']}
]
showMore = false;
showMoreProduct = false;
isActive = 0;
  constructor() { }

  ngOnInit(): void {

  }

  next() {
    this.showMore = true;
  }
  prev() {
    this.showMore = false;
  }
  nextProduct(){
    this.showMoreProduct = true;
  }
  prevProduct(){
    this.showMoreProduct = false;
  }
  changeColor(colors,indexColor,indexSofa){
    for (var i = 0; i < colors.parentElement.children.length; i++){
      colors.parentElement.children[i].classList.remove('active')
    }
    let indexImg=this.sofaList[indexSofa].img[indexColor];
    colors.classList.add('active')
    colors.parentElement.previousElementSibling.setAttribute('src',indexImg)

  }
}
