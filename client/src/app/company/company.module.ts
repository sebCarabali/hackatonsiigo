import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';
import { FileUploadService } from './subir-archivo/file-upload.service';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { CrearProductoService } from './crear-producto/crear-producto.service';

@NgModule({
    imports: [FormsModule],
    declarations: [SubirArchivoComponent, CrearProductoComponent],
    exports: [SubirArchivoComponent, CrearProductoComponent],
    providers: [FileUploadService, CrearProductoService]
})
export class CompanyModule { }