import { Customer } from './customer.model';
import { InvoiceItem } from './invoice-item.model';
import { Tenant } from './tenant.model';

export class Invoice {
    constructor(
        public tenant?: Tenant,
        public customent?: Customer,
        public docDate?: Date,
        public docNumber?: number,
        public totalDiscount?: number,
        public totalTax?: number,
        public totalValue?: number,
        public invoiceItems?: InvoiceItem[]
    ) { }
}