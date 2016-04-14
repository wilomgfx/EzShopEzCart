import {Injectable} from 'angular2/core';
import {PRODUCTS} from '../models/mock-product';

@Injectable()
export class ProductService {
    getProducts() {
        return Promise.resolve(PRODUCTS);
    }
    getProduct(Id: number) {
        return Promise.resolve(PRODUCTS).then(
            heroes => heroes.filter(apparel => apparel.Id === Id)[0]
        );
    }

}
