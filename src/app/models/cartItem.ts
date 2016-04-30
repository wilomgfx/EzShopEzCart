import {Product} from './product';
interface ICartItem {
  qty:number;
  product:Product;
}

export class CartItem implements ICartItem{

    constructor(product: Product){
        this.product = product;
        this.qty = 1;
    }

    public qty:number;

    public product:Product;
}
