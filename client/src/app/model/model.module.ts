import { NgModule } from '@angular/core';
import { Customer } from './customer.model';
import { Product } from './product.model';
import { Tenant } from './tenant.model';
import { InvoiceItem } from './invoice-item.model';
import { Invoice } from './invoice.model';

@NgModule({
    declarations: [
        Customer,
        Product,
        Tenant,
        InvoiceItem,
        Invoice
    ]
})
export class ModelModule {

}