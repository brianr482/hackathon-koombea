import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ProductsPageComponent
} from './page/products-page/products-page.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
