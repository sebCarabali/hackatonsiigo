import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FileUploadService } from './file-upload/file-upload.service';
import { CreateProductService } from './create-product/create-product.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
    imports: [FormsModule],
    declarations: [FileUploadComponent, CreateProductComponent],
    exports: [FileUploadComponent , CreateProductComponent],
    providers: [FileUploadService, CreateProductService]
})
export class CompanyModule { }