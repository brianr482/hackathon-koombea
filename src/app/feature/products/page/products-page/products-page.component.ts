import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Paginator } from '@shared/models';
import { Product } from '@core/models';
import { Filter } from '@shared/models/filter';
import { ProductFilterOption } from '@core/enums';
import { LocalDataService } from '@core/services/local-data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})

export class ProductsPageComponent implements OnInit {
  public isLoading: boolean;
  public filter: Filter = {
    current: null,
    options: [...Object.values(ProductFilterOption), null],
  };
  public paginator: Paginator = {
    index: 1,
    isLastPage: false,
    total: 10,
  };
  public products: Product[];
  constructor(
    private productsService: ProductsService,
    private localDataService: LocalDataService,
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.isLoading = true;
    let sortBy: string;
    if (this.filter.current) {
      sortBy = this.filter.current;
    }
    this.productsService.get(this.paginator.index, sortBy).subscribe(
      (res: any) => {
        this.products = res.items;
        this.syncFavProp();
        this.isLoading = false;
        console.log('FETCHING PRODUCTS', res);
      },
      err => {
        this.isLoading = false;
        console.log('ERROR', err);
      }
    );
  }

  onPageChange() {
    this.fetch();
  }

  onOptionChange(option: ProductFilterOption) {
    this.filter.current = option;
    this.fetch();
  }

  private syncFavProp() {
    this.products.forEach(product => {
      const localProduct = this.localDataService.localFavs
        .find(id => id === product.id);
      if (localProduct) {
        product.fav = true;
      }
    });
  }
}
