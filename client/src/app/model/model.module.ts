import { NgModule } from '@angular/core';
import { Customer } from './customer.model';
import { Product } from './product.model';
import { Tenant } from './tenant.model';

@NgModule({
    declarations: [
        Customer,
        Tenant,
        Product
    ]
})
export class ModelModule {

}