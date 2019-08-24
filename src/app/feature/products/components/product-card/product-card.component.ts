import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@core/models';
import { LocalDataService } from '@core/services/local-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor(
    private localDataService: LocalDataService,
  ) { }

  ngOnInit() {
  }

  toggleFav() {
    this.product.fav = !this.product.fav;
    if (this.product.fav) {
      this.localDataService.addLocalFavs(this.product.id);
    } else {
      this.localDataService.removeLocalFav(this.product.id);
    }
  }

  get ratingDescription() {
    return `${this.product.rating} (${this.product.votes})`;
  }

}
