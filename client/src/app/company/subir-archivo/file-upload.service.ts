import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiRoutes } from 'src/app/config/api-routes';

@Injectable()
export class FileUploadService {

    constructor(private http: HttpClient) { }

    performUpload(formData: FormData) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let httpOptions = {
            headers: headers
        }
        return this.http.post(ApiRoutes.getBaseUrl() + 'fileUpload', formData, httpOptions);
    }
}