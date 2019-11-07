import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubirArchivoComponent } from './company/subir-archivo/subir-archivo.component';

const routes: Routes = [
  { path: '', component: SubirArchivoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
