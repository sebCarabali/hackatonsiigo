import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserComponent } from './user/browser/browser.component';
import { CreateProductComponent } from './company/create-product/create-product.component';
import { FileUploadComponent } from './company/file-upload/file-upload.component';

const routes: Routes = [
  { path: '', component: BrowserComponent},
  { path: 'company/file-upload', component: FileUploadComponent },
  { path: 'company/create-product', component: CreateProductComponent },
  { path: 'user/search', component: BrowserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
