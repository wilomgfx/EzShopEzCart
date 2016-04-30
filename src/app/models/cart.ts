import { CartItem } from './cartItem';
import { Product } from './product';
import { Logger } from '../helpers/Logger';
interface ICart {
  Id: number;
  cartItems:CartItem[];
}


export class Cart implements ICart{

    constructor(){
        this.cartItems = [];
    }
    Id:number;

    cartItems: CartItem[];

    private findCartItemById(id){

        var products = this.getProducts();

        for(var product of products){
            return product.Id === id;
        }
    }

    private findProductById(source, id) {
        return source.filter(function( obj ) {
            // coerce both obj.id and id to numbers
            // for val & type comparison
            return +obj.product.id === +id;
        })[ 0 ];
    }

    public getNumOfProducts(){
        return this.cartItems.length;
    }

    public addToCart(product:Product){
        var cartItem = this.findProductById(this.cartItems,product.id);
        if(cartItem){
            cartItem.qty++;
        }
        else{
            var newCartItem = new CartItem(product);
            this.cartItems.push(newCartItem);
        }
    }

    public removeOneFromCart(product:Product){
        var cartItem = this.findProductById(this.cartItems,product.id);
        if(cartItem){
            cartItem.qty--;
        }
    }

    public removeFromCart(product:Product){
        var cartItem = this.findProductById(this.cartItems,product.id);
        var index: number = this.cartItems.indexOf(cartItem, 0);
        this.cartItems.splice(index);
    }

    public getProducts(){
        var products = [];
        for(var cartItem of this.cartItems)
        {
            products.push(cartItem.product);
        }
        return products;
    }
    public getCartItems(){

        return this.cartItems;
    }
}
