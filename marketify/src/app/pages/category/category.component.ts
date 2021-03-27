import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/pages/product/product.service';
import { IProduct } from 'src/app/shared/products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  productCategory: string;
  productCategoryDescription: string;
  productsToDisplay: IProduct[];
  isLoading = true;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.productCategory = params.get('category');
    });
    this.onChangeCategory()

    this.activeRoute.params.subscribe( // detect nb change
      (params2: Params) => {
        this.productCategory = params2['category'];
          this.onChangeCategory()
      }
    )
  }
  onChangeCategory(){
    switch (this.productCategory) {
      case 'Tables and Sofas':
        this.productCategoryDescription = 'Our coffee tables, side tables, and benches — across four stylistic collections — are designed to complement our award-winning seating. Whether you’re looking for a functional coffee table with storage or a timeless mid-century Modern design, our edited selection represents the best of furniture design.'
        break;

      case 'Shelves and Storage':
      case 'Credenzas':
        this.productCategoryDescription = 'Modern living demands more out of our spaces — or sometimes, just more space. Which is why a little storage ingenuity goes a long way. From our stylish Index wall shelving system to our versatile credenzas, we’re always figuring out how to design beautiful, useful ways to keep everything in its place.'
        break;

      case 'Rugs':
        this.productCategoryDescription = 'Our curated rug collection is made to simplify the experience of choosing a rug. Each one features unique characteristics tailored to diverse lifestyles, from low-maintenance foundations to fashion-forward statements.'
        break;

      case 'Accessories':
        this.productCategoryDescription = 'Enjoy our latest accessories now!'
        break;

      case 'Lighting':
        this.productCategoryDescription = 'Each of these professionally-picked lighting options is the perfect complement to our furniture: they\'re beautiful, functional, and they come with the same fast, free shipping promise we make on every order.'
        break;
    }
    this.productService.fetchProds()
    this.productService.productsFetched.subscribe(
      (allProds: IProduct[]) => {
        this.productsToDisplay = allProds.filter(prod => prod.category === this.productCategory)
        this.isLoading = false
      }
    )
  }

  callToAction(){
    this.router.navigate(['/category',{category:'Tables and Sofas'}]);
  }
}
