import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {
  ProductsPageComponent
} from './page/products-page/products-page.component';
import {
  ProductCardComponent
} from './components/product-card/product-card.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductCardComponent,
  ],
  imports: [
    ProductsRoutingModule,
    SharedModule,
  ]
})
export class ProductsModule { }
