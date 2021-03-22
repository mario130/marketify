import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  productsComponents = [
  {img:'../../../assets/images/image-component-table.webp',name:'Tables and Sofas'},
  {img:'../../../assets/images/component-credenzas.webp',name:'Credenzas'},
  {img:'../../../assets/images/component-shelves.webp',name:'Shelves and Storage'},
  {img:'../../../assets/images/component-rugs-3.webp',name:'Rugs'},
  {img:'../../../assets/images/component-accessories-2.webp',name:'Accessories'}
];
showMore = false;
  constructor() { }

  ngOnInit(): void {

  }

  next() {
    this.showMore = true;
  }
  prev() {
    this.showMore = false;
  }
}
