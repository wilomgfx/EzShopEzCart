import {CartItem} from './cartItem';
import {Product} from './product';
interface ICart {
  Id: number;
  CartItems:CartItem[];
}


export class Cart implements ICart{

    constructor(){
        this.CartItems = [];
    }
    public Id:number;

    public CartItems: CartItem[];

    public getNumOfProducts(){
        return this.CartItems.length;
    }

    public addToCart(product:Product){
        var cartItem = new CartItem(product);
        this.CartItems.push(cartItem);
    }

    public removeFromCart(product:Product){
        var cartItem = new CartItem(product);
        var index: number = this.CartItems.indexOf(cartItem, 0);
        this.CartItems.splice(index);
    }

    public getProducts(){
        var products = [];
        for(var cartItem of this.CartItems)
        {
            products.push(cartItem.Product);
        }
        return products;
    }
}
