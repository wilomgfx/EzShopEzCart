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

    public getCartItems() {
        return this.cart.getCartItems();
    }

    public getNumOfProducts(){
        return this.cart.getNumOfProducts();
    }

    /**
     * Adds to cart if the product is present in the cart already, adds 1 to quantity if already present
     * @param  {Product} product product to add
     */
    public addToCart(product:Product){
        this.cart.addToCart(product);
    }

    /**
     * Removes one from the quantity of the product from the cart
     * @param  {Product} product product to remove quantity
     */
    public removeOneFromCart(product:Product){
        this.cart.removeOneFromCart(product);
    }

    /**
     * Removes the product from the cart
     * @param  {Product} product product to remove quantity
     */
    public removeFromCart(product:Product){
        this.cart.removeFromCart(product);
    }
}
