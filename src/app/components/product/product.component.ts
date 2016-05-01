import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {OnInit} from 'angular2/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';
import {CurrencyPipe} from 'angular2/common';

@Component({
  selector: 'yaecs-product-detail',
  templateUrl: 'src/app/components/product/product.component.html',
  pipes:[CurrencyPipe],
  inputs: ['product']
})

export class ProductDetailComponent  implements OnInit {

    constructor(private _productService: ProductService,
      private _routeParams: RouteParams , private _cartService : CartService) {

    }

    product: Product;

    ngOnInit() {
    var id = +this._routeParams.get('id');
    this._productService.getProduct(id)
      .then(product => this.product = product);
    }

    goBack() {
      window.history.back();
    }
    
    addToCart(product: Product){
      this._cartService.addToCart(product);
    }
}
