import { Component , Directive } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { OnInit  } from 'angular2/core';
import { Product  } from '../../models/product';
import { CartItem  } from '../../models/CartItem';
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

    public cartItems: CartItem[];

    public noCartItems : boolean;

    constructor(private _cartService : CartService , private _router: Router)
    {
        this.cartItems = _cartService.getCartItems();
        this.noCartItems = (this.cartItems.length == 0);
    }

    public gotoDetail(product: Product) {
       var link = ['ProductDetail', { id: product.id }];
       this._router.navigate(link);
    }

    public addOneToCart(product:Product){
        this._cartService.addToCart(product);
    }

    public removeOneFromCart(product:Product){
        this._cartService.removeOneFromCart(product);
    }

    public removeFromCart(product:Product){
        this._cartService.removeFromCart(product);
    }

}
