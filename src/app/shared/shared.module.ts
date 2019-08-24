import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CardComponent } from './components/card/card.component';
import {
  SelectInputComponent
} from './components/select-input/select-input.component';
import { ProductFilterOptionPipe } from './pipes/product-filter-option.pipe';
import {
  FloatingButtonComponent
} from './components/floating-button/floating-button.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    CardComponent,
    SelectInputComponent,
    ProductFilterOptionPipe,
    FloatingButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    PaginatorComponent,
    CardComponent,
    SelectInputComponent,
    ProductFilterOptionPipe,
    FloatingButtonComponent,
  ]
})
export class SharedModule { }
