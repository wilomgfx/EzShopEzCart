import {Injectable} from 'angular2/core';
import {Cart} from '../models/cart';
import {Product} from '../models/product';
import {Logger} from '../helpers/logger';

@Injectable()
export class CartService {
    cart = new Cart();
    public getProducts() {
        return this.cart.getProducts();
    }

    public getNumOfProducts(){
        return this.cart.getNumOfProducts();
    }

    public addToCart(product:Product){
        this.cart.addToCart(product);
        Logger.log(this.getNumOfProducts());
    }

}
