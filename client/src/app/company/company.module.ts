import { NgModule } from "@angular/core";
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';
import { FileUploadService } from './subir-archivo/file-upload.service';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

@NgModule({
    declarations: [SubirArchivoComponent, CrearProductoComponent],
    exports: [SubirArchivoComponent],
    providers: [FileUploadService]
})
export class CompanyModule { }