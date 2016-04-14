import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import {OnInit} from 'angular2/core';
import {Product} from '../../models/apparel';
import {ProductService} from '../../services/product.service';
import {CurrencyPipe} from 'angular2/common';

@Component({
  selector: 'yaecs-products',
  templateUrl: 'src/app/components/products/products.component.html',
  styleUrls:['src/app/components/products/products.component.css'],
  pipes:[CurrencyPipe]
})

export class ProductsComponent  implements OnInit {

     public products: Product[];

     selectedApparel: Product;

     onSelect(product: Product) {
       this.selectedApparel = product;
     }

     constructor(private _roductService: ProductService,private _router: Router) { }

     getApparels() {
       // => syntax is equivalent to function(heroes) return this.heroes
       this._roductService.getProducts().then(apparels => this.products = apparels);
     }

     ngOnInit() {
       this.getApparels();
     }

     gotoDetail(product: Product) {
       var link = ['ProductDetail', { id: product.Id }];
       this._router.navigate(link);
   }
}
