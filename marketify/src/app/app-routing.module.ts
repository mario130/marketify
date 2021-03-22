import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path:'category',component:CategoryComponent},
  {path: 'product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
