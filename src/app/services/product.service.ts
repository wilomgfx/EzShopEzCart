import {Injectable} from 'angular2/core';
import {PRODUCTS} from '../models/mock-product';

@Injectable()
export class ProductService {
    getProducts() {
        return Promise.resolve(PRODUCTS);
    }
    getProduct(id: number) {
        return Promise.resolve(PRODUCTS).then(
            products => products.filter(product => product.id === id)[0]
        );
    }

}
