import { Tenant } from './tenant.model';

export class Customer {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public tenant?: Tenant
    ) { }
}