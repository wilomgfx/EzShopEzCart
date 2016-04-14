import {Product} from './product';
interface ICart {
  Id: number;
  products:Product[];
}


export class Cart implements ICart{

    constructor(){
        this.products = [];
    }
    public Id:number;

    public products: Product[];

    public getNumOfProducts(){
        return this.products.length;
    }

    public addToCart(product:Product){
        this.products.push(product);
    }

    public removeFromCart(product:Product){
        var index: number = this.products.indexOf(product, 0);
        this.products.splice(index);
    }

    public getProducts(){
        return this.products;
    }
}
