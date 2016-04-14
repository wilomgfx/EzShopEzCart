import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {OnInit} from 'angular2/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {CurrencyPipe} from 'angular2/common';

@Component({
  selector: 'yaecs-product-detail',
  templateUrl: 'src/app/components/product/product.component.html',
  styleUrls:['src/app/components/product/product.component.css'],
  pipes:[CurrencyPipe],
  inputs: ['apparel']
})

export class ProductDetailComponent  implements OnInit {

  constructor(private _productService: ProductService,
      private _routeParams: RouteParams) {

  }
  product: Product;
  ngOnInit() {
    var id = +this._routeParams.get('id');
    this._productService.getProduct(id)
      .then(apparel => this.product = apparel);
  }
  goBack() {
      window.history.back();
  }
}
