import { Component , Directive } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { OnInit  } from 'angular2/core';
import { Product  } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from 'angular2/common';
import { Router } from 'angular2/router';
import { Logger } from '../../helpers/logger';

@Component({
  selector: '[yaecs-cart]',
  templateUrl: 'src/app/components/cart/cart.component.html',
  pipes:[CurrencyPipe]
})

export class CartComponent {

    public products: Product[];

    public noProducts : boolean;

    constructor(private _cartService : CartService , private _router: Router)
    {
        this.products = _cartService.getProducts();
        this.noProducts = (this.products.length == 0);
    }

    gotoDetail(product: Product) {
       var link = ['ProductDetail', { id: product.Id }];
       this._router.navigate(link);
    }

}
