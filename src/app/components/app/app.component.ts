import {Component}  from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS , Router} from 'angular2/router';
import {HomeComponent} from '../home/home.component';
import {ProductsComponent} from '../products/products.component';
import {ProductDetailComponent} from '../product/product.component';
import {CartComponent} from '../cart/cart.component';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';
import {Cart} from '../../models/cart';
import {Product} from '../../models/Product';
import {Logger} from '../../helpers/logger';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/components/app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ProductService,
    CartService
  ]
})

@RouteConfig([
        { path : '/',name : 'Home',component : HomeComponent,useAsDefault : true },
        { path: '/products',name: 'Products',component: ProductsComponent },
        { path: '/product/detail/:id',name: 'ProductDetail',component: ProductDetailComponent},
        { path: '/cart',name: 'Cart',component: CartComponent},
        // {
        //     path: '/about',
        //     name: 'About',
        //     component: AboutComponent
        // },
])

export class AppComponent {

    constructor(public cartService : CartService, private _router: Router){ }

    public products: Product[];
    public showCart(){
        this.products = this.cartService.getProducts();
        this._router.navigateByUrl('/cart');
    }

    public title = 'Yaecs - Yet an other e-commerce system!';
}
