import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
showMore = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  next() {
    this.showMore = true;
  }
  prev() {
    this.showMore = false;
  }
  goToComponent(category){
    this.router.navigate(['/products',{category:category}]);
  }
}
