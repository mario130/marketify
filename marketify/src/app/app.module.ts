import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageProductComponent } from './components/homepage-product/homepage-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardAddProductComponent } from './components/dashboard-add-product/dashboard-add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { RegisterLoginComponent } from './pages/register-login/register-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    HomepageProductComponent,
    FooterComponent,
    DashboardAddProductComponent,
    CategoryComponent,
    CategoryProductsComponent,
    RegisterLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
