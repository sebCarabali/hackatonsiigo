import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubirArchivoComponent } from './company/subir-archivo/subir-archivo.component';
import { CrearProductoComponent } from './company/crear-producto/crear-producto.component';

const routes: Routes = [
  { path: '', component: SubirArchivoComponent },
  { path: 'company/create-product', component: CrearProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
