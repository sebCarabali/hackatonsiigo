import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { ApiRoutes } from 'src/app/config/api-routes';
import { Observable } from 'rxjs';

@Injectable()
export class CreateProductService {
    constructor(private http: HttpClient) { }

    createProduct(producto: Product) : Observable<string> {
        return this.http.post<string>(ApiRoutes.getBaseUrl() + 'create-product', producto);
    }
}