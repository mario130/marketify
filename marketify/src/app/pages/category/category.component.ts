import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  productCategory;
  constructor(private activeCategory: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeCategory.paramMap.subscribe((params: ParamMap) => {
      this.productCategory = params.get('category');
    });
  }

  product = [
    {
      src:
        'https://media.graphcms.com/resize=w:2400,h:1350,fit:crop/output=format:webp/compress/zqYuieeRRa0k6hiuZL8r',
        name: 'Index Wall Shelf, Set of 4',
        price: 1300,
        price2: 109
    },
    {
      src:
        'https://media.graphcms.com/resize=w:2400,h:1350,fit:crop/output=format:webp/compress/zqYuieeRRa0k6hiuZL8r',
        name: 'Index Wall Shelf, Set of 4',
        price: 1300,
        price2: 109
    },
    {
      src:
        'https://media.graphcms.com/resize=w:2400,h:1350,fit:crop/output=format:webp/compress/zqYuieeRRa0k6hiuZL8r',
        name: 'Index Wall Shelf, Set of 4',
        price: 1300,
        price2: 109
    },
  ];
}
