import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    getSuggestions(query: string) : Observable<string[]> {
        let httpParams: HttpParams = new HttpParams();
        httpParams.set('query', query);
        return this.http.get<string[]>('get-products', {params: httpParams});
    }
}
