import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { ApiRoutes } from 'src/app/config/api-routes';

@Injectable()
export class CreateProductService {
    constructor(private http: HttpClient) { }

    createProduct(producto: Product) : string {
        let id: string = "-1";
        this.http.post(ApiRoutes.getBaseUrl() + 'create-product', producto)
            .subscribe( val => id = <string> val, response => {
                id = response
            });
        return id;
    }
}