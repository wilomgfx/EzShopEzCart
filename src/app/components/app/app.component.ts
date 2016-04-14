import { Component }  from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS , Router} from 'angular2/router';
import {HomeComponent} from '../home/home.component';
import {ProductsComponent} from '../products/products.component';
import {ProductDetailComponent} from '../product/product.component';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/components/app/app.component.html',
  styleUrls : ['src/app/components/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ProductService
  ]
})

@RouteConfig([
        { path : '/',name : 'Home',component : HomeComponent,useAsDefault : true },
        { path: '/products',name: 'Products',component: ProductsComponent },
        { path: '/product/detail/:id',name: 'ProductDetail',component: ProductDetailComponent},
        // {
        //     path: '/about',
        //     name: 'About',
        //     component: AboutComponent
        // },
])

export class AppComponent {
  title = 'Yaecs - Yet an other e-commerce system!';
}
