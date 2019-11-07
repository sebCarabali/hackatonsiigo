import { Invoice } from './invoice.model';
import { Product } from './product.model';
import { Tenant } from './tenant.model';

export class InvoiceItem {
    constructor (
        public invoice?: Invoice,
        public product?: Product,
        public tenant?: Tenant,
        public quantity?: number,
        public unitValue?: number,
        public itemValue?: number
    ) {}
}