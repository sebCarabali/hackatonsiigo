import { Tenant } from './tenant.model';

export class Product {
    constructor(
        public id?: number,
        public tenant?: Tenant,
        public name?: string,
        public description?: string,
        public listPrice?: number
    ) { }
}