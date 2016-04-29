import {Product} from './product';
interface ICartItem {
  Qty:number;
  Product:Product;
}
export class CartItem implements ICartItem{

    constructor(product: Product){
        this.Product = product;
        this.Qty = this.Qty++;
    }

    public Qty:number;

    public Product:Product;
}
