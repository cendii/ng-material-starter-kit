import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import {CategoriesListComponent} from "./components/categories-list/categories-list.component";
import {CategoriesServiceModule} from "./services/categories.service-module";
import {CategoriesListComponentModule} from "./components/categories-list/categories-list.component-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoriesListComponent}]),
    ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
