import { Pipe, PipeTransform } from '@angular/core';
import { ProductFilterOption } from '@core/enums';

@Pipe({
  name: 'productFilterOption'
})
export class ProductFilterOptionPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case ProductFilterOption.city:
        return 'ciudad';
      case ProductFilterOption.name:
        return 'nombre';
      case ProductFilterOption.votes:
        return 'votos';
      default:
        return value;
    }
  }
}
