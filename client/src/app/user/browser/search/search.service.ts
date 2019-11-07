import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutes } from 'src/app/config/api-routes';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    getSuggestions(query: string) : Observable<string[]> {
        return this.http.get<string[]>(ApiRoutes.getBaseUrl() +'search-products-name/'+query);
    }
}
